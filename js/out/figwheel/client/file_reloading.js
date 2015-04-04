// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__42495_SHARP_,p2__42496_SHARP_){
var and__23532__auto__ = p1__42495_SHARP_;
if(cljs.core.truth_(and__23532__auto__)){
return p2__42496_SHARP_;
} else {
return and__23532__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__23544__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__23544__auto__){
return or__23544__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__42498_SHARP_,p2__42497_SHARP_){
return [cljs.core.str(p2__42497_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__23544__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__23544__auto__){
return or__23544__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__23544__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__24441__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24445__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24445__auto__,method_table__24441__auto__,prefer_table__24442__auto__,method_cache__24443__auto__,cached_hierarchy__24444__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42499){
var map__42500 = p__42499;
var map__42500__$1 = ((cljs.core.seq_QMARK_.call(null,map__42500))?cljs.core.apply.call(null,cljs.core.hash_map,map__42500):map__42500);
var file = cljs.core.get.call(null,map__42500__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__42501){
var map__42502 = p__42501;
var map__42502__$1 = ((cljs.core.seq_QMARK_.call(null,map__42502))?cljs.core.apply.call(null,cljs.core.hash_map,map__42502):map__42502);
var namespace = cljs.core.get.call(null,map__42502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__24441__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24445__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24445__auto__,method_table__24441__auto__,prefer_table__24442__auto__,method_cache__24443__auto__,cached_hierarchy__24444__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e42503){if((e42503 instanceof Error)){
var e = e42503;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42503;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__42504,callback){
var map__42506 = p__42504;
var map__42506__$1 = ((cljs.core.seq_QMARK_.call(null,map__42506))?cljs.core.apply.call(null,cljs.core.hash_map,map__42506):map__42506);
var file_msg = map__42506__$1;
var request_url = cljs.core.get.call(null,map__42506__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42506,map__42506__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42506,map__42506__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__42507){
var map__42509 = p__42507;
var map__42509__$1 = ((cljs.core.seq_QMARK_.call(null,map__42509))?cljs.core.apply.call(null,cljs.core.hash_map,map__42509):map__42509);
var file_msg = map__42509__$1;
var meta_data = cljs.core.get.call(null,map__42509__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__42509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__23544__auto__ = meta_data;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__23532__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__23532__auto__){
var or__23544__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__23544__auto____$1)){
return or__23544__auto____$1;
} else {
var and__23532__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__23532__auto____$1){
var or__23544__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__23544__auto____$2){
return or__23544__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__23532__auto____$1;
}
}
}
} else {
return and__23532__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__42510,callback){
var map__42512 = p__42510;
var map__42512__$1 = ((cljs.core.seq_QMARK_.call(null,map__42512))?cljs.core.apply.call(null,cljs.core.hash_map,map__42512):map__42512);
var file_msg = map__42512__$1;
var namespace = cljs.core.get.call(null,map__42512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__42512__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26217__auto___42599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___42599,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___42599,out){
return (function (state_42581){
var state_val_42582 = (state_42581[(1)]);
if((state_val_42582 === (7))){
var inst_42565 = (state_42581[(7)]);
var inst_42571 = (state_42581[(2)]);
var inst_42572 = cljs.core.async.put_BANG_.call(null,out,inst_42571);
var inst_42561 = inst_42565;
var state_42581__$1 = (function (){var statearr_42583 = state_42581;
(statearr_42583[(8)] = inst_42572);

(statearr_42583[(9)] = inst_42561);

return statearr_42583;
})();
var statearr_42584_42600 = state_42581__$1;
(statearr_42584_42600[(2)] = null);

(statearr_42584_42600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42582 === (6))){
var inst_42577 = (state_42581[(2)]);
var state_42581__$1 = state_42581;
var statearr_42585_42601 = state_42581__$1;
(statearr_42585_42601[(2)] = inst_42577);

(statearr_42585_42601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42582 === (5))){
var inst_42575 = cljs.core.async.close_BANG_.call(null,out);
var state_42581__$1 = state_42581;
var statearr_42586_42602 = state_42581__$1;
(statearr_42586_42602[(2)] = inst_42575);

(statearr_42586_42602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42582 === (4))){
var inst_42564 = (state_42581[(10)]);
var inst_42569 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42564);
var state_42581__$1 = state_42581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42581__$1,(7),inst_42569);
} else {
if((state_val_42582 === (3))){
var inst_42579 = (state_42581[(2)]);
var state_42581__$1 = state_42581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42581__$1,inst_42579);
} else {
if((state_val_42582 === (2))){
var inst_42564 = (state_42581[(10)]);
var inst_42561 = (state_42581[(9)]);
var inst_42564__$1 = cljs.core.nth.call(null,inst_42561,(0),null);
var inst_42565 = cljs.core.nthnext.call(null,inst_42561,(1));
var inst_42566 = (inst_42564__$1 == null);
var inst_42567 = cljs.core.not.call(null,inst_42566);
var state_42581__$1 = (function (){var statearr_42587 = state_42581;
(statearr_42587[(10)] = inst_42564__$1);

(statearr_42587[(7)] = inst_42565);

return statearr_42587;
})();
if(inst_42567){
var statearr_42588_42603 = state_42581__$1;
(statearr_42588_42603[(1)] = (4));

} else {
var statearr_42589_42604 = state_42581__$1;
(statearr_42589_42604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42582 === (1))){
var inst_42559 = cljs.core.nth.call(null,files,(0),null);
var inst_42560 = cljs.core.nthnext.call(null,files,(1));
var inst_42561 = files;
var state_42581__$1 = (function (){var statearr_42590 = state_42581;
(statearr_42590[(11)] = inst_42559);

(statearr_42590[(9)] = inst_42561);

(statearr_42590[(12)] = inst_42560);

return statearr_42590;
})();
var statearr_42591_42605 = state_42581__$1;
(statearr_42591_42605[(2)] = null);

(statearr_42591_42605[(1)] = (2));


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
});})(c__26217__auto___42599,out))
;
return ((function (switch__26161__auto__,c__26217__auto___42599,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_42595 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42595[(0)] = state_machine__26162__auto__);

(statearr_42595[(1)] = (1));

return statearr_42595;
});
var state_machine__26162__auto____1 = (function (state_42581){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_42581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e42596){if((e42596 instanceof Object)){
var ex__26165__auto__ = e42596;
var statearr_42597_42606 = state_42581;
(statearr_42597_42606[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42607 = state_42581;
state_42581 = G__42607;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_42581){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_42581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___42599,out))
})();
var state__26219__auto__ = (function (){var statearr_42598 = f__26218__auto__.call(null);
(statearr_42598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___42599);

return statearr_42598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___42599,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__42608,p__42609){
var map__42612 = p__42608;
var map__42612__$1 = ((cljs.core.seq_QMARK_.call(null,map__42612))?cljs.core.apply.call(null,cljs.core.hash_map,map__42612):map__42612);
var opts = map__42612__$1;
var url_rewriter = cljs.core.get.call(null,map__42612__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__42613 = p__42609;
var map__42613__$1 = ((cljs.core.seq_QMARK_.call(null,map__42613))?cljs.core.apply.call(null,cljs.core.hash_map,map__42613):map__42613);
var file_msg = map__42613__$1;
var file = cljs.core.get.call(null,map__42613__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__42614){
var map__42617 = p__42614;
var map__42617__$1 = ((cljs.core.seq_QMARK_.call(null,map__42617))?cljs.core.apply.call(null,cljs.core.hash_map,map__42617):map__42617);
var file = cljs.core.get.call(null,map__42617__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__42617__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__23532__auto__ = eval_body__$1;
if(cljs.core.truth_(and__23532__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__23532__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e42618){var e = e42618;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__42623,p__42624){
var map__42825 = p__42623;
var map__42825__$1 = ((cljs.core.seq_QMARK_.call(null,map__42825))?cljs.core.apply.call(null,cljs.core.hash_map,map__42825):map__42825);
var opts = map__42825__$1;
var load_unchanged_files = cljs.core.get.call(null,map__42825__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__42825__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__42825__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__42826 = p__42624;
var map__42826__$1 = ((cljs.core.seq_QMARK_.call(null,map__42826))?cljs.core.apply.call(null,cljs.core.hash_map,map__42826):map__42826);
var msg = map__42826__$1;
var files = cljs.core.get.call(null,map__42826__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (state_42950){
var state_val_42951 = (state_42950[(1)]);
if((state_val_42951 === (7))){
var inst_42839 = (state_42950[(7)]);
var inst_42838 = (state_42950[(8)]);
var inst_42840 = (state_42950[(9)]);
var inst_42837 = (state_42950[(10)]);
var inst_42845 = cljs.core._nth.call(null,inst_42838,inst_42840);
var inst_42846 = figwheel.client.file_reloading.eval_body.call(null,inst_42845);
var inst_42847 = (inst_42840 + (1));
var tmp42952 = inst_42839;
var tmp42953 = inst_42838;
var tmp42954 = inst_42837;
var inst_42837__$1 = tmp42954;
var inst_42838__$1 = tmp42953;
var inst_42839__$1 = tmp42952;
var inst_42840__$1 = inst_42847;
var state_42950__$1 = (function (){var statearr_42955 = state_42950;
(statearr_42955[(11)] = inst_42846);

(statearr_42955[(7)] = inst_42839__$1);

(statearr_42955[(8)] = inst_42838__$1);

(statearr_42955[(9)] = inst_42840__$1);

(statearr_42955[(10)] = inst_42837__$1);

return statearr_42955;
})();
var statearr_42956_43025 = state_42950__$1;
(statearr_42956_43025[(2)] = null);

(statearr_42956_43025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (20))){
var inst_42883 = (state_42950[(12)]);
var inst_42889 = (state_42950[(13)]);
var inst_42882 = (state_42950[(14)]);
var inst_42886 = (state_42950[(15)]);
var inst_42887 = (state_42950[(16)]);
var inst_42892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42894 = (function (){var files_not_loaded = inst_42889;
var res = inst_42887;
var res_SINGLEQUOTE_ = inst_42886;
var files_SINGLEQUOTE_ = inst_42883;
var all_files = inst_42882;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42889,inst_42882,inst_42886,inst_42887,inst_42892,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (p__42893){
var map__42957 = p__42893;
var map__42957__$1 = ((cljs.core.seq_QMARK_.call(null,map__42957))?cljs.core.apply.call(null,cljs.core.hash_map,map__42957):map__42957);
var file = cljs.core.get.call(null,map__42957__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__42957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42889,inst_42882,inst_42886,inst_42887,inst_42892,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42895 = cljs.core.map.call(null,inst_42894,inst_42887);
var inst_42896 = cljs.core.pr_str.call(null,inst_42895);
var inst_42897 = figwheel.client.utils.log.call(null,inst_42896);
var inst_42898 = (function (){var files_not_loaded = inst_42889;
var res = inst_42887;
var res_SINGLEQUOTE_ = inst_42886;
var files_SINGLEQUOTE_ = inst_42883;
var all_files = inst_42882;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42889,inst_42882,inst_42886,inst_42887,inst_42892,inst_42894,inst_42895,inst_42896,inst_42897,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42889,inst_42882,inst_42886,inst_42887,inst_42892,inst_42894,inst_42895,inst_42896,inst_42897,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42899 = setTimeout(inst_42898,(10));
var state_42950__$1 = (function (){var statearr_42958 = state_42950;
(statearr_42958[(17)] = inst_42892);

(statearr_42958[(18)] = inst_42897);

return statearr_42958;
})();
var statearr_42959_43026 = state_42950__$1;
(statearr_42959_43026[(2)] = inst_42899);

(statearr_42959_43026[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (27))){
var inst_42909 = (state_42950[(19)]);
var state_42950__$1 = state_42950;
var statearr_42960_43027 = state_42950__$1;
(statearr_42960_43027[(2)] = inst_42909);

(statearr_42960_43027[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (1))){
var inst_42829 = (state_42950[(20)]);
var inst_42827 = before_jsload.call(null,files);
var inst_42828 = (function (){return ((function (inst_42829,inst_42827,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (p1__42619_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42619_SHARP_);
});
;})(inst_42829,inst_42827,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42829__$1 = cljs.core.filter.call(null,inst_42828,files);
var inst_42830 = cljs.core.not_empty.call(null,inst_42829__$1);
var state_42950__$1 = (function (){var statearr_42961 = state_42950;
(statearr_42961[(21)] = inst_42827);

(statearr_42961[(20)] = inst_42829__$1);

return statearr_42961;
})();
if(cljs.core.truth_(inst_42830)){
var statearr_42962_43028 = state_42950__$1;
(statearr_42962_43028[(1)] = (2));

} else {
var statearr_42963_43029 = state_42950__$1;
(statearr_42963_43029[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (24))){
var state_42950__$1 = state_42950;
var statearr_42964_43030 = state_42950__$1;
(statearr_42964_43030[(2)] = null);

(statearr_42964_43030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (4))){
var inst_42874 = (state_42950[(2)]);
var inst_42875 = (function (){return ((function (inst_42874,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (p1__42620_SHARP_){
var and__23532__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42620_SHARP_);
if(cljs.core.truth_(and__23532__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42620_SHARP_));
} else {
return and__23532__auto__;
}
});
;})(inst_42874,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42876 = cljs.core.filter.call(null,inst_42875,files);
var state_42950__$1 = (function (){var statearr_42965 = state_42950;
(statearr_42965[(22)] = inst_42874);

(statearr_42965[(23)] = inst_42876);

return statearr_42965;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_42966_43031 = state_42950__$1;
(statearr_42966_43031[(1)] = (16));

} else {
var statearr_42967_43032 = state_42950__$1;
(statearr_42967_43032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (15))){
var inst_42864 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
var statearr_42968_43033 = state_42950__$1;
(statearr_42968_43033[(2)] = inst_42864);

(statearr_42968_43033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (21))){
var state_42950__$1 = state_42950;
var statearr_42969_43034 = state_42950__$1;
(statearr_42969_43034[(2)] = null);

(statearr_42969_43034[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (31))){
var inst_42917 = (state_42950[(24)]);
var inst_42927 = (state_42950[(2)]);
var inst_42928 = cljs.core.not_empty.call(null,inst_42917);
var state_42950__$1 = (function (){var statearr_42970 = state_42950;
(statearr_42970[(25)] = inst_42927);

return statearr_42970;
})();
if(cljs.core.truth_(inst_42928)){
var statearr_42971_43035 = state_42950__$1;
(statearr_42971_43035[(1)] = (32));

} else {
var statearr_42972_43036 = state_42950__$1;
(statearr_42972_43036[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (32))){
var inst_42917 = (state_42950[(24)]);
var inst_42930 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42917);
var inst_42931 = cljs.core.pr_str.call(null,inst_42930);
var inst_42932 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_42931)].join('');
var inst_42933 = figwheel.client.utils.log.call(null,inst_42932);
var state_42950__$1 = state_42950;
var statearr_42973_43037 = state_42950__$1;
(statearr_42973_43037[(2)] = inst_42933);

(statearr_42973_43037[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (33))){
var state_42950__$1 = state_42950;
var statearr_42974_43038 = state_42950__$1;
(statearr_42974_43038[(2)] = null);

(statearr_42974_43038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (13))){
var inst_42850 = (state_42950[(26)]);
var inst_42854 = cljs.core.chunk_first.call(null,inst_42850);
var inst_42855 = cljs.core.chunk_rest.call(null,inst_42850);
var inst_42856 = cljs.core.count.call(null,inst_42854);
var inst_42837 = inst_42855;
var inst_42838 = inst_42854;
var inst_42839 = inst_42856;
var inst_42840 = (0);
var state_42950__$1 = (function (){var statearr_42975 = state_42950;
(statearr_42975[(7)] = inst_42839);

(statearr_42975[(8)] = inst_42838);

(statearr_42975[(9)] = inst_42840);

(statearr_42975[(10)] = inst_42837);

return statearr_42975;
})();
var statearr_42976_43039 = state_42950__$1;
(statearr_42976_43039[(2)] = null);

(statearr_42976_43039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (22))){
var inst_42889 = (state_42950[(13)]);
var inst_42902 = (state_42950[(2)]);
var inst_42903 = cljs.core.not_empty.call(null,inst_42889);
var state_42950__$1 = (function (){var statearr_42977 = state_42950;
(statearr_42977[(27)] = inst_42902);

return statearr_42977;
})();
if(cljs.core.truth_(inst_42903)){
var statearr_42978_43040 = state_42950__$1;
(statearr_42978_43040[(1)] = (23));

} else {
var statearr_42979_43041 = state_42950__$1;
(statearr_42979_43041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (36))){
var state_42950__$1 = state_42950;
var statearr_42980_43042 = state_42950__$1;
(statearr_42980_43042[(2)] = null);

(statearr_42980_43042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (29))){
var inst_42918 = (state_42950[(28)]);
var inst_42921 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42918);
var inst_42922 = cljs.core.pr_str.call(null,inst_42921);
var inst_42923 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42922)].join('');
var inst_42924 = figwheel.client.utils.log.call(null,inst_42923);
var state_42950__$1 = state_42950;
var statearr_42981_43043 = state_42950__$1;
(statearr_42981_43043[(2)] = inst_42924);

(statearr_42981_43043[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (6))){
var inst_42871 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
var statearr_42982_43044 = state_42950__$1;
(statearr_42982_43044[(2)] = inst_42871);

(statearr_42982_43044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (28))){
var inst_42918 = (state_42950[(28)]);
var inst_42915 = (state_42950[(2)]);
var inst_42916 = cljs.core.get.call(null,inst_42915,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42917 = cljs.core.get.call(null,inst_42915,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_42918__$1 = cljs.core.get.call(null,inst_42915,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42919 = cljs.core.not_empty.call(null,inst_42918__$1);
var state_42950__$1 = (function (){var statearr_42983 = state_42950;
(statearr_42983[(29)] = inst_42916);

(statearr_42983[(28)] = inst_42918__$1);

(statearr_42983[(24)] = inst_42917);

return statearr_42983;
})();
if(cljs.core.truth_(inst_42919)){
var statearr_42984_43045 = state_42950__$1;
(statearr_42984_43045[(1)] = (29));

} else {
var statearr_42985_43046 = state_42950__$1;
(statearr_42985_43046[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (25))){
var inst_42948 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42950__$1,inst_42948);
} else {
if((state_val_42951 === (34))){
var inst_42916 = (state_42950[(29)]);
var inst_42936 = (state_42950[(2)]);
var inst_42937 = cljs.core.not_empty.call(null,inst_42916);
var state_42950__$1 = (function (){var statearr_42986 = state_42950;
(statearr_42986[(30)] = inst_42936);

return statearr_42986;
})();
if(cljs.core.truth_(inst_42937)){
var statearr_42987_43047 = state_42950__$1;
(statearr_42987_43047[(1)] = (35));

} else {
var statearr_42988_43048 = state_42950__$1;
(statearr_42988_43048[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (17))){
var inst_42876 = (state_42950[(23)]);
var state_42950__$1 = state_42950;
var statearr_42989_43049 = state_42950__$1;
(statearr_42989_43049[(2)] = inst_42876);

(statearr_42989_43049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (3))){
var state_42950__$1 = state_42950;
var statearr_42990_43050 = state_42950__$1;
(statearr_42990_43050[(2)] = null);

(statearr_42990_43050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (12))){
var inst_42867 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
var statearr_42991_43051 = state_42950__$1;
(statearr_42991_43051[(2)] = inst_42867);

(statearr_42991_43051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (2))){
var inst_42829 = (state_42950[(20)]);
var inst_42836 = cljs.core.seq.call(null,inst_42829);
var inst_42837 = inst_42836;
var inst_42838 = null;
var inst_42839 = (0);
var inst_42840 = (0);
var state_42950__$1 = (function (){var statearr_42992 = state_42950;
(statearr_42992[(7)] = inst_42839);

(statearr_42992[(8)] = inst_42838);

(statearr_42992[(9)] = inst_42840);

(statearr_42992[(10)] = inst_42837);

return statearr_42992;
})();
var statearr_42993_43052 = state_42950__$1;
(statearr_42993_43052[(2)] = null);

(statearr_42993_43052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (23))){
var inst_42883 = (state_42950[(12)]);
var inst_42909 = (state_42950[(19)]);
var inst_42889 = (state_42950[(13)]);
var inst_42882 = (state_42950[(14)]);
var inst_42886 = (state_42950[(15)]);
var inst_42887 = (state_42950[(16)]);
var inst_42905 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42908 = (function (){var files_not_loaded = inst_42889;
var res = inst_42887;
var res_SINGLEQUOTE_ = inst_42886;
var files_SINGLEQUOTE_ = inst_42883;
var all_files = inst_42882;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42909,inst_42889,inst_42882,inst_42886,inst_42887,inst_42905,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (p__42907){
var map__42994 = p__42907;
var map__42994__$1 = ((cljs.core.seq_QMARK_.call(null,map__42994))?cljs.core.apply.call(null,cljs.core.hash_map,map__42994):map__42994);
var meta_data = cljs.core.get.call(null,map__42994__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42909,inst_42889,inst_42882,inst_42886,inst_42887,inst_42905,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42909__$1 = cljs.core.group_by.call(null,inst_42908,inst_42889);
var inst_42910 = cljs.core.seq_QMARK_.call(null,inst_42909__$1);
var state_42950__$1 = (function (){var statearr_42995 = state_42950;
(statearr_42995[(31)] = inst_42905);

(statearr_42995[(19)] = inst_42909__$1);

return statearr_42995;
})();
if(inst_42910){
var statearr_42996_43053 = state_42950__$1;
(statearr_42996_43053[(1)] = (26));

} else {
var statearr_42997_43054 = state_42950__$1;
(statearr_42997_43054[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (35))){
var inst_42916 = (state_42950[(29)]);
var inst_42939 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42916);
var inst_42940 = cljs.core.pr_str.call(null,inst_42939);
var inst_42941 = [cljs.core.str("not required: "),cljs.core.str(inst_42940)].join('');
var inst_42942 = figwheel.client.utils.log.call(null,inst_42941);
var state_42950__$1 = state_42950;
var statearr_42998_43055 = state_42950__$1;
(statearr_42998_43055[(2)] = inst_42942);

(statearr_42998_43055[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (19))){
var inst_42883 = (state_42950[(12)]);
var inst_42882 = (state_42950[(14)]);
var inst_42886 = (state_42950[(15)]);
var inst_42887 = (state_42950[(16)]);
var inst_42886__$1 = (state_42950[(2)]);
var inst_42887__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42886__$1);
var inst_42888 = (function (){var res = inst_42887__$1;
var res_SINGLEQUOTE_ = inst_42886__$1;
var files_SINGLEQUOTE_ = inst_42883;
var all_files = inst_42882;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42882,inst_42886,inst_42887,inst_42886__$1,inst_42887__$1,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (p1__42622_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42622_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_42883,inst_42882,inst_42886,inst_42887,inst_42886__$1,inst_42887__$1,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42889 = cljs.core.filter.call(null,inst_42888,inst_42886__$1);
var inst_42890 = cljs.core.not_empty.call(null,inst_42887__$1);
var state_42950__$1 = (function (){var statearr_42999 = state_42950;
(statearr_42999[(13)] = inst_42889);

(statearr_42999[(15)] = inst_42886__$1);

(statearr_42999[(16)] = inst_42887__$1);

return statearr_42999;
})();
if(cljs.core.truth_(inst_42890)){
var statearr_43000_43056 = state_42950__$1;
(statearr_43000_43056[(1)] = (20));

} else {
var statearr_43001_43057 = state_42950__$1;
(statearr_43001_43057[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (11))){
var state_42950__$1 = state_42950;
var statearr_43002_43058 = state_42950__$1;
(statearr_43002_43058[(2)] = null);

(statearr_43002_43058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (9))){
var inst_42869 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
var statearr_43003_43059 = state_42950__$1;
(statearr_43003_43059[(2)] = inst_42869);

(statearr_43003_43059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (5))){
var inst_42839 = (state_42950[(7)]);
var inst_42840 = (state_42950[(9)]);
var inst_42842 = (inst_42840 < inst_42839);
var inst_42843 = inst_42842;
var state_42950__$1 = state_42950;
if(cljs.core.truth_(inst_42843)){
var statearr_43004_43060 = state_42950__$1;
(statearr_43004_43060[(1)] = (7));

} else {
var statearr_43005_43061 = state_42950__$1;
(statearr_43005_43061[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (14))){
var inst_42850 = (state_42950[(26)]);
var inst_42859 = cljs.core.first.call(null,inst_42850);
var inst_42860 = figwheel.client.file_reloading.eval_body.call(null,inst_42859);
var inst_42861 = cljs.core.next.call(null,inst_42850);
var inst_42837 = inst_42861;
var inst_42838 = null;
var inst_42839 = (0);
var inst_42840 = (0);
var state_42950__$1 = (function (){var statearr_43006 = state_42950;
(statearr_43006[(32)] = inst_42860);

(statearr_43006[(7)] = inst_42839);

(statearr_43006[(8)] = inst_42838);

(statearr_43006[(9)] = inst_42840);

(statearr_43006[(10)] = inst_42837);

return statearr_43006;
})();
var statearr_43007_43062 = state_42950__$1;
(statearr_43007_43062[(2)] = null);

(statearr_43007_43062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (26))){
var inst_42909 = (state_42950[(19)]);
var inst_42912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42909);
var state_42950__$1 = state_42950;
var statearr_43008_43063 = state_42950__$1;
(statearr_43008_43063[(2)] = inst_42912);

(statearr_43008_43063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (16))){
var inst_42876 = (state_42950[(23)]);
var inst_42878 = (function (){var all_files = inst_42876;
return ((function (all_files,inst_42876,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function (p1__42621_SHARP_){
return cljs.core.update_in.call(null,p1__42621_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_42876,state_val_42951,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var inst_42879 = cljs.core.map.call(null,inst_42878,inst_42876);
var state_42950__$1 = state_42950;
var statearr_43009_43064 = state_42950__$1;
(statearr_43009_43064[(2)] = inst_42879);

(statearr_43009_43064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (30))){
var state_42950__$1 = state_42950;
var statearr_43010_43065 = state_42950__$1;
(statearr_43010_43065[(2)] = null);

(statearr_43010_43065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (10))){
var inst_42850 = (state_42950[(26)]);
var inst_42852 = cljs.core.chunked_seq_QMARK_.call(null,inst_42850);
var state_42950__$1 = state_42950;
if(inst_42852){
var statearr_43011_43066 = state_42950__$1;
(statearr_43011_43066[(1)] = (13));

} else {
var statearr_43012_43067 = state_42950__$1;
(statearr_43012_43067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (18))){
var inst_42883 = (state_42950[(12)]);
var inst_42882 = (state_42950[(14)]);
var inst_42882__$1 = (state_42950[(2)]);
var inst_42883__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_42882__$1);
var inst_42884 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42883__$1);
var state_42950__$1 = (function (){var statearr_43013 = state_42950;
(statearr_43013[(12)] = inst_42883__$1);

(statearr_43013[(14)] = inst_42882__$1);

return statearr_43013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42950__$1,(19),inst_42884);
} else {
if((state_val_42951 === (37))){
var inst_42945 = (state_42950[(2)]);
var state_42950__$1 = state_42950;
var statearr_43014_43068 = state_42950__$1;
(statearr_43014_43068[(2)] = inst_42945);

(statearr_43014_43068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42951 === (8))){
var inst_42850 = (state_42950[(26)]);
var inst_42837 = (state_42950[(10)]);
var inst_42850__$1 = cljs.core.seq.call(null,inst_42837);
var state_42950__$1 = (function (){var statearr_43015 = state_42950;
(statearr_43015[(26)] = inst_42850__$1);

return statearr_43015;
})();
if(inst_42850__$1){
var statearr_43016_43069 = state_42950__$1;
(statearr_43016_43069[(1)] = (10));

} else {
var statearr_43017_43070 = state_42950__$1;
(statearr_43017_43070[(1)] = (11));

}

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
}
}
}
});})(c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
;
return ((function (switch__26161__auto__,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_43021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43021[(0)] = state_machine__26162__auto__);

(statearr_43021[(1)] = (1));

return statearr_43021;
});
var state_machine__26162__auto____1 = (function (state_42950){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_42950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e43022){if((e43022 instanceof Object)){
var ex__26165__auto__ = e43022;
var statearr_43023_43071 = state_42950;
(statearr_43023_43071[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43072 = state_42950;
state_42950 = G__43072;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_42950){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_42950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
})();
var state__26219__auto__ = (function (){var statearr_43024 = f__26218__auto__.call(null);
(statearr_43024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_43024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__,map__42825,map__42825__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__42826,map__42826__$1,msg,files))
);

return c__26217__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__43075,link){
var map__43077 = p__43075;
var map__43077__$1 = ((cljs.core.seq_QMARK_.call(null,map__43077))?cljs.core.apply.call(null,cljs.core.hash_map,map__43077):map__43077);
var file = cljs.core.get.call(null,map__43077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__43077,map__43077__$1,file){
return (function (p1__43073_SHARP_,p2__43074_SHARP_){
if(cljs.core._EQ_.call(null,p1__43073_SHARP_,p2__43074_SHARP_)){
return p1__43073_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__43077,map__43077__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43081){
var map__43082 = p__43081;
var map__43082__$1 = ((cljs.core.seq_QMARK_.call(null,map__43082))?cljs.core.apply.call(null,cljs.core.hash_map,map__43082):map__43082);
var current_url_length = cljs.core.get.call(null,map__43082__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__43082__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43078_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43078_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
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

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__43083){
var map__43085 = p__43083;
var map__43085__$1 = ((cljs.core.seq_QMARK_.call(null,map__43085))?cljs.core.apply.call(null,cljs.core.hash_map,map__43085):map__43085);
var f_data = map__43085__$1;
var request_url = cljs.core.get.call(null,map__43085__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__43085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__23544__auto__ = request_url;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__43086,files_msg){
var map__43108 = p__43086;
var map__43108__$1 = ((cljs.core.seq_QMARK_.call(null,map__43108))?cljs.core.apply.call(null,cljs.core.hash_map,map__43108):map__43108);
var opts = map__43108__$1;
var on_cssload = cljs.core.get.call(null,map__43108__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43109_43129 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43110_43130 = null;
var count__43111_43131 = (0);
var i__43112_43132 = (0);
while(true){
if((i__43112_43132 < count__43111_43131)){
var f_43133 = cljs.core._nth.call(null,chunk__43110_43130,i__43112_43132);
figwheel.client.file_reloading.reload_css_file.call(null,f_43133);

var G__43134 = seq__43109_43129;
var G__43135 = chunk__43110_43130;
var G__43136 = count__43111_43131;
var G__43137 = (i__43112_43132 + (1));
seq__43109_43129 = G__43134;
chunk__43110_43130 = G__43135;
count__43111_43131 = G__43136;
i__43112_43132 = G__43137;
continue;
} else {
var temp__4126__auto___43138 = cljs.core.seq.call(null,seq__43109_43129);
if(temp__4126__auto___43138){
var seq__43109_43139__$1 = temp__4126__auto___43138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43109_43139__$1)){
var c__24331__auto___43140 = cljs.core.chunk_first.call(null,seq__43109_43139__$1);
var G__43141 = cljs.core.chunk_rest.call(null,seq__43109_43139__$1);
var G__43142 = c__24331__auto___43140;
var G__43143 = cljs.core.count.call(null,c__24331__auto___43140);
var G__43144 = (0);
seq__43109_43129 = G__43141;
chunk__43110_43130 = G__43142;
count__43111_43131 = G__43143;
i__43112_43132 = G__43144;
continue;
} else {
var f_43145 = cljs.core.first.call(null,seq__43109_43139__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43145);

var G__43146 = cljs.core.next.call(null,seq__43109_43139__$1);
var G__43147 = null;
var G__43148 = (0);
var G__43149 = (0);
seq__43109_43129 = G__43146;
chunk__43110_43130 = G__43147;
count__43111_43131 = G__43148;
i__43112_43132 = G__43149;
continue;
}
} else {
}
}
break;
}

var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__,map__43108,map__43108__$1,opts,on_cssload){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__,map__43108,map__43108__$1,opts,on_cssload){
return (function (state_43119){
var state_val_43120 = (state_43119[(1)]);
if((state_val_43120 === (2))){
var inst_43115 = (state_43119[(2)]);
var inst_43116 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_43117 = on_cssload.call(null,inst_43116);
var state_43119__$1 = (function (){var statearr_43121 = state_43119;
(statearr_43121[(7)] = inst_43115);

return statearr_43121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43119__$1,inst_43117);
} else {
if((state_val_43120 === (1))){
var inst_43113 = cljs.core.async.timeout.call(null,(100));
var state_43119__$1 = state_43119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43119__$1,(2),inst_43113);
} else {
return null;
}
}
});})(c__26217__auto__,map__43108,map__43108__$1,opts,on_cssload))
;
return ((function (switch__26161__auto__,c__26217__auto__,map__43108,map__43108__$1,opts,on_cssload){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_43125 = [null,null,null,null,null,null,null,null];
(statearr_43125[(0)] = state_machine__26162__auto__);

(statearr_43125[(1)] = (1));

return statearr_43125;
});
var state_machine__26162__auto____1 = (function (state_43119){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_43119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e43126){if((e43126 instanceof Object)){
var ex__26165__auto__ = e43126;
var statearr_43127_43150 = state_43119;
(statearr_43127_43150[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43151 = state_43119;
state_43119 = G__43151;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_43119){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_43119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__,map__43108,map__43108__$1,opts,on_cssload))
})();
var state__26219__auto__ = (function (){var statearr_43128 = f__26218__auto__.call(null);
(statearr_43128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_43128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__,map__43108,map__43108__$1,opts,on_cssload))
);

return c__26217__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1425613932656