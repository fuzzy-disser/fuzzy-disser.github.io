(ns fuzzy.schema.electro
  (:require [fuzzy.fzlogic :as fz]))

(defn human-factor [vars]
  (let [{{x3 :value x3-w :weight} :x3
         {x4 :value x4-w :weight} :x4
         {x7 :value x7-w :weight} :x7} vars]
    (fz/or (* x3 x3-w)
           (* x4 x4-w)
           (* x7 x7-w))))

(defn electro-station [vars]
  (let [{{y3 :value y3-w :weight} :y3
         {y2 :value y2-w :weight} :y2
         {y1 :value y1-w :weight} :y1
         {y6 :value y6-w :weight} :y6} vars]
    (fz/and
     (fz/and (* y3 y3-w)
             (* y2 y2-w)
             (* y1 y1-w))
     (* y6 y6-w))))

(defn environment [vars]
  (let [{{z1 :value z1-w :weight} :z1
         {z3 :value z3-w :weight} :z3
         {z5 :value z5-w :weight} :z5
         {z4 :value z4-w :weight} :z4} vars]
    (fz/and
     (fz/and (* z1 z1-w)
             (* z3 z3-w)
             (* z5 z5-w))
     (* z4 z4-w))))


