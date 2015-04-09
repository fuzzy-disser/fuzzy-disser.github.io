// Compiled by ClojureScript 0.0-2850 {}
goog.provide('fuzzy.fzlogic');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
fuzzy.fzlogic.and = (function() { 
var and__delegate = function (x,next){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min,x,next);
};
var and = function (x,var_args){
var next = null;
if (arguments.length > 1) {
var G__9949__i = 0, G__9949__a = new Array(arguments.length -  1);
while (G__9949__i < G__9949__a.length) {G__9949__a[G__9949__i] = arguments[G__9949__i + 1]; ++G__9949__i;}
  next = new cljs.core.IndexedSeq(G__9949__a,0);
} 
return and__delegate.call(this,x,next);};
and.cljs$lang$maxFixedArity = 1;
and.cljs$lang$applyTo = (function (arglist__9950){
var x = cljs.core.first(arglist__9950);
var next = cljs.core.rest(arglist__9950);
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,x,next);
};
var or = function (x,var_args){
var next = null;
if (arguments.length > 1) {
var G__9951__i = 0, G__9951__a = new Array(arguments.length -  1);
while (G__9951__i < G__9951__a.length) {G__9951__a[G__9951__i] = arguments[G__9951__i + 1]; ++G__9951__i;}
  next = new cljs.core.IndexedSeq(G__9951__a,0);
} 
return or__delegate.call(this,x,next);};
or.cljs$lang$maxFixedArity = 1;
or.cljs$lang$applyTo = (function (arglist__9952){
var x = cljs.core.first(arglist__9952);
var next = cljs.core.rest(arglist__9952);
return or__delegate(x,next);
});
or.cljs$core$IFn$_invoke$arity$variadic = or__delegate;
return or;
})()
;
