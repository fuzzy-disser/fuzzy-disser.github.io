(ns teacherguild.controls.teachers
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.cursor :as rc]
            [cljs.core.async :as async :refer [chan <! >! put!]]
            [clojure.string :as string]
            [teacherguild.controls.core :as core]
            [teacherguild.db :as db])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(def param-labels
  {:education "Образование: вуз, специальность, год окончания"
   :medals "Степени, звания, дипломы, награды"
   :schoolexp "Опыт работы в образовательных учреждениях"
   :repexp "Опыт частной репетиторской деятельности"
   :turnout "Возможность выезда (города, районы, ветки метро)"
   :homeplace "Возможность проведения занятия у себя"
   :otherinfo "Другая информация"})

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

(defn teacher-city-combobox [current-city-name]
  (let [ch (db/get-cities)
        cities (atom [])
        ]
    (go (let [evt (<! ch) ] (reset! cities evt)))
    (fn [current-city-name]
      (let [current-city (first (filter #(= (:name %) (str @current-city-name)) @cities))]
        [:div.row
         [:span.dropdown.span3
          [:a.btn.dropdown-toggle.nav-menu
           {:data-toggle "dropdown" :href "#"}
           (:title current-city) " " [:b.caret]]

          [:ul.dropdown-menu.choose-town-menu.span3
           {:role "menu" :aria-labelledby "dLabel"}
           (for [city @cities]
             [:li {:class (when (= (:name city) (:name current-city)) "active")}
              [:a
               {:href "#"
                :on-click (fn [e]
                            (reset! current-city-name (:name city))
                            (.preventDefault e))}
               (:title city)]])]]]))))

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

(defn toggle-selected [selected subject]
  ((if (selected subject) disj conj)
   selected subject))

(defn subjects-multi-modal [current-subjects]
  (let [ch (db/get-subjects)
        categors (atom [])]
    (go (let [evt (<! ch)] (reset! categors evt)))
    (fn [current-subjects]
      [:div.modal.hide.fade
       {:id "myModal" :tabIndex "-1" :role "dialog" :aria-labelledby "myModalLabel" :aria-hidden "true"}
       [:div.modal-header
        [:h3 {:id "myMoladLabel"} "Выберите предметы"]]
       [:div.modal-body
        (let [selected @current-subjects]
          (for [category @categors]
            [:ul.nav.nav-list.pull-left.pick-subject
             [:li.nav-header (get-in category [:key 0])]
             (for [subject (:value category)]
               [:li.subject-item
                {:class (when (some #(= (:name subject)
                                        (:name %))
                                    selected) "active")
                 :id (:name subject)}
                [:a
                 {:href "#"
                  :on-click #(swap!
                              current-subjects
                              toggle-selected subject)}
                 (:title subject)]])]))]])))

(defn subjects-multi-chooser [current-subjects]
  [:span.span3
   [:a.btn.btn-danger
    {:href "#myModal"
     :role "button"
     :data-toggle "modal"}
    "Выберите предметы "
    [:icon.caret]]
    [subjects-multi-modal current-subjects]])

(defn- fio [teacher]
  (str (:surname teacher) " " (:name teacher) " " (:secondname teacher)))

;; (.log js/console "asdd")
;; (defn- format-date [str-date]
;;   (let [date (time-format/parse str-date)]
;;     (cond
;;       (time/after? date (time/today-at-midnight)) "сегодня"
;;       (time/after? date (time/minus (time/today-at-midnight) (time/days 1))) "вчера"
;;       :else (time-format/unparse (time-format/formatter "DD.MM.yyyy") date)
;;       )))

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

;; (defn- assoc-human-date [teacher]
;;   (assoc teacher :human-date
;;          (-> teacher :register-date format-date)))

(defn assoc-fio [teacher]
  (assoc teacher :fio
         (fio teacher)))

;; include env vars!

(defn photo-href [teacher]
  (if (:_attachments teacher)
    (str "//img." core/hostname "/teachers/" (:_id teacher) "/"
         (->> teacher :_attachments keys first name))
    "/img/nophoto.jpg"))

;; pass cursor to (:name teacher) here?
(defn editable-fio [name secondname surname]
  (let [editing (atom false)]
    (fn [name secondname surname]
      (if @editing
        [:div.inputs.margin-top
         [:input.span3 {:type "text" :value @name
                        :on-key-up #(when (= 13 (.-keyCode %)) (reset! editing false))
                        :on-change #(reset! name (-> % .-target .-value))}]
         [:input.span3 {:type "text" :value @secondname
                        :on-key-up #(when (= 13 (.-keyCode %)) (reset! editing false))
                        :on-change #(reset! secondname (-> % .-target .-value))}]
         [:input.span3 {:type "text" :value @surname
                        :on-key-up #(when (= 13 (.-keyCode %)) (reset! editing false))
                        :on-change #(reset! surname (-> % .-target .-value))}]]
        [:h1
         [:a.editable-h {:on-click #(reset! editing true)}
          @name " " @secondname " " @surname]]))))


(defn show-input-image [e onload onprogress]
  (let [fr (js/FileReader.)
        input (.-target e)
        file (first (array-seq (.-files input)))
        ext (last (clojure.string/split (.-value input) "."))]
    (when (and file (#{"gif","png","jpg","jpeg"} ext))
      (set! (.-onload fr) #(onload (-> % .-target .-result)))
      (set! (.-onprogress fr) onprogress)
      (.readAsDataURL fr file)
      )))

(defn photo-chooser [photo-src]
  (let [loading (atom false)]
    (fn [photo-src]
      [:div.span3.padding-right
       (if @loading
         [:h2 "загрузка..."]
         [:img.teacher-img.padding-bottom
          {:id "photo" :src @photo-src}])
       [:input
        {:type "file"
         :accept "image/jpeg,image/png,image/gif"
         :on-change (fn [e]
                      (show-input-image e (fn [src]
                                            (reset! loading false)
                                            (reset! photo-src src))
                                        #(reset! loading true)))}]])))

(defn selected-subjects-list [selected-subjects]
  [:div.span5
   [subjects-multi-chooser selected-subjects]
   [:div.span3.padding-top
    [:ul.nav.nav-pills
     (for [subject @selected-subjects]
       [:li.active 
        [:a (:title subject)]])]]])


(defn editable-price [value]
  (let [editing (atom false)]
    (fn [value]
      (if @editing
        [:input.span3
         {:type "text"
          :value @value
          :on-key-up #(when (= 13 (.-keyCode %)) (reset! editing false))
          :on-change (fn [e] (reset! value (-> e .-target .-value)))}]
        [:h3
         [:a.editable-h
          {:on-click #(reset! editing true)}
          @value]]))))

(defn textarea-atom [value]
  [:textarea.maximized.span6
   {:value @value
    :on-change (fn [e] (reset! value (-> e .-target .-value)))}])

(defn input-atom [value]
  [:input.span3
   {:type "text"
    :value @value
    :on-change (fn [e] (reset! value (-> e .-target .-value)))}])

(defn editable-params-table [teacher-atom]
  (let [teacher @teacher-atom]
    [:div.params-table
     [:table.teacher-info-table
      [:tbody
       (for [param (keys param-labels)]
         [:tr
          [:td.teacher-info-label (get param-labels param)]
          [:td [textarea-atom (rc/cursor [param] teacher-atom)]]])]]]))

(defn  personal-info-table [teacher-atom]
  (let [teacher @teacher-atom
        info-table {:phone "Телефон" :email "E-mail"}]
    [:div.params-table
     [:table.teacher-info-table
      [:tbody
       (for [param (keys info-table)]
         [:tr
          [:td.teacher-info-label (get info-table param)]
          [:td [input-atom (rc/cursor [param] teacher-atom)]]])]]]))


(defn editable-checkbox [value label]
  [:label.checkbox.inline
   [:input {:type "checkbox" :checked @value
           :on-change #(swap! value not)} " " label]])

(def teacher-is-visible core/is-visible)

(defn priority-on-main [priority]
  [:div.input-prepend
   [:span.add-on "Приоритет на главной:"]
   [:input.span1
    {:type "text"
     :placeholder "_"
     :value @priority
     :on-change (fn [e] (reset! priority (-> e .-target .-value)))}]])

(defn transform-teachers [teachers]
  (map (comp
        #(update-in % [:isvisible] boolean)
        assoc-fio
        ;; assoc-human-date
        ) teachers))

(defn save-teacher [teacher after-save-hook]
  (go (let [answer (<! (db/save-teacher! teacher))]
        (if (:ok answer)
          (after-save-hook)
          (.error js/console (str answer))))))

(defn teachers-subjects [teacher all-subjects]
  (set (for [s (:subjects teacher)]
         (get all-subjects s))))

(defn teacher-edit [teacher all-subjects after-save-hook]
  (let [photo-src (atom (photo-href @teacher))
        save-in-progress (atom false)
        price (rc/cursor [:price] teacher)]
    (fn [teacher all-subjects]
      (let [selected-subjects (atom (teachers-subjects @teacher all-subjects))]
        [:div 
         [:div
           (if @save-in-progress
             [:a.btn.btn-success.disabled.pull-right "Сохранение ..."]
             [:div.btn-group.pull-right
              [:a.btn.btn-success
               {:on-click (fn []
                            (reset! save-in-progress true)
                            (save-teacher @teacher after-save-hook))}
               [:i.icon-ok.icon-white] " Сохранить"]
           
             [:a.btn.btn-danger
              {:href "#" :aria-hidden "true" :data-dismiss "modal"
               :on-click #(reset! teacher {})}
              "Отмена " [:i.icon-chevron-right.icon-white]]])
          
          [teacher-is-visible (rc/cursor [:isvisible] teacher)]
          [priority-on-main (rc/cursor [:priority] teacher)]
          [:hr]
          [teacher-city-combobox (rc/cursor [:city] teacher)]
          [editable-fio
           (rc/cursor [:name] teacher)
           (rc/cursor [:secondname] teacher)
           (rc/cursor [:surname] teacher)]]
         [:div.teacher-info-card.row
          [photo-chooser photo-src]
          [selected-subjects-list selected-subjects]
          [:div.span3
           [editable-price price]
           [:hr]
           [:ul.teacher-prepare-options
            [:li
             [editable-checkbox (rc/cursor [:prepareege] teacher)
              [:i " подгтовка к ЕГЭ"]]]
            [:li
             [editable-checkbox (rc/cursor [:preparegia] teacher)
              [:i " подгтовка к ОГЭ"]]]]]]
         [:hr]
         [editable-params-table teacher]
         [:hr]
         [personal-info-table teacher]]))))

(defn teachers-table [teachers current-teacher after-save]
  (let [ch (db/get-subjects-by-name)
        subjects-by-name (atom [])]
    (go (let [evt (<! ch)] (reset! subjects-by-name evt)))
    (fn [teachers current-teacher]
      (if-not (= @current-teacher {})
        [teacher-edit current-teacher @subjects-by-name after-save]
        [:div.span9
         [:table.table.table-striped
          [:tbody
           (for [teacher teachers]
             [:tr {:class (when (not (:isvisible teacher)) "bold")}
              [:td.visible
               (when-not (:isvisible teacher) "*")
               (when (:_attachments teacher) [:i.icon-picture])]
              ;; [:td (:human-date teacher)]
              [:td (:fio teacher)]
              [:td [:a.btn.btn-danger.btn-small
                    {:on-click #(reset! current-teacher teacher)
                     ;; :role "button"
                     ;; :data-target "#teacherModal"
                     ;; :data-toggle "modal"
                     }
                    [:i.icon-pencil.icon-white]]]])]]]))))

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




