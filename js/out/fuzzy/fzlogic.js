// Compiled by ClojureScript 1.9.76 {}
goog.provide('fuzzy.fzlogic');
goog.require('cljs.core');
fuzzy.fzlogic.and = (function fuzzy$fzlogic$and(var_args){
var args__7297__auto__ = [];
var len__7290__auto___7346 = arguments.length;
var i__7291__auto___7347 = (0);
while(true){
if((i__7291__auto___7347 < len__7290__auto___7346)){
args__7297__auto__.push((arguments[i__7291__auto___7347]));

var G__7348 = (i__7291__auto___7347 + (1));
i__7291__auto___7347 = G__7348;
continue;
} else {
}
break;
}

var argseq__7298__auto__ = ((((1) < args__7297__auto__.length))?(new cljs.core.IndexedSeq(args__7297__auto__.slice((1)),(0),null)):null);
return fuzzy.fzlogic.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7298__auto__);
});

fuzzy.fzlogic.and.cljs$core$IFn$_invoke$arity$variadic = (function (x,next){
return cljs.core.apply.call(null,cljs.core.min,x,next);
});

fuzzy.fzlogic.and.cljs$lang$maxFixedArity = (1);

fuzzy.fzlogic.and.cljs$lang$applyTo = (function (seq7344){
var G__7345 = cljs.core.first.call(null,seq7344);
var seq7344__$1 = cljs.core.next.call(null,seq7344);
return fuzzy.fzlogic.and.cljs$core$IFn$_invoke$arity$variadic(G__7345,seq7344__$1);
});

fuzzy.fzlogic.or = (function fuzzy$fzlogic$or(var_args){
var args__7297__auto__ = [];
var len__7290__auto___7351 = arguments.length;
var i__7291__auto___7352 = (0);
while(true){
if((i__7291__auto___7352 < len__7290__auto___7351)){
args__7297__auto__.push((arguments[i__7291__auto___7352]));

var G__7353 = (i__7291__auto___7352 + (1));
i__7291__auto___7352 = G__7353;
continue;
} else {
}
break;
}

var argseq__7298__auto__ = ((((1) < args__7297__auto__.length))?(new cljs.core.IndexedSeq(args__7297__auto__.slice((1)),(0),null)):null);
return fuzzy.fzlogic.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7298__auto__);
});

fuzzy.fzlogic.or.cljs$core$IFn$_invoke$arity$variadic = (function (x,next){
return cljs.core.apply.call(null,cljs.core.max,x,next);
});

fuzzy.fzlogic.or.cljs$lang$maxFixedArity = (1);

fuzzy.fzlogic.or.cljs$lang$applyTo = (function (seq7349){
var G__7350 = cljs.core.first.call(null,seq7349);
var seq7349__$1 = cljs.core.next.call(null,seq7349);
return fuzzy.fzlogic.or.cljs$core$IFn$_invoke$arity$variadic(G__7350,seq7349__$1);
});


//# sourceMappingURL=fzlogic.js.map?rel=1466484248781