(ns teacherguild.controls.preferences
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [reagent.cursor :as rc]
            [clojure.string :as string]
            [cljs.core.async :as async :refer [chan <! >! put!]]
            ;; [cljs-time.format :as time-format]
            ;; [cljs-time.core :as time]
            [teacherguild.db :as db])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn texts-component []
  (let [ch (db/get-texts)
        texts (atom [])]
    (go (let [evt (<! ch)] (reset! texts evt)))
    (fn []
      [:table.table.no-border
       [:tbody
        [:tr.row
         [:td.span2 "Текст на главной"]
         [:td.span8
          [:textarea.maximized.height-300px
           {:value (-> @texts :main-page :text)}]]]
        [:tr.row
         [:td.span2 "Лицензионное соглашение"]
         [:td.span8
          [:textarea.maximized.height-300px
           {:value (-> @texts :agreement :text)}]
          [:button.btn.btn-large.btn-success.pull-right "Сохранить"]]
         ]]])))

(defn meta-component []
  (let [ch (db/get-meta)
        meta (atom [])]
    (go (let [evt (<! ch)] (reset! meta evt)))
    (fn []
      [:table.table.no-border
       [:tr.row
        [:td " "][:td.bold "Description"][:td.bold "Keywords"]]
       [:tr.row
        [:td.span2 [:i "Главная"]]
        [:td.span5
         [:textarea.maximized
          {:value (-> @meta :main :description)}]]
        [:td.span5
         [:textarea.maximized
          {:value (-> @meta :main :keywords)}]]]
       [:tr.row
        [:td.span2 [:i "Для репетитора"]]
        [:td.span5
         [:textarea.maximized
          {:value (-> @meta :new-teacher :description)}]]
        [:td.span5
         [:textarea.maximized
          {:value (-> @meta :new-teacher :keywords)}]]]
       [:tr.row
        [:td.span2 [:i "Оставить заявку"]]
        [:td.span5
         [:textarea.maximized
          {:value (-> @meta :request :description)}]]
        [:td.span5
         [:textarea.maximized
          {:value (-> @meta :request :keywords)}]
         [:button.btn.btn-large.btn-success.pull-right "Сохранить"]]]]
      )))


(defn settings-table []
  [:div.span9
   [:h2 "Текст"]
   [texts-component]
   
   [:h2 "Meta Tag"]
   [meta-component]

   [:h2 "Администраторы"]
   [:table.table.no-border
    [:tr.row
     [:td.bold "Новый пароль"]]
    [:tr.row
     [:td.span5
      [:input.span3 {:placeholder "Новый пароль" :type "text"}]]]
    [:tr.row
     [:td.bold "E-mail (на главной, оповещения)"]]
    [:tr.row
     [:td.span5
      [:input.span3 {:placeholder "email" :type "text"}]]]
    [:tr.row
     [:td.span5
      [:button.btn.btn-success.span3.no-margin-left
       "Сохранить"]
      ]]]])
