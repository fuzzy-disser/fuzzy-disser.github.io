// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25686_25690 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25687_25691 = null;
var count__25688_25692 = (0);
var i__25689_25693 = (0);
while(true){
if((i__25689_25693 < count__25688_25692)){
var f_25694 = cljs.core._nth.call(null,chunk__25687_25691,i__25689_25693);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_25694);

var G__25695 = seq__25686_25690;
var G__25696 = chunk__25687_25691;
var G__25697 = count__25688_25692;
var G__25698 = (i__25689_25693 + (1));
seq__25686_25690 = G__25695;
chunk__25687_25691 = G__25696;
count__25688_25692 = G__25697;
i__25689_25693 = G__25698;
continue;
} else {
var temp__4126__auto___25699 = cljs.core.seq.call(null,seq__25686_25690);
if(temp__4126__auto___25699){
var seq__25686_25700__$1 = temp__4126__auto___25699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25686_25700__$1)){
var c__19489__auto___25701 = cljs.core.chunk_first.call(null,seq__25686_25700__$1);
var G__25702 = cljs.core.chunk_rest.call(null,seq__25686_25700__$1);
var G__25703 = c__19489__auto___25701;
var G__25704 = cljs.core.count.call(null,c__19489__auto___25701);
var G__25705 = (0);
seq__25686_25690 = G__25702;
chunk__25687_25691 = G__25703;
count__25688_25692 = G__25704;
i__25689_25693 = G__25705;
continue;
} else {
var f_25706 = cljs.core.first.call(null,seq__25686_25700__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_25706);

var G__25707 = cljs.core.next.call(null,seq__25686_25700__$1);
var G__25708 = null;
var G__25709 = (0);
var G__25710 = (0);
seq__25686_25690 = G__25707;
chunk__25687_25691 = G__25708;
count__25688_25692 = G__25709;
i__25689_25693 = G__25710;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1422974591332