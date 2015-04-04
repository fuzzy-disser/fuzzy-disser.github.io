// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__31430){
var vec__31432 = p__31430;
var default$ = cljs.core.nth.call(null,vec__31432,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__31430 = null;
if (arguments.length > 1) {
var G__31433__i = 0, G__31433__a = new Array(arguments.length -  1);
while (G__31433__i < G__31433__a.length) {G__31433__a[G__31433__i] = arguments[G__31433__i + 1]; ++G__31433__i;}
  p__31430 = new cljs.core.IndexedSeq(G__31433__a,0);
} 
return get__delegate.call(this,k,p__31430);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__31434){
var k = cljs.core.first(arglist__31434);
var p__31430 = cljs.core.rest(arglist__31434);
return get__delegate(k,p__31430);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__31435){
var vec__31437 = p__31435;
var default$ = cljs.core.nth.call(null,vec__31437,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__31435 = null;
if (arguments.length > 1) {
var G__31438__i = 0, G__31438__a = new Array(arguments.length -  1);
while (G__31438__i < G__31438__a.length) {G__31438__a[G__31438__i] = arguments[G__31438__i + 1]; ++G__31438__i;}
  p__31435 = new cljs.core.IndexedSeq(G__31438__a,0);
} 
return get_in__delegate.call(this,ks,p__31435);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__31439){
var ks = cljs.core.first(arglist__31439);
var p__31435 = cljs.core.rest(arglist__31439);
return get_in__delegate(ks,p__31435);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__31440__i = 0, G__31440__a = new Array(arguments.length -  1);
while (G__31440__i < G__31440__a.length) {G__31440__a[G__31440__i] = arguments[G__31440__i + 1]; ++G__31440__i;}
  args = new cljs.core.IndexedSeq(G__31440__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__31441){
var f = cljs.core.first(arglist__31441);
var args = cljs.core.rest(arglist__31441);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__31442_SHARP_){
return cljs.core.assoc_in.call(null,p1__31442_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__31443){
var vec__31445 = p__31443;
var default$ = cljs.core.nth.call(null,vec__31445,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__31443 = null;
if (arguments.length > 1) {
var G__31446__i = 0, G__31446__a = new Array(arguments.length -  1);
while (G__31446__i < G__31446__a.length) {G__31446__a[G__31446__i] = arguments[G__31446__i + 1]; ++G__31446__i;}
  p__31443 = new cljs.core.IndexedSeq(G__31446__a,0);
} 
return get_BANG___delegate.call(this,k,p__31443);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__31447){
var k = cljs.core.first(arglist__31447);
var p__31443 = cljs.core.rest(arglist__31447);
return get_BANG___delegate(k,p__31443);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__31448){
var vec__31450 = p__31448;
var default$ = cljs.core.nth.call(null,vec__31450,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__31448 = null;
if (arguments.length > 1) {
var G__31451__i = 0, G__31451__a = new Array(arguments.length -  1);
while (G__31451__i < G__31451__a.length) {G__31451__a[G__31451__i] = arguments[G__31451__i + 1]; ++G__31451__i;}
  p__31448 = new cljs.core.IndexedSeq(G__31451__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__31448);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__31452){
var ks = cljs.core.first(arglist__31452);
var p__31448 = cljs.core.rest(arglist__31452);
return get_in_BANG___delegate(ks,p__31448);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__31453_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__31453_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__31454__i = 0, G__31454__a = new Array(arguments.length -  2);
while (G__31454__i < G__31454__a.length) {G__31454__a[G__31454__i] = arguments[G__31454__i + 2]; ++G__31454__i;}
  args = new cljs.core.IndexedSeq(G__31454__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__31455){
var ks = cljs.core.first(arglist__31455);
arglist__31455 = cljs.core.next(arglist__31455);
var f = cljs.core.first(arglist__31455);
var args = cljs.core.rest(arglist__31455);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map?rel=1425613905363