(ns teacherguild.db
  (:require [cljs.core.async :as async :refer [chan <! >! put!]]
            [ajax.core :as ajax :refer [GET POST PUT POST]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def db-host "http://couch.db")
(def api-host "http://teacherguild.core/api")

(defn get-db-data [href processf]
  (let [ret (chan)
        handler (comp #(put! ret %) processf)]
    (GET (str db-host href)
         {:with-credentials true
          :response-format (ajax/json-response-format {:keywords? true})
          :handler handler})
    ret))

(defn get-api-data [endpoint processf]
  (let [ret (chan)
        handler (comp #(put! ret %) processf)]
    (GET (str api-host endpoint)
         {:with-credentials true
          ;; :response-format (ajax/json-response-format {:keywords? true})
          :handler handler})
    ret))
;; (get-db-data "" #(let [] (.dir js/console (str %)) %))
;; TODO: correct processf!
(defn get-view [db design view processf]
  (get-db-data
   (str "/" db "/_design/" design "/_view/" view)
   processf))

(defn get-subjects []
  (get-api-data "/subjects" identity))

(defn vec-to-map
  ([v k] (vec-to-map v k {}))
  ([v k m]
   (if (first v)
     (vec-to-map
      (rest v) k
      (assoc m (get (first v) k) (first v)))
     m)))

(defn get-subjects-by-name []
  (get-view "subjects" "subjects" "by-name"
            #(vec-to-map
               (get-in % [:rows 0 :value]) :name)))

(defn get-cities []
  (get-view "cities" "all-cities" "by-priority"
            #(get-in % [:rows 0 :value])))

;; TODO: correct processf!
(defn get-teachers []
  (get-view "teachers" "teachers" "by-recency?reduce=false&descending=true"
            #(vec (map :value (get-in % [:rows])))))

(defn get-responses []
  (get-view "teachers" "all-responses" "by-recency?reduce=false&descending=true"
            #(vec (map :value (get-in % [:rows])))))

(defn get-requests []
  (get-view "requests" "all-requests" "by-recency?reduce=false&descending=true"
            #(vec (map :value (get-in % [:rows])))))

(defn- keywordize-collection [coll]
  (let [ks (map #(-> % :key first keyword) coll)
        vals (map #(-> % :value) coll)]
    (zipmap ks vals)))

(defn get-texts []
  (get-view "texts" "all-texts" "by-name"
            #(keywordize-collection (get-in % [:rows]))))

(defn get-meta []
  (get-view "meta" "all-meta" "by-name"
            #(keywordize-collection (get-in % [:rows]))))


(defn put-db-data! [href data]
  (let [ret (chan)
        handler #(put! ret %)]
    (PUT (str db-host href)
         {:params data
          :with-credentials true
          :format (ajax/json-request-format)
          :response-format (ajax/json-response-format {:keywords? true})
          :handler handler})
    ret))

(defn save-document! [db doc]
  (.log js/console (str (:_rev doc)))
  (put-db-data! (str "/" db "/" (:_id doc)) doc))

(defn save-teacher! [teacher]
  (save-document! "teachers" teacher))

(defn get-all-teachers [teachers-atom transform-fn]
  (let [ch (get-teachers)]
    (go (let [evt (<! ch)]
          (reset! teachers-atom (transform-fn evt))))))

(defn get-all-requests [requests-atom transform-fn]
  (let [ch (get-requests)]
    (go (let [evt (<! ch)]
          (reset! requests-atom (transform-fn evt))))))

(defn get-all-categors [categors-atom transform-fn]
  (let [ch (get-subjects)]
    (go (let [evt (<! ch)]
          (reset! categors-atom (transform-fn evt))))))

(defn get-all-cities [cities-atom transform-fn]
  (let [ch (get-cities)]
    (go (let [evt (<! ch)]
          (reset! cities-atom (transform-fn evt))))))



(defn mark-request-read! [req]
  (save-document! "requests" (assoc req :processed true)))
