(ns fuzzy.linear
  (:require [reagent.core :as reagent :refer [atom]]
            [fuzzy.fzlogic :as fz]
            [fuzzy.schema.electro :as electro]
            [fuzzy.schema.fire :as fire]
            [fuzzy.schema.accident :as accident])
  (:require-macros [fuzzy.template :refer [defschema]]))



(def lang-vars
  (atom
   {:x1 {:description "Неправильные действия"
         :weight 0.042
         :danger 1.58
         :value 0.1}

    :x2 {:description "Контроль технологических процессов"
         :weight 0.041
         :danger 1.55
         :value 0.1}

    :x3 {:description "Соблюдение техники безопасности"
         :weight 0.036 :danger 1.36
         :value 0.5}

    :x4 {:description "Уровень профессионализма"
         :weight 0.034 :danger 1.28
         :value 0.5}
    :x7 {:description "Ошибки в оперативных решениях"
         :weight 0.022 :danger 0.08
         :value 0.1}

    :x6 {:description "Обученность действиям в нештатных ситуациях"
         :weight 0.031
         :danger 1.17
         :value 0.5}
    :x10 {:description "Физическое состояние"
         :weight 0.001
         :danger 0.03
         :value 0.5}

    :y3 {:description "Срок эксплуатации ЭУ"
         :weight 0.072 :danger 1.72
         :value 0.5}
    
    :y2 {:description "Степень износа изоляционных частей ЭУ"
         :weight 0.78 :danger 1.85
         :value 0.5}
    
    :y1 {:description "Уровень опасности возникновения аварийных режимов"
         :weight 0.093 :danger 3.01
         :value 0.5}

    :y4 {:description "Степень износа токоведущих частей ЭУ"
         :weight 0.057
         :danger 1.35
         :value 0.5}

    :y5 {:description "Отказ технологического электрооборудования"
         :weight 0.046
         :danger 1.35
         :value 0.9}

    :y6 {:description "Отказ(отсутствие) средств электрозашиты"
         :weight 0.045
         :danger 1.06
         :value 0.9}

    :y8 {:description "Эфективность средств электрозащиты"
         :weight 0.031
         :danger 0.73
         :value 0.1}

    :y7 {:desc "Возможность возникновения ОТС"
         :weight 0.034
         :danger 0.81
         :value 0.1}
    
    :z1 {:description "Уровень деструктивных воздействий параметров микроклимата"
         :weight 0.055 :danger 2.62
         :value 0.5}
    
    :z3 {:description "Диагностика технического состояния ЭУ"
         :weight 0.042 :danger 2
         :value 0.5}
    :z2 {:description "Качество текущего ремонта технологического электрооборудования"
         :weight 0.049 :danger 2.34
         :value 0.5}
    :z5 {:description "Состояние условий труда"
         :weight 0.002 :danger 0.09
         :value 0.5}
    
    :z4 {:description "Частота возникновения возникновения опасных факторов и превышение критических значений параметров"
         :weight 0.028 :danger 1.33
         :value 0.5}
    })) 

(defn log [what] (.log js/console (str what)))

(defn lang-term-control [term-key]
  (let [term (reagent/cursor lang-vars [term-key])]
    [:div.input-prepend.padding-5
     [:label.add-on (str term-key)]
     [:input.span1
      {:type "text"
       :value (:value @term)
       :on-change #(reset! term
                           (assoc @term :value
                                  (-> % .-target .-value)))}]]))

(defn electro-fire
  []
  [:div.padding-20
   [:h4 "Итог: "
    (fz/and
     (electro/human-factor @lang-vars)
     (electro/electro-station @lang-vars)
     (electro/environment @lang-vars))]
   
   [:div.row
    [:div.span3.bg-gray.padding-5
     [lang-term-control :x1]
     [lang-term-control :x4]
     [lang-term-control :x10]
     [:hr]
     [:h4 "Человеческий фактор: " (fire/human-factor @lang-vars)]
     ]
    
    [:div.span4.bg-gray.padding-5
     [lang-term-control :y1]
     [lang-term-control :z3]
     [lang-term-control :y5]
     [lang-term-control :y4]
     [lang-term-control :z1]
     [lang-term-control :z2]
     [:hr]
     [:h4 "Электроустановка: " (fire/electro-station @lang-vars)]
     ]

    [:div.span4.bg-gray.padding-5
     [lang-term-control :y6]
     [lang-term-control :y8]
     [lang-term-control :z5]
     [:hr]
     [:h4 "Среда: " (fire/environment @lang-vars)]]
]

   [:hr]
   [:img {:src "/3.7.png"}]])

(defn electro-injure
  []
  [:div.padding-20
   [:h4 "Итог: "
    (fz/and
     (electro/human-factor @lang-vars)
     (electro/electro-station @lang-vars)
     (electro/environment @lang-vars))]
   
   [:div.row
    [:div.span3.bg-gray.padding-5
     [lang-term-control :x3]
     [lang-term-control :x4]
     [lang-term-control :x7]
     [:hr]
     [:h4 "Человеческий фактор: " (electro/human-factor @lang-vars)]
     ]
    
    [:div.span4.bg-gray.padding-5
     [lang-term-control :y3]
     [lang-term-control :y2]
     [lang-term-control :y1]
     [lang-term-control :y6]
     [:hr]
     [:h4 "Электроустановка: " (electro/electro-station @lang-vars)]
     ]

    [:div.span4.bg-gray.padding-5
     [lang-term-control :z1]
     [lang-term-control :z3]
     [lang-term-control :z5]
     [lang-term-control :z4]
     [:hr]
     [:h4 "Среда: " (electro/environment @lang-vars)]
     
     ]]

   [:hr]
   [:img {:src "/3.8.png"}]])

(defn accident-no-power []
  [:div.padding-20
   [:h4 "Итог: "
    (fz/and
     (accident/human-factor @lang-vars)
     (accident/electro-station @lang-vars)
     (accident/environment @lang-vars))]
   
   [:div.row
    [:div.span3.bg-gray.padding-5
     [lang-term-control :x1]
     [lang-term-control :x2]
     [lang-term-control :x4]
     [lang-term-control :x6]
     [lang-term-control :x7]
     [:hr]
     [:h4 "Человеческий фактор: " (accident/human-factor @lang-vars)]
     ]
    
    [:div.span4.bg-gray.padding-5
     [lang-term-control :y4]
     [lang-term-control :y2]
     [lang-term-control :y1]
     [lang-term-control :y7]
     [lang-term-control :y8]
     [lang-term-control :y6]
     [:hr]
     [:h4 "Электроустановка: " (accident/electro-station @lang-vars)]
     ]

    [:div.span4.bg-gray.padding-5
     [lang-term-control :z1]
     [lang-term-control :z3]
     [lang-term-control :z2]
     [lang-term-control :z4]
     [:hr]
     [:h4 "Среда: " (accident/environment @lang-vars)]
     
     ]]

   [:hr]
   [:img {:src "/3.9.png"}]])

(def pages
  [{:title "Пожар в электроустановке"
    :fn electro-fire}
   {:title "Электротравма с летальным исходом"
    :fn electro-injure}
   {:title "Авария -- перерыв энергоснабжения"
    :fn accident-no-power}])

(def current-page (atom (first pages)))

(defn nav-menu [pages current-page]
  [:ul.span12.nav.nav-pills
   (let [current-page-title (:title @current-page)]
     (for [page pages]
       [:li
        {:class (when (= (:title page) current-page-title) "active")}
        [:a
         {:href "#"
          :on-click #(reset! current-page page)}
         (:title page)]]))])
  
(defn layout []
  (fn []
    [:div.row
     [:div.span12
      [nav-menu pages current-page]
      [(:fn @current-page)]]]))

(defn ^:export run []
  (reagent/render [layout] (.getElementById js/document "app")))

(run)


