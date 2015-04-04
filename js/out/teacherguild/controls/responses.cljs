(ns teacherguild.controls.responses
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [reagent.cursor :as rc]
            [clojure.string :as string]
            [cljs.core.async :as async :refer [chan <! >! put!]]
            [teacherguild.controls.core :as core]
            ;; [cljs-time.format :as time-format]
            ;; [cljs-time.core :as time]
            [teacherguild.db :as db])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn mark-button [editing response]
  [:button.btn
   {:class (if (:mark @response)
             "btn-success"
             "btn-danger")
    :on-click #(swap! response update-in [:mark] not)}
   [:i.icon-white
    {:class (if (:mark @response)
              "icon-thumbs-up"
              "icon-thumbs-down")}]
   ])

(defn response-is-visible [is-visible]
  [:div.no-margin-top
   [:div.span1.margin-bottom
    (if @is-visible
      [:a.btn.btn-success
       {:href "#"
        :on-click #(swap! is-visible not)}
       [:i.icon-white.icon-ok]]
      [:a.btn.btn-danger
       {:href "#"
        :on-click #(swap! is-visible not)}
       [:i.icon-white.icon-remove]])]
   [:span.label
    {:class (if @is-visible "label-success" "label-important")}
    (if @is-visible "Подтвержден" "Не подтвержден")]])

(defn repsponse-control [response]
  (let [editing (atom false)
        updated (atom false)]
    (fn []
      [:tr.row {:class (when-not (:isvisible @response) "bold")}
       [:td.span2 [response-is-visible (rc/cursor [:isvisible] response)]]
       [:td.span1 [mark-button editing response]]
       [:td.span1 (get-in @response [:teacher :surname])]
       [:td.span8
        (if @editing
          [:textarea.maximized 
           (:responsetext @response)]
          [:pre.editable
           {:on-click #(reset! editing true)}
           (:responsetext @response)])]
       [:td.span2
        (if @editing
          [:div.btn-group
           [:button.btn.btn-success.btn-small
            {:on-click #(reset! editing false)}
            [:i.icon-ok.icon-white]]
           [:button.btn.btn-danger.btn-small
            {:on-click #(reset! editing false)}
            [:i.icon-remove.icon-white]]]
          [:button.btn.btn-danger.btn-small
            {:on-click #(reset! editing true)}
            [:i.icon-pencil.icon-white]]
          )]])))

(defn responses-table []
  (let [ch (db/get-responses)
        responses (atom [])]
    (go (let [evt (<! ch)] (reset! responses evt)))
    (fn []
      [:div.span9
       [:a.btn.btn-success.btn-large.pull-right.margin-bottom
        "Сохранить"]
       [:table.table
        [:tbody
         (for [response @responses]
           [repsponse-control (atom response)]
           )]]])))

