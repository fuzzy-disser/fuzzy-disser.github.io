// Compiled by ClojureScript 0.0-2850 {}
goog.provide('teacherguild.db');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
teacherguild.db.db_host = "http://couch.db";
teacherguild.db.api_host = "http://teacherguild.core/api";
teacherguild.db.get_db_data = (function get_db_data(href,processf){
var ret = cljs.core.async.chan.call(null);
var handler = cljs.core.comp.call(null,((function (ret){
return (function (p1__50359_SHARP_){
return cljs.core.async.put_BANG_.call(null,ret,p1__50359_SHARP_);
});})(ret))
,processf);
ajax.core.GET.call(null,[cljs.core.str(teacherguild.db.db_host),cljs.core.str(href)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));

return ret;
});
teacherguild.db.get_api_data = (function get_api_data(endpoint,processf){
var ret = cljs.core.async.chan.call(null);
var handler = cljs.core.comp.call(null,((function (ret){
return (function (p1__50360_SHARP_){
return cljs.core.async.put_BANG_.call(null,ret,p1__50360_SHARP_);
});})(ret))
,processf);
ajax.core.GET.call(null,[cljs.core.str(teacherguild.db.api_host),cljs.core.str(endpoint)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),true,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));

return ret;
});
teacherguild.db.get_view = (function get_view(db,design,view,processf){
return teacherguild.db.get_db_data.call(null,[cljs.core.str("/"),cljs.core.str(db),cljs.core.str("/_design/"),cljs.core.str(design),cljs.core.str("/_view/"),cljs.core.str(view)].join(''),processf);
});
teacherguild.db.get_subjects = (function get_subjects(){
return teacherguild.db.get_api_data.call(null,"/subjects",cljs.core.identity);
});
teacherguild.db.vec_to_map = (function() {
var vec_to_map = null;
var vec_to_map__2 = (function (v,k){
return vec_to_map.call(null,v,k,cljs.core.PersistentArrayMap.EMPTY);
});
var vec_to_map__3 = (function (v,k,m){
if(cljs.core.truth_(cljs.core.first.call(null,v))){
return vec_to_map.call(null,cljs.core.rest.call(null,v),k,cljs.core.assoc.call(null,m,cljs.core.get.call(null,cljs.core.first.call(null,v),k),cljs.core.first.call(null,v)));
} else {
return m;
}
});
vec_to_map = function(v,k,m){
switch(arguments.length){
case 2:
return vec_to_map__2.call(this,v,k);
case 3:
return vec_to_map__3.call(this,v,k,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vec_to_map.cljs$core$IFn$_invoke$arity$2 = vec_to_map__2;
vec_to_map.cljs$core$IFn$_invoke$arity$3 = vec_to_map__3;
return vec_to_map;
})()
;
teacherguild.db.get_subjects_by_name = (function get_subjects_by_name(){
return teacherguild.db.get_view.call(null,"subjects","subjects","by-name",(function (p1__50361_SHARP_){
return teacherguild.db.vec_to_map.call(null,cljs.core.get_in.call(null,p1__50361_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"name","name",1843675177));
}));
});
teacherguild.db.get_cities = (function get_cities(){
return teacherguild.db.get_view.call(null,"cities","all-cities","by-priority",(function (p1__50362_SHARP_){
return cljs.core.get_in.call(null,p1__50362_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"value","value",305978217)], null));
}));
});
teacherguild.db.get_teachers = (function get_teachers(){
return teacherguild.db.get_view.call(null,"teachers","teachers","by-recency?reduce=false&descending=true",(function (p1__50363_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,p1__50363_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null))));
}));
});
teacherguild.db.get_responses = (function get_responses(){
return teacherguild.db.get_view.call(null,"teachers","all-responses","by-recency?reduce=false&descending=true",(function (p1__50364_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,p1__50364_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null))));
}));
});
teacherguild.db.get_requests = (function get_requests(){
return teacherguild.db.get_view.call(null,"requests","all-requests","by-recency?reduce=false&descending=true",(function (p1__50365_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,p1__50365_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null))));
}));
});
teacherguild.db.keywordize_collection = (function keywordize_collection(coll){
var ks = cljs.core.map.call(null,(function (p1__50366_SHARP_){
return cljs.core.keyword.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__50366_SHARP_)));
}),coll);
var vals = cljs.core.map.call(null,((function (ks){
return (function (p1__50367_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__50367_SHARP_);
});})(ks))
,coll);
return cljs.core.zipmap.call(null,ks,vals);
});
teacherguild.db.get_texts = (function get_texts(){
return teacherguild.db.get_view.call(null,"texts","all-texts","by-name",(function (p1__50368_SHARP_){
return teacherguild.db.keywordize_collection.call(null,cljs.core.get_in.call(null,p1__50368_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null)));
}));
});
teacherguild.db.get_meta = (function get_meta(){
return teacherguild.db.get_view.call(null,"meta","all-meta","by-name",(function (p1__50369_SHARP_){
return teacherguild.db.keywordize_collection.call(null,cljs.core.get_in.call(null,p1__50369_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null)));
}));
});
teacherguild.db.put_db_data_BANG_ = (function put_db_data_BANG_(href,data){
var ret = cljs.core.async.chan.call(null);
var handler = ((function (ret){
return (function (p1__50370_SHARP_){
return cljs.core.async.put_BANG_.call(null,ret,p1__50370_SHARP_);
});})(ret))
;
ajax.core.PUT.call(null,[cljs.core.str(teacherguild.db.db_host),cljs.core.str(href)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),true,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));

return ret;
});
teacherguild.db.save_document_BANG_ = (function save_document_BANG_(db,doc){
console.log([cljs.core.str(new cljs.core.Keyword(null,"_rev","_rev",-756256188).cljs$core$IFn$_invoke$arity$1(doc))].join(''));

return teacherguild.db.put_db_data_BANG_.call(null,[cljs.core.str("/"),cljs.core.str(db),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(doc))].join(''),doc);
});
teacherguild.db.save_teacher_BANG_ = (function save_teacher_BANG_(teacher){
return teacherguild.db.save_document_BANG_.call(null,"teachers",teacher);
});
teacherguild.db.get_all_teachers = (function get_all_teachers(teachers_atom,transform_fn){
var ch = teacherguild.db.get_teachers.call(null);
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__,ch){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__,ch){
return (function (state_50390){
var state_val_50391 = (state_50390[(1)]);
if((state_val_50391 === (2))){
var inst_50386 = (state_50390[(2)]);
var inst_50387 = transform_fn.call(null,inst_50386);
var inst_50388 = cljs.core.reset_BANG_.call(null,teachers_atom,inst_50387);
var state_50390__$1 = state_50390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50390__$1,inst_50388);
} else {
if((state_val_50391 === (1))){
var state_50390__$1 = state_50390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50390__$1,(2),ch);
} else {
return null;
}
}
});})(c__26243__auto__,ch))
;
return ((function (switch__26187__auto__,c__26243__auto__,ch){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_50395 = [null,null,null,null,null,null,null];
(statearr_50395[(0)] = state_machine__26188__auto__);

(statearr_50395[(1)] = (1));

return statearr_50395;
});
var state_machine__26188__auto____1 = (function (state_50390){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_50390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e50396){if((e50396 instanceof Object)){
var ex__26191__auto__ = e50396;
var statearr_50397_50399 = state_50390;
(statearr_50397_50399[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50400 = state_50390;
state_50390 = G__50400;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_50390){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_50390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__,ch))
})();
var state__26245__auto__ = (function (){var statearr_50398 = f__26244__auto__.call(null);
(statearr_50398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_50398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__,ch))
);

return c__26243__auto__;
});
teacherguild.db.get_all_requests = (function get_all_requests(requests_atom,transform_fn){
var ch = teacherguild.db.get_requests.call(null);
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__,ch){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__,ch){
return (function (state_50420){
var state_val_50421 = (state_50420[(1)]);
if((state_val_50421 === (2))){
var inst_50416 = (state_50420[(2)]);
var inst_50417 = transform_fn.call(null,inst_50416);
var inst_50418 = cljs.core.reset_BANG_.call(null,requests_atom,inst_50417);
var state_50420__$1 = state_50420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50420__$1,inst_50418);
} else {
if((state_val_50421 === (1))){
var state_50420__$1 = state_50420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50420__$1,(2),ch);
} else {
return null;
}
}
});})(c__26243__auto__,ch))
;
return ((function (switch__26187__auto__,c__26243__auto__,ch){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_50425 = [null,null,null,null,null,null,null];
(statearr_50425[(0)] = state_machine__26188__auto__);

(statearr_50425[(1)] = (1));

return statearr_50425;
});
var state_machine__26188__auto____1 = (function (state_50420){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_50420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e50426){if((e50426 instanceof Object)){
var ex__26191__auto__ = e50426;
var statearr_50427_50429 = state_50420;
(statearr_50427_50429[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50430 = state_50420;
state_50420 = G__50430;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_50420){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_50420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__,ch))
})();
var state__26245__auto__ = (function (){var statearr_50428 = f__26244__auto__.call(null);
(statearr_50428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_50428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__,ch))
);

return c__26243__auto__;
});
teacherguild.db.get_all_categors = (function get_all_categors(categors_atom,transform_fn){
var ch = teacherguild.db.get_subjects.call(null);
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__,ch){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__,ch){
return (function (state_50450){
var state_val_50451 = (state_50450[(1)]);
if((state_val_50451 === (2))){
var inst_50446 = (state_50450[(2)]);
var inst_50447 = transform_fn.call(null,inst_50446);
var inst_50448 = cljs.core.reset_BANG_.call(null,categors_atom,inst_50447);
var state_50450__$1 = state_50450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50450__$1,inst_50448);
} else {
if((state_val_50451 === (1))){
var state_50450__$1 = state_50450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50450__$1,(2),ch);
} else {
return null;
}
}
});})(c__26243__auto__,ch))
;
return ((function (switch__26187__auto__,c__26243__auto__,ch){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_50455 = [null,null,null,null,null,null,null];
(statearr_50455[(0)] = state_machine__26188__auto__);

(statearr_50455[(1)] = (1));

return statearr_50455;
});
var state_machine__26188__auto____1 = (function (state_50450){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_50450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e50456){if((e50456 instanceof Object)){
var ex__26191__auto__ = e50456;
var statearr_50457_50459 = state_50450;
(statearr_50457_50459[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50460 = state_50450;
state_50450 = G__50460;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_50450){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_50450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__,ch))
})();
var state__26245__auto__ = (function (){var statearr_50458 = f__26244__auto__.call(null);
(statearr_50458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_50458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__,ch))
);

return c__26243__auto__;
});
teacherguild.db.get_all_cities = (function get_all_cities(cities_atom,transform_fn){
var ch = teacherguild.db.get_cities.call(null);
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__,ch){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__,ch){
return (function (state_50480){
var state_val_50481 = (state_50480[(1)]);
if((state_val_50481 === (2))){
var inst_50476 = (state_50480[(2)]);
var inst_50477 = transform_fn.call(null,inst_50476);
var inst_50478 = cljs.core.reset_BANG_.call(null,cities_atom,inst_50477);
var state_50480__$1 = state_50480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50480__$1,inst_50478);
} else {
if((state_val_50481 === (1))){
var state_50480__$1 = state_50480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50480__$1,(2),ch);
} else {
return null;
}
}
});})(c__26243__auto__,ch))
;
return ((function (switch__26187__auto__,c__26243__auto__,ch){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_50485 = [null,null,null,null,null,null,null];
(statearr_50485[(0)] = state_machine__26188__auto__);

(statearr_50485[(1)] = (1));

return statearr_50485;
});
var state_machine__26188__auto____1 = (function (state_50480){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_50480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e50486){if((e50486 instanceof Object)){
var ex__26191__auto__ = e50486;
var statearr_50487_50489 = state_50480;
(statearr_50487_50489[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50490 = state_50480;
state_50480 = G__50490;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_50480){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_50480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__,ch))
})();
var state__26245__auto__ = (function (){var statearr_50488 = f__26244__auto__.call(null);
(statearr_50488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_50488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__,ch))
);

return c__26243__auto__;
});
teacherguild.db.mark_request_read_BANG_ = (function mark_request_read_BANG_(req){
return teacherguild.db.save_document_BANG_.call(null,"requests",cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"processed","processed",800622264),true));
});

//# sourceMappingURL=db.js.map?rel=1426587872598