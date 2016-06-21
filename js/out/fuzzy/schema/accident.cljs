(ns fuzzy.schema.accident
  (:require [fuzzy.fzlogic :as fz])
  (:require-macros [fuzzy.template :refer [defschema]]))

(defschema human-factor [or x1 x2 x4 x6 x7])

(defn electro-station [vars]
  (let [{{y4 :value y4-w :weight} :y4
         {y2 :value y2-w :weight} :y2
         {y1 :value y1-w :weight} :y1
         {y8 :value y8-w :weight} :y8
         {y7 :value y7-w :weight} :y7
         {y6 :value y6-w :weight} :y6} vars]
    (fz/or
     (fz/and
      (* y1 y1-w)
      (fz/or (* y2 y2-w) (* y4 y4-w))
      (* y1 y1-w))
     (fz/and    
      (fz/or (* y6 y6-w) (* y8 y8-w))
      (* y7 y7-w)))))

(defn environment [vars]
  (let [{{z1 :value z1-w :weight} :z1
         {z2 :value z2-w :weight} :z2
         {z3 :value z3-w :weight} :z3
         {z4 :value z4-w :weight} :z4} vars]
    (fz/or (* z1 z1-w)
           (* z2 z2-w)
           (* z3 z3-w)
           (* z4 z4-w))))


