// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = (function (){var G__16968 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16968) : cljs.core.atom.call(null,G__16968));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__16969 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16969) : cljs.core.deref.call(null,G__16969));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__16970 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16970) : f.call(null,G__16970));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__16973 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16973,(0),null);
var parts = cljs.core.nthnext(vec__16973,(1));
if(cljs.core.truth_((function (){var G__16974 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__16974) : reagent.impl.util.dont_camel_case.call(null,G__16974));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__16976__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3813__auto___16977 = self__.p;
if(cljs.core.truth_(or__3813__auto___16977)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__16976 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__16978__i = 0, G__16978__a = new Array(arguments.length -  1);
while (G__16978__i < G__16978__a.length) {G__16978__a[G__16978__i] = arguments[G__16978__i + 1]; ++G__16978__i;}
  a = new cljs.core.IndexedSeq(G__16978__a,0);
} 
return G__16976__delegate.call(this,self__,a);};
G__16976.cljs$lang$maxFixedArity = 1;
G__16976.cljs$lang$applyTo = (function (arglist__16979){
var self__ = cljs.core.first(arglist__16979);
var a = cljs.core.rest(arglist__16979);
return G__16976__delegate(self__,a);
});
G__16976.cljs$core$IFn$_invoke$arity$variadic = G__16976__delegate;
return G__16976;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args16975){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16975)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__16980__delegate = function (a){
var _ = this;
var or__3813__auto___16981 = self__.p;
if(cljs.core.truth_(or__3813__auto___16981)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__16980 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__16982__i = 0, G__16982__a = new Array(arguments.length -  0);
while (G__16982__i < G__16982__a.length) {G__16982__a[G__16982__i] = arguments[G__16982__i + 0]; ++G__16982__i;}
  a = new cljs.core.IndexedSeq(G__16982__a,0);
} 
return G__16980__delegate.call(this,a);};
G__16980.cljs$lang$maxFixedArity = 0;
G__16980.cljs$lang$applyTo = (function (arglist__16983){
var a = cljs.core.seq(arglist__16983);
return G__16980__delegate(a);
});
G__16980.cljs$core$IFn$_invoke$arity$variadic = G__16980__delegate;
return G__16980;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4400__auto__,writer__4401__auto__,opt__4402__auto__){
return cljs.core._write(writer__4401__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$32,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$33,style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))], 0)))].join('')));
}

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__16984 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16984) : cljs.core.atom.call(null,G__16984));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e16986){if((e16986 instanceof Object)){
var e = e16986;
if(typeof console !== 'undefined'){
console.log("Error unmounting:");
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e16986;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_16991 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_16991){
return (function (){
var _STAR_always_update_STAR_16992 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_16992;
}});})(_STAR_always_update_STAR_16991))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_16991;
}}catch (e16990){if((e16990 instanceof Object)){
var e = e16990;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e16990;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__16998_17003 = cljs.core.seq(cljs.core.vals((function (){var G__17002 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17002) : cljs.core.deref.call(null,G__17002));
})()));
var chunk__16999_17004 = null;
var count__17000_17005 = (0);
var i__17001_17006 = (0);
while(true){
if((i__17001_17006 < count__17000_17005)){
var v_17007 = chunk__16999_17004.cljs$core$IIndexed$_nth$arity$2(null,i__17001_17006);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17007);

var G__17008 = seq__16998_17003;
var G__17009 = chunk__16999_17004;
var G__17010 = count__17000_17005;
var G__17011 = (i__17001_17006 + (1));
seq__16998_17003 = G__17008;
chunk__16999_17004 = G__17009;
count__17000_17005 = G__17010;
i__17001_17006 = G__17011;
continue;
} else {
var temp__4126__auto___17012 = cljs.core.seq(seq__16998_17003);
if(temp__4126__auto___17012){
var seq__16998_17013__$1 = temp__4126__auto___17012;
if(cljs.core.chunked_seq_QMARK_(seq__16998_17013__$1)){
var c__4600__auto___17014 = cljs.core.chunk_first(seq__16998_17013__$1);
var G__17015 = cljs.core.chunk_rest(seq__16998_17013__$1);
var G__17016 = c__4600__auto___17014;
var G__17017 = cljs.core.count(c__4600__auto___17014);
var G__17018 = (0);
seq__16998_17003 = G__17015;
chunk__16999_17004 = G__17016;
count__17000_17005 = G__17017;
i__17001_17006 = G__17018;
continue;
} else {
var v_17019 = cljs.core.first(seq__16998_17013__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17019);

var G__17020 = cljs.core.next(seq__16998_17013__$1);
var G__17021 = null;
var G__17022 = (0);
var G__17023 = (0);
seq__16998_17003 = G__17020;
chunk__16999_17004 = G__17021;
count__17000_17005 = G__17022;
i__17001_17006 = G__17023;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

/**
* @constructor
*/
reagent.impl.util.Wrapper = (function (state,callback,changed){
this.state = state;
this.callback = callback;
this.changed = changed;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114688;
})
reagent.impl.util.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.impl.util.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.impl.util.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17024 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17024) : f.call(null,G__17024));
})());
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17025 = self__.state;
var G__17026 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17025,G__17026) : f.call(null,G__17025,G__17026));
})());
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17027 = self__.state;
var G__17028 = x;
var G__17029 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17027,G__17028,G__17029) : f.call(null,G__17027,G__17028,G__17029));
})());
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.impl.util.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
self__.changed = true;

self__.state = newval;

var G__17030_17031 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__17030_17031) : self__.callback.call(null,G__17030_17031));

return self__.state;
});

reagent.impl.util.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.state;
});

reagent.impl.util.Wrapper.cljs$lang$type = true;

reagent.impl.util.Wrapper.cljs$lang$ctorStr = "reagent.impl.util/Wrapper";

reagent.impl.util.Wrapper.cljs$lang$ctorPrWriter = (function (this__4400__auto__,writer__4401__auto__,opt__4402__auto__){
return cljs.core._write(writer__4401__auto__,"reagent.impl.util/Wrapper");
});

reagent.impl.util.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed){
return (new reagent.impl.util.Wrapper(state,callback,changed));
});

reagent.impl.util.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.impl.util.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false));
});
