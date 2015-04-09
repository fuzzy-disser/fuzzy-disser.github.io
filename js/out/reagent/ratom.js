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
reagent.ratom._running = (function (){var G__16846 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16846) : cljs.core.atom.call(null,G__16846));
})();
}
reagent.ratom.running = (function running(){
var G__16848 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16848) : cljs.core.deref.call(null,G__16848));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_16850 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16850;
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
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
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
var G__16851 = this$__$1;
return goog.getUid(G__16851);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__16852_16863 = key;
var G__16853_16864 = this$__$1;
var G__16854_16865 = oldval;
var G__16855_16866 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16852_16863,G__16853_16864,G__16854_16865,G__16855_16866) : f.call(null,G__16852_16863,G__16853_16864,G__16854_16865,G__16855_16866));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16856 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16856) : f.call(null,G__16856));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16857 = self__.state;
var G__16858 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16857,G__16858) : f.call(null,G__16857,G__16858));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16859 = self__.state;
var G__16860 = x;
var G__16861 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16859,G__16860,G__16861) : f.call(null,G__16859,G__16860,G__16861));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__16862 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__16862) : self__.validator.call(null,G__16862));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4400__auto__,writer__4401__auto__,opt__4402__auto__){
return cljs.core._write(writer__4401__auto__,"reagent.ratom/RAtom");
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
var G__16870__delegate = function (x,p__16867){
var map__16869 = p__16867;
var map__16869__$1 = ((cljs.core.seq_QMARK_(map__16869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16869):map__16869);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,cljs.core.constant$keyword$8);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__16870 = function (x,var_args){
var p__16867 = null;
if (arguments.length > 1) {
var G__16871__i = 0, G__16871__a = new Array(arguments.length -  1);
while (G__16871__i < G__16871__a.length) {G__16871__a[G__16871__i] = arguments[G__16871__i + 1]; ++G__16871__i;}
  p__16867 = new cljs.core.IndexedSeq(G__16871__a,0);
} 
return G__16870__delegate.call(this,x,p__16867);};
G__16870.cljs$lang$maxFixedArity = 1;
G__16870.cljs$lang$applyTo = (function (arglist__16872){
var x = cljs.core.first(arglist__16872);
var p__16867 = cljs.core.rest(arglist__16872);
return G__16870__delegate(x,p__16867);
});
G__16870.cljs$core$IFn$_invoke$arity$variadic = G__16870__delegate;
return G__16870;
})()
;
atom = function(x,var_args){
var p__16867 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__16873 = null;
if (arguments.length > 1) {
var G__16874__i = 0, G__16874__a = new Array(arguments.length -  1);
while (G__16874__i < G__16874__a.length) {G__16874__a[G__16874__i] = arguments[G__16874__i + 1]; ++G__16874__i;}
G__16873 = new cljs.core.IndexedSeq(G__16874__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__16873);
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
var _STAR_ratom_context_STAR_16877 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16878 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16878) : cljs.core.deref.call(null,G__16878));
})(),path);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16877;
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
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path,self__.setf], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(self__.path,writer,opts);

cljs.core._write(writer," ");

cljs.core.pr_writer(self__.ratom,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16879 = reagent.ratom.peek_at(self__.ratom,self__.path);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16879) : f.call(null,G__16879));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16880 = reagent.ratom.peek_at(self__.ratom,self__.path);
var G__16881 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16880,G__16881) : f.call(null,G__16880,G__16881));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16882 = reagent.ratom.peek_at(self__.ratom,self__.path);
var G__16883 = x;
var G__16884 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16882,G__16883,G__16884) : f.call(null,G__16882,G__16883,G__16884));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,reagent.ratom.peek_at(self__.ratom,self__.path),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.setf == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
} else {
var G__16885 = new_value;
return (self__.setf.cljs$core$IFn$_invoke$arity$1 ? self__.setf.cljs$core$IFn$_invoke$arity$1(G__16885) : self__.setf.call(null,G__16885));
}
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16886 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16886) : cljs.core.deref.call(null,G__16886));
})(),self__.path);
} else {
if((self__.reaction == null)){
self__.reaction = (function (){var G__16887 = ((function (this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16888 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16888) : cljs.core.deref.call(null,G__16888));
})(),self__.path);
});})(this$__$1))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$1 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$1(G__16887) : reagent.ratom.make_reaction.call(null,G__16887));
})();
} else {
}

var G__16889 = self__.reaction;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16889) : cljs.core.deref.call(null,G__16889));
}
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.setf,other.setf));
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4400__auto__,writer__4401__auto__,opt__4402__auto__){
return cljs.core._write(writer__4401__auto__,"reagent.ratom/RCursor");
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

reagent.ratom.IDisposable = (function (){var obj16891 = {};
return obj16891;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3801__auto__ = this$;
if(and__3801__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3801__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3813__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__16895 = x__4457__auto__;
return goog.typeOf(G__16895);
})()]);
if(or__3813__auto__){
return or__3813__auto__;
} else {
var or__3813__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3813__auto____$1){
return or__3813__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj16897 = {};
return obj16897;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3801__auto__ = this$;
if(and__3801__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3801__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3813__auto__ = (reagent.ratom.run[(function (){var G__16901 = x__4457__auto__;
return goog.typeOf(G__16901);
})()]);
if(or__3813__auto__){
return or__3813__auto__;
} else {
var or__3813__auto____$1 = (reagent.ratom.run["_"]);
if(or__3813__auto____$1){
return or__3813__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj16903 = {};
return obj16903;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3801__auto__ = this$;
if(and__3801__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3801__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4457__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3813__auto__ = (reagent.ratom._update_watching[(function (){var G__16907 = x__4457__auto__;
return goog.typeOf(G__16907);
})()]);
if(or__3813__auto__){
return or__3813__auto__;
} else {
var or__3813__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3813__auto____$1){
return or__3813__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3801__auto__ = k;
if(and__3801__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3801__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4457__auto__ = (((k == null))?null:k);
return (function (){var or__3813__auto__ = (reagent.ratom._handle_change[(function (){var G__16911 = x__4457__auto__;
return goog.typeOf(G__16911);
})()]);
if(or__3813__auto__){
return or__3813__auto__;
} else {
var or__3813__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3813__auto____$1){
return or__3813__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__16916_16920 = key;
var G__16917_16921 = obs;
var G__16918_16922 = oldval;
var G__16919_16923 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16916_16920,G__16917_16921,G__16918_16922,G__16919_16923) : f.call(null,G__16916_16920,G__16917_16921,G__16918_16922,G__16919_16923));

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
if(cljs.core.truth_((function (){var and__3801__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3801__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3801__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3813__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
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
var seq__16924_16945 = cljs.core.seq(derefed);
var chunk__16925_16946 = null;
var count__16926_16947 = (0);
var i__16927_16948 = (0);
while(true){
if((i__16927_16948 < count__16926_16947)){
var w_16949 = chunk__16925_16946.cljs$core$IIndexed$_nth$arity$2(null,i__16927_16948);
if(cljs.core.contains_QMARK_(self__.watching,w_16949)){
} else {
cljs.core.add_watch(w_16949,this$__$1,reagent.ratom._handle_change);
}

var G__16950 = seq__16924_16945;
var G__16951 = chunk__16925_16946;
var G__16952 = count__16926_16947;
var G__16953 = (i__16927_16948 + (1));
seq__16924_16945 = G__16950;
chunk__16925_16946 = G__16951;
count__16926_16947 = G__16952;
i__16927_16948 = G__16953;
continue;
} else {
var temp__4126__auto___16954 = cljs.core.seq(seq__16924_16945);
if(temp__4126__auto___16954){
var seq__16924_16955__$1 = temp__4126__auto___16954;
if(cljs.core.chunked_seq_QMARK_(seq__16924_16955__$1)){
var c__4600__auto___16956 = cljs.core.chunk_first(seq__16924_16955__$1);
var G__16957 = cljs.core.chunk_rest(seq__16924_16955__$1);
var G__16958 = c__4600__auto___16956;
var G__16959 = cljs.core.count(c__4600__auto___16956);
var G__16960 = (0);
seq__16924_16945 = G__16957;
chunk__16925_16946 = G__16958;
count__16926_16947 = G__16959;
i__16927_16948 = G__16960;
continue;
} else {
var w_16961 = cljs.core.first(seq__16924_16955__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_16961)){
} else {
cljs.core.add_watch(w_16961,this$__$1,reagent.ratom._handle_change);
}

var G__16962 = cljs.core.next(seq__16924_16955__$1);
var G__16963 = null;
var G__16964 = (0);
var G__16965 = (0);
seq__16924_16945 = G__16962;
chunk__16925_16946 = G__16963;
count__16926_16947 = G__16964;
i__16927_16948 = G__16965;
continue;
}
} else {
}
}
break;
}

var seq__16928_16966 = cljs.core.seq(self__.watching);
var chunk__16929_16967 = null;
var count__16930_16968 = (0);
var i__16931_16969 = (0);
while(true){
if((i__16931_16969 < count__16930_16968)){
var w_16970 = chunk__16929_16967.cljs$core$IIndexed$_nth$arity$2(null,i__16931_16969);
if(cljs.core.contains_QMARK_(derefed,w_16970)){
} else {
cljs.core.remove_watch(w_16970,this$__$1);
}

var G__16971 = seq__16928_16966;
var G__16972 = chunk__16929_16967;
var G__16973 = count__16930_16968;
var G__16974 = (i__16931_16969 + (1));
seq__16928_16966 = G__16971;
chunk__16929_16967 = G__16972;
count__16930_16968 = G__16973;
i__16931_16969 = G__16974;
continue;
} else {
var temp__4126__auto___16975 = cljs.core.seq(seq__16928_16966);
if(temp__4126__auto___16975){
var seq__16928_16976__$1 = temp__4126__auto___16975;
if(cljs.core.chunked_seq_QMARK_(seq__16928_16976__$1)){
var c__4600__auto___16977 = cljs.core.chunk_first(seq__16928_16976__$1);
var G__16978 = cljs.core.chunk_rest(seq__16928_16976__$1);
var G__16979 = c__4600__auto___16977;
var G__16980 = cljs.core.count(c__4600__auto___16977);
var G__16981 = (0);
seq__16928_16966 = G__16978;
chunk__16929_16967 = G__16979;
count__16930_16968 = G__16980;
i__16931_16969 = G__16981;
continue;
} else {
var w_16982 = cljs.core.first(seq__16928_16976__$1);
if(cljs.core.contains_QMARK_(derefed,w_16982)){
} else {
cljs.core.remove_watch(w_16982,this$__$1);
}

var G__16983 = cljs.core.next(seq__16928_16976__$1);
var G__16984 = null;
var G__16985 = (0);
var G__16986 = (0);
seq__16928_16966 = G__16983;
chunk__16929_16967 = G__16984;
count__16930_16968 = G__16985;
i__16931_16969 = G__16986;
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
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__16932 = this$__$1;
return goog.getUid(G__16932);
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
var seq__16933_16987 = cljs.core.seq(self__.watching);
var chunk__16934_16988 = null;
var count__16935_16989 = (0);
var i__16936_16990 = (0);
while(true){
if((i__16936_16990 < count__16935_16989)){
var w_16991 = chunk__16934_16988.cljs$core$IIndexed$_nth$arity$2(null,i__16936_16990);
cljs.core.remove_watch(w_16991,this$__$1);

var G__16992 = seq__16933_16987;
var G__16993 = chunk__16934_16988;
var G__16994 = count__16935_16989;
var G__16995 = (i__16936_16990 + (1));
seq__16933_16987 = G__16992;
chunk__16934_16988 = G__16993;
count__16935_16989 = G__16994;
i__16936_16990 = G__16995;
continue;
} else {
var temp__4126__auto___16996 = cljs.core.seq(seq__16933_16987);
if(temp__4126__auto___16996){
var seq__16933_16997__$1 = temp__4126__auto___16996;
if(cljs.core.chunked_seq_QMARK_(seq__16933_16997__$1)){
var c__4600__auto___16998 = cljs.core.chunk_first(seq__16933_16997__$1);
var G__16999 = cljs.core.chunk_rest(seq__16933_16997__$1);
var G__17000 = c__4600__auto___16998;
var G__17001 = cljs.core.count(c__4600__auto___16998);
var G__17002 = (0);
seq__16933_16987 = G__16999;
chunk__16934_16988 = G__17000;
count__16935_16989 = G__17001;
i__16936_16990 = G__17002;
continue;
} else {
var w_17003 = cljs.core.first(seq__16933_16997__$1);
cljs.core.remove_watch(w_17003,this$__$1);

var G__17004 = cljs.core.next(seq__16933_16997__$1);
var G__17005 = null;
var G__17006 = (0);
var G__17007 = (0);
seq__16933_16987 = G__17004;
chunk__16934_16988 = G__17005;
count__16935_16989 = G__17006;
i__16936_16990 = G__17007;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches(a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16937 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__16937) : f__$1.call(null,G__16937));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16938 = self__.state;
var G__16939 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__16938,G__16939) : f__$1.call(null,G__16938,G__16939));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16940 = self__.state;
var G__16941 = x;
var G__16942 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__16940,G__16941,G__16942) : f__$1.call(null,G__16940,G__16941,G__16942));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
var G__16943_17008 = oldval;
var G__16944_17009 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__16943_17008,G__16944_17009) : self__.on_set.call(null,G__16943_17008,G__16944_17009));
} else {
}

return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if(cljs.core.empty_QMARK_(self__.watches)){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not((function (){var or__3813__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__10014__auto___17010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(249),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__10014__auto___17010], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3813__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3813__auto__)){
return or__3813__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0)))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4400__auto__,writer__4401__auto__,opt__4402__auto__){
return cljs.core._write(writer__4401__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__17011){
var map__17013 = p__17011;
var map__17013__$1 = ((cljs.core.seq_QMARK_(map__17013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17013):map__17013);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17013__$1,cljs.core.constant$keyword$42);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17013__$1,cljs.core.constant$keyword$43);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17013__$1,cljs.core.constant$keyword$44);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17013__$1,cljs.core.constant$keyword$45);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__17011 = null;
if (arguments.length > 1) {
var G__17014__i = 0, G__17014__a = new Array(arguments.length -  1);
while (G__17014__i < G__17014__a.length) {G__17014__a[G__17014__i] = arguments[G__17014__i + 1]; ++G__17014__i;}
  p__17011 = new cljs.core.IndexedSeq(G__17014__a,0);
} 
return make_reaction__delegate.call(this,f,p__17011);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17015){
var f = cljs.core.first(arglist__17015);
var p__17011 = cljs.core.rest(arglist__17015);
return make_reaction__delegate(f,p__17011);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
