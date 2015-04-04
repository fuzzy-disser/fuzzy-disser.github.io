(ns fuzzy.linear
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.cursor :as rc]
            [fuzzy.fzlogic :as fz]
            [fuzzy.schema :as schema]
            ))


(def lang-vars
  (atom
   {:x3 {:description "Соблюдение техники безопасности"
         :weight 0.036 :danger 1.36
         :value 0.5}

    :x4 {:description "Уровень профессионализма"
         :weight 0.034 :danger 1.28
         :value 0.5}
    :x7 {:description "Ошибки в оперативных решениях"
         :weight 0.022 :danger 0.08
         :value 0.1}


    :y3 {:description "Срок эксплуатации ЭУ"
         :weight 0.072 :danger 1.72
         :value 0.5}
    
    :y2 {:description "Степень износа изоляционных частей ЭУ"
         :weight 0.78 :danger 1.85
         :value 0.5}
    
    :y1 {:description "Уровень опасности возникновения аварийных режимов"
         :weight 0.093 :danger 3.01
         :value 0.5}
    
    :y6 {:description "Отказ(отсутствие) средств электрозашиты"
         :weight 0.045 :danger 1.06
         :value 0.9}

    
    :z1 {:description "Уровень деструктивных воздействий параметров микроклимата"
         :weight 0.055 :danger 2.62
         :value 0.5}
    
    :z3 {:description "Диагностика технического состояния ЭУ"
         :weight 0.042 :danger 2
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
  (let [term (rc/cursor [term-key] lang-vars)]
    [:div.input-prepend.padding-5
     [:label.add-on (str term-key)]
     [:input.span1 {:type "text"
                    :value (:value @term)
                    :on-change #(reset! term (assoc @term :value (-> % .-target .-value)))}]]))

(defn layout []
  (fn []
    [:div.padding-20
     [:h4 "Итог: "
      (fz/and
       (schema/human-factor @lang-vars)
       (schema/electro-station @lang-vars)
       (schema/environment @lang-vars))]
     
     [:div.row
      [:div.span3.bg-gray.padding-5
       [lang-term-control :x3]
       [lang-term-control :x4]
       [lang-term-control :x7]
       [:hr]
       [:h4 "Человеческий фактор: " (schema/human-factor @lang-vars)]
       ]
      
      [:div.span4.bg-gray.padding-5
       [lang-term-control :y3]
       [lang-term-control :y2]
       [lang-term-control :y1]
       [lang-term-control :y6]
       [:hr]
       [:h4 "Электроустановка: " (schema/electro-station @lang-vars)]
       ]

      [:div.span4.bg-gray.padding-5
       [lang-term-control :z1]
       [lang-term-control :z3]
       [lang-term-control :z5]
       [lang-term-control :z4]
       [:hr]
       [:h4 "Среда: " (schema/environment @lang-vars)]
       
       ]]

     [:hr]
     [:img {:src "/3.8.png"}]
     ]
    
    ))

(defn init! []
  (reagent/render [layout] (.getElementById js/document "app")))

(init!)

