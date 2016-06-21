// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('teacherguild.dev')) {
goog.provide('teacherguild.dev');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.browser.repl');
goog.require('figwheel.client');
goog.require('teacherguild.adminzone');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://teacherguild.core:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return reagent.core.force_update_all.call(null);
}));
teacherguild.adminzone.init_BANG_.call(null);

//# sourceMappingURL=dev.js.map?rel=1422975354509