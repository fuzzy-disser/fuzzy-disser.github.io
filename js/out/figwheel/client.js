// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41594__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41595__i = 0, G__41595__a = new Array(arguments.length -  0);
while (G__41595__i < G__41595__a.length) {G__41595__a[G__41595__i] = arguments[G__41595__i + 0]; ++G__41595__i;}
  args = new cljs.core.IndexedSeq(G__41595__a,0);
} 
return G__41594__delegate.call(this,args);};
G__41594.cljs$lang$maxFixedArity = 0;
G__41594.cljs$lang$applyTo = (function (arglist__41596){
var args = cljs.core.seq(arglist__41596);
return G__41594__delegate(args);
});
G__41594.cljs$core$IFn$_invoke$arity$variadic = G__41594__delegate;
return G__41594;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__41597){
var map__41599 = p__41597;
var map__41599__$1 = ((cljs.core.seq_QMARK_.call(null,map__41599))?cljs.core.apply.call(null,cljs.core.hash_map,map__41599):map__41599);
var class$ = cljs.core.get.call(null,map__41599__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__41599__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__23544__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__23532__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__23532__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__23532__auto__;
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
var c__26217__auto___41728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___41728,ch){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___41728,ch){
return (function (state_41702){
var state_val_41703 = (state_41702[(1)]);
if((state_val_41703 === (7))){
var inst_41698 = (state_41702[(2)]);
var state_41702__$1 = state_41702;
var statearr_41704_41729 = state_41702__$1;
(statearr_41704_41729[(2)] = inst_41698);

(statearr_41704_41729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (1))){
var state_41702__$1 = state_41702;
var statearr_41705_41730 = state_41702__$1;
(statearr_41705_41730[(2)] = null);

(statearr_41705_41730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (4))){
var inst_41666 = (state_41702[(7)]);
var inst_41666__$1 = (state_41702[(2)]);
var state_41702__$1 = (function (){var statearr_41706 = state_41702;
(statearr_41706[(7)] = inst_41666__$1);

return statearr_41706;
})();
if(cljs.core.truth_(inst_41666__$1)){
var statearr_41707_41731 = state_41702__$1;
(statearr_41707_41731[(1)] = (5));

} else {
var statearr_41708_41732 = state_41702__$1;
(statearr_41708_41732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (13))){
var state_41702__$1 = state_41702;
var statearr_41709_41733 = state_41702__$1;
(statearr_41709_41733[(2)] = null);

(statearr_41709_41733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (6))){
var state_41702__$1 = state_41702;
var statearr_41710_41734 = state_41702__$1;
(statearr_41710_41734[(2)] = null);

(statearr_41710_41734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (3))){
var inst_41700 = (state_41702[(2)]);
var state_41702__$1 = state_41702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41702__$1,inst_41700);
} else {
if((state_val_41703 === (12))){
var inst_41673 = (state_41702[(8)]);
var inst_41686 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41673);
var inst_41687 = cljs.core.first.call(null,inst_41686);
var inst_41688 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41687);
var inst_41689 = console.warn("Figwheel: Not loading code with warnings - ",inst_41688);
var state_41702__$1 = state_41702;
var statearr_41711_41735 = state_41702__$1;
(statearr_41711_41735[(2)] = inst_41689);

(statearr_41711_41735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (2))){
var state_41702__$1 = state_41702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41702__$1,(4),ch);
} else {
if((state_val_41703 === (11))){
var inst_41682 = (state_41702[(2)]);
var state_41702__$1 = state_41702;
var statearr_41712_41736 = state_41702__$1;
(statearr_41712_41736[(2)] = inst_41682);

(statearr_41712_41736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (9))){
var inst_41672 = (state_41702[(9)]);
var inst_41684 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41672,opts);
var state_41702__$1 = state_41702;
if(inst_41684){
var statearr_41713_41737 = state_41702__$1;
(statearr_41713_41737[(1)] = (12));

} else {
var statearr_41714_41738 = state_41702__$1;
(statearr_41714_41738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (5))){
var inst_41672 = (state_41702[(9)]);
var inst_41666 = (state_41702[(7)]);
var inst_41668 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41669 = (new cljs.core.PersistentArrayMap(null,2,inst_41668,null));
var inst_41670 = (new cljs.core.PersistentHashSet(null,inst_41669,null));
var inst_41671 = figwheel.client.focus_msgs.call(null,inst_41670,inst_41666);
var inst_41672__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41671);
var inst_41673 = cljs.core.first.call(null,inst_41671);
var inst_41674 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41672__$1,opts);
var state_41702__$1 = (function (){var statearr_41715 = state_41702;
(statearr_41715[(9)] = inst_41672__$1);

(statearr_41715[(8)] = inst_41673);

return statearr_41715;
})();
if(cljs.core.truth_(inst_41674)){
var statearr_41716_41739 = state_41702__$1;
(statearr_41716_41739[(1)] = (8));

} else {
var statearr_41717_41740 = state_41702__$1;
(statearr_41717_41740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (14))){
var inst_41692 = (state_41702[(2)]);
var state_41702__$1 = state_41702;
var statearr_41718_41741 = state_41702__$1;
(statearr_41718_41741[(2)] = inst_41692);

(statearr_41718_41741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (10))){
var inst_41694 = (state_41702[(2)]);
var state_41702__$1 = (function (){var statearr_41719 = state_41702;
(statearr_41719[(10)] = inst_41694);

return statearr_41719;
})();
var statearr_41720_41742 = state_41702__$1;
(statearr_41720_41742[(2)] = null);

(statearr_41720_41742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41703 === (8))){
var inst_41673 = (state_41702[(8)]);
var inst_41676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41677 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41673);
var inst_41678 = cljs.core.async.timeout.call(null,(1000));
var inst_41679 = [inst_41677,inst_41678];
var inst_41680 = (new cljs.core.PersistentVector(null,2,(5),inst_41676,inst_41679,null));
var state_41702__$1 = state_41702;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41702__$1,(11),inst_41680);
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
});})(c__26217__auto___41728,ch))
;
return ((function (switch__26161__auto__,c__26217__auto___41728,ch){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_41724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41724[(0)] = state_machine__26162__auto__);

(statearr_41724[(1)] = (1));

return statearr_41724;
});
var state_machine__26162__auto____1 = (function (state_41702){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_41702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e41725){if((e41725 instanceof Object)){
var ex__26165__auto__ = e41725;
var statearr_41726_41743 = state_41702;
(statearr_41726_41743[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41744 = state_41702;
state_41702 = G__41744;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_41702){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_41702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___41728,ch))
})();
var state__26219__auto__ = (function (){var statearr_41727 = f__26218__auto__.call(null);
(statearr_41727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___41728);

return statearr_41727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___41728,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41745_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41745_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_41754 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__41747_SHARP_,p2__41746_SHARP_){
return [cljs.core.str(p2__41746_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41754){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_41752 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41753 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_41752,_STAR_print_newline_STAR_41753,base_path_41754){
return (function() { 
var G__41755__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41756__i = 0, G__41756__a = new Array(arguments.length -  0);
while (G__41756__i < G__41756__a.length) {G__41756__a[G__41756__i] = arguments[G__41756__i + 0]; ++G__41756__i;}
  args = new cljs.core.IndexedSeq(G__41756__a,0);
} 
return G__41755__delegate.call(this,args);};
G__41755.cljs$lang$maxFixedArity = 0;
G__41755.cljs$lang$applyTo = (function (arglist__41757){
var args = cljs.core.seq(arglist__41757);
return G__41755__delegate(args);
});
G__41755.cljs$core$IFn$_invoke$arity$variadic = G__41755__delegate;
return G__41755;
})()
;})(_STAR_print_fn_STAR_41752,_STAR_print_newline_STAR_41753,base_path_41754))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41753;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41752;
}}catch (e41751){if((e41751 instanceof Error)){
var e = e41751;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41754], null));
} else {
var e = e41751;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41754))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__41758){
var map__41763 = p__41758;
var map__41763__$1 = ((cljs.core.seq_QMARK_.call(null,map__41763))?cljs.core.apply.call(null,cljs.core.hash_map,map__41763):map__41763);
var opts = map__41763__$1;
var build_id = cljs.core.get.call(null,map__41763__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41763,map__41763__$1,opts,build_id){
return (function (p__41764){
var vec__41765 = p__41764;
var map__41766 = cljs.core.nth.call(null,vec__41765,(0),null);
var map__41766__$1 = ((cljs.core.seq_QMARK_.call(null,map__41766))?cljs.core.apply.call(null,cljs.core.hash_map,map__41766):map__41766);
var msg = map__41766__$1;
var msg_name = cljs.core.get.call(null,map__41766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41765,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__41765,map__41766,map__41766__$1,msg,msg_name,_,map__41763,map__41763__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41765,map__41766,map__41766__$1,msg,msg_name,_,map__41763,map__41763__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41763,map__41763__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__41770){
var vec__41771 = p__41770;
var map__41772 = cljs.core.nth.call(null,vec__41771,(0),null);
var map__41772__$1 = ((cljs.core.seq_QMARK_.call(null,map__41772))?cljs.core.apply.call(null,cljs.core.hash_map,map__41772):map__41772);
var msg = map__41772__$1;
var msg_name = cljs.core.get.call(null,map__41772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41771,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__41773){
var map__41781 = p__41773;
var map__41781__$1 = ((cljs.core.seq_QMARK_.call(null,map__41781))?cljs.core.apply.call(null,cljs.core.hash_map,map__41781):map__41781);
var on_compile_fail = cljs.core.get.call(null,map__41781__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__41781__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__41781,map__41781__$1,on_compile_fail,on_compile_warning){
return (function (p__41782){
var vec__41783 = p__41782;
var map__41784 = cljs.core.nth.call(null,vec__41783,(0),null);
var map__41784__$1 = ((cljs.core.seq_QMARK_.call(null,map__41784))?cljs.core.apply.call(null,cljs.core.hash_map,map__41784):map__41784);
var msg = map__41784__$1;
var msg_name = cljs.core.get.call(null,map__41784__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41783,(1));
var pred__41785 = cljs.core._EQ_;
var expr__41786 = msg_name;
if(cljs.core.truth_(pred__41785.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41786))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41785.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41786))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41781,map__41781__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__,msg_hist,msg_names,msg){
return (function (state_41983){
var state_val_41984 = (state_41983[(1)]);
if((state_val_41984 === (7))){
var inst_41919 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41985_42026 = state_41983__$1;
(statearr_41985_42026[(2)] = inst_41919);

(statearr_41985_42026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (20))){
var inst_41945 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41983__$1 = state_41983;
if(inst_41945){
var statearr_41986_42027 = state_41983__$1;
(statearr_41986_42027[(1)] = (22));

} else {
var statearr_41987_42028 = state_41983__$1;
(statearr_41987_42028[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (27))){
var inst_41957 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41958 = figwheel.client.heads_up.display_warning.call(null,inst_41957);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(30),inst_41958);
} else {
if((state_val_41984 === (1))){
var inst_41907 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41983__$1 = state_41983;
if(cljs.core.truth_(inst_41907)){
var statearr_41988_42029 = state_41983__$1;
(statearr_41988_42029[(1)] = (2));

} else {
var statearr_41989_42030 = state_41983__$1;
(statearr_41989_42030[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (24))){
var inst_41973 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41990_42031 = state_41983__$1;
(statearr_41990_42031[(2)] = inst_41973);

(statearr_41990_42031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (4))){
var inst_41981 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41983__$1,inst_41981);
} else {
if((state_val_41984 === (15))){
var inst_41934 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41935 = figwheel.client.format_messages.call(null,inst_41934);
var inst_41936 = figwheel.client.heads_up.display_error.call(null,inst_41935);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(18),inst_41936);
} else {
if((state_val_41984 === (21))){
var inst_41975 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41991_42032 = state_41983__$1;
(statearr_41991_42032[(2)] = inst_41975);

(statearr_41991_42032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (31))){
var inst_41964 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(34),inst_41964);
} else {
if((state_val_41984 === (32))){
var state_41983__$1 = state_41983;
var statearr_41992_42033 = state_41983__$1;
(statearr_41992_42033[(2)] = null);

(statearr_41992_42033[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (33))){
var inst_41969 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41993_42034 = state_41983__$1;
(statearr_41993_42034[(2)] = inst_41969);

(statearr_41993_42034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (13))){
var inst_41925 = (state_41983[(2)]);
var inst_41926 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41927 = figwheel.client.format_messages.call(null,inst_41926);
var inst_41928 = figwheel.client.heads_up.display_error.call(null,inst_41927);
var state_41983__$1 = (function (){var statearr_41994 = state_41983;
(statearr_41994[(7)] = inst_41925);

return statearr_41994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(14),inst_41928);
} else {
if((state_val_41984 === (22))){
var inst_41947 = figwheel.client.heads_up.clear.call(null);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(25),inst_41947);
} else {
if((state_val_41984 === (29))){
var inst_41971 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41995_42035 = state_41983__$1;
(statearr_41995_42035[(2)] = inst_41971);

(statearr_41995_42035[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (6))){
var inst_41915 = figwheel.client.heads_up.clear.call(null);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(9),inst_41915);
} else {
if((state_val_41984 === (28))){
var inst_41962 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41983__$1 = state_41983;
if(inst_41962){
var statearr_41996_42036 = state_41983__$1;
(statearr_41996_42036[(1)] = (31));

} else {
var statearr_41997_42037 = state_41983__$1;
(statearr_41997_42037[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (25))){
var inst_41949 = (state_41983[(2)]);
var inst_41950 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41951 = figwheel.client.heads_up.display_warning.call(null,inst_41950);
var state_41983__$1 = (function (){var statearr_41998 = state_41983;
(statearr_41998[(8)] = inst_41949);

return statearr_41998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(26),inst_41951);
} else {
if((state_val_41984 === (34))){
var inst_41966 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41999_42038 = state_41983__$1;
(statearr_41999_42038[(2)] = inst_41966);

(statearr_41999_42038[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (17))){
var inst_41977 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42000_42039 = state_41983__$1;
(statearr_42000_42039[(2)] = inst_41977);

(statearr_42000_42039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (3))){
var inst_41921 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41983__$1 = state_41983;
if(inst_41921){
var statearr_42001_42040 = state_41983__$1;
(statearr_42001_42040[(1)] = (10));

} else {
var statearr_42002_42041 = state_41983__$1;
(statearr_42002_42041[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (12))){
var inst_41979 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42003_42042 = state_41983__$1;
(statearr_42003_42042[(2)] = inst_41979);

(statearr_42003_42042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (2))){
var inst_41909 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41983__$1 = state_41983;
if(cljs.core.truth_(inst_41909)){
var statearr_42004_42043 = state_41983__$1;
(statearr_42004_42043[(1)] = (5));

} else {
var statearr_42005_42044 = state_41983__$1;
(statearr_42005_42044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (23))){
var inst_41955 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41983__$1 = state_41983;
if(inst_41955){
var statearr_42006_42045 = state_41983__$1;
(statearr_42006_42045[(1)] = (27));

} else {
var statearr_42007_42046 = state_41983__$1;
(statearr_42007_42046[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (19))){
var inst_41942 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41943 = figwheel.client.heads_up.append_message.call(null,inst_41942);
var state_41983__$1 = state_41983;
var statearr_42008_42047 = state_41983__$1;
(statearr_42008_42047[(2)] = inst_41943);

(statearr_42008_42047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (11))){
var inst_41932 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41983__$1 = state_41983;
if(inst_41932){
var statearr_42009_42048 = state_41983__$1;
(statearr_42009_42048[(1)] = (15));

} else {
var statearr_42010_42049 = state_41983__$1;
(statearr_42010_42049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (9))){
var inst_41917 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42011_42050 = state_41983__$1;
(statearr_42011_42050[(2)] = inst_41917);

(statearr_42011_42050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (5))){
var inst_41911 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(8),inst_41911);
} else {
if((state_val_41984 === (14))){
var inst_41930 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42012_42051 = state_41983__$1;
(statearr_42012_42051[(2)] = inst_41930);

(statearr_42012_42051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (26))){
var inst_41953 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42013_42052 = state_41983__$1;
(statearr_42013_42052[(2)] = inst_41953);

(statearr_42013_42052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (16))){
var inst_41940 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41983__$1 = state_41983;
if(inst_41940){
var statearr_42014_42053 = state_41983__$1;
(statearr_42014_42053[(1)] = (19));

} else {
var statearr_42015_42054 = state_41983__$1;
(statearr_42015_42054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (30))){
var inst_41960 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42016_42055 = state_41983__$1;
(statearr_42016_42055[(2)] = inst_41960);

(statearr_42016_42055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (10))){
var inst_41923 = figwheel.client.heads_up.clear.call(null);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(13),inst_41923);
} else {
if((state_val_41984 === (18))){
var inst_41938 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42017_42056 = state_41983__$1;
(statearr_42017_42056[(2)] = inst_41938);

(statearr_42017_42056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (8))){
var inst_41913 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_42018_42057 = state_41983__$1;
(statearr_42018_42057[(2)] = inst_41913);

(statearr_42018_42057[(1)] = (7));


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
}
}
}
}
});})(c__26217__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26161__auto__,c__26217__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_42022 = [null,null,null,null,null,null,null,null,null];
(statearr_42022[(0)] = state_machine__26162__auto__);

(statearr_42022[(1)] = (1));

return statearr_42022;
});
var state_machine__26162__auto____1 = (function (state_41983){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_41983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e42023){if((e42023 instanceof Object)){
var ex__26165__auto__ = e42023;
var statearr_42024_42058 = state_41983;
(statearr_42024_42058[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42059 = state_41983;
state_41983 = G__42059;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_41983){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_41983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__,msg_hist,msg_names,msg))
})();
var state__26219__auto__ = (function (){var statearr_42025 = f__26218__auto__.call(null);
(statearr_42025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_42025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__,msg_hist,msg_names,msg))
);

return c__26217__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26217__auto___42122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___42122,ch){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___42122,ch){
return (function (state_42105){
var state_val_42106 = (state_42105[(1)]);
if((state_val_42106 === (8))){
var inst_42097 = (state_42105[(2)]);
var state_42105__$1 = (function (){var statearr_42107 = state_42105;
(statearr_42107[(7)] = inst_42097);

return statearr_42107;
})();
var statearr_42108_42123 = state_42105__$1;
(statearr_42108_42123[(2)] = null);

(statearr_42108_42123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42106 === (7))){
var inst_42101 = (state_42105[(2)]);
var state_42105__$1 = state_42105;
var statearr_42109_42124 = state_42105__$1;
(statearr_42109_42124[(2)] = inst_42101);

(statearr_42109_42124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42106 === (6))){
var state_42105__$1 = state_42105;
var statearr_42110_42125 = state_42105__$1;
(statearr_42110_42125[(2)] = null);

(statearr_42110_42125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42106 === (5))){
var inst_42093 = (state_42105[(8)]);
var inst_42095 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42093);
var state_42105__$1 = state_42105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42105__$1,(8),inst_42095);
} else {
if((state_val_42106 === (4))){
var inst_42093 = (state_42105[(8)]);
var inst_42093__$1 = (state_42105[(2)]);
var state_42105__$1 = (function (){var statearr_42111 = state_42105;
(statearr_42111[(8)] = inst_42093__$1);

return statearr_42111;
})();
if(cljs.core.truth_(inst_42093__$1)){
var statearr_42112_42126 = state_42105__$1;
(statearr_42112_42126[(1)] = (5));

} else {
var statearr_42113_42127 = state_42105__$1;
(statearr_42113_42127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42106 === (3))){
var inst_42103 = (state_42105[(2)]);
var state_42105__$1 = state_42105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42105__$1,inst_42103);
} else {
if((state_val_42106 === (2))){
var state_42105__$1 = state_42105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42105__$1,(4),ch);
} else {
if((state_val_42106 === (1))){
var state_42105__$1 = state_42105;
var statearr_42114_42128 = state_42105__$1;
(statearr_42114_42128[(2)] = null);

(statearr_42114_42128[(1)] = (2));


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
});})(c__26217__auto___42122,ch))
;
return ((function (switch__26161__auto__,c__26217__auto___42122,ch){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_42118 = [null,null,null,null,null,null,null,null,null];
(statearr_42118[(0)] = state_machine__26162__auto__);

(statearr_42118[(1)] = (1));

return statearr_42118;
});
var state_machine__26162__auto____1 = (function (state_42105){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_42105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e42119){if((e42119 instanceof Object)){
var ex__26165__auto__ = e42119;
var statearr_42120_42129 = state_42105;
(statearr_42120_42129[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42130 = state_42105;
state_42105 = G__42130;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_42105){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_42105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___42122,ch))
})();
var state__26219__auto__ = (function (){var statearr_42121 = f__26218__auto__.call(null);
(statearr_42121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___42122);

return statearr_42121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___42122,ch))
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
var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__){
return (function (state_42151){
var state_val_42152 = (state_42151[(1)]);
if((state_val_42152 === (2))){
var inst_42148 = (state_42151[(2)]);
var inst_42149 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42151__$1 = (function (){var statearr_42153 = state_42151;
(statearr_42153[(7)] = inst_42148);

return statearr_42153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42151__$1,inst_42149);
} else {
if((state_val_42152 === (1))){
var inst_42146 = cljs.core.async.timeout.call(null,(3000));
var state_42151__$1 = state_42151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42151__$1,(2),inst_42146);
} else {
return null;
}
}
});})(c__26217__auto__))
;
return ((function (switch__26161__auto__,c__26217__auto__){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_42157 = [null,null,null,null,null,null,null,null];
(statearr_42157[(0)] = state_machine__26162__auto__);

(statearr_42157[(1)] = (1));

return statearr_42157;
});
var state_machine__26162__auto____1 = (function (state_42151){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_42151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e42158){if((e42158 instanceof Object)){
var ex__26165__auto__ = e42158;
var statearr_42159_42161 = state_42151;
(statearr_42159_42161[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42162 = state_42151;
state_42151 = G__42162;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_42151){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_42151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__))
})();
var state__26219__auto__ = (function (){var statearr_42160 = f__26218__auto__.call(null);
(statearr_42160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_42160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__))
);

return c__26217__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__23532__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__23532__auto__)){
return ("CustomEvent" in window);
} else {
return and__23532__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj42166 = {"detail":url};
return obj42166;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__42167){
var map__42173 = p__42167;
var map__42173__$1 = ((cljs.core.seq_QMARK_.call(null,map__42173))?cljs.core.apply.call(null,cljs.core.hash_map,map__42173):map__42173);
var ed = map__42173__$1;
var exception_data = cljs.core.get.call(null,map__42173__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__42173__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42174_42178 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42175_42179 = null;
var count__42176_42180 = (0);
var i__42177_42181 = (0);
while(true){
if((i__42177_42181 < count__42176_42180)){
var msg_42182 = cljs.core._nth.call(null,chunk__42175_42179,i__42177_42181);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42182);

var G__42183 = seq__42174_42178;
var G__42184 = chunk__42175_42179;
var G__42185 = count__42176_42180;
var G__42186 = (i__42177_42181 + (1));
seq__42174_42178 = G__42183;
chunk__42175_42179 = G__42184;
count__42176_42180 = G__42185;
i__42177_42181 = G__42186;
continue;
} else {
var temp__4126__auto___42187 = cljs.core.seq.call(null,seq__42174_42178);
if(temp__4126__auto___42187){
var seq__42174_42188__$1 = temp__4126__auto___42187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42174_42188__$1)){
var c__24331__auto___42189 = cljs.core.chunk_first.call(null,seq__42174_42188__$1);
var G__42190 = cljs.core.chunk_rest.call(null,seq__42174_42188__$1);
var G__42191 = c__24331__auto___42189;
var G__42192 = cljs.core.count.call(null,c__24331__auto___42189);
var G__42193 = (0);
seq__42174_42178 = G__42190;
chunk__42175_42179 = G__42191;
count__42176_42180 = G__42192;
i__42177_42181 = G__42193;
continue;
} else {
var msg_42194 = cljs.core.first.call(null,seq__42174_42188__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42194);

var G__42195 = cljs.core.next.call(null,seq__42174_42188__$1);
var G__42196 = null;
var G__42197 = (0);
var G__42198 = (0);
seq__42174_42178 = G__42195;
chunk__42175_42179 = G__42196;
count__42176_42180 = G__42197;
i__42177_42181 = G__42198;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__42199){
var map__42201 = p__42199;
var map__42201__$1 = ((cljs.core.seq_QMARK_.call(null,map__42201))?cljs.core.apply.call(null,cljs.core.hash_map,map__42201):map__42201);
var w = map__42201__$1;
var message = cljs.core.get.call(null,map__42201__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__23532__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__23532__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__23532__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__42208 = cljs.core.seq.call(null,plugins);
var chunk__42209 = null;
var count__42210 = (0);
var i__42211 = (0);
while(true){
if((i__42211 < count__42210)){
var vec__42212 = cljs.core._nth.call(null,chunk__42209,i__42211);
var k = cljs.core.nth.call(null,vec__42212,(0),null);
var plugin = cljs.core.nth.call(null,vec__42212,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42214 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42208,chunk__42209,count__42210,i__42211,pl_42214,vec__42212,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42214.call(null,msg_hist);
});})(seq__42208,chunk__42209,count__42210,i__42211,pl_42214,vec__42212,k,plugin))
);
} else {
}

var G__42215 = seq__42208;
var G__42216 = chunk__42209;
var G__42217 = count__42210;
var G__42218 = (i__42211 + (1));
seq__42208 = G__42215;
chunk__42209 = G__42216;
count__42210 = G__42217;
i__42211 = G__42218;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__42208);
if(temp__4126__auto__){
var seq__42208__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42208__$1)){
var c__24331__auto__ = cljs.core.chunk_first.call(null,seq__42208__$1);
var G__42219 = cljs.core.chunk_rest.call(null,seq__42208__$1);
var G__42220 = c__24331__auto__;
var G__42221 = cljs.core.count.call(null,c__24331__auto__);
var G__42222 = (0);
seq__42208 = G__42219;
chunk__42209 = G__42220;
count__42210 = G__42221;
i__42211 = G__42222;
continue;
} else {
var vec__42213 = cljs.core.first.call(null,seq__42208__$1);
var k = cljs.core.nth.call(null,vec__42213,(0),null);
var plugin = cljs.core.nth.call(null,vec__42213,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42223 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42208,chunk__42209,count__42210,i__42211,pl_42223,vec__42213,k,plugin,seq__42208__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42223.call(null,msg_hist);
});})(seq__42208,chunk__42209,count__42210,i__42211,pl_42223,vec__42213,k,plugin,seq__42208__$1,temp__4126__auto__))
);
} else {
}

var G__42224 = cljs.core.next.call(null,seq__42208__$1);
var G__42225 = null;
var G__42226 = (0);
var G__42227 = (0);
seq__42208 = G__42224;
chunk__42209 = G__42225;
count__42210 = G__42226;
i__42211 = G__42227;
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
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
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
var watch_and_reload__delegate = function (p__42228){
var map__42230 = p__42228;
var map__42230__$1 = ((cljs.core.seq_QMARK_.call(null,map__42230))?cljs.core.apply.call(null,cljs.core.hash_map,map__42230):map__42230);
var opts = map__42230__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__42228 = null;
if (arguments.length > 0) {
var G__42231__i = 0, G__42231__a = new Array(arguments.length -  0);
while (G__42231__i < G__42231__a.length) {G__42231__a[G__42231__i] = arguments[G__42231__i + 0]; ++G__42231__i;}
  p__42228 = new cljs.core.IndexedSeq(G__42231__a,0);
} 
return watch_and_reload__delegate.call(this,p__42228);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__42232){
var p__42228 = cljs.core.seq(arglist__42232);
return watch_and_reload__delegate(p__42228);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1425613931265