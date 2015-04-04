// Compiled by ClojureScript 0.0-2850 {}
goog.provide('teacherguild.controls.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.cursor');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('teacherguild.db');
goog.require('clojure.string');
teacherguild.controls.core.hostname = "teacherguild.core";
teacherguild.controls.core.paginate = (function paginate(items,page_length){
if(cljs.core.empty_QMARK_.call(null,items)){
return items;
} else {
return cljs.core.conj.call(null,paginate.call(null,cljs.core.drop.call(null,page_length,items),page_length),cljs.core.take.call(null,page_length,items));
}
});
teacherguild.controls.core.paginator_control = (function paginator_control(items_count,page_atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pagination","div.pagination",-776363526),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.prev","li.prev",1745970768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),(0)))?"disabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),(0)))?(function (){
return cljs.core.List.EMPTY;
}):(function (){
return cljs.core.swap_BANG_.call(null,page_atom,cljs.core.dec);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-chevron-left","i.icon-chevron-left",-608183986)], null)], null)], null),(function (){var page = cljs.core.deref.call(null,page_atom);
var iter__24327__auto__ = ((function (page){
return (function iter__42636(s__42637){
return (new cljs.core.LazySeq(null,((function (page){
return (function (){
var s__42637__$1 = s__42637;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42637__$1);
if(temp__4126__auto__){
var s__42637__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42637__$2)){
var c__24325__auto__ = cljs.core.chunk_first.call(null,s__42637__$2);
var size__24326__auto__ = cljs.core.count.call(null,c__24325__auto__);
var b__42639 = cljs.core.chunk_buffer.call(null,size__24326__auto__);
if((function (){var i__42638 = (0);
while(true){
if((i__42638 < size__24326__auto__)){
var num = cljs.core._nth.call(null,c__24325__auto__,i__42638);
cljs.core.chunk_append.call(null,b__42639,(function (){var label = (num + (1));
if(cljs.core._EQ_.call(null,num,page)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),label], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42638,label,num,c__24325__auto__,size__24326__auto__,b__42639,s__42637__$2,temp__4126__auto__,page){
return (function (){
return cljs.core.reset_BANG_.call(null,page_atom,num);
});})(i__42638,label,num,c__24325__auto__,size__24326__auto__,b__42639,s__42637__$2,temp__4126__auto__,page))
], null),label], null)], null);
}
})());

var G__42640 = (i__42638 + (1));
i__42638 = G__42640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42639),iter__42636.call(null,cljs.core.chunk_rest.call(null,s__42637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42639),null);
}
} else {
var num = cljs.core.first.call(null,s__42637__$2);
return cljs.core.cons.call(null,(function (){var label = (num + (1));
if(cljs.core._EQ_.call(null,num,page)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),label], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (label,num,s__42637__$2,temp__4126__auto__,page){
return (function (){
return cljs.core.reset_BANG_.call(null,page_atom,num);
});})(label,num,s__42637__$2,temp__4126__auto__,page))
], null),label], null)], null);
}
})(),iter__42636.call(null,cljs.core.rest.call(null,s__42637__$2)));
}
} else {
return null;
}
break;
}
});})(page))
,null,null));
});})(page))
;
return iter__24327__auto__.call(null,cljs.core.range.call(null,items_count));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.next","li.next",-1856344692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),items_count))?"disabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),(items_count - (1))))?(function (){
return cljs.core.List.EMPTY;
}):(function (){
return cljs.core.swap_BANG_.call(null,page_atom,cljs.core.inc);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-chevron-right","i.icon-chevron-right",833194976)], null)], null)], null)], null)], null);
});
teacherguild.controls.core.is_visible = (function is_visible(is_visible__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,is_visible__$1))?"disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(cljs.core.deref.call(null,is_visible__$1))?(function (){
return cljs.core.List.EMPTY;
}):(function (){
return cljs.core.swap_BANG_.call(null,is_visible__$1,cljs.core.not);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-white.icon-ok","i.icon-white.icon-ok",-1206657743)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-danger","a.btn.btn-danger",2091300065),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,is_visible__$1))?null:"disabled"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(cljs.core.deref.call(null,is_visible__$1))?(function (){
return cljs.core.swap_BANG_.call(null,is_visible__$1,cljs.core.not);
}):(function (){
return cljs.core.List.EMPTY;
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-white.icon-remove","i.icon-white.icon-remove",-732439564)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.margin-left","span.label.margin-left",-1043252172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,is_visible__$1))?"label-success":"label-important")], null),(cljs.core.truth_(cljs.core.deref.call(null,is_visible__$1))?"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D":"\u041D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")], null)], null);
});

//# sourceMappingURL=core.js.map?rel=1426403145081