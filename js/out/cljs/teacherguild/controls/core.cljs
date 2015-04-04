(ns cljs.teacherguild.controls.core)

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
