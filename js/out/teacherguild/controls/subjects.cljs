(ns teacherguild.controls.subjects
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

(defn subject-params [current-subject]
  (let [description (rc/cursor [:meta_description] current-subject)
        keywords (rc/cursor [:meta_keywords] current-subject)
        title (rc/cursor [:title] current-subject)
        page-header (rc/cursor [:page_header] current-subject)]
    [:div.span9
     ;; [:pre (str @current-subject)]
     [:div.span4
      [:span.bold "<meta description=..."]
      [:textarea.maximized
       {:value @description
        :on-change #(reset! description (-> % .-target .-value))}]]
     [:div.span4.pull-right
      [:span.bold "<meta keywords=..."]
      [:textarea.maximized
       {:value @keywords
        :on-change #(reset! keywords (-> % .-target .-value))}]]
     [:div.span4
      [:span.bold "<title>"]
      [:input.span4
       {:type "text"
        :value @title
        :on-change #(reset! title (-> % .-target .-value))}]]
     [:div.span4.pull-right
      [:span.bold "Заголовок"]
      [:input.span4
       {:type "text"
        :value @page-header
        :on-change #(reset! page-header (-> % .-target .-value))}]]]))

(defn subjects-list [current-subject categors]
  (let [all {:name "all" :title "Выберите предмет"}]
    (fn [current-subject]
      [:div.span3
       (let [current-name (:name @current-subject)]
         (for [category @categors]
           [:ul.nav.nav-list.pull-left.pick-subject
            [:li.nav-header (get-in category [:key 0])]
            (for [subject (:value category)]
              [:li.subject-item
               {:class (when (= (:name subject) current-name) "active")
                :id (:name subject)}
               [:a
                {:href "#" :aria-hidden "true" :data-dismiss "modal"
                 :on-click #(reset! current-subject subject)}
                (:title subject)]])]))])))

(defn add-new-subject [new-subject after-save-hook]
  [:div.row
   [:h1 "Добавить новый предмет"]
   [:hr]
   [:div.span9
    [:div.span4.pull-right
     [:span.bold "название в адресной строке"]
     [:input.span4 {:type "text" :placeholder "technical-drawing"}]]
    [:div.span4
     [:span.bold "название предмета"]
     [:input.span4 {:type "text" :placeholder "Начертательная геометрия"}]]]
   [subject-params new-subject]
   [:div.span9
    [:button.btn.btn-success.btn-large.span2.pull-right
     {:on-click #(save-subejct @new-subject after-save-hook)}
     "Добавить"]]])

(defn subject-edit-area [current-subject]
  (let [new-subject (atom {})]
    (fn [current-subject]
      (if-not (empty? @current-subject)
        [:div
         [:div.span9
          [:button.btn.btn-danger.pull-right
           {:on-click #(reset! current-subject {})}
           "Добавить новый предмет "
           [:i.icon-white.icon-chevron-right]]]
         [:div.span9
          [:hr]]
         [subject-params current-subject]
         [:div.span9
          [:button.btn.btn-success.btn-large.span2.pull-right
           "Сохранить"]]]
        [add-new-subject new-subject]))))
