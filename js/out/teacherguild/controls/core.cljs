(ns teacherguild.controls.core
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

(def hostname "teacherguild.core")

(defn paginate [items page-length]
  (if (empty? items)
    items
    (conj
     (paginate
      (drop page-length items) page-length)
     (take page-length items))))

(defn paginator-control [items-count page-atom]
  [:div.pagination
   [:ul
    [:li.prev {:class (when (= @page-atom 0) "disabled")}
     [:a {:href "#"
          :on-click (if (= @page-atom 0) #() #(swap! page-atom dec))}
      [:i.icon-chevron-left]]]
    (let [page @page-atom]
      (for [num (range items-count)]
        (let [label (inc num)]
        (if (= num page)
          [:li.active [:a {:href "#"} label]]
          [:li [:a {:href "#"
                    :on-click #(reset! page-atom num)} label]]))))
    
    [:li.next{:class (when (= @page-atom items-count) "disabled")}
     [:a {:href "#"
          :on-click (if (= @page-atom (dec items-count))
                      #() #(swap! page-atom inc))}
      [:i.icon-chevron-right]]]
    ]])

(defn is-visible [is-visible]
  [:div.btn-toolbar
   [:div.btn-group
    [:a.btn.btn-success
     {:href "#"
      :class (when @is-visible "disabled")
      :on-click (if @is-visible #() #(swap! is-visible not))}
     [:i.icon-white.icon-ok]]
    [:a.btn.btn-danger
     {:href "#"
      :class (when-not @is-visible "disabled")
      :on-click (if @is-visible #(swap! is-visible not) #())}
     [:i.icon-white.icon-remove]]]
   [:span.label.margin-left
    {:class (if @is-visible "label-success" "label-important")}
    (if @is-visible "Подтвержден" "Не подтвержден")]])
