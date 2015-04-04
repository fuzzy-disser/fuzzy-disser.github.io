// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t37843 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37843 = (function (f,fn_handler,meta37844){
this.f = f;
this.fn_handler = fn_handler;
this.meta37844 = meta37844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t37843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t37843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37845){
var self__ = this;
var _37845__$1 = this;
return self__.meta37844;
});

cljs.core.async.t37843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37845,meta37844__$1){
var self__ = this;
var _37845__$1 = this;
return (new cljs.core.async.t37843(self__.f,self__.fn_handler,meta37844__$1));
});

cljs.core.async.t37843.cljs$lang$type = true;

cljs.core.async.t37843.cljs$lang$ctorStr = "cljs.core.async/t37843";

cljs.core.async.t37843.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t37843");
});

cljs.core.async.__GT_t37843 = (function __GT_t37843(f__$1,fn_handler__$1,meta37844){
return (new cljs.core.async.t37843(f__$1,fn_handler__$1,meta37844));
});

}

return (new cljs.core.async.t37843(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__37847 = buff;
if(G__37847){
var bit__24225__auto__ = null;
if(cljs.core.truth_((function (){var or__23544__auto__ = bit__24225__auto__;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return G__37847.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__37847.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37847);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37848 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37848);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37848,ret){
return (function (){
return fn1.call(null,val_37848);
});})(val_37848,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__24431__auto___37849 = n;
var x_37850 = (0);
while(true){
if((x_37850 < n__24431__auto___37849)){
(a[x_37850] = (0));

var G__37851 = (x_37850 + (1));
x_37850 = G__37851;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37852 = (i + (1));
i = G__37852;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t37856 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37856 = (function (flag,alt_flag,meta37857){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37857 = meta37857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37856.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t37856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t37856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37858){
var self__ = this;
var _37858__$1 = this;
return self__.meta37857;
});})(flag))
;

cljs.core.async.t37856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37858,meta37857__$1){
var self__ = this;
var _37858__$1 = this;
return (new cljs.core.async.t37856(self__.flag,self__.alt_flag,meta37857__$1));
});})(flag))
;

cljs.core.async.t37856.cljs$lang$type = true;

cljs.core.async.t37856.cljs$lang$ctorStr = "cljs.core.async/t37856";

cljs.core.async.t37856.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t37856");
});})(flag))
;

cljs.core.async.__GT_t37856 = ((function (flag){
return (function __GT_t37856(flag__$1,alt_flag__$1,meta37857){
return (new cljs.core.async.t37856(flag__$1,alt_flag__$1,meta37857));
});})(flag))
;

}

return (new cljs.core.async.t37856(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t37862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37862 = (function (cb,flag,alt_handler,meta37863){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37863 = meta37863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t37862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t37862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t37862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37864){
var self__ = this;
var _37864__$1 = this;
return self__.meta37863;
});

cljs.core.async.t37862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37864,meta37863__$1){
var self__ = this;
var _37864__$1 = this;
return (new cljs.core.async.t37862(self__.cb,self__.flag,self__.alt_handler,meta37863__$1));
});

cljs.core.async.t37862.cljs$lang$type = true;

cljs.core.async.t37862.cljs$lang$ctorStr = "cljs.core.async/t37862";

cljs.core.async.t37862.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t37862");
});

cljs.core.async.__GT_t37862 = (function __GT_t37862(cb__$1,flag__$1,alt_handler__$1,meta37863){
return (new cljs.core.async.t37862(cb__$1,flag__$1,alt_handler__$1,meta37863));
});

}

return (new cljs.core.async.t37862(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37865_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37865_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37866_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37866_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__23544__auto__ = wport;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37867 = (i + (1));
i = G__37867;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23544__auto__ = ret;
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__23532__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__23532__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__23532__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__37868){
var map__37870 = p__37868;
var map__37870__$1 = ((cljs.core.seq_QMARK_.call(null,map__37870))?cljs.core.apply.call(null,cljs.core.hash_map,map__37870):map__37870);
var opts = map__37870__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__37868 = null;
if (arguments.length > 1) {
var G__37871__i = 0, G__37871__a = new Array(arguments.length -  1);
while (G__37871__i < G__37871__a.length) {G__37871__a[G__37871__i] = arguments[G__37871__i + 1]; ++G__37871__i;}
  p__37868 = new cljs.core.IndexedSeq(G__37871__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__37868);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37872){
var ports = cljs.core.first(arglist__37872);
var p__37868 = cljs.core.rest(arglist__37872);
return alts_BANG___delegate(ports,p__37868);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__26217__auto___37967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___37967){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___37967){
return (function (state_37943){
var state_val_37944 = (state_37943[(1)]);
if((state_val_37944 === (7))){
var inst_37939 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
var statearr_37945_37968 = state_37943__$1;
(statearr_37945_37968[(2)] = inst_37939);

(statearr_37945_37968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (1))){
var state_37943__$1 = state_37943;
var statearr_37946_37969 = state_37943__$1;
(statearr_37946_37969[(2)] = null);

(statearr_37946_37969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (4))){
var inst_37922 = (state_37943[(7)]);
var inst_37922__$1 = (state_37943[(2)]);
var inst_37923 = (inst_37922__$1 == null);
var state_37943__$1 = (function (){var statearr_37947 = state_37943;
(statearr_37947[(7)] = inst_37922__$1);

return statearr_37947;
})();
if(cljs.core.truth_(inst_37923)){
var statearr_37948_37970 = state_37943__$1;
(statearr_37948_37970[(1)] = (5));

} else {
var statearr_37949_37971 = state_37943__$1;
(statearr_37949_37971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (13))){
var state_37943__$1 = state_37943;
var statearr_37950_37972 = state_37943__$1;
(statearr_37950_37972[(2)] = null);

(statearr_37950_37972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (6))){
var inst_37922 = (state_37943[(7)]);
var state_37943__$1 = state_37943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37943__$1,(11),to,inst_37922);
} else {
if((state_val_37944 === (3))){
var inst_37941 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37943__$1,inst_37941);
} else {
if((state_val_37944 === (12))){
var state_37943__$1 = state_37943;
var statearr_37951_37973 = state_37943__$1;
(statearr_37951_37973[(2)] = null);

(statearr_37951_37973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (2))){
var state_37943__$1 = state_37943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37943__$1,(4),from);
} else {
if((state_val_37944 === (11))){
var inst_37932 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
if(cljs.core.truth_(inst_37932)){
var statearr_37952_37974 = state_37943__$1;
(statearr_37952_37974[(1)] = (12));

} else {
var statearr_37953_37975 = state_37943__$1;
(statearr_37953_37975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (9))){
var state_37943__$1 = state_37943;
var statearr_37954_37976 = state_37943__$1;
(statearr_37954_37976[(2)] = null);

(statearr_37954_37976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (5))){
var state_37943__$1 = state_37943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37955_37977 = state_37943__$1;
(statearr_37955_37977[(1)] = (8));

} else {
var statearr_37956_37978 = state_37943__$1;
(statearr_37956_37978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (14))){
var inst_37937 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
var statearr_37957_37979 = state_37943__$1;
(statearr_37957_37979[(2)] = inst_37937);

(statearr_37957_37979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (10))){
var inst_37929 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
var statearr_37958_37980 = state_37943__$1;
(statearr_37958_37980[(2)] = inst_37929);

(statearr_37958_37980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (8))){
var inst_37926 = cljs.core.async.close_BANG_.call(null,to);
var state_37943__$1 = state_37943;
var statearr_37959_37981 = state_37943__$1;
(statearr_37959_37981[(2)] = inst_37926);

(statearr_37959_37981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___37967))
;
return ((function (switch__26161__auto__,c__26217__auto___37967){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_37963 = [null,null,null,null,null,null,null,null];
(statearr_37963[(0)] = state_machine__26162__auto__);

(statearr_37963[(1)] = (1));

return statearr_37963;
});
var state_machine__26162__auto____1 = (function (state_37943){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_37943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e37964){if((e37964 instanceof Object)){
var ex__26165__auto__ = e37964;
var statearr_37965_37982 = state_37943;
(statearr_37965_37982[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37983 = state_37943;
state_37943 = G__37983;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_37943){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_37943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___37967))
})();
var state__26219__auto__ = (function (){var statearr_37966 = f__26218__auto__.call(null);
(statearr_37966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___37967);

return statearr_37966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___37967))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38167){
var vec__38168 = p__38167;
var v = cljs.core.nth.call(null,vec__38168,(0),null);
var p = cljs.core.nth.call(null,vec__38168,(1),null);
var job = vec__38168;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26217__auto___38350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___38350,res,vec__38168,v,p,job,jobs,results){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___38350,res,vec__38168,v,p,job,jobs,results){
return (function (state_38173){
var state_val_38174 = (state_38173[(1)]);
if((state_val_38174 === (2))){
var inst_38170 = (state_38173[(2)]);
var inst_38171 = cljs.core.async.close_BANG_.call(null,res);
var state_38173__$1 = (function (){var statearr_38175 = state_38173;
(statearr_38175[(7)] = inst_38170);

return statearr_38175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38173__$1,inst_38171);
} else {
if((state_val_38174 === (1))){
var state_38173__$1 = state_38173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38173__$1,(2),res,v);
} else {
return null;
}
}
});})(c__26217__auto___38350,res,vec__38168,v,p,job,jobs,results))
;
return ((function (switch__26161__auto__,c__26217__auto___38350,res,vec__38168,v,p,job,jobs,results){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38179 = [null,null,null,null,null,null,null,null];
(statearr_38179[(0)] = state_machine__26162__auto__);

(statearr_38179[(1)] = (1));

return statearr_38179;
});
var state_machine__26162__auto____1 = (function (state_38173){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38180){if((e38180 instanceof Object)){
var ex__26165__auto__ = e38180;
var statearr_38181_38351 = state_38173;
(statearr_38181_38351[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38352 = state_38173;
state_38173 = G__38352;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38173){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___38350,res,vec__38168,v,p,job,jobs,results))
})();
var state__26219__auto__ = (function (){var statearr_38182 = f__26218__auto__.call(null);
(statearr_38182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___38350);

return statearr_38182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___38350,res,vec__38168,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38183){
var vec__38184 = p__38183;
var v = cljs.core.nth.call(null,vec__38184,(0),null);
var p = cljs.core.nth.call(null,vec__38184,(1),null);
var job = vec__38184;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__24431__auto___38353 = n;
var __38354 = (0);
while(true){
if((__38354 < n__24431__auto___38353)){
var G__38185_38355 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38185_38355) {
case "async":
var c__26217__auto___38357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38354,c__26217__auto___38357,G__38185_38355,n__24431__auto___38353,jobs,results,process,async){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (__38354,c__26217__auto___38357,G__38185_38355,n__24431__auto___38353,jobs,results,process,async){
return (function (state_38198){
var state_val_38199 = (state_38198[(1)]);
if((state_val_38199 === (7))){
var inst_38194 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
var statearr_38200_38358 = state_38198__$1;
(statearr_38200_38358[(2)] = inst_38194);

(statearr_38200_38358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (6))){
var state_38198__$1 = state_38198;
var statearr_38201_38359 = state_38198__$1;
(statearr_38201_38359[(2)] = null);

(statearr_38201_38359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (5))){
var state_38198__$1 = state_38198;
var statearr_38202_38360 = state_38198__$1;
(statearr_38202_38360[(2)] = null);

(statearr_38202_38360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (4))){
var inst_38188 = (state_38198[(2)]);
var inst_38189 = async.call(null,inst_38188);
var state_38198__$1 = state_38198;
if(cljs.core.truth_(inst_38189)){
var statearr_38203_38361 = state_38198__$1;
(statearr_38203_38361[(1)] = (5));

} else {
var statearr_38204_38362 = state_38198__$1;
(statearr_38204_38362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (3))){
var inst_38196 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38198__$1,inst_38196);
} else {
if((state_val_38199 === (2))){
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38198__$1,(4),jobs);
} else {
if((state_val_38199 === (1))){
var state_38198__$1 = state_38198;
var statearr_38205_38363 = state_38198__$1;
(statearr_38205_38363[(2)] = null);

(statearr_38205_38363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38354,c__26217__auto___38357,G__38185_38355,n__24431__auto___38353,jobs,results,process,async))
;
return ((function (__38354,switch__26161__auto__,c__26217__auto___38357,G__38185_38355,n__24431__auto___38353,jobs,results,process,async){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38209 = [null,null,null,null,null,null,null];
(statearr_38209[(0)] = state_machine__26162__auto__);

(statearr_38209[(1)] = (1));

return statearr_38209;
});
var state_machine__26162__auto____1 = (function (state_38198){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38210){if((e38210 instanceof Object)){
var ex__26165__auto__ = e38210;
var statearr_38211_38364 = state_38198;
(statearr_38211_38364[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38365 = state_38198;
state_38198 = G__38365;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38198){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(__38354,switch__26161__auto__,c__26217__auto___38357,G__38185_38355,n__24431__auto___38353,jobs,results,process,async))
})();
var state__26219__auto__ = (function (){var statearr_38212 = f__26218__auto__.call(null);
(statearr_38212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___38357);

return statearr_38212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(__38354,c__26217__auto___38357,G__38185_38355,n__24431__auto___38353,jobs,results,process,async))
);


break;
case "compute":
var c__26217__auto___38366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38354,c__26217__auto___38366,G__38185_38355,n__24431__auto___38353,jobs,results,process,async){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (__38354,c__26217__auto___38366,G__38185_38355,n__24431__auto___38353,jobs,results,process,async){
return (function (state_38225){
var state_val_38226 = (state_38225[(1)]);
if((state_val_38226 === (7))){
var inst_38221 = (state_38225[(2)]);
var state_38225__$1 = state_38225;
var statearr_38227_38367 = state_38225__$1;
(statearr_38227_38367[(2)] = inst_38221);

(statearr_38227_38367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38226 === (6))){
var state_38225__$1 = state_38225;
var statearr_38228_38368 = state_38225__$1;
(statearr_38228_38368[(2)] = null);

(statearr_38228_38368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38226 === (5))){
var state_38225__$1 = state_38225;
var statearr_38229_38369 = state_38225__$1;
(statearr_38229_38369[(2)] = null);

(statearr_38229_38369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38226 === (4))){
var inst_38215 = (state_38225[(2)]);
var inst_38216 = process.call(null,inst_38215);
var state_38225__$1 = state_38225;
if(cljs.core.truth_(inst_38216)){
var statearr_38230_38370 = state_38225__$1;
(statearr_38230_38370[(1)] = (5));

} else {
var statearr_38231_38371 = state_38225__$1;
(statearr_38231_38371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38226 === (3))){
var inst_38223 = (state_38225[(2)]);
var state_38225__$1 = state_38225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38225__$1,inst_38223);
} else {
if((state_val_38226 === (2))){
var state_38225__$1 = state_38225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38225__$1,(4),jobs);
} else {
if((state_val_38226 === (1))){
var state_38225__$1 = state_38225;
var statearr_38232_38372 = state_38225__$1;
(statearr_38232_38372[(2)] = null);

(statearr_38232_38372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38354,c__26217__auto___38366,G__38185_38355,n__24431__auto___38353,jobs,results,process,async))
;
return ((function (__38354,switch__26161__auto__,c__26217__auto___38366,G__38185_38355,n__24431__auto___38353,jobs,results,process,async){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38236 = [null,null,null,null,null,null,null];
(statearr_38236[(0)] = state_machine__26162__auto__);

(statearr_38236[(1)] = (1));

return statearr_38236;
});
var state_machine__26162__auto____1 = (function (state_38225){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38237){if((e38237 instanceof Object)){
var ex__26165__auto__ = e38237;
var statearr_38238_38373 = state_38225;
(statearr_38238_38373[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38374 = state_38225;
state_38225 = G__38374;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38225){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(__38354,switch__26161__auto__,c__26217__auto___38366,G__38185_38355,n__24431__auto___38353,jobs,results,process,async))
})();
var state__26219__auto__ = (function (){var statearr_38239 = f__26218__auto__.call(null);
(statearr_38239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___38366);

return statearr_38239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(__38354,c__26217__auto___38366,G__38185_38355,n__24431__auto___38353,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38375 = (__38354 + (1));
__38354 = G__38375;
continue;
} else {
}
break;
}

var c__26217__auto___38376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___38376,jobs,results,process,async){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___38376,jobs,results,process,async){
return (function (state_38261){
var state_val_38262 = (state_38261[(1)]);
if((state_val_38262 === (9))){
var inst_38254 = (state_38261[(2)]);
var state_38261__$1 = (function (){var statearr_38263 = state_38261;
(statearr_38263[(7)] = inst_38254);

return statearr_38263;
})();
var statearr_38264_38377 = state_38261__$1;
(statearr_38264_38377[(2)] = null);

(statearr_38264_38377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (8))){
var inst_38247 = (state_38261[(8)]);
var inst_38252 = (state_38261[(2)]);
var state_38261__$1 = (function (){var statearr_38265 = state_38261;
(statearr_38265[(9)] = inst_38252);

return statearr_38265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38261__$1,(9),results,inst_38247);
} else {
if((state_val_38262 === (7))){
var inst_38257 = (state_38261[(2)]);
var state_38261__$1 = state_38261;
var statearr_38266_38378 = state_38261__$1;
(statearr_38266_38378[(2)] = inst_38257);

(statearr_38266_38378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (6))){
var inst_38242 = (state_38261[(10)]);
var inst_38247 = (state_38261[(8)]);
var inst_38247__$1 = cljs.core.async.chan.call(null,(1));
var inst_38248 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38249 = [inst_38242,inst_38247__$1];
var inst_38250 = (new cljs.core.PersistentVector(null,2,(5),inst_38248,inst_38249,null));
var state_38261__$1 = (function (){var statearr_38267 = state_38261;
(statearr_38267[(8)] = inst_38247__$1);

return statearr_38267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38261__$1,(8),jobs,inst_38250);
} else {
if((state_val_38262 === (5))){
var inst_38245 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38261__$1 = state_38261;
var statearr_38268_38379 = state_38261__$1;
(statearr_38268_38379[(2)] = inst_38245);

(statearr_38268_38379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (4))){
var inst_38242 = (state_38261[(10)]);
var inst_38242__$1 = (state_38261[(2)]);
var inst_38243 = (inst_38242__$1 == null);
var state_38261__$1 = (function (){var statearr_38269 = state_38261;
(statearr_38269[(10)] = inst_38242__$1);

return statearr_38269;
})();
if(cljs.core.truth_(inst_38243)){
var statearr_38270_38380 = state_38261__$1;
(statearr_38270_38380[(1)] = (5));

} else {
var statearr_38271_38381 = state_38261__$1;
(statearr_38271_38381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (3))){
var inst_38259 = (state_38261[(2)]);
var state_38261__$1 = state_38261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38261__$1,inst_38259);
} else {
if((state_val_38262 === (2))){
var state_38261__$1 = state_38261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38261__$1,(4),from);
} else {
if((state_val_38262 === (1))){
var state_38261__$1 = state_38261;
var statearr_38272_38382 = state_38261__$1;
(statearr_38272_38382[(2)] = null);

(statearr_38272_38382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___38376,jobs,results,process,async))
;
return ((function (switch__26161__auto__,c__26217__auto___38376,jobs,results,process,async){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38276[(0)] = state_machine__26162__auto__);

(statearr_38276[(1)] = (1));

return statearr_38276;
});
var state_machine__26162__auto____1 = (function (state_38261){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38277){if((e38277 instanceof Object)){
var ex__26165__auto__ = e38277;
var statearr_38278_38383 = state_38261;
(statearr_38278_38383[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38384 = state_38261;
state_38261 = G__38384;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38261){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___38376,jobs,results,process,async))
})();
var state__26219__auto__ = (function (){var statearr_38279 = f__26218__auto__.call(null);
(statearr_38279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___38376);

return statearr_38279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___38376,jobs,results,process,async))
);


var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__,jobs,results,process,async){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__,jobs,results,process,async){
return (function (state_38317){
var state_val_38318 = (state_38317[(1)]);
if((state_val_38318 === (7))){
var inst_38313 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38319_38385 = state_38317__$1;
(statearr_38319_38385[(2)] = inst_38313);

(statearr_38319_38385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (20))){
var state_38317__$1 = state_38317;
var statearr_38320_38386 = state_38317__$1;
(statearr_38320_38386[(2)] = null);

(statearr_38320_38386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (1))){
var state_38317__$1 = state_38317;
var statearr_38321_38387 = state_38317__$1;
(statearr_38321_38387[(2)] = null);

(statearr_38321_38387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (4))){
var inst_38282 = (state_38317[(7)]);
var inst_38282__$1 = (state_38317[(2)]);
var inst_38283 = (inst_38282__$1 == null);
var state_38317__$1 = (function (){var statearr_38322 = state_38317;
(statearr_38322[(7)] = inst_38282__$1);

return statearr_38322;
})();
if(cljs.core.truth_(inst_38283)){
var statearr_38323_38388 = state_38317__$1;
(statearr_38323_38388[(1)] = (5));

} else {
var statearr_38324_38389 = state_38317__$1;
(statearr_38324_38389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (15))){
var inst_38295 = (state_38317[(8)]);
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38317__$1,(18),to,inst_38295);
} else {
if((state_val_38318 === (21))){
var inst_38308 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38325_38390 = state_38317__$1;
(statearr_38325_38390[(2)] = inst_38308);

(statearr_38325_38390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (13))){
var inst_38310 = (state_38317[(2)]);
var state_38317__$1 = (function (){var statearr_38326 = state_38317;
(statearr_38326[(9)] = inst_38310);

return statearr_38326;
})();
var statearr_38327_38391 = state_38317__$1;
(statearr_38327_38391[(2)] = null);

(statearr_38327_38391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (6))){
var inst_38282 = (state_38317[(7)]);
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38317__$1,(11),inst_38282);
} else {
if((state_val_38318 === (17))){
var inst_38303 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
if(cljs.core.truth_(inst_38303)){
var statearr_38328_38392 = state_38317__$1;
(statearr_38328_38392[(1)] = (19));

} else {
var statearr_38329_38393 = state_38317__$1;
(statearr_38329_38393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (3))){
var inst_38315 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38317__$1,inst_38315);
} else {
if((state_val_38318 === (12))){
var inst_38292 = (state_38317[(10)]);
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38317__$1,(14),inst_38292);
} else {
if((state_val_38318 === (2))){
var state_38317__$1 = state_38317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38317__$1,(4),results);
} else {
if((state_val_38318 === (19))){
var state_38317__$1 = state_38317;
var statearr_38330_38394 = state_38317__$1;
(statearr_38330_38394[(2)] = null);

(statearr_38330_38394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (11))){
var inst_38292 = (state_38317[(2)]);
var state_38317__$1 = (function (){var statearr_38331 = state_38317;
(statearr_38331[(10)] = inst_38292);

return statearr_38331;
})();
var statearr_38332_38395 = state_38317__$1;
(statearr_38332_38395[(2)] = null);

(statearr_38332_38395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (9))){
var state_38317__$1 = state_38317;
var statearr_38333_38396 = state_38317__$1;
(statearr_38333_38396[(2)] = null);

(statearr_38333_38396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (5))){
var state_38317__$1 = state_38317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38334_38397 = state_38317__$1;
(statearr_38334_38397[(1)] = (8));

} else {
var statearr_38335_38398 = state_38317__$1;
(statearr_38335_38398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (14))){
var inst_38297 = (state_38317[(11)]);
var inst_38295 = (state_38317[(8)]);
var inst_38295__$1 = (state_38317[(2)]);
var inst_38296 = (inst_38295__$1 == null);
var inst_38297__$1 = cljs.core.not.call(null,inst_38296);
var state_38317__$1 = (function (){var statearr_38336 = state_38317;
(statearr_38336[(11)] = inst_38297__$1);

(statearr_38336[(8)] = inst_38295__$1);

return statearr_38336;
})();
if(inst_38297__$1){
var statearr_38337_38399 = state_38317__$1;
(statearr_38337_38399[(1)] = (15));

} else {
var statearr_38338_38400 = state_38317__$1;
(statearr_38338_38400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (16))){
var inst_38297 = (state_38317[(11)]);
var state_38317__$1 = state_38317;
var statearr_38339_38401 = state_38317__$1;
(statearr_38339_38401[(2)] = inst_38297);

(statearr_38339_38401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (10))){
var inst_38289 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38340_38402 = state_38317__$1;
(statearr_38340_38402[(2)] = inst_38289);

(statearr_38340_38402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (18))){
var inst_38300 = (state_38317[(2)]);
var state_38317__$1 = state_38317;
var statearr_38341_38403 = state_38317__$1;
(statearr_38341_38403[(2)] = inst_38300);

(statearr_38341_38403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38318 === (8))){
var inst_38286 = cljs.core.async.close_BANG_.call(null,to);
var state_38317__$1 = state_38317;
var statearr_38342_38404 = state_38317__$1;
(statearr_38342_38404[(2)] = inst_38286);

(statearr_38342_38404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto__,jobs,results,process,async))
;
return ((function (switch__26161__auto__,c__26217__auto__,jobs,results,process,async){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38346[(0)] = state_machine__26162__auto__);

(statearr_38346[(1)] = (1));

return statearr_38346;
});
var state_machine__26162__auto____1 = (function (state_38317){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38347){if((e38347 instanceof Object)){
var ex__26165__auto__ = e38347;
var statearr_38348_38405 = state_38317;
(statearr_38348_38405[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38406 = state_38317;
state_38317 = G__38406;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38317){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__,jobs,results,process,async))
})();
var state__26219__auto__ = (function (){var statearr_38349 = f__26218__auto__.call(null);
(statearr_38349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_38349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__,jobs,results,process,async))
);

return c__26217__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26217__auto___38507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___38507,tc,fc){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___38507,tc,fc){
return (function (state_38482){
var state_val_38483 = (state_38482[(1)]);
if((state_val_38483 === (7))){
var inst_38478 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
var statearr_38484_38508 = state_38482__$1;
(statearr_38484_38508[(2)] = inst_38478);

(statearr_38484_38508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (1))){
var state_38482__$1 = state_38482;
var statearr_38485_38509 = state_38482__$1;
(statearr_38485_38509[(2)] = null);

(statearr_38485_38509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (4))){
var inst_38459 = (state_38482[(7)]);
var inst_38459__$1 = (state_38482[(2)]);
var inst_38460 = (inst_38459__$1 == null);
var state_38482__$1 = (function (){var statearr_38486 = state_38482;
(statearr_38486[(7)] = inst_38459__$1);

return statearr_38486;
})();
if(cljs.core.truth_(inst_38460)){
var statearr_38487_38510 = state_38482__$1;
(statearr_38487_38510[(1)] = (5));

} else {
var statearr_38488_38511 = state_38482__$1;
(statearr_38488_38511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (13))){
var state_38482__$1 = state_38482;
var statearr_38489_38512 = state_38482__$1;
(statearr_38489_38512[(2)] = null);

(statearr_38489_38512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (6))){
var inst_38459 = (state_38482[(7)]);
var inst_38465 = p.call(null,inst_38459);
var state_38482__$1 = state_38482;
if(cljs.core.truth_(inst_38465)){
var statearr_38490_38513 = state_38482__$1;
(statearr_38490_38513[(1)] = (9));

} else {
var statearr_38491_38514 = state_38482__$1;
(statearr_38491_38514[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (3))){
var inst_38480 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38482__$1,inst_38480);
} else {
if((state_val_38483 === (12))){
var state_38482__$1 = state_38482;
var statearr_38492_38515 = state_38482__$1;
(statearr_38492_38515[(2)] = null);

(statearr_38492_38515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (2))){
var state_38482__$1 = state_38482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38482__$1,(4),ch);
} else {
if((state_val_38483 === (11))){
var inst_38459 = (state_38482[(7)]);
var inst_38469 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38482__$1,(8),inst_38469,inst_38459);
} else {
if((state_val_38483 === (9))){
var state_38482__$1 = state_38482;
var statearr_38493_38516 = state_38482__$1;
(statearr_38493_38516[(2)] = tc);

(statearr_38493_38516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (5))){
var inst_38462 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38463 = cljs.core.async.close_BANG_.call(null,fc);
var state_38482__$1 = (function (){var statearr_38494 = state_38482;
(statearr_38494[(8)] = inst_38462);

return statearr_38494;
})();
var statearr_38495_38517 = state_38482__$1;
(statearr_38495_38517[(2)] = inst_38463);

(statearr_38495_38517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (14))){
var inst_38476 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
var statearr_38496_38518 = state_38482__$1;
(statearr_38496_38518[(2)] = inst_38476);

(statearr_38496_38518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (10))){
var state_38482__$1 = state_38482;
var statearr_38497_38519 = state_38482__$1;
(statearr_38497_38519[(2)] = fc);

(statearr_38497_38519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38483 === (8))){
var inst_38471 = (state_38482[(2)]);
var state_38482__$1 = state_38482;
if(cljs.core.truth_(inst_38471)){
var statearr_38498_38520 = state_38482__$1;
(statearr_38498_38520[(1)] = (12));

} else {
var statearr_38499_38521 = state_38482__$1;
(statearr_38499_38521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___38507,tc,fc))
;
return ((function (switch__26161__auto__,c__26217__auto___38507,tc,fc){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38503 = [null,null,null,null,null,null,null,null,null];
(statearr_38503[(0)] = state_machine__26162__auto__);

(statearr_38503[(1)] = (1));

return statearr_38503;
});
var state_machine__26162__auto____1 = (function (state_38482){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38504){if((e38504 instanceof Object)){
var ex__26165__auto__ = e38504;
var statearr_38505_38522 = state_38482;
(statearr_38505_38522[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38523 = state_38482;
state_38482 = G__38523;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38482){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___38507,tc,fc))
})();
var state__26219__auto__ = (function (){var statearr_38506 = f__26218__auto__.call(null);
(statearr_38506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___38507);

return statearr_38506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___38507,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__){
return (function (state_38570){
var state_val_38571 = (state_38570[(1)]);
if((state_val_38571 === (7))){
var inst_38566 = (state_38570[(2)]);
var state_38570__$1 = state_38570;
var statearr_38572_38588 = state_38570__$1;
(statearr_38572_38588[(2)] = inst_38566);

(statearr_38572_38588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38571 === (6))){
var inst_38556 = (state_38570[(7)]);
var inst_38559 = (state_38570[(8)]);
var inst_38563 = f.call(null,inst_38556,inst_38559);
var inst_38556__$1 = inst_38563;
var state_38570__$1 = (function (){var statearr_38573 = state_38570;
(statearr_38573[(7)] = inst_38556__$1);

return statearr_38573;
})();
var statearr_38574_38589 = state_38570__$1;
(statearr_38574_38589[(2)] = null);

(statearr_38574_38589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38571 === (5))){
var inst_38556 = (state_38570[(7)]);
var state_38570__$1 = state_38570;
var statearr_38575_38590 = state_38570__$1;
(statearr_38575_38590[(2)] = inst_38556);

(statearr_38575_38590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38571 === (4))){
var inst_38559 = (state_38570[(8)]);
var inst_38559__$1 = (state_38570[(2)]);
var inst_38560 = (inst_38559__$1 == null);
var state_38570__$1 = (function (){var statearr_38576 = state_38570;
(statearr_38576[(8)] = inst_38559__$1);

return statearr_38576;
})();
if(cljs.core.truth_(inst_38560)){
var statearr_38577_38591 = state_38570__$1;
(statearr_38577_38591[(1)] = (5));

} else {
var statearr_38578_38592 = state_38570__$1;
(statearr_38578_38592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38571 === (3))){
var inst_38568 = (state_38570[(2)]);
var state_38570__$1 = state_38570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38570__$1,inst_38568);
} else {
if((state_val_38571 === (2))){
var state_38570__$1 = state_38570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38570__$1,(4),ch);
} else {
if((state_val_38571 === (1))){
var inst_38556 = init;
var state_38570__$1 = (function (){var statearr_38579 = state_38570;
(statearr_38579[(7)] = inst_38556);

return statearr_38579;
})();
var statearr_38580_38593 = state_38570__$1;
(statearr_38580_38593[(2)] = null);

(statearr_38580_38593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26217__auto__))
;
return ((function (switch__26161__auto__,c__26217__auto__){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38584 = [null,null,null,null,null,null,null,null,null];
(statearr_38584[(0)] = state_machine__26162__auto__);

(statearr_38584[(1)] = (1));

return statearr_38584;
});
var state_machine__26162__auto____1 = (function (state_38570){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38585){if((e38585 instanceof Object)){
var ex__26165__auto__ = e38585;
var statearr_38586_38594 = state_38570;
(statearr_38586_38594[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38595 = state_38570;
state_38570 = G__38595;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38570){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__))
})();
var state__26219__auto__ = (function (){var statearr_38587 = f__26218__auto__.call(null);
(statearr_38587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_38587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__))
);

return c__26217__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__){
return (function (state_38669){
var state_val_38670 = (state_38669[(1)]);
if((state_val_38670 === (7))){
var inst_38651 = (state_38669[(2)]);
var state_38669__$1 = state_38669;
var statearr_38671_38694 = state_38669__$1;
(statearr_38671_38694[(2)] = inst_38651);

(statearr_38671_38694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (1))){
var inst_38645 = cljs.core.seq.call(null,coll);
var inst_38646 = inst_38645;
var state_38669__$1 = (function (){var statearr_38672 = state_38669;
(statearr_38672[(7)] = inst_38646);

return statearr_38672;
})();
var statearr_38673_38695 = state_38669__$1;
(statearr_38673_38695[(2)] = null);

(statearr_38673_38695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (4))){
var inst_38646 = (state_38669[(7)]);
var inst_38649 = cljs.core.first.call(null,inst_38646);
var state_38669__$1 = state_38669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38669__$1,(7),ch,inst_38649);
} else {
if((state_val_38670 === (13))){
var inst_38663 = (state_38669[(2)]);
var state_38669__$1 = state_38669;
var statearr_38674_38696 = state_38669__$1;
(statearr_38674_38696[(2)] = inst_38663);

(statearr_38674_38696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (6))){
var inst_38654 = (state_38669[(2)]);
var state_38669__$1 = state_38669;
if(cljs.core.truth_(inst_38654)){
var statearr_38675_38697 = state_38669__$1;
(statearr_38675_38697[(1)] = (8));

} else {
var statearr_38676_38698 = state_38669__$1;
(statearr_38676_38698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (3))){
var inst_38667 = (state_38669[(2)]);
var state_38669__$1 = state_38669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38669__$1,inst_38667);
} else {
if((state_val_38670 === (12))){
var state_38669__$1 = state_38669;
var statearr_38677_38699 = state_38669__$1;
(statearr_38677_38699[(2)] = null);

(statearr_38677_38699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (2))){
var inst_38646 = (state_38669[(7)]);
var state_38669__$1 = state_38669;
if(cljs.core.truth_(inst_38646)){
var statearr_38678_38700 = state_38669__$1;
(statearr_38678_38700[(1)] = (4));

} else {
var statearr_38679_38701 = state_38669__$1;
(statearr_38679_38701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (11))){
var inst_38660 = cljs.core.async.close_BANG_.call(null,ch);
var state_38669__$1 = state_38669;
var statearr_38680_38702 = state_38669__$1;
(statearr_38680_38702[(2)] = inst_38660);

(statearr_38680_38702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (9))){
var state_38669__$1 = state_38669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38681_38703 = state_38669__$1;
(statearr_38681_38703[(1)] = (11));

} else {
var statearr_38682_38704 = state_38669__$1;
(statearr_38682_38704[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (5))){
var inst_38646 = (state_38669[(7)]);
var state_38669__$1 = state_38669;
var statearr_38683_38705 = state_38669__$1;
(statearr_38683_38705[(2)] = inst_38646);

(statearr_38683_38705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (10))){
var inst_38665 = (state_38669[(2)]);
var state_38669__$1 = state_38669;
var statearr_38684_38706 = state_38669__$1;
(statearr_38684_38706[(2)] = inst_38665);

(statearr_38684_38706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38670 === (8))){
var inst_38646 = (state_38669[(7)]);
var inst_38656 = cljs.core.next.call(null,inst_38646);
var inst_38646__$1 = inst_38656;
var state_38669__$1 = (function (){var statearr_38685 = state_38669;
(statearr_38685[(7)] = inst_38646__$1);

return statearr_38685;
})();
var statearr_38686_38707 = state_38669__$1;
(statearr_38686_38707[(2)] = null);

(statearr_38686_38707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto__))
;
return ((function (switch__26161__auto__,c__26217__auto__){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_38690 = [null,null,null,null,null,null,null,null];
(statearr_38690[(0)] = state_machine__26162__auto__);

(statearr_38690[(1)] = (1));

return statearr_38690;
});
var state_machine__26162__auto____1 = (function (state_38669){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_38669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e38691){if((e38691 instanceof Object)){
var ex__26165__auto__ = e38691;
var statearr_38692_38708 = state_38669;
(statearr_38692_38708[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38709 = state_38669;
state_38669 = G__38709;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_38669){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_38669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__))
})();
var state__26219__auto__ = (function (){var statearr_38693 = f__26218__auto__.call(null);
(statearr_38693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_38693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__))
);

return c__26217__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj38711 = {};
return obj38711;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__23532__auto__ = _;
if(and__23532__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__23532__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24188__auto__ = (((_ == null))?null:_);
return (function (){var or__23544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj38713 = {};
return obj38713;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t38935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38935 = (function (cs,ch,mult,meta38936){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38936 = meta38936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38935.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t38935.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t38935.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t38935.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t38935.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t38935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38937){
var self__ = this;
var _38937__$1 = this;
return self__.meta38936;
});})(cs))
;

cljs.core.async.t38935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38937,meta38936__$1){
var self__ = this;
var _38937__$1 = this;
return (new cljs.core.async.t38935(self__.cs,self__.ch,self__.mult,meta38936__$1));
});})(cs))
;

cljs.core.async.t38935.cljs$lang$type = true;

cljs.core.async.t38935.cljs$lang$ctorStr = "cljs.core.async/t38935";

cljs.core.async.t38935.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t38935");
});})(cs))
;

cljs.core.async.__GT_t38935 = ((function (cs){
return (function __GT_t38935(cs__$1,ch__$1,mult__$1,meta38936){
return (new cljs.core.async.t38935(cs__$1,ch__$1,mult__$1,meta38936));
});})(cs))
;

}

return (new cljs.core.async.t38935(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26217__auto___39156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___39156,cs,m,dchan,dctr,done){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___39156,cs,m,dchan,dctr,done){
return (function (state_39068){
var state_val_39069 = (state_39068[(1)]);
if((state_val_39069 === (7))){
var inst_39064 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39070_39157 = state_39068__$1;
(statearr_39070_39157[(2)] = inst_39064);

(statearr_39070_39157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (20))){
var inst_38969 = (state_39068[(7)]);
var inst_38979 = cljs.core.first.call(null,inst_38969);
var inst_38980 = cljs.core.nth.call(null,inst_38979,(0),null);
var inst_38981 = cljs.core.nth.call(null,inst_38979,(1),null);
var state_39068__$1 = (function (){var statearr_39071 = state_39068;
(statearr_39071[(8)] = inst_38980);

return statearr_39071;
})();
if(cljs.core.truth_(inst_38981)){
var statearr_39072_39158 = state_39068__$1;
(statearr_39072_39158[(1)] = (22));

} else {
var statearr_39073_39159 = state_39068__$1;
(statearr_39073_39159[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (27))){
var inst_38940 = (state_39068[(9)]);
var inst_39009 = (state_39068[(10)]);
var inst_39011 = (state_39068[(11)]);
var inst_39016 = (state_39068[(12)]);
var inst_39016__$1 = cljs.core._nth.call(null,inst_39009,inst_39011);
var inst_39017 = cljs.core.async.put_BANG_.call(null,inst_39016__$1,inst_38940,done);
var state_39068__$1 = (function (){var statearr_39074 = state_39068;
(statearr_39074[(12)] = inst_39016__$1);

return statearr_39074;
})();
if(cljs.core.truth_(inst_39017)){
var statearr_39075_39160 = state_39068__$1;
(statearr_39075_39160[(1)] = (30));

} else {
var statearr_39076_39161 = state_39068__$1;
(statearr_39076_39161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (1))){
var state_39068__$1 = state_39068;
var statearr_39077_39162 = state_39068__$1;
(statearr_39077_39162[(2)] = null);

(statearr_39077_39162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (24))){
var inst_38969 = (state_39068[(7)]);
var inst_38986 = (state_39068[(2)]);
var inst_38987 = cljs.core.next.call(null,inst_38969);
var inst_38949 = inst_38987;
var inst_38950 = null;
var inst_38951 = (0);
var inst_38952 = (0);
var state_39068__$1 = (function (){var statearr_39078 = state_39068;
(statearr_39078[(13)] = inst_38951);

(statearr_39078[(14)] = inst_38950);

(statearr_39078[(15)] = inst_38952);

(statearr_39078[(16)] = inst_38949);

(statearr_39078[(17)] = inst_38986);

return statearr_39078;
})();
var statearr_39079_39163 = state_39068__$1;
(statearr_39079_39163[(2)] = null);

(statearr_39079_39163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (39))){
var state_39068__$1 = state_39068;
var statearr_39083_39164 = state_39068__$1;
(statearr_39083_39164[(2)] = null);

(statearr_39083_39164[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (4))){
var inst_38940 = (state_39068[(9)]);
var inst_38940__$1 = (state_39068[(2)]);
var inst_38941 = (inst_38940__$1 == null);
var state_39068__$1 = (function (){var statearr_39084 = state_39068;
(statearr_39084[(9)] = inst_38940__$1);

return statearr_39084;
})();
if(cljs.core.truth_(inst_38941)){
var statearr_39085_39165 = state_39068__$1;
(statearr_39085_39165[(1)] = (5));

} else {
var statearr_39086_39166 = state_39068__$1;
(statearr_39086_39166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (15))){
var inst_38951 = (state_39068[(13)]);
var inst_38950 = (state_39068[(14)]);
var inst_38952 = (state_39068[(15)]);
var inst_38949 = (state_39068[(16)]);
var inst_38965 = (state_39068[(2)]);
var inst_38966 = (inst_38952 + (1));
var tmp39080 = inst_38951;
var tmp39081 = inst_38950;
var tmp39082 = inst_38949;
var inst_38949__$1 = tmp39082;
var inst_38950__$1 = tmp39081;
var inst_38951__$1 = tmp39080;
var inst_38952__$1 = inst_38966;
var state_39068__$1 = (function (){var statearr_39087 = state_39068;
(statearr_39087[(13)] = inst_38951__$1);

(statearr_39087[(14)] = inst_38950__$1);

(statearr_39087[(15)] = inst_38952__$1);

(statearr_39087[(16)] = inst_38949__$1);

(statearr_39087[(18)] = inst_38965);

return statearr_39087;
})();
var statearr_39088_39167 = state_39068__$1;
(statearr_39088_39167[(2)] = null);

(statearr_39088_39167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (21))){
var inst_38990 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39092_39168 = state_39068__$1;
(statearr_39092_39168[(2)] = inst_38990);

(statearr_39092_39168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (31))){
var inst_39016 = (state_39068[(12)]);
var inst_39020 = done.call(null,null);
var inst_39021 = cljs.core.async.untap_STAR_.call(null,m,inst_39016);
var state_39068__$1 = (function (){var statearr_39093 = state_39068;
(statearr_39093[(19)] = inst_39020);

return statearr_39093;
})();
var statearr_39094_39169 = state_39068__$1;
(statearr_39094_39169[(2)] = inst_39021);

(statearr_39094_39169[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (32))){
var inst_39008 = (state_39068[(20)]);
var inst_39010 = (state_39068[(21)]);
var inst_39009 = (state_39068[(10)]);
var inst_39011 = (state_39068[(11)]);
var inst_39023 = (state_39068[(2)]);
var inst_39024 = (inst_39011 + (1));
var tmp39089 = inst_39008;
var tmp39090 = inst_39010;
var tmp39091 = inst_39009;
var inst_39008__$1 = tmp39089;
var inst_39009__$1 = tmp39091;
var inst_39010__$1 = tmp39090;
var inst_39011__$1 = inst_39024;
var state_39068__$1 = (function (){var statearr_39095 = state_39068;
(statearr_39095[(20)] = inst_39008__$1);

(statearr_39095[(21)] = inst_39010__$1);

(statearr_39095[(10)] = inst_39009__$1);

(statearr_39095[(22)] = inst_39023);

(statearr_39095[(11)] = inst_39011__$1);

return statearr_39095;
})();
var statearr_39096_39170 = state_39068__$1;
(statearr_39096_39170[(2)] = null);

(statearr_39096_39170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (40))){
var inst_39036 = (state_39068[(23)]);
var inst_39040 = done.call(null,null);
var inst_39041 = cljs.core.async.untap_STAR_.call(null,m,inst_39036);
var state_39068__$1 = (function (){var statearr_39097 = state_39068;
(statearr_39097[(24)] = inst_39040);

return statearr_39097;
})();
var statearr_39098_39171 = state_39068__$1;
(statearr_39098_39171[(2)] = inst_39041);

(statearr_39098_39171[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (33))){
var inst_39027 = (state_39068[(25)]);
var inst_39029 = cljs.core.chunked_seq_QMARK_.call(null,inst_39027);
var state_39068__$1 = state_39068;
if(inst_39029){
var statearr_39099_39172 = state_39068__$1;
(statearr_39099_39172[(1)] = (36));

} else {
var statearr_39100_39173 = state_39068__$1;
(statearr_39100_39173[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (13))){
var inst_38959 = (state_39068[(26)]);
var inst_38962 = cljs.core.async.close_BANG_.call(null,inst_38959);
var state_39068__$1 = state_39068;
var statearr_39101_39174 = state_39068__$1;
(statearr_39101_39174[(2)] = inst_38962);

(statearr_39101_39174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (22))){
var inst_38980 = (state_39068[(8)]);
var inst_38983 = cljs.core.async.close_BANG_.call(null,inst_38980);
var state_39068__$1 = state_39068;
var statearr_39102_39175 = state_39068__$1;
(statearr_39102_39175[(2)] = inst_38983);

(statearr_39102_39175[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (36))){
var inst_39027 = (state_39068[(25)]);
var inst_39031 = cljs.core.chunk_first.call(null,inst_39027);
var inst_39032 = cljs.core.chunk_rest.call(null,inst_39027);
var inst_39033 = cljs.core.count.call(null,inst_39031);
var inst_39008 = inst_39032;
var inst_39009 = inst_39031;
var inst_39010 = inst_39033;
var inst_39011 = (0);
var state_39068__$1 = (function (){var statearr_39103 = state_39068;
(statearr_39103[(20)] = inst_39008);

(statearr_39103[(21)] = inst_39010);

(statearr_39103[(10)] = inst_39009);

(statearr_39103[(11)] = inst_39011);

return statearr_39103;
})();
var statearr_39104_39176 = state_39068__$1;
(statearr_39104_39176[(2)] = null);

(statearr_39104_39176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (41))){
var inst_39027 = (state_39068[(25)]);
var inst_39043 = (state_39068[(2)]);
var inst_39044 = cljs.core.next.call(null,inst_39027);
var inst_39008 = inst_39044;
var inst_39009 = null;
var inst_39010 = (0);
var inst_39011 = (0);
var state_39068__$1 = (function (){var statearr_39105 = state_39068;
(statearr_39105[(20)] = inst_39008);

(statearr_39105[(21)] = inst_39010);

(statearr_39105[(10)] = inst_39009);

(statearr_39105[(27)] = inst_39043);

(statearr_39105[(11)] = inst_39011);

return statearr_39105;
})();
var statearr_39106_39177 = state_39068__$1;
(statearr_39106_39177[(2)] = null);

(statearr_39106_39177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (43))){
var state_39068__$1 = state_39068;
var statearr_39107_39178 = state_39068__$1;
(statearr_39107_39178[(2)] = null);

(statearr_39107_39178[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (29))){
var inst_39052 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39108_39179 = state_39068__$1;
(statearr_39108_39179[(2)] = inst_39052);

(statearr_39108_39179[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (44))){
var inst_39061 = (state_39068[(2)]);
var state_39068__$1 = (function (){var statearr_39109 = state_39068;
(statearr_39109[(28)] = inst_39061);

return statearr_39109;
})();
var statearr_39110_39180 = state_39068__$1;
(statearr_39110_39180[(2)] = null);

(statearr_39110_39180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (6))){
var inst_39000 = (state_39068[(29)]);
var inst_38999 = cljs.core.deref.call(null,cs);
var inst_39000__$1 = cljs.core.keys.call(null,inst_38999);
var inst_39001 = cljs.core.count.call(null,inst_39000__$1);
var inst_39002 = cljs.core.reset_BANG_.call(null,dctr,inst_39001);
var inst_39007 = cljs.core.seq.call(null,inst_39000__$1);
var inst_39008 = inst_39007;
var inst_39009 = null;
var inst_39010 = (0);
var inst_39011 = (0);
var state_39068__$1 = (function (){var statearr_39111 = state_39068;
(statearr_39111[(20)] = inst_39008);

(statearr_39111[(29)] = inst_39000__$1);

(statearr_39111[(21)] = inst_39010);

(statearr_39111[(30)] = inst_39002);

(statearr_39111[(10)] = inst_39009);

(statearr_39111[(11)] = inst_39011);

return statearr_39111;
})();
var statearr_39112_39181 = state_39068__$1;
(statearr_39112_39181[(2)] = null);

(statearr_39112_39181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (28))){
var inst_39008 = (state_39068[(20)]);
var inst_39027 = (state_39068[(25)]);
var inst_39027__$1 = cljs.core.seq.call(null,inst_39008);
var state_39068__$1 = (function (){var statearr_39113 = state_39068;
(statearr_39113[(25)] = inst_39027__$1);

return statearr_39113;
})();
if(inst_39027__$1){
var statearr_39114_39182 = state_39068__$1;
(statearr_39114_39182[(1)] = (33));

} else {
var statearr_39115_39183 = state_39068__$1;
(statearr_39115_39183[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (25))){
var inst_39010 = (state_39068[(21)]);
var inst_39011 = (state_39068[(11)]);
var inst_39013 = (inst_39011 < inst_39010);
var inst_39014 = inst_39013;
var state_39068__$1 = state_39068;
if(cljs.core.truth_(inst_39014)){
var statearr_39116_39184 = state_39068__$1;
(statearr_39116_39184[(1)] = (27));

} else {
var statearr_39117_39185 = state_39068__$1;
(statearr_39117_39185[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (34))){
var state_39068__$1 = state_39068;
var statearr_39118_39186 = state_39068__$1;
(statearr_39118_39186[(2)] = null);

(statearr_39118_39186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (17))){
var state_39068__$1 = state_39068;
var statearr_39119_39187 = state_39068__$1;
(statearr_39119_39187[(2)] = null);

(statearr_39119_39187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (3))){
var inst_39066 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39068__$1,inst_39066);
} else {
if((state_val_39069 === (12))){
var inst_38995 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39120_39188 = state_39068__$1;
(statearr_39120_39188[(2)] = inst_38995);

(statearr_39120_39188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (2))){
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39068__$1,(4),ch);
} else {
if((state_val_39069 === (23))){
var state_39068__$1 = state_39068;
var statearr_39121_39189 = state_39068__$1;
(statearr_39121_39189[(2)] = null);

(statearr_39121_39189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (35))){
var inst_39050 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39122_39190 = state_39068__$1;
(statearr_39122_39190[(2)] = inst_39050);

(statearr_39122_39190[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (19))){
var inst_38969 = (state_39068[(7)]);
var inst_38973 = cljs.core.chunk_first.call(null,inst_38969);
var inst_38974 = cljs.core.chunk_rest.call(null,inst_38969);
var inst_38975 = cljs.core.count.call(null,inst_38973);
var inst_38949 = inst_38974;
var inst_38950 = inst_38973;
var inst_38951 = inst_38975;
var inst_38952 = (0);
var state_39068__$1 = (function (){var statearr_39123 = state_39068;
(statearr_39123[(13)] = inst_38951);

(statearr_39123[(14)] = inst_38950);

(statearr_39123[(15)] = inst_38952);

(statearr_39123[(16)] = inst_38949);

return statearr_39123;
})();
var statearr_39124_39191 = state_39068__$1;
(statearr_39124_39191[(2)] = null);

(statearr_39124_39191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (11))){
var inst_38969 = (state_39068[(7)]);
var inst_38949 = (state_39068[(16)]);
var inst_38969__$1 = cljs.core.seq.call(null,inst_38949);
var state_39068__$1 = (function (){var statearr_39125 = state_39068;
(statearr_39125[(7)] = inst_38969__$1);

return statearr_39125;
})();
if(inst_38969__$1){
var statearr_39126_39192 = state_39068__$1;
(statearr_39126_39192[(1)] = (16));

} else {
var statearr_39127_39193 = state_39068__$1;
(statearr_39127_39193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (9))){
var inst_38997 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39128_39194 = state_39068__$1;
(statearr_39128_39194[(2)] = inst_38997);

(statearr_39128_39194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (5))){
var inst_38947 = cljs.core.deref.call(null,cs);
var inst_38948 = cljs.core.seq.call(null,inst_38947);
var inst_38949 = inst_38948;
var inst_38950 = null;
var inst_38951 = (0);
var inst_38952 = (0);
var state_39068__$1 = (function (){var statearr_39129 = state_39068;
(statearr_39129[(13)] = inst_38951);

(statearr_39129[(14)] = inst_38950);

(statearr_39129[(15)] = inst_38952);

(statearr_39129[(16)] = inst_38949);

return statearr_39129;
})();
var statearr_39130_39195 = state_39068__$1;
(statearr_39130_39195[(2)] = null);

(statearr_39130_39195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (14))){
var state_39068__$1 = state_39068;
var statearr_39131_39196 = state_39068__$1;
(statearr_39131_39196[(2)] = null);

(statearr_39131_39196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (45))){
var inst_39058 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39132_39197 = state_39068__$1;
(statearr_39132_39197[(2)] = inst_39058);

(statearr_39132_39197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (26))){
var inst_39000 = (state_39068[(29)]);
var inst_39054 = (state_39068[(2)]);
var inst_39055 = cljs.core.seq.call(null,inst_39000);
var state_39068__$1 = (function (){var statearr_39133 = state_39068;
(statearr_39133[(31)] = inst_39054);

return statearr_39133;
})();
if(inst_39055){
var statearr_39134_39198 = state_39068__$1;
(statearr_39134_39198[(1)] = (42));

} else {
var statearr_39135_39199 = state_39068__$1;
(statearr_39135_39199[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (16))){
var inst_38969 = (state_39068[(7)]);
var inst_38971 = cljs.core.chunked_seq_QMARK_.call(null,inst_38969);
var state_39068__$1 = state_39068;
if(inst_38971){
var statearr_39136_39200 = state_39068__$1;
(statearr_39136_39200[(1)] = (19));

} else {
var statearr_39137_39201 = state_39068__$1;
(statearr_39137_39201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (38))){
var inst_39047 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39138_39202 = state_39068__$1;
(statearr_39138_39202[(2)] = inst_39047);

(statearr_39138_39202[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (30))){
var state_39068__$1 = state_39068;
var statearr_39139_39203 = state_39068__$1;
(statearr_39139_39203[(2)] = null);

(statearr_39139_39203[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (10))){
var inst_38950 = (state_39068[(14)]);
var inst_38952 = (state_39068[(15)]);
var inst_38958 = cljs.core._nth.call(null,inst_38950,inst_38952);
var inst_38959 = cljs.core.nth.call(null,inst_38958,(0),null);
var inst_38960 = cljs.core.nth.call(null,inst_38958,(1),null);
var state_39068__$1 = (function (){var statearr_39140 = state_39068;
(statearr_39140[(26)] = inst_38959);

return statearr_39140;
})();
if(cljs.core.truth_(inst_38960)){
var statearr_39141_39204 = state_39068__$1;
(statearr_39141_39204[(1)] = (13));

} else {
var statearr_39142_39205 = state_39068__$1;
(statearr_39142_39205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (18))){
var inst_38993 = (state_39068[(2)]);
var state_39068__$1 = state_39068;
var statearr_39143_39206 = state_39068__$1;
(statearr_39143_39206[(2)] = inst_38993);

(statearr_39143_39206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (42))){
var state_39068__$1 = state_39068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39068__$1,(45),dchan);
} else {
if((state_val_39069 === (37))){
var inst_38940 = (state_39068[(9)]);
var inst_39027 = (state_39068[(25)]);
var inst_39036 = (state_39068[(23)]);
var inst_39036__$1 = cljs.core.first.call(null,inst_39027);
var inst_39037 = cljs.core.async.put_BANG_.call(null,inst_39036__$1,inst_38940,done);
var state_39068__$1 = (function (){var statearr_39144 = state_39068;
(statearr_39144[(23)] = inst_39036__$1);

return statearr_39144;
})();
if(cljs.core.truth_(inst_39037)){
var statearr_39145_39207 = state_39068__$1;
(statearr_39145_39207[(1)] = (39));

} else {
var statearr_39146_39208 = state_39068__$1;
(statearr_39146_39208[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39069 === (8))){
var inst_38951 = (state_39068[(13)]);
var inst_38952 = (state_39068[(15)]);
var inst_38954 = (inst_38952 < inst_38951);
var inst_38955 = inst_38954;
var state_39068__$1 = state_39068;
if(cljs.core.truth_(inst_38955)){
var statearr_39147_39209 = state_39068__$1;
(statearr_39147_39209[(1)] = (10));

} else {
var statearr_39148_39210 = state_39068__$1;
(statearr_39148_39210[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___39156,cs,m,dchan,dctr,done))
;
return ((function (switch__26161__auto__,c__26217__auto___39156,cs,m,dchan,dctr,done){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_39152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39152[(0)] = state_machine__26162__auto__);

(statearr_39152[(1)] = (1));

return statearr_39152;
});
var state_machine__26162__auto____1 = (function (state_39068){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_39068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e39153){if((e39153 instanceof Object)){
var ex__26165__auto__ = e39153;
var statearr_39154_39211 = state_39068;
(statearr_39154_39211[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39212 = state_39068;
state_39068 = G__39212;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_39068){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_39068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___39156,cs,m,dchan,dctr,done))
})();
var state__26219__auto__ = (function (){var statearr_39155 = f__26218__auto__.call(null);
(statearr_39155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___39156);

return statearr_39155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___39156,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj39214 = {};
return obj39214;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__23532__auto__ = m;
if(and__23532__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__23532__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24188__auto__ = (((m == null))?null:m);
return (function (){var or__23544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__39215){
var map__39220 = p__39215;
var map__39220__$1 = ((cljs.core.seq_QMARK_.call(null,map__39220))?cljs.core.apply.call(null,cljs.core.hash_map,map__39220):map__39220);
var opts = map__39220__$1;
var statearr_39221_39224 = state;
(statearr_39221_39224[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__39220,map__39220__$1,opts){
return (function (val){
var statearr_39222_39225 = state;
(statearr_39222_39225[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39220,map__39220__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_39223_39226 = state;
(statearr_39223_39226[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__39215 = null;
if (arguments.length > 3) {
var G__39227__i = 0, G__39227__a = new Array(arguments.length -  3);
while (G__39227__i < G__39227__a.length) {G__39227__a[G__39227__i] = arguments[G__39227__i + 3]; ++G__39227__i;}
  p__39215 = new cljs.core.IndexedSeq(G__39227__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__39215);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__39228){
var state = cljs.core.first(arglist__39228);
arglist__39228 = cljs.core.next(arglist__39228);
var cont_block = cljs.core.first(arglist__39228);
arglist__39228 = cljs.core.next(arglist__39228);
var ports = cljs.core.first(arglist__39228);
var p__39215 = cljs.core.rest(arglist__39228);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__39215);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t39348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39348 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39349){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39349 = meta39349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39348.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t39348.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39350){
var self__ = this;
var _39350__$1 = this;
return self__.meta39349;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39350,meta39349__$1){
var self__ = this;
var _39350__$1 = this;
return (new cljs.core.async.t39348(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39349__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39348.cljs$lang$type = true;

cljs.core.async.t39348.cljs$lang$ctorStr = "cljs.core.async/t39348";

cljs.core.async.t39348.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t39348");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t39348 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39348(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39349){
return (new cljs.core.async.t39348(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39349));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t39348(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26217__auto___39467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___39467,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___39467,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39420){
var state_val_39421 = (state_39420[(1)]);
if((state_val_39421 === (7))){
var inst_39364 = (state_39420[(7)]);
var inst_39369 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39364);
var state_39420__$1 = state_39420;
var statearr_39422_39468 = state_39420__$1;
(statearr_39422_39468[(2)] = inst_39369);

(statearr_39422_39468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (20))){
var inst_39379 = (state_39420[(8)]);
var state_39420__$1 = state_39420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39420__$1,(23),out,inst_39379);
} else {
if((state_val_39421 === (1))){
var inst_39354 = (state_39420[(9)]);
var inst_39354__$1 = calc_state.call(null);
var inst_39355 = cljs.core.seq_QMARK_.call(null,inst_39354__$1);
var state_39420__$1 = (function (){var statearr_39423 = state_39420;
(statearr_39423[(9)] = inst_39354__$1);

return statearr_39423;
})();
if(inst_39355){
var statearr_39424_39469 = state_39420__$1;
(statearr_39424_39469[(1)] = (2));

} else {
var statearr_39425_39470 = state_39420__$1;
(statearr_39425_39470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (24))){
var inst_39372 = (state_39420[(10)]);
var inst_39364 = inst_39372;
var state_39420__$1 = (function (){var statearr_39426 = state_39420;
(statearr_39426[(7)] = inst_39364);

return statearr_39426;
})();
var statearr_39427_39471 = state_39420__$1;
(statearr_39427_39471[(2)] = null);

(statearr_39427_39471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (4))){
var inst_39354 = (state_39420[(9)]);
var inst_39360 = (state_39420[(2)]);
var inst_39361 = cljs.core.get.call(null,inst_39360,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39362 = cljs.core.get.call(null,inst_39360,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39363 = cljs.core.get.call(null,inst_39360,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39364 = inst_39354;
var state_39420__$1 = (function (){var statearr_39428 = state_39420;
(statearr_39428[(11)] = inst_39361);

(statearr_39428[(12)] = inst_39362);

(statearr_39428[(7)] = inst_39364);

(statearr_39428[(13)] = inst_39363);

return statearr_39428;
})();
var statearr_39429_39472 = state_39420__$1;
(statearr_39429_39472[(2)] = null);

(statearr_39429_39472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (15))){
var state_39420__$1 = state_39420;
var statearr_39430_39473 = state_39420__$1;
(statearr_39430_39473[(2)] = null);

(statearr_39430_39473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (21))){
var inst_39372 = (state_39420[(10)]);
var inst_39364 = inst_39372;
var state_39420__$1 = (function (){var statearr_39431 = state_39420;
(statearr_39431[(7)] = inst_39364);

return statearr_39431;
})();
var statearr_39432_39474 = state_39420__$1;
(statearr_39432_39474[(2)] = null);

(statearr_39432_39474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (13))){
var inst_39416 = (state_39420[(2)]);
var state_39420__$1 = state_39420;
var statearr_39433_39475 = state_39420__$1;
(statearr_39433_39475[(2)] = inst_39416);

(statearr_39433_39475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (22))){
var inst_39414 = (state_39420[(2)]);
var state_39420__$1 = state_39420;
var statearr_39434_39476 = state_39420__$1;
(statearr_39434_39476[(2)] = inst_39414);

(statearr_39434_39476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (6))){
var inst_39418 = (state_39420[(2)]);
var state_39420__$1 = state_39420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39420__$1,inst_39418);
} else {
if((state_val_39421 === (25))){
var state_39420__$1 = state_39420;
var statearr_39435_39477 = state_39420__$1;
(statearr_39435_39477[(2)] = null);

(statearr_39435_39477[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (17))){
var inst_39394 = (state_39420[(14)]);
var state_39420__$1 = state_39420;
var statearr_39436_39478 = state_39420__$1;
(statearr_39436_39478[(2)] = inst_39394);

(statearr_39436_39478[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (3))){
var inst_39354 = (state_39420[(9)]);
var state_39420__$1 = state_39420;
var statearr_39437_39479 = state_39420__$1;
(statearr_39437_39479[(2)] = inst_39354);

(statearr_39437_39479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (12))){
var inst_39394 = (state_39420[(14)]);
var inst_39375 = (state_39420[(15)]);
var inst_39380 = (state_39420[(16)]);
var inst_39394__$1 = inst_39375.call(null,inst_39380);
var state_39420__$1 = (function (){var statearr_39438 = state_39420;
(statearr_39438[(14)] = inst_39394__$1);

return statearr_39438;
})();
if(cljs.core.truth_(inst_39394__$1)){
var statearr_39439_39480 = state_39420__$1;
(statearr_39439_39480[(1)] = (17));

} else {
var statearr_39440_39481 = state_39420__$1;
(statearr_39440_39481[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (2))){
var inst_39354 = (state_39420[(9)]);
var inst_39357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39354);
var state_39420__$1 = state_39420;
var statearr_39441_39482 = state_39420__$1;
(statearr_39441_39482[(2)] = inst_39357);

(statearr_39441_39482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (23))){
var inst_39405 = (state_39420[(2)]);
var state_39420__$1 = state_39420;
if(cljs.core.truth_(inst_39405)){
var statearr_39442_39483 = state_39420__$1;
(statearr_39442_39483[(1)] = (24));

} else {
var statearr_39443_39484 = state_39420__$1;
(statearr_39443_39484[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (19))){
var inst_39402 = (state_39420[(2)]);
var state_39420__$1 = state_39420;
if(cljs.core.truth_(inst_39402)){
var statearr_39444_39485 = state_39420__$1;
(statearr_39444_39485[(1)] = (20));

} else {
var statearr_39445_39486 = state_39420__$1;
(statearr_39445_39486[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (11))){
var inst_39379 = (state_39420[(8)]);
var inst_39385 = (inst_39379 == null);
var state_39420__$1 = state_39420;
if(cljs.core.truth_(inst_39385)){
var statearr_39446_39487 = state_39420__$1;
(statearr_39446_39487[(1)] = (14));

} else {
var statearr_39447_39488 = state_39420__$1;
(statearr_39447_39488[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (9))){
var inst_39372 = (state_39420[(10)]);
var inst_39372__$1 = (state_39420[(2)]);
var inst_39373 = cljs.core.get.call(null,inst_39372__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39374 = cljs.core.get.call(null,inst_39372__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39375 = cljs.core.get.call(null,inst_39372__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_39420__$1 = (function (){var statearr_39448 = state_39420;
(statearr_39448[(10)] = inst_39372__$1);

(statearr_39448[(17)] = inst_39374);

(statearr_39448[(15)] = inst_39375);

return statearr_39448;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39420__$1,(10),inst_39373);
} else {
if((state_val_39421 === (5))){
var inst_39364 = (state_39420[(7)]);
var inst_39367 = cljs.core.seq_QMARK_.call(null,inst_39364);
var state_39420__$1 = state_39420;
if(inst_39367){
var statearr_39449_39489 = state_39420__$1;
(statearr_39449_39489[(1)] = (7));

} else {
var statearr_39450_39490 = state_39420__$1;
(statearr_39450_39490[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (14))){
var inst_39380 = (state_39420[(16)]);
var inst_39387 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39380);
var state_39420__$1 = state_39420;
var statearr_39451_39491 = state_39420__$1;
(statearr_39451_39491[(2)] = inst_39387);

(statearr_39451_39491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (26))){
var inst_39410 = (state_39420[(2)]);
var state_39420__$1 = state_39420;
var statearr_39452_39492 = state_39420__$1;
(statearr_39452_39492[(2)] = inst_39410);

(statearr_39452_39492[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (16))){
var inst_39390 = (state_39420[(2)]);
var inst_39391 = calc_state.call(null);
var inst_39364 = inst_39391;
var state_39420__$1 = (function (){var statearr_39453 = state_39420;
(statearr_39453[(18)] = inst_39390);

(statearr_39453[(7)] = inst_39364);

return statearr_39453;
})();
var statearr_39454_39493 = state_39420__$1;
(statearr_39454_39493[(2)] = null);

(statearr_39454_39493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (10))){
var inst_39379 = (state_39420[(8)]);
var inst_39380 = (state_39420[(16)]);
var inst_39378 = (state_39420[(2)]);
var inst_39379__$1 = cljs.core.nth.call(null,inst_39378,(0),null);
var inst_39380__$1 = cljs.core.nth.call(null,inst_39378,(1),null);
var inst_39381 = (inst_39379__$1 == null);
var inst_39382 = cljs.core._EQ_.call(null,inst_39380__$1,change);
var inst_39383 = (inst_39381) || (inst_39382);
var state_39420__$1 = (function (){var statearr_39455 = state_39420;
(statearr_39455[(8)] = inst_39379__$1);

(statearr_39455[(16)] = inst_39380__$1);

return statearr_39455;
})();
if(cljs.core.truth_(inst_39383)){
var statearr_39456_39494 = state_39420__$1;
(statearr_39456_39494[(1)] = (11));

} else {
var statearr_39457_39495 = state_39420__$1;
(statearr_39457_39495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (18))){
var inst_39374 = (state_39420[(17)]);
var inst_39375 = (state_39420[(15)]);
var inst_39380 = (state_39420[(16)]);
var inst_39397 = cljs.core.empty_QMARK_.call(null,inst_39375);
var inst_39398 = inst_39374.call(null,inst_39380);
var inst_39399 = cljs.core.not.call(null,inst_39398);
var inst_39400 = (inst_39397) && (inst_39399);
var state_39420__$1 = state_39420;
var statearr_39458_39496 = state_39420__$1;
(statearr_39458_39496[(2)] = inst_39400);

(statearr_39458_39496[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39421 === (8))){
var inst_39364 = (state_39420[(7)]);
var state_39420__$1 = state_39420;
var statearr_39459_39497 = state_39420__$1;
(statearr_39459_39497[(2)] = inst_39364);

(statearr_39459_39497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___39467,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26161__auto__,c__26217__auto___39467,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_39463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39463[(0)] = state_machine__26162__auto__);

(statearr_39463[(1)] = (1));

return statearr_39463;
});
var state_machine__26162__auto____1 = (function (state_39420){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_39420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e39464){if((e39464 instanceof Object)){
var ex__26165__auto__ = e39464;
var statearr_39465_39498 = state_39420;
(statearr_39465_39498[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39499 = state_39420;
state_39420 = G__39499;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_39420){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_39420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___39467,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26219__auto__ = (function (){var statearr_39466 = f__26218__auto__.call(null);
(statearr_39466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___39467);

return statearr_39466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___39467,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj39501 = {};
return obj39501;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__23532__auto__ = p;
if(and__23532__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__23532__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24188__auto__ = (((p == null))?null:p);
return (function (){var or__23544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__23532__auto__ = p;
if(and__23532__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__23532__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24188__auto__ = (((p == null))?null:p);
return (function (){var or__23544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__23532__auto__ = p;
if(and__23532__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__23532__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24188__auto__ = (((p == null))?null:p);
return (function (){var or__23544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__23532__auto__ = p;
if(and__23532__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__23532__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24188__auto__ = (((p == null))?null:p);
return (function (){var or__23544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24188__auto__)]);
if(or__23544__auto__){
return or__23544__auto__;
} else {
var or__23544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23544__auto____$1){
return or__23544__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__23544__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__23544__auto__)){
return or__23544__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__23544__auto__,mults){
return (function (p1__39502_SHARP_){
if(cljs.core.truth_(p1__39502_SHARP_.call(null,topic))){
return p1__39502_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39502_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__23544__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t39625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39625 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta39626){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta39626 = meta39626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39625.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t39625.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t39625.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t39625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t39625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t39625.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t39625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39627){
var self__ = this;
var _39627__$1 = this;
return self__.meta39626;
});})(mults,ensure_mult))
;

cljs.core.async.t39625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39627,meta39626__$1){
var self__ = this;
var _39627__$1 = this;
return (new cljs.core.async.t39625(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta39626__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t39625.cljs$lang$type = true;

cljs.core.async.t39625.cljs$lang$ctorStr = "cljs.core.async/t39625";

cljs.core.async.t39625.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t39625");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t39625 = ((function (mults,ensure_mult){
return (function __GT_t39625(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39626){
return (new cljs.core.async.t39625(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39626));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t39625(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26217__auto___39747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___39747,mults,ensure_mult,p){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___39747,mults,ensure_mult,p){
return (function (state_39699){
var state_val_39700 = (state_39699[(1)]);
if((state_val_39700 === (7))){
var inst_39695 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
var statearr_39701_39748 = state_39699__$1;
(statearr_39701_39748[(2)] = inst_39695);

(statearr_39701_39748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (20))){
var state_39699__$1 = state_39699;
var statearr_39702_39749 = state_39699__$1;
(statearr_39702_39749[(2)] = null);

(statearr_39702_39749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (1))){
var state_39699__$1 = state_39699;
var statearr_39703_39750 = state_39699__$1;
(statearr_39703_39750[(2)] = null);

(statearr_39703_39750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (24))){
var inst_39678 = (state_39699[(7)]);
var inst_39687 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39678);
var state_39699__$1 = state_39699;
var statearr_39704_39751 = state_39699__$1;
(statearr_39704_39751[(2)] = inst_39687);

(statearr_39704_39751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (4))){
var inst_39630 = (state_39699[(8)]);
var inst_39630__$1 = (state_39699[(2)]);
var inst_39631 = (inst_39630__$1 == null);
var state_39699__$1 = (function (){var statearr_39705 = state_39699;
(statearr_39705[(8)] = inst_39630__$1);

return statearr_39705;
})();
if(cljs.core.truth_(inst_39631)){
var statearr_39706_39752 = state_39699__$1;
(statearr_39706_39752[(1)] = (5));

} else {
var statearr_39707_39753 = state_39699__$1;
(statearr_39707_39753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (15))){
var inst_39672 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
var statearr_39708_39754 = state_39699__$1;
(statearr_39708_39754[(2)] = inst_39672);

(statearr_39708_39754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (21))){
var inst_39692 = (state_39699[(2)]);
var state_39699__$1 = (function (){var statearr_39709 = state_39699;
(statearr_39709[(9)] = inst_39692);

return statearr_39709;
})();
var statearr_39710_39755 = state_39699__$1;
(statearr_39710_39755[(2)] = null);

(statearr_39710_39755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (13))){
var inst_39654 = (state_39699[(10)]);
var inst_39656 = cljs.core.chunked_seq_QMARK_.call(null,inst_39654);
var state_39699__$1 = state_39699;
if(inst_39656){
var statearr_39711_39756 = state_39699__$1;
(statearr_39711_39756[(1)] = (16));

} else {
var statearr_39712_39757 = state_39699__$1;
(statearr_39712_39757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (22))){
var inst_39684 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
if(cljs.core.truth_(inst_39684)){
var statearr_39713_39758 = state_39699__$1;
(statearr_39713_39758[(1)] = (23));

} else {
var statearr_39714_39759 = state_39699__$1;
(statearr_39714_39759[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (6))){
var inst_39630 = (state_39699[(8)]);
var inst_39678 = (state_39699[(7)]);
var inst_39680 = (state_39699[(11)]);
var inst_39678__$1 = topic_fn.call(null,inst_39630);
var inst_39679 = cljs.core.deref.call(null,mults);
var inst_39680__$1 = cljs.core.get.call(null,inst_39679,inst_39678__$1);
var state_39699__$1 = (function (){var statearr_39715 = state_39699;
(statearr_39715[(7)] = inst_39678__$1);

(statearr_39715[(11)] = inst_39680__$1);

return statearr_39715;
})();
if(cljs.core.truth_(inst_39680__$1)){
var statearr_39716_39760 = state_39699__$1;
(statearr_39716_39760[(1)] = (19));

} else {
var statearr_39717_39761 = state_39699__$1;
(statearr_39717_39761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (25))){
var inst_39689 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
var statearr_39718_39762 = state_39699__$1;
(statearr_39718_39762[(2)] = inst_39689);

(statearr_39718_39762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (17))){
var inst_39654 = (state_39699[(10)]);
var inst_39663 = cljs.core.first.call(null,inst_39654);
var inst_39664 = cljs.core.async.muxch_STAR_.call(null,inst_39663);
var inst_39665 = cljs.core.async.close_BANG_.call(null,inst_39664);
var inst_39666 = cljs.core.next.call(null,inst_39654);
var inst_39640 = inst_39666;
var inst_39641 = null;
var inst_39642 = (0);
var inst_39643 = (0);
var state_39699__$1 = (function (){var statearr_39719 = state_39699;
(statearr_39719[(12)] = inst_39643);

(statearr_39719[(13)] = inst_39665);

(statearr_39719[(14)] = inst_39641);

(statearr_39719[(15)] = inst_39642);

(statearr_39719[(16)] = inst_39640);

return statearr_39719;
})();
var statearr_39720_39763 = state_39699__$1;
(statearr_39720_39763[(2)] = null);

(statearr_39720_39763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (3))){
var inst_39697 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39699__$1,inst_39697);
} else {
if((state_val_39700 === (12))){
var inst_39674 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
var statearr_39721_39764 = state_39699__$1;
(statearr_39721_39764[(2)] = inst_39674);

(statearr_39721_39764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (2))){
var state_39699__$1 = state_39699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39699__$1,(4),ch);
} else {
if((state_val_39700 === (23))){
var state_39699__$1 = state_39699;
var statearr_39722_39765 = state_39699__$1;
(statearr_39722_39765[(2)] = null);

(statearr_39722_39765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (19))){
var inst_39630 = (state_39699[(8)]);
var inst_39680 = (state_39699[(11)]);
var inst_39682 = cljs.core.async.muxch_STAR_.call(null,inst_39680);
var state_39699__$1 = state_39699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39699__$1,(22),inst_39682,inst_39630);
} else {
if((state_val_39700 === (11))){
var inst_39654 = (state_39699[(10)]);
var inst_39640 = (state_39699[(16)]);
var inst_39654__$1 = cljs.core.seq.call(null,inst_39640);
var state_39699__$1 = (function (){var statearr_39723 = state_39699;
(statearr_39723[(10)] = inst_39654__$1);

return statearr_39723;
})();
if(inst_39654__$1){
var statearr_39724_39766 = state_39699__$1;
(statearr_39724_39766[(1)] = (13));

} else {
var statearr_39725_39767 = state_39699__$1;
(statearr_39725_39767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (9))){
var inst_39676 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
var statearr_39726_39768 = state_39699__$1;
(statearr_39726_39768[(2)] = inst_39676);

(statearr_39726_39768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (5))){
var inst_39637 = cljs.core.deref.call(null,mults);
var inst_39638 = cljs.core.vals.call(null,inst_39637);
var inst_39639 = cljs.core.seq.call(null,inst_39638);
var inst_39640 = inst_39639;
var inst_39641 = null;
var inst_39642 = (0);
var inst_39643 = (0);
var state_39699__$1 = (function (){var statearr_39727 = state_39699;
(statearr_39727[(12)] = inst_39643);

(statearr_39727[(14)] = inst_39641);

(statearr_39727[(15)] = inst_39642);

(statearr_39727[(16)] = inst_39640);

return statearr_39727;
})();
var statearr_39728_39769 = state_39699__$1;
(statearr_39728_39769[(2)] = null);

(statearr_39728_39769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (14))){
var state_39699__$1 = state_39699;
var statearr_39732_39770 = state_39699__$1;
(statearr_39732_39770[(2)] = null);

(statearr_39732_39770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (16))){
var inst_39654 = (state_39699[(10)]);
var inst_39658 = cljs.core.chunk_first.call(null,inst_39654);
var inst_39659 = cljs.core.chunk_rest.call(null,inst_39654);
var inst_39660 = cljs.core.count.call(null,inst_39658);
var inst_39640 = inst_39659;
var inst_39641 = inst_39658;
var inst_39642 = inst_39660;
var inst_39643 = (0);
var state_39699__$1 = (function (){var statearr_39733 = state_39699;
(statearr_39733[(12)] = inst_39643);

(statearr_39733[(14)] = inst_39641);

(statearr_39733[(15)] = inst_39642);

(statearr_39733[(16)] = inst_39640);

return statearr_39733;
})();
var statearr_39734_39771 = state_39699__$1;
(statearr_39734_39771[(2)] = null);

(statearr_39734_39771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (10))){
var inst_39643 = (state_39699[(12)]);
var inst_39641 = (state_39699[(14)]);
var inst_39642 = (state_39699[(15)]);
var inst_39640 = (state_39699[(16)]);
var inst_39648 = cljs.core._nth.call(null,inst_39641,inst_39643);
var inst_39649 = cljs.core.async.muxch_STAR_.call(null,inst_39648);
var inst_39650 = cljs.core.async.close_BANG_.call(null,inst_39649);
var inst_39651 = (inst_39643 + (1));
var tmp39729 = inst_39641;
var tmp39730 = inst_39642;
var tmp39731 = inst_39640;
var inst_39640__$1 = tmp39731;
var inst_39641__$1 = tmp39729;
var inst_39642__$1 = tmp39730;
var inst_39643__$1 = inst_39651;
var state_39699__$1 = (function (){var statearr_39735 = state_39699;
(statearr_39735[(12)] = inst_39643__$1);

(statearr_39735[(17)] = inst_39650);

(statearr_39735[(14)] = inst_39641__$1);

(statearr_39735[(15)] = inst_39642__$1);

(statearr_39735[(16)] = inst_39640__$1);

return statearr_39735;
})();
var statearr_39736_39772 = state_39699__$1;
(statearr_39736_39772[(2)] = null);

(statearr_39736_39772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (18))){
var inst_39669 = (state_39699[(2)]);
var state_39699__$1 = state_39699;
var statearr_39737_39773 = state_39699__$1;
(statearr_39737_39773[(2)] = inst_39669);

(statearr_39737_39773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39700 === (8))){
var inst_39643 = (state_39699[(12)]);
var inst_39642 = (state_39699[(15)]);
var inst_39645 = (inst_39643 < inst_39642);
var inst_39646 = inst_39645;
var state_39699__$1 = state_39699;
if(cljs.core.truth_(inst_39646)){
var statearr_39738_39774 = state_39699__$1;
(statearr_39738_39774[(1)] = (10));

} else {
var statearr_39739_39775 = state_39699__$1;
(statearr_39739_39775[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___39747,mults,ensure_mult,p))
;
return ((function (switch__26161__auto__,c__26217__auto___39747,mults,ensure_mult,p){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_39743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39743[(0)] = state_machine__26162__auto__);

(statearr_39743[(1)] = (1));

return statearr_39743;
});
var state_machine__26162__auto____1 = (function (state_39699){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_39699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e39744){if((e39744 instanceof Object)){
var ex__26165__auto__ = e39744;
var statearr_39745_39776 = state_39699;
(statearr_39745_39776[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39777 = state_39699;
state_39699 = G__39777;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_39699){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_39699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___39747,mults,ensure_mult,p))
})();
var state__26219__auto__ = (function (){var statearr_39746 = f__26218__auto__.call(null);
(statearr_39746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___39747);

return statearr_39746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___39747,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26217__auto___39914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___39914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___39914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39884){
var state_val_39885 = (state_39884[(1)]);
if((state_val_39885 === (7))){
var state_39884__$1 = state_39884;
var statearr_39886_39915 = state_39884__$1;
(statearr_39886_39915[(2)] = null);

(statearr_39886_39915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (1))){
var state_39884__$1 = state_39884;
var statearr_39887_39916 = state_39884__$1;
(statearr_39887_39916[(2)] = null);

(statearr_39887_39916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (4))){
var inst_39848 = (state_39884[(7)]);
var inst_39850 = (inst_39848 < cnt);
var state_39884__$1 = state_39884;
if(cljs.core.truth_(inst_39850)){
var statearr_39888_39917 = state_39884__$1;
(statearr_39888_39917[(1)] = (6));

} else {
var statearr_39889_39918 = state_39884__$1;
(statearr_39889_39918[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (15))){
var inst_39880 = (state_39884[(2)]);
var state_39884__$1 = state_39884;
var statearr_39890_39919 = state_39884__$1;
(statearr_39890_39919[(2)] = inst_39880);

(statearr_39890_39919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (13))){
var inst_39873 = cljs.core.async.close_BANG_.call(null,out);
var state_39884__$1 = state_39884;
var statearr_39891_39920 = state_39884__$1;
(statearr_39891_39920[(2)] = inst_39873);

(statearr_39891_39920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (6))){
var state_39884__$1 = state_39884;
var statearr_39892_39921 = state_39884__$1;
(statearr_39892_39921[(2)] = null);

(statearr_39892_39921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (3))){
var inst_39882 = (state_39884[(2)]);
var state_39884__$1 = state_39884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39884__$1,inst_39882);
} else {
if((state_val_39885 === (12))){
var inst_39870 = (state_39884[(8)]);
var inst_39870__$1 = (state_39884[(2)]);
var inst_39871 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39870__$1);
var state_39884__$1 = (function (){var statearr_39893 = state_39884;
(statearr_39893[(8)] = inst_39870__$1);

return statearr_39893;
})();
if(cljs.core.truth_(inst_39871)){
var statearr_39894_39922 = state_39884__$1;
(statearr_39894_39922[(1)] = (13));

} else {
var statearr_39895_39923 = state_39884__$1;
(statearr_39895_39923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (2))){
var inst_39847 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39848 = (0);
var state_39884__$1 = (function (){var statearr_39896 = state_39884;
(statearr_39896[(9)] = inst_39847);

(statearr_39896[(7)] = inst_39848);

return statearr_39896;
})();
var statearr_39897_39924 = state_39884__$1;
(statearr_39897_39924[(2)] = null);

(statearr_39897_39924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (11))){
var inst_39848 = (state_39884[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39884,(10),Object,null,(9));
var inst_39857 = chs__$1.call(null,inst_39848);
var inst_39858 = done.call(null,inst_39848);
var inst_39859 = cljs.core.async.take_BANG_.call(null,inst_39857,inst_39858);
var state_39884__$1 = state_39884;
var statearr_39898_39925 = state_39884__$1;
(statearr_39898_39925[(2)] = inst_39859);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39884__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (9))){
var inst_39848 = (state_39884[(7)]);
var inst_39861 = (state_39884[(2)]);
var inst_39862 = (inst_39848 + (1));
var inst_39848__$1 = inst_39862;
var state_39884__$1 = (function (){var statearr_39899 = state_39884;
(statearr_39899[(7)] = inst_39848__$1);

(statearr_39899[(10)] = inst_39861);

return statearr_39899;
})();
var statearr_39900_39926 = state_39884__$1;
(statearr_39900_39926[(2)] = null);

(statearr_39900_39926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (5))){
var inst_39868 = (state_39884[(2)]);
var state_39884__$1 = (function (){var statearr_39901 = state_39884;
(statearr_39901[(11)] = inst_39868);

return statearr_39901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39884__$1,(12),dchan);
} else {
if((state_val_39885 === (14))){
var inst_39870 = (state_39884[(8)]);
var inst_39875 = cljs.core.apply.call(null,f,inst_39870);
var state_39884__$1 = state_39884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39884__$1,(16),out,inst_39875);
} else {
if((state_val_39885 === (16))){
var inst_39877 = (state_39884[(2)]);
var state_39884__$1 = (function (){var statearr_39902 = state_39884;
(statearr_39902[(12)] = inst_39877);

return statearr_39902;
})();
var statearr_39903_39927 = state_39884__$1;
(statearr_39903_39927[(2)] = null);

(statearr_39903_39927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (10))){
var inst_39852 = (state_39884[(2)]);
var inst_39853 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39884__$1 = (function (){var statearr_39904 = state_39884;
(statearr_39904[(13)] = inst_39852);

return statearr_39904;
})();
var statearr_39905_39928 = state_39884__$1;
(statearr_39905_39928[(2)] = inst_39853);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39884__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39885 === (8))){
var inst_39866 = (state_39884[(2)]);
var state_39884__$1 = state_39884;
var statearr_39906_39929 = state_39884__$1;
(statearr_39906_39929[(2)] = inst_39866);

(statearr_39906_39929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___39914,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26161__auto__,c__26217__auto___39914,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_39910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39910[(0)] = state_machine__26162__auto__);

(statearr_39910[(1)] = (1));

return statearr_39910;
});
var state_machine__26162__auto____1 = (function (state_39884){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_39884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e39911){if((e39911 instanceof Object)){
var ex__26165__auto__ = e39911;
var statearr_39912_39930 = state_39884;
(statearr_39912_39930[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39931 = state_39884;
state_39884 = G__39931;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_39884){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_39884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___39914,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26219__auto__ = (function (){var statearr_39913 = f__26218__auto__.call(null);
(statearr_39913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___39914);

return statearr_39913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___39914,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26217__auto___40039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___40039,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___40039,out){
return (function (state_40015){
var state_val_40016 = (state_40015[(1)]);
if((state_val_40016 === (7))){
var inst_39995 = (state_40015[(7)]);
var inst_39994 = (state_40015[(8)]);
var inst_39994__$1 = (state_40015[(2)]);
var inst_39995__$1 = cljs.core.nth.call(null,inst_39994__$1,(0),null);
var inst_39996 = cljs.core.nth.call(null,inst_39994__$1,(1),null);
var inst_39997 = (inst_39995__$1 == null);
var state_40015__$1 = (function (){var statearr_40017 = state_40015;
(statearr_40017[(7)] = inst_39995__$1);

(statearr_40017[(9)] = inst_39996);

(statearr_40017[(8)] = inst_39994__$1);

return statearr_40017;
})();
if(cljs.core.truth_(inst_39997)){
var statearr_40018_40040 = state_40015__$1;
(statearr_40018_40040[(1)] = (8));

} else {
var statearr_40019_40041 = state_40015__$1;
(statearr_40019_40041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (1))){
var inst_39986 = cljs.core.vec.call(null,chs);
var inst_39987 = inst_39986;
var state_40015__$1 = (function (){var statearr_40020 = state_40015;
(statearr_40020[(10)] = inst_39987);

return statearr_40020;
})();
var statearr_40021_40042 = state_40015__$1;
(statearr_40021_40042[(2)] = null);

(statearr_40021_40042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (4))){
var inst_39987 = (state_40015[(10)]);
var state_40015__$1 = state_40015;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40015__$1,(7),inst_39987);
} else {
if((state_val_40016 === (6))){
var inst_40011 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40022_40043 = state_40015__$1;
(statearr_40022_40043[(2)] = inst_40011);

(statearr_40022_40043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (3))){
var inst_40013 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40015__$1,inst_40013);
} else {
if((state_val_40016 === (2))){
var inst_39987 = (state_40015[(10)]);
var inst_39989 = cljs.core.count.call(null,inst_39987);
var inst_39990 = (inst_39989 > (0));
var state_40015__$1 = state_40015;
if(cljs.core.truth_(inst_39990)){
var statearr_40024_40044 = state_40015__$1;
(statearr_40024_40044[(1)] = (4));

} else {
var statearr_40025_40045 = state_40015__$1;
(statearr_40025_40045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (11))){
var inst_39987 = (state_40015[(10)]);
var inst_40004 = (state_40015[(2)]);
var tmp40023 = inst_39987;
var inst_39987__$1 = tmp40023;
var state_40015__$1 = (function (){var statearr_40026 = state_40015;
(statearr_40026[(11)] = inst_40004);

(statearr_40026[(10)] = inst_39987__$1);

return statearr_40026;
})();
var statearr_40027_40046 = state_40015__$1;
(statearr_40027_40046[(2)] = null);

(statearr_40027_40046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (9))){
var inst_39995 = (state_40015[(7)]);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40015__$1,(11),out,inst_39995);
} else {
if((state_val_40016 === (5))){
var inst_40009 = cljs.core.async.close_BANG_.call(null,out);
var state_40015__$1 = state_40015;
var statearr_40028_40047 = state_40015__$1;
(statearr_40028_40047[(2)] = inst_40009);

(statearr_40028_40047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (10))){
var inst_40007 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40029_40048 = state_40015__$1;
(statearr_40029_40048[(2)] = inst_40007);

(statearr_40029_40048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (8))){
var inst_39995 = (state_40015[(7)]);
var inst_39996 = (state_40015[(9)]);
var inst_39994 = (state_40015[(8)]);
var inst_39987 = (state_40015[(10)]);
var inst_39999 = (function (){var c = inst_39996;
var v = inst_39995;
var vec__39992 = inst_39994;
var cs = inst_39987;
return ((function (c,v,vec__39992,cs,inst_39995,inst_39996,inst_39994,inst_39987,state_val_40016,c__26217__auto___40039,out){
return (function (p1__39932_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39932_SHARP_);
});
;})(c,v,vec__39992,cs,inst_39995,inst_39996,inst_39994,inst_39987,state_val_40016,c__26217__auto___40039,out))
})();
var inst_40000 = cljs.core.filterv.call(null,inst_39999,inst_39987);
var inst_39987__$1 = inst_40000;
var state_40015__$1 = (function (){var statearr_40030 = state_40015;
(statearr_40030[(10)] = inst_39987__$1);

return statearr_40030;
})();
var statearr_40031_40049 = state_40015__$1;
(statearr_40031_40049[(2)] = null);

(statearr_40031_40049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___40039,out))
;
return ((function (switch__26161__auto__,c__26217__auto___40039,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40035[(0)] = state_machine__26162__auto__);

(statearr_40035[(1)] = (1));

return statearr_40035;
});
var state_machine__26162__auto____1 = (function (state_40015){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40036){if((e40036 instanceof Object)){
var ex__26165__auto__ = e40036;
var statearr_40037_40050 = state_40015;
(statearr_40037_40050[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40051 = state_40015;
state_40015 = G__40051;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40015){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___40039,out))
})();
var state__26219__auto__ = (function (){var statearr_40038 = f__26218__auto__.call(null);
(statearr_40038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___40039);

return statearr_40038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___40039,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26217__auto___40144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___40144,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___40144,out){
return (function (state_40121){
var state_val_40122 = (state_40121[(1)]);
if((state_val_40122 === (7))){
var inst_40103 = (state_40121[(7)]);
var inst_40103__$1 = (state_40121[(2)]);
var inst_40104 = (inst_40103__$1 == null);
var inst_40105 = cljs.core.not.call(null,inst_40104);
var state_40121__$1 = (function (){var statearr_40123 = state_40121;
(statearr_40123[(7)] = inst_40103__$1);

return statearr_40123;
})();
if(inst_40105){
var statearr_40124_40145 = state_40121__$1;
(statearr_40124_40145[(1)] = (8));

} else {
var statearr_40125_40146 = state_40121__$1;
(statearr_40125_40146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (1))){
var inst_40098 = (0);
var state_40121__$1 = (function (){var statearr_40126 = state_40121;
(statearr_40126[(8)] = inst_40098);

return statearr_40126;
})();
var statearr_40127_40147 = state_40121__$1;
(statearr_40127_40147[(2)] = null);

(statearr_40127_40147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (4))){
var state_40121__$1 = state_40121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40121__$1,(7),ch);
} else {
if((state_val_40122 === (6))){
var inst_40116 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40128_40148 = state_40121__$1;
(statearr_40128_40148[(2)] = inst_40116);

(statearr_40128_40148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (3))){
var inst_40118 = (state_40121[(2)]);
var inst_40119 = cljs.core.async.close_BANG_.call(null,out);
var state_40121__$1 = (function (){var statearr_40129 = state_40121;
(statearr_40129[(9)] = inst_40118);

return statearr_40129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40121__$1,inst_40119);
} else {
if((state_val_40122 === (2))){
var inst_40098 = (state_40121[(8)]);
var inst_40100 = (inst_40098 < n);
var state_40121__$1 = state_40121;
if(cljs.core.truth_(inst_40100)){
var statearr_40130_40149 = state_40121__$1;
(statearr_40130_40149[(1)] = (4));

} else {
var statearr_40131_40150 = state_40121__$1;
(statearr_40131_40150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (11))){
var inst_40098 = (state_40121[(8)]);
var inst_40108 = (state_40121[(2)]);
var inst_40109 = (inst_40098 + (1));
var inst_40098__$1 = inst_40109;
var state_40121__$1 = (function (){var statearr_40132 = state_40121;
(statearr_40132[(8)] = inst_40098__$1);

(statearr_40132[(10)] = inst_40108);

return statearr_40132;
})();
var statearr_40133_40151 = state_40121__$1;
(statearr_40133_40151[(2)] = null);

(statearr_40133_40151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (9))){
var state_40121__$1 = state_40121;
var statearr_40134_40152 = state_40121__$1;
(statearr_40134_40152[(2)] = null);

(statearr_40134_40152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (5))){
var state_40121__$1 = state_40121;
var statearr_40135_40153 = state_40121__$1;
(statearr_40135_40153[(2)] = null);

(statearr_40135_40153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (10))){
var inst_40113 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40136_40154 = state_40121__$1;
(statearr_40136_40154[(2)] = inst_40113);

(statearr_40136_40154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (8))){
var inst_40103 = (state_40121[(7)]);
var state_40121__$1 = state_40121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40121__$1,(11),out,inst_40103);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___40144,out))
;
return ((function (switch__26161__auto__,c__26217__auto___40144,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40140[(0)] = state_machine__26162__auto__);

(statearr_40140[(1)] = (1));

return statearr_40140;
});
var state_machine__26162__auto____1 = (function (state_40121){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40141){if((e40141 instanceof Object)){
var ex__26165__auto__ = e40141;
var statearr_40142_40155 = state_40121;
(statearr_40142_40155[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40156 = state_40121;
state_40121 = G__40156;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40121){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___40144,out))
})();
var state__26219__auto__ = (function (){var statearr_40143 = f__26218__auto__.call(null);
(statearr_40143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___40144);

return statearr_40143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___40144,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t40164 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40164 = (function (ch,f,map_LT_,meta40165){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40165 = meta40165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t40167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40167 = (function (fn1,_,meta40165,map_LT_,f,ch,meta40168){
this.fn1 = fn1;
this._ = _;
this.meta40165 = meta40165;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40168 = meta40168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40167.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t40167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40157_SHARP_){
return f1.call(null,(((p1__40157_SHARP_ == null))?null:self__.f.call(null,p1__40157_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t40167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40169){
var self__ = this;
var _40169__$1 = this;
return self__.meta40168;
});})(___$1))
;

cljs.core.async.t40167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40169,meta40168__$1){
var self__ = this;
var _40169__$1 = this;
return (new cljs.core.async.t40167(self__.fn1,self__._,self__.meta40165,self__.map_LT_,self__.f,self__.ch,meta40168__$1));
});})(___$1))
;

cljs.core.async.t40167.cljs$lang$type = true;

cljs.core.async.t40167.cljs$lang$ctorStr = "cljs.core.async/t40167";

cljs.core.async.t40167.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t40167");
});})(___$1))
;

cljs.core.async.__GT_t40167 = ((function (___$1){
return (function __GT_t40167(fn1__$1,___$2,meta40165__$1,map_LT___$1,f__$1,ch__$1,meta40168){
return (new cljs.core.async.t40167(fn1__$1,___$2,meta40165__$1,map_LT___$1,f__$1,ch__$1,meta40168));
});})(___$1))
;

}

return (new cljs.core.async.t40167(fn1,___$1,self__.meta40165,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23532__auto__ = ret;
if(cljs.core.truth_(and__23532__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__23532__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40166){
var self__ = this;
var _40166__$1 = this;
return self__.meta40165;
});

cljs.core.async.t40164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40166,meta40165__$1){
var self__ = this;
var _40166__$1 = this;
return (new cljs.core.async.t40164(self__.ch,self__.f,self__.map_LT_,meta40165__$1));
});

cljs.core.async.t40164.cljs$lang$type = true;

cljs.core.async.t40164.cljs$lang$ctorStr = "cljs.core.async/t40164";

cljs.core.async.t40164.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t40164");
});

cljs.core.async.__GT_t40164 = (function __GT_t40164(ch__$1,f__$1,map_LT___$1,meta40165){
return (new cljs.core.async.t40164(ch__$1,f__$1,map_LT___$1,meta40165));
});

}

return (new cljs.core.async.t40164(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t40173 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40173 = (function (ch,f,map_GT_,meta40174){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40174 = meta40174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40173.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t40173.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40173.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40175){
var self__ = this;
var _40175__$1 = this;
return self__.meta40174;
});

cljs.core.async.t40173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40175,meta40174__$1){
var self__ = this;
var _40175__$1 = this;
return (new cljs.core.async.t40173(self__.ch,self__.f,self__.map_GT_,meta40174__$1));
});

cljs.core.async.t40173.cljs$lang$type = true;

cljs.core.async.t40173.cljs$lang$ctorStr = "cljs.core.async/t40173";

cljs.core.async.t40173.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t40173");
});

cljs.core.async.__GT_t40173 = (function __GT_t40173(ch__$1,f__$1,map_GT___$1,meta40174){
return (new cljs.core.async.t40173(ch__$1,f__$1,map_GT___$1,meta40174));
});

}

return (new cljs.core.async.t40173(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t40179 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40179 = (function (ch,p,filter_GT_,meta40180){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40180 = meta40180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40181){
var self__ = this;
var _40181__$1 = this;
return self__.meta40180;
});

cljs.core.async.t40179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40181,meta40180__$1){
var self__ = this;
var _40181__$1 = this;
return (new cljs.core.async.t40179(self__.ch,self__.p,self__.filter_GT_,meta40180__$1));
});

cljs.core.async.t40179.cljs$lang$type = true;

cljs.core.async.t40179.cljs$lang$ctorStr = "cljs.core.async/t40179";

cljs.core.async.t40179.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cljs.core.async/t40179");
});

cljs.core.async.__GT_t40179 = (function __GT_t40179(ch__$1,p__$1,filter_GT___$1,meta40180){
return (new cljs.core.async.t40179(ch__$1,p__$1,filter_GT___$1,meta40180));
});

}

return (new cljs.core.async.t40179(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26217__auto___40264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___40264,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___40264,out){
return (function (state_40243){
var state_val_40244 = (state_40243[(1)]);
if((state_val_40244 === (7))){
var inst_40239 = (state_40243[(2)]);
var state_40243__$1 = state_40243;
var statearr_40245_40265 = state_40243__$1;
(statearr_40245_40265[(2)] = inst_40239);

(statearr_40245_40265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (1))){
var state_40243__$1 = state_40243;
var statearr_40246_40266 = state_40243__$1;
(statearr_40246_40266[(2)] = null);

(statearr_40246_40266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (4))){
var inst_40225 = (state_40243[(7)]);
var inst_40225__$1 = (state_40243[(2)]);
var inst_40226 = (inst_40225__$1 == null);
var state_40243__$1 = (function (){var statearr_40247 = state_40243;
(statearr_40247[(7)] = inst_40225__$1);

return statearr_40247;
})();
if(cljs.core.truth_(inst_40226)){
var statearr_40248_40267 = state_40243__$1;
(statearr_40248_40267[(1)] = (5));

} else {
var statearr_40249_40268 = state_40243__$1;
(statearr_40249_40268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (6))){
var inst_40225 = (state_40243[(7)]);
var inst_40230 = p.call(null,inst_40225);
var state_40243__$1 = state_40243;
if(cljs.core.truth_(inst_40230)){
var statearr_40250_40269 = state_40243__$1;
(statearr_40250_40269[(1)] = (8));

} else {
var statearr_40251_40270 = state_40243__$1;
(statearr_40251_40270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (3))){
var inst_40241 = (state_40243[(2)]);
var state_40243__$1 = state_40243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40243__$1,inst_40241);
} else {
if((state_val_40244 === (2))){
var state_40243__$1 = state_40243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40243__$1,(4),ch);
} else {
if((state_val_40244 === (11))){
var inst_40233 = (state_40243[(2)]);
var state_40243__$1 = state_40243;
var statearr_40252_40271 = state_40243__$1;
(statearr_40252_40271[(2)] = inst_40233);

(statearr_40252_40271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (9))){
var state_40243__$1 = state_40243;
var statearr_40253_40272 = state_40243__$1;
(statearr_40253_40272[(2)] = null);

(statearr_40253_40272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (5))){
var inst_40228 = cljs.core.async.close_BANG_.call(null,out);
var state_40243__$1 = state_40243;
var statearr_40254_40273 = state_40243__$1;
(statearr_40254_40273[(2)] = inst_40228);

(statearr_40254_40273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (10))){
var inst_40236 = (state_40243[(2)]);
var state_40243__$1 = (function (){var statearr_40255 = state_40243;
(statearr_40255[(8)] = inst_40236);

return statearr_40255;
})();
var statearr_40256_40274 = state_40243__$1;
(statearr_40256_40274[(2)] = null);

(statearr_40256_40274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40244 === (8))){
var inst_40225 = (state_40243[(7)]);
var state_40243__$1 = state_40243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40243__$1,(11),out,inst_40225);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___40264,out))
;
return ((function (switch__26161__auto__,c__26217__auto___40264,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40260 = [null,null,null,null,null,null,null,null,null];
(statearr_40260[(0)] = state_machine__26162__auto__);

(statearr_40260[(1)] = (1));

return statearr_40260;
});
var state_machine__26162__auto____1 = (function (state_40243){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40261){if((e40261 instanceof Object)){
var ex__26165__auto__ = e40261;
var statearr_40262_40275 = state_40243;
(statearr_40262_40275[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40276 = state_40243;
state_40243 = G__40276;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40243){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___40264,out))
})();
var state__26219__auto__ = (function (){var statearr_40263 = f__26218__auto__.call(null);
(statearr_40263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___40264);

return statearr_40263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___40264,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__26217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto__){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto__){
return (function (state_40442){
var state_val_40443 = (state_40442[(1)]);
if((state_val_40443 === (7))){
var inst_40438 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40444_40485 = state_40442__$1;
(statearr_40444_40485[(2)] = inst_40438);

(statearr_40444_40485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (20))){
var inst_40408 = (state_40442[(7)]);
var inst_40419 = (state_40442[(2)]);
var inst_40420 = cljs.core.next.call(null,inst_40408);
var inst_40394 = inst_40420;
var inst_40395 = null;
var inst_40396 = (0);
var inst_40397 = (0);
var state_40442__$1 = (function (){var statearr_40445 = state_40442;
(statearr_40445[(8)] = inst_40395);

(statearr_40445[(9)] = inst_40394);

(statearr_40445[(10)] = inst_40396);

(statearr_40445[(11)] = inst_40419);

(statearr_40445[(12)] = inst_40397);

return statearr_40445;
})();
var statearr_40446_40486 = state_40442__$1;
(statearr_40446_40486[(2)] = null);

(statearr_40446_40486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (1))){
var state_40442__$1 = state_40442;
var statearr_40447_40487 = state_40442__$1;
(statearr_40447_40487[(2)] = null);

(statearr_40447_40487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (4))){
var inst_40383 = (state_40442[(13)]);
var inst_40383__$1 = (state_40442[(2)]);
var inst_40384 = (inst_40383__$1 == null);
var state_40442__$1 = (function (){var statearr_40448 = state_40442;
(statearr_40448[(13)] = inst_40383__$1);

return statearr_40448;
})();
if(cljs.core.truth_(inst_40384)){
var statearr_40449_40488 = state_40442__$1;
(statearr_40449_40488[(1)] = (5));

} else {
var statearr_40450_40489 = state_40442__$1;
(statearr_40450_40489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (15))){
var state_40442__$1 = state_40442;
var statearr_40454_40490 = state_40442__$1;
(statearr_40454_40490[(2)] = null);

(statearr_40454_40490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (21))){
var state_40442__$1 = state_40442;
var statearr_40455_40491 = state_40442__$1;
(statearr_40455_40491[(2)] = null);

(statearr_40455_40491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (13))){
var inst_40395 = (state_40442[(8)]);
var inst_40394 = (state_40442[(9)]);
var inst_40396 = (state_40442[(10)]);
var inst_40397 = (state_40442[(12)]);
var inst_40404 = (state_40442[(2)]);
var inst_40405 = (inst_40397 + (1));
var tmp40451 = inst_40395;
var tmp40452 = inst_40394;
var tmp40453 = inst_40396;
var inst_40394__$1 = tmp40452;
var inst_40395__$1 = tmp40451;
var inst_40396__$1 = tmp40453;
var inst_40397__$1 = inst_40405;
var state_40442__$1 = (function (){var statearr_40456 = state_40442;
(statearr_40456[(8)] = inst_40395__$1);

(statearr_40456[(9)] = inst_40394__$1);

(statearr_40456[(10)] = inst_40396__$1);

(statearr_40456[(14)] = inst_40404);

(statearr_40456[(12)] = inst_40397__$1);

return statearr_40456;
})();
var statearr_40457_40492 = state_40442__$1;
(statearr_40457_40492[(2)] = null);

(statearr_40457_40492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (22))){
var state_40442__$1 = state_40442;
var statearr_40458_40493 = state_40442__$1;
(statearr_40458_40493[(2)] = null);

(statearr_40458_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (6))){
var inst_40383 = (state_40442[(13)]);
var inst_40392 = f.call(null,inst_40383);
var inst_40393 = cljs.core.seq.call(null,inst_40392);
var inst_40394 = inst_40393;
var inst_40395 = null;
var inst_40396 = (0);
var inst_40397 = (0);
var state_40442__$1 = (function (){var statearr_40459 = state_40442;
(statearr_40459[(8)] = inst_40395);

(statearr_40459[(9)] = inst_40394);

(statearr_40459[(10)] = inst_40396);

(statearr_40459[(12)] = inst_40397);

return statearr_40459;
})();
var statearr_40460_40494 = state_40442__$1;
(statearr_40460_40494[(2)] = null);

(statearr_40460_40494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (17))){
var inst_40408 = (state_40442[(7)]);
var inst_40412 = cljs.core.chunk_first.call(null,inst_40408);
var inst_40413 = cljs.core.chunk_rest.call(null,inst_40408);
var inst_40414 = cljs.core.count.call(null,inst_40412);
var inst_40394 = inst_40413;
var inst_40395 = inst_40412;
var inst_40396 = inst_40414;
var inst_40397 = (0);
var state_40442__$1 = (function (){var statearr_40461 = state_40442;
(statearr_40461[(8)] = inst_40395);

(statearr_40461[(9)] = inst_40394);

(statearr_40461[(10)] = inst_40396);

(statearr_40461[(12)] = inst_40397);

return statearr_40461;
})();
var statearr_40462_40495 = state_40442__$1;
(statearr_40462_40495[(2)] = null);

(statearr_40462_40495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (3))){
var inst_40440 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40442__$1,inst_40440);
} else {
if((state_val_40443 === (12))){
var inst_40428 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40463_40496 = state_40442__$1;
(statearr_40463_40496[(2)] = inst_40428);

(statearr_40463_40496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (2))){
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40442__$1,(4),in$);
} else {
if((state_val_40443 === (23))){
var inst_40436 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40464_40497 = state_40442__$1;
(statearr_40464_40497[(2)] = inst_40436);

(statearr_40464_40497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (19))){
var inst_40423 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40465_40498 = state_40442__$1;
(statearr_40465_40498[(2)] = inst_40423);

(statearr_40465_40498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (11))){
var inst_40394 = (state_40442[(9)]);
var inst_40408 = (state_40442[(7)]);
var inst_40408__$1 = cljs.core.seq.call(null,inst_40394);
var state_40442__$1 = (function (){var statearr_40466 = state_40442;
(statearr_40466[(7)] = inst_40408__$1);

return statearr_40466;
})();
if(inst_40408__$1){
var statearr_40467_40499 = state_40442__$1;
(statearr_40467_40499[(1)] = (14));

} else {
var statearr_40468_40500 = state_40442__$1;
(statearr_40468_40500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (9))){
var inst_40430 = (state_40442[(2)]);
var inst_40431 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40442__$1 = (function (){var statearr_40469 = state_40442;
(statearr_40469[(15)] = inst_40430);

return statearr_40469;
})();
if(cljs.core.truth_(inst_40431)){
var statearr_40470_40501 = state_40442__$1;
(statearr_40470_40501[(1)] = (21));

} else {
var statearr_40471_40502 = state_40442__$1;
(statearr_40471_40502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (5))){
var inst_40386 = cljs.core.async.close_BANG_.call(null,out);
var state_40442__$1 = state_40442;
var statearr_40472_40503 = state_40442__$1;
(statearr_40472_40503[(2)] = inst_40386);

(statearr_40472_40503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (14))){
var inst_40408 = (state_40442[(7)]);
var inst_40410 = cljs.core.chunked_seq_QMARK_.call(null,inst_40408);
var state_40442__$1 = state_40442;
if(inst_40410){
var statearr_40473_40504 = state_40442__$1;
(statearr_40473_40504[(1)] = (17));

} else {
var statearr_40474_40505 = state_40442__$1;
(statearr_40474_40505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (16))){
var inst_40426 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40475_40506 = state_40442__$1;
(statearr_40475_40506[(2)] = inst_40426);

(statearr_40475_40506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (10))){
var inst_40395 = (state_40442[(8)]);
var inst_40397 = (state_40442[(12)]);
var inst_40402 = cljs.core._nth.call(null,inst_40395,inst_40397);
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40442__$1,(13),out,inst_40402);
} else {
if((state_val_40443 === (18))){
var inst_40408 = (state_40442[(7)]);
var inst_40417 = cljs.core.first.call(null,inst_40408);
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40442__$1,(20),out,inst_40417);
} else {
if((state_val_40443 === (8))){
var inst_40396 = (state_40442[(10)]);
var inst_40397 = (state_40442[(12)]);
var inst_40399 = (inst_40397 < inst_40396);
var inst_40400 = inst_40399;
var state_40442__$1 = state_40442;
if(cljs.core.truth_(inst_40400)){
var statearr_40476_40507 = state_40442__$1;
(statearr_40476_40507[(1)] = (10));

} else {
var statearr_40477_40508 = state_40442__$1;
(statearr_40477_40508[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto__))
;
return ((function (switch__26161__auto__,c__26217__auto__){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40481[(0)] = state_machine__26162__auto__);

(statearr_40481[(1)] = (1));

return statearr_40481;
});
var state_machine__26162__auto____1 = (function (state_40442){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40482){if((e40482 instanceof Object)){
var ex__26165__auto__ = e40482;
var statearr_40483_40509 = state_40442;
(statearr_40483_40509[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40510 = state_40442;
state_40442 = G__40510;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40442){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto__))
})();
var state__26219__auto__ = (function (){var statearr_40484 = f__26218__auto__.call(null);
(statearr_40484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto__);

return statearr_40484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto__))
);

return c__26217__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26217__auto___40607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___40607,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___40607,out){
return (function (state_40582){
var state_val_40583 = (state_40582[(1)]);
if((state_val_40583 === (7))){
var inst_40577 = (state_40582[(2)]);
var state_40582__$1 = state_40582;
var statearr_40584_40608 = state_40582__$1;
(statearr_40584_40608[(2)] = inst_40577);

(statearr_40584_40608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (1))){
var inst_40559 = null;
var state_40582__$1 = (function (){var statearr_40585 = state_40582;
(statearr_40585[(7)] = inst_40559);

return statearr_40585;
})();
var statearr_40586_40609 = state_40582__$1;
(statearr_40586_40609[(2)] = null);

(statearr_40586_40609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (4))){
var inst_40562 = (state_40582[(8)]);
var inst_40562__$1 = (state_40582[(2)]);
var inst_40563 = (inst_40562__$1 == null);
var inst_40564 = cljs.core.not.call(null,inst_40563);
var state_40582__$1 = (function (){var statearr_40587 = state_40582;
(statearr_40587[(8)] = inst_40562__$1);

return statearr_40587;
})();
if(inst_40564){
var statearr_40588_40610 = state_40582__$1;
(statearr_40588_40610[(1)] = (5));

} else {
var statearr_40589_40611 = state_40582__$1;
(statearr_40589_40611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (6))){
var state_40582__$1 = state_40582;
var statearr_40590_40612 = state_40582__$1;
(statearr_40590_40612[(2)] = null);

(statearr_40590_40612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (3))){
var inst_40579 = (state_40582[(2)]);
var inst_40580 = cljs.core.async.close_BANG_.call(null,out);
var state_40582__$1 = (function (){var statearr_40591 = state_40582;
(statearr_40591[(9)] = inst_40579);

return statearr_40591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40582__$1,inst_40580);
} else {
if((state_val_40583 === (2))){
var state_40582__$1 = state_40582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40582__$1,(4),ch);
} else {
if((state_val_40583 === (11))){
var inst_40562 = (state_40582[(8)]);
var inst_40571 = (state_40582[(2)]);
var inst_40559 = inst_40562;
var state_40582__$1 = (function (){var statearr_40592 = state_40582;
(statearr_40592[(7)] = inst_40559);

(statearr_40592[(10)] = inst_40571);

return statearr_40592;
})();
var statearr_40593_40613 = state_40582__$1;
(statearr_40593_40613[(2)] = null);

(statearr_40593_40613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (9))){
var inst_40562 = (state_40582[(8)]);
var state_40582__$1 = state_40582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40582__$1,(11),out,inst_40562);
} else {
if((state_val_40583 === (5))){
var inst_40559 = (state_40582[(7)]);
var inst_40562 = (state_40582[(8)]);
var inst_40566 = cljs.core._EQ_.call(null,inst_40562,inst_40559);
var state_40582__$1 = state_40582;
if(inst_40566){
var statearr_40595_40614 = state_40582__$1;
(statearr_40595_40614[(1)] = (8));

} else {
var statearr_40596_40615 = state_40582__$1;
(statearr_40596_40615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (10))){
var inst_40574 = (state_40582[(2)]);
var state_40582__$1 = state_40582;
var statearr_40597_40616 = state_40582__$1;
(statearr_40597_40616[(2)] = inst_40574);

(statearr_40597_40616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (8))){
var inst_40559 = (state_40582[(7)]);
var tmp40594 = inst_40559;
var inst_40559__$1 = tmp40594;
var state_40582__$1 = (function (){var statearr_40598 = state_40582;
(statearr_40598[(7)] = inst_40559__$1);

return statearr_40598;
})();
var statearr_40599_40617 = state_40582__$1;
(statearr_40599_40617[(2)] = null);

(statearr_40599_40617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___40607,out))
;
return ((function (switch__26161__auto__,c__26217__auto___40607,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40603[(0)] = state_machine__26162__auto__);

(statearr_40603[(1)] = (1));

return statearr_40603;
});
var state_machine__26162__auto____1 = (function (state_40582){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40604){if((e40604 instanceof Object)){
var ex__26165__auto__ = e40604;
var statearr_40605_40618 = state_40582;
(statearr_40605_40618[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40619 = state_40582;
state_40582 = G__40619;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40582){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___40607,out))
})();
var state__26219__auto__ = (function (){var statearr_40606 = f__26218__auto__.call(null);
(statearr_40606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___40607);

return statearr_40606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___40607,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26217__auto___40754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___40754,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___40754,out){
return (function (state_40724){
var state_val_40725 = (state_40724[(1)]);
if((state_val_40725 === (7))){
var inst_40720 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
var statearr_40726_40755 = state_40724__$1;
(statearr_40726_40755[(2)] = inst_40720);

(statearr_40726_40755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (1))){
var inst_40687 = (new Array(n));
var inst_40688 = inst_40687;
var inst_40689 = (0);
var state_40724__$1 = (function (){var statearr_40727 = state_40724;
(statearr_40727[(7)] = inst_40689);

(statearr_40727[(8)] = inst_40688);

return statearr_40727;
})();
var statearr_40728_40756 = state_40724__$1;
(statearr_40728_40756[(2)] = null);

(statearr_40728_40756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (4))){
var inst_40692 = (state_40724[(9)]);
var inst_40692__$1 = (state_40724[(2)]);
var inst_40693 = (inst_40692__$1 == null);
var inst_40694 = cljs.core.not.call(null,inst_40693);
var state_40724__$1 = (function (){var statearr_40729 = state_40724;
(statearr_40729[(9)] = inst_40692__$1);

return statearr_40729;
})();
if(inst_40694){
var statearr_40730_40757 = state_40724__$1;
(statearr_40730_40757[(1)] = (5));

} else {
var statearr_40731_40758 = state_40724__$1;
(statearr_40731_40758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (15))){
var inst_40714 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
var statearr_40732_40759 = state_40724__$1;
(statearr_40732_40759[(2)] = inst_40714);

(statearr_40732_40759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (13))){
var state_40724__$1 = state_40724;
var statearr_40733_40760 = state_40724__$1;
(statearr_40733_40760[(2)] = null);

(statearr_40733_40760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (6))){
var inst_40689 = (state_40724[(7)]);
var inst_40710 = (inst_40689 > (0));
var state_40724__$1 = state_40724;
if(cljs.core.truth_(inst_40710)){
var statearr_40734_40761 = state_40724__$1;
(statearr_40734_40761[(1)] = (12));

} else {
var statearr_40735_40762 = state_40724__$1;
(statearr_40735_40762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (3))){
var inst_40722 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40724__$1,inst_40722);
} else {
if((state_val_40725 === (12))){
var inst_40688 = (state_40724[(8)]);
var inst_40712 = cljs.core.vec.call(null,inst_40688);
var state_40724__$1 = state_40724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40724__$1,(15),out,inst_40712);
} else {
if((state_val_40725 === (2))){
var state_40724__$1 = state_40724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40724__$1,(4),ch);
} else {
if((state_val_40725 === (11))){
var inst_40704 = (state_40724[(2)]);
var inst_40705 = (new Array(n));
var inst_40688 = inst_40705;
var inst_40689 = (0);
var state_40724__$1 = (function (){var statearr_40736 = state_40724;
(statearr_40736[(7)] = inst_40689);

(statearr_40736[(10)] = inst_40704);

(statearr_40736[(8)] = inst_40688);

return statearr_40736;
})();
var statearr_40737_40763 = state_40724__$1;
(statearr_40737_40763[(2)] = null);

(statearr_40737_40763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (9))){
var inst_40688 = (state_40724[(8)]);
var inst_40702 = cljs.core.vec.call(null,inst_40688);
var state_40724__$1 = state_40724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40724__$1,(11),out,inst_40702);
} else {
if((state_val_40725 === (5))){
var inst_40689 = (state_40724[(7)]);
var inst_40692 = (state_40724[(9)]);
var inst_40697 = (state_40724[(11)]);
var inst_40688 = (state_40724[(8)]);
var inst_40696 = (inst_40688[inst_40689] = inst_40692);
var inst_40697__$1 = (inst_40689 + (1));
var inst_40698 = (inst_40697__$1 < n);
var state_40724__$1 = (function (){var statearr_40738 = state_40724;
(statearr_40738[(12)] = inst_40696);

(statearr_40738[(11)] = inst_40697__$1);

return statearr_40738;
})();
if(cljs.core.truth_(inst_40698)){
var statearr_40739_40764 = state_40724__$1;
(statearr_40739_40764[(1)] = (8));

} else {
var statearr_40740_40765 = state_40724__$1;
(statearr_40740_40765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (14))){
var inst_40717 = (state_40724[(2)]);
var inst_40718 = cljs.core.async.close_BANG_.call(null,out);
var state_40724__$1 = (function (){var statearr_40742 = state_40724;
(statearr_40742[(13)] = inst_40717);

return statearr_40742;
})();
var statearr_40743_40766 = state_40724__$1;
(statearr_40743_40766[(2)] = inst_40718);

(statearr_40743_40766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (10))){
var inst_40708 = (state_40724[(2)]);
var state_40724__$1 = state_40724;
var statearr_40744_40767 = state_40724__$1;
(statearr_40744_40767[(2)] = inst_40708);

(statearr_40744_40767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40725 === (8))){
var inst_40697 = (state_40724[(11)]);
var inst_40688 = (state_40724[(8)]);
var tmp40741 = inst_40688;
var inst_40688__$1 = tmp40741;
var inst_40689 = inst_40697;
var state_40724__$1 = (function (){var statearr_40745 = state_40724;
(statearr_40745[(7)] = inst_40689);

(statearr_40745[(8)] = inst_40688__$1);

return statearr_40745;
})();
var statearr_40746_40768 = state_40724__$1;
(statearr_40746_40768[(2)] = null);

(statearr_40746_40768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___40754,out))
;
return ((function (switch__26161__auto__,c__26217__auto___40754,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40750[(0)] = state_machine__26162__auto__);

(statearr_40750[(1)] = (1));

return statearr_40750;
});
var state_machine__26162__auto____1 = (function (state_40724){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40751){if((e40751 instanceof Object)){
var ex__26165__auto__ = e40751;
var statearr_40752_40769 = state_40724;
(statearr_40752_40769[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40770 = state_40724;
state_40724 = G__40770;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40724){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___40754,out))
})();
var state__26219__auto__ = (function (){var statearr_40753 = f__26218__auto__.call(null);
(statearr_40753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___40754);

return statearr_40753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___40754,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26217__auto___40913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26217__auto___40913,out){
return (function (){
var f__26218__auto__ = (function (){var switch__26161__auto__ = ((function (c__26217__auto___40913,out){
return (function (state_40883){
var state_val_40884 = (state_40883[(1)]);
if((state_val_40884 === (7))){
var inst_40879 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40885_40914 = state_40883__$1;
(statearr_40885_40914[(2)] = inst_40879);

(statearr_40885_40914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (1))){
var inst_40842 = [];
var inst_40843 = inst_40842;
var inst_40844 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40883__$1 = (function (){var statearr_40886 = state_40883;
(statearr_40886[(7)] = inst_40844);

(statearr_40886[(8)] = inst_40843);

return statearr_40886;
})();
var statearr_40887_40915 = state_40883__$1;
(statearr_40887_40915[(2)] = null);

(statearr_40887_40915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (4))){
var inst_40847 = (state_40883[(9)]);
var inst_40847__$1 = (state_40883[(2)]);
var inst_40848 = (inst_40847__$1 == null);
var inst_40849 = cljs.core.not.call(null,inst_40848);
var state_40883__$1 = (function (){var statearr_40888 = state_40883;
(statearr_40888[(9)] = inst_40847__$1);

return statearr_40888;
})();
if(inst_40849){
var statearr_40889_40916 = state_40883__$1;
(statearr_40889_40916[(1)] = (5));

} else {
var statearr_40890_40917 = state_40883__$1;
(statearr_40890_40917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (15))){
var inst_40873 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40891_40918 = state_40883__$1;
(statearr_40891_40918[(2)] = inst_40873);

(statearr_40891_40918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (13))){
var state_40883__$1 = state_40883;
var statearr_40892_40919 = state_40883__$1;
(statearr_40892_40919[(2)] = null);

(statearr_40892_40919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (6))){
var inst_40843 = (state_40883[(8)]);
var inst_40868 = inst_40843.length;
var inst_40869 = (inst_40868 > (0));
var state_40883__$1 = state_40883;
if(cljs.core.truth_(inst_40869)){
var statearr_40893_40920 = state_40883__$1;
(statearr_40893_40920[(1)] = (12));

} else {
var statearr_40894_40921 = state_40883__$1;
(statearr_40894_40921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (3))){
var inst_40881 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40883__$1,inst_40881);
} else {
if((state_val_40884 === (12))){
var inst_40843 = (state_40883[(8)]);
var inst_40871 = cljs.core.vec.call(null,inst_40843);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40883__$1,(15),out,inst_40871);
} else {
if((state_val_40884 === (2))){
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40883__$1,(4),ch);
} else {
if((state_val_40884 === (11))){
var inst_40851 = (state_40883[(10)]);
var inst_40847 = (state_40883[(9)]);
var inst_40861 = (state_40883[(2)]);
var inst_40862 = [];
var inst_40863 = inst_40862.push(inst_40847);
var inst_40843 = inst_40862;
var inst_40844 = inst_40851;
var state_40883__$1 = (function (){var statearr_40895 = state_40883;
(statearr_40895[(11)] = inst_40861);

(statearr_40895[(7)] = inst_40844);

(statearr_40895[(12)] = inst_40863);

(statearr_40895[(8)] = inst_40843);

return statearr_40895;
})();
var statearr_40896_40922 = state_40883__$1;
(statearr_40896_40922[(2)] = null);

(statearr_40896_40922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (9))){
var inst_40843 = (state_40883[(8)]);
var inst_40859 = cljs.core.vec.call(null,inst_40843);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40883__$1,(11),out,inst_40859);
} else {
if((state_val_40884 === (5))){
var inst_40851 = (state_40883[(10)]);
var inst_40844 = (state_40883[(7)]);
var inst_40847 = (state_40883[(9)]);
var inst_40851__$1 = f.call(null,inst_40847);
var inst_40852 = cljs.core._EQ_.call(null,inst_40851__$1,inst_40844);
var inst_40853 = cljs.core.keyword_identical_QMARK_.call(null,inst_40844,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40854 = (inst_40852) || (inst_40853);
var state_40883__$1 = (function (){var statearr_40897 = state_40883;
(statearr_40897[(10)] = inst_40851__$1);

return statearr_40897;
})();
if(cljs.core.truth_(inst_40854)){
var statearr_40898_40923 = state_40883__$1;
(statearr_40898_40923[(1)] = (8));

} else {
var statearr_40899_40924 = state_40883__$1;
(statearr_40899_40924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (14))){
var inst_40876 = (state_40883[(2)]);
var inst_40877 = cljs.core.async.close_BANG_.call(null,out);
var state_40883__$1 = (function (){var statearr_40901 = state_40883;
(statearr_40901[(13)] = inst_40876);

return statearr_40901;
})();
var statearr_40902_40925 = state_40883__$1;
(statearr_40902_40925[(2)] = inst_40877);

(statearr_40902_40925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (10))){
var inst_40866 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40903_40926 = state_40883__$1;
(statearr_40903_40926[(2)] = inst_40866);

(statearr_40903_40926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (8))){
var inst_40851 = (state_40883[(10)]);
var inst_40843 = (state_40883[(8)]);
var inst_40847 = (state_40883[(9)]);
var inst_40856 = inst_40843.push(inst_40847);
var tmp40900 = inst_40843;
var inst_40843__$1 = tmp40900;
var inst_40844 = inst_40851;
var state_40883__$1 = (function (){var statearr_40904 = state_40883;
(statearr_40904[(7)] = inst_40844);

(statearr_40904[(8)] = inst_40843__$1);

(statearr_40904[(14)] = inst_40856);

return statearr_40904;
})();
var statearr_40905_40927 = state_40883__$1;
(statearr_40905_40927[(2)] = null);

(statearr_40905_40927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26217__auto___40913,out))
;
return ((function (switch__26161__auto__,c__26217__auto___40913,out){
return (function() {
var state_machine__26162__auto__ = null;
var state_machine__26162__auto____0 = (function (){
var statearr_40909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40909[(0)] = state_machine__26162__auto__);

(statearr_40909[(1)] = (1));

return statearr_40909;
});
var state_machine__26162__auto____1 = (function (state_40883){
while(true){
var ret_value__26163__auto__ = (function (){try{while(true){
var result__26164__auto__ = switch__26161__auto__.call(null,state_40883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26164__auto__;
}
break;
}
}catch (e40910){if((e40910 instanceof Object)){
var ex__26165__auto__ = e40910;
var statearr_40911_40928 = state_40883;
(statearr_40911_40928[(5)] = ex__26165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40929 = state_40883;
state_40883 = G__40929;
continue;
} else {
return ret_value__26163__auto__;
}
break;
}
});
state_machine__26162__auto__ = function(state_40883){
switch(arguments.length){
case 0:
return state_machine__26162__auto____0.call(this);
case 1:
return state_machine__26162__auto____1.call(this,state_40883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26162__auto____0;
state_machine__26162__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26162__auto____1;
return state_machine__26162__auto__;
})()
;})(switch__26161__auto__,c__26217__auto___40913,out))
})();
var state__26219__auto__ = (function (){var statearr_40912 = f__26218__auto__.call(null);
(statearr_40912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26217__auto___40913);

return statearr_40912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26219__auto__);
});})(c__26217__auto___40913,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1425613926339