// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('teacherguild.adminzone')) {
goog.provide('teacherguild.adminzone');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('teacherguild.controls');
goog.require('teacherguild.db');
goog.require('goog.History');
goog.require('goog.events');
teacherguild.adminzone.teachers = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var ch_43240 = teacherguild.db.get_teachers.call(null);
var c__20653__auto___43241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___43241,ch_43240){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___43241,ch_43240){
return (function (state_43231){
var state_val_43232 = (state_43231[(1)]);
if((state_val_43232 === (2))){
var inst_43225 = (state_43231[(2)]);
var inst_43226 = (function (){var evt = inst_43225;
return ((function (evt,inst_43225,state_val_43232,c__20653__auto___43241,ch_43240){
return (function (p1__43223_SHARP_){
return cljs.core.update_in.call(null,p1__43223_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isvisible","isvisible",288730677)], null),cljs.core.boolean$);
});
;})(evt,inst_43225,state_val_43232,c__20653__auto___43241,ch_43240))
})();
var inst_43227 = cljs.core.comp.call(null,inst_43226,teacherguild.controls.assoc_fio);
var inst_43228 = cljs.core.map.call(null,inst_43227,inst_43225);
var inst_43229 = cljs.core.reset_BANG_.call(null,teacherguild.adminzone.teachers,inst_43228);
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43231__$1,inst_43229);
} else {
if((state_val_43232 === (1))){
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43231__$1,(2),ch_43240);
} else {
return null;
}
}
});})(c__20653__auto___43241,ch_43240))
;
return ((function (switch__20597__auto__,c__20653__auto___43241,ch_43240){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_43236 = [null,null,null,null,null,null,null];
(statearr_43236[(0)] = state_machine__20598__auto__);

(statearr_43236[(1)] = (1));

return statearr_43236;
});
var state_machine__20598__auto____1 = (function (state_43231){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_43231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e43237){if((e43237 instanceof Object)){
var ex__20601__auto__ = e43237;
var statearr_43238_43242 = state_43231;
(statearr_43238_43242[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43243 = state_43231;
state_43231 = G__43243;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_43231){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_43231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___43241,ch_43240))
})();
var state__20655__auto__ = (function (){var statearr_43239 = f__20654__auto__.call(null);
(statearr_43239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___43241);

return statearr_43239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___43241,ch_43240))
);

teacherguild.adminzone.page_size = (10);
console.log("asdsad");
teacherguild.adminzone.console_handler = (function console_handler(r){
return console.log([cljs.core.str(r)].join(''));
});
teacherguild.adminzone.nav_item = (function nav_item(page,title){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,teacherguild.adminzone.current_page))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,teacherguild.adminzone.current_page,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),page,new cljs.core.Keyword(null,"title","title",636505583),title], null));
})], null),title], null)], null);
});
});
teacherguild.adminzone.about_page = (function about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About teacherguild!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
teacherguild.adminzone.home_page = (function home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to teacherguild21"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null)], null);
});
teacherguild.adminzone.teachers_page = (function teachers_page(){
var current_city = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"all",new cljs.core.Keyword(null,"title","title",636505583),"\u0412\u0441\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"], null));
var current_subject = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"all",new cljs.core.Keyword(null,"title","title",636505583),"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442"], null));
var fio_filter = reagent.core.atom.call(null,"");
var approved = reagent.core.atom.call(null,true);
var page = reagent.core.atom.call(null,(0));
return ((function (current_city,current_subject,fio_filter,approved,page){
return (function (){
var paginated_teachers = teacherguild.controls.paginate.call(null,teacherguild.controls.user_filter.call(null,cljs.core.deref.call(null,teacherguild.adminzone.teachers),cljs.core.deref.call(null,current_city),cljs.core.deref.call(null,current_subject),cljs.core.deref.call(null,fio_filter),cljs.core.deref.call(null,approved)),teacherguild.adminzone.page_size);
if((cljs.core.count.call(null,paginated_teachers) <= cljs.core.deref.call(null,page))){
cljs.core.reset_BANG_.call(null,page,(0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls.span12","div.controls.span12",1052803260),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.approved_checkbox,approved], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.cities_combobox,current_city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.subject_chooser,current_subject], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.fio_filter_input,fio_filter], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.paginator_control,cljs.core.count.call(null,paginated_teachers),page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.teachers_table,((cljs.core.empty_QMARK_.call(null,paginated_teachers))?cljs.core.PersistentVector.EMPTY:cljs.core.nth.call(null,paginated_teachers,cljs.core.deref.call(null,page)))], null)], null)], null);
});
;})(current_city,current_subject,fio_filter,approved,page))
});
teacherguild.adminzone.debug_page = (function debug_page(){
var cities_ajax = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (cities_ajax){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cities_ajax){
return (function (){
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__,cities_ajax){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__,cities_ajax){
return (function (state_43263){
var state_val_43264 = (state_43263[(1)]);
if((state_val_43264 === (2))){
var inst_43260 = (state_43263[(2)]);
var inst_43261 = cljs.core.reset_BANG_.call(null,cities_ajax,inst_43260);
var state_43263__$1 = state_43263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43263__$1,inst_43261);
} else {
if((state_val_43264 === (1))){
var inst_43258 = teacherguild.db.get_texts.call(null);
var state_43263__$1 = state_43263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43263__$1,(2),inst_43258);
} else {
return null;
}
}
});})(c__20653__auto__,cities_ajax))
;
return ((function (switch__20597__auto__,c__20653__auto__,cities_ajax){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_43268 = [null,null,null,null,null,null,null];
(statearr_43268[(0)] = state_machine__20598__auto__);

(statearr_43268[(1)] = (1));

return statearr_43268;
});
var state_machine__20598__auto____1 = (function (state_43263){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_43263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e43269){if((e43269 instanceof Object)){
var ex__20601__auto__ = e43269;
var statearr_43270_43272 = state_43263;
(statearr_43270_43272[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43273 = state_43263;
state_43263 = G__43273;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_43263){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_43263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__,cities_ajax))
})();
var state__20655__auto__ = (function (){var statearr_43271 = f__20654__auto__.call(null);
(statearr_43271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_43271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__,cities_ajax))
);

return c__20653__auto__;
});})(cities_ajax))
], null),"GET"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str(""),cljs.core.str(cljs.core.deref.call(null,cities_ajax))].join('')], null)], null);
});
;})(cities_ajax))
});
teacherguild.adminzone.settings_page = (function settings_page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.settings_table], null);
});
teacherguild.adminzone.responses_page = (function responses_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.responses_table], null)], null)], null);
});
teacherguild.adminzone.requests_page = (function requests_page(){
var current_request = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"asd"], null));
console.log(cljs.core.deref.call(null,current_request));

return ((function (current_request){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.request_modal,current_request], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.requests_table,current_request], null)], null)], null);
});
;})(current_request))
});
teacherguild.adminzone.layout = (function layout(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3.sidebar-nav","div.span3.sidebar-nav",-1678106893),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-list","ul.nav.nav-list",-319701959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.teachers_page,"\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.requests_page,"\u0417\u0430\u043F\u0440\u043E\u0441\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.responses_page,"\u041E\u0442\u0437\u044B\u0432\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.settings_page,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0430\u0439\u0442\u0430"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.debug_page,"debug"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,teacherguild.adminzone.current_page))], null)], null)], null);
});
});
teacherguild.adminzone.current_page = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u044B",new cljs.core.Keyword(null,"handler","handler",-195596612),teacherguild.adminzone.teachers_page], null));
teacherguild.adminzone.init_BANG_ = (function init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.layout], null),document.getElementById("app"));
});
teacherguild.adminzone.init_BANG_.call(null);

//# sourceMappingURL=adminzone.js.map?rel=1423994258153