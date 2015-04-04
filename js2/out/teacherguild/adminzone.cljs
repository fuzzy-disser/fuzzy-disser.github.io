(ns teacherguild.adminzone
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [cljs.core.async :as async :refer [chan <! >! put!]]
              [ajax.core :as ajax :refer [GET POST]]
              [teacherguild.controls :as controls]
              [teacherguild.db :as db]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:import goog.History))

;; -------------------------
;; atoms

(def teachers (atom []))
(let [ch (db/get-teachers)]
  (go (let [evt (<! ch)]
        (reset! teachers
                (map (comp
                      #(update-in % [:isvisible] boolean)
                      controls/assoc-fio
                      ;; assoc-human-date
                      ) evt)))))

(def page-size 10)

;; -------------------------
;; Views
(.log js/console "asdsad")

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
        page (atom 0)]
    (fn []
      (let [paginated-teachers
             (controls/paginate 
              (controls/user-filter 
               @teachers @current-city @current-subject @fio-filter @approved)
              page-size)]
        (when (-> paginated-teachers count (<= @page))
          (reset! page 0))
        [:div.row
         [:div.controls.span12
          [controls/approved-checkbox approved]
          [controls/cities-combobox current-city]
          [controls/subject-chooser current-subject]
          [controls/fio-filter-input fio-filter]]
         [:div.span12
          [controls/paginator-control (count paginated-teachers) page]
          [controls/teachers-table
           (if (empty? paginated-teachers)
             []
             (nth paginated-teachers @page))
          ]

         ;; [:pre @teachers]
         ]]))))

(defn debug-page []
  (let [cities-ajax (atom [])]
    (fn []
      [:div
       [:button.btn.btn-success
        {:on-click #(go (reset! cities-ajax (<! (db/get-texts))))}
        "GET"]
       [:pre (str "" @cities-ajax)]])))

(defn settings-page []
  [controls/settings-table])

(defn responses-page []
  [:div.row
   [:div.span12
    [controls/responses-table]]])

(defn requests-page []
  (let [current-request (atom {:foo "asd"})]
    (.log js/console @current-request)
    (fn []
      [:div.row
       [:div.span12
        [controls/request-modal current-request]
        [controls/requests-table current-request]]])))

(defn layout []
  (fn []
    [:div.row
     [:div.span3.sidebar-nav
      [:ul.nav.nav-list
       [nav-item teachers-page "Репетиторы"]
       [nav-item requests-page "Запросы"]
       [nav-item responses-page "Отзывы"]
       [nav-item settings-page "Настройки сайта"]
       [nav-item debug-page "debug"]
       ]]
     [:div.span9
      [(:handler @current-page)]]]))

(def current-page (atom {:title "Репетиторы" :handler teachers-page}))
;; -------------------------
;; Initialize app

(defn init! []
  (reagent/render-component [layout] (.getElementById js/document "app")))

(init!)

;; (.log js/console "haha")

