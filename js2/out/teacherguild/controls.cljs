(ns teacherguild.controls
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [cljs.core.async :as async :refer [chan <! >! put!]]
            [cljs-time.format :as time-format]
            [cljs-time.core :as time]
            [teacherguild.db :as db])

  (:require-macros [cljs.core.async.macros :refer [go]]))

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

(defn cities-combobox [current-city]
  (let [ch (db/get-cities)
        cities (atom [])]
    (go (let [evt (<! ch) all {:name "all" :title "Все города"}]
          (reset! cities  (conj evt all))))
    (fn [current-city]
      [:span.dropdown.span3
       [:a.btn.dropdown-toggle.nav-menu
        {:data-toggle "dropdown" :href "#"}
        (:title @current-city) " " [:b.caret]]
       [:ul.dropdown-menu.choose-town-menu.span3
        {:role "menu" :aria-labelledby "dLabel"}
        (let [current-name (:name @current-city)]
          (for [city @cities]
            [:li {:class (when (= (:name city) current-name) "active")}
             [:a
              {:href "#"
               :on-click (fn [e]
                           (reset! current-city city)
                           (.preventDefault e))}
              (:title city)]]))]])))

(defn subjects-modal [current-subject]
  (let [ch (db/get-subjects)
        categors (atom [])
        all {:name "all" :title "Выберите предмет"}]
    (go (let [evt (<! ch)] (reset! categors evt)))
    (fn [current-subject]
      [:div.modal.hide.fade
       {:id "myModal" :tabIndex "-1" :role "dialog" :aria-labelledby "myModalLabel" :aria-hidden "true"}
       [:div.modal-header
        [:a.btn.btn-danger.pull-right
         {:href "#" :aria-hidden "true" :data-dismiss "modal"
          :on-click #(reset! current-subject all)}
         "Все"]
        ;; [:button.close {:type "button" :data-dismiss "modal" :aria-hidden "true"} "×"]
        [:h3 {:id "myMoladLabel"} "Выберите предмет"]]
       [:div.modal-body
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
                 (:title subject)]])]))]])))

(defn subject-chooser [current-subject]
  [:span.span3
   [:a.btn.btn-danger
    {:href "#myModal"
     :role "button"
     :data-toggle "modal"}
    (:title @current-subject) " "
    [:icon.caret]]
    [subjects-modal current-subject]])

(defn- fio [teacher]
  (str (:surname teacher) " " (:name teacher) " " (:secondname teacher)))

(.log js/console "asdd")
(defn- format-date [str-date]
  (let [date (time-format/parse str-date)]
    (cond
      (time/after? date (time/today-at-midnight)) "сегодня"
      (time/after? date (time/minus (time/today-at-midnight) (time/days 1))) "вчера"
      :else (time-format/unparse (time-format/formatter "DD.MM.yyyy") date)
      )))

(defn- from-city? [teacher city]
  (if (= "all" (:name city))
    true
    (= (str (:city teacher)) (:name city))))

(defn- has-subject? [teacher subject]
  (if (= "all" (:name subject))
    true
    (some #(= (:name subject) %) (:subjects teacher))))

(defn- fio-contains? [teacher fio-filter]
  (> (.indexOf (.toLowerCase (:fio teacher)) (str fio-filter)) -1))

(defn user-filter [teachers city subject fio-filter approved]
  (filter
   #(and
     (or (not (:isvisible %)) approved)
     (fio-contains? % fio-filter)
     (from-city? % city)
     (has-subject? % subject))
   teachers))

(defn- assoc-human-date [teacher]
  (assoc teacher :human-date
         (-> teacher :register-date format-date)))

(defn assoc-fio [teacher]
  (assoc teacher :fio
         (fio teacher)))

;; TODO 1. global teachers
;;      2. what to do w/ paginate
(defn teachers-table
  [teachers]
  [:div.span9
   [:table.table.table-striped
    [:tbody
     (for [teacher teachers]
       [:tr {:class (when (not (:isvisible teacher)) "bold")}
        [:td.visible (when-not (:isvisible teacher) "*")]
        ;; [:td (:human-date teacher)]
        [:td (:fio teacher)]
        [:td [:button.btn.btn-danger.btn-small
              [:i.icon-pencil.icon-white]]]])]]])


(defn fio-filter-input [fio-filter]
  [:span.span2
   [:input.span2 {:type "text"
            :placeholder "поиск.."
            :value @fio-filter
            :on-change (fn [e]
                         (reset! fio-filter (-> e .-target .-value))
                         (.log js/console "adasd!"))}]])

(defn approved-checkbox [approved]
  [:span.span1
   [:button.btn
    {:class (when-not @approved "active btn-danger")
     :on-click (fn [e] (swap! approved not))} "*"]])


(defn mark-button [editing response]
  (let [original response
        current (atom response)]
    (fn []
      [:button.btn
       {:class (if (:mark @current)
                 "btn-success" "btn-danger")
        :on-click (fn [e]
                    (swap! current #(update-in % [:mark] not)))}
       [:i.icon-white
        {:class (if (:mark @current)
                  "icon-thumbs-up" "icon-thumbs-down")}]
       ])))

(defn repsponse-control [response]
  (let [editing (atom false)
        updated (atom false)]
    (fn []
      [:tr.row {:class (when (not (:isvisible response)) "bold")}
       [:td.visible (when-not (:isvisible response) "*")]
       [:td.span1 [mark-button editing response]]
       [:td.span1 (get-in response [:teacher :surname])]
       [:td.span8
        (if @editing
          [:textarea.maximized 
           (:responsetext response)]
          [:pre.editable
           {:on-click #(reset! editing true)}
           (:responsetext response)])]
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
       [:table.table
        [:tbody
         (for [response @responses]
           [repsponse-control response]
           )]]])))

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
     [:pre otherinfo]
     ]))
(defn request-modal [request]
  (fn []
    [:div.modal.hide.fade
     {:id "myModal" :tabIndex "-1" :role "dialog" :aria-labelledby "myModalLabel" :aria-hidden "true"}
     [:div.modal-header
      [:div.btn-group.pull-right
       [:a.btn.btn-success
        {:href "#" :aria-hidden "true" :data-dismiss "modal"}
        [:i.icon-ok.icon-white]]
       [:a.btn.btn-danger
        {:href "#" :aria-hidden "true" :data-dismiss "modal"}
        [:i.icon-remove.icon-white]]]
      [:h3 {:id "myMoladLabel"} (:name @request)]]
      [request-body @request]]))


(defn requests-table [current-request]
  (let [ch (db/get-requests)
        requests (atom [])]
    (go (let [evt (<! ch)] (reset! requests evt)))
    (fn []
      [:div.span9
       [:table.table.table-striped
        [:tbody
         (for [request @requests]
           [:tr {:class (when-not (:isvisible request) "bold")}
            [:td.visible (when-not (:isvisible request) "*")]
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
              [:i.icon-search.icon-white]]]])]]])))

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
          [:textarea.maximized
           {:value (-> @texts :main-page :text)}]]
         [:td [:button.btn.btn-success
               [:i.icon-ok.icon-white]]]]
        [:tr.row
         [:td.span2 "Лицензионное соглашение"]
         [:td.span8
          [:textarea.maximized
           {:value (-> @texts :agreement :text)}]]
         [:td [:button.btn.btn-success
               [:i.icon-ok.icon-white]]]]]])))

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
          {:value (-> @meta :request :keywords)}]]]]
      )))

(defn settings-table []
  [:div.span9
   [:h2 "Текст"]
   [texts-component]
   
   [:h2 "Description, Keywords"]
   [meta-component]

   [:h2 "Администраторы"]
   [:table.table.no-border
    [:tr.row
     [:td.bold "Новый пароль"][:td.bold "email"]]
    [:tr.row
     [:td.span5
      [:input.span3 {:placeholder "Новый пароль" :type "text"}]]
     [:td.span5
      [:input.span3 {:placeholder "email" :type "text"}]]]]])


