(ns fuzzy.schema.fire
  (:require [fuzzy.fzlogic :as fz]))

(defn human-factor [vars]
  (let [{{x3 :value x3-w :weight} :x3
         {x4 :value x4-w :weight} :x4
         {x10 :value x10-w :weight} :x10} vars]
    (fz/or (* x3 x3-w)
           (* x4 x4-w)
           (* x10 x10-w))))

(defn electro-station [vars]
  (let [{{y5 :value y5-w :weight} :y5
         {z3 :value z3-w :weight} :z3
         {y1 :value y1-w :weight} :y1
         {y4 :value y4-w :weight} :y4
         {z1 :value z1-w :weight} :z1} vars]
    (fz/or
     (fz/and (* y1 y1-w)
             (* z3 z3-w)
             (* y5 y5-w))
     (fz/and (* y4 y4-w)
             (* z1 z1-w)
             (* y5 y5-w)))))

(defn environment [vars]
  (let [{{y6 :value y6-w :weight} :y6
         {y8 :value y8-w :weight} :y8
         {z5 :value z5-w :weight} :z5} vars]
     (fz/and (* y6 y6-w)
             (* y8 y8-w)
             (* z5 z5-w))))



