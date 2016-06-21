// Compiled by ClojureScript 1.9.76 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6215__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6215__auto__)){
return or__6215__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_7982 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_7982){
return (function (){
var _STAR_always_update_STAR_7983 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7983;
}});})(_STAR_always_update_STAR_7982))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_7982;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args7984 = [];
var len__7290__auto___7987 = arguments.length;
var i__7291__auto___7988 = (0);
while(true){
if((i__7291__auto___7988 < len__7290__auto___7987)){
args7984.push((arguments[i__7291__auto___7988]));

var G__7989 = (i__7291__auto___7988 + (1));
i__7291__auto___7988 = G__7989;
continue;
} else {
}
break;
}

var G__7986 = args7984.length;
switch (G__7986) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7984.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__7995_7999 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__7996_8000 = null;
var count__7997_8001 = (0);
var i__7998_8002 = (0);
while(true){
if((i__7998_8002 < count__7997_8001)){
var v_8003 = cljs.core._nth.call(null,chunk__7996_8000,i__7998_8002);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8003);

var G__8004 = seq__7995_7999;
var G__8005 = chunk__7996_8000;
var G__8006 = count__7997_8001;
var G__8007 = (i__7998_8002 + (1));
seq__7995_7999 = G__8004;
chunk__7996_8000 = G__8005;
count__7997_8001 = G__8006;
i__7998_8002 = G__8007;
continue;
} else {
var temp__4425__auto___8008 = cljs.core.seq.call(null,seq__7995_7999);
if(temp__4425__auto___8008){
var seq__7995_8009__$1 = temp__4425__auto___8008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7995_8009__$1)){
var c__7026__auto___8010 = cljs.core.chunk_first.call(null,seq__7995_8009__$1);
var G__8011 = cljs.core.chunk_rest.call(null,seq__7995_8009__$1);
var G__8012 = c__7026__auto___8010;
var G__8013 = cljs.core.count.call(null,c__7026__auto___8010);
var G__8014 = (0);
seq__7995_7999 = G__8011;
chunk__7996_8000 = G__8012;
count__7997_8001 = G__8013;
i__7998_8002 = G__8014;
continue;
} else {
var v_8015 = cljs.core.first.call(null,seq__7995_8009__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8015);

var G__8016 = cljs.core.next.call(null,seq__7995_8009__$1);
var G__8017 = null;
var G__8018 = (0);
var G__8019 = (0);
seq__7995_7999 = G__8016;
chunk__7996_8000 = G__8017;
count__7997_8001 = G__8018;
i__7998_8002 = G__8019;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1466484252083