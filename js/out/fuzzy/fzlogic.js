// Compiled by ClojureScript 0.0-2850 {}
goog.provide('fuzzy.fzlogic');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
fuzzy.fzlogic.and = (function() { 
var and__delegate = function (x,next){
return cljs.core.apply.call(null,cljs.core.min,x,next);
};
var and = function (x,var_args){
var next = null;
if (arguments.length > 1) {
var G__29951__i = 0, G__29951__a = new Array(arguments.length -  1);
while (G__29951__i < G__29951__a.length) {G__29951__a[G__29951__i] = arguments[G__29951__i + 1]; ++G__29951__i;}
  next = new cljs.core.IndexedSeq(G__29951__a,0);
} 
return and__delegate.call(this,x,next);};
and.cljs$lang$maxFixedArity = 1;
and.cljs$lang$applyTo = (function (arglist__29952){
var x = cljs.core.first(arglist__29952);
var next = cljs.core.rest(arglist__29952);
return and__delegate(x,next);
});
and.cljs$core$IFn$_invoke$arity$variadic = and__delegate;
return and;
})()
;
/**
* @param {...*} var_args
*/
fuzzy.fzlogic.or = (function() { 
var or__delegate = function (x,next){
return cljs.core.apply.call(null,cljs.core.max,x,next);
};
var or = function (x,var_args){
var next = null;
if (arguments.length > 1) {
var G__29953__i = 0, G__29953__a = new Array(arguments.length -  1);
while (G__29953__i < G__29953__a.length) {G__29953__a[G__29953__i] = arguments[G__29953__i + 1]; ++G__29953__i;}
  next = new cljs.core.IndexedSeq(G__29953__a,0);
} 
return or__delegate.call(this,x,next);};
or.cljs$lang$maxFixedArity = 1;
or.cljs$lang$applyTo = (function (arglist__29954){
var x = cljs.core.first(arglist__29954);
var next = cljs.core.rest(arglist__29954);
return or__delegate(x,next);
});
or.cljs$core$IFn$_invoke$arity$variadic = or__delegate;
return or;
})()
;

//# sourceMappingURL=fzlogic.js.map?rel=1428071085654