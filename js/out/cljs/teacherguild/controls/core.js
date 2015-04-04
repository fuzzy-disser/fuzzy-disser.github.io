// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.teacherguild.controls.core');
goog.require('cljs.core');
cljs.teacherguild.controls.core.hostname = "teacherguild.core";
cljs.teacherguild.controls.core.paginate = (function paginate(items,page_length){
if(cljs.core.empty_QMARK_.call(null,items)){
return items;
} else {
return cljs.core.conj.call(null,paginate.call(null,cljs.core.drop.call(null,page_length,items),page_length),cljs.core.take.call(null,page_length,items));
}
});
cljs.teacherguild.controls.core.paginator_control = (function paginator_control(items_count,page_atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pagination","div.pagination",-776363526),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.prev","li.prev",1745970768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),(0)))?"disabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),(0)))?(function (){
return cljs.core.List.EMPTY;
}):(function (){
return cljs.core.swap_BANG_.call(null,page_atom,cljs.core.dec);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-chevron-left","i.icon-chevron-left",-608183986)], null)], null)], null),(function (){var page = cljs.core.deref.call(null,page_atom);
var iter__24287__auto__ = ((function (page){
return (function iter__39402(s__39403){
return (new cljs.core.LazySeq(null,((function (page){
return (function (){
var s__39403__$1 = s__39403;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39403__$1);
if(temp__4126__auto__){
var s__39403__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39403__$2)){
var c__24285__auto__ = cljs.core.chunk_first.call(null,s__39403__$2);
var size__24286__auto__ = cljs.core.count.call(null,c__24285__auto__);
var b__39405 = cljs.core.chunk_buffer.call(null,size__24286__auto__);
if((function (){var i__39404 = (0);
while(true){
if((i__39404 < size__24286__auto__)){
var num = cljs.core._nth.call(null,c__24285__auto__,i__39404);
cljs.core.chunk_append.call(null,b__39405,(function (){var label = (num + (1));
if(cljs.core._EQ_.call(null,num,page)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),label], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39404,label,num,c__24285__auto__,size__24286__auto__,b__39405,s__39403__$2,temp__4126__auto__,page){
return (function (){
return cljs.core.reset_BANG_.call(null,page_atom,num);
});})(i__39404,label,num,c__24285__auto__,size__24286__auto__,b__39405,s__39403__$2,temp__4126__auto__,page))
], null),label], null)], null);
}
})());

var G__39406 = (i__39404 + (1));
i__39404 = G__39406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39405),iter__39402.call(null,cljs.core.chunk_rest.call(null,s__39403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39405),null);
}
} else {
var num = cljs.core.first.call(null,s__39403__$2);
return cljs.core.cons.call(null,(function (){var label = (num + (1));
if(cljs.core._EQ_.call(null,num,page)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.active","li.active",-1051611101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),label], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (label,num,s__39403__$2,temp__4126__auto__,page){
return (function (){
return cljs.core.reset_BANG_.call(null,page_atom,num);
});})(label,num,s__39403__$2,temp__4126__auto__,page))
], null),label], null)], null);
}
})(),iter__39402.call(null,cljs.core.rest.call(null,s__39403__$2)));
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
return iter__24287__auto__.call(null,cljs.core.range.call(null,items_count));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.next","li.next",-1856344692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),items_count))?"disabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,page_atom),(items_count - (1))))?(function (){
return cljs.core.List.EMPTY;
}):(function (){
return cljs.core.swap_BANG_.call(null,page_atom,cljs.core.inc);
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-chevron-right","i.icon-chevron-right",833194976)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=core.js.map?rel=1426067847499