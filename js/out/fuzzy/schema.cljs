(ns fuzzy.schema
  (:require [fuzzy.fzlogic :as fz]))

(defn human-factor [vars]
  (let [{{x3 :value} :x3
         {x4 :value} :x4
         {x7 :value} :x7} vars]
    (fz/or x3 x4 x7)))

(defn electro-station [vars]
  (let [{{y3 :value} :y3
         {y2 :value} :y2
         {y1 :value} :y1
         {y6 :value} :y6} vars]
    (fz/and
     (fz/and y3 y2 y1) y6)))

(defn environment [vars]
  (let [{{z1 :value} :z1
         {z3 :value} :z3
         {z5 :value} :z5
         {z4 :value} :z4} vars]
    (fz/and
     (fz/and z1 z3 z5) z4)))

