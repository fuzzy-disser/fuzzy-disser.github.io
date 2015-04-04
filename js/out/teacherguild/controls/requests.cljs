(ns teacherguild.controls.requests
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

(defn request-body [request]
  (.log js/console (str request))
  (let [{:keys [otherinfo phone city email subjects teacher place]} request
        subject (first subjects)]
    [:div.modal-body
     [:ul.no-disk
      (when phone [:li [:i.icon-user] " " [:b phone]])
      [:li [:i.icon-globe] " "
       (if city city "Барнаул")]
      ;; [:li [:hr]]
      (when email [:li [:b "@ "]
                   [:a {:href (str "mailto:" email)} email]])
      (when place [:li [:i.icon-home] " " place])

      ;; TODO extract teacher, subject
      ;; [:div subject]
      ;; [:div teacher]
      ]
     [:pre otherinfo]]))

(defn mark-read! [req after-save-hook]
  (go (let [answer (<! (db/mark-request-read! req))]
        (if (:ok answer)
          (after-save-hook)
          (.error js/console (str answer))))))

(defn request-modal [request after-save-hook]
  (fn [request]
    [:div.modal.hide.fade
     {:id "myModal" :tabIndex "-1" :role "dialog" :aria-labelledby "myModalLabel" :aria-hidden "true"}
     [:div.modal-header
      [:div.btn-group.pull-right
       [:a.btn.btn-success
        {:href "#" :aria-hidden "true" :data-dismiss "modal"
         :on-click #(mark-read! @request after-save-hook)}
        [:i.icon-ok.icon-white]]
       [:a.btn.btn-danger
        {:href "#" :aria-hidden "true" :data-dismiss "modal"}
        [:i.icon-remove.icon-white]]]
      [:h3 {:id "myMoladLabel"} (:name @request)]]
     [request-body @request]]))


(defn requests-table [current-request requests]
  (fn [current-request requests]
    [:div.span9
     [:table.table.table-striped
      [:tbody
       (for [request @requests]
         [:tr {:class (when-not (:processed request) "bold")}
          [:td.visible (when-not (:processed request) "*")]
          [:td (:processed request)]
          [:td (:city request)]
          [:td (:name request)]
          [:td (:email request)]
          [:td (:phone request)]
          ;; teacher-id, subjects
          [:td
           [:a.btn.btn-danger.btn-small
            {:href "#myModal"
             :role "button"
             :data-toggle "modal"
             :on-click #(reset! current-request request)}
            [:i.icon-search.icon-white]]]])]]]))
