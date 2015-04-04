// Compiled by ClojureScript 0.0-2850 {}
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
var seq__41545_41549 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41546_41550 = null;
var count__41547_41551 = (0);
var i__41548_41552 = (0);
while(true){
if((i__41548_41552 < count__41547_41551)){
var f_41553 = cljs.core._nth.call(null,chunk__41546_41550,i__41548_41552);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_41553);

var G__41554 = seq__41545_41549;
var G__41555 = chunk__41546_41550;
var G__41556 = count__41547_41551;
var G__41557 = (i__41548_41552 + (1));
seq__41545_41549 = G__41554;
chunk__41546_41550 = G__41555;
count__41547_41551 = G__41556;
i__41548_41552 = G__41557;
continue;
} else {
var temp__4126__auto___41558 = cljs.core.seq.call(null,seq__41545_41549);
if(temp__4126__auto___41558){
var seq__41545_41559__$1 = temp__4126__auto___41558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41545_41559__$1)){
var c__24331__auto___41560 = cljs.core.chunk_first.call(null,seq__41545_41559__$1);
var G__41561 = cljs.core.chunk_rest.call(null,seq__41545_41559__$1);
var G__41562 = c__24331__auto___41560;
var G__41563 = cljs.core.count.call(null,c__24331__auto___41560);
var G__41564 = (0);
seq__41545_41549 = G__41561;
chunk__41546_41550 = G__41562;
count__41547_41551 = G__41563;
i__41548_41552 = G__41564;
continue;
} else {
var f_41565 = cljs.core.first.call(null,seq__41545_41559__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_41565);

var G__41566 = cljs.core.next.call(null,seq__41545_41559__$1);
var G__41567 = null;
var G__41568 = (0);
var G__41569 = (0);
seq__41545_41549 = G__41566;
chunk__41546_41550 = G__41567;
count__41547_41551 = G__41568;
i__41548_41552 = G__41569;
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

//# sourceMappingURL=repl.js.map?rel=1425613930264