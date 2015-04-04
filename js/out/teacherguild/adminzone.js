// Compiled by ClojureScript 0.0-2850 {}
goog.provide('teacherguild.adminzone');
goog.require('cljs.core');
goog.require('teacherguild.controls.subjects');
goog.require('teacherguild.controls.responses');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('teacherguild.controls.teachers');
goog.require('teacherguild.controls.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('teacherguild.controls.preferences');
goog.require('teacherguild.db');
goog.require('teacherguild.controls.cities');
goog.require('goog.History');
goog.require('goog.events');
goog.require('teacherguild.controls.requests');
teacherguild.adminzone.log = (function log(what){
return console.log([cljs.core.str(what)].join(''));
});
teacherguild.adminzone.teachers_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
teacherguild.adminzone.requests_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
teacherguild.adminzone.categors_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
teacherguild.adminzone.cities_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
teacherguild.db.get_all_teachers.call(null,teacherguild.adminzone.teachers_atom,teacherguild.controls.teachers.transform_teachers);
teacherguild.db.get_all_requests.call(null,teacherguild.adminzone.requests_atom,cljs.core.identity);
teacherguild.db.get_all_categors.call(null,teacherguild.adminzone.categors_atom,cljs.core.identity);
teacherguild.db.get_all_cities.call(null,teacherguild.adminzone.cities_atom,cljs.core.identity);
teacherguild.adminzone.page_size = (10);
reagent.core.atom.call(null,"asda");
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
var current_teacher = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (current_city,current_subject,fio_filter,approved,page,current_teacher){
return (function (){
var paginated_teachers = teacherguild.controls.core.paginate.call(null,teacherguild.controls.teachers.user_filter.call(null,cljs.core.deref.call(null,teacherguild.adminzone.teachers_atom),cljs.core.deref.call(null,current_city),cljs.core.deref.call(null,current_subject),cljs.core.deref.call(null,fio_filter),cljs.core.deref.call(null,approved)),teacherguild.adminzone.page_size);
if((cljs.core.count.call(null,paginated_teachers) <= cljs.core.deref.call(null,page))){
cljs.core.reset_BANG_.call(null,page,(0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_teacher),cljs.core.PersistentArrayMap.EMPTY))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls.span12","div.controls.span12",1052803260),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.teachers.approved_checkbox,approved], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.teachers.cities_combobox,current_city], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.teachers.subject_chooser,current_subject], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.teachers.fio_filter_input,fio_filter], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_teacher),cljs.core.PersistentArrayMap.EMPTY))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.core.paginator_control,cljs.core.count.call(null,paginated_teachers),page], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.teachers.teachers_table,((cljs.core.empty_QMARK_.call(null,paginated_teachers))?cljs.core.PersistentVector.EMPTY:cljs.core.nth.call(null,paginated_teachers,cljs.core.deref.call(null,page))),current_teacher,((function (paginated_teachers,current_city,current_subject,fio_filter,approved,page,current_teacher){
return (function (){
console.log("haha.");

return teacherguild.db.get_all_teachers.call(null,teacherguild.adminzone.teachers_atom,((function (paginated_teachers,current_city,current_subject,fio_filter,approved,page,current_teacher){
return (function (teachers){
var transformed_teachers = teacherguild.controls.teachers.transform_teachers.call(null,teachers);
cljs.core.reset_BANG_.call(null,current_teacher,cljs.core.PersistentArrayMap.EMPTY);

return transformed_teachers;
});})(paginated_teachers,current_city,current_subject,fio_filter,approved,page,current_teacher))
);
});})(paginated_teachers,current_city,current_subject,fio_filter,approved,page,current_teacher))
], null)], null)], null);
});
;})(current_city,current_subject,fio_filter,approved,page,current_teacher))
});
teacherguild.adminzone.debug_page = (function debug_page(){
var store = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (store){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (store){
return (function (){
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__,store){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__,store){
return (function (state_51213){
var state_val_51214 = (state_51213[(1)]);
if((state_val_51214 === (2))){
var inst_51210 = (state_51213[(2)]);
var inst_51211 = cljs.core.reset_BANG_.call(null,store,inst_51210);
var state_51213__$1 = state_51213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51213__$1,inst_51211);
} else {
if((state_val_51214 === (1))){
var inst_51208 = teacherguild.db.get_subjects_by_name.call(null);
var state_51213__$1 = state_51213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51213__$1,(2),inst_51208);
} else {
return null;
}
}
});})(c__26243__auto__,store))
;
return ((function (switch__26187__auto__,c__26243__auto__,store){
return (function() {
var state_machine__26188__auto__ = null;
var state_machine__26188__auto____0 = (function (){
var statearr_51218 = [null,null,null,null,null,null,null];
(statearr_51218[(0)] = state_machine__26188__auto__);

(statearr_51218[(1)] = (1));

return statearr_51218;
});
var state_machine__26188__auto____1 = (function (state_51213){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_51213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e51219){if((e51219 instanceof Object)){
var ex__26191__auto__ = e51219;
var statearr_51220_51222 = state_51213;
(statearr_51220_51222[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51223 = state_51213;
state_51213 = G__51223;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_51213){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_51213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__,store))
})();
var state__26245__auto__ = (function (){var statearr_51221 = f__26244__auto__.call(null);
(statearr_51221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_51221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__,store))
);

return c__26243__auto__;
});})(store))
], null),"GET"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str(teacherguild.db.vec_to_map.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"foo","foo",1268894036),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fgh","fgh",-529214836),"asd"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"adsad"], null)], null),new cljs.core.Keyword(null,"a","a",-2123407586)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str("\n\n"),cljs.core.str(cljs.core.deref.call(null,store))].join('')], null)], null);
});
;})(store))
});
teacherguild.adminzone.settings_page = (function settings_page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.preferences.settings_table], null);
});
teacherguild.adminzone.responses_page = (function responses_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.responses.responses_table], null)], null)], null);
});
teacherguild.adminzone.requests_page = (function requests_page(){
var current_request = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),"asd"], null));
console.log(cljs.core.deref.call(null,current_request));

return ((function (current_request){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.requests.request_modal,current_request,((function (current_request){
return (function (){
return teacherguild.db.get_all_requests.call(null,teacherguild.adminzone.requests_atom,cljs.core.identity);
});})(current_request))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.requests.requests_table,current_request,teacherguild.adminzone.requests_atom], null)], null)], null);
});
;})(current_request))
});
teacherguild.adminzone.subjects_page = (function subjects_page(){
var current_subject = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.subjects.subjects_list,current_subject,teacherguild.adminzone.categors_atom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.subjects.subject_edit_area,current_subject,((function (current_subject){
return (function (){
return null;
});})(current_subject))
], null)], null);
});
teacherguild.adminzone.cities_page = (function cities_page(){
var current_city = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.cities.cities_list,current_city,teacherguild.adminzone.cities_atom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.cities.city_edit_area,current_city,((function (current_city){
return (function (){
teacherguild.db.get_all_cities.call(null,teacherguild.adminzone.cities_atom,cljs.core.identity);

return cljs.core.reset_BANG_.call(null,current_city,cljs.core.PersistentArrayMap.EMPTY);
});})(current_city))
], null)], null);
});
teacherguild.adminzone.layout = (function layout(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3.sidebar-nav","div.span3.sidebar-nav",-1678106893),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-list","ul.nav.nav-list",-319701959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.teachers_page,"\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.requests_page,"\u0417\u0430\u043F\u0440\u043E\u0441\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.responses_page,"\u041E\u0442\u0437\u044B\u0432\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.subjects_page,"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.cities_page,"\u0413\u043E\u0440\u043E\u0434\u0430"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.settings_page,"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0430\u0439\u0442\u0430"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.nav_item,teacherguild.adminzone.debug_page,"debug"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,teacherguild.adminzone.current_page))], null)], null)], null);
});
});
teacherguild.adminzone.current_page = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u044B",new cljs.core.Keyword(null,"handler","handler",-195596612),teacherguild.adminzone.teachers_page], null));
teacherguild.adminzone.init_BANG_ = (function init_BANG_(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.adminzone.layout], null),document.getElementById("app"));
});
teacherguild.adminzone.init_BANG_.call(null);

//# sourceMappingURL=adminzone.js.map?rel=1426590504205