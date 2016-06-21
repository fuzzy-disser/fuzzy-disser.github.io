// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('reagent.impl.util')) {
goog.provide('reagent.impl.util');
}
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
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
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__25167 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__25167,(0),null);
var parts = cljs.core.nthnext.call(null,vec__25167,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
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
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__25169__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__17991__auto___25170 = self__.p;
if(cljs.core.truth_(or__17991__auto___25170)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__25169 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__25169__delegate.call(this,self__,a);};
G__25169.cljs$lang$maxFixedArity = 1;
G__25169.cljs$lang$applyTo = (function (arglist__25171){
var self__ = cljs.core.first(arglist__25171);
var a = cljs.core.rest(arglist__25171);
return G__25169__delegate(self__,a);
});
G__25169.cljs$core$IFn$_invoke$arity$variadic = G__25169__delegate;
return G__25169;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args25168){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25168)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__25172__delegate = function (a){
var _ = this;
var or__17991__auto___25173 = self__.p;
if(cljs.core.truth_(or__17991__auto___25173)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__25172 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__25172__delegate.call(this,a);};
G__25172.cljs$lang$maxFixedArity = 0;
G__25172.cljs$lang$applyTo = (function (arglist__25174){
var a = cljs.core.seq(arglist__25174);
return G__25172__delegate(a);
});
G__25172.cljs$core$IFn$_invoke$arity$variadic = G__25172__delegate;
return G__25172;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
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
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
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
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e25176){if((e25176 instanceof Object)){
var e = e25176;
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
throw e25176;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_25181 = reagent.impl.util._STAR_always_update_STAR_;
try{reagent.impl.util._STAR_always_update_STAR_ = true;

return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_25181){
return (function (){
var _STAR_always_update_STAR_25182 = reagent.impl.util._STAR_always_update_STAR_;
try{reagent.impl.util._STAR_always_update_STAR_ = false;

cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25182;
}});})(_STAR_always_update_STAR_25181))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_25181;
}}catch (e25180){if((e25180 instanceof Object)){
var e = e25180;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e25180;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__25187_25191 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__25188_25192 = null;
var count__25189_25193 = (0);
var i__25190_25194 = (0);
while(true){
if((i__25190_25194 < count__25189_25193)){
var v_25195 = cljs.core._nth.call(null,chunk__25188_25192,i__25190_25194);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_25195);

var G__25196 = seq__25187_25191;
var G__25197 = chunk__25188_25192;
var G__25198 = count__25189_25193;
var G__25199 = (i__25190_25194 + (1));
seq__25187_25191 = G__25196;
chunk__25188_25192 = G__25197;
count__25189_25193 = G__25198;
i__25190_25194 = G__25199;
continue;
} else {
var temp__4126__auto___25200 = cljs.core.seq.call(null,seq__25187_25191);
if(temp__4126__auto___25200){
var seq__25187_25201__$1 = temp__4126__auto___25200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25187_25201__$1)){
var c__18778__auto___25202 = cljs.core.chunk_first.call(null,seq__25187_25201__$1);
var G__25203 = cljs.core.chunk_rest.call(null,seq__25187_25201__$1);
var G__25204 = c__18778__auto___25202;
var G__25205 = cljs.core.count.call(null,c__18778__auto___25202);
var G__25206 = (0);
seq__25187_25191 = G__25203;
chunk__25188_25192 = G__25204;
count__25189_25193 = G__25205;
i__25190_25194 = G__25206;
continue;
} else {
var v_25207 = cljs.core.first.call(null,seq__25187_25201__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_25207);

var G__25208 = cljs.core.next.call(null,seq__25187_25201__$1);
var G__25209 = null;
var G__25210 = (0);
var G__25211 = (0);
seq__25187_25191 = G__25208;
chunk__25188_25192 = G__25209;
count__25189_25193 = G__25210;
i__25190_25194 = G__25211;
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
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.impl.util.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.impl.util.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.impl.util.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.impl.util.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
self__.changed = true;

self__.state = newval;

self__.callback.call(null,newval);

return self__.state;
});

reagent.impl.util.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.state;
});

reagent.impl.util.Wrapper.cljs$lang$type = true;

reagent.impl.util.Wrapper.cljs$lang$ctorStr = "reagent.impl.util/Wrapper";

reagent.impl.util.Wrapper.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"reagent.impl.util/Wrapper");
});

reagent.impl.util.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed){
return (new reagent.impl.util.Wrapper(state,callback,changed));
});

reagent.impl.util.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.impl.util.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false));
});

//# sourceMappingURL=util.js.map?rel=1422975357013