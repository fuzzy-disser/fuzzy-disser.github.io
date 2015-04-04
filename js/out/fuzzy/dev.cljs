(ns fuzzy.dev
  (:require [fuzzy.linear :as linear]
            [figwheel.client :as figwheel :include-macros true]

            [clojure.browser.repl]
            [reagent.core :as r]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3443/figwheel-ws"
  :jsload-callback (fn [] (r/force-update-all)))

(linear/init!)

;; (use 'figwheel-sidecar.repl-api)
;; (cljs-repl)
