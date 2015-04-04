// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.impl.util');
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
var vec__31658 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__31658,(0),null);
var parts = cljs.core.nthnext.call(null,vec__31658,(1));
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
var G__31660__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__23544__auto___31661 = self__.p;
if(cljs.core.truth_(or__23544__auto___31661)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__31660 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__31662__i = 0, G__31662__a = new Array(arguments.length -  1);
while (G__31662__i < G__31662__a.length) {G__31662__a[G__31662__i] = arguments[G__31662__i + 1]; ++G__31662__i;}
  a = new cljs.core.IndexedSeq(G__31662__a,0);
} 
return G__31660__delegate.call(this,self__,a);};
G__31660.cljs$lang$maxFixedArity = 1;
G__31660.cljs$lang$applyTo = (function (arglist__31663){
var self__ = cljs.core.first(arglist__31663);
var a = cljs.core.rest(arglist__31663);
return G__31660__delegate(self__,a);
});
G__31660.cljs$core$IFn$_invoke$arity$variadic = G__31660__delegate;
return G__31660;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args31659){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31659)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__31664__delegate = function (a){
var _ = this;
var or__23544__auto___31665 = self__.p;
if(cljs.core.truth_(or__23544__auto___31665)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__31664 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__31666__i = 0, G__31666__a = new Array(arguments.length -  0);
while (G__31666__i < G__31666__a.length) {G__31666__a[G__31666__i] = arguments[G__31666__i + 0]; ++G__31666__i;}
  a = new cljs.core.IndexedSeq(G__31666__a,0);
} 
return G__31664__delegate.call(this,a);};
G__31664.cljs$lang$maxFixedArity = 0;
G__31664.cljs$lang$applyTo = (function (arglist__31667){
var a = cljs.core.seq(arglist__31667);
return G__31664__delegate(a);
});
G__31664.cljs$core$IFn$_invoke$arity$variadic = G__31664__delegate;
return G__31664;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"reagent.impl.util/partial-ifn");
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
}catch (e31669){if((e31669 instanceof Object)){
var e = e31669;
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
throw e31669;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_31674 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_31674){
return (function (){
var _STAR_always_update_STAR_31675 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_31675;
}});})(_STAR_always_update_STAR_31674))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_31674;
}}catch (e31673){if((e31673 instanceof Object)){
var e = e31673;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e31673;

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
var seq__31680_31684 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__31681_31685 = null;
var count__31682_31686 = (0);
var i__31683_31687 = (0);
while(true){
if((i__31683_31687 < count__31682_31686)){
var v_31688 = cljs.core._nth.call(null,chunk__31681_31685,i__31683_31687);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_31688);

var G__31689 = seq__31680_31684;
var G__31690 = chunk__31681_31685;
var G__31691 = count__31682_31686;
var G__31692 = (i__31683_31687 + (1));
seq__31680_31684 = G__31689;
chunk__31681_31685 = G__31690;
count__31682_31686 = G__31691;
i__31683_31687 = G__31692;
continue;
} else {
var temp__4126__auto___31693 = cljs.core.seq.call(null,seq__31680_31684);
if(temp__4126__auto___31693){
var seq__31680_31694__$1 = temp__4126__auto___31693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31680_31694__$1)){
var c__24331__auto___31695 = cljs.core.chunk_first.call(null,seq__31680_31694__$1);
var G__31696 = cljs.core.chunk_rest.call(null,seq__31680_31694__$1);
var G__31697 = c__24331__auto___31695;
var G__31698 = cljs.core.count.call(null,c__24331__auto___31695);
var G__31699 = (0);
seq__31680_31684 = G__31696;
chunk__31681_31685 = G__31697;
count__31682_31686 = G__31698;
i__31683_31687 = G__31699;
continue;
} else {
var v_31700 = cljs.core.first.call(null,seq__31680_31694__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_31700);

var G__31701 = cljs.core.next.call(null,seq__31680_31694__$1);
var G__31702 = null;
var G__31703 = (0);
var G__31704 = (0);
seq__31680_31684 = G__31701;
chunk__31681_31685 = G__31702;
count__31682_31686 = G__31703;
i__31683_31687 = G__31704;
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

reagent.impl.util.Wrapper.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"reagent.impl.util/Wrapper");
});

reagent.impl.util.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed){
return (new reagent.impl.util.Wrapper(state,callback,changed));
});

reagent.impl.util.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.impl.util.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false));
});

//# sourceMappingURL=util.js.map?rel=1425613907319