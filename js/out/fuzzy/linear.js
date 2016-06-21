// Compiled by ClojureScript 1.9.76 {}
goog.provide('fuzzy.linear');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('fuzzy.schema.electro');
goog.require('fuzzy.schema.fire');
goog.require('fuzzy.fzlogic');
goog.require('fuzzy.schema.accident');
fuzzy.linear.lang_vars = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"z2","z2",1901955525),new cljs.core.Keyword(null,"y3","y3",-42815418),new cljs.core.Keyword(null,"x10","x10",785950182),new cljs.core.Keyword(null,"x4","x4",1510536137),new cljs.core.Keyword(null,"x6","x6",-1637603990),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y6","y6",466392812),new cljs.core.Keyword(null,"x7","x7",-565691537),new cljs.core.Keyword(null,"z1","z1",2018608080),new cljs.core.Keyword(null,"y7","y7",869633137),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.Keyword(null,"z5","z5",746634260),new cljs.core.Keyword(null,"z4","z4",-2097408617),new cljs.core.Keyword(null,"z3","z3",-396848871),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y4","y4",1391924217),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y8","y8",658806364),new cljs.core.Keyword(null,"y5","y5",-1724007363),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.049,new cljs.core.Keyword(null,"danger","danger",-624338030),2.34,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u0440\u043E\u043A \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.072,new cljs.core.Keyword(null,"danger","danger",-624338030),1.72,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.001,new cljs.core.Keyword(null,"danger","danger",-624338030),0.03,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C\u0430",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.034,new cljs.core.Keyword(null,"danger","danger",-624338030),1.28,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041E\u0431\u0443\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C \u0432 \u043D\u0435\u0448\u0442\u0430\u0442\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.031,new cljs.core.Keyword(null,"danger","danger",-624338030),1.17,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0430\u0432\u0430\u0440\u0438\u0439\u043D\u044B\u0445 \u0440\u0435\u0436\u0438\u043C\u043E\u0432",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.093,new cljs.core.Keyword(null,"danger","danger",-624338030),3.01,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041E\u0442\u043A\u0430\u0437(\u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435) \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0437\u0430\u0448\u0438\u0442\u044B",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.045,new cljs.core.Keyword(null,"danger","danger",-624338030),1.06,new cljs.core.Keyword(null,"value","value",305978217),0.9], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u0445",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.022,new cljs.core.Keyword(null,"danger","danger",-624338030),0.08,new cljs.core.Keyword(null,"value","value",305978217),0.1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043C\u0438\u043A\u0440\u043E\u043A\u043B\u0438\u043C\u0430\u0442\u0430",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.055,new cljs.core.Keyword(null,"danger","danger",-624338030),2.62,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desc","desc",2093485764),"\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u041E\u0422\u0421",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.034,new cljs.core.Keyword(null,"danger","danger",-624338030),0.81,new cljs.core.Keyword(null,"value","value",305978217),0.1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.036,new cljs.core.Keyword(null,"danger","danger",-624338030),1.36,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0442\u0440\u0443\u0434\u0430",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.002,new cljs.core.Keyword(null,"danger","danger",-624338030),0.09,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 \u0438 \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.028,new cljs.core.Keyword(null,"danger","danger",-624338030),1.33,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.042,new cljs.core.Keyword(null,"danger","danger",-624338030),(2),new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.042,new cljs.core.Keyword(null,"danger","danger",-624338030),1.58,new cljs.core.Keyword(null,"value","value",305978217),0.1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0438\u0437\u043D\u043E\u0441\u0430 \u0442\u043E\u043A\u043E\u0432\u0435\u0434\u0443\u0449\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.057,new cljs.core.Keyword(null,"danger","danger",-624338030),1.35,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0438\u0437\u043D\u043E\u0441\u0430 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0435\u0439 \u042D\u0423",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.78,new cljs.core.Keyword(null,"danger","danger",-624338030),1.85,new cljs.core.Keyword(null,"value","value",305978217),0.5], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u042D\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0437\u0430\u0449\u0438\u0442\u044B",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.031,new cljs.core.Keyword(null,"danger","danger",-624338030),0.73,new cljs.core.Keyword(null,"value","value",305978217),0.1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041E\u0442\u043A\u0430\u0437 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.046,new cljs.core.Keyword(null,"danger","danger",-624338030),1.35,new cljs.core.Keyword(null,"value","value",305978217),0.9], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432",new cljs.core.Keyword(null,"weight","weight",-1262796205),0.041,new cljs.core.Keyword(null,"danger","danger",-624338030),1.55,new cljs.core.Keyword(null,"value","value",305978217),0.1], null)]));
fuzzy.linear.log = (function fuzzy$linear$log(what){
return console.log([cljs.core.str(what)].join(''));
});
fuzzy.linear.lang_term_control = (function fuzzy$linear$lang_term_control(term_key){
var term = reagent.core.cursor.call(null,fuzzy.linear.lang_vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term_key], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-prepend.padding-5","div.input-prepend.padding-5",-1778371682),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.add-on","label.add-on",-1872599429),[cljs.core.str(term_key)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.span1","input.span1",-1725455822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,term)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (term){
return (function (p1__8401_SHARP_){
return cljs.core.reset_BANG_.call(null,term,cljs.core.assoc.call(null,cljs.core.deref.call(null,term),new cljs.core.Keyword(null,"value","value",305978217),p1__8401_SHARP_.target.value));
});})(term))
], null)], null)], null);
});
fuzzy.linear.electro_fire = (function fuzzy$linear$electro_fire(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-20","div.padding-20",-570402732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0418\u0442\u043E\u0433: ",fuzzy.fzlogic.and.call(null,fuzzy.schema.electro.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.electro.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.electro.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3.bg-gray.padding-5","div.span3.bg-gray.padding-5",-383210090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x1","x1",-1863922247)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x4","x4",1510536137)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x10","x10",785950182)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0427\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0430\u043A\u0442\u043E\u0440: ",fuzzy.schema.fire.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y1","y1",589123466)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z3","z3",-396848871)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y5","y5",-1724007363)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y4","y4",1391924217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z1","z1",2018608080)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z2","z2",1901955525)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430: ",fuzzy.schema.fire.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y6","y6",466392812)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y8","y8",658806364)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z5","z5",746634260)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0421\u0440\u0435\u0434\u0430: ",fuzzy.schema.fire.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/3.7.png"], null)], null)], null);
});
fuzzy.linear.electro_injure = (function fuzzy$linear$electro_injure(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-20","div.padding-20",-570402732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0418\u0442\u043E\u0433: ",fuzzy.fzlogic.and.call(null,fuzzy.schema.electro.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.electro.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.electro.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3.bg-gray.padding-5","div.span3.bg-gray.padding-5",-383210090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x3","x3",-1314178287)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x4","x4",1510536137)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x7","x7",-565691537)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0427\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0430\u043A\u0442\u043E\u0440: ",fuzzy.schema.electro.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y3","y3",-42815418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y2","y2",-718691301)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y1","y1",589123466)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y6","y6",466392812)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430: ",fuzzy.schema.electro.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z1","z1",2018608080)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z3","z3",-396848871)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z5","z5",746634260)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z4","z4",-2097408617)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0421\u0440\u0435\u0434\u0430: ",fuzzy.schema.electro.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/3.8.png"], null)], null)], null);
});
fuzzy.linear.accident_no_power = (function fuzzy$linear$accident_no_power(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.padding-20","div.padding-20",-570402732),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0418\u0442\u043E\u0433: ",fuzzy.fzlogic.and.call(null,fuzzy.schema.accident.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.accident.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)),fuzzy.schema.accident.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span3.bg-gray.padding-5","div.span3.bg-gray.padding-5",-383210090),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x1","x1",-1863922247)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x2","x2",-1362513475)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x4","x4",1510536137)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x6","x6",-1637603990)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"x7","x7",-565691537)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0427\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0430\u043A\u0442\u043E\u0440: ",fuzzy.schema.accident.human_factor.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y4","y4",1391924217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y2","y2",-718691301)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y1","y1",589123466)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y7","y7",869633137)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y8","y8",658806364)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"y6","y6",466392812)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430: ",fuzzy.schema.accident.electro_station.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span4.bg-gray.padding-5","div.span4.bg-gray.padding-5",70496368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z1","z1",2018608080)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z3","z3",-396848871)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z2","z2",1901955525)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.lang_term_control,new cljs.core.Keyword(null,"z4","z4",-2097408617)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\u0421\u0440\u0435\u0434\u0430: ",fuzzy.schema.accident.environment.call(null,cljs.core.deref.call(null,fuzzy.linear.lang_vars))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/3.9.png"], null)], null)], null);
});
fuzzy.linear.pages = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u041F\u043E\u0436\u0430\u0440 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435",new cljs.core.Keyword(null,"fn","fn",-1175266204),fuzzy.linear.electro_fire], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0440\u0430\u0432\u043C\u0430 \u0441 \u043B\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043E\u043C",new cljs.core.Keyword(null,"fn","fn",-1175266204),fuzzy.linear.electro_injure], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u0410\u0432\u0430\u0440\u0438\u044F -- \u043F\u0435\u0440\u0435\u0440\u044B\u0432 \u044D\u043D\u0435\u0440\u0433\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"fn","fn",-1175266204),fuzzy.linear.accident_no_power], null)], null);
fuzzy.linear.current_page = reagent.core.atom.call(null,cljs.core.first.call(null,fuzzy.linear.pages));
fuzzy.linear.nav_menu = (function fuzzy$linear$nav_menu(pages,current_page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.span12.nav.nav-pills","ul.span12.nav.nav-pills",-327470134),(function (){var current_page_title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_page));
var iter__6995__auto__ = ((function (current_page_title){
return (function fuzzy$linear$nav_menu_$_iter__8406(s__8407){
return (new cljs.core.LazySeq(null,((function (current_page_title){
return (function (){
var s__8407__$1 = s__8407;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8407__$1);
if(temp__4425__auto__){
var s__8407__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8407__$2)){
var c__6993__auto__ = cljs.core.chunk_first.call(null,s__8407__$2);
var size__6994__auto__ = cljs.core.count.call(null,c__6993__auto__);
var b__8409 = cljs.core.chunk_buffer.call(null,size__6994__auto__);
if((function (){var i__8408 = (0);
while(true){
if((i__8408 < size__6994__auto__)){
var page = cljs.core._nth.call(null,c__6993__auto__,i__8408);
cljs.core.chunk_append.call(null,b__8409,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(page),current_page_title))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8408,page,c__6993__auto__,size__6994__auto__,b__8409,s__8407__$2,temp__4425__auto__,current_page_title){
return (function (){
return cljs.core.reset_BANG_.call(null,current_page,page);
});})(i__8408,page,c__6993__auto__,size__6994__auto__,b__8409,s__8407__$2,temp__4425__auto__,current_page_title))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(page)], null)], null));

var G__8410 = (i__8408 + (1));
i__8408 = G__8410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8409),fuzzy$linear$nav_menu_$_iter__8406.call(null,cljs.core.chunk_rest.call(null,s__8407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8409),null);
}
} else {
var page = cljs.core.first.call(null,s__8407__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(page),current_page_title))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__8407__$2,temp__4425__auto__,current_page_title){
return (function (){
return cljs.core.reset_BANG_.call(null,current_page,page);
});})(page,s__8407__$2,temp__4425__auto__,current_page_title))
], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(page)], null)], null),fuzzy$linear$nav_menu_$_iter__8406.call(null,cljs.core.rest.call(null,s__8407__$2)));
}
} else {
return null;
}
break;
}
});})(current_page_title))
,null,null));
});})(current_page_title))
;
return iter__6995__auto__.call(null,pages);
})()], null);
});
fuzzy.linear.layout = (function fuzzy$linear$layout(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.span12","div.span12",-1039736360),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.nav_menu,fuzzy.linear.pages,fuzzy.linear.current_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fuzzy.linear.current_page))], null)], null)], null);
});
});
fuzzy.linear.run = (function fuzzy$linear$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fuzzy.linear.layout], null),document.getElementById("app"));
});
goog.exportSymbol('fuzzy.linear.run', fuzzy.linear.run);
fuzzy.linear.run.call(null);

//# sourceMappingURL=linear.js.map?rel=1466484958383