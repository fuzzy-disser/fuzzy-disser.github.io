(ns cljs.fuzzy.fzlogic)

(defn and [x & next]
  (apply min x next))

(defn or [x & next]
  (apply max x next))

