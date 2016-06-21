// Compiled by ClojureScript 1.9.76 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__7515__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7516__i = 0, G__7516__a = new Array(arguments.length -  0);
while (G__7516__i < G__7516__a.length) {G__7516__a[G__7516__i] = arguments[G__7516__i + 0]; ++G__7516__i;}
  args = new cljs.core.IndexedSeq(G__7516__a,0);
} 
return G__7515__delegate.call(this,args);};
G__7515.cljs$lang$maxFixedArity = 0;
G__7515.cljs$lang$applyTo = (function (arglist__7517){
var args = cljs.core.seq(arglist__7517);
return G__7515__delegate(args);
});
G__7515.cljs$core$IFn$_invoke$arity$variadic = G__7515__delegate;
return G__7515;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7518__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7519__i = 0, G__7519__a = new Array(arguments.length -  0);
while (G__7519__i < G__7519__a.length) {G__7519__a[G__7519__i] = arguments[G__7519__i + 0]; ++G__7519__i;}
  args = new cljs.core.IndexedSeq(G__7519__a,0);
} 
return G__7518__delegate.call(this,args);};
G__7518.cljs$lang$maxFixedArity = 0;
G__7518.cljs$lang$applyTo = (function (arglist__7520){
var args = cljs.core.seq(arglist__7520);
return G__7518__delegate(args);
});
G__7518.cljs$core$IFn$_invoke$arity$variadic = G__7518__delegate;
return G__7518;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1466484249321