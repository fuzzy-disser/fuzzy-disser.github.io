// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26444 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26444 = (function (f,fn_handler,meta26445){
this.f = f;
this.fn_handler = fn_handler;
this.meta26445 = meta26445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26444.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26446){
var self__ = this;
var _26446__$1 = this;
return self__.meta26445;
});

cljs.core.async.t26444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26446,meta26445__$1){
var self__ = this;
var _26446__$1 = this;
return (new cljs.core.async.t26444(self__.f,self__.fn_handler,meta26445__$1));
});

cljs.core.async.t26444.cljs$lang$type = true;

cljs.core.async.t26444.cljs$lang$ctorStr = "cljs.core.async/t26444";

cljs.core.async.t26444.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t26444");
});

cljs.core.async.__GT_t26444 = (function __GT_t26444(f__$1,fn_handler__$1,meta26445){
return (new cljs.core.async.t26444(f__$1,fn_handler__$1,meta26445));
});

}

return (new cljs.core.async.t26444(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__26448 = buff;
if(G__26448){
var bit__18672__auto__ = null;
if(cljs.core.truth_((function (){var or__17991__auto__ = bit__18672__auto__;
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
return G__26448.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26448.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26448);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26448);
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
var val_26449 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26449);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26449,ret){
return (function (){
return fn1.call(null,val_26449);
});})(val_26449,ret))
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
var n__18878__auto___26450 = n;
var x_26451 = (0);
while(true){
if((x_26451 < n__18878__auto___26450)){
(a[x_26451] = (0));

var G__26452 = (x_26451 + (1));
x_26451 = G__26452;
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

var G__26453 = (i + (1));
i = G__26453;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26457 = (function (flag,alt_flag,meta26458){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26458 = meta26458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26457.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26459){
var self__ = this;
var _26459__$1 = this;
return self__.meta26458;
});})(flag))
;

cljs.core.async.t26457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26459,meta26458__$1){
var self__ = this;
var _26459__$1 = this;
return (new cljs.core.async.t26457(self__.flag,self__.alt_flag,meta26458__$1));
});})(flag))
;

cljs.core.async.t26457.cljs$lang$type = true;

cljs.core.async.t26457.cljs$lang$ctorStr = "cljs.core.async/t26457";

cljs.core.async.t26457.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t26457");
});})(flag))
;

cljs.core.async.__GT_t26457 = ((function (flag){
return (function __GT_t26457(flag__$1,alt_flag__$1,meta26458){
return (new cljs.core.async.t26457(flag__$1,alt_flag__$1,meta26458));
});})(flag))
;

}

return (new cljs.core.async.t26457(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26463 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26463 = (function (cb,flag,alt_handler,meta26464){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26464 = meta26464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26465){
var self__ = this;
var _26465__$1 = this;
return self__.meta26464;
});

cljs.core.async.t26463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26465,meta26464__$1){
var self__ = this;
var _26465__$1 = this;
return (new cljs.core.async.t26463(self__.cb,self__.flag,self__.alt_handler,meta26464__$1));
});

cljs.core.async.t26463.cljs$lang$type = true;

cljs.core.async.t26463.cljs$lang$ctorStr = "cljs.core.async/t26463";

cljs.core.async.t26463.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t26463");
});

cljs.core.async.__GT_t26463 = (function __GT_t26463(cb__$1,flag__$1,alt_handler__$1,meta26464){
return (new cljs.core.async.t26463(cb__$1,flag__$1,alt_handler__$1,meta26464));
});

}

return (new cljs.core.async.t26463(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__26466_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26466_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26467_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26467_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17991__auto__ = wport;
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26468 = (i + (1));
i = G__26468;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17991__auto__ = ret;
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17979__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17979__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17979__auto__;
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
var alts_BANG___delegate = function (ports,p__26469){
var map__26471 = p__26469;
var map__26471__$1 = ((cljs.core.seq_QMARK_.call(null,map__26471))?cljs.core.apply.call(null,cljs.core.hash_map,map__26471):map__26471);
var opts = map__26471__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26469 = null;
if (arguments.length > 1) {
  p__26469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__26469);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26472){
var ports = cljs.core.first(arglist__26472);
var p__26469 = cljs.core.rest(arglist__26472);
return alts_BANG___delegate(ports,p__26469);
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
var c__20653__auto___26567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___26567){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___26567){
return (function (state_26543){
var state_val_26544 = (state_26543[(1)]);
if((state_val_26544 === (7))){
var inst_26539 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
var statearr_26545_26568 = state_26543__$1;
(statearr_26545_26568[(2)] = inst_26539);

(statearr_26545_26568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (1))){
var state_26543__$1 = state_26543;
var statearr_26546_26569 = state_26543__$1;
(statearr_26546_26569[(2)] = null);

(statearr_26546_26569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (4))){
var inst_26522 = (state_26543[(7)]);
var inst_26522__$1 = (state_26543[(2)]);
var inst_26523 = (inst_26522__$1 == null);
var state_26543__$1 = (function (){var statearr_26547 = state_26543;
(statearr_26547[(7)] = inst_26522__$1);

return statearr_26547;
})();
if(cljs.core.truth_(inst_26523)){
var statearr_26548_26570 = state_26543__$1;
(statearr_26548_26570[(1)] = (5));

} else {
var statearr_26549_26571 = state_26543__$1;
(statearr_26549_26571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (13))){
var state_26543__$1 = state_26543;
var statearr_26550_26572 = state_26543__$1;
(statearr_26550_26572[(2)] = null);

(statearr_26550_26572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (6))){
var inst_26522 = (state_26543[(7)]);
var state_26543__$1 = state_26543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26543__$1,(11),to,inst_26522);
} else {
if((state_val_26544 === (3))){
var inst_26541 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26543__$1,inst_26541);
} else {
if((state_val_26544 === (12))){
var state_26543__$1 = state_26543;
var statearr_26551_26573 = state_26543__$1;
(statearr_26551_26573[(2)] = null);

(statearr_26551_26573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (2))){
var state_26543__$1 = state_26543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26543__$1,(4),from);
} else {
if((state_val_26544 === (11))){
var inst_26532 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
if(cljs.core.truth_(inst_26532)){
var statearr_26552_26574 = state_26543__$1;
(statearr_26552_26574[(1)] = (12));

} else {
var statearr_26553_26575 = state_26543__$1;
(statearr_26553_26575[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (9))){
var state_26543__$1 = state_26543;
var statearr_26554_26576 = state_26543__$1;
(statearr_26554_26576[(2)] = null);

(statearr_26554_26576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (5))){
var state_26543__$1 = state_26543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26555_26577 = state_26543__$1;
(statearr_26555_26577[(1)] = (8));

} else {
var statearr_26556_26578 = state_26543__$1;
(statearr_26556_26578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (14))){
var inst_26537 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
var statearr_26557_26579 = state_26543__$1;
(statearr_26557_26579[(2)] = inst_26537);

(statearr_26557_26579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (10))){
var inst_26529 = (state_26543[(2)]);
var state_26543__$1 = state_26543;
var statearr_26558_26580 = state_26543__$1;
(statearr_26558_26580[(2)] = inst_26529);

(statearr_26558_26580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26544 === (8))){
var inst_26526 = cljs.core.async.close_BANG_.call(null,to);
var state_26543__$1 = state_26543;
var statearr_26559_26581 = state_26543__$1;
(statearr_26559_26581[(2)] = inst_26526);

(statearr_26559_26581[(1)] = (10));


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
});})(c__20653__auto___26567))
;
return ((function (switch__20597__auto__,c__20653__auto___26567){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_26563 = [null,null,null,null,null,null,null,null];
(statearr_26563[(0)] = state_machine__20598__auto__);

(statearr_26563[(1)] = (1));

return statearr_26563;
});
var state_machine__20598__auto____1 = (function (state_26543){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_26543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e26564){if((e26564 instanceof Object)){
var ex__20601__auto__ = e26564;
var statearr_26565_26582 = state_26543;
(statearr_26565_26582[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26583 = state_26543;
state_26543 = G__26583;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_26543){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_26543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___26567))
})();
var state__20655__auto__ = (function (){var statearr_26566 = f__20654__auto__.call(null);
(statearr_26566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___26567);

return statearr_26566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___26567))
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
return (function (p__26767){
var vec__26768 = p__26767;
var v = cljs.core.nth.call(null,vec__26768,(0),null);
var p = cljs.core.nth.call(null,vec__26768,(1),null);
var job = vec__26768;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20653__auto___26950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___26950,res,vec__26768,v,p,job,jobs,results){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___26950,res,vec__26768,v,p,job,jobs,results){
return (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (2))){
var inst_26770 = (state_26773[(2)]);
var inst_26771 = cljs.core.async.close_BANG_.call(null,res);
var state_26773__$1 = (function (){var statearr_26775 = state_26773;
(statearr_26775[(7)] = inst_26770);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
if((state_val_26774 === (1))){
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20653__auto___26950,res,vec__26768,v,p,job,jobs,results))
;
return ((function (switch__20597__auto__,c__20653__auto___26950,res,vec__26768,v,p,job,jobs,results){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_26779 = [null,null,null,null,null,null,null,null];
(statearr_26779[(0)] = state_machine__20598__auto__);

(statearr_26779[(1)] = (1));

return statearr_26779;
});
var state_machine__20598__auto____1 = (function (state_26773){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e26780){if((e26780 instanceof Object)){
var ex__20601__auto__ = e26780;
var statearr_26781_26951 = state_26773;
(statearr_26781_26951[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26952 = state_26773;
state_26773 = G__26952;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___26950,res,vec__26768,v,p,job,jobs,results))
})();
var state__20655__auto__ = (function (){var statearr_26782 = f__20654__auto__.call(null);
(statearr_26782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___26950);

return statearr_26782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___26950,res,vec__26768,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26783){
var vec__26784 = p__26783;
var v = cljs.core.nth.call(null,vec__26784,(0),null);
var p = cljs.core.nth.call(null,vec__26784,(1),null);
var job = vec__26784;
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
var n__18878__auto___26953 = n;
var __26954 = (0);
while(true){
if((__26954 < n__18878__auto___26953)){
var G__26785_26955 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26785_26955) {
case "async":
var c__20653__auto___26957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26954,c__20653__auto___26957,G__26785_26955,n__18878__auto___26953,jobs,results,process,async){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (__26954,c__20653__auto___26957,G__26785_26955,n__18878__auto___26953,jobs,results,process,async){
return (function (state_26798){
var state_val_26799 = (state_26798[(1)]);
if((state_val_26799 === (7))){
var inst_26794 = (state_26798[(2)]);
var state_26798__$1 = state_26798;
var statearr_26800_26958 = state_26798__$1;
(statearr_26800_26958[(2)] = inst_26794);

(statearr_26800_26958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (6))){
var state_26798__$1 = state_26798;
var statearr_26801_26959 = state_26798__$1;
(statearr_26801_26959[(2)] = null);

(statearr_26801_26959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (5))){
var state_26798__$1 = state_26798;
var statearr_26802_26960 = state_26798__$1;
(statearr_26802_26960[(2)] = null);

(statearr_26802_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (4))){
var inst_26788 = (state_26798[(2)]);
var inst_26789 = async.call(null,inst_26788);
var state_26798__$1 = state_26798;
if(cljs.core.truth_(inst_26789)){
var statearr_26803_26961 = state_26798__$1;
(statearr_26803_26961[(1)] = (5));

} else {
var statearr_26804_26962 = state_26798__$1;
(statearr_26804_26962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (3))){
var inst_26796 = (state_26798[(2)]);
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26798__$1,inst_26796);
} else {
if((state_val_26799 === (2))){
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26798__$1,(4),jobs);
} else {
if((state_val_26799 === (1))){
var state_26798__$1 = state_26798;
var statearr_26805_26963 = state_26798__$1;
(statearr_26805_26963[(2)] = null);

(statearr_26805_26963[(1)] = (2));


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
});})(__26954,c__20653__auto___26957,G__26785_26955,n__18878__auto___26953,jobs,results,process,async))
;
return ((function (__26954,switch__20597__auto__,c__20653__auto___26957,G__26785_26955,n__18878__auto___26953,jobs,results,process,async){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_26809 = [null,null,null,null,null,null,null];
(statearr_26809[(0)] = state_machine__20598__auto__);

(statearr_26809[(1)] = (1));

return statearr_26809;
});
var state_machine__20598__auto____1 = (function (state_26798){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_26798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e26810){if((e26810 instanceof Object)){
var ex__20601__auto__ = e26810;
var statearr_26811_26964 = state_26798;
(statearr_26811_26964[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26965 = state_26798;
state_26798 = G__26965;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_26798){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_26798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(__26954,switch__20597__auto__,c__20653__auto___26957,G__26785_26955,n__18878__auto___26953,jobs,results,process,async))
})();
var state__20655__auto__ = (function (){var statearr_26812 = f__20654__auto__.call(null);
(statearr_26812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___26957);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(__26954,c__20653__auto___26957,G__26785_26955,n__18878__auto___26953,jobs,results,process,async))
);


break;
case "compute":
var c__20653__auto___26966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26954,c__20653__auto___26966,G__26785_26955,n__18878__auto___26953,jobs,results,process,async){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (__26954,c__20653__auto___26966,G__26785_26955,n__18878__auto___26953,jobs,results,process,async){
return (function (state_26825){
var state_val_26826 = (state_26825[(1)]);
if((state_val_26826 === (7))){
var inst_26821 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
var statearr_26827_26967 = state_26825__$1;
(statearr_26827_26967[(2)] = inst_26821);

(statearr_26827_26967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (6))){
var state_26825__$1 = state_26825;
var statearr_26828_26968 = state_26825__$1;
(statearr_26828_26968[(2)] = null);

(statearr_26828_26968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (5))){
var state_26825__$1 = state_26825;
var statearr_26829_26969 = state_26825__$1;
(statearr_26829_26969[(2)] = null);

(statearr_26829_26969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (4))){
var inst_26815 = (state_26825[(2)]);
var inst_26816 = process.call(null,inst_26815);
var state_26825__$1 = state_26825;
if(cljs.core.truth_(inst_26816)){
var statearr_26830_26970 = state_26825__$1;
(statearr_26830_26970[(1)] = (5));

} else {
var statearr_26831_26971 = state_26825__$1;
(statearr_26831_26971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (3))){
var inst_26823 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26825__$1,inst_26823);
} else {
if((state_val_26826 === (2))){
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(4),jobs);
} else {
if((state_val_26826 === (1))){
var state_26825__$1 = state_26825;
var statearr_26832_26972 = state_26825__$1;
(statearr_26832_26972[(2)] = null);

(statearr_26832_26972[(1)] = (2));


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
});})(__26954,c__20653__auto___26966,G__26785_26955,n__18878__auto___26953,jobs,results,process,async))
;
return ((function (__26954,switch__20597__auto__,c__20653__auto___26966,G__26785_26955,n__18878__auto___26953,jobs,results,process,async){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_26836 = [null,null,null,null,null,null,null];
(statearr_26836[(0)] = state_machine__20598__auto__);

(statearr_26836[(1)] = (1));

return statearr_26836;
});
var state_machine__20598__auto____1 = (function (state_26825){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_26825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e26837){if((e26837 instanceof Object)){
var ex__20601__auto__ = e26837;
var statearr_26838_26973 = state_26825;
(statearr_26838_26973[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26974 = state_26825;
state_26825 = G__26974;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_26825){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_26825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(__26954,switch__20597__auto__,c__20653__auto___26966,G__26785_26955,n__18878__auto___26953,jobs,results,process,async))
})();
var state__20655__auto__ = (function (){var statearr_26839 = f__20654__auto__.call(null);
(statearr_26839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___26966);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(__26954,c__20653__auto___26966,G__26785_26955,n__18878__auto___26953,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26975 = (__26954 + (1));
__26954 = G__26975;
continue;
} else {
}
break;
}

var c__20653__auto___26976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___26976,jobs,results,process,async){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___26976,jobs,results,process,async){
return (function (state_26861){
var state_val_26862 = (state_26861[(1)]);
if((state_val_26862 === (9))){
var inst_26854 = (state_26861[(2)]);
var state_26861__$1 = (function (){var statearr_26863 = state_26861;
(statearr_26863[(7)] = inst_26854);

return statearr_26863;
})();
var statearr_26864_26977 = state_26861__$1;
(statearr_26864_26977[(2)] = null);

(statearr_26864_26977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (8))){
var inst_26847 = (state_26861[(8)]);
var inst_26852 = (state_26861[(2)]);
var state_26861__$1 = (function (){var statearr_26865 = state_26861;
(statearr_26865[(9)] = inst_26852);

return statearr_26865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26861__$1,(9),results,inst_26847);
} else {
if((state_val_26862 === (7))){
var inst_26857 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26866_26978 = state_26861__$1;
(statearr_26866_26978[(2)] = inst_26857);

(statearr_26866_26978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (6))){
var inst_26842 = (state_26861[(10)]);
var inst_26847 = (state_26861[(8)]);
var inst_26847__$1 = cljs.core.async.chan.call(null,(1));
var inst_26848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26849 = [inst_26842,inst_26847__$1];
var inst_26850 = (new cljs.core.PersistentVector(null,2,(5),inst_26848,inst_26849,null));
var state_26861__$1 = (function (){var statearr_26867 = state_26861;
(statearr_26867[(8)] = inst_26847__$1);

return statearr_26867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26861__$1,(8),jobs,inst_26850);
} else {
if((state_val_26862 === (5))){
var inst_26845 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26861__$1 = state_26861;
var statearr_26868_26979 = state_26861__$1;
(statearr_26868_26979[(2)] = inst_26845);

(statearr_26868_26979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (4))){
var inst_26842 = (state_26861[(10)]);
var inst_26842__$1 = (state_26861[(2)]);
var inst_26843 = (inst_26842__$1 == null);
var state_26861__$1 = (function (){var statearr_26869 = state_26861;
(statearr_26869[(10)] = inst_26842__$1);

return statearr_26869;
})();
if(cljs.core.truth_(inst_26843)){
var statearr_26870_26980 = state_26861__$1;
(statearr_26870_26980[(1)] = (5));

} else {
var statearr_26871_26981 = state_26861__$1;
(statearr_26871_26981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (3))){
var inst_26859 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26861__$1,inst_26859);
} else {
if((state_val_26862 === (2))){
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26861__$1,(4),from);
} else {
if((state_val_26862 === (1))){
var state_26861__$1 = state_26861;
var statearr_26872_26982 = state_26861__$1;
(statearr_26872_26982[(2)] = null);

(statearr_26872_26982[(1)] = (2));


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
});})(c__20653__auto___26976,jobs,results,process,async))
;
return ((function (switch__20597__auto__,c__20653__auto___26976,jobs,results,process,async){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_26876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26876[(0)] = state_machine__20598__auto__);

(statearr_26876[(1)] = (1));

return statearr_26876;
});
var state_machine__20598__auto____1 = (function (state_26861){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_26861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e26877){if((e26877 instanceof Object)){
var ex__20601__auto__ = e26877;
var statearr_26878_26983 = state_26861;
(statearr_26878_26983[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26984 = state_26861;
state_26861 = G__26984;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_26861){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_26861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___26976,jobs,results,process,async))
})();
var state__20655__auto__ = (function (){var statearr_26879 = f__20654__auto__.call(null);
(statearr_26879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___26976);

return statearr_26879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___26976,jobs,results,process,async))
);


var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__,jobs,results,process,async){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__,jobs,results,process,async){
return (function (state_26917){
var state_val_26918 = (state_26917[(1)]);
if((state_val_26918 === (7))){
var inst_26913 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26919_26985 = state_26917__$1;
(statearr_26919_26985[(2)] = inst_26913);

(statearr_26919_26985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (20))){
var state_26917__$1 = state_26917;
var statearr_26920_26986 = state_26917__$1;
(statearr_26920_26986[(2)] = null);

(statearr_26920_26986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (1))){
var state_26917__$1 = state_26917;
var statearr_26921_26987 = state_26917__$1;
(statearr_26921_26987[(2)] = null);

(statearr_26921_26987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (4))){
var inst_26882 = (state_26917[(7)]);
var inst_26882__$1 = (state_26917[(2)]);
var inst_26883 = (inst_26882__$1 == null);
var state_26917__$1 = (function (){var statearr_26922 = state_26917;
(statearr_26922[(7)] = inst_26882__$1);

return statearr_26922;
})();
if(cljs.core.truth_(inst_26883)){
var statearr_26923_26988 = state_26917__$1;
(statearr_26923_26988[(1)] = (5));

} else {
var statearr_26924_26989 = state_26917__$1;
(statearr_26924_26989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (15))){
var inst_26895 = (state_26917[(8)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26917__$1,(18),to,inst_26895);
} else {
if((state_val_26918 === (21))){
var inst_26908 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26925_26990 = state_26917__$1;
(statearr_26925_26990[(2)] = inst_26908);

(statearr_26925_26990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (13))){
var inst_26910 = (state_26917[(2)]);
var state_26917__$1 = (function (){var statearr_26926 = state_26917;
(statearr_26926[(9)] = inst_26910);

return statearr_26926;
})();
var statearr_26927_26991 = state_26917__$1;
(statearr_26927_26991[(2)] = null);

(statearr_26927_26991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (6))){
var inst_26882 = (state_26917[(7)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,(11),inst_26882);
} else {
if((state_val_26918 === (17))){
var inst_26903 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
if(cljs.core.truth_(inst_26903)){
var statearr_26928_26992 = state_26917__$1;
(statearr_26928_26992[(1)] = (19));

} else {
var statearr_26929_26993 = state_26917__$1;
(statearr_26929_26993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (3))){
var inst_26915 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26917__$1,inst_26915);
} else {
if((state_val_26918 === (12))){
var inst_26892 = (state_26917[(10)]);
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,(14),inst_26892);
} else {
if((state_val_26918 === (2))){
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,(4),results);
} else {
if((state_val_26918 === (19))){
var state_26917__$1 = state_26917;
var statearr_26930_26994 = state_26917__$1;
(statearr_26930_26994[(2)] = null);

(statearr_26930_26994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (11))){
var inst_26892 = (state_26917[(2)]);
var state_26917__$1 = (function (){var statearr_26931 = state_26917;
(statearr_26931[(10)] = inst_26892);

return statearr_26931;
})();
var statearr_26932_26995 = state_26917__$1;
(statearr_26932_26995[(2)] = null);

(statearr_26932_26995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (9))){
var state_26917__$1 = state_26917;
var statearr_26933_26996 = state_26917__$1;
(statearr_26933_26996[(2)] = null);

(statearr_26933_26996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (5))){
var state_26917__$1 = state_26917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26934_26997 = state_26917__$1;
(statearr_26934_26997[(1)] = (8));

} else {
var statearr_26935_26998 = state_26917__$1;
(statearr_26935_26998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (14))){
var inst_26895 = (state_26917[(8)]);
var inst_26897 = (state_26917[(11)]);
var inst_26895__$1 = (state_26917[(2)]);
var inst_26896 = (inst_26895__$1 == null);
var inst_26897__$1 = cljs.core.not.call(null,inst_26896);
var state_26917__$1 = (function (){var statearr_26936 = state_26917;
(statearr_26936[(8)] = inst_26895__$1);

(statearr_26936[(11)] = inst_26897__$1);

return statearr_26936;
})();
if(inst_26897__$1){
var statearr_26937_26999 = state_26917__$1;
(statearr_26937_26999[(1)] = (15));

} else {
var statearr_26938_27000 = state_26917__$1;
(statearr_26938_27000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (16))){
var inst_26897 = (state_26917[(11)]);
var state_26917__$1 = state_26917;
var statearr_26939_27001 = state_26917__$1;
(statearr_26939_27001[(2)] = inst_26897);

(statearr_26939_27001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (10))){
var inst_26889 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26940_27002 = state_26917__$1;
(statearr_26940_27002[(2)] = inst_26889);

(statearr_26940_27002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (18))){
var inst_26900 = (state_26917[(2)]);
var state_26917__$1 = state_26917;
var statearr_26941_27003 = state_26917__$1;
(statearr_26941_27003[(2)] = inst_26900);

(statearr_26941_27003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26918 === (8))){
var inst_26886 = cljs.core.async.close_BANG_.call(null,to);
var state_26917__$1 = state_26917;
var statearr_26942_27004 = state_26917__$1;
(statearr_26942_27004[(2)] = inst_26886);

(statearr_26942_27004[(1)] = (10));


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
});})(c__20653__auto__,jobs,results,process,async))
;
return ((function (switch__20597__auto__,c__20653__auto__,jobs,results,process,async){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_26946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26946[(0)] = state_machine__20598__auto__);

(statearr_26946[(1)] = (1));

return statearr_26946;
});
var state_machine__20598__auto____1 = (function (state_26917){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_26917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e26947){if((e26947 instanceof Object)){
var ex__20601__auto__ = e26947;
var statearr_26948_27005 = state_26917;
(statearr_26948_27005[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27006 = state_26917;
state_26917 = G__27006;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_26917){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_26917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__,jobs,results,process,async))
})();
var state__20655__auto__ = (function (){var statearr_26949 = f__20654__auto__.call(null);
(statearr_26949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_26949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__,jobs,results,process,async))
);

return c__20653__auto__;
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
var c__20653__auto___27107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___27107,tc,fc){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___27107,tc,fc){
return (function (state_27082){
var state_val_27083 = (state_27082[(1)]);
if((state_val_27083 === (7))){
var inst_27078 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27084_27108 = state_27082__$1;
(statearr_27084_27108[(2)] = inst_27078);

(statearr_27084_27108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (1))){
var state_27082__$1 = state_27082;
var statearr_27085_27109 = state_27082__$1;
(statearr_27085_27109[(2)] = null);

(statearr_27085_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (4))){
var inst_27059 = (state_27082[(7)]);
var inst_27059__$1 = (state_27082[(2)]);
var inst_27060 = (inst_27059__$1 == null);
var state_27082__$1 = (function (){var statearr_27086 = state_27082;
(statearr_27086[(7)] = inst_27059__$1);

return statearr_27086;
})();
if(cljs.core.truth_(inst_27060)){
var statearr_27087_27110 = state_27082__$1;
(statearr_27087_27110[(1)] = (5));

} else {
var statearr_27088_27111 = state_27082__$1;
(statearr_27088_27111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (13))){
var state_27082__$1 = state_27082;
var statearr_27089_27112 = state_27082__$1;
(statearr_27089_27112[(2)] = null);

(statearr_27089_27112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (6))){
var inst_27059 = (state_27082[(7)]);
var inst_27065 = p.call(null,inst_27059);
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_27065)){
var statearr_27090_27113 = state_27082__$1;
(statearr_27090_27113[(1)] = (9));

} else {
var statearr_27091_27114 = state_27082__$1;
(statearr_27091_27114[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (3))){
var inst_27080 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27082__$1,inst_27080);
} else {
if((state_val_27083 === (12))){
var state_27082__$1 = state_27082;
var statearr_27092_27115 = state_27082__$1;
(statearr_27092_27115[(2)] = null);

(statearr_27092_27115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (2))){
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27082__$1,(4),ch);
} else {
if((state_val_27083 === (11))){
var inst_27059 = (state_27082[(7)]);
var inst_27069 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27082__$1,(8),inst_27069,inst_27059);
} else {
if((state_val_27083 === (9))){
var state_27082__$1 = state_27082;
var statearr_27093_27116 = state_27082__$1;
(statearr_27093_27116[(2)] = tc);

(statearr_27093_27116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (5))){
var inst_27062 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27063 = cljs.core.async.close_BANG_.call(null,fc);
var state_27082__$1 = (function (){var statearr_27094 = state_27082;
(statearr_27094[(8)] = inst_27062);

return statearr_27094;
})();
var statearr_27095_27117 = state_27082__$1;
(statearr_27095_27117[(2)] = inst_27063);

(statearr_27095_27117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (14))){
var inst_27076 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27096_27118 = state_27082__$1;
(statearr_27096_27118[(2)] = inst_27076);

(statearr_27096_27118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (10))){
var state_27082__$1 = state_27082;
var statearr_27097_27119 = state_27082__$1;
(statearr_27097_27119[(2)] = fc);

(statearr_27097_27119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (8))){
var inst_27071 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_27071)){
var statearr_27098_27120 = state_27082__$1;
(statearr_27098_27120[(1)] = (12));

} else {
var statearr_27099_27121 = state_27082__$1;
(statearr_27099_27121[(1)] = (13));

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
});})(c__20653__auto___27107,tc,fc))
;
return ((function (switch__20597__auto__,c__20653__auto___27107,tc,fc){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_27103 = [null,null,null,null,null,null,null,null,null];
(statearr_27103[(0)] = state_machine__20598__auto__);

(statearr_27103[(1)] = (1));

return statearr_27103;
});
var state_machine__20598__auto____1 = (function (state_27082){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_27082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e27104){if((e27104 instanceof Object)){
var ex__20601__auto__ = e27104;
var statearr_27105_27122 = state_27082;
(statearr_27105_27122[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27082;
state_27082 = G__27123;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_27082){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_27082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___27107,tc,fc))
})();
var state__20655__auto__ = (function (){var statearr_27106 = f__20654__auto__.call(null);
(statearr_27106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___27107);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___27107,tc,fc))
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
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_27170){
var state_val_27171 = (state_27170[(1)]);
if((state_val_27171 === (7))){
var inst_27166 = (state_27170[(2)]);
var state_27170__$1 = state_27170;
var statearr_27172_27188 = state_27170__$1;
(statearr_27172_27188[(2)] = inst_27166);

(statearr_27172_27188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (6))){
var inst_27159 = (state_27170[(7)]);
var inst_27156 = (state_27170[(8)]);
var inst_27163 = f.call(null,inst_27156,inst_27159);
var inst_27156__$1 = inst_27163;
var state_27170__$1 = (function (){var statearr_27173 = state_27170;
(statearr_27173[(8)] = inst_27156__$1);

return statearr_27173;
})();
var statearr_27174_27189 = state_27170__$1;
(statearr_27174_27189[(2)] = null);

(statearr_27174_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (5))){
var inst_27156 = (state_27170[(8)]);
var state_27170__$1 = state_27170;
var statearr_27175_27190 = state_27170__$1;
(statearr_27175_27190[(2)] = inst_27156);

(statearr_27175_27190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (4))){
var inst_27159 = (state_27170[(7)]);
var inst_27159__$1 = (state_27170[(2)]);
var inst_27160 = (inst_27159__$1 == null);
var state_27170__$1 = (function (){var statearr_27176 = state_27170;
(statearr_27176[(7)] = inst_27159__$1);

return statearr_27176;
})();
if(cljs.core.truth_(inst_27160)){
var statearr_27177_27191 = state_27170__$1;
(statearr_27177_27191[(1)] = (5));

} else {
var statearr_27178_27192 = state_27170__$1;
(statearr_27178_27192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27171 === (3))){
var inst_27168 = (state_27170[(2)]);
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27170__$1,inst_27168);
} else {
if((state_val_27171 === (2))){
var state_27170__$1 = state_27170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27170__$1,(4),ch);
} else {
if((state_val_27171 === (1))){
var inst_27156 = init;
var state_27170__$1 = (function (){var statearr_27179 = state_27170;
(statearr_27179[(8)] = inst_27156);

return statearr_27179;
})();
var statearr_27180_27193 = state_27170__$1;
(statearr_27180_27193[(2)] = null);

(statearr_27180_27193[(1)] = (2));


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
});})(c__20653__auto__))
;
return ((function (switch__20597__auto__,c__20653__auto__){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_27184 = [null,null,null,null,null,null,null,null,null];
(statearr_27184[(0)] = state_machine__20598__auto__);

(statearr_27184[(1)] = (1));

return statearr_27184;
});
var state_machine__20598__auto____1 = (function (state_27170){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_27170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e27185){if((e27185 instanceof Object)){
var ex__20601__auto__ = e27185;
var statearr_27186_27194 = state_27170;
(statearr_27186_27194[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27195 = state_27170;
state_27170 = G__27195;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_27170){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_27170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_27187 = f__20654__auto__.call(null);
(statearr_27187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_27187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
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
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_27269){
var state_val_27270 = (state_27269[(1)]);
if((state_val_27270 === (7))){
var inst_27251 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27271_27294 = state_27269__$1;
(statearr_27271_27294[(2)] = inst_27251);

(statearr_27271_27294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (1))){
var inst_27245 = cljs.core.seq.call(null,coll);
var inst_27246 = inst_27245;
var state_27269__$1 = (function (){var statearr_27272 = state_27269;
(statearr_27272[(7)] = inst_27246);

return statearr_27272;
})();
var statearr_27273_27295 = state_27269__$1;
(statearr_27273_27295[(2)] = null);

(statearr_27273_27295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (4))){
var inst_27246 = (state_27269[(7)]);
var inst_27249 = cljs.core.first.call(null,inst_27246);
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27269__$1,(7),ch,inst_27249);
} else {
if((state_val_27270 === (13))){
var inst_27263 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27274_27296 = state_27269__$1;
(statearr_27274_27296[(2)] = inst_27263);

(statearr_27274_27296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (6))){
var inst_27254 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27254)){
var statearr_27275_27297 = state_27269__$1;
(statearr_27275_27297[(1)] = (8));

} else {
var statearr_27276_27298 = state_27269__$1;
(statearr_27276_27298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (3))){
var inst_27267 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27269__$1,inst_27267);
} else {
if((state_val_27270 === (12))){
var state_27269__$1 = state_27269;
var statearr_27277_27299 = state_27269__$1;
(statearr_27277_27299[(2)] = null);

(statearr_27277_27299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (2))){
var inst_27246 = (state_27269[(7)]);
var state_27269__$1 = state_27269;
if(cljs.core.truth_(inst_27246)){
var statearr_27278_27300 = state_27269__$1;
(statearr_27278_27300[(1)] = (4));

} else {
var statearr_27279_27301 = state_27269__$1;
(statearr_27279_27301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (11))){
var inst_27260 = cljs.core.async.close_BANG_.call(null,ch);
var state_27269__$1 = state_27269;
var statearr_27280_27302 = state_27269__$1;
(statearr_27280_27302[(2)] = inst_27260);

(statearr_27280_27302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (9))){
var state_27269__$1 = state_27269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27281_27303 = state_27269__$1;
(statearr_27281_27303[(1)] = (11));

} else {
var statearr_27282_27304 = state_27269__$1;
(statearr_27282_27304[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (5))){
var inst_27246 = (state_27269[(7)]);
var state_27269__$1 = state_27269;
var statearr_27283_27305 = state_27269__$1;
(statearr_27283_27305[(2)] = inst_27246);

(statearr_27283_27305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (10))){
var inst_27265 = (state_27269[(2)]);
var state_27269__$1 = state_27269;
var statearr_27284_27306 = state_27269__$1;
(statearr_27284_27306[(2)] = inst_27265);

(statearr_27284_27306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27270 === (8))){
var inst_27246 = (state_27269[(7)]);
var inst_27256 = cljs.core.next.call(null,inst_27246);
var inst_27246__$1 = inst_27256;
var state_27269__$1 = (function (){var statearr_27285 = state_27269;
(statearr_27285[(7)] = inst_27246__$1);

return statearr_27285;
})();
var statearr_27286_27307 = state_27269__$1;
(statearr_27286_27307[(2)] = null);

(statearr_27286_27307[(1)] = (2));


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
});})(c__20653__auto__))
;
return ((function (switch__20597__auto__,c__20653__auto__){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_27290 = [null,null,null,null,null,null,null,null];
(statearr_27290[(0)] = state_machine__20598__auto__);

(statearr_27290[(1)] = (1));

return statearr_27290;
});
var state_machine__20598__auto____1 = (function (state_27269){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_27269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e27291){if((e27291 instanceof Object)){
var ex__20601__auto__ = e27291;
var statearr_27292_27308 = state_27269;
(statearr_27292_27308[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27309 = state_27269;
state_27269 = G__27309;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_27269){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_27269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_27293 = f__20654__auto__.call(null);
(statearr_27293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_27293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
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

cljs.core.async.Mux = (function (){var obj27311 = {};
return obj27311;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__17979__auto__ = _;
if(and__17979__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17979__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18635__auto__ = (((_ == null))?null:_);
return (function (){var or__17991__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27313 = {};
return obj27313;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
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
if(typeof cljs.core.async.t27535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27535 = (function (cs,ch,mult,meta27536){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27536 = meta27536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27535.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27535.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27537){
var self__ = this;
var _27537__$1 = this;
return self__.meta27536;
});})(cs))
;

cljs.core.async.t27535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27537,meta27536__$1){
var self__ = this;
var _27537__$1 = this;
return (new cljs.core.async.t27535(self__.cs,self__.ch,self__.mult,meta27536__$1));
});})(cs))
;

cljs.core.async.t27535.cljs$lang$type = true;

cljs.core.async.t27535.cljs$lang$ctorStr = "cljs.core.async/t27535";

cljs.core.async.t27535.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t27535");
});})(cs))
;

cljs.core.async.__GT_t27535 = ((function (cs){
return (function __GT_t27535(cs__$1,ch__$1,mult__$1,meta27536){
return (new cljs.core.async.t27535(cs__$1,ch__$1,mult__$1,meta27536));
});})(cs))
;

}

return (new cljs.core.async.t27535(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__20653__auto___27756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___27756,cs,m,dchan,dctr,done){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___27756,cs,m,dchan,dctr,done){
return (function (state_27668){
var state_val_27669 = (state_27668[(1)]);
if((state_val_27669 === (7))){
var inst_27664 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27670_27757 = state_27668__$1;
(statearr_27670_27757[(2)] = inst_27664);

(statearr_27670_27757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (20))){
var inst_27569 = (state_27668[(7)]);
var inst_27579 = cljs.core.first.call(null,inst_27569);
var inst_27580 = cljs.core.nth.call(null,inst_27579,(0),null);
var inst_27581 = cljs.core.nth.call(null,inst_27579,(1),null);
var state_27668__$1 = (function (){var statearr_27671 = state_27668;
(statearr_27671[(8)] = inst_27580);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27581)){
var statearr_27672_27758 = state_27668__$1;
(statearr_27672_27758[(1)] = (22));

} else {
var statearr_27673_27759 = state_27668__$1;
(statearr_27673_27759[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (27))){
var inst_27609 = (state_27668[(9)]);
var inst_27540 = (state_27668[(10)]);
var inst_27616 = (state_27668[(11)]);
var inst_27611 = (state_27668[(12)]);
var inst_27616__$1 = cljs.core._nth.call(null,inst_27609,inst_27611);
var inst_27617 = cljs.core.async.put_BANG_.call(null,inst_27616__$1,inst_27540,done);
var state_27668__$1 = (function (){var statearr_27674 = state_27668;
(statearr_27674[(11)] = inst_27616__$1);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27617)){
var statearr_27675_27760 = state_27668__$1;
(statearr_27675_27760[(1)] = (30));

} else {
var statearr_27676_27761 = state_27668__$1;
(statearr_27676_27761[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (1))){
var state_27668__$1 = state_27668;
var statearr_27677_27762 = state_27668__$1;
(statearr_27677_27762[(2)] = null);

(statearr_27677_27762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (24))){
var inst_27569 = (state_27668[(7)]);
var inst_27586 = (state_27668[(2)]);
var inst_27587 = cljs.core.next.call(null,inst_27569);
var inst_27549 = inst_27587;
var inst_27550 = null;
var inst_27551 = (0);
var inst_27552 = (0);
var state_27668__$1 = (function (){var statearr_27678 = state_27668;
(statearr_27678[(13)] = inst_27549);

(statearr_27678[(14)] = inst_27551);

(statearr_27678[(15)] = inst_27552);

(statearr_27678[(16)] = inst_27586);

(statearr_27678[(17)] = inst_27550);

return statearr_27678;
})();
var statearr_27679_27763 = state_27668__$1;
(statearr_27679_27763[(2)] = null);

(statearr_27679_27763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (39))){
var state_27668__$1 = state_27668;
var statearr_27683_27764 = state_27668__$1;
(statearr_27683_27764[(2)] = null);

(statearr_27683_27764[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (4))){
var inst_27540 = (state_27668[(10)]);
var inst_27540__$1 = (state_27668[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var state_27668__$1 = (function (){var statearr_27684 = state_27668;
(statearr_27684[(10)] = inst_27540__$1);

return statearr_27684;
})();
if(cljs.core.truth_(inst_27541)){
var statearr_27685_27765 = state_27668__$1;
(statearr_27685_27765[(1)] = (5));

} else {
var statearr_27686_27766 = state_27668__$1;
(statearr_27686_27766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (15))){
var inst_27549 = (state_27668[(13)]);
var inst_27551 = (state_27668[(14)]);
var inst_27552 = (state_27668[(15)]);
var inst_27550 = (state_27668[(17)]);
var inst_27565 = (state_27668[(2)]);
var inst_27566 = (inst_27552 + (1));
var tmp27680 = inst_27549;
var tmp27681 = inst_27551;
var tmp27682 = inst_27550;
var inst_27549__$1 = tmp27680;
var inst_27550__$1 = tmp27682;
var inst_27551__$1 = tmp27681;
var inst_27552__$1 = inst_27566;
var state_27668__$1 = (function (){var statearr_27687 = state_27668;
(statearr_27687[(13)] = inst_27549__$1);

(statearr_27687[(14)] = inst_27551__$1);

(statearr_27687[(15)] = inst_27552__$1);

(statearr_27687[(18)] = inst_27565);

(statearr_27687[(17)] = inst_27550__$1);

return statearr_27687;
})();
var statearr_27688_27767 = state_27668__$1;
(statearr_27688_27767[(2)] = null);

(statearr_27688_27767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (21))){
var inst_27590 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27692_27768 = state_27668__$1;
(statearr_27692_27768[(2)] = inst_27590);

(statearr_27692_27768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (31))){
var inst_27616 = (state_27668[(11)]);
var inst_27620 = done.call(null,null);
var inst_27621 = cljs.core.async.untap_STAR_.call(null,m,inst_27616);
var state_27668__$1 = (function (){var statearr_27693 = state_27668;
(statearr_27693[(19)] = inst_27620);

return statearr_27693;
})();
var statearr_27694_27769 = state_27668__$1;
(statearr_27694_27769[(2)] = inst_27621);

(statearr_27694_27769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (32))){
var inst_27608 = (state_27668[(20)]);
var inst_27609 = (state_27668[(9)]);
var inst_27610 = (state_27668[(21)]);
var inst_27611 = (state_27668[(12)]);
var inst_27623 = (state_27668[(2)]);
var inst_27624 = (inst_27611 + (1));
var tmp27689 = inst_27608;
var tmp27690 = inst_27609;
var tmp27691 = inst_27610;
var inst_27608__$1 = tmp27689;
var inst_27609__$1 = tmp27690;
var inst_27610__$1 = tmp27691;
var inst_27611__$1 = inst_27624;
var state_27668__$1 = (function (){var statearr_27695 = state_27668;
(statearr_27695[(20)] = inst_27608__$1);

(statearr_27695[(9)] = inst_27609__$1);

(statearr_27695[(21)] = inst_27610__$1);

(statearr_27695[(22)] = inst_27623);

(statearr_27695[(12)] = inst_27611__$1);

return statearr_27695;
})();
var statearr_27696_27770 = state_27668__$1;
(statearr_27696_27770[(2)] = null);

(statearr_27696_27770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (40))){
var inst_27636 = (state_27668[(23)]);
var inst_27640 = done.call(null,null);
var inst_27641 = cljs.core.async.untap_STAR_.call(null,m,inst_27636);
var state_27668__$1 = (function (){var statearr_27697 = state_27668;
(statearr_27697[(24)] = inst_27640);

return statearr_27697;
})();
var statearr_27698_27771 = state_27668__$1;
(statearr_27698_27771[(2)] = inst_27641);

(statearr_27698_27771[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (33))){
var inst_27627 = (state_27668[(25)]);
var inst_27629 = cljs.core.chunked_seq_QMARK_.call(null,inst_27627);
var state_27668__$1 = state_27668;
if(inst_27629){
var statearr_27699_27772 = state_27668__$1;
(statearr_27699_27772[(1)] = (36));

} else {
var statearr_27700_27773 = state_27668__$1;
(statearr_27700_27773[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (13))){
var inst_27559 = (state_27668[(26)]);
var inst_27562 = cljs.core.async.close_BANG_.call(null,inst_27559);
var state_27668__$1 = state_27668;
var statearr_27701_27774 = state_27668__$1;
(statearr_27701_27774[(2)] = inst_27562);

(statearr_27701_27774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (22))){
var inst_27580 = (state_27668[(8)]);
var inst_27583 = cljs.core.async.close_BANG_.call(null,inst_27580);
var state_27668__$1 = state_27668;
var statearr_27702_27775 = state_27668__$1;
(statearr_27702_27775[(2)] = inst_27583);

(statearr_27702_27775[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (36))){
var inst_27627 = (state_27668[(25)]);
var inst_27631 = cljs.core.chunk_first.call(null,inst_27627);
var inst_27632 = cljs.core.chunk_rest.call(null,inst_27627);
var inst_27633 = cljs.core.count.call(null,inst_27631);
var inst_27608 = inst_27632;
var inst_27609 = inst_27631;
var inst_27610 = inst_27633;
var inst_27611 = (0);
var state_27668__$1 = (function (){var statearr_27703 = state_27668;
(statearr_27703[(20)] = inst_27608);

(statearr_27703[(9)] = inst_27609);

(statearr_27703[(21)] = inst_27610);

(statearr_27703[(12)] = inst_27611);

return statearr_27703;
})();
var statearr_27704_27776 = state_27668__$1;
(statearr_27704_27776[(2)] = null);

(statearr_27704_27776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (41))){
var inst_27627 = (state_27668[(25)]);
var inst_27643 = (state_27668[(2)]);
var inst_27644 = cljs.core.next.call(null,inst_27627);
var inst_27608 = inst_27644;
var inst_27609 = null;
var inst_27610 = (0);
var inst_27611 = (0);
var state_27668__$1 = (function (){var statearr_27705 = state_27668;
(statearr_27705[(20)] = inst_27608);

(statearr_27705[(9)] = inst_27609);

(statearr_27705[(21)] = inst_27610);

(statearr_27705[(27)] = inst_27643);

(statearr_27705[(12)] = inst_27611);

return statearr_27705;
})();
var statearr_27706_27777 = state_27668__$1;
(statearr_27706_27777[(2)] = null);

(statearr_27706_27777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (43))){
var state_27668__$1 = state_27668;
var statearr_27707_27778 = state_27668__$1;
(statearr_27707_27778[(2)] = null);

(statearr_27707_27778[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (29))){
var inst_27652 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27708_27779 = state_27668__$1;
(statearr_27708_27779[(2)] = inst_27652);

(statearr_27708_27779[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (44))){
var inst_27661 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27709 = state_27668;
(statearr_27709[(28)] = inst_27661);

return statearr_27709;
})();
var statearr_27710_27780 = state_27668__$1;
(statearr_27710_27780[(2)] = null);

(statearr_27710_27780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (6))){
var inst_27600 = (state_27668[(29)]);
var inst_27599 = cljs.core.deref.call(null,cs);
var inst_27600__$1 = cljs.core.keys.call(null,inst_27599);
var inst_27601 = cljs.core.count.call(null,inst_27600__$1);
var inst_27602 = cljs.core.reset_BANG_.call(null,dctr,inst_27601);
var inst_27607 = cljs.core.seq.call(null,inst_27600__$1);
var inst_27608 = inst_27607;
var inst_27609 = null;
var inst_27610 = (0);
var inst_27611 = (0);
var state_27668__$1 = (function (){var statearr_27711 = state_27668;
(statearr_27711[(20)] = inst_27608);

(statearr_27711[(9)] = inst_27609);

(statearr_27711[(21)] = inst_27610);

(statearr_27711[(30)] = inst_27602);

(statearr_27711[(29)] = inst_27600__$1);

(statearr_27711[(12)] = inst_27611);

return statearr_27711;
})();
var statearr_27712_27781 = state_27668__$1;
(statearr_27712_27781[(2)] = null);

(statearr_27712_27781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (28))){
var inst_27608 = (state_27668[(20)]);
var inst_27627 = (state_27668[(25)]);
var inst_27627__$1 = cljs.core.seq.call(null,inst_27608);
var state_27668__$1 = (function (){var statearr_27713 = state_27668;
(statearr_27713[(25)] = inst_27627__$1);

return statearr_27713;
})();
if(inst_27627__$1){
var statearr_27714_27782 = state_27668__$1;
(statearr_27714_27782[(1)] = (33));

} else {
var statearr_27715_27783 = state_27668__$1;
(statearr_27715_27783[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (25))){
var inst_27610 = (state_27668[(21)]);
var inst_27611 = (state_27668[(12)]);
var inst_27613 = (inst_27611 < inst_27610);
var inst_27614 = inst_27613;
var state_27668__$1 = state_27668;
if(cljs.core.truth_(inst_27614)){
var statearr_27716_27784 = state_27668__$1;
(statearr_27716_27784[(1)] = (27));

} else {
var statearr_27717_27785 = state_27668__$1;
(statearr_27717_27785[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (34))){
var state_27668__$1 = state_27668;
var statearr_27718_27786 = state_27668__$1;
(statearr_27718_27786[(2)] = null);

(statearr_27718_27786[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (17))){
var state_27668__$1 = state_27668;
var statearr_27719_27787 = state_27668__$1;
(statearr_27719_27787[(2)] = null);

(statearr_27719_27787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (3))){
var inst_27666 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27668__$1,inst_27666);
} else {
if((state_val_27669 === (12))){
var inst_27595 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27720_27788 = state_27668__$1;
(statearr_27720_27788[(2)] = inst_27595);

(statearr_27720_27788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (2))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(4),ch);
} else {
if((state_val_27669 === (23))){
var state_27668__$1 = state_27668;
var statearr_27721_27789 = state_27668__$1;
(statearr_27721_27789[(2)] = null);

(statearr_27721_27789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (35))){
var inst_27650 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27722_27790 = state_27668__$1;
(statearr_27722_27790[(2)] = inst_27650);

(statearr_27722_27790[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (19))){
var inst_27569 = (state_27668[(7)]);
var inst_27573 = cljs.core.chunk_first.call(null,inst_27569);
var inst_27574 = cljs.core.chunk_rest.call(null,inst_27569);
var inst_27575 = cljs.core.count.call(null,inst_27573);
var inst_27549 = inst_27574;
var inst_27550 = inst_27573;
var inst_27551 = inst_27575;
var inst_27552 = (0);
var state_27668__$1 = (function (){var statearr_27723 = state_27668;
(statearr_27723[(13)] = inst_27549);

(statearr_27723[(14)] = inst_27551);

(statearr_27723[(15)] = inst_27552);

(statearr_27723[(17)] = inst_27550);

return statearr_27723;
})();
var statearr_27724_27791 = state_27668__$1;
(statearr_27724_27791[(2)] = null);

(statearr_27724_27791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (11))){
var inst_27549 = (state_27668[(13)]);
var inst_27569 = (state_27668[(7)]);
var inst_27569__$1 = cljs.core.seq.call(null,inst_27549);
var state_27668__$1 = (function (){var statearr_27725 = state_27668;
(statearr_27725[(7)] = inst_27569__$1);

return statearr_27725;
})();
if(inst_27569__$1){
var statearr_27726_27792 = state_27668__$1;
(statearr_27726_27792[(1)] = (16));

} else {
var statearr_27727_27793 = state_27668__$1;
(statearr_27727_27793[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (9))){
var inst_27597 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27728_27794 = state_27668__$1;
(statearr_27728_27794[(2)] = inst_27597);

(statearr_27728_27794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (5))){
var inst_27547 = cljs.core.deref.call(null,cs);
var inst_27548 = cljs.core.seq.call(null,inst_27547);
var inst_27549 = inst_27548;
var inst_27550 = null;
var inst_27551 = (0);
var inst_27552 = (0);
var state_27668__$1 = (function (){var statearr_27729 = state_27668;
(statearr_27729[(13)] = inst_27549);

(statearr_27729[(14)] = inst_27551);

(statearr_27729[(15)] = inst_27552);

(statearr_27729[(17)] = inst_27550);

return statearr_27729;
})();
var statearr_27730_27795 = state_27668__$1;
(statearr_27730_27795[(2)] = null);

(statearr_27730_27795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (14))){
var state_27668__$1 = state_27668;
var statearr_27731_27796 = state_27668__$1;
(statearr_27731_27796[(2)] = null);

(statearr_27731_27796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (45))){
var inst_27658 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27732_27797 = state_27668__$1;
(statearr_27732_27797[(2)] = inst_27658);

(statearr_27732_27797[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (26))){
var inst_27600 = (state_27668[(29)]);
var inst_27654 = (state_27668[(2)]);
var inst_27655 = cljs.core.seq.call(null,inst_27600);
var state_27668__$1 = (function (){var statearr_27733 = state_27668;
(statearr_27733[(31)] = inst_27654);

return statearr_27733;
})();
if(inst_27655){
var statearr_27734_27798 = state_27668__$1;
(statearr_27734_27798[(1)] = (42));

} else {
var statearr_27735_27799 = state_27668__$1;
(statearr_27735_27799[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (16))){
var inst_27569 = (state_27668[(7)]);
var inst_27571 = cljs.core.chunked_seq_QMARK_.call(null,inst_27569);
var state_27668__$1 = state_27668;
if(inst_27571){
var statearr_27736_27800 = state_27668__$1;
(statearr_27736_27800[(1)] = (19));

} else {
var statearr_27737_27801 = state_27668__$1;
(statearr_27737_27801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (38))){
var inst_27647 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27738_27802 = state_27668__$1;
(statearr_27738_27802[(2)] = inst_27647);

(statearr_27738_27802[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (30))){
var state_27668__$1 = state_27668;
var statearr_27739_27803 = state_27668__$1;
(statearr_27739_27803[(2)] = null);

(statearr_27739_27803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (10))){
var inst_27552 = (state_27668[(15)]);
var inst_27550 = (state_27668[(17)]);
var inst_27558 = cljs.core._nth.call(null,inst_27550,inst_27552);
var inst_27559 = cljs.core.nth.call(null,inst_27558,(0),null);
var inst_27560 = cljs.core.nth.call(null,inst_27558,(1),null);
var state_27668__$1 = (function (){var statearr_27740 = state_27668;
(statearr_27740[(26)] = inst_27559);

return statearr_27740;
})();
if(cljs.core.truth_(inst_27560)){
var statearr_27741_27804 = state_27668__$1;
(statearr_27741_27804[(1)] = (13));

} else {
var statearr_27742_27805 = state_27668__$1;
(statearr_27742_27805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (18))){
var inst_27593 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27743_27806 = state_27668__$1;
(statearr_27743_27806[(2)] = inst_27593);

(statearr_27743_27806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (42))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(45),dchan);
} else {
if((state_val_27669 === (37))){
var inst_27540 = (state_27668[(10)]);
var inst_27636 = (state_27668[(23)]);
var inst_27627 = (state_27668[(25)]);
var inst_27636__$1 = cljs.core.first.call(null,inst_27627);
var inst_27637 = cljs.core.async.put_BANG_.call(null,inst_27636__$1,inst_27540,done);
var state_27668__$1 = (function (){var statearr_27744 = state_27668;
(statearr_27744[(23)] = inst_27636__$1);

return statearr_27744;
})();
if(cljs.core.truth_(inst_27637)){
var statearr_27745_27807 = state_27668__$1;
(statearr_27745_27807[(1)] = (39));

} else {
var statearr_27746_27808 = state_27668__$1;
(statearr_27746_27808[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (8))){
var inst_27551 = (state_27668[(14)]);
var inst_27552 = (state_27668[(15)]);
var inst_27554 = (inst_27552 < inst_27551);
var inst_27555 = inst_27554;
var state_27668__$1 = state_27668;
if(cljs.core.truth_(inst_27555)){
var statearr_27747_27809 = state_27668__$1;
(statearr_27747_27809[(1)] = (10));

} else {
var statearr_27748_27810 = state_27668__$1;
(statearr_27748_27810[(1)] = (11));

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
});})(c__20653__auto___27756,cs,m,dchan,dctr,done))
;
return ((function (switch__20597__auto__,c__20653__auto___27756,cs,m,dchan,dctr,done){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_27752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27752[(0)] = state_machine__20598__auto__);

(statearr_27752[(1)] = (1));

return statearr_27752;
});
var state_machine__20598__auto____1 = (function (state_27668){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_27668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e27753){if((e27753 instanceof Object)){
var ex__20601__auto__ = e27753;
var statearr_27754_27811 = state_27668;
(statearr_27754_27811[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27812 = state_27668;
state_27668 = G__27812;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_27668){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_27668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___27756,cs,m,dchan,dctr,done))
})();
var state__20655__auto__ = (function (){var statearr_27755 = f__20654__auto__.call(null);
(statearr_27755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___27756);

return statearr_27755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___27756,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj27814 = {};
return obj27814;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__17979__auto__ = m;
if(and__17979__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17979__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18635__auto__ = (((m == null))?null:m);
return (function (){var or__17991__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27815){
var map__27820 = p__27815;
var map__27820__$1 = ((cljs.core.seq_QMARK_.call(null,map__27820))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var opts = map__27820__$1;
var statearr_27821_27824 = state;
(statearr_27821_27824[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27820,map__27820__$1,opts){
return (function (val){
var statearr_27822_27825 = state;
(statearr_27822_27825[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27820,map__27820__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27823_27826 = state;
(statearr_27823_27826[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27815 = null;
if (arguments.length > 3) {
  p__27815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27815);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27827){
var state = cljs.core.first(arglist__27827);
arglist__27827 = cljs.core.next(arglist__27827);
var cont_block = cljs.core.first(arglist__27827);
arglist__27827 = cljs.core.next(arglist__27827);
var ports = cljs.core.first(arglist__27827);
var p__27815 = cljs.core.rest(arglist__27827);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27815);
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
if(typeof cljs.core.async.t27947 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27947 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27948){
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
this.meta27948 = meta27948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27947.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27947.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27947.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27949){
var self__ = this;
var _27949__$1 = this;
return self__.meta27948;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27949,meta27948__$1){
var self__ = this;
var _27949__$1 = this;
return (new cljs.core.async.t27947(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27948__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27947.cljs$lang$type = true;

cljs.core.async.t27947.cljs$lang$ctorStr = "cljs.core.async/t27947";

cljs.core.async.t27947.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t27947");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27947 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27947(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27948){
return (new cljs.core.async.t27947(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27948));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27947(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__20653__auto___28066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___28066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___28066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28019){
var state_val_28020 = (state_28019[(1)]);
if((state_val_28020 === (7))){
var inst_27963 = (state_28019[(7)]);
var inst_27968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27963);
var state_28019__$1 = state_28019;
var statearr_28021_28067 = state_28019__$1;
(statearr_28021_28067[(2)] = inst_27968);

(statearr_28021_28067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (20))){
var inst_27978 = (state_28019[(8)]);
var state_28019__$1 = state_28019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28019__$1,(23),out,inst_27978);
} else {
if((state_val_28020 === (1))){
var inst_27953 = (state_28019[(9)]);
var inst_27953__$1 = calc_state.call(null);
var inst_27954 = cljs.core.seq_QMARK_.call(null,inst_27953__$1);
var state_28019__$1 = (function (){var statearr_28022 = state_28019;
(statearr_28022[(9)] = inst_27953__$1);

return statearr_28022;
})();
if(inst_27954){
var statearr_28023_28068 = state_28019__$1;
(statearr_28023_28068[(1)] = (2));

} else {
var statearr_28024_28069 = state_28019__$1;
(statearr_28024_28069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (24))){
var inst_27971 = (state_28019[(10)]);
var inst_27963 = inst_27971;
var state_28019__$1 = (function (){var statearr_28025 = state_28019;
(statearr_28025[(7)] = inst_27963);

return statearr_28025;
})();
var statearr_28026_28070 = state_28019__$1;
(statearr_28026_28070[(2)] = null);

(statearr_28026_28070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (4))){
var inst_27953 = (state_28019[(9)]);
var inst_27959 = (state_28019[(2)]);
var inst_27960 = cljs.core.get.call(null,inst_27959,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27961 = cljs.core.get.call(null,inst_27959,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27962 = cljs.core.get.call(null,inst_27959,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27963 = inst_27953;
var state_28019__$1 = (function (){var statearr_28027 = state_28019;
(statearr_28027[(11)] = inst_27961);

(statearr_28027[(12)] = inst_27962);

(statearr_28027[(13)] = inst_27960);

(statearr_28027[(7)] = inst_27963);

return statearr_28027;
})();
var statearr_28028_28071 = state_28019__$1;
(statearr_28028_28071[(2)] = null);

(statearr_28028_28071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (15))){
var state_28019__$1 = state_28019;
var statearr_28029_28072 = state_28019__$1;
(statearr_28029_28072[(2)] = null);

(statearr_28029_28072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (21))){
var inst_27971 = (state_28019[(10)]);
var inst_27963 = inst_27971;
var state_28019__$1 = (function (){var statearr_28030 = state_28019;
(statearr_28030[(7)] = inst_27963);

return statearr_28030;
})();
var statearr_28031_28073 = state_28019__$1;
(statearr_28031_28073[(2)] = null);

(statearr_28031_28073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (13))){
var inst_28015 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
var statearr_28032_28074 = state_28019__$1;
(statearr_28032_28074[(2)] = inst_28015);

(statearr_28032_28074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (22))){
var inst_28013 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
var statearr_28033_28075 = state_28019__$1;
(statearr_28033_28075[(2)] = inst_28013);

(statearr_28033_28075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (6))){
var inst_28017 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28019__$1,inst_28017);
} else {
if((state_val_28020 === (25))){
var state_28019__$1 = state_28019;
var statearr_28034_28076 = state_28019__$1;
(statearr_28034_28076[(2)] = null);

(statearr_28034_28076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (17))){
var inst_27993 = (state_28019[(14)]);
var state_28019__$1 = state_28019;
var statearr_28035_28077 = state_28019__$1;
(statearr_28035_28077[(2)] = inst_27993);

(statearr_28035_28077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (3))){
var inst_27953 = (state_28019[(9)]);
var state_28019__$1 = state_28019;
var statearr_28036_28078 = state_28019__$1;
(statearr_28036_28078[(2)] = inst_27953);

(statearr_28036_28078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (12))){
var inst_27974 = (state_28019[(15)]);
var inst_27993 = (state_28019[(14)]);
var inst_27979 = (state_28019[(16)]);
var inst_27993__$1 = inst_27974.call(null,inst_27979);
var state_28019__$1 = (function (){var statearr_28037 = state_28019;
(statearr_28037[(14)] = inst_27993__$1);

return statearr_28037;
})();
if(cljs.core.truth_(inst_27993__$1)){
var statearr_28038_28079 = state_28019__$1;
(statearr_28038_28079[(1)] = (17));

} else {
var statearr_28039_28080 = state_28019__$1;
(statearr_28039_28080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (2))){
var inst_27953 = (state_28019[(9)]);
var inst_27956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27953);
var state_28019__$1 = state_28019;
var statearr_28040_28081 = state_28019__$1;
(statearr_28040_28081[(2)] = inst_27956);

(statearr_28040_28081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (23))){
var inst_28004 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
if(cljs.core.truth_(inst_28004)){
var statearr_28041_28082 = state_28019__$1;
(statearr_28041_28082[(1)] = (24));

} else {
var statearr_28042_28083 = state_28019__$1;
(statearr_28042_28083[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (19))){
var inst_28001 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
if(cljs.core.truth_(inst_28001)){
var statearr_28043_28084 = state_28019__$1;
(statearr_28043_28084[(1)] = (20));

} else {
var statearr_28044_28085 = state_28019__$1;
(statearr_28044_28085[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (11))){
var inst_27978 = (state_28019[(8)]);
var inst_27984 = (inst_27978 == null);
var state_28019__$1 = state_28019;
if(cljs.core.truth_(inst_27984)){
var statearr_28045_28086 = state_28019__$1;
(statearr_28045_28086[(1)] = (14));

} else {
var statearr_28046_28087 = state_28019__$1;
(statearr_28046_28087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (9))){
var inst_27971 = (state_28019[(10)]);
var inst_27971__$1 = (state_28019[(2)]);
var inst_27972 = cljs.core.get.call(null,inst_27971__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27973 = cljs.core.get.call(null,inst_27971__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27974 = cljs.core.get.call(null,inst_27971__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28019__$1 = (function (){var statearr_28047 = state_28019;
(statearr_28047[(15)] = inst_27974);

(statearr_28047[(17)] = inst_27973);

(statearr_28047[(10)] = inst_27971__$1);

return statearr_28047;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28019__$1,(10),inst_27972);
} else {
if((state_val_28020 === (5))){
var inst_27963 = (state_28019[(7)]);
var inst_27966 = cljs.core.seq_QMARK_.call(null,inst_27963);
var state_28019__$1 = state_28019;
if(inst_27966){
var statearr_28048_28088 = state_28019__$1;
(statearr_28048_28088[(1)] = (7));

} else {
var statearr_28049_28089 = state_28019__$1;
(statearr_28049_28089[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (14))){
var inst_27979 = (state_28019[(16)]);
var inst_27986 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27979);
var state_28019__$1 = state_28019;
var statearr_28050_28090 = state_28019__$1;
(statearr_28050_28090[(2)] = inst_27986);

(statearr_28050_28090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (26))){
var inst_28009 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
var statearr_28051_28091 = state_28019__$1;
(statearr_28051_28091[(2)] = inst_28009);

(statearr_28051_28091[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (16))){
var inst_27989 = (state_28019[(2)]);
var inst_27990 = calc_state.call(null);
var inst_27963 = inst_27990;
var state_28019__$1 = (function (){var statearr_28052 = state_28019;
(statearr_28052[(18)] = inst_27989);

(statearr_28052[(7)] = inst_27963);

return statearr_28052;
})();
var statearr_28053_28092 = state_28019__$1;
(statearr_28053_28092[(2)] = null);

(statearr_28053_28092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (10))){
var inst_27978 = (state_28019[(8)]);
var inst_27979 = (state_28019[(16)]);
var inst_27977 = (state_28019[(2)]);
var inst_27978__$1 = cljs.core.nth.call(null,inst_27977,(0),null);
var inst_27979__$1 = cljs.core.nth.call(null,inst_27977,(1),null);
var inst_27980 = (inst_27978__$1 == null);
var inst_27981 = cljs.core._EQ_.call(null,inst_27979__$1,change);
var inst_27982 = (inst_27980) || (inst_27981);
var state_28019__$1 = (function (){var statearr_28054 = state_28019;
(statearr_28054[(8)] = inst_27978__$1);

(statearr_28054[(16)] = inst_27979__$1);

return statearr_28054;
})();
if(cljs.core.truth_(inst_27982)){
var statearr_28055_28093 = state_28019__$1;
(statearr_28055_28093[(1)] = (11));

} else {
var statearr_28056_28094 = state_28019__$1;
(statearr_28056_28094[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (18))){
var inst_27974 = (state_28019[(15)]);
var inst_27973 = (state_28019[(17)]);
var inst_27979 = (state_28019[(16)]);
var inst_27996 = cljs.core.empty_QMARK_.call(null,inst_27974);
var inst_27997 = inst_27973.call(null,inst_27979);
var inst_27998 = cljs.core.not.call(null,inst_27997);
var inst_27999 = (inst_27996) && (inst_27998);
var state_28019__$1 = state_28019;
var statearr_28057_28095 = state_28019__$1;
(statearr_28057_28095[(2)] = inst_27999);

(statearr_28057_28095[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (8))){
var inst_27963 = (state_28019[(7)]);
var state_28019__$1 = state_28019;
var statearr_28058_28096 = state_28019__$1;
(statearr_28058_28096[(2)] = inst_27963);

(statearr_28058_28096[(1)] = (9));


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
});})(c__20653__auto___28066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20597__auto__,c__20653__auto___28066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_28062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28062[(0)] = state_machine__20598__auto__);

(statearr_28062[(1)] = (1));

return statearr_28062;
});
var state_machine__20598__auto____1 = (function (state_28019){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_28019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e28063){if((e28063 instanceof Object)){
var ex__20601__auto__ = e28063;
var statearr_28064_28097 = state_28019;
(statearr_28064_28097[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28098 = state_28019;
state_28019 = G__28098;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_28019){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_28019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___28066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20655__auto__ = (function (){var statearr_28065 = f__20654__auto__.call(null);
(statearr_28065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___28066);

return statearr_28065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___28066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28100 = {};
return obj28100;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17979__auto__ = p;
if(and__17979__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17979__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18635__auto__ = (((p == null))?null:p);
return (function (){var or__17991__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__17979__auto__ = p;
if(and__17979__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17979__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18635__auto__ = (((p == null))?null:p);
return (function (){var or__17991__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
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
if((function (){var and__17979__auto__ = p;
if(and__17979__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17979__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18635__auto__ = (((p == null))?null:p);
return (function (){var or__17991__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17979__auto__ = p;
if(and__17979__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17979__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18635__auto__ = (((p == null))?null:p);
return (function (){var or__17991__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18635__auto__)]);
if(or__17991__auto__){
return or__17991__auto__;
} else {
var or__17991__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17991__auto____$1){
return or__17991__auto____$1;
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
var or__17991__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17991__auto__)){
return or__17991__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17991__auto__,mults){
return (function (p1__28101_SHARP_){
if(cljs.core.truth_(p1__28101_SHARP_.call(null,topic))){
return p1__28101_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28101_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17991__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28224 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28224 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28225){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28225 = meta28225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28224.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28224.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28226){
var self__ = this;
var _28226__$1 = this;
return self__.meta28225;
});})(mults,ensure_mult))
;

cljs.core.async.t28224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28226,meta28225__$1){
var self__ = this;
var _28226__$1 = this;
return (new cljs.core.async.t28224(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28225__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28224.cljs$lang$type = true;

cljs.core.async.t28224.cljs$lang$ctorStr = "cljs.core.async/t28224";

cljs.core.async.t28224.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t28224");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28224 = ((function (mults,ensure_mult){
return (function __GT_t28224(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28225){
return (new cljs.core.async.t28224(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28225));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28224(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__20653__auto___28346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___28346,mults,ensure_mult,p){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___28346,mults,ensure_mult,p){
return (function (state_28298){
var state_val_28299 = (state_28298[(1)]);
if((state_val_28299 === (7))){
var inst_28294 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28300_28347 = state_28298__$1;
(statearr_28300_28347[(2)] = inst_28294);

(statearr_28300_28347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (20))){
var state_28298__$1 = state_28298;
var statearr_28301_28348 = state_28298__$1;
(statearr_28301_28348[(2)] = null);

(statearr_28301_28348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (1))){
var state_28298__$1 = state_28298;
var statearr_28302_28349 = state_28298__$1;
(statearr_28302_28349[(2)] = null);

(statearr_28302_28349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (24))){
var inst_28277 = (state_28298[(7)]);
var inst_28286 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28277);
var state_28298__$1 = state_28298;
var statearr_28303_28350 = state_28298__$1;
(statearr_28303_28350[(2)] = inst_28286);

(statearr_28303_28350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (4))){
var inst_28229 = (state_28298[(8)]);
var inst_28229__$1 = (state_28298[(2)]);
var inst_28230 = (inst_28229__$1 == null);
var state_28298__$1 = (function (){var statearr_28304 = state_28298;
(statearr_28304[(8)] = inst_28229__$1);

return statearr_28304;
})();
if(cljs.core.truth_(inst_28230)){
var statearr_28305_28351 = state_28298__$1;
(statearr_28305_28351[(1)] = (5));

} else {
var statearr_28306_28352 = state_28298__$1;
(statearr_28306_28352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (15))){
var inst_28271 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28307_28353 = state_28298__$1;
(statearr_28307_28353[(2)] = inst_28271);

(statearr_28307_28353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (21))){
var inst_28291 = (state_28298[(2)]);
var state_28298__$1 = (function (){var statearr_28308 = state_28298;
(statearr_28308[(9)] = inst_28291);

return statearr_28308;
})();
var statearr_28309_28354 = state_28298__$1;
(statearr_28309_28354[(2)] = null);

(statearr_28309_28354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (13))){
var inst_28253 = (state_28298[(10)]);
var inst_28255 = cljs.core.chunked_seq_QMARK_.call(null,inst_28253);
var state_28298__$1 = state_28298;
if(inst_28255){
var statearr_28310_28355 = state_28298__$1;
(statearr_28310_28355[(1)] = (16));

} else {
var statearr_28311_28356 = state_28298__$1;
(statearr_28311_28356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (22))){
var inst_28283 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28283)){
var statearr_28312_28357 = state_28298__$1;
(statearr_28312_28357[(1)] = (23));

} else {
var statearr_28313_28358 = state_28298__$1;
(statearr_28313_28358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (6))){
var inst_28279 = (state_28298[(11)]);
var inst_28229 = (state_28298[(8)]);
var inst_28277 = (state_28298[(7)]);
var inst_28277__$1 = topic_fn.call(null,inst_28229);
var inst_28278 = cljs.core.deref.call(null,mults);
var inst_28279__$1 = cljs.core.get.call(null,inst_28278,inst_28277__$1);
var state_28298__$1 = (function (){var statearr_28314 = state_28298;
(statearr_28314[(11)] = inst_28279__$1);

(statearr_28314[(7)] = inst_28277__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28279__$1)){
var statearr_28315_28359 = state_28298__$1;
(statearr_28315_28359[(1)] = (19));

} else {
var statearr_28316_28360 = state_28298__$1;
(statearr_28316_28360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (25))){
var inst_28288 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28317_28361 = state_28298__$1;
(statearr_28317_28361[(2)] = inst_28288);

(statearr_28317_28361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (17))){
var inst_28253 = (state_28298[(10)]);
var inst_28262 = cljs.core.first.call(null,inst_28253);
var inst_28263 = cljs.core.async.muxch_STAR_.call(null,inst_28262);
var inst_28264 = cljs.core.async.close_BANG_.call(null,inst_28263);
var inst_28265 = cljs.core.next.call(null,inst_28253);
var inst_28239 = inst_28265;
var inst_28240 = null;
var inst_28241 = (0);
var inst_28242 = (0);
var state_28298__$1 = (function (){var statearr_28318 = state_28298;
(statearr_28318[(12)] = inst_28239);

(statearr_28318[(13)] = inst_28241);

(statearr_28318[(14)] = inst_28240);

(statearr_28318[(15)] = inst_28242);

(statearr_28318[(16)] = inst_28264);

return statearr_28318;
})();
var statearr_28319_28362 = state_28298__$1;
(statearr_28319_28362[(2)] = null);

(statearr_28319_28362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (3))){
var inst_28296 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28298__$1,inst_28296);
} else {
if((state_val_28299 === (12))){
var inst_28273 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28320_28363 = state_28298__$1;
(statearr_28320_28363[(2)] = inst_28273);

(statearr_28320_28363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (2))){
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28298__$1,(4),ch);
} else {
if((state_val_28299 === (23))){
var state_28298__$1 = state_28298;
var statearr_28321_28364 = state_28298__$1;
(statearr_28321_28364[(2)] = null);

(statearr_28321_28364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (19))){
var inst_28279 = (state_28298[(11)]);
var inst_28229 = (state_28298[(8)]);
var inst_28281 = cljs.core.async.muxch_STAR_.call(null,inst_28279);
var state_28298__$1 = state_28298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28298__$1,(22),inst_28281,inst_28229);
} else {
if((state_val_28299 === (11))){
var inst_28253 = (state_28298[(10)]);
var inst_28239 = (state_28298[(12)]);
var inst_28253__$1 = cljs.core.seq.call(null,inst_28239);
var state_28298__$1 = (function (){var statearr_28322 = state_28298;
(statearr_28322[(10)] = inst_28253__$1);

return statearr_28322;
})();
if(inst_28253__$1){
var statearr_28323_28365 = state_28298__$1;
(statearr_28323_28365[(1)] = (13));

} else {
var statearr_28324_28366 = state_28298__$1;
(statearr_28324_28366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (9))){
var inst_28275 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28325_28367 = state_28298__$1;
(statearr_28325_28367[(2)] = inst_28275);

(statearr_28325_28367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (5))){
var inst_28236 = cljs.core.deref.call(null,mults);
var inst_28237 = cljs.core.vals.call(null,inst_28236);
var inst_28238 = cljs.core.seq.call(null,inst_28237);
var inst_28239 = inst_28238;
var inst_28240 = null;
var inst_28241 = (0);
var inst_28242 = (0);
var state_28298__$1 = (function (){var statearr_28326 = state_28298;
(statearr_28326[(12)] = inst_28239);

(statearr_28326[(13)] = inst_28241);

(statearr_28326[(14)] = inst_28240);

(statearr_28326[(15)] = inst_28242);

return statearr_28326;
})();
var statearr_28327_28368 = state_28298__$1;
(statearr_28327_28368[(2)] = null);

(statearr_28327_28368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (14))){
var state_28298__$1 = state_28298;
var statearr_28331_28369 = state_28298__$1;
(statearr_28331_28369[(2)] = null);

(statearr_28331_28369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (16))){
var inst_28253 = (state_28298[(10)]);
var inst_28257 = cljs.core.chunk_first.call(null,inst_28253);
var inst_28258 = cljs.core.chunk_rest.call(null,inst_28253);
var inst_28259 = cljs.core.count.call(null,inst_28257);
var inst_28239 = inst_28258;
var inst_28240 = inst_28257;
var inst_28241 = inst_28259;
var inst_28242 = (0);
var state_28298__$1 = (function (){var statearr_28332 = state_28298;
(statearr_28332[(12)] = inst_28239);

(statearr_28332[(13)] = inst_28241);

(statearr_28332[(14)] = inst_28240);

(statearr_28332[(15)] = inst_28242);

return statearr_28332;
})();
var statearr_28333_28370 = state_28298__$1;
(statearr_28333_28370[(2)] = null);

(statearr_28333_28370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (10))){
var inst_28239 = (state_28298[(12)]);
var inst_28241 = (state_28298[(13)]);
var inst_28240 = (state_28298[(14)]);
var inst_28242 = (state_28298[(15)]);
var inst_28247 = cljs.core._nth.call(null,inst_28240,inst_28242);
var inst_28248 = cljs.core.async.muxch_STAR_.call(null,inst_28247);
var inst_28249 = cljs.core.async.close_BANG_.call(null,inst_28248);
var inst_28250 = (inst_28242 + (1));
var tmp28328 = inst_28239;
var tmp28329 = inst_28241;
var tmp28330 = inst_28240;
var inst_28239__$1 = tmp28328;
var inst_28240__$1 = tmp28330;
var inst_28241__$1 = tmp28329;
var inst_28242__$1 = inst_28250;
var state_28298__$1 = (function (){var statearr_28334 = state_28298;
(statearr_28334[(12)] = inst_28239__$1);

(statearr_28334[(13)] = inst_28241__$1);

(statearr_28334[(17)] = inst_28249);

(statearr_28334[(14)] = inst_28240__$1);

(statearr_28334[(15)] = inst_28242__$1);

return statearr_28334;
})();
var statearr_28335_28371 = state_28298__$1;
(statearr_28335_28371[(2)] = null);

(statearr_28335_28371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (18))){
var inst_28268 = (state_28298[(2)]);
var state_28298__$1 = state_28298;
var statearr_28336_28372 = state_28298__$1;
(statearr_28336_28372[(2)] = inst_28268);

(statearr_28336_28372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28299 === (8))){
var inst_28241 = (state_28298[(13)]);
var inst_28242 = (state_28298[(15)]);
var inst_28244 = (inst_28242 < inst_28241);
var inst_28245 = inst_28244;
var state_28298__$1 = state_28298;
if(cljs.core.truth_(inst_28245)){
var statearr_28337_28373 = state_28298__$1;
(statearr_28337_28373[(1)] = (10));

} else {
var statearr_28338_28374 = state_28298__$1;
(statearr_28338_28374[(1)] = (11));

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
});})(c__20653__auto___28346,mults,ensure_mult,p))
;
return ((function (switch__20597__auto__,c__20653__auto___28346,mults,ensure_mult,p){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_28342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28342[(0)] = state_machine__20598__auto__);

(statearr_28342[(1)] = (1));

return statearr_28342;
});
var state_machine__20598__auto____1 = (function (state_28298){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_28298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e28343){if((e28343 instanceof Object)){
var ex__20601__auto__ = e28343;
var statearr_28344_28375 = state_28298;
(statearr_28344_28375[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28376 = state_28298;
state_28298 = G__28376;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_28298){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_28298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___28346,mults,ensure_mult,p))
})();
var state__20655__auto__ = (function (){var statearr_28345 = f__20654__auto__.call(null);
(statearr_28345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___28346);

return statearr_28345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___28346,mults,ensure_mult,p))
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
var c__20653__auto___28513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___28513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___28513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28483){
var state_val_28484 = (state_28483[(1)]);
if((state_val_28484 === (7))){
var state_28483__$1 = state_28483;
var statearr_28485_28514 = state_28483__$1;
(statearr_28485_28514[(2)] = null);

(statearr_28485_28514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (1))){
var state_28483__$1 = state_28483;
var statearr_28486_28515 = state_28483__$1;
(statearr_28486_28515[(2)] = null);

(statearr_28486_28515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (4))){
var inst_28447 = (state_28483[(7)]);
var inst_28449 = (inst_28447 < cnt);
var state_28483__$1 = state_28483;
if(cljs.core.truth_(inst_28449)){
var statearr_28487_28516 = state_28483__$1;
(statearr_28487_28516[(1)] = (6));

} else {
var statearr_28488_28517 = state_28483__$1;
(statearr_28488_28517[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (15))){
var inst_28479 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28489_28518 = state_28483__$1;
(statearr_28489_28518[(2)] = inst_28479);

(statearr_28489_28518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (13))){
var inst_28472 = cljs.core.async.close_BANG_.call(null,out);
var state_28483__$1 = state_28483;
var statearr_28490_28519 = state_28483__$1;
(statearr_28490_28519[(2)] = inst_28472);

(statearr_28490_28519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (6))){
var state_28483__$1 = state_28483;
var statearr_28491_28520 = state_28483__$1;
(statearr_28491_28520[(2)] = null);

(statearr_28491_28520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (3))){
var inst_28481 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28483__$1,inst_28481);
} else {
if((state_val_28484 === (12))){
var inst_28469 = (state_28483[(8)]);
var inst_28469__$1 = (state_28483[(2)]);
var inst_28470 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28469__$1);
var state_28483__$1 = (function (){var statearr_28492 = state_28483;
(statearr_28492[(8)] = inst_28469__$1);

return statearr_28492;
})();
if(cljs.core.truth_(inst_28470)){
var statearr_28493_28521 = state_28483__$1;
(statearr_28493_28521[(1)] = (13));

} else {
var statearr_28494_28522 = state_28483__$1;
(statearr_28494_28522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (2))){
var inst_28446 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28447 = (0);
var state_28483__$1 = (function (){var statearr_28495 = state_28483;
(statearr_28495[(9)] = inst_28446);

(statearr_28495[(7)] = inst_28447);

return statearr_28495;
})();
var statearr_28496_28523 = state_28483__$1;
(statearr_28496_28523[(2)] = null);

(statearr_28496_28523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (11))){
var inst_28447 = (state_28483[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28483,(10),Object,null,(9));
var inst_28456 = chs__$1.call(null,inst_28447);
var inst_28457 = done.call(null,inst_28447);
var inst_28458 = cljs.core.async.take_BANG_.call(null,inst_28456,inst_28457);
var state_28483__$1 = state_28483;
var statearr_28497_28524 = state_28483__$1;
(statearr_28497_28524[(2)] = inst_28458);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28483__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (9))){
var inst_28447 = (state_28483[(7)]);
var inst_28460 = (state_28483[(2)]);
var inst_28461 = (inst_28447 + (1));
var inst_28447__$1 = inst_28461;
var state_28483__$1 = (function (){var statearr_28498 = state_28483;
(statearr_28498[(10)] = inst_28460);

(statearr_28498[(7)] = inst_28447__$1);

return statearr_28498;
})();
var statearr_28499_28525 = state_28483__$1;
(statearr_28499_28525[(2)] = null);

(statearr_28499_28525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (5))){
var inst_28467 = (state_28483[(2)]);
var state_28483__$1 = (function (){var statearr_28500 = state_28483;
(statearr_28500[(11)] = inst_28467);

return statearr_28500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28483__$1,(12),dchan);
} else {
if((state_val_28484 === (14))){
var inst_28469 = (state_28483[(8)]);
var inst_28474 = cljs.core.apply.call(null,f,inst_28469);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28483__$1,(16),out,inst_28474);
} else {
if((state_val_28484 === (16))){
var inst_28476 = (state_28483[(2)]);
var state_28483__$1 = (function (){var statearr_28501 = state_28483;
(statearr_28501[(12)] = inst_28476);

return statearr_28501;
})();
var statearr_28502_28526 = state_28483__$1;
(statearr_28502_28526[(2)] = null);

(statearr_28502_28526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (10))){
var inst_28451 = (state_28483[(2)]);
var inst_28452 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28483__$1 = (function (){var statearr_28503 = state_28483;
(statearr_28503[(13)] = inst_28451);

return statearr_28503;
})();
var statearr_28504_28527 = state_28483__$1;
(statearr_28504_28527[(2)] = inst_28452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28483__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (8))){
var inst_28465 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28505_28528 = state_28483__$1;
(statearr_28505_28528[(2)] = inst_28465);

(statearr_28505_28528[(1)] = (5));


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
});})(c__20653__auto___28513,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20597__auto__,c__20653__auto___28513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_28509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28509[(0)] = state_machine__20598__auto__);

(statearr_28509[(1)] = (1));

return statearr_28509;
});
var state_machine__20598__auto____1 = (function (state_28483){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_28483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e28510){if((e28510 instanceof Object)){
var ex__20601__auto__ = e28510;
var statearr_28511_28529 = state_28483;
(statearr_28511_28529[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28530 = state_28483;
state_28483 = G__28530;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_28483){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_28483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___28513,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20655__auto__ = (function (){var statearr_28512 = f__20654__auto__.call(null);
(statearr_28512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___28513);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___28513,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__20653__auto___28638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___28638,out){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___28638,out){
return (function (state_28614){
var state_val_28615 = (state_28614[(1)]);
if((state_val_28615 === (7))){
var inst_28593 = (state_28614[(7)]);
var inst_28594 = (state_28614[(8)]);
var inst_28593__$1 = (state_28614[(2)]);
var inst_28594__$1 = cljs.core.nth.call(null,inst_28593__$1,(0),null);
var inst_28595 = cljs.core.nth.call(null,inst_28593__$1,(1),null);
var inst_28596 = (inst_28594__$1 == null);
var state_28614__$1 = (function (){var statearr_28616 = state_28614;
(statearr_28616[(9)] = inst_28595);

(statearr_28616[(7)] = inst_28593__$1);

(statearr_28616[(8)] = inst_28594__$1);

return statearr_28616;
})();
if(cljs.core.truth_(inst_28596)){
var statearr_28617_28639 = state_28614__$1;
(statearr_28617_28639[(1)] = (8));

} else {
var statearr_28618_28640 = state_28614__$1;
(statearr_28618_28640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (1))){
var inst_28585 = cljs.core.vec.call(null,chs);
var inst_28586 = inst_28585;
var state_28614__$1 = (function (){var statearr_28619 = state_28614;
(statearr_28619[(10)] = inst_28586);

return statearr_28619;
})();
var statearr_28620_28641 = state_28614__$1;
(statearr_28620_28641[(2)] = null);

(statearr_28620_28641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (4))){
var inst_28586 = (state_28614[(10)]);
var state_28614__$1 = state_28614;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28614__$1,(7),inst_28586);
} else {
if((state_val_28615 === (6))){
var inst_28610 = (state_28614[(2)]);
var state_28614__$1 = state_28614;
var statearr_28621_28642 = state_28614__$1;
(statearr_28621_28642[(2)] = inst_28610);

(statearr_28621_28642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (3))){
var inst_28612 = (state_28614[(2)]);
var state_28614__$1 = state_28614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28614__$1,inst_28612);
} else {
if((state_val_28615 === (2))){
var inst_28586 = (state_28614[(10)]);
var inst_28588 = cljs.core.count.call(null,inst_28586);
var inst_28589 = (inst_28588 > (0));
var state_28614__$1 = state_28614;
if(cljs.core.truth_(inst_28589)){
var statearr_28623_28643 = state_28614__$1;
(statearr_28623_28643[(1)] = (4));

} else {
var statearr_28624_28644 = state_28614__$1;
(statearr_28624_28644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (11))){
var inst_28586 = (state_28614[(10)]);
var inst_28603 = (state_28614[(2)]);
var tmp28622 = inst_28586;
var inst_28586__$1 = tmp28622;
var state_28614__$1 = (function (){var statearr_28625 = state_28614;
(statearr_28625[(11)] = inst_28603);

(statearr_28625[(10)] = inst_28586__$1);

return statearr_28625;
})();
var statearr_28626_28645 = state_28614__$1;
(statearr_28626_28645[(2)] = null);

(statearr_28626_28645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (9))){
var inst_28594 = (state_28614[(8)]);
var state_28614__$1 = state_28614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28614__$1,(11),out,inst_28594);
} else {
if((state_val_28615 === (5))){
var inst_28608 = cljs.core.async.close_BANG_.call(null,out);
var state_28614__$1 = state_28614;
var statearr_28627_28646 = state_28614__$1;
(statearr_28627_28646[(2)] = inst_28608);

(statearr_28627_28646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (10))){
var inst_28606 = (state_28614[(2)]);
var state_28614__$1 = state_28614;
var statearr_28628_28647 = state_28614__$1;
(statearr_28628_28647[(2)] = inst_28606);

(statearr_28628_28647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28615 === (8))){
var inst_28586 = (state_28614[(10)]);
var inst_28595 = (state_28614[(9)]);
var inst_28593 = (state_28614[(7)]);
var inst_28594 = (state_28614[(8)]);
var inst_28598 = (function (){var c = inst_28595;
var v = inst_28594;
var vec__28591 = inst_28593;
var cs = inst_28586;
return ((function (c,v,vec__28591,cs,inst_28586,inst_28595,inst_28593,inst_28594,state_val_28615,c__20653__auto___28638,out){
return (function (p1__28531_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28531_SHARP_);
});
;})(c,v,vec__28591,cs,inst_28586,inst_28595,inst_28593,inst_28594,state_val_28615,c__20653__auto___28638,out))
})();
var inst_28599 = cljs.core.filterv.call(null,inst_28598,inst_28586);
var inst_28586__$1 = inst_28599;
var state_28614__$1 = (function (){var statearr_28629 = state_28614;
(statearr_28629[(10)] = inst_28586__$1);

return statearr_28629;
})();
var statearr_28630_28648 = state_28614__$1;
(statearr_28630_28648[(2)] = null);

(statearr_28630_28648[(1)] = (2));


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
});})(c__20653__auto___28638,out))
;
return ((function (switch__20597__auto__,c__20653__auto___28638,out){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_28634 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28634[(0)] = state_machine__20598__auto__);

(statearr_28634[(1)] = (1));

return statearr_28634;
});
var state_machine__20598__auto____1 = (function (state_28614){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_28614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e28635){if((e28635 instanceof Object)){
var ex__20601__auto__ = e28635;
var statearr_28636_28649 = state_28614;
(statearr_28636_28649[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28650 = state_28614;
state_28614 = G__28650;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_28614){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_28614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___28638,out))
})();
var state__20655__auto__ = (function (){var statearr_28637 = f__20654__auto__.call(null);
(statearr_28637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___28638);

return statearr_28637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___28638,out))
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
var c__20653__auto___28743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___28743,out){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___28743,out){
return (function (state_28720){
var state_val_28721 = (state_28720[(1)]);
if((state_val_28721 === (7))){
var inst_28702 = (state_28720[(7)]);
var inst_28702__$1 = (state_28720[(2)]);
var inst_28703 = (inst_28702__$1 == null);
var inst_28704 = cljs.core.not.call(null,inst_28703);
var state_28720__$1 = (function (){var statearr_28722 = state_28720;
(statearr_28722[(7)] = inst_28702__$1);

return statearr_28722;
})();
if(inst_28704){
var statearr_28723_28744 = state_28720__$1;
(statearr_28723_28744[(1)] = (8));

} else {
var statearr_28724_28745 = state_28720__$1;
(statearr_28724_28745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (1))){
var inst_28697 = (0);
var state_28720__$1 = (function (){var statearr_28725 = state_28720;
(statearr_28725[(8)] = inst_28697);

return statearr_28725;
})();
var statearr_28726_28746 = state_28720__$1;
(statearr_28726_28746[(2)] = null);

(statearr_28726_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (4))){
var state_28720__$1 = state_28720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28720__$1,(7),ch);
} else {
if((state_val_28721 === (6))){
var inst_28715 = (state_28720[(2)]);
var state_28720__$1 = state_28720;
var statearr_28727_28747 = state_28720__$1;
(statearr_28727_28747[(2)] = inst_28715);

(statearr_28727_28747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (3))){
var inst_28717 = (state_28720[(2)]);
var inst_28718 = cljs.core.async.close_BANG_.call(null,out);
var state_28720__$1 = (function (){var statearr_28728 = state_28720;
(statearr_28728[(9)] = inst_28717);

return statearr_28728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28720__$1,inst_28718);
} else {
if((state_val_28721 === (2))){
var inst_28697 = (state_28720[(8)]);
var inst_28699 = (inst_28697 < n);
var state_28720__$1 = state_28720;
if(cljs.core.truth_(inst_28699)){
var statearr_28729_28748 = state_28720__$1;
(statearr_28729_28748[(1)] = (4));

} else {
var statearr_28730_28749 = state_28720__$1;
(statearr_28730_28749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (11))){
var inst_28697 = (state_28720[(8)]);
var inst_28707 = (state_28720[(2)]);
var inst_28708 = (inst_28697 + (1));
var inst_28697__$1 = inst_28708;
var state_28720__$1 = (function (){var statearr_28731 = state_28720;
(statearr_28731[(10)] = inst_28707);

(statearr_28731[(8)] = inst_28697__$1);

return statearr_28731;
})();
var statearr_28732_28750 = state_28720__$1;
(statearr_28732_28750[(2)] = null);

(statearr_28732_28750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (9))){
var state_28720__$1 = state_28720;
var statearr_28733_28751 = state_28720__$1;
(statearr_28733_28751[(2)] = null);

(statearr_28733_28751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (5))){
var state_28720__$1 = state_28720;
var statearr_28734_28752 = state_28720__$1;
(statearr_28734_28752[(2)] = null);

(statearr_28734_28752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (10))){
var inst_28712 = (state_28720[(2)]);
var state_28720__$1 = state_28720;
var statearr_28735_28753 = state_28720__$1;
(statearr_28735_28753[(2)] = inst_28712);

(statearr_28735_28753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (8))){
var inst_28702 = (state_28720[(7)]);
var state_28720__$1 = state_28720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28720__$1,(11),out,inst_28702);
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
});})(c__20653__auto___28743,out))
;
return ((function (switch__20597__auto__,c__20653__auto___28743,out){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_28739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28739[(0)] = state_machine__20598__auto__);

(statearr_28739[(1)] = (1));

return statearr_28739;
});
var state_machine__20598__auto____1 = (function (state_28720){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_28720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e28740){if((e28740 instanceof Object)){
var ex__20601__auto__ = e28740;
var statearr_28741_28754 = state_28720;
(statearr_28741_28754[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28755 = state_28720;
state_28720 = G__28755;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_28720){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_28720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___28743,out))
})();
var state__20655__auto__ = (function (){var statearr_28742 = f__20654__auto__.call(null);
(statearr_28742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___28743);

return statearr_28742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___28743,out))
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
if(typeof cljs.core.async.t28763 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28763 = (function (ch,f,map_LT_,meta28764){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28764 = meta28764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28766 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28766 = (function (fn1,_,meta28764,map_LT_,f,ch,meta28767){
this.fn1 = fn1;
this._ = _;
this.meta28764 = meta28764;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28767 = meta28767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28766.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28756_SHARP_){
return f1.call(null,(((p1__28756_SHARP_ == null))?null:self__.f.call(null,p1__28756_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28768){
var self__ = this;
var _28768__$1 = this;
return self__.meta28767;
});})(___$1))
;

cljs.core.async.t28766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28768,meta28767__$1){
var self__ = this;
var _28768__$1 = this;
return (new cljs.core.async.t28766(self__.fn1,self__._,self__.meta28764,self__.map_LT_,self__.f,self__.ch,meta28767__$1));
});})(___$1))
;

cljs.core.async.t28766.cljs$lang$type = true;

cljs.core.async.t28766.cljs$lang$ctorStr = "cljs.core.async/t28766";

cljs.core.async.t28766.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t28766");
});})(___$1))
;

cljs.core.async.__GT_t28766 = ((function (___$1){
return (function __GT_t28766(fn1__$1,___$2,meta28764__$1,map_LT___$1,f__$1,ch__$1,meta28767){
return (new cljs.core.async.t28766(fn1__$1,___$2,meta28764__$1,map_LT___$1,f__$1,ch__$1,meta28767));
});})(___$1))
;

}

return (new cljs.core.async.t28766(fn1,___$1,self__.meta28764,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__17979__auto__ = ret;
if(cljs.core.truth_(and__17979__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17979__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28765){
var self__ = this;
var _28765__$1 = this;
return self__.meta28764;
});

cljs.core.async.t28763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28765,meta28764__$1){
var self__ = this;
var _28765__$1 = this;
return (new cljs.core.async.t28763(self__.ch,self__.f,self__.map_LT_,meta28764__$1));
});

cljs.core.async.t28763.cljs$lang$type = true;

cljs.core.async.t28763.cljs$lang$ctorStr = "cljs.core.async/t28763";

cljs.core.async.t28763.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t28763");
});

cljs.core.async.__GT_t28763 = (function __GT_t28763(ch__$1,f__$1,map_LT___$1,meta28764){
return (new cljs.core.async.t28763(ch__$1,f__$1,map_LT___$1,meta28764));
});

}

return (new cljs.core.async.t28763(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28772 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28772 = (function (ch,f,map_GT_,meta28773){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28773 = meta28773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28772.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28774){
var self__ = this;
var _28774__$1 = this;
return self__.meta28773;
});

cljs.core.async.t28772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28774,meta28773__$1){
var self__ = this;
var _28774__$1 = this;
return (new cljs.core.async.t28772(self__.ch,self__.f,self__.map_GT_,meta28773__$1));
});

cljs.core.async.t28772.cljs$lang$type = true;

cljs.core.async.t28772.cljs$lang$ctorStr = "cljs.core.async/t28772";

cljs.core.async.t28772.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t28772");
});

cljs.core.async.__GT_t28772 = (function __GT_t28772(ch__$1,f__$1,map_GT___$1,meta28773){
return (new cljs.core.async.t28772(ch__$1,f__$1,map_GT___$1,meta28773));
});

}

return (new cljs.core.async.t28772(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28778 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28778 = (function (ch,p,filter_GT_,meta28779){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28779 = meta28779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28780){
var self__ = this;
var _28780__$1 = this;
return self__.meta28779;
});

cljs.core.async.t28778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28780,meta28779__$1){
var self__ = this;
var _28780__$1 = this;
return (new cljs.core.async.t28778(self__.ch,self__.p,self__.filter_GT_,meta28779__$1));
});

cljs.core.async.t28778.cljs$lang$type = true;

cljs.core.async.t28778.cljs$lang$ctorStr = "cljs.core.async/t28778";

cljs.core.async.t28778.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cljs.core.async/t28778");
});

cljs.core.async.__GT_t28778 = (function __GT_t28778(ch__$1,p__$1,filter_GT___$1,meta28779){
return (new cljs.core.async.t28778(ch__$1,p__$1,filter_GT___$1,meta28779));
});

}

return (new cljs.core.async.t28778(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__20653__auto___28863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___28863,out){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___28863,out){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (7))){
var inst_28838 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28844_28864 = state_28842__$1;
(statearr_28844_28864[(2)] = inst_28838);

(statearr_28844_28864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (1))){
var state_28842__$1 = state_28842;
var statearr_28845_28865 = state_28842__$1;
(statearr_28845_28865[(2)] = null);

(statearr_28845_28865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (4))){
var inst_28824 = (state_28842[(7)]);
var inst_28824__$1 = (state_28842[(2)]);
var inst_28825 = (inst_28824__$1 == null);
var state_28842__$1 = (function (){var statearr_28846 = state_28842;
(statearr_28846[(7)] = inst_28824__$1);

return statearr_28846;
})();
if(cljs.core.truth_(inst_28825)){
var statearr_28847_28866 = state_28842__$1;
(statearr_28847_28866[(1)] = (5));

} else {
var statearr_28848_28867 = state_28842__$1;
(statearr_28848_28867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (6))){
var inst_28824 = (state_28842[(7)]);
var inst_28829 = p.call(null,inst_28824);
var state_28842__$1 = state_28842;
if(cljs.core.truth_(inst_28829)){
var statearr_28849_28868 = state_28842__$1;
(statearr_28849_28868[(1)] = (8));

} else {
var statearr_28850_28869 = state_28842__$1;
(statearr_28850_28869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var inst_28840 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (2))){
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(4),ch);
} else {
if((state_val_28843 === (11))){
var inst_28832 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28851_28870 = state_28842__$1;
(statearr_28851_28870[(2)] = inst_28832);

(statearr_28851_28870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (9))){
var state_28842__$1 = state_28842;
var statearr_28852_28871 = state_28842__$1;
(statearr_28852_28871[(2)] = null);

(statearr_28852_28871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (5))){
var inst_28827 = cljs.core.async.close_BANG_.call(null,out);
var state_28842__$1 = state_28842;
var statearr_28853_28872 = state_28842__$1;
(statearr_28853_28872[(2)] = inst_28827);

(statearr_28853_28872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (10))){
var inst_28835 = (state_28842[(2)]);
var state_28842__$1 = (function (){var statearr_28854 = state_28842;
(statearr_28854[(8)] = inst_28835);

return statearr_28854;
})();
var statearr_28855_28873 = state_28842__$1;
(statearr_28855_28873[(2)] = null);

(statearr_28855_28873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (8))){
var inst_28824 = (state_28842[(7)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28842__$1,(11),out,inst_28824);
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
});})(c__20653__auto___28863,out))
;
return ((function (switch__20597__auto__,c__20653__auto___28863,out){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_28859 = [null,null,null,null,null,null,null,null,null];
(statearr_28859[(0)] = state_machine__20598__auto__);

(statearr_28859[(1)] = (1));

return statearr_28859;
});
var state_machine__20598__auto____1 = (function (state_28842){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e28860){if((e28860 instanceof Object)){
var ex__20601__auto__ = e28860;
var statearr_28861_28874 = state_28842;
(statearr_28861_28874[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28875 = state_28842;
state_28842 = G__28875;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___28863,out))
})();
var state__20655__auto__ = (function (){var statearr_28862 = f__20654__auto__.call(null);
(statearr_28862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___28863);

return statearr_28862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___28863,out))
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
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (7))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29043_29084 = state_29041__$1;
(statearr_29043_29084[(2)] = inst_29037);

(statearr_29043_29084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (20))){
var inst_29007 = (state_29041[(7)]);
var inst_29018 = (state_29041[(2)]);
var inst_29019 = cljs.core.next.call(null,inst_29007);
var inst_28993 = inst_29019;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29041__$1 = (function (){var statearr_29044 = state_29041;
(statearr_29044[(8)] = inst_28996);

(statearr_29044[(9)] = inst_29018);

(statearr_29044[(10)] = inst_28994);

(statearr_29044[(11)] = inst_28995);

(statearr_29044[(12)] = inst_28993);

return statearr_29044;
})();
var statearr_29045_29085 = state_29041__$1;
(statearr_29045_29085[(2)] = null);

(statearr_29045_29085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (1))){
var state_29041__$1 = state_29041;
var statearr_29046_29086 = state_29041__$1;
(statearr_29046_29086[(2)] = null);

(statearr_29046_29086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (4))){
var inst_28982 = (state_29041[(13)]);
var inst_28982__$1 = (state_29041[(2)]);
var inst_28983 = (inst_28982__$1 == null);
var state_29041__$1 = (function (){var statearr_29047 = state_29041;
(statearr_29047[(13)] = inst_28982__$1);

return statearr_29047;
})();
if(cljs.core.truth_(inst_28983)){
var statearr_29048_29087 = state_29041__$1;
(statearr_29048_29087[(1)] = (5));

} else {
var statearr_29049_29088 = state_29041__$1;
(statearr_29049_29088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (15))){
var state_29041__$1 = state_29041;
var statearr_29053_29089 = state_29041__$1;
(statearr_29053_29089[(2)] = null);

(statearr_29053_29089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (21))){
var state_29041__$1 = state_29041;
var statearr_29054_29090 = state_29041__$1;
(statearr_29054_29090[(2)] = null);

(statearr_29054_29090[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (13))){
var inst_28996 = (state_29041[(8)]);
var inst_28994 = (state_29041[(10)]);
var inst_28995 = (state_29041[(11)]);
var inst_28993 = (state_29041[(12)]);
var inst_29003 = (state_29041[(2)]);
var inst_29004 = (inst_28996 + (1));
var tmp29050 = inst_28994;
var tmp29051 = inst_28995;
var tmp29052 = inst_28993;
var inst_28993__$1 = tmp29052;
var inst_28994__$1 = tmp29050;
var inst_28995__$1 = tmp29051;
var inst_28996__$1 = inst_29004;
var state_29041__$1 = (function (){var statearr_29055 = state_29041;
(statearr_29055[(8)] = inst_28996__$1);

(statearr_29055[(10)] = inst_28994__$1);

(statearr_29055[(11)] = inst_28995__$1);

(statearr_29055[(12)] = inst_28993__$1);

(statearr_29055[(14)] = inst_29003);

return statearr_29055;
})();
var statearr_29056_29091 = state_29041__$1;
(statearr_29056_29091[(2)] = null);

(statearr_29056_29091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (22))){
var state_29041__$1 = state_29041;
var statearr_29057_29092 = state_29041__$1;
(statearr_29057_29092[(2)] = null);

(statearr_29057_29092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (6))){
var inst_28982 = (state_29041[(13)]);
var inst_28991 = f.call(null,inst_28982);
var inst_28992 = cljs.core.seq.call(null,inst_28991);
var inst_28993 = inst_28992;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29041__$1 = (function (){var statearr_29058 = state_29041;
(statearr_29058[(8)] = inst_28996);

(statearr_29058[(10)] = inst_28994);

(statearr_29058[(11)] = inst_28995);

(statearr_29058[(12)] = inst_28993);

return statearr_29058;
})();
var statearr_29059_29093 = state_29041__$1;
(statearr_29059_29093[(2)] = null);

(statearr_29059_29093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (17))){
var inst_29007 = (state_29041[(7)]);
var inst_29011 = cljs.core.chunk_first.call(null,inst_29007);
var inst_29012 = cljs.core.chunk_rest.call(null,inst_29007);
var inst_29013 = cljs.core.count.call(null,inst_29011);
var inst_28993 = inst_29012;
var inst_28994 = inst_29011;
var inst_28995 = inst_29013;
var inst_28996 = (0);
var state_29041__$1 = (function (){var statearr_29060 = state_29041;
(statearr_29060[(8)] = inst_28996);

(statearr_29060[(10)] = inst_28994);

(statearr_29060[(11)] = inst_28995);

(statearr_29060[(12)] = inst_28993);

return statearr_29060;
})();
var statearr_29061_29094 = state_29041__$1;
(statearr_29061_29094[(2)] = null);

(statearr_29061_29094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (12))){
var inst_29027 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29062_29095 = state_29041__$1;
(statearr_29062_29095[(2)] = inst_29027);

(statearr_29062_29095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (2))){
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29041__$1,(4),in$);
} else {
if((state_val_29042 === (23))){
var inst_29035 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29063_29096 = state_29041__$1;
(statearr_29063_29096[(2)] = inst_29035);

(statearr_29063_29096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (19))){
var inst_29022 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29064_29097 = state_29041__$1;
(statearr_29064_29097[(2)] = inst_29022);

(statearr_29064_29097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (11))){
var inst_29007 = (state_29041[(7)]);
var inst_28993 = (state_29041[(12)]);
var inst_29007__$1 = cljs.core.seq.call(null,inst_28993);
var state_29041__$1 = (function (){var statearr_29065 = state_29041;
(statearr_29065[(7)] = inst_29007__$1);

return statearr_29065;
})();
if(inst_29007__$1){
var statearr_29066_29098 = state_29041__$1;
(statearr_29066_29098[(1)] = (14));

} else {
var statearr_29067_29099 = state_29041__$1;
(statearr_29067_29099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (9))){
var inst_29029 = (state_29041[(2)]);
var inst_29030 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29041__$1 = (function (){var statearr_29068 = state_29041;
(statearr_29068[(15)] = inst_29029);

return statearr_29068;
})();
if(cljs.core.truth_(inst_29030)){
var statearr_29069_29100 = state_29041__$1;
(statearr_29069_29100[(1)] = (21));

} else {
var statearr_29070_29101 = state_29041__$1;
(statearr_29070_29101[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (5))){
var inst_28985 = cljs.core.async.close_BANG_.call(null,out);
var state_29041__$1 = state_29041;
var statearr_29071_29102 = state_29041__$1;
(statearr_29071_29102[(2)] = inst_28985);

(statearr_29071_29102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (14))){
var inst_29007 = (state_29041[(7)]);
var inst_29009 = cljs.core.chunked_seq_QMARK_.call(null,inst_29007);
var state_29041__$1 = state_29041;
if(inst_29009){
var statearr_29072_29103 = state_29041__$1;
(statearr_29072_29103[(1)] = (17));

} else {
var statearr_29073_29104 = state_29041__$1;
(statearr_29073_29104[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (16))){
var inst_29025 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29074_29105 = state_29041__$1;
(statearr_29074_29105[(2)] = inst_29025);

(statearr_29074_29105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29042 === (10))){
var inst_28996 = (state_29041[(8)]);
var inst_28994 = (state_29041[(10)]);
var inst_29001 = cljs.core._nth.call(null,inst_28994,inst_28996);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29041__$1,(13),out,inst_29001);
} else {
if((state_val_29042 === (18))){
var inst_29007 = (state_29041[(7)]);
var inst_29016 = cljs.core.first.call(null,inst_29007);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29041__$1,(20),out,inst_29016);
} else {
if((state_val_29042 === (8))){
var inst_28996 = (state_29041[(8)]);
var inst_28995 = (state_29041[(11)]);
var inst_28998 = (inst_28996 < inst_28995);
var inst_28999 = inst_28998;
var state_29041__$1 = state_29041;
if(cljs.core.truth_(inst_28999)){
var statearr_29075_29106 = state_29041__$1;
(statearr_29075_29106[(1)] = (10));

} else {
var statearr_29076_29107 = state_29041__$1;
(statearr_29076_29107[(1)] = (11));

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
});})(c__20653__auto__))
;
return ((function (switch__20597__auto__,c__20653__auto__){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_29080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29080[(0)] = state_machine__20598__auto__);

(statearr_29080[(1)] = (1));

return statearr_29080;
});
var state_machine__20598__auto____1 = (function (state_29041){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_29041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e29081){if((e29081 instanceof Object)){
var ex__20601__auto__ = e29081;
var statearr_29082_29108 = state_29041;
(statearr_29082_29108[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29109 = state_29041;
state_29041 = G__29109;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_29083 = f__20654__auto__.call(null);
(statearr_29083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
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
var c__20653__auto___29206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___29206,out){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___29206,out){
return (function (state_29181){
var state_val_29182 = (state_29181[(1)]);
if((state_val_29182 === (7))){
var inst_29176 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29183_29207 = state_29181__$1;
(statearr_29183_29207[(2)] = inst_29176);

(statearr_29183_29207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (1))){
var inst_29158 = null;
var state_29181__$1 = (function (){var statearr_29184 = state_29181;
(statearr_29184[(7)] = inst_29158);

return statearr_29184;
})();
var statearr_29185_29208 = state_29181__$1;
(statearr_29185_29208[(2)] = null);

(statearr_29185_29208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (4))){
var inst_29161 = (state_29181[(8)]);
var inst_29161__$1 = (state_29181[(2)]);
var inst_29162 = (inst_29161__$1 == null);
var inst_29163 = cljs.core.not.call(null,inst_29162);
var state_29181__$1 = (function (){var statearr_29186 = state_29181;
(statearr_29186[(8)] = inst_29161__$1);

return statearr_29186;
})();
if(inst_29163){
var statearr_29187_29209 = state_29181__$1;
(statearr_29187_29209[(1)] = (5));

} else {
var statearr_29188_29210 = state_29181__$1;
(statearr_29188_29210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (6))){
var state_29181__$1 = state_29181;
var statearr_29189_29211 = state_29181__$1;
(statearr_29189_29211[(2)] = null);

(statearr_29189_29211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (3))){
var inst_29178 = (state_29181[(2)]);
var inst_29179 = cljs.core.async.close_BANG_.call(null,out);
var state_29181__$1 = (function (){var statearr_29190 = state_29181;
(statearr_29190[(9)] = inst_29178);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29181__$1,inst_29179);
} else {
if((state_val_29182 === (2))){
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29181__$1,(4),ch);
} else {
if((state_val_29182 === (11))){
var inst_29161 = (state_29181[(8)]);
var inst_29170 = (state_29181[(2)]);
var inst_29158 = inst_29161;
var state_29181__$1 = (function (){var statearr_29191 = state_29181;
(statearr_29191[(7)] = inst_29158);

(statearr_29191[(10)] = inst_29170);

return statearr_29191;
})();
var statearr_29192_29212 = state_29181__$1;
(statearr_29192_29212[(2)] = null);

(statearr_29192_29212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (9))){
var inst_29161 = (state_29181[(8)]);
var state_29181__$1 = state_29181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29181__$1,(11),out,inst_29161);
} else {
if((state_val_29182 === (5))){
var inst_29158 = (state_29181[(7)]);
var inst_29161 = (state_29181[(8)]);
var inst_29165 = cljs.core._EQ_.call(null,inst_29161,inst_29158);
var state_29181__$1 = state_29181;
if(inst_29165){
var statearr_29194_29213 = state_29181__$1;
(statearr_29194_29213[(1)] = (8));

} else {
var statearr_29195_29214 = state_29181__$1;
(statearr_29195_29214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (10))){
var inst_29173 = (state_29181[(2)]);
var state_29181__$1 = state_29181;
var statearr_29196_29215 = state_29181__$1;
(statearr_29196_29215[(2)] = inst_29173);

(statearr_29196_29215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29182 === (8))){
var inst_29158 = (state_29181[(7)]);
var tmp29193 = inst_29158;
var inst_29158__$1 = tmp29193;
var state_29181__$1 = (function (){var statearr_29197 = state_29181;
(statearr_29197[(7)] = inst_29158__$1);

return statearr_29197;
})();
var statearr_29198_29216 = state_29181__$1;
(statearr_29198_29216[(2)] = null);

(statearr_29198_29216[(1)] = (2));


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
});})(c__20653__auto___29206,out))
;
return ((function (switch__20597__auto__,c__20653__auto___29206,out){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_29202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29202[(0)] = state_machine__20598__auto__);

(statearr_29202[(1)] = (1));

return statearr_29202;
});
var state_machine__20598__auto____1 = (function (state_29181){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_29181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e29203){if((e29203 instanceof Object)){
var ex__20601__auto__ = e29203;
var statearr_29204_29217 = state_29181;
(statearr_29204_29217[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29218 = state_29181;
state_29181 = G__29218;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_29181){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_29181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___29206,out))
})();
var state__20655__auto__ = (function (){var statearr_29205 = f__20654__auto__.call(null);
(statearr_29205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___29206);

return statearr_29205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___29206,out))
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
var c__20653__auto___29353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___29353,out){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___29353,out){
return (function (state_29323){
var state_val_29324 = (state_29323[(1)]);
if((state_val_29324 === (7))){
var inst_29319 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29325_29354 = state_29323__$1;
(statearr_29325_29354[(2)] = inst_29319);

(statearr_29325_29354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (1))){
var inst_29286 = (new Array(n));
var inst_29287 = inst_29286;
var inst_29288 = (0);
var state_29323__$1 = (function (){var statearr_29326 = state_29323;
(statearr_29326[(7)] = inst_29287);

(statearr_29326[(8)] = inst_29288);

return statearr_29326;
})();
var statearr_29327_29355 = state_29323__$1;
(statearr_29327_29355[(2)] = null);

(statearr_29327_29355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (4))){
var inst_29291 = (state_29323[(9)]);
var inst_29291__$1 = (state_29323[(2)]);
var inst_29292 = (inst_29291__$1 == null);
var inst_29293 = cljs.core.not.call(null,inst_29292);
var state_29323__$1 = (function (){var statearr_29328 = state_29323;
(statearr_29328[(9)] = inst_29291__$1);

return statearr_29328;
})();
if(inst_29293){
var statearr_29329_29356 = state_29323__$1;
(statearr_29329_29356[(1)] = (5));

} else {
var statearr_29330_29357 = state_29323__$1;
(statearr_29330_29357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (15))){
var inst_29313 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29331_29358 = state_29323__$1;
(statearr_29331_29358[(2)] = inst_29313);

(statearr_29331_29358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (13))){
var state_29323__$1 = state_29323;
var statearr_29332_29359 = state_29323__$1;
(statearr_29332_29359[(2)] = null);

(statearr_29332_29359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (6))){
var inst_29288 = (state_29323[(8)]);
var inst_29309 = (inst_29288 > (0));
var state_29323__$1 = state_29323;
if(cljs.core.truth_(inst_29309)){
var statearr_29333_29360 = state_29323__$1;
(statearr_29333_29360[(1)] = (12));

} else {
var statearr_29334_29361 = state_29323__$1;
(statearr_29334_29361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (3))){
var inst_29321 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29323__$1,inst_29321);
} else {
if((state_val_29324 === (12))){
var inst_29287 = (state_29323[(7)]);
var inst_29311 = cljs.core.vec.call(null,inst_29287);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29323__$1,(15),out,inst_29311);
} else {
if((state_val_29324 === (2))){
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29323__$1,(4),ch);
} else {
if((state_val_29324 === (11))){
var inst_29303 = (state_29323[(2)]);
var inst_29304 = (new Array(n));
var inst_29287 = inst_29304;
var inst_29288 = (0);
var state_29323__$1 = (function (){var statearr_29335 = state_29323;
(statearr_29335[(10)] = inst_29303);

(statearr_29335[(7)] = inst_29287);

(statearr_29335[(8)] = inst_29288);

return statearr_29335;
})();
var statearr_29336_29362 = state_29323__$1;
(statearr_29336_29362[(2)] = null);

(statearr_29336_29362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (9))){
var inst_29287 = (state_29323[(7)]);
var inst_29301 = cljs.core.vec.call(null,inst_29287);
var state_29323__$1 = state_29323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29323__$1,(11),out,inst_29301);
} else {
if((state_val_29324 === (5))){
var inst_29296 = (state_29323[(11)]);
var inst_29287 = (state_29323[(7)]);
var inst_29291 = (state_29323[(9)]);
var inst_29288 = (state_29323[(8)]);
var inst_29295 = (inst_29287[inst_29288] = inst_29291);
var inst_29296__$1 = (inst_29288 + (1));
var inst_29297 = (inst_29296__$1 < n);
var state_29323__$1 = (function (){var statearr_29337 = state_29323;
(statearr_29337[(11)] = inst_29296__$1);

(statearr_29337[(12)] = inst_29295);

return statearr_29337;
})();
if(cljs.core.truth_(inst_29297)){
var statearr_29338_29363 = state_29323__$1;
(statearr_29338_29363[(1)] = (8));

} else {
var statearr_29339_29364 = state_29323__$1;
(statearr_29339_29364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (14))){
var inst_29316 = (state_29323[(2)]);
var inst_29317 = cljs.core.async.close_BANG_.call(null,out);
var state_29323__$1 = (function (){var statearr_29341 = state_29323;
(statearr_29341[(13)] = inst_29316);

return statearr_29341;
})();
var statearr_29342_29365 = state_29323__$1;
(statearr_29342_29365[(2)] = inst_29317);

(statearr_29342_29365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (10))){
var inst_29307 = (state_29323[(2)]);
var state_29323__$1 = state_29323;
var statearr_29343_29366 = state_29323__$1;
(statearr_29343_29366[(2)] = inst_29307);

(statearr_29343_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29324 === (8))){
var inst_29296 = (state_29323[(11)]);
var inst_29287 = (state_29323[(7)]);
var tmp29340 = inst_29287;
var inst_29287__$1 = tmp29340;
var inst_29288 = inst_29296;
var state_29323__$1 = (function (){var statearr_29344 = state_29323;
(statearr_29344[(7)] = inst_29287__$1);

(statearr_29344[(8)] = inst_29288);

return statearr_29344;
})();
var statearr_29345_29367 = state_29323__$1;
(statearr_29345_29367[(2)] = null);

(statearr_29345_29367[(1)] = (2));


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
});})(c__20653__auto___29353,out))
;
return ((function (switch__20597__auto__,c__20653__auto___29353,out){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_29349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29349[(0)] = state_machine__20598__auto__);

(statearr_29349[(1)] = (1));

return statearr_29349;
});
var state_machine__20598__auto____1 = (function (state_29323){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_29323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e29350){if((e29350 instanceof Object)){
var ex__20601__auto__ = e29350;
var statearr_29351_29368 = state_29323;
(statearr_29351_29368[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29369 = state_29323;
state_29323 = G__29369;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_29323){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_29323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___29353,out))
})();
var state__20655__auto__ = (function (){var statearr_29352 = f__20654__auto__.call(null);
(statearr_29352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___29353);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___29353,out))
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
var c__20653__auto___29512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto___29512,out){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto___29512,out){
return (function (state_29482){
var state_val_29483 = (state_29482[(1)]);
if((state_val_29483 === (7))){
var inst_29478 = (state_29482[(2)]);
var state_29482__$1 = state_29482;
var statearr_29484_29513 = state_29482__$1;
(statearr_29484_29513[(2)] = inst_29478);

(statearr_29484_29513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (1))){
var inst_29441 = [];
var inst_29442 = inst_29441;
var inst_29443 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29482__$1 = (function (){var statearr_29485 = state_29482;
(statearr_29485[(7)] = inst_29442);

(statearr_29485[(8)] = inst_29443);

return statearr_29485;
})();
var statearr_29486_29514 = state_29482__$1;
(statearr_29486_29514[(2)] = null);

(statearr_29486_29514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (4))){
var inst_29446 = (state_29482[(9)]);
var inst_29446__$1 = (state_29482[(2)]);
var inst_29447 = (inst_29446__$1 == null);
var inst_29448 = cljs.core.not.call(null,inst_29447);
var state_29482__$1 = (function (){var statearr_29487 = state_29482;
(statearr_29487[(9)] = inst_29446__$1);

return statearr_29487;
})();
if(inst_29448){
var statearr_29488_29515 = state_29482__$1;
(statearr_29488_29515[(1)] = (5));

} else {
var statearr_29489_29516 = state_29482__$1;
(statearr_29489_29516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (15))){
var inst_29472 = (state_29482[(2)]);
var state_29482__$1 = state_29482;
var statearr_29490_29517 = state_29482__$1;
(statearr_29490_29517[(2)] = inst_29472);

(statearr_29490_29517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (13))){
var state_29482__$1 = state_29482;
var statearr_29491_29518 = state_29482__$1;
(statearr_29491_29518[(2)] = null);

(statearr_29491_29518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (6))){
var inst_29442 = (state_29482[(7)]);
var inst_29467 = inst_29442.length;
var inst_29468 = (inst_29467 > (0));
var state_29482__$1 = state_29482;
if(cljs.core.truth_(inst_29468)){
var statearr_29492_29519 = state_29482__$1;
(statearr_29492_29519[(1)] = (12));

} else {
var statearr_29493_29520 = state_29482__$1;
(statearr_29493_29520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (3))){
var inst_29480 = (state_29482[(2)]);
var state_29482__$1 = state_29482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29482__$1,inst_29480);
} else {
if((state_val_29483 === (12))){
var inst_29442 = (state_29482[(7)]);
var inst_29470 = cljs.core.vec.call(null,inst_29442);
var state_29482__$1 = state_29482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29482__$1,(15),out,inst_29470);
} else {
if((state_val_29483 === (2))){
var state_29482__$1 = state_29482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29482__$1,(4),ch);
} else {
if((state_val_29483 === (11))){
var inst_29446 = (state_29482[(9)]);
var inst_29450 = (state_29482[(10)]);
var inst_29460 = (state_29482[(2)]);
var inst_29461 = [];
var inst_29462 = inst_29461.push(inst_29446);
var inst_29442 = inst_29461;
var inst_29443 = inst_29450;
var state_29482__$1 = (function (){var statearr_29494 = state_29482;
(statearr_29494[(11)] = inst_29462);

(statearr_29494[(7)] = inst_29442);

(statearr_29494[(8)] = inst_29443);

(statearr_29494[(12)] = inst_29460);

return statearr_29494;
})();
var statearr_29495_29521 = state_29482__$1;
(statearr_29495_29521[(2)] = null);

(statearr_29495_29521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (9))){
var inst_29442 = (state_29482[(7)]);
var inst_29458 = cljs.core.vec.call(null,inst_29442);
var state_29482__$1 = state_29482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29482__$1,(11),out,inst_29458);
} else {
if((state_val_29483 === (5))){
var inst_29446 = (state_29482[(9)]);
var inst_29450 = (state_29482[(10)]);
var inst_29443 = (state_29482[(8)]);
var inst_29450__$1 = f.call(null,inst_29446);
var inst_29451 = cljs.core._EQ_.call(null,inst_29450__$1,inst_29443);
var inst_29452 = cljs.core.keyword_identical_QMARK_.call(null,inst_29443,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29453 = (inst_29451) || (inst_29452);
var state_29482__$1 = (function (){var statearr_29496 = state_29482;
(statearr_29496[(10)] = inst_29450__$1);

return statearr_29496;
})();
if(cljs.core.truth_(inst_29453)){
var statearr_29497_29522 = state_29482__$1;
(statearr_29497_29522[(1)] = (8));

} else {
var statearr_29498_29523 = state_29482__$1;
(statearr_29498_29523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (14))){
var inst_29475 = (state_29482[(2)]);
var inst_29476 = cljs.core.async.close_BANG_.call(null,out);
var state_29482__$1 = (function (){var statearr_29500 = state_29482;
(statearr_29500[(13)] = inst_29475);

return statearr_29500;
})();
var statearr_29501_29524 = state_29482__$1;
(statearr_29501_29524[(2)] = inst_29476);

(statearr_29501_29524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (10))){
var inst_29465 = (state_29482[(2)]);
var state_29482__$1 = state_29482;
var statearr_29502_29525 = state_29482__$1;
(statearr_29502_29525[(2)] = inst_29465);

(statearr_29502_29525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29483 === (8))){
var inst_29446 = (state_29482[(9)]);
var inst_29450 = (state_29482[(10)]);
var inst_29442 = (state_29482[(7)]);
var inst_29455 = inst_29442.push(inst_29446);
var tmp29499 = inst_29442;
var inst_29442__$1 = tmp29499;
var inst_29443 = inst_29450;
var state_29482__$1 = (function (){var statearr_29503 = state_29482;
(statearr_29503[(14)] = inst_29455);

(statearr_29503[(7)] = inst_29442__$1);

(statearr_29503[(8)] = inst_29443);

return statearr_29503;
})();
var statearr_29504_29526 = state_29482__$1;
(statearr_29504_29526[(2)] = null);

(statearr_29504_29526[(1)] = (2));


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
});})(c__20653__auto___29512,out))
;
return ((function (switch__20597__auto__,c__20653__auto___29512,out){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_29508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29508[(0)] = state_machine__20598__auto__);

(statearr_29508[(1)] = (1));

return statearr_29508;
});
var state_machine__20598__auto____1 = (function (state_29482){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_29482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e29509){if((e29509 instanceof Object)){
var ex__20601__auto__ = e29509;
var statearr_29510_29527 = state_29482;
(statearr_29510_29527[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29528 = state_29482;
state_29482 = G__29528;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_29482){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_29482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto___29512,out))
})();
var state__20655__auto__ = (function (){var statearr_29511 = f__20654__auto__.call(null);
(statearr_29511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto___29512);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto___29512,out))
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

//# sourceMappingURL=async.js.map?rel=1422975375637