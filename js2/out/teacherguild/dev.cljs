(ns teacherguild.dev
  (:require [teacherguild.adminzone :as adminzone]
            [figwheel.client :as figwheel :include-macros true]
            ;; [weasel.repl :as weasel]
            [clojure.browser.repl]
            [reagent.core :as r]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://teacherguild.core:3449/figwheel-ws"
  :jsload-callback (fn [] (r/force-update-all)))

;; (weasel/connect "ws://teacherguild.core:9001" :verbose true)

(adminzone/init!)
