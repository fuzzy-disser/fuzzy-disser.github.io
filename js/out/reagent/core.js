// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
* Create a native React element, by calling React.createElement directly.
* 
* That means the second argument must be a javascript object (or nil), and
* that any Reagent hiccup forms must be processed with as-element. For example
* like this:
* 
* (r/create-element "div" #js{:className "foo"}
* "Hi " (r/as-element [:strong "world!"])
* 
* which is equivalent to
* 
* [:div.foo "Hi" [:strong "world!"]]
* @param {...*} var_args
*/
reagent.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (type){
return create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});
var create_element__2 = (function (type,props){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))], 0)))].join('')));
}

var G__16538 = type;
var G__16539 = props;
return React.createElement(G__16538,G__16539);
});
var create_element__3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))], 0)))].join('')));
}

var G__16540 = type;
var G__16541 = props;
var G__16542 = child;
return React.createElement(G__16540,G__16541,G__16542);
});
var create_element__4 = (function() { 
var G__16543__delegate = function (type,props,child,children){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"props","props",2093813254,null)))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(React.createElement,type,props,child,children);
};
var G__16543 = function (type,props,child,var_args){
var children = null;
if (arguments.length > 3) {
var G__16544__i = 0, G__16544__a = new Array(arguments.length -  3);
while (G__16544__i < G__16544__a.length) {G__16544__a[G__16544__i] = arguments[G__16544__i + 3]; ++G__16544__i;}
  children = new cljs.core.IndexedSeq(G__16544__a,0);
} 
return G__16543__delegate.call(this,type,props,child,children);};
G__16543.cljs$lang$maxFixedArity = 3;
G__16543.cljs$lang$applyTo = (function (arglist__16545){
var type = cljs.core.first(arglist__16545);
arglist__16545 = cljs.core.next(arglist__16545);
var props = cljs.core.first(arglist__16545);
arglist__16545 = cljs.core.next(arglist__16545);
var child = cljs.core.first(arglist__16545);
var children = cljs.core.rest(arglist__16545);
return G__16543__delegate(type,props,child,children);
});
G__16543.cljs$core$IFn$_invoke$arity$variadic = G__16543__delegate;
return G__16543;
})()
;
create_element = function(type,props,child,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return create_element__1.call(this,type);
case 2:
return create_element__2.call(this,type,props);
case 3:
return create_element__3.call(this,type,props,child);
default:
var G__16546 = null;
if (arguments.length > 3) {
var G__16547__i = 0, G__16547__a = new Array(arguments.length -  3);
while (G__16547__i < G__16547__a.length) {G__16547__a[G__16547__i] = arguments[G__16547__i + 3]; ++G__16547__i;}
G__16546 = new cljs.core.IndexedSeq(G__16547__a,0);
}
return create_element__4.cljs$core$IFn$_invoke$arity$variadic(type,props,child, G__16546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$lang$maxFixedArity = 3;
create_element.cljs$lang$applyTo = create_element__4.cljs$lang$applyTo;
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
create_element.cljs$core$IFn$_invoke$arity$3 = create_element__3;
create_element.cljs$core$IFn$_invoke$arity$variadic = create_element__4.cljs$core$IFn$_invoke$arity$variadic;
return create_element;
})()
;
/**
* Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
*/
reagent.core.as_element = (function as_element(form){
return reagent.impl.template.as_element(form);
});
/**
* Render a Reagent component into the DOM. The first argument may be
* either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.core.render = (function() {
var render = null;
var render__2 = (function (comp,container){
return render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});
var render__3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_element(((cljs.core.fn_QMARK_(comp))?(function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})():comp));
});
return reagent.impl.util.render_component(f,container,callback);
});
render = function(comp,container,callback){
switch(arguments.length){
case 2:
return render__2.call(this,comp,container);
case 3:
return render__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$2 = render__2;
render.cljs$core$IFn$_invoke$arity$3 = render__3;
return render;
})()
;
/**
* Remove a component from the given DOM node.
*/
reagent.core.unmount_component_at_node = (function unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node(container);
});
/**
* Turns a component into an HTML string.
*/
reagent.core.render_to_string = (function render_to_string(component){
var _STAR_non_reactive_STAR_16552 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToString"])(reagent.core.as_element(component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_16552;
}});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
* Turns a component into an HTML string, without data-react-id attributes, etc.
*/
reagent.core.render_to_static_markup = (function render_to_static_markup(component){
var _STAR_non_reactive_STAR_16554 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToStaticMarkup"])(reagent.core.as_element(component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_16554;
}});
reagent.core.force_update_all = (function force_update_all(){
return reagent.impl.util.force_update_all();
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
* Create a component, React style. Should be called with a map,
* looking like this:
* {:get-initial-state (fn [this])
* :component-will-receive-props (fn [this new-argv])
* :should-component-update (fn [this old-argv new-argv])
* :component-will-mount (fn [this])
* :component-did-mount (fn [this])
* :component-will-update (fn [this new-argv])
* :component-did-update (fn [this old-argv])
* :component-will-unmount (fn [this])
* :render (fn [this])}
* 
* Everything is optional, except :render.
*/
reagent.core.create_class = (function create_class(spec){
return reagent.impl.component.create_class(spec);
});
/**
* Returns the current React component (a.k.a this) in a component
* function.
*/
reagent.core.current_component = (function current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
* Returns the state of a component, as set with replace-state or set-state.
*/
reagent.core.state = (function state(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.component.state(this$);
});
/**
* Set state of a component.
*/
reagent.core.replace_state = (function replace_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))], 0)))].join('')));
}

return reagent.impl.component.replace_state(this$,new_state);
});
/**
* Merge component state with new-state.
*/
reagent.core.set_state = (function set_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))], 0)))].join('')));
}

return reagent.impl.component.set_state(this$,new_state);
});
/**
* Returns the props passed to a component.
*/
reagent.core.props = (function props(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.util.get_props(this$);
});
/**
* Returns the children passed to a component.
*/
reagent.core.children = (function children(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.util.get_children(this$);
});
/**
* Returns the entire Hiccup form passed to the component.
*/
reagent.core.argv = (function argv(this$){
if(reagent.impl.util.reagent_component_QMARK_(this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))], 0)))].join('')));
}

return reagent.impl.util.get_argv(this$);
});
/**
* Returns the root DOM node of a mounted component.
*/
reagent.core.dom_node = (function dom_node(this$){
return (this$["getDOMNode"])();
});
/**
* Utility function that merges two maps, handling :class and :style
* specially, like React's transferPropsTo.
*/
reagent.core.merge_props = (function merge_props(defaults,props){
return reagent.impl.util.merge_props(defaults,props);
});
/**
* Render dirty components immediately to the DOM.
* 
* Note that this may not work in event handlers, since React.js does
* batching of updates there.
*/
reagent.core.flush = (function flush(){
return reagent.impl.batching.flush();
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* Reagent components that derefs one of these are automatically
* re-rendered.
* @param {...*} var_args
*/
reagent.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});
var atom__2 = (function() { 
var G__16555__delegate = function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
};
var G__16555 = function (x,var_args){
var rest = null;
if (arguments.length > 1) {
var G__16556__i = 0, G__16556__a = new Array(arguments.length -  1);
while (G__16556__i < G__16556__a.length) {G__16556__a[G__16556__i] = arguments[G__16556__i + 1]; ++G__16556__i;}
  rest = new cljs.core.IndexedSeq(G__16556__a,0);
} 
return G__16555__delegate.call(this,x,rest);};
G__16555.cljs$lang$maxFixedArity = 1;
G__16555.cljs$lang$applyTo = (function (arglist__16557){
var x = cljs.core.first(arglist__16557);
var rest = cljs.core.rest(arglist__16557);
return G__16555__delegate(x,rest);
});
G__16555.cljs$core$IFn$_invoke$arity$variadic = G__16555__delegate;
return G__16555;
})()
;
atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__16558 = null;
if (arguments.length > 1) {
var G__16559__i = 0, G__16559__a = new Array(arguments.length -  1);
while (G__16559__i < G__16559__a.length) {G__16559__a[G__16559__i] = arguments[G__16559__i + 1]; ++G__16559__i;}
G__16558 = new cljs.core.IndexedSeq(G__16559__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__16558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Provide a combination of value and callback, that looks like an atom.
* 
* The first argument can be any value, that will be returned when the
* result is deref'ed.
* 
* The second argument should be a function, that is called with the
* optional extra arguments provided to wrap, and the new value of the
* resulting 'atom'.
* 
* Use for example like this:
* 
* (wrap (:foo @state)
* swap! state assoc :foo)
* 
* Probably useful only for passing to child components.
* @param {...*} var_args
*/
reagent.core.wrap = (function() { 
var wrap__delegate = function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"reset-fn","reset-fn",949643977,null))], 0)))].join('')));
}

return reagent.impl.util.make_wrapper(value,reset_fn,args);
};
var wrap = function (value,reset_fn,var_args){
var args = null;
if (arguments.length > 2) {
var G__16560__i = 0, G__16560__a = new Array(arguments.length -  2);
while (G__16560__i < G__16560__a.length) {G__16560__a[G__16560__i] = arguments[G__16560__i + 2]; ++G__16560__i;}
  args = new cljs.core.IndexedSeq(G__16560__a,0);
} 
return wrap__delegate.call(this,value,reset_fn,args);};
wrap.cljs$lang$maxFixedArity = 2;
wrap.cljs$lang$applyTo = (function (arglist__16561){
var value = cljs.core.first(arglist__16561);
arglist__16561 = cljs.core.next(arglist__16561);
var reset_fn = cljs.core.first(arglist__16561);
var args = cljs.core.rest(arglist__16561);
return wrap__delegate(value,reset_fn,args);
});
wrap.cljs$core$IFn$_invoke$arity$variadic = wrap__delegate;
return wrap;
})()
;
/**
* Provide a cursor into a Reagent atom.
* 
* Behaves like a Reagent atom but focuses updates and derefs to
* the specified path within the wrapped Reagent atom. e.g.,
* (let [c (cursor [:nested :content] ra)]
* ... @c ;; equivalent to (get-in @ra [:nested :content])
* ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
* ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
* )
* The third argument may be a function, that is called with
* optional extra arguments provided to cursor, and the new value of the
* resulting 'atom'. If such a function is given, it should update the
* given Reagent atom.
* @param {...*} var_args
*/
reagent.core.cursor = (function() {
var cursor = null;
var cursor__1 = (function (path){
return (function (ra){
return cursor.cljs$core$IFn$_invoke$arity$2(path,ra);
});
});
var cursor__2 = (function (path,ra){
if((function (){var G__16566 = ra;
if(G__16566){
var bit__4494__auto__ = (G__16566.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4494__auto__) || (G__16566.cljs$core$IDeref$)){
return true;
} else {
if((!G__16566.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__16566);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__16566);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"ra","ra",1258496501,null))], 0)))].join('')));
}

return reagent.ratom.cursor.cljs$core$IFn$_invoke$arity$2(path,ra);
});
var cursor__4 = (function() { 
var G__16568__delegate = function (path,ra,reset_fn,args){
if((function (){var G__16567 = ra;
if(G__16567){
var bit__4494__auto__ = (G__16567.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4494__auto__) || (G__16567.cljs$core$IDeref$)){
return true;
} else {
if((!G__16567.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__16567);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__16567);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"ra","ra",1258496501,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"reset-fn","reset-fn",949643977,null))], 0)))].join('')));
}

return reagent.ratom.cursor.cljs$core$IFn$_invoke$arity$4(path,ra,reset_fn,args);
};
var G__16568 = function (path,ra,reset_fn,var_args){
var args = null;
if (arguments.length > 3) {
var G__16569__i = 0, G__16569__a = new Array(arguments.length -  3);
while (G__16569__i < G__16569__a.length) {G__16569__a[G__16569__i] = arguments[G__16569__i + 3]; ++G__16569__i;}
  args = new cljs.core.IndexedSeq(G__16569__a,0);
} 
return G__16568__delegate.call(this,path,ra,reset_fn,args);};
G__16568.cljs$lang$maxFixedArity = 3;
G__16568.cljs$lang$applyTo = (function (arglist__16570){
var path = cljs.core.first(arglist__16570);
arglist__16570 = cljs.core.next(arglist__16570);
var ra = cljs.core.first(arglist__16570);
arglist__16570 = cljs.core.next(arglist__16570);
var reset_fn = cljs.core.first(arglist__16570);
var args = cljs.core.rest(arglist__16570);
return G__16568__delegate(path,ra,reset_fn,args);
});
G__16568.cljs$core$IFn$_invoke$arity$variadic = G__16568__delegate;
return G__16568;
})()
;
cursor = function(path,ra,reset_fn,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return cursor__1.call(this,path);
case 2:
return cursor__2.call(this,path,ra);
default:
var G__16571 = null;
if (arguments.length > 3) {
var G__16572__i = 0, G__16572__a = new Array(arguments.length -  3);
while (G__16572__i < G__16572__a.length) {G__16572__a[G__16572__i] = arguments[G__16572__i + 3]; ++G__16572__i;}
G__16571 = new cljs.core.IndexedSeq(G__16572__a,0);
}
return cursor__4.cljs$core$IFn$_invoke$arity$variadic(path,ra,reset_fn, G__16571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$lang$maxFixedArity = 3;
cursor.cljs$lang$applyTo = cursor__4.cljs$lang$applyTo;
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$variadic = cursor__4.cljs$core$IFn$_invoke$arity$variadic;
return cursor;
})()
;
/**
* Run f using requestAnimationFrame or equivalent.
*/
reagent.core.next_tick = (function next_tick(f){
var G__16574 = f;
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__16574) : reagent.impl.batching.next_tick.call(null,G__16574));
});
/**
* Works just like clojure.core/partial, except that it is an IFn, and
* the result can be compared with =
* @param {...*} var_args
*/
reagent.core.partial = (function() { 
var partial__delegate = function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
};
var partial = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__16575__i = 0, G__16575__a = new Array(arguments.length -  1);
while (G__16575__i < G__16575__a.length) {G__16575__a[G__16575__i] = arguments[G__16575__i + 1]; ++G__16575__i;}
  args = new cljs.core.IndexedSeq(G__16575__a,0);
} 
return partial__delegate.call(this,f,args);};
partial.cljs$lang$maxFixedArity = 1;
partial.cljs$lang$applyTo = (function (arglist__16576){
var f = cljs.core.first(arglist__16576);
var args = cljs.core.rest(arglist__16576);
return partial__delegate(f,args);
});
partial.cljs$core$IFn$_invoke$arity$variadic = partial__delegate;
return partial;
})()
;
