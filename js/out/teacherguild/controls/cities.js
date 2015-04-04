// Compiled by ClojureScript 0.0-2850 {}
goog.provide('teacherguild.controls.cities');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.cursor');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('teacherguild.db');
goog.require('clojure.string');
teacherguild.controls.cities.save_city_BANG_ = (function save_city_BANG_(city,after_save_hook){
var c__26243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26243__auto__){
return (function (){
var f__26244__auto__ = (function (){var switch__26187__auto__ = ((function (c__26243__auto__){
return (function (state_51162){
var state_val_51163 = (state_51162[(1)]);
if((state_val_51163 === (5))){
var inst_51160 = (state_51162[(2)]);
var state_51162__$1 = state_51162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51162__$1,inst_51160);
} else {
if((state_val_51163 === (4))){
var inst_51152 = (state_51162[(7)]);
var inst_51157 = [cljs.core.str(inst_51152)].join('');
var inst_51158 = console.error(inst_51157);
var state_51162__$1 = state_51162;
var statearr_51164_51176 = state_51162__$1;
(statearr_51164_51176[(2)] = inst_51158);

(statearr_51164_51176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51163 === (3))){
var inst_51155 = after_save_hook.call(null);
var state_51162__$1 = state_51162;
var statearr_51165_51177 = state_51162__$1;
(statearr_51165_51177[(2)] = inst_51155);

(statearr_51165_51177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51163 === (2))){
var inst_51152 = (state_51162[(7)]);
var inst_51152__$1 = (state_51162[(2)]);
var inst_51153 = new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(inst_51152__$1);
var state_51162__$1 = (function (){var statearr_51166 = state_51162;
(statearr_51166[(7)] = inst_51152__$1);

return statearr_51166;
})();
if(cljs.core.truth_(inst_51153)){
var statearr_51167_51178 = state_51162__$1;
(statearr_51167_51178[(1)] = (3));

} else {
var statearr_51168_51179 = state_51162__$1;
(statearr_51168_51179[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51163 === (1))){
var inst_51150 = teacherguild.db.save_document_BANG_.call(null,"cities",city);
var state_51162__$1 = state_51162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51162__$1,(2),inst_51150);
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
var statearr_51172 = [null,null,null,null,null,null,null,null];
(statearr_51172[(0)] = state_machine__26188__auto__);

(statearr_51172[(1)] = (1));

return statearr_51172;
});
var state_machine__26188__auto____1 = (function (state_51162){
while(true){
var ret_value__26189__auto__ = (function (){try{while(true){
var result__26190__auto__ = switch__26187__auto__.call(null,state_51162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26190__auto__;
}
break;
}
}catch (e51173){if((e51173 instanceof Object)){
var ex__26191__auto__ = e51173;
var statearr_51174_51180 = state_51162;
(statearr_51174_51180[(5)] = ex__26191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51181 = state_51162;
state_51162 = G__51181;
continue;
} else {
return ret_value__26189__auto__;
}
break;
}
});
state_machine__26188__auto__ = function(state_51162){
switch(arguments.length){
case 0:
return state_machine__26188__auto____0.call(this);
case 1:
return state_machine__26188__auto____1.call(this,state_51162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26188__auto____0;
state_machine__26188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26188__auto____1;
return state_machine__26188__auto__;
})()
;})(switch__26187__auto__,c__26243__auto__))
})();
var state__26245__auto__ = (function (){var statearr_51175 = f__26244__auto__.call(null);
(statearr_51175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26243__auto__);

return statearr_51175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26245__auto__);
});})(c__26243__auto__))
);

return c__26243__auto__;
});
teacherguild.controls.cities.city_params = (function city_params(current_city,after_save_hook){
var phone = reagent.cursor.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone","phone",-763596057)], null),current_city);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4","div.span4",-1287250021),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.span3","input.span3",378031897),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,phone),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (phone){
return (function (p1__51182_SHARP_){
return cljs.core.reset_BANG_.call(null,phone,p1__51182_SHARP_.target.value);
});})(phone))
,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"+7 (913) 222 1234"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-success","a.btn.btn-success",-1694151738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (phone){
return (function (){
return teacherguild.controls.cities.save_city_BANG_.call(null,cljs.core.deref.call(null,current_city),after_save_hook);
});})(phone))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-ok.icon-white","i.icon-ok.icon-white",520184939)], null)," \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"], null)], null)], null);
});
teacherguild.controls.cities.cities_list = (function cities_list(current_city,cities){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3","div.span3",1447594214),(function (){var current_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_city));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-list.pull-left.pick-subject","ul.nav.nav-list.pull-left.pick-subject",-801584448),(function (){var iter__24327__auto__ = ((function (current_name){
return (function iter__51187(s__51188){
return (new cljs.core.LazySeq(null,((function (current_name){
return (function (){
var s__51188__$1 = s__51188;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51188__$1);
if(temp__4126__auto__){
var s__51188__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51188__$2)){
var c__24325__auto__ = cljs.core.chunk_first.call(null,s__51188__$2);
var size__24326__auto__ = cljs.core.count.call(null,c__24325__auto__);
var b__51190 = cljs.core.chunk_buffer.call(null,size__24326__auto__);
if((function (){var i__51189 = (0);
while(true){
if((i__51189 < size__24326__auto__)){
var city = cljs.core._nth.call(null,c__24325__auto__,i__51189);
cljs.core.chunk_append.call(null,b__51190,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.subject-item","li.subject-item",-1960562751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city),current_name))?"active":null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51189,city,c__24325__auto__,size__24326__auto__,b__51190,s__51188__$2,temp__4126__auto__,current_name){
return (function (){
return cljs.core.reset_BANG_.call(null,current_city,city);
});})(i__51189,city,c__24325__auto__,size__24326__auto__,b__51190,s__51188__$2,temp__4126__auto__,current_name))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(city)], null)], null));

var G__51191 = (i__51189 + (1));
i__51189 = G__51191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51190),iter__51187.call(null,cljs.core.chunk_rest.call(null,s__51188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51190),null);
}
} else {
var city = cljs.core.first.call(null,s__51188__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.subject-item","li.subject-item",-1960562751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city),current_name))?"active":null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (city,s__51188__$2,temp__4126__auto__,current_name){
return (function (){
return cljs.core.reset_BANG_.call(null,current_city,city);
});})(city,s__51188__$2,temp__4126__auto__,current_name))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(city)], null)], null),iter__51187.call(null,cljs.core.rest.call(null,s__51188__$2)));
}
} else {
return null;
}
break;
}
});})(current_name))
,null,null));
});})(current_name))
;
return iter__24327__auto__.call(null,cljs.core.deref.call(null,cities));
})()], null);
})()], null);
});
teacherguild.controls.cities.add_new_city = (function add_new_city(new_city){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span8","div.span8",-123007402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0433\u043E\u0440\u043E\u0434"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span6","div.span6",830431867)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4","div.span4",-1287250021),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0432 \u0430\u0434\u0440\u0435\u0441\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.span3","input.span3",378031897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"novosibirsk"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4","div.span4",-1287250021),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0440\u043E\u0434\u0430"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.span3","input.span3",378031897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.cities.city_params,new_city], null)], null);
});
teacherguild.controls.cities.city_edit_area = (function city_edit_area(current_city,after_save_hook){
var new_city = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,current_city)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span9","div.span9",744219847),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.pull-right","button.btn.btn-danger.pull-right",1248292848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (new_city){
return (function (){
return cljs.core.reset_BANG_.call(null,current_city,cljs.core.PersistentArrayMap.EMPTY);
});})(new_city))
], null),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0433\u043E\u0440\u043E\u0434",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-white.icon-chevron-right","i.icon-white.icon-chevron-right",-86733493)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.span9","hr.span9",-9531492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.cities.city_params,current_city,after_save_hook], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [teacherguild.controls.cities.add_new_city,new_city], null);
}
});

//# sourceMappingURL=cities.js.map?rel=1426590364938