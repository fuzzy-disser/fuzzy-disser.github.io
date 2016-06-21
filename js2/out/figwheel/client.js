// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.heads_up');
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30117){
var map__30119 = p__30117;
var map__30119__$1 = ((cljs.core.seq_QMARK_.call(null,map__30119))?cljs.core.apply.call(null,cljs.core.hash_map,map__30119):map__30119);
var class$ = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__17991__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__17979__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17979__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17979__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20653__auto___30240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___30240,ch){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___30240,ch){
return (function (state_30214){
var state_val_30215 = (state_30214[(1)]);
if((state_val_30215 === (7))){
var inst_30210 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30216_30241 = state_30214__$1;
(statearr_30216_30241[(2)] = inst_30210);

(statearr_30216_30241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (1))){
var state_30214__$1 = state_30214;
var statearr_30217_30242 = state_30214__$1;
(statearr_30217_30242[(2)] = null);

(statearr_30217_30242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (4))){
var inst_30182 = (state_30214[(7)]);
var inst_30182__$1 = (state_30214[(2)]);
var state_30214__$1 = (function (){var statearr_30218 = state_30214;
(statearr_30218[(7)] = inst_30182__$1);

return statearr_30218;
})();
if(cljs.core.truth_(inst_30182__$1)){
var statearr_30219_30243 = state_30214__$1;
(statearr_30219_30243[(1)] = (5));

} else {
var statearr_30220_30244 = state_30214__$1;
(statearr_30220_30244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (13))){
var state_30214__$1 = state_30214;
var statearr_30221_30245 = state_30214__$1;
(statearr_30221_30245[(2)] = null);

(statearr_30221_30245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (6))){
var state_30214__$1 = state_30214;
var statearr_30222_30246 = state_30214__$1;
(statearr_30222_30246[(2)] = null);

(statearr_30222_30246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (3))){
var inst_30212 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30214__$1,inst_30212);
} else {
if((state_val_30215 === (12))){
var inst_30189 = (state_30214[(8)]);
var inst_30198 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30189);
var inst_30199 = cljs.core.first.call(null,inst_30198);
var inst_30200 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30199);
var inst_30201 = console.warn("Figwheel: Not loading code with warnings - ",inst_30200);
var state_30214__$1 = state_30214;
var statearr_30223_30247 = state_30214__$1;
(statearr_30223_30247[(2)] = inst_30201);

(statearr_30223_30247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (2))){
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30214__$1,(4),ch);
} else {
if((state_val_30215 === (11))){
var inst_30194 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30224_30248 = state_30214__$1;
(statearr_30224_30248[(2)] = inst_30194);

(statearr_30224_30248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (9))){
var inst_30188 = (state_30214[(9)]);
var inst_30196 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30188,opts);
var state_30214__$1 = state_30214;
if(inst_30196){
var statearr_30225_30249 = state_30214__$1;
(statearr_30225_30249[(1)] = (12));

} else {
var statearr_30226_30250 = state_30214__$1;
(statearr_30226_30250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (5))){
var inst_30188 = (state_30214[(9)]);
var inst_30182 = (state_30214[(7)]);
var inst_30184 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30185 = (new cljs.core.PersistentArrayMap(null,2,inst_30184,null));
var inst_30186 = (new cljs.core.PersistentHashSet(null,inst_30185,null));
var inst_30187 = figwheel.client.focus_msgs.call(null,inst_30186,inst_30182);
var inst_30188__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30187);
var inst_30189 = cljs.core.first.call(null,inst_30187);
var inst_30190 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30188__$1,opts);
var state_30214__$1 = (function (){var statearr_30227 = state_30214;
(statearr_30227[(9)] = inst_30188__$1);

(statearr_30227[(8)] = inst_30189);

return statearr_30227;
})();
if(cljs.core.truth_(inst_30190)){
var statearr_30228_30251 = state_30214__$1;
(statearr_30228_30251[(1)] = (8));

} else {
var statearr_30229_30252 = state_30214__$1;
(statearr_30229_30252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (14))){
var inst_30204 = (state_30214[(2)]);
var state_30214__$1 = state_30214;
var statearr_30230_30253 = state_30214__$1;
(statearr_30230_30253[(2)] = inst_30204);

(statearr_30230_30253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (10))){
var inst_30206 = (state_30214[(2)]);
var state_30214__$1 = (function (){var statearr_30231 = state_30214;
(statearr_30231[(10)] = inst_30206);

return statearr_30231;
})();
var statearr_30232_30254 = state_30214__$1;
(statearr_30232_30254[(2)] = null);

(statearr_30232_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30215 === (8))){
var inst_30189 = (state_30214[(8)]);
var inst_30192 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30189);
var state_30214__$1 = state_30214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30214__$1,(11),inst_30192);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20653__auto___30240,ch))
;
return ((function (switch__20597__auto__,c__20653__auto___30240,ch){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_30236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30236[(0)] = state_machine__20598__auto__);

(statearr_30236[(1)] = (1));

return statearr_30236;
});
var state_machine__20598__auto____1 = (function (state_30214){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30237){if((e30237 instanceof Object)){
var ex__20601__auto__ = e30237;
var statearr_30238_30255 = state_30214;
(statearr_30238_30255[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30256 = state_30214;
state_30214 = G__30256;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30214){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___30240,ch))
})();
var state__20655__auto__ = (function (){var statearr_30239 = f__20654__auto__.call(null);
(statearr_30239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___30240);

return statearr_30239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___30240,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30260){
var vec__30261 = p__30260;
var map__30262 = cljs.core.nth.call(null,vec__30261,(0),null);
var map__30262__$1 = ((cljs.core.seq_QMARK_.call(null,map__30262))?cljs.core.apply.call(null,cljs.core.hash_map,map__30262):map__30262);
var msg = map__30262__$1;
var msg_name = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30261,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30263){
var map__30271 = p__30263;
var map__30271__$1 = ((cljs.core.seq_QMARK_.call(null,map__30271))?cljs.core.apply.call(null,cljs.core.hash_map,map__30271):map__30271);
var on_compile_fail = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30271,map__30271__$1,on_compile_fail,on_compile_warning){
return (function (p__30272){
var vec__30273 = p__30272;
var map__30274 = cljs.core.nth.call(null,vec__30273,(0),null);
var map__30274__$1 = ((cljs.core.seq_QMARK_.call(null,map__30274))?cljs.core.apply.call(null,cljs.core.hash_map,map__30274):map__30274);
var msg = map__30274__$1;
var msg_name = cljs.core.get.call(null,map__30274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30273,(1));
var pred__30275 = cljs.core._EQ_;
var expr__30276 = msg_name;
if(cljs.core.truth_(pred__30275.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30276))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30275.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30276))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30271,map__30271__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__,msg_hist,msg_names,msg){
return (function (state_30453){
var state_val_30454 = (state_30453[(1)]);
if((state_val_30454 === (7))){
var inst_30402 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30453__$1 = state_30453;
if(inst_30402){
var statearr_30455_30492 = state_30453__$1;
(statearr_30455_30492[(1)] = (11));

} else {
var statearr_30456_30493 = state_30453__$1;
(statearr_30456_30493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (20))){
var inst_30443 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30457_30494 = state_30453__$1;
(statearr_30457_30494[(2)] = inst_30443);

(statearr_30457_30494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (27))){
var inst_30434 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(30),inst_30434);
} else {
if((state_val_30454 === (1))){
var inst_30385 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30453__$1 = state_30453;
if(cljs.core.truth_(inst_30385)){
var statearr_30458_30495 = state_30453__$1;
(statearr_30458_30495[(1)] = (2));

} else {
var statearr_30459_30496 = state_30453__$1;
(statearr_30459_30496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (24))){
var inst_30432 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30453__$1 = state_30453;
if(inst_30432){
var statearr_30460_30497 = state_30453__$1;
(statearr_30460_30497[(1)] = (27));

} else {
var statearr_30461_30498 = state_30453__$1;
(statearr_30461_30498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (4))){
var inst_30451 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30453__$1,inst_30451);
} else {
if((state_val_30454 === (15))){
var inst_30412 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30413 = figwheel.client.heads_up.append_message.call(null,inst_30412);
var state_30453__$1 = state_30453;
var statearr_30462_30499 = state_30453__$1;
(statearr_30462_30499[(2)] = inst_30413);

(statearr_30462_30499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (21))){
var inst_30419 = (state_30453[(2)]);
var inst_30420 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30421 = figwheel.client.heads_up.display_warning.call(null,inst_30420);
var state_30453__$1 = (function (){var statearr_30463 = state_30453;
(statearr_30463[(7)] = inst_30419);

return statearr_30463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(22),inst_30421);
} else {
if((state_val_30454 === (13))){
var inst_30447 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30464_30500 = state_30453__$1;
(statearr_30464_30500[(2)] = inst_30447);

(statearr_30464_30500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (22))){
var inst_30423 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30465_30501 = state_30453__$1;
(statearr_30465_30501[(2)] = inst_30423);

(statearr_30465_30501[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (29))){
var inst_30439 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30466_30502 = state_30453__$1;
(statearr_30466_30502[(2)] = inst_30439);

(statearr_30466_30502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (6))){
var inst_30393 = figwheel.client.heads_up.clear.call(null);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(9),inst_30393);
} else {
if((state_val_30454 === (28))){
var state_30453__$1 = state_30453;
var statearr_30467_30503 = state_30453__$1;
(statearr_30467_30503[(2)] = null);

(statearr_30467_30503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (25))){
var inst_30441 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30468_30504 = state_30453__$1;
(statearr_30468_30504[(2)] = inst_30441);

(statearr_30468_30504[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (17))){
var inst_30445 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30469_30505 = state_30453__$1;
(statearr_30469_30505[(2)] = inst_30445);

(statearr_30469_30505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (3))){
var inst_30391 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30453__$1 = state_30453;
if(inst_30391){
var statearr_30470_30506 = state_30453__$1;
(statearr_30470_30506[(1)] = (6));

} else {
var statearr_30471_30507 = state_30453__$1;
(statearr_30471_30507[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (12))){
var inst_30410 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30453__$1 = state_30453;
if(inst_30410){
var statearr_30472_30508 = state_30453__$1;
(statearr_30472_30508[(1)] = (15));

} else {
var statearr_30473_30509 = state_30453__$1;
(statearr_30473_30509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (2))){
var inst_30387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(5),inst_30387);
} else {
if((state_val_30454 === (23))){
var inst_30427 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30428 = figwheel.client.heads_up.display_warning.call(null,inst_30427);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(26),inst_30428);
} else {
if((state_val_30454 === (19))){
var inst_30425 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30453__$1 = state_30453;
if(inst_30425){
var statearr_30474_30510 = state_30453__$1;
(statearr_30474_30510[(1)] = (23));

} else {
var statearr_30475_30511 = state_30453__$1;
(statearr_30475_30511[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (11))){
var inst_30404 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30405 = figwheel.client.format_messages.call(null,inst_30404);
var inst_30406 = figwheel.client.heads_up.display_error.call(null,inst_30405);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(14),inst_30406);
} else {
if((state_val_30454 === (9))){
var inst_30395 = (state_30453[(2)]);
var inst_30396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30397 = figwheel.client.format_messages.call(null,inst_30396);
var inst_30398 = figwheel.client.heads_up.display_error.call(null,inst_30397);
var state_30453__$1 = (function (){var statearr_30476 = state_30453;
(statearr_30476[(8)] = inst_30395);

return statearr_30476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(10),inst_30398);
} else {
if((state_val_30454 === (5))){
var inst_30389 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30477_30512 = state_30453__$1;
(statearr_30477_30512[(2)] = inst_30389);

(statearr_30477_30512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (14))){
var inst_30408 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30478_30513 = state_30453__$1;
(statearr_30478_30513[(2)] = inst_30408);

(statearr_30478_30513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (26))){
var inst_30430 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30479_30514 = state_30453__$1;
(statearr_30479_30514[(2)] = inst_30430);

(statearr_30479_30514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (16))){
var inst_30415 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30453__$1 = state_30453;
if(inst_30415){
var statearr_30480_30515 = state_30453__$1;
(statearr_30480_30515[(1)] = (18));

} else {
var statearr_30481_30516 = state_30453__$1;
(statearr_30481_30516[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (30))){
var inst_30436 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30482_30517 = state_30453__$1;
(statearr_30482_30517[(2)] = inst_30436);

(statearr_30482_30517[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (10))){
var inst_30400 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30483_30518 = state_30453__$1;
(statearr_30483_30518[(2)] = inst_30400);

(statearr_30483_30518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (18))){
var inst_30417 = figwheel.client.heads_up.clear.call(null);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(21),inst_30417);
} else {
if((state_val_30454 === (8))){
var inst_30449 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30484_30519 = state_30453__$1;
(statearr_30484_30519[(2)] = inst_30449);

(statearr_30484_30519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20653__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20597__auto__,c__20653__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_30488 = [null,null,null,null,null,null,null,null,null];
(statearr_30488[(0)] = state_machine__20598__auto__);

(statearr_30488[(1)] = (1));

return statearr_30488;
});
var state_machine__20598__auto____1 = (function (state_30453){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30489){if((e30489 instanceof Object)){
var ex__20601__auto__ = e30489;
var statearr_30490_30520 = state_30453;
(statearr_30490_30520[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30521 = state_30453;
state_30453 = G__30521;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__,msg_hist,msg_names,msg))
})();
var state__20655__auto__ = (function (){var statearr_30491 = f__20654__auto__.call(null);
(statearr_30491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_30491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__,msg_hist,msg_names,msg))
);

return c__20653__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20653__auto___30584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___30584,ch){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___30584,ch){
return (function (state_30567){
var state_val_30568 = (state_30567[(1)]);
if((state_val_30568 === (8))){
var inst_30559 = (state_30567[(2)]);
var state_30567__$1 = (function (){var statearr_30569 = state_30567;
(statearr_30569[(7)] = inst_30559);

return statearr_30569;
})();
var statearr_30570_30585 = state_30567__$1;
(statearr_30570_30585[(2)] = null);

(statearr_30570_30585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (7))){
var inst_30563 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30571_30586 = state_30567__$1;
(statearr_30571_30586[(2)] = inst_30563);

(statearr_30571_30586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var state_30567__$1 = state_30567;
var statearr_30572_30587 = state_30567__$1;
(statearr_30572_30587[(2)] = null);

(statearr_30572_30587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (5))){
var inst_30555 = (state_30567[(8)]);
var inst_30557 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30555);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(8),inst_30557);
} else {
if((state_val_30568 === (4))){
var inst_30555 = (state_30567[(8)]);
var inst_30555__$1 = (state_30567[(2)]);
var state_30567__$1 = (function (){var statearr_30573 = state_30567;
(statearr_30573[(8)] = inst_30555__$1);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30555__$1)){
var statearr_30574_30588 = state_30567__$1;
(statearr_30574_30588[(1)] = (5));

} else {
var statearr_30575_30589 = state_30567__$1;
(statearr_30575_30589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (3))){
var inst_30565 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30567__$1,inst_30565);
} else {
if((state_val_30568 === (2))){
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(4),ch);
} else {
if((state_val_30568 === (1))){
var state_30567__$1 = state_30567;
var statearr_30576_30590 = state_30567__$1;
(statearr_30576_30590[(2)] = null);

(statearr_30576_30590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20653__auto___30584,ch))
;
return ((function (switch__20597__auto__,c__20653__auto___30584,ch){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_30580 = [null,null,null,null,null,null,null,null,null];
(statearr_30580[(0)] = state_machine__20598__auto__);

(statearr_30580[(1)] = (1));

return statearr_30580;
});
var state_machine__20598__auto____1 = (function (state_30567){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30581){if((e30581 instanceof Object)){
var ex__20601__auto__ = e30581;
var statearr_30582_30591 = state_30567;
(statearr_30582_30591[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30592 = state_30567;
state_30567 = G__30592;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30567){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___30584,ch))
})();
var state__20655__auto__ = (function (){var statearr_30583 = f__20654__auto__.call(null);
(statearr_30583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___30584);

return statearr_30583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___30584,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (2))){
var inst_30610 = (state_30613[(2)]);
var inst_30611 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30613__$1 = (function (){var statearr_30615 = state_30613;
(statearr_30615[(7)] = inst_30610);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30613__$1,inst_30611);
} else {
if((state_val_30614 === (1))){
var inst_30608 = cljs.core.async.timeout.call(null,(3000));
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(2),inst_30608);
} else {
return null;
}
}
});})(c__20653__auto__))
;
return ((function (switch__20597__auto__,c__20653__auto__){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_30619 = [null,null,null,null,null,null,null,null];
(statearr_30619[(0)] = state_machine__20598__auto__);

(statearr_30619[(1)] = (1));

return statearr_30619;
});
var state_machine__20598__auto____1 = (function (state_30613){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30620){if((e30620 instanceof Object)){
var ex__20601__auto__ = e30620;
var statearr_30621_30623 = state_30613;
(statearr_30621_30623[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30624 = state_30613;
state_30613 = G__30624;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_30622 = f__20654__auto__.call(null);
(statearr_30622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_30622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30628 = {"detail":url};
return obj30628;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30629){
var map__30635 = p__30629;
var map__30635__$1 = ((cljs.core.seq_QMARK_.call(null,map__30635))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);
var ed = map__30635__$1;
var exception_data = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__30636_30640 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30637_30641 = null;
var count__30638_30642 = (0);
var i__30639_30643 = (0);
while(true){
if((i__30639_30643 < count__30638_30642)){
var msg_30644 = cljs.core._nth.call(null,chunk__30637_30641,i__30639_30643);
console.log(msg_30644);

var G__30645 = seq__30636_30640;
var G__30646 = chunk__30637_30641;
var G__30647 = count__30638_30642;
var G__30648 = (i__30639_30643 + (1));
seq__30636_30640 = G__30645;
chunk__30637_30641 = G__30646;
count__30638_30642 = G__30647;
i__30639_30643 = G__30648;
continue;
} else {
var temp__4126__auto___30649 = cljs.core.seq.call(null,seq__30636_30640);
if(temp__4126__auto___30649){
var seq__30636_30650__$1 = temp__4126__auto___30649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30636_30650__$1)){
var c__18778__auto___30651 = cljs.core.chunk_first.call(null,seq__30636_30650__$1);
var G__30652 = cljs.core.chunk_rest.call(null,seq__30636_30650__$1);
var G__30653 = c__18778__auto___30651;
var G__30654 = cljs.core.count.call(null,c__18778__auto___30651);
var G__30655 = (0);
seq__30636_30640 = G__30652;
chunk__30637_30641 = G__30653;
count__30638_30642 = G__30654;
i__30639_30643 = G__30655;
continue;
} else {
var msg_30656 = cljs.core.first.call(null,seq__30636_30650__$1);
console.log(msg_30656);

var G__30657 = cljs.core.next.call(null,seq__30636_30650__$1);
var G__30658 = null;
var G__30659 = (0);
var G__30660 = (0);
seq__30636_30640 = G__30657;
chunk__30637_30641 = G__30658;
count__30638_30642 = G__30659;
i__30639_30643 = G__30660;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30661){
var map__30663 = p__30661;
var map__30663__$1 = ((cljs.core.seq_QMARK_.call(null,map__30663))?cljs.core.apply.call(null,cljs.core.hash_map,map__30663):map__30663);
var w = map__30663__$1;
var message = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30670 = cljs.core.seq.call(null,plugins);
var chunk__30671 = null;
var count__30672 = (0);
var i__30673 = (0);
while(true){
if((i__30673 < count__30672)){
var vec__30674 = cljs.core._nth.call(null,chunk__30671,i__30673);
var k = cljs.core.nth.call(null,vec__30674,(0),null);
var plugin = cljs.core.nth.call(null,vec__30674,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30676 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30670,chunk__30671,count__30672,i__30673,pl_30676,vec__30674,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30676.call(null,msg_hist);
});})(seq__30670,chunk__30671,count__30672,i__30673,pl_30676,vec__30674,k,plugin))
);
} else {
}

var G__30677 = seq__30670;
var G__30678 = chunk__30671;
var G__30679 = count__30672;
var G__30680 = (i__30673 + (1));
seq__30670 = G__30677;
chunk__30671 = G__30678;
count__30672 = G__30679;
i__30673 = G__30680;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30670);
if(temp__4126__auto__){
var seq__30670__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30670__$1)){
var c__18778__auto__ = cljs.core.chunk_first.call(null,seq__30670__$1);
var G__30681 = cljs.core.chunk_rest.call(null,seq__30670__$1);
var G__30682 = c__18778__auto__;
var G__30683 = cljs.core.count.call(null,c__18778__auto__);
var G__30684 = (0);
seq__30670 = G__30681;
chunk__30671 = G__30682;
count__30672 = G__30683;
i__30673 = G__30684;
continue;
} else {
var vec__30675 = cljs.core.first.call(null,seq__30670__$1);
var k = cljs.core.nth.call(null,vec__30675,(0),null);
var plugin = cljs.core.nth.call(null,vec__30675,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30685 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30670,chunk__30671,count__30672,i__30673,pl_30685,vec__30675,k,plugin,seq__30670__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30685.call(null,msg_hist);
});})(seq__30670,chunk__30671,count__30672,i__30673,pl_30685,vec__30675,k,plugin,seq__30670__$1,temp__4126__auto__))
);
} else {
}

var G__30686 = cljs.core.next.call(null,seq__30670__$1);
var G__30687 = null;
var G__30688 = (0);
var G__30689 = (0);
seq__30670 = G__30686;
chunk__30671 = G__30687;
count__30672 = G__30688;
i__30673 = G__30689;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__30690){
var map__30692 = p__30690;
var map__30692__$1 = ((cljs.core.seq_QMARK_.call(null,map__30692))?cljs.core.apply.call(null,cljs.core.hash_map,map__30692):map__30692);
var opts = map__30692__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30690 = null;
if (arguments.length > 0) {
  p__30690 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__30690);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30693){
var p__30690 = cljs.core.seq(arglist__30693);
return watch_and_reload__delegate(p__30690);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1422975380462