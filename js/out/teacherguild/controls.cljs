(ns teacherguild.controls
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [reagent.cursor :as rc]
            [clojure.string :as string]
            [cljs.core.async :as async :refer [chan <! >! put!]]
            ;; [cljs-time.format :as time-format]
            ;; [cljs-time.core :as time]
            [teacherguild.db :as db])
  
  (:require-macros
   [cljs.core.async.macros :refer [go]]))










