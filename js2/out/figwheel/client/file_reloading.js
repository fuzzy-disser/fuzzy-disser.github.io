// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('figwheel.client.file_reloading')) {
goog.provide('figwheel.client.file_reloading');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__30941){
var map__30943 = p__30941;
var map__30943__$1 = ((cljs.core.seq_QMARK_.call(null,map__30943))?cljs.core.apply.call(null,cljs.core.hash_map,map__30943):map__30943);
var websocket_url = cljs.core.get.call(null,map__30943__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__30944,callback){
var map__30946 = p__30944;
var map__30946__$1 = ((cljs.core.seq_QMARK_.call(null,map__30946))?cljs.core.apply.call(null,cljs.core.hash_map,map__30946):map__30946);
var msg = map__30946__$1;
var meta_data = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__17979__auto__ = (function (){var or__17991__auto__ = dependency_file;
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (function (){var and__17979__auto__ = meta_data;
if(cljs.core.truth_(and__17979__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__17979__auto__;
}
})();
if(cljs.core.truth_(or__17991__auto____$1)){
return or__17991__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__17979__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__17991__auto__ = meta_data;
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__17979__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__30946,map__30946__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__30946,map__30946__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30947,p__30948){
var map__30951 = p__30947;
var map__30951__$1 = ((cljs.core.seq_QMARK_.call(null,map__30951))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);
var opts = map__30951__$1;
var url_rewriter = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30952 = p__30948;
var map__30952__$1 = ((cljs.core.seq_QMARK_.call(null,map__30952))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var d = map__30952__$1;
var file = cljs.core.get.call(null,map__30952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30954,p__30955){
var map__31009 = p__30954;
var map__31009__$1 = ((cljs.core.seq_QMARK_.call(null,map__31009))?cljs.core.apply.call(null,cljs.core.hash_map,map__31009):map__31009);
var opts = map__31009__$1;
var on_jsload = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31009__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31010 = p__30955;
var map__31010__$1 = ((cljs.core.seq_QMARK_.call(null,map__31010))?cljs.core.apply.call(null,cljs.core.hash_map,map__31010):map__31010);
var msg = map__31010__$1;
var files = cljs.core.get.call(null,map__31010__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files){
return (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (8))){
var inst_31038 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31040__$1,inst_31038);
} else {
if((state_val_31041 === (7))){
var state_31040__$1 = state_31040;
var statearr_31042_31062 = state_31040__$1;
(statearr_31042_31062[(2)] = null);

(statearr_31042_31062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (6))){
var inst_31018 = (state_31040[(7)]);
var inst_31032 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_31033 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31018);
var inst_31034 = cljs.core.pr_str.call(null,inst_31033);
var inst_31035 = console.log("not required:",inst_31034);
var state_31040__$1 = (function (){var statearr_31043 = state_31040;
(statearr_31043[(8)] = inst_31032);

return statearr_31043;
})();
var statearr_31044_31063 = state_31040__$1;
(statearr_31044_31063[(2)] = inst_31035);

(statearr_31044_31063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (5))){
var inst_31018 = (state_31040[(7)]);
var inst_31029 = (state_31040[(2)]);
var inst_31030 = cljs.core.not_empty.call(null,inst_31018);
var state_31040__$1 = (function (){var statearr_31045 = state_31040;
(statearr_31045[(9)] = inst_31029);

return statearr_31045;
})();
if(cljs.core.truth_(inst_31030)){
var statearr_31046_31064 = state_31040__$1;
(statearr_31046_31064[(1)] = (6));

} else {
var statearr_31047_31065 = state_31040__$1;
(statearr_31047_31065[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (4))){
var state_31040__$1 = state_31040;
var statearr_31048_31066 = state_31040__$1;
(statearr_31048_31066[(2)] = null);

(statearr_31048_31066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (3))){
var inst_31018 = (state_31040[(7)]);
var inst_31015 = (state_31040[(10)]);
var inst_31016 = (state_31040[(11)]);
var inst_31012 = (state_31040[(12)]);
var inst_31021 = console.debug("Figwheel: loaded these files");
var inst_31022 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31016);
var inst_31023 = cljs.core.pr_str.call(null,inst_31022);
var inst_31024 = console.log(inst_31023);
var inst_31025 = (function (){var files_not_loaded = inst_31018;
var res = inst_31016;
var res_SINGLEQUOTE_ = inst_31015;
var files_SINGLEQUOTE_ = inst_31012;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31018,inst_31015,inst_31016,inst_31012,inst_31021,inst_31022,inst_31023,inst_31024,state_val_31041,c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31018,inst_31015,inst_31016,inst_31012,inst_31021,inst_31022,inst_31023,inst_31024,state_val_31041,c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files))
})();
var inst_31026 = setTimeout(inst_31025,(10));
var state_31040__$1 = (function (){var statearr_31049 = state_31040;
(statearr_31049[(13)] = inst_31021);

(statearr_31049[(14)] = inst_31024);

return statearr_31049;
})();
var statearr_31050_31067 = state_31040__$1;
(statearr_31050_31067[(2)] = inst_31026);

(statearr_31050_31067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (2))){
var inst_31015 = (state_31040[(10)]);
var inst_31016 = (state_31040[(11)]);
var inst_31012 = (state_31040[(12)]);
var inst_31015__$1 = (state_31040[(2)]);
var inst_31016__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31015__$1);
var inst_31017 = (function (){var res = inst_31016__$1;
var res_SINGLEQUOTE_ = inst_31015__$1;
var files_SINGLEQUOTE_ = inst_31012;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31015,inst_31016,inst_31012,inst_31015__$1,inst_31016__$1,state_val_31041,c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files){
return (function (p1__30953_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30953_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31015,inst_31016,inst_31012,inst_31015__$1,inst_31016__$1,state_val_31041,c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files))
})();
var inst_31018 = cljs.core.filter.call(null,inst_31017,inst_31015__$1);
var inst_31019 = cljs.core.not_empty.call(null,inst_31016__$1);
var state_31040__$1 = (function (){var statearr_31051 = state_31040;
(statearr_31051[(7)] = inst_31018);

(statearr_31051[(10)] = inst_31015__$1);

(statearr_31051[(11)] = inst_31016__$1);

return statearr_31051;
})();
if(cljs.core.truth_(inst_31019)){
var statearr_31052_31068 = state_31040__$1;
(statearr_31052_31068[(1)] = (3));

} else {
var statearr_31053_31069 = state_31040__$1;
(statearr_31053_31069[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (1))){
var inst_31012 = (state_31040[(12)]);
var inst_31011 = before_jsload.call(null,files);
var inst_31012__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_31013 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31012__$1);
var state_31040__$1 = (function (){var statearr_31054 = state_31040;
(statearr_31054[(15)] = inst_31011);

(statearr_31054[(12)] = inst_31012__$1);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31040__$1,(2),inst_31013);
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
});})(c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files))
;
return ((function (switch__20597__auto__,c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_31058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31058[(0)] = state_machine__20598__auto__);

(statearr_31058[(1)] = (1));

return statearr_31058;
});
var state_machine__20598__auto____1 = (function (state_31040){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_31040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e31059){if((e31059 instanceof Object)){
var ex__20601__auto__ = e31059;
var statearr_31060_31070 = state_31040;
(statearr_31060_31070[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31071 = state_31040;
state_31040 = G__31071;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files))
})();
var state__20655__auto__ = (function (){var statearr_31061 = f__20654__auto__.call(null);
(statearr_31061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_31061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__,map__31009,map__31009__$1,opts,on_jsload,before_jsload,map__31010,map__31010__$1,msg,files))
);

return c__20653__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31072,link_href){
var map__31074 = p__31072;
var map__31074__$1 = ((cljs.core.seq_QMARK_.call(null,map__31074))?cljs.core.apply.call(null,cljs.core.hash_map,map__31074):map__31074);
var request_url = cljs.core.get.call(null,map__31074__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__,parent){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__,parent){
return (function (state_31095){
var state_val_31096 = (state_31095[(1)]);
if((state_val_31096 === (2))){
var inst_31092 = (state_31095[(2)]);
var inst_31093 = parent.removeChild(orig_link);
var state_31095__$1 = (function (){var statearr_31097 = state_31095;
(statearr_31097[(7)] = inst_31092);

return statearr_31097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31095__$1,inst_31093);
} else {
if((state_val_31096 === (1))){
var inst_31090 = cljs.core.async.timeout.call(null,(200));
var state_31095__$1 = state_31095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31095__$1,(2),inst_31090);
} else {
return null;
}
}
});})(c__20653__auto__,parent))
;
return ((function (switch__20597__auto__,c__20653__auto__,parent){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_31101 = [null,null,null,null,null,null,null,null];
(statearr_31101[(0)] = state_machine__20598__auto__);

(statearr_31101[(1)] = (1));

return statearr_31101;
});
var state_machine__20598__auto____1 = (function (state_31095){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_31095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e31102){if((e31102 instanceof Object)){
var ex__20601__auto__ = e31102;
var statearr_31103_31105 = state_31095;
(statearr_31103_31105[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31106 = state_31095;
state_31095 = G__31106;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_31095){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_31095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__,parent))
})();
var state__20655__auto__ = (function (){var statearr_31104 = f__20654__auto__.call(null);
(statearr_31104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_31104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__,parent))
);

return c__20653__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31107){
var map__31109 = p__31107;
var map__31109__$1 = ((cljs.core.seq_QMARK_.call(null,map__31109))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var f_data = map__31109__$1;
var request_url = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31110,files_msg){
var map__31132 = p__31110;
var map__31132__$1 = ((cljs.core.seq_QMARK_.call(null,map__31132))?cljs.core.apply.call(null,cljs.core.hash_map,map__31132):map__31132);
var opts = map__31132__$1;
var on_cssload = cljs.core.get.call(null,map__31132__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__31133_31153 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31134_31154 = null;
var count__31135_31155 = (0);
var i__31136_31156 = (0);
while(true){
if((i__31136_31156 < count__31135_31155)){
var f_31157 = cljs.core._nth.call(null,chunk__31134_31154,i__31136_31156);
figwheel.client.file_reloading.reload_css_file.call(null,f_31157);

var G__31158 = seq__31133_31153;
var G__31159 = chunk__31134_31154;
var G__31160 = count__31135_31155;
var G__31161 = (i__31136_31156 + (1));
seq__31133_31153 = G__31158;
chunk__31134_31154 = G__31159;
count__31135_31155 = G__31160;
i__31136_31156 = G__31161;
continue;
} else {
var temp__4126__auto___31162 = cljs.core.seq.call(null,seq__31133_31153);
if(temp__4126__auto___31162){
var seq__31133_31163__$1 = temp__4126__auto___31162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31133_31163__$1)){
var c__18778__auto___31164 = cljs.core.chunk_first.call(null,seq__31133_31163__$1);
var G__31165 = cljs.core.chunk_rest.call(null,seq__31133_31163__$1);
var G__31166 = c__18778__auto___31164;
var G__31167 = cljs.core.count.call(null,c__18778__auto___31164);
var G__31168 = (0);
seq__31133_31153 = G__31165;
chunk__31134_31154 = G__31166;
count__31135_31155 = G__31167;
i__31136_31156 = G__31168;
continue;
} else {
var f_31169 = cljs.core.first.call(null,seq__31133_31163__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31169);

var G__31170 = cljs.core.next.call(null,seq__31133_31163__$1);
var G__31171 = null;
var G__31172 = (0);
var G__31173 = (0);
seq__31133_31153 = G__31170;
chunk__31134_31154 = G__31171;
count__31135_31155 = G__31172;
i__31136_31156 = G__31173;
continue;
}
} else {
}
}
break;
}

var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__,map__31132,map__31132__$1,opts,on_cssload){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__,map__31132,map__31132__$1,opts,on_cssload){
return (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (2))){
var inst_31139 = (state_31143[(2)]);
var inst_31140 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31141 = on_cssload.call(null,inst_31140);
var state_31143__$1 = (function (){var statearr_31145 = state_31143;
(statearr_31145[(7)] = inst_31139);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (1))){
var inst_31137 = cljs.core.async.timeout.call(null,(100));
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(2),inst_31137);
} else {
return null;
}
}
});})(c__20653__auto__,map__31132,map__31132__$1,opts,on_cssload))
;
return ((function (switch__20597__auto__,c__20653__auto__,map__31132,map__31132__$1,opts,on_cssload){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_31149 = [null,null,null,null,null,null,null,null];
(statearr_31149[(0)] = state_machine__20598__auto__);

(statearr_31149[(1)] = (1));

return statearr_31149;
});
var state_machine__20598__auto____1 = (function (state_31143){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_31143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e31150){if((e31150 instanceof Object)){
var ex__20601__auto__ = e31150;
var statearr_31151_31174 = state_31143;
(statearr_31151_31174[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_31143;
state_31143 = G__31175;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__,map__31132,map__31132__$1,opts,on_cssload))
})();
var state__20655__auto__ = (function (){var statearr_31152 = f__20654__auto__.call(null);
(statearr_31152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_31152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__,map__31132,map__31132__$1,opts,on_cssload))
);

return c__20653__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});

//# sourceMappingURL=file_reloading.js.map?rel=1422975381412