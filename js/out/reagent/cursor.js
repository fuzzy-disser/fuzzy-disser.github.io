// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.cursor');
goog.require('cljs.core');

/**
* @constructor
*/
reagent.cursor.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.cursor.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.cursor.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.cursor.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,key], null),((function (this$__$1){
return (function (k,r,o,n){
return f.call(null,key,this$__$1,cljs.core.get_in.call(null,o,self__.path),cljs.core.get_in.call(null,n,self__.path));
});})(this$__$1))
);
});

reagent.cursor.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,key], null));
});

reagent.cursor.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path),writer,opts);

cljs.core._write.call(null,writer," @");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.cursor.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta.call(null,self__.ratom);
});

reagent.cursor.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f),self__.path);
});

reagent.cursor.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x),self__.path);
});

reagent.cursor.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y),self__.path);
});

reagent.cursor.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,((function (a__$1){
return (function (v){
return cljs.core.apply.call(null,f,v,x,y,more);
});})(a__$1))
),self__.path);
});

reagent.cursor.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return cljs.core.get_in.call(null,cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value),self__.path);
});

reagent.cursor.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});

reagent.cursor.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.cursor.RCursor.cljs$lang$type = true;

reagent.cursor.RCursor.cljs$lang$ctorStr = "reagent.cursor/RCursor";

reagent.cursor.RCursor.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"reagent.cursor/RCursor");
});

reagent.cursor.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.cursor.RCursor(path,ratom));
});

/**
* Provide a cursor into an atom.
* 
* When called with a single argument, return a function that will
* create a cursor given an atom.
* 
* Behaves like an atom but focuses updates and derefs to the specified
* path within the wrapped atom. e.g.,
* (let [c (cursor [:nested :content] ra)]
* ... @c ;; equivalent to (get-in @ra [:nested :content])
* ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
* ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
* )
*/
reagent.cursor.cursor = (function() {
var cursor = null;
var cursor__1 = (function (path){
return (function (ra){
return cursor.call(null,path,ra);
});
});
var cursor__2 = (function (path,ra){
return (new reagent.cursor.RCursor(path,ra));
});
cursor = function(path,ra){
switch(arguments.length){
case 1:
return cursor__1.call(this,path);
case 2:
return cursor__2.call(this,path,ra);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
return cursor;
})()
;
/**
* Create a cursor.
* 
* Behaves like a normal atom for the value at the specified path.
*/
reagent.cursor.cur = (function cur(a,path){
return (new reagent.cursor.RCursor(path,a));
});

//# sourceMappingURL=cursor.js.map?rel=1425613905254