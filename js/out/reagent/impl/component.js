// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){
var G__16637 = reagent.impl.component.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16637) : cljs.core.deref.call(null,G__16637));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){
var G__16640 = reagent.impl.component.state_atom(this$);
var G__16641 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16640,G__16641) : cljs.core.reset_BANG_.call(null,G__16640,G__16641));
});
reagent.impl.component.set_state = (function set_state(this$,new_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.as_element = (function as_element(x){
var G__16643 = x;
return reagent.impl.template.as_element(G__16643);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_16658 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["componentFunction"]) == null))?(function (){var G__16659 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16659) : f.call(null,G__16659));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__16660 = n;
switch (G__16660) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__16661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16661) : f.call(null,G__16661));

break;
case (3):
var G__16662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16662,G__16663) : f.call(null,G__16662,G__16663));

break;
case (4):
var G__16664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16664,G__16665,G__16666) : f.call(null,G__16664,G__16665,G__16666));

break;
case (5):
var G__16667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__16670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16667,G__16668,G__16669,G__16670) : f.call(null,G__16667,G__16668,G__16669,G__16670));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_16658;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$46,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__16685 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16685) {
case "componentWillUnmount":
return ((function (G__16685){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__16686 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16686) : f.call(null,G__16686));
}
});
;})(G__16685))

break;
case "componentWillMount":
return ((function (G__16685){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__16687 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16687) : f.call(null,G__16687));
}
});
;})(G__16685))

break;
case "componentDidUpdate":
return ((function (G__16685){
return (function (oldprops){
var c = this;
var G__16688 = c;
var G__16689 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16688,G__16689) : f.call(null,G__16688,G__16689));
});
;})(G__16685))

break;
case "componentWillUpdate":
return ((function (G__16685){
return (function (nextprops){
var c = this;
var G__16690 = c;
var G__16691 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16690,G__16691) : f.call(null,G__16690,G__16691));
});
;})(G__16685))

break;
case "shouldComponentUpdate":
return ((function (G__16685){
return (function (nextprops,nextstate){
var or__3813__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__16692 = c;
var G__16693 = old_argv;
var G__16694 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16692,G__16693,G__16694) : f.call(null,G__16692,G__16693,G__16694));
}
}
});
;})(G__16685))

break;
case "componentWillReceiveProps":
return ((function (G__16685){
return (function (props){
var c = this;
var G__16695 = c;
var G__16696 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16695,G__16696) : f.call(null,G__16695,G__16696));
});
;})(G__16685))

break;
case "getInitialState":
return ((function (G__16685){
return (function (){
var c = this;
return reagent.impl.component.set_state(c,(function (){var G__16697 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16697) : f.call(null,G__16697));
})());
});
;})(G__16685))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__16699__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__16699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16700__i = 0, G__16700__a = new Array(arguments.length -  0);
while (G__16700__i < G__16700__a.length) {G__16700__a[G__16700__i] = arguments[G__16700__i + 0]; ++G__16700__i;}
  args = new cljs.core.IndexedSeq(G__16700__a,0);
} 
return G__16699__delegate.call(this,args);};
G__16699.cljs$lang$maxFixedArity = 0;
G__16699.cljs$lang$applyTo = (function (arglist__16701){
var args = cljs.core.seq(arglist__16701);
return G__16699__delegate(args);
});
G__16699.cljs$core$IFn$_invoke$arity$variadic = G__16699__delegate;
return G__16699;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$48,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.ifn_QMARK_(f)){
var G__16703 = f;
(G__16703["__reactDontBind"] = true);

return G__16703;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__16705 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__16705) : reagent.impl.component.dont_wrap.call(null,G__16705));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3801__auto__ = wrap;
if(cljs.core.truth_(and__3801__auto__)){
return f;
} else {
return and__3801__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__3813__auto__ = wrap;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__16707 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__16707) : reagent.impl.component.dash_to_camel.call(null,G__16707));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$47,render_f,cljs.core.array_seq([cljs.core.constant$keyword$46,cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){
var render_fun = (function (){var or__3813__auto__ = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__3813__auto__ = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
var or__3813__auto____$1 = (render_fun["displayName"]);
if(cljs.core.truth_(or__3813__auto____$1)){
return or__3813__auto____$1;
} else {
var or__3813__auto____$2 = (render_fun["name"]);
if(cljs.core.truth_(or__3813__auto____$2)){
return or__3813__auto____$2;
} else {
return "";
}
}
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$52,name_SINGLEQUOTE_),render_fun);
return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__16709 = o;
(G__16709[cljs.core.name(k)] = v);

return G__16709;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__16710__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__16710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16711__i = 0, G__16711__a = new Array(arguments.length -  0);
while (G__16711__i < G__16711__a.length) {G__16711__a[G__16711__i] = arguments[G__16711__i + 0]; ++G__16711__i;}
  args = new cljs.core.IndexedSeq(G__16711__a,0);
} 
return G__16710__delegate.call(this,args);};
G__16710.cljs$lang$maxFixedArity = 0;
G__16710.cljs$lang$applyTo = (function (arglist__16712){
var args = cljs.core.seq(arglist__16712);
return G__16710__delegate(args);
});
G__16710.cljs$core$IFn$_invoke$arity$variadic = G__16710__delegate;
return G__16710;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
