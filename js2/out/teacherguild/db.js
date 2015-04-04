// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('teacherguild.db')) {
goog.provide('teacherguild.db');
}
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
teacherguild.db.db_host = "http://couch.db";
teacherguild.db.api_host = "http://teacherguild.core/api";
teacherguild.db.get_db_data = (function get_db_data(href,processf){
var ret = cljs.core.async.chan.call(null);
var handler = cljs.core.comp.call(null,((function (ret){
return (function (p1__93819_SHARP_){
return cljs.core.async.put_BANG_.call(null,ret,p1__93819_SHARP_);
});})(ret))
,processf);
ajax.core.GET.call(null,[cljs.core.str(teacherguild.db.db_host),cljs.core.str(href)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));

return ret;
});
teacherguild.db.get_api_data = (function get_api_data(endpoint,processf){
var ret = cljs.core.async.chan.call(null);
var handler = cljs.core.comp.call(null,((function (ret){
return (function (p1__93820_SHARP_){
return cljs.core.async.put_BANG_.call(null,ret,p1__93820_SHARP_);
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
teacherguild.db.get_cities = (function get_cities(){
return teacherguild.db.get_view.call(null,"cities","all-cities","by-priority",(function (p1__93821_SHARP_){
return cljs.core.get_in.call(null,p1__93821_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"value","value",305978217)], null));
}));
});
teacherguild.db.get_teachers = (function get_teachers(){
return teacherguild.db.get_view.call(null,"teachers","teachers","by-recency?reduce=false&descending=true",(function (p1__93822_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,p1__93822_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null))));
}));
});
teacherguild.db.get_responses = (function get_responses(){
return teacherguild.db.get_view.call(null,"teachers","all-responses","by-recency?reduce=false&descending=true",(function (p1__93823_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,p1__93823_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null))));
}));
});
teacherguild.db.get_requests = (function get_requests(){
return teacherguild.db.get_view.call(null,"requests","all-requests","by-recency?reduce=false&descending=true",(function (p1__93824_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,p1__93824_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null))));
}));
});
teacherguild.db.keywordize_collection = (function keywordize_collection(coll){
var ks = cljs.core.map.call(null,(function (p1__93825_SHARP_){
return cljs.core.keyword.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__93825_SHARP_)));
}),coll);
var vals = cljs.core.map.call(null,((function (ks){
return (function (p1__93826_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__93826_SHARP_);
});})(ks))
,coll);
return cljs.core.zipmap.call(null,ks,vals);
});
teacherguild.db.get_texts = (function get_texts(){
return teacherguild.db.get_view.call(null,"texts","all-texts","by-name",(function (p1__93827_SHARP_){
return teacherguild.db.keywordize_collection.call(null,cljs.core.get_in.call(null,p1__93827_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null)));
}));
});
teacherguild.db.get_meta = (function get_meta(){
return teacherguild.db.get_view.call(null,"meta","all-meta","by-name",(function (p1__93828_SHARP_){
return teacherguild.db.keywordize_collection.call(null,cljs.core.get_in.call(null,p1__93828_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null)));
}));
});

//# sourceMappingURL=db.js.map?rel=1423751351510