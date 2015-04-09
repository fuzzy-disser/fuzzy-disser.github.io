// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$40,"className",cljs.core.constant$keyword$53,"htmlFor",cljs.core.constant$keyword$54,"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x));
});
reagent.impl.template.to_js_val = (function to_js_val(v){
if((typeof v === 'string') || (typeof v === 'number')){
return v;
} else {
if((function (){var G__16773 = v;
if(G__16773){
var bit__4487__auto__ = (G__16773.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4487__auto__) || (G__16773.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.name(v);
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.clj__GT_js(v);
} else {
if(cljs.core.ifn_QMARK_(v)){
return (function() { 
var G__16774__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args);
};
var G__16774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16775__i = 0, G__16775__a = new Array(arguments.length -  0);
while (G__16775__i < G__16775__a.length) {G__16775__a[G__16775__i] = arguments[G__16775__i + 0]; ++G__16775__i;}
  args = new cljs.core.IndexedSeq(G__16775__a,0);
} 
return G__16774__delegate.call(this,args);};
G__16774.cljs$lang$maxFixedArity = 0;
G__16774.cljs$lang$applyTo = (function (arglist__16776){
var args = cljs.core.seq(arglist__16776);
return G__16774__delegate(args);
});
G__16774.cljs$core$IFn$_invoke$arity$variadic = G__16774__delegate;
return G__16774;
})()
;
} else {
return v;

}
}
}
}
});
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){
var or__3813__auto__ = (function (){var G__16780 = n;
return (reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1(G__16780) : reagent.impl.template.attr_aliases.call(null,G__16780));
})();
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return reagent.impl.util.dash_to_camel(n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1(reagent.impl.template.undash_prop_name);
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){
if(typeof x === 'string'){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (o,k,v){
var G__16783 = o;
(G__16783[(function (){var G__16784 = k;
return (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(G__16784) : reagent.impl.template.cached_prop_name.call(null,G__16784));
})()] = reagent.impl.template.to_js_val(v));

return G__16783;
}),{},x);
} else {
return reagent.impl.template.to_js_val(x);

}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__16785){
var vec__16787 = p__16785;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(0),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(1),null);
var pid = (props["id"]);
(props["id"] = ((cljs.core.some_QMARK_(pid))?pid:id));

if(cljs.core.some_QMARK_(class$)){
var old = (props["className"]);
return (props["className"] = ((cljs.core.some_QMARK_(old))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join(''):class$));
} else {
return null;
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){
if((cljs.core.empty_QMARK_(props)) && ((id_class == null))){
return null;
} else {
var objprops = cljs.core.reduce_kv((function (o,k,v){
var pname_16790 = (function (){var G__16789 = k;
return (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(G__16789) : reagent.impl.template.cached_prop_name.call(null,G__16789));
})();
(o[pname_16790] = reagent.impl.template.convert_prop_value(v));

return o;
}),{},props);
if(cljs.core.some_QMARK_(id_class)){
reagent.impl.template.set_id_class(objprops,id_class);
} else {
}

return objprops;
}
});
reagent.impl.template.input_unmount = (function input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function input_set_value(this$){
var temp__4130__auto__ = (this$["cljsInputValue"]);
if((temp__4130__auto__ == null)){
return null;
} else {
var value = temp__4130__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){
var res = (function (){var G__16792 = e;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__16792) : on_change.call(null,G__16792));
})();
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later(((function (res){
return (function (){
return reagent.impl.template.input_set_value(this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3801__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__3801__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__3801__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__16795 = jsprops;
(G__16795["defaultValue"] = value);

(G__16795["onChange"] = ((function (G__16795,v,value,on_change){
return (function (p1__16793_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__16793_SHARP_);
});})(G__16795,v,value,on_change))
);

return G__16795;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){
return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$55,"ReagentInput",cljs.core.constant$keyword$56,reagent.impl.template.input_set_value,cljs.core.constant$keyword$57,reagent.impl.template.input_unmount,cljs.core.constant$keyword$58,(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup(this$,jsprops);

var G__16796 = argv;
var G__16797 = comp;
var G__16798 = jsprops;
var G__16799 = first_child;
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(G__16796,G__16797,G__16798,G__16799) : reagent.impl.template.make_element.call(null,G__16796,G__16797,G__16798,G__16799));
})], null);
reagent.impl.template.reagent_input = (function reagent_input(argv,comp,jsprops,first_child){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

var G__16804 = argv;
var G__16805 = comp;
var G__16806 = jsprops;
var G__16807 = first_child;
return (reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4(G__16804,G__16805,G__16806,G__16807) : reagent.impl.template.reagent_input_class.call(null,G__16804,G__16805,G__16806,G__16807));
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){
var vec__16809 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16809,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16809,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16809,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"tag","tag",350170304,null)], 0)))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,(cljs.core.truth_((function (){var or__3813__auto__ = id;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.fn_to_class = (function fn_to_class(f){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.constant$keyword$58,f);
var res = reagent.impl.component.create_class(withrender);
var wrapf = reagent.impl.util.cached_react_class(res);
reagent.impl.util.cache_react_class(f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){
var temp__4128__auto__ = reagent.impl.util.cached_react_class(tag);
if((temp__4128__auto__ == null)){
return reagent.impl.template.fn_to_class(tag);
} else {
var cached_class = temp__4128__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function get_key(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$59);
} else {
return null;
}
});
reagent.impl.template.reag_element = (function reag_element(tag,v){
var c = reagent.impl.template.as_class(tag);
var jsprops = {"argv": v};
var key_16814 = (function (){var temp__4128__auto__ = (function (){var G__16812 = cljs.core.meta(v);
var G__16812__$1 = (((G__16812 == null))?null:reagent.impl.template.get_key(G__16812));
return G__16812__$1;
})();
if((temp__4128__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__4128__auto__;
return k;
}
})();
var G__16813_16815 = key_16814;
var G__16813_16816__$1 = (((G__16813_16815 == null))?null:(jsprops["key"] = G__16813_16815));

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.cached_parse = reagent.impl.util.memoize_1(reagent.impl.template.parse_tag);
reagent.impl.template.native_element = (function native_element(tag,argv){
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
var vec__16826 = (function (){var G__16827 = tag;
return (reagent.impl.template.cached_parse.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_parse.cljs$core$IFn$_invoke$arity$1(G__16827) : reagent.impl.template.cached_parse.call(null,G__16827));
})();
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(0),null);
var id_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(1),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_(props));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),id_class);
var first_child = ((hasprops)?(2):(1));
if(reagent.impl.template.input_component_QMARK_(comp)){
var G__16828 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__16828) : reagent.impl.template.as_element.call(null,G__16828));
} else {
var p = (function (){var temp__4128__auto__ = (function (){var G__16829 = cljs.core.meta(argv);
var G__16829__$1 = (((G__16829 == null))?null:reagent.impl.template.get_key(G__16829));
return G__16829__$1;
})();
if((temp__4128__auto__ == null)){
return jsprops;
} else {
var key = temp__4128__auto__;
var G__16830 = (((jsprops == null))?{}:jsprops);
(G__16830["key"] = key);

return G__16830;
}
})();
var G__16831 = argv;
var G__16832 = comp;
var G__16833 = p;
var G__16834 = first_child;
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(G__16831,G__16832,G__16833,G__16834) : reagent.impl.template.make_element.call(null,G__16831,G__16832,G__16833,G__16834));
}
} else {
return null;
}
});
reagent.impl.template.vec_to_elem = (function vec_to_elem(v){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Hiccup form should not be empty"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))], 0)))].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),new cljs.core.Symbol(null,"tag","tag",350170304,null))], 0)))].join('')));
}

var temp__4128__auto__ = reagent.impl.template.native_element(tag,v);
if((temp__4128__auto__ == null)){
return reagent.impl.template.reag_element(tag,v);
} else {
var ne = temp__4128__auto__;
return ne;
}
});
reagent.impl.template.seq_ctx = {};
reagent.impl.template.warn_on_deref = (function warn_on_deref(x){
if(cljs.core.truth_((reagent.impl.template.seq_ctx["warned"]))){
return null;
} else {
if(typeof console !== 'undefined'){
console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)));
} else {
}

return (reagent.impl.template.seq_ctx["warned"] = true);
}
});
reagent.impl.template.as_element = (function as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
var G__16838 = x;
return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1(G__16838) : reagent.impl.template.expand_seq.call(null,G__16838));
} else {
var s = reagent.ratom.capture_derefed((function (){
var G__16839 = x;
return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1(G__16839) : reagent.impl.template.expand_seq.call(null,G__16839));
}),reagent.impl.template.seq_ctx);
if(cljs.core.truth_(reagent.ratom.captured(reagent.impl.template.seq_ctx))){
reagent.impl.template.warn_on_deref(x);
} else {
}

return s;
}

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4700__auto___16841 = a.length;
var i_16842 = (0);
while(true){
if((i_16842 < n__4700__auto___16841)){
(a[i_16842] = reagent.impl.template.as_element((a[i_16842])));

var G__16843 = (i_16842 + (1));
i_16842 = G__16843;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.make_element = (function make_element(argv,comp,jsprops,first_child){
if((cljs.core.count(argv) === (first_child + (1)))){
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child)));
} else {
return (React["createElement"]).apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
}),[comp,jsprops],argv));
}
});
