// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_31555 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_31555;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__31559__delegate = function (x,p__31556){
var map__31558 = p__31556;
var map__31558__$1 = ((cljs.core.seq_QMARK_.call(null,map__31558))?cljs.core.apply.call(null,cljs.core.hash_map,map__31558):map__31558);
var validator = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__31558__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__31559 = function (x,var_args){
var p__31556 = null;
if (arguments.length > 1) {
var G__31560__i = 0, G__31560__a = new Array(arguments.length -  1);
while (G__31560__i < G__31560__a.length) {G__31560__a[G__31560__i] = arguments[G__31560__i + 1]; ++G__31560__i;}
  p__31556 = new cljs.core.IndexedSeq(G__31560__a,0);
} 
return G__31559__delegate.call(this,x,p__31556);};
G__31559.cljs$lang$maxFixedArity = 1;
G__31559.cljs$lang$applyTo = (function (arglist__31561){
var x = cljs.core.first(arglist__31561);
var p__31556 = cljs.core.rest(arglist__31561);
return G__31559__delegate(x,p__31556);
});
G__31559.cljs$core$IFn$_invoke$arity$variadic = G__31559__delegate;
return G__31559;
})()
;
atom = function(x,var_args){
var p__31556 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__31562 = null;
if (arguments.length > 1) {
var G__31563__i = 0, G__31563__a = new Array(arguments.length -  1);
while (G__31563__i < G__31563__a.length) {G__31563__a[G__31563__i] = arguments[G__31563__i + 1]; ++G__31563__i;}
G__31562 = new cljs.core.IndexedSeq(G__31563__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__31562);
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
reagent.ratom.peek_at = (function peek_at(a,path){
var _STAR_ratom_context_STAR_31565 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_31565;
}});

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom,setf,reaction){
this.path = path;
this.ratom = ratom;
this.setf = setf;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path,self__.setf], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,self__.ratom,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path)));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.setf == null)){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
} else {
return self__.setf.call(null,new_value);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
} else {
if((self__.reaction == null)){
self__.reaction = reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$__$1))
);
} else {
}

return cljs.core.deref.call(null,self__.reaction);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)) && (cljs.core._EQ_.call(null,self__.setf,other.setf));
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom,setf,reaction){
return (new reagent.ratom.RCursor(path,ratom,setf,reaction));
});

reagent.ratom.cursor = (function() {
var cursor = null;
var cursor__2 = (function (path,ra){
return (new reagent.ratom.RCursor(path,ra,null,null));
});
var cursor__4 = (function (path,ra,setf,args){
return (new reagent.ratom.RCursor(path,ra,(new reagent.impl.util.partial_ifn(setf,args,null)),null));
});
cursor = function(path,ra,setf,args){
switch(arguments.length){
case 2:
return cursor__2.call(this,path,ra);
case 4:
return cursor__4.call(this,path,ra,setf,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$4 = cursor__4;
return cursor;
})()
;

reagent.ratom.IDisposable = (function (){var obj31567 = {};
return obj31567;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__23532__auto__ = this$;
if(and__23532__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__23532__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__24188__auto__ = (((this$ == null))?null:this$);
return (function (){var or__23544__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj31569 = {};
return obj31569;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__23532__auto__ = this$;
if(and__23532__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__23532__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__24188__auto__ = (((this$ == null))?null:this$);
return (function (){var or__23544__auto__ = (reagent.ratom.run[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (reagent.ratom.run["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj31571 = {};
return obj31571;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__23532__auto__ = this$;
if(and__23532__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__23532__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__24188__auto__ = (((this$ == null))?null:this$);
return (function (){var or__23544__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__23532__auto__ = k;
if(and__23532__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__23532__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__24188__auto__ = (((k == null))?null:k);
return (function (){var or__23544__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__23532__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__23532__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__23532__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__23544__auto__ = self__.auto_run;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__31572_31584 = cljs.core.seq.call(null,derefed);
var chunk__31573_31585 = null;
var count__31574_31586 = (0);
var i__31575_31587 = (0);
while(true){
if((i__31575_31587 < count__31574_31586)){
var w_31588 = cljs.core._nth.call(null,chunk__31573_31585,i__31575_31587);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_31588)){
} else {
cljs.core.add_watch.call(null,w_31588,this$__$1,reagent.ratom._handle_change);
}

var G__31589 = seq__31572_31584;
var G__31590 = chunk__31573_31585;
var G__31591 = count__31574_31586;
var G__31592 = (i__31575_31587 + (1));
seq__31572_31584 = G__31589;
chunk__31573_31585 = G__31590;
count__31574_31586 = G__31591;
i__31575_31587 = G__31592;
continue;
} else {
var temp__4126__auto___31593 = cljs.core.seq.call(null,seq__31572_31584);
if(temp__4126__auto___31593){
var seq__31572_31594__$1 = temp__4126__auto___31593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31572_31594__$1)){
var c__24331__auto___31595 = cljs.core.chunk_first.call(null,seq__31572_31594__$1);
var G__31596 = cljs.core.chunk_rest.call(null,seq__31572_31594__$1);
var G__31597 = c__24331__auto___31595;
var G__31598 = cljs.core.count.call(null,c__24331__auto___31595);
var G__31599 = (0);
seq__31572_31584 = G__31596;
chunk__31573_31585 = G__31597;
count__31574_31586 = G__31598;
i__31575_31587 = G__31599;
continue;
} else {
var w_31600 = cljs.core.first.call(null,seq__31572_31594__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_31600)){
} else {
cljs.core.add_watch.call(null,w_31600,this$__$1,reagent.ratom._handle_change);
}

var G__31601 = cljs.core.next.call(null,seq__31572_31594__$1);
var G__31602 = null;
var G__31603 = (0);
var G__31604 = (0);
seq__31572_31584 = G__31601;
chunk__31573_31585 = G__31602;
count__31574_31586 = G__31603;
i__31575_31587 = G__31604;
continue;
}
} else {
}
}
break;
}

var seq__31576_31605 = cljs.core.seq.call(null,self__.watching);
var chunk__31577_31606 = null;
var count__31578_31607 = (0);
var i__31579_31608 = (0);
while(true){
if((i__31579_31608 < count__31578_31607)){
var w_31609 = cljs.core._nth.call(null,chunk__31577_31606,i__31579_31608);
if(cljs.core.contains_QMARK_.call(null,derefed,w_31609)){
} else {
cljs.core.remove_watch.call(null,w_31609,this$__$1);
}

var G__31610 = seq__31576_31605;
var G__31611 = chunk__31577_31606;
var G__31612 = count__31578_31607;
var G__31613 = (i__31579_31608 + (1));
seq__31576_31605 = G__31610;
chunk__31577_31606 = G__31611;
count__31578_31607 = G__31612;
i__31579_31608 = G__31613;
continue;
} else {
var temp__4126__auto___31614 = cljs.core.seq.call(null,seq__31576_31605);
if(temp__4126__auto___31614){
var seq__31576_31615__$1 = temp__4126__auto___31614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31576_31615__$1)){
var c__24331__auto___31616 = cljs.core.chunk_first.call(null,seq__31576_31615__$1);
var G__31617 = cljs.core.chunk_rest.call(null,seq__31576_31615__$1);
var G__31618 = c__24331__auto___31616;
var G__31619 = cljs.core.count.call(null,c__24331__auto___31616);
var G__31620 = (0);
seq__31576_31605 = G__31617;
chunk__31577_31606 = G__31618;
count__31578_31607 = G__31619;
i__31579_31608 = G__31620;
continue;
} else {
var w_31621 = cljs.core.first.call(null,seq__31576_31615__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_31621)){
} else {
cljs.core.remove_watch.call(null,w_31621,this$__$1);
}

var G__31622 = cljs.core.next.call(null,seq__31576_31615__$1);
var G__31623 = null;
var G__31624 = (0);
var G__31625 = (0);
seq__31576_31605 = G__31622;
chunk__31577_31606 = G__31623;
count__31578_31607 = G__31624;
i__31579_31608 = G__31625;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__31580_31626 = cljs.core.seq.call(null,self__.watching);
var chunk__31581_31627 = null;
var count__31582_31628 = (0);
var i__31583_31629 = (0);
while(true){
if((i__31583_31629 < count__31582_31628)){
var w_31630 = cljs.core._nth.call(null,chunk__31581_31627,i__31583_31629);
cljs.core.remove_watch.call(null,w_31630,this$__$1);

var G__31631 = seq__31580_31626;
var G__31632 = chunk__31581_31627;
var G__31633 = count__31582_31628;
var G__31634 = (i__31583_31629 + (1));
seq__31580_31626 = G__31631;
chunk__31581_31627 = G__31632;
count__31582_31628 = G__31633;
i__31583_31629 = G__31634;
continue;
} else {
var temp__4126__auto___31635 = cljs.core.seq.call(null,seq__31580_31626);
if(temp__4126__auto___31635){
var seq__31580_31636__$1 = temp__4126__auto___31635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31580_31636__$1)){
var c__24331__auto___31637 = cljs.core.chunk_first.call(null,seq__31580_31636__$1);
var G__31638 = cljs.core.chunk_rest.call(null,seq__31580_31636__$1);
var G__31639 = c__24331__auto___31637;
var G__31640 = cljs.core.count.call(null,c__24331__auto___31637);
var G__31641 = (0);
seq__31580_31626 = G__31638;
chunk__31581_31627 = G__31639;
count__31582_31628 = G__31640;
i__31583_31629 = G__31641;
continue;
} else {
var w_31642 = cljs.core.first.call(null,seq__31580_31636__$1);
cljs.core.remove_watch.call(null,w_31642,this$__$1);

var G__31643 = cljs.core.next.call(null,seq__31580_31636__$1);
var G__31644 = null;
var G__31645 = (0);
var G__31646 = (0);
seq__31580_31626 = G__31643;
chunk__31581_31627 = G__31644;
count__31582_31628 = G__31645;
i__31583_31629 = G__31646;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__23544__auto__ = self__.auto_run;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__25073__auto___31647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(250),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__25073__auto___31647))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__23544__auto__ = self__.auto_run;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__31648){
var map__31650 = p__31648;
var map__31650__$1 = ((cljs.core.seq_QMARK_.call(null,map__31650))?cljs.core.apply.call(null,cljs.core.hash_map,map__31650):map__31650);
var derefed = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__31648 = null;
if (arguments.length > 1) {
var G__31651__i = 0, G__31651__a = new Array(arguments.length -  1);
while (G__31651__i < G__31651__a.length) {G__31651__a[G__31651__i] = arguments[G__31651__i + 1]; ++G__31651__i;}
  p__31648 = new cljs.core.IndexedSeq(G__31651__a,0);
} 
return make_reaction__delegate.call(this,f,p__31648);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__31652){
var f = cljs.core.first(arglist__31652);
var p__31648 = cljs.core.rest(arglist__31652);
return make_reaction__delegate(f,p__31648);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map?rel=1425613906982