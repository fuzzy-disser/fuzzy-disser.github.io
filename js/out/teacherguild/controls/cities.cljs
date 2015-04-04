(ns teacherguild.controls.cities
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

;; superheroic defn
(defn save-city! [city after-save-hook]
  (go (let [answer (<! (db/save-document! "cities" city))]
        (if (:ok answer)
          (after-save-hook)
          (.error js/console (str answer))))))

(defn city-params [current-city after-save-hook]
  (let [phone (rc/cursor [:phone] current-city)]
    [:div.span9
     [:div.span4
      [:span.bold "Контактный телефон"]
      [:input.span3
       {:value @phone
        :on-change #(reset! phone (-> % .-target .-value))
        :type "text" :placeholder "+7 (913) 222 1234"}]
      [:a.btn.btn-success
       {:href "#" :aria-hidden "true" :data-dismiss "modal"
        :on-click #(save-city! @current-city after-save-hook)}
       [:i.icon-ok.icon-white] " Сохранить"]]]))

(defn cities-list [current-city cities]
  [:div.span3
   (let [current-name (:name @current-city)]
     [:ul.nav.nav-list.pull-left.pick-subject
      (for [city @cities]
        [:li.subject-item
         {:class (when (= (:name city) current-name) "active")
          :id (:name city)}
         [:a
          {:href "#" 
           :on-click #(reset! current-city city)}
          (:title city)]])])])

(defn add-new-city [new-city]
  [:div.span8
   [:h1 "Добавить новый город"]
   [:hr]
   [:div.span9
    [:div.span6]]
   [:div.span9
    [:div.span4
     [:span.bold "название в адресной строке"]
     [:input.span3 {:type "text" :placeholder "novosibirsk"}]]
    [:div.span4
     [:span.bold "название города"]
     [:input.span3 {:type "text" :placeholder "Новосибирск"}]]]
   [city-params new-city]])

(defn city-edit-area [current-city after-save-hook]
  (let [new-city (atom {})]
    (if-not (empty? @current-city)
      [:div.row
       [:div.span9
        [:button.btn.btn-danger.pull-right
         {:on-click #(reset! current-city {})}
         "Добавить новый город"
         [:i.icon-white.icon-chevron-right]]
        [:hr.span9]]
       [city-params current-city after-save-hook]]
      [add-new-city new-city])))
