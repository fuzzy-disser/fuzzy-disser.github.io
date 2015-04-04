// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__41297_41301 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__41298_41302 = null;
var count__41299_41303 = (0);
var i__41300_41304 = (0);
while(true){
if((i__41300_41304 < count__41299_41303)){
var k_41305 = cljs.core._nth.call(null,chunk__41298_41302,i__41300_41304);
var v_41306 = (b[k_41305]);
(a[k_41305] = v_41306);

var G__41307 = seq__41297_41301;
var G__41308 = chunk__41298_41302;
var G__41309 = count__41299_41303;
var G__41310 = (i__41300_41304 + (1));
seq__41297_41301 = G__41307;
chunk__41298_41302 = G__41308;
count__41299_41303 = G__41309;
i__41300_41304 = G__41310;
continue;
} else {
var temp__4126__auto___41311 = cljs.core.seq.call(null,seq__41297_41301);
if(temp__4126__auto___41311){
var seq__41297_41312__$1 = temp__4126__auto___41311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41297_41312__$1)){
var c__24331__auto___41313 = cljs.core.chunk_first.call(null,seq__41297_41312__$1);
var G__41314 = cljs.core.chunk_rest.call(null,seq__41297_41312__$1);
var G__41315 = c__24331__auto___41313;
var G__41316 = cljs.core.count.call(null,c__24331__auto___41313);
var G__41317 = (0);
seq__41297_41301 = G__41314;
chunk__41298_41302 = G__41315;
count__41299_41303 = G__41316;
i__41300_41304 = G__41317;
continue;
} else {
var k_41318 = cljs.core.first.call(null,seq__41297_41312__$1);
var v_41319 = (b[k_41318]);
(a[k_41318] = v_41319);

var G__41320 = cljs.core.next.call(null,seq__41297_41312__$1);
var G__41321 = null;
var G__41322 = (0);
var G__41323 = (0);
seq__41297_41301 = G__41320;
chunk__41298_41302 = G__41321;
count__41299_41303 = G__41322;
i__41300_41304 = G__41323;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__41324 = (i + (2));
var G__41325 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__41324;
ret = G__41325;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__41326_41330 = cljs.core.seq.call(null,v);
var chunk__41327_41331 = null;
var count__41328_41332 = (0);
var i__41329_41333 = (0);
while(true){
if((i__41329_41333 < count__41328_41332)){
var x_41334 = cljs.core._nth.call(null,chunk__41327_41331,i__41329_41333);
ret.push(x_41334);

var G__41335 = seq__41326_41330;
var G__41336 = chunk__41327_41331;
var G__41337 = count__41328_41332;
var G__41338 = (i__41329_41333 + (1));
seq__41326_41330 = G__41335;
chunk__41327_41331 = G__41336;
count__41328_41332 = G__41337;
i__41329_41333 = G__41338;
continue;
} else {
var temp__4126__auto___41339 = cljs.core.seq.call(null,seq__41326_41330);
if(temp__4126__auto___41339){
var seq__41326_41340__$1 = temp__4126__auto___41339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41326_41340__$1)){
var c__24331__auto___41341 = cljs.core.chunk_first.call(null,seq__41326_41340__$1);
var G__41342 = cljs.core.chunk_rest.call(null,seq__41326_41340__$1);
var G__41343 = c__24331__auto___41341;
var G__41344 = cljs.core.count.call(null,c__24331__auto___41341);
var G__41345 = (0);
seq__41326_41330 = G__41342;
chunk__41327_41331 = G__41343;
count__41328_41332 = G__41344;
i__41329_41333 = G__41345;
continue;
} else {
var x_41346 = cljs.core.first.call(null,seq__41326_41340__$1);
ret.push(x_41346);

var G__41347 = cljs.core.next.call(null,seq__41326_41340__$1);
var G__41348 = null;
var G__41349 = (0);
var G__41350 = (0);
seq__41326_41330 = G__41347;
chunk__41327_41331 = G__41348;
count__41328_41332 = G__41349;
i__41329_41333 = G__41350;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__41351_41355 = cljs.core.seq.call(null,v);
var chunk__41352_41356 = null;
var count__41353_41357 = (0);
var i__41354_41358 = (0);
while(true){
if((i__41354_41358 < count__41353_41357)){
var x_41359 = cljs.core._nth.call(null,chunk__41352_41356,i__41354_41358);
ret.push(x_41359);

var G__41360 = seq__41351_41355;
var G__41361 = chunk__41352_41356;
var G__41362 = count__41353_41357;
var G__41363 = (i__41354_41358 + (1));
seq__41351_41355 = G__41360;
chunk__41352_41356 = G__41361;
count__41353_41357 = G__41362;
i__41354_41358 = G__41363;
continue;
} else {
var temp__4126__auto___41364 = cljs.core.seq.call(null,seq__41351_41355);
if(temp__4126__auto___41364){
var seq__41351_41365__$1 = temp__4126__auto___41364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41351_41365__$1)){
var c__24331__auto___41366 = cljs.core.chunk_first.call(null,seq__41351_41365__$1);
var G__41367 = cljs.core.chunk_rest.call(null,seq__41351_41365__$1);
var G__41368 = c__24331__auto___41366;
var G__41369 = cljs.core.count.call(null,c__24331__auto___41366);
var G__41370 = (0);
seq__41351_41355 = G__41367;
chunk__41352_41356 = G__41368;
count__41353_41357 = G__41369;
i__41354_41358 = G__41370;
continue;
} else {
var x_41371 = cljs.core.first.call(null,seq__41351_41365__$1);
ret.push(x_41371);

var G__41372 = cljs.core.next.call(null,seq__41351_41365__$1);
var G__41373 = null;
var G__41374 = (0);
var G__41375 = (0);
seq__41351_41355 = G__41372;
chunk__41352_41356 = G__41373;
count__41353_41357 = G__41374;
i__41354_41358 = G__41375;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__41376_41380 = cljs.core.seq.call(null,v);
var chunk__41377_41381 = null;
var count__41378_41382 = (0);
var i__41379_41383 = (0);
while(true){
if((i__41379_41383 < count__41378_41382)){
var x_41384 = cljs.core._nth.call(null,chunk__41377_41381,i__41379_41383);
ret.push(x_41384);

var G__41385 = seq__41376_41380;
var G__41386 = chunk__41377_41381;
var G__41387 = count__41378_41382;
var G__41388 = (i__41379_41383 + (1));
seq__41376_41380 = G__41385;
chunk__41377_41381 = G__41386;
count__41378_41382 = G__41387;
i__41379_41383 = G__41388;
continue;
} else {
var temp__4126__auto___41389 = cljs.core.seq.call(null,seq__41376_41380);
if(temp__4126__auto___41389){
var seq__41376_41390__$1 = temp__4126__auto___41389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41376_41390__$1)){
var c__24331__auto___41391 = cljs.core.chunk_first.call(null,seq__41376_41390__$1);
var G__41392 = cljs.core.chunk_rest.call(null,seq__41376_41390__$1);
var G__41393 = c__24331__auto___41391;
var G__41394 = cljs.core.count.call(null,c__24331__auto___41391);
var G__41395 = (0);
seq__41376_41380 = G__41392;
chunk__41377_41381 = G__41393;
count__41378_41382 = G__41394;
i__41379_41383 = G__41395;
continue;
} else {
var x_41396 = cljs.core.first.call(null,seq__41376_41390__$1);
ret.push(x_41396);

var G__41397 = cljs.core.next.call(null,seq__41376_41390__$1);
var G__41398 = null;
var G__41399 = (0);
var G__41400 = (0);
seq__41376_41380 = G__41397;
chunk__41377_41381 = G__41398;
count__41378_41382 = G__41399;
i__41379_41383 = G__41400;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x41410 = cljs.core.clone.call(null,handlers);
x41410.forEach = ((function (x41410,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__41411 = cljs.core.seq.call(null,coll);
var chunk__41412 = null;
var count__41413 = (0);
var i__41414 = (0);
while(true){
if((i__41414 < count__41413)){
var vec__41415 = cljs.core._nth.call(null,chunk__41412,i__41414);
var k = cljs.core.nth.call(null,vec__41415,(0),null);
var v = cljs.core.nth.call(null,vec__41415,(1),null);
f.call(null,v,k);

var G__41417 = seq__41411;
var G__41418 = chunk__41412;
var G__41419 = count__41413;
var G__41420 = (i__41414 + (1));
seq__41411 = G__41417;
chunk__41412 = G__41418;
count__41413 = G__41419;
i__41414 = G__41420;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__41411);
if(temp__4126__auto__){
var seq__41411__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41411__$1)){
var c__24331__auto__ = cljs.core.chunk_first.call(null,seq__41411__$1);
var G__41421 = cljs.core.chunk_rest.call(null,seq__41411__$1);
var G__41422 = c__24331__auto__;
var G__41423 = cljs.core.count.call(null,c__24331__auto__);
var G__41424 = (0);
seq__41411 = G__41421;
chunk__41412 = G__41422;
count__41413 = G__41423;
i__41414 = G__41424;
continue;
} else {
var vec__41416 = cljs.core.first.call(null,seq__41411__$1);
var k = cljs.core.nth.call(null,vec__41416,(0),null);
var v = cljs.core.nth.call(null,vec__41416,(1),null);
f.call(null,v,k);

var G__41425 = cljs.core.next.call(null,seq__41411__$1);
var G__41426 = null;
var G__41427 = (0);
var G__41428 = (0);
seq__41411 = G__41425;
chunk__41412 = G__41426;
count__41413 = G__41427;
i__41414 = G__41428;
continue;
}
} else {
return null;
}
}
break;
}
});})(x41410,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x41410;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__41409 = obj;
G__41409.push(kfn.call(null,k),vfn.call(null,v));

return G__41409;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t41432 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t41432 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta41433){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta41433 = meta41433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t41432.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t41432.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t41432.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t41432.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t41432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41434){
var self__ = this;
var _41434__$1 = this;
return self__.meta41433;
});

cognitect.transit.t41432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41434,meta41433__$1){
var self__ = this;
var _41434__$1 = this;
return (new cognitect.transit.t41432(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta41433__$1));
});

cognitect.transit.t41432.cljs$lang$type = true;

cognitect.transit.t41432.cljs$lang$ctorStr = "cognitect.transit/t41432";

cognitect.transit.t41432.cljs$lang$ctorPrWriter = (function (this__24131__auto__,writer__24132__auto__,opt__24133__auto__){
return cljs.core._write.call(null,writer__24132__auto__,"cognitect.transit/t41432");
});

cognitect.transit.__GT_t41432 = (function __GT_t41432(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta41433){
return (new cognitect.transit.t41432(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta41433));
});

}

return (new cognitect.transit.t41432(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1425613929385