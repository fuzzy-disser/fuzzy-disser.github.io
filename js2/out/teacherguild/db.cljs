
(ns teacherguild.db
  (:require [cljs.core.async :as async :refer [chan <! >! put!]]
            [ajax.core :as ajax :refer [GET POST]])
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

;; TODO: correct processf!
(defn get-view [db design view processf]
  (get-db-data
   (str "/" db "/_design/" design "/_view/" view)
   processf))

(defn get-subjects []
  (get-api-data "/subjects" identity))

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

