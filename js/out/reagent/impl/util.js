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
var mem = (function (){var G__17023 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17023) : cljs.core.atom.call(null,G__17023));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17024 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17024) : cljs.core.deref.call(null,G__17024));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__17025 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17025) : f.call(null,G__17025));
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
var vec__17028 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17028,(0),null);
var parts = cljs.core.nthnext(vec__17028,(1));
if(cljs.core.truth_((function (){var G__17029 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__17029) : reagent.impl.util.dont_camel_case.call(null,G__17029));
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
var G__17031__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3813__auto___17032 = self__.p;
if(cljs.core.truth_(or__3813__auto___17032)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17031 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__17033__i = 0, G__17033__a = new Array(arguments.length -  1);
while (G__17033__i < G__17033__a.length) {G__17033__a[G__17033__i] = arguments[G__17033__i + 1]; ++G__17033__i;}
  a = new cljs.core.IndexedSeq(G__17033__a,0);
} 
return G__17031__delegate.call(this,self__,a);};
G__17031.cljs$lang$maxFixedArity = 1;
G__17031.cljs$lang$applyTo = (function (arglist__17034){
var self__ = cljs.core.first(arglist__17034);
var a = cljs.core.rest(arglist__17034);
return G__17031__delegate(self__,a);
});
G__17031.cljs$core$IFn$_invoke$arity$variadic = G__17031__delegate;
return G__17031;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args17030){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17030)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17035__delegate = function (a){
var _ = this;
var or__3813__auto___17036 = self__.p;
if(cljs.core.truth_(or__3813__auto___17036)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17035 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__17037__i = 0, G__17037__a = new Array(arguments.length -  0);
while (G__17037__i < G__17037__a.length) {G__17037__a[G__17037__i] = arguments[G__17037__i + 0]; ++G__17037__i;}
  a = new cljs.core.IndexedSeq(G__17037__a,0);
} 
return G__17035__delegate.call(this,a);};
G__17035.cljs$lang$maxFixedArity = 0;
G__17035.cljs$lang$applyTo = (function (arglist__17038){
var a = cljs.core.seq(arglist__17038);
return G__17035__delegate(a);
});
G__17035.cljs$core$IFn$_invoke$arity$variadic = G__17035__delegate;
return G__17035;
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
var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(p2);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$40,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(p2);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$41,style);
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
reagent.impl.util.roots = (function (){var G__17039 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17039) : cljs.core.atom.call(null,G__17039));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e17041){if((e17041 instanceof Object)){
var e = e17041;
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
throw e17041;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_17046 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_17046){
return (function (){
var _STAR_always_update_STAR_17047 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17047;
}});})(_STAR_always_update_STAR_17046))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17046;
}}catch (e17045){if((e17045 instanceof Object)){
var e = e17045;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e17045;

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
var seq__17053_17058 = cljs.core.seq(cljs.core.vals((function (){var G__17057 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17057) : cljs.core.deref.call(null,G__17057));
})()));
var chunk__17054_17059 = null;
var count__17055_17060 = (0);
var i__17056_17061 = (0);
while(true){
if((i__17056_17061 < count__17055_17060)){
var v_17062 = chunk__17054_17059.cljs$core$IIndexed$_nth$arity$2(null,i__17056_17061);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17062);

var G__17063 = seq__17053_17058;
var G__17064 = chunk__17054_17059;
var G__17065 = count__17055_17060;
var G__17066 = (i__17056_17061 + (1));
seq__17053_17058 = G__17063;
chunk__17054_17059 = G__17064;
count__17055_17060 = G__17065;
i__17056_17061 = G__17066;
continue;
} else {
var temp__4126__auto___17067 = cljs.core.seq(seq__17053_17058);
if(temp__4126__auto___17067){
var seq__17053_17068__$1 = temp__4126__auto___17067;
if(cljs.core.chunked_seq_QMARK_(seq__17053_17068__$1)){
var c__4600__auto___17069 = cljs.core.chunk_first(seq__17053_17068__$1);
var G__17070 = cljs.core.chunk_rest(seq__17053_17068__$1);
var G__17071 = c__4600__auto___17069;
var G__17072 = cljs.core.count(c__4600__auto___17069);
var G__17073 = (0);
seq__17053_17058 = G__17070;
chunk__17054_17059 = G__17071;
count__17055_17060 = G__17072;
i__17056_17061 = G__17073;
continue;
} else {
var v_17074 = cljs.core.first(seq__17053_17068__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17074);

var G__17075 = cljs.core.next(seq__17053_17068__$1);
var G__17076 = null;
var G__17077 = (0);
var G__17078 = (0);
seq__17053_17058 = G__17075;
chunk__17054_17059 = G__17076;
count__17055_17060 = G__17077;
i__17056_17061 = G__17078;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__17079 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17079) : f.call(null,G__17079));
})());
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17080 = self__.state;
var G__17081 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17080,G__17081) : f.call(null,G__17080,G__17081));
})());
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17082 = self__.state;
var G__17083 = x;
var G__17084 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17082,G__17083,G__17084) : f.call(null,G__17082,G__17083,G__17084));
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

var G__17085_17086 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__17085_17086) : self__.callback.call(null,G__17085_17086));

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
