// Compiled by ClojureScript 0.0-2850 {}
goog.provide('teacherguild.controls.requests');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.cursor');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('teacherguild.db');
goog.require('clojure.string');
teacherguild.controls.requests.request_body = (function request_body(request){
console.log([cljs.core.str(request)].join(''));

var map__49278 = request;
var map__49278__$1 = ((cljs.core.seq_QMARK_.call(null,map__49278))?cljs.core.apply.call(null,cljs.core.hash_map,map__49278):map__49278);
var place = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"place","place",-819689466));
var teacher = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"teacher","teacher",134233734));
var subjects = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"subjects","subjects",21416729));
var email = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var city = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"city","city",-393302614));
var phone = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"phone","phone",-763596057));
var otherinfo = cljs.core.get.call(null,map__49278__$1,new cljs.core.Keyword(null,"otherinfo","otherinfo",1694298423));
var subject = cljs.core.first.call(null,subjects);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.no-disk","ul.no-disk",-524596971),(cljs.core.truth_(phone)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-user","i.icon-user",220353789)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),phone], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-globe","i.icon-globe",-2021741079)], null)," ",(cljs.core.truth_(city)?city:"\u0411\u0430\u0440\u043D\u0430\u0443\u043B")], null),(cljs.core.truth_(email)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"@ "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(email)].join('')], null),email], null)], null):null),(cljs.core.truth_(place)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-home","i.icon-home",129664011)], null)," ",place], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),otherinfo], null)], null);
});
teacherguild.controls.requests.mark_read_BANG_ = (function mark_read_BANG_(req,after_save_hook){
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__){
return (function (state_49317){
var state_val_49318 = (state_49317[(1)]);
if((state_val_49318 === (5))){
var inst_49315 = (state_49317[(2)]);
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49317__$1,inst_49315);
} else {
if((state_val_49318 === (4))){
var inst_49307 = (state_49317[(7)]);
var inst_49312 = [cljs.core.str(inst_49307)].join('');
var inst_49313 = console.error(inst_49312);
var state_49317__$1 = state_49317;
var statearr_49319_49331 = state_49317__$1;
(statearr_49319_49331[(2)] = inst_49313);

(statearr_49319_49331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (3))){
var inst_49310 = after_save_hook.call(null);
var state_49317__$1 = state_49317;
var statearr_49320_49332 = state_49317__$1;
(statearr_49320_49332[(2)] = inst_49310);

(statearr_49320_49332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (2))){
var inst_49307 = (state_49317[(7)]);
var inst_49307__$1 = (state_49317[(2)]);
var inst_49308 = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(inst_49307__$1);
var state_49317__$1 = (function (){var statearr_49321 = state_49317;
(statearr_49321[(7)] = inst_49307__$1);

return statearr_49321;
})();
if(cljs.core.truth_(inst_49308)){
var statearr_49322_49333 = state_49317__$1;
(statearr_49322_49333[(1)] = (3));

} else {
var statearr_49323_49334 = state_49317__$1;
(statearr_49323_49334[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49318 === (1))){
var inst_49305 = teacherguild.db.mark_request_read_BANG_.call(null,req);
var state_49317__$1 = state_49317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49317__$1,(2),inst_49305);
} else {
return null;
}
}
}
}
}
});})(c__26243__auto__))
;
return ((function (switch__26187__auto__,c__26243__auto__){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_49327 = [null,null,null,null,null,null,null,null];
(statearr_49327[(0)] = state_machine__26188__auto__);

(statearr_49327[(1)] = (1));

return statearr_49327;
});
var state_machine__26188__auto____1 = (function (state_49317){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_49317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e49328){if((e49328 instanceof Object)){
var ex__26191__auto__ = e49328;
var statearr_49329_49335 = state_49317;
(statearr_49329_49335[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49336 = state_49317;
state_49317 = G__49336;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_49317){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_49317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__))
})();
var state__26245__auto__ = (function (){var statearr_49330 = f__26244__auto__.call(null);
(statearr_49330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_49330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__))
);

return c__26243__auto__;
});
teacherguild.controls.requests.request_modal = (function request_modal(request,after_save_hook){
return (function (request__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.hide.fade","div.modal.hide.fade",643774002),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"myModal",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.pull-right","div.btn-group.pull-right",-1331711878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return teacherguild.controls.requests.mark_read_BANG_.call(null,cljs.core.deref.call(null,request__$1),after_save_hook);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-ok.icon-white","i.icon-ok.icon-white",520184939)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-danger","a.btn.btn-danger",2091300065),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-remove.icon-white","i.icon-remove.icon-white",1937250424)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"myMoladLabel"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,request__$1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.requests.request_body,cljs.core.deref.call(null,request__$1)], null)], null);
});
});
teacherguild.controls.requests.requests_table = (function requests_table(current_request,requests){
return (function (current_request__$1,requests__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped","table.table.table-striped",-1226196412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__24327__auto__ = (function iter__49341(s__49342){
return (new cljs.core.LazySeq(null,(function (){
var s__49342__$1 = s__49342;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49342__$1);
if(temp__4126__auto__){
var s__49342__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49342__$2)){
var c__24325__auto__ = cljs.core.chunk_first.call(null,s__49342__$2);
var size__24326__auto__ = cljs.core.count.call(null,c__24325__auto__);
var b__49344 = cljs.core.chunk_buffer.call(null,size__24326__auto__);
if((function (){var i__49343 = (0);
while(true){
if((i__49343 < size__24326__auto__)){
var request = cljs.core._nth.call(null,c__24325__auto__,i__49343);
cljs.core.chunk_append.call(null,b__49344,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(request))?null:"bold")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.visible","td.visible",561646978),(cljs.core.truth_(new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(request))?null:"*")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-danger.btn-small","a.btn.btn-danger.btn-small",649538959),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#myModal",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49343,request,c__24325__auto__,size__24326__auto__,b__49344,s__49342__$2,temp__4126__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,current_request__$1,request);
});})(i__49343,request,c__24325__auto__,size__24326__auto__,b__49344,s__49342__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-search.icon-white","i.icon-search.icon-white",-2120083485)], null)], null)], null)], null));

var G__49345 = (i__49343 + (1));
i__49343 = G__49345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49344),iter__49341.call(null,cljs.core.chunk_rest.call(null,s__49342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49344),null);
}
} else {
var request = cljs.core.first.call(null,s__49342__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(request))?null:"bold")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.visible","td.visible",561646978),(cljs.core.truth_(new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(request))?null:"*")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"processed","processed",800622264).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(request)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-danger.btn-small","a.btn.btn-danger.btn-small",649538959),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#myModal",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (request,s__49342__$2,temp__4126__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,current_request__$1,request);
});})(request,s__49342__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-search.icon-white","i.icon-search.icon-white",-2120083485)], null)], null)], null)], null),iter__49341.call(null,cljs.core.rest.call(null,s__49342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24327__auto__.call(null,cljs.core.deref.call(null,requests__$1));
})()], null)], null)], null);
});
});

//# sourceMappingURL=requests.js.map?rel=1426571802223