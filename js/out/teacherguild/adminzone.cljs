(ns teacherguild.adminzone
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [cljs.core.async :as async :refer [chan <! >! put!]]
              [ajax.core :as ajax :refer [GET POST]]

              [teacherguild.controls.teachers :as teachers]
              [teacherguild.controls.subjects :as subjects]
              [teacherguild.controls.responses :as responses] 
              [teacherguild.controls.requests :as requests]
              [teacherguild.controls.preferences :as preferences]
              [teacherguild.controls.cities :as cities]
              [teacherguild.controls.core :as controls]
              
              [teacherguild.db :as db]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:import goog.History))

;; -------------------------
;; atoms
(defn log [what] (.log js/console (str what)))
(def teachers-atom (atom []))
(def requests-atom (atom []))
(def categors-atom (atom []))
(def cities-atom (atom []))

;; (add-watch teachers-atom :changed #(log "teachers changed."))
(db/get-all-teachers teachers-atom teachers/transform-teachers)
(db/get-all-requests requests-atom identity)
(db/get-all-categors categors-atom identity)
(db/get-all-cities cities-atom identity)

(def page-size 10)
(atom "asda")
;; -------------------------
;; Views
;; (.log js/console "@@@@@")

(def console-handler (fn [r] (.log js/console (str r))))
(declare current-page)

(defn nav-item [page title]
  (fn []
    [:li {:class (when (= title (:title @current-page)) "active")}
     [:a {:href "#"
          :on-click #(reset! current-page {:handler page :title title})}
      title]]))

(defn about-page []
  [:div [:h2 "About teacherguild!"]
   [:div [:a {:href "#/"} "go to the home page"]]])

(defn home-page []
  [:div [:h2 "Welcome to teacherguild21"]
   [:div [:a {:href "#/about"} "go to about page"]]])

(defn teachers-page []
  (let [current-city (atom {:name "all" :title "Все города"})
        current-subject (atom {:name "all" :title "Выберите предмет"})
        fio-filter (atom "")
        approved (atom true)
        page (atom 0)
        current-teacher (atom {})]
    (fn []
      (let [paginated-teachers
            (controls/paginate 
              (teachers/user-filter 
               @teachers-atom @current-city @current-subject @fio-filter @approved)
              page-size)]

        (when (-> paginated-teachers count (<= @page))
          (reset! page 0))
        [:div.row
         (when (= @current-teacher {})
           [:div.controls.span12
            [teachers/approved-checkbox approved]
            [teachers/cities-combobox current-city]
            [teachers/subject-chooser current-subject]
            [teachers/fio-filter-input fio-filter]])
         [:div.span12
          (when (= @current-teacher {})
            [controls/paginator-control (count paginated-teachers) page])
          [teachers/teachers-table
           (if (empty? paginated-teachers)
             [] (nth paginated-teachers @page))
           current-teacher (fn []
                             (.log js/console "haha.")
                             (db/get-all-teachers
                              teachers-atom
                              (fn [teachers]
                                (let [transformed-teachers (teachers/transform-teachers teachers)]
                                  (reset! current-teacher {})
                                  transformed-teachers))))]]]))))

(defn debug-page []
  (let [store (atom [])]
    (fn []
      [:div
       [:button.btn.btn-success
        {:on-click #(go (reset! store (<! (db/get-subjects-by-name))))}
        "GET"]
       [:pre
        (str (db/vec-to-map [{:a :b :foo "bar"} {:a :c :fgh "asd"} {:a "adsad"}] :a))]
       [:pre
        (str "\n\n" @store)]])))

(defn settings-page []
  [preferences/settings-table])

(defn responses-page []
  [:div.row
   [:div.span12
    [responses/responses-table]]])

(defn requests-page []
  (let [current-request (atom {:foo "asd"})]
    (.log js/console @current-request)
    (fn []
      [:div.row
       [:div.span12
        [requests/request-modal current-request
         #(db/get-all-requests requests-atom identity)]
        [requests/requests-table current-request requests-atom]]])))

(defn subjects-page []
  (let [current-subject (atom {})]
    [:div.row
     [subjects/subjects-list current-subject categors-atom]
     [subjects/subject-edit-area
      current-subject
      (fn [])]]))

(defn cities-page []
  (let [current-city (atom {})]
    [:div.row
     [cities/cities-list current-city cities-atom]
     [cities/city-edit-area current-city 
      (fn []
        (db/get-all-cities cities-atom identity)
        (reset! current-city {}))]]))

(defn layout []
  (fn []
    [:div.row
     [:div.span3.sidebar-nav
      [:ul.nav.nav-list
       [nav-item teachers-page "Репетиторы"]
       [nav-item requests-page "Запросы"]
       [nav-item responses-page "Отзывы"]
       [nav-item subjects-page "Предметы"]
       [nav-item cities-page "Города"]
       [nav-item settings-page "Настройки сайта"]
       [nav-item debug-page "debug"]
       ]]
     [:div.span12
      [(:handler @current-page)]]]))

(def current-page (atom {:title "Репетиторы" :handler teachers-page}))
;; -------------------------
;; Initialize app

(defn init! []
  (reagent/render [layout] (.getElementById js/document "app")))

(init!)
;; (print(.getElementById js/document "app"))
;; (.log js/console "haha")

