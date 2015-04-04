// Compiled by ClojureScript 0.0-2850 {}
goog.provide('fuzzy.linear');
goog.require('cljs.core');
goog.require('fuzzy.schema');
goog.require('fuzzy.fzlogic');
goog.require('reagent.cursor');
goog.require('reagent.core');
fuzzy.linear.lang_vars = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y3","y3",-42815418),new cljs.core.Keyword(null,"x4","x4",1510536137),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y6","y6",466392812),new cljs.core.Keyword(null,"x7","x7",-565691537),new cljs.core.Keyword(null,"z1","z1",2018608080),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.Keyword(null,"z5","z5",746634260),new cljs.core.Keyword(null,"z4","z4",-2097408617),new cljs.core.Keyword(null,"z3","z3",-396848871),new cljs.core.Keyword(null,"y2","y2",-718691301)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u0440\u043E\u043A \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.072,new cljs.core.Keyword(null,"danger","danger",-624338030),1.72,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C\u0430",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.034,new cljs.core.Keyword(null,"danger","danger",-624338030),1.28,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u044B\u0445 \u0440\u0435\u0436\u0438\u043C\u043E\u0432",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.093,new cljs.core.Keyword(null,"danger","danger",-624338030),3.01,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041E\u0442\u043A\u0430\u0437(\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435) \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0437\u0430\u0448\u0438\u0442\u044B",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.045,new cljs.core.Keyword(null,"danger","danger",-624338030),1.06,new cljs.core.Keyword(null,"value","value",305978217),0.9], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u0445",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.022,new cljs.core.Keyword(null,"danger","danger",-624338030),0.08,new cljs.core.Keyword(null,"value","value",305978217),0.1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043C\u0438\u043A\u0440\u043E\u043A\u043B\u0438\u043C\u0430\u0442\u0430",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.055,new cljs.core.Keyword(null,"danger","danger",-624338030),2.62,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.036,new cljs.core.Keyword(null,"danger","danger",-624338030),1.36,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0442\u0440\u0443\u0434\u0430",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.002,new cljs.core.Keyword(null,"danger","danger",-624338030),0.09,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 \u0438 \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.028,new cljs.core.Keyword(null,"danger","danger",-624338030),1.33,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.042,new cljs.core.Keyword(null,"danger","danger",-624338030),(2),new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0438\u0437\u043D\u043E\u0441\u0430 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.78,new cljs.core.Keyword(null,"danger","danger",-624338030),1.85,new cljs.core.Keyword(null,"value","value",305978217),0.5], null)]));
fuzzy.linear.log = (function log(what){
return console.log([cljs.core.str(what)].join(''));
});
fuzzy.linear.lang_term_control = (function lang_term_control(term_key){
var term = reagent.cursor.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term_key], null),fuzzy.linear.lang_vars);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-prepend.padding-5","div.input-prepend.padding-5",-1778371682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.add-on","label.add-on",-1872599429),[cljs.core.str(term_key)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.span1","input.span1",-1725455822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,term)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (term){
return (function (p1__30398_SHARP_){
return cljs.core.reset_BANG_.call(null,term,cljs.core.assoc.call(null,cljs.core.deref.call(null,term),new cljs.core.Keyword(null,"value","value",305978217),p1__30398_SHARP_.target.value));
});})(term))
], null)], null)], null);
});
fuzzy.linear.layout = (function layout(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-20","div.padding-20",-570402732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0418\u0442\u043E\u0433: ",fuzzy.fzlogic.and.call(null,fuzzy.schema.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3.bg-gray.padding-5","div.span3.bg-gray.padding-5",-383210090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x3","x3",-1314178287)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x4","x4",1510536137)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x7","x7",-565691537)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0427\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0430\u043A\u0442\u043E\u0440: ",fuzzy.schema.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y3","y3",-42815418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y2","y2",-718691301)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y1","y1",589123466)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y6","y6",466392812)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430: ",fuzzy.schema.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z1","z1",2018608080)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z3","z3",-396848871)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z5","z5",746634260)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z4","z4",-2097408617)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0421\u0440\u0435\u0434\u0430: ",fuzzy.schema.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/3.8.png"], null)], null)], null);
});
});
fuzzy.linear.init_BANG_ = (function init_BANG_(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.layout], null),document.getElementById("app"));
});
fuzzy.linear.init_BANG_.call(null);

//# sourceMappingURL=linear.js.map?rel=1428130669249