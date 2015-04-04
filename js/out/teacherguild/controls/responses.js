// Compiled by ClojureScript 0.0-2850 {}
goog.provide('teacherguild.controls.responses');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.cursor');
goog.require('teacherguild.controls.core');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('teacherguild.db');
goog.require('clojure.string');
teacherguild.controls.responses.mark_button = (function mark_button(editing,response){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,response)))?"btn-success":"btn-danger"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,response,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345)], null),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-white","i.icon-white",658248705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,response)))?"icon-thumbs-up":"icon-thumbs-down")], null)], null)], null);
});
teacherguild.controls.responses.response_is_visible = (function response_is_visible(is_visible){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-margin-top","div.no-margin-top",1838522664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span1.margin-bottom","div.span1.margin-bottom",1847894135),(cljs.core.truth_(cljs.core.deref.call(null,is_visible))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,is_visible,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-white.icon-ok","i.icon-white.icon-ok",-1206657743)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-danger","a.btn.btn-danger",2091300065),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,is_visible,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-white.icon-remove","i.icon-white.icon-remove",-732439564)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,is_visible))?"label-success":"label-important")], null),(cljs.core.truth_(cljs.core.deref.call(null,is_visible))?"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D":"\u041D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")], null)], null);
});
teacherguild.controls.responses.repsponse_control = (function repsponse_control(response){
var editing = reagent.core.atom.call(null,false);
var updated = reagent.core.atom.call(null,false);
return ((function (editing,updated){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row","tr.row",95654142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"isvisible","isvisible",288730677).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,response)))?null:"bold")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.span2","td.span2",-2015020849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.responses.response_is_visible,reagent.cursor.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isvisible","isvisible",288730677)], null),response)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.span1","td.span1",-10689416),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.responses.mark_button,editing,response], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.span1","td.span1",-10689416),cljs.core.get_in.call(null,cljs.core.deref.call(null,response),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teacher","teacher",134233734),new cljs.core.Keyword(null,"surname","surname",1407918027)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.span8","td.span8",1050307558),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.maximized","textarea.maximized",494299854),new cljs.core.Keyword(null,"responsetext","responsetext",2104440411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,response))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.editable","pre.editable",-1757014487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editing,updated){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(editing,updated))
], null),new cljs.core.Keyword(null,"responsetext","responsetext",2104440411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,response))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.span2","td.span2",-2015020849),(cljs.core.truth_(cljs.core.deref.call(null,editing))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.btn-small","button.btn.btn-success.btn-small",-290726180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editing,updated){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,false);
});})(editing,updated))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-ok.icon-white","i.icon-ok.icon-white",520184939)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-small","button.btn.btn-danger.btn-small",-1674944859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editing,updated){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,false);
});})(editing,updated))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-remove.icon-white","i.icon-remove.icon-white",1937250424)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn-small","button.btn.btn-danger.btn-small",-1674944859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editing,updated){
return (function (){
return cljs.core.reset_BANG_.call(null,editing,true);
});})(editing,updated))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-pencil.icon-white","i.icon-pencil.icon-white",-805281107)], null)], null))], null)], null);
});
;})(editing,updated))
});
teacherguild.controls.responses.responses_table = (function responses_table(){
var ch = teacherguild.db.get_responses.call(null);
var responses = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__26243__auto___44170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto___44170,ch,responses){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto___44170,ch,responses){
return (function (state_44157){
var state_val_44158 = (state_44157[(1)]);
if((state_val_44158 === (2))){
var inst_44154 = (state_44157[(2)]);
var inst_44155 = cljs.core.reset_BANG_.call(null,responses,inst_44154);
var state_44157__$1 = state_44157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44157__$1,inst_44155);
} else {
if((state_val_44158 === (1))){
var state_44157__$1 = state_44157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44157__$1,(2),ch);
} else {
return null;
}
}
});})(c__26243__auto___44170,ch,responses))
;
return ((function (switch__26187__auto__,c__26243__auto___44170,ch,responses){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_44162 = [null,null,null,null,null,null,null];
(statearr_44162[(0)] = state_machine__26188__auto__);

(statearr_44162[(1)] = (1));

return statearr_44162;
});
var state_machine__26188__auto____1 = (function (state_44157){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_44157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e44163){if((e44163 instanceof Object)){
var ex__26191__auto__ = e44163;
var statearr_44164_44171 = state_44157;
(statearr_44164_44171[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44172 = state_44157;
state_44157 = G__44172;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_44157){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_44157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto___44170,ch,responses))
})();
var state__26245__auto__ = (function (){var statearr_44165 = f__26244__auto__.call(null);
(statearr_44165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto___44170);

return statearr_44165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto___44170,ch,responses))
);


return ((function (ch,responses){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success.btn-large.pull-right.margin-bottom","a.btn.btn-success.btn-large.pull-right.margin-bottom",-475365838),"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__24327__auto__ = ((function (ch,responses){
return (function iter__44166(s__44167){
return (new cljs.core.LazySeq(null,((function (ch,responses){
return (function (){
var s__44167__$1 = s__44167;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44167__$1);
if(temp__4126__auto__){
var s__44167__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44167__$2)){
var c__24325__auto__ = cljs.core.chunk_first.call(null,s__44167__$2);
var size__24326__auto__ = cljs.core.count.call(null,c__24325__auto__);
var b__44169 = cljs.core.chunk_buffer.call(null,size__24326__auto__);
if((function (){var i__44168 = (0);
while(true){
if((i__44168 < size__24326__auto__)){
var response = cljs.core._nth.call(null,c__24325__auto__,i__44168);
cljs.core.chunk_append.call(null,b__44169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.responses.repsponse_control,reagent.core.atom.call(null,response)], null));

var G__44173 = (i__44168 + (1));
i__44168 = G__44173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44169),iter__44166.call(null,cljs.core.chunk_rest.call(null,s__44167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44169),null);
}
} else {
var response = cljs.core.first.call(null,s__44167__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.responses.repsponse_control,reagent.core.atom.call(null,response)], null),iter__44166.call(null,cljs.core.rest.call(null,s__44167__$2)));
}
} else {
return null;
}
break;
}
});})(ch,responses))
,null,null));
});})(ch,responses))
;
return iter__24327__auto__.call(null,cljs.core.deref.call(null,responses));
})()], null)], null)], null);
});
;})(ch,responses))
});

//# sourceMappingURL=responses.js.map?rel=1426404861641