// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('cognitect.transit')) {
goog.provide('cognitect.transit');
}
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
var seq__29858_29862 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29859_29863 = null;
var count__29860_29864 = (0);
var i__29861_29865 = (0);
while(true){
if((i__29861_29865 < count__29860_29864)){
var k_29866 = cljs.core._nth.call(null,chunk__29859_29863,i__29861_29865);
var v_29867 = (b[k_29866]);
(a[k_29866] = v_29867);

var G__29868 = seq__29858_29862;
var G__29869 = chunk__29859_29863;
var G__29870 = count__29860_29864;
var G__29871 = (i__29861_29865 + (1));
seq__29858_29862 = G__29868;
chunk__29859_29863 = G__29869;
count__29860_29864 = G__29870;
i__29861_29865 = G__29871;
continue;
} else {
var temp__4126__auto___29872 = cljs.core.seq.call(null,seq__29858_29862);
if(temp__4126__auto___29872){
var seq__29858_29873__$1 = temp__4126__auto___29872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29858_29873__$1)){
var c__18778__auto___29874 = cljs.core.chunk_first.call(null,seq__29858_29873__$1);
var G__29875 = cljs.core.chunk_rest.call(null,seq__29858_29873__$1);
var G__29876 = c__18778__auto___29874;
var G__29877 = cljs.core.count.call(null,c__18778__auto___29874);
var G__29878 = (0);
seq__29858_29862 = G__29875;
chunk__29859_29863 = G__29876;
count__29860_29864 = G__29877;
i__29861_29865 = G__29878;
continue;
} else {
var k_29879 = cljs.core.first.call(null,seq__29858_29873__$1);
var v_29880 = (b[k_29879]);
(a[k_29879] = v_29880);

var G__29881 = cljs.core.next.call(null,seq__29858_29873__$1);
var G__29882 = null;
var G__29883 = (0);
var G__29884 = (0);
seq__29858_29862 = G__29881;
chunk__29859_29863 = G__29882;
count__29860_29864 = G__29883;
i__29861_29865 = G__29884;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/VectorBuilder");
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
var G__29885 = (i + (2));
var G__29886 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29885;
ret = G__29886;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/SymbolHandler");
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
var seq__29887_29891 = cljs.core.seq.call(null,v);
var chunk__29888_29892 = null;
var count__29889_29893 = (0);
var i__29890_29894 = (0);
while(true){
if((i__29890_29894 < count__29889_29893)){
var x_29895 = cljs.core._nth.call(null,chunk__29888_29892,i__29890_29894);
ret.push(x_29895);

var G__29896 = seq__29887_29891;
var G__29897 = chunk__29888_29892;
var G__29898 = count__29889_29893;
var G__29899 = (i__29890_29894 + (1));
seq__29887_29891 = G__29896;
chunk__29888_29892 = G__29897;
count__29889_29893 = G__29898;
i__29890_29894 = G__29899;
continue;
} else {
var temp__4126__auto___29900 = cljs.core.seq.call(null,seq__29887_29891);
if(temp__4126__auto___29900){
var seq__29887_29901__$1 = temp__4126__auto___29900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29887_29901__$1)){
var c__18778__auto___29902 = cljs.core.chunk_first.call(null,seq__29887_29901__$1);
var G__29903 = cljs.core.chunk_rest.call(null,seq__29887_29901__$1);
var G__29904 = c__18778__auto___29902;
var G__29905 = cljs.core.count.call(null,c__18778__auto___29902);
var G__29906 = (0);
seq__29887_29891 = G__29903;
chunk__29888_29892 = G__29904;
count__29889_29893 = G__29905;
i__29890_29894 = G__29906;
continue;
} else {
var x_29907 = cljs.core.first.call(null,seq__29887_29901__$1);
ret.push(x_29907);

var G__29908 = cljs.core.next.call(null,seq__29887_29901__$1);
var G__29909 = null;
var G__29910 = (0);
var G__29911 = (0);
seq__29887_29891 = G__29908;
chunk__29888_29892 = G__29909;
count__29889_29893 = G__29910;
i__29890_29894 = G__29911;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/MapHandler");
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
var seq__29912_29916 = cljs.core.seq.call(null,v);
var chunk__29913_29917 = null;
var count__29914_29918 = (0);
var i__29915_29919 = (0);
while(true){
if((i__29915_29919 < count__29914_29918)){
var x_29920 = cljs.core._nth.call(null,chunk__29913_29917,i__29915_29919);
ret.push(x_29920);

var G__29921 = seq__29912_29916;
var G__29922 = chunk__29913_29917;
var G__29923 = count__29914_29918;
var G__29924 = (i__29915_29919 + (1));
seq__29912_29916 = G__29921;
chunk__29913_29917 = G__29922;
count__29914_29918 = G__29923;
i__29915_29919 = G__29924;
continue;
} else {
var temp__4126__auto___29925 = cljs.core.seq.call(null,seq__29912_29916);
if(temp__4126__auto___29925){
var seq__29912_29926__$1 = temp__4126__auto___29925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29912_29926__$1)){
var c__18778__auto___29927 = cljs.core.chunk_first.call(null,seq__29912_29926__$1);
var G__29928 = cljs.core.chunk_rest.call(null,seq__29912_29926__$1);
var G__29929 = c__18778__auto___29927;
var G__29930 = cljs.core.count.call(null,c__18778__auto___29927);
var G__29931 = (0);
seq__29912_29916 = G__29928;
chunk__29913_29917 = G__29929;
count__29914_29918 = G__29930;
i__29915_29919 = G__29931;
continue;
} else {
var x_29932 = cljs.core.first.call(null,seq__29912_29926__$1);
ret.push(x_29932);

var G__29933 = cljs.core.next.call(null,seq__29912_29926__$1);
var G__29934 = null;
var G__29935 = (0);
var G__29936 = (0);
seq__29912_29916 = G__29933;
chunk__29913_29917 = G__29934;
count__29914_29918 = G__29935;
i__29915_29919 = G__29936;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/SetHandler");
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
var seq__29937_29941 = cljs.core.seq.call(null,v);
var chunk__29938_29942 = null;
var count__29939_29943 = (0);
var i__29940_29944 = (0);
while(true){
if((i__29940_29944 < count__29939_29943)){
var x_29945 = cljs.core._nth.call(null,chunk__29938_29942,i__29940_29944);
ret.push(x_29945);

var G__29946 = seq__29937_29941;
var G__29947 = chunk__29938_29942;
var G__29948 = count__29939_29943;
var G__29949 = (i__29940_29944 + (1));
seq__29937_29941 = G__29946;
chunk__29938_29942 = G__29947;
count__29939_29943 = G__29948;
i__29940_29944 = G__29949;
continue;
} else {
var temp__4126__auto___29950 = cljs.core.seq.call(null,seq__29937_29941);
if(temp__4126__auto___29950){
var seq__29937_29951__$1 = temp__4126__auto___29950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29937_29951__$1)){
var c__18778__auto___29952 = cljs.core.chunk_first.call(null,seq__29937_29951__$1);
var G__29953 = cljs.core.chunk_rest.call(null,seq__29937_29951__$1);
var G__29954 = c__18778__auto___29952;
var G__29955 = cljs.core.count.call(null,c__18778__auto___29952);
var G__29956 = (0);
seq__29937_29941 = G__29953;
chunk__29938_29942 = G__29954;
count__29939_29943 = G__29955;
i__29940_29944 = G__29956;
continue;
} else {
var x_29957 = cljs.core.first.call(null,seq__29937_29951__$1);
ret.push(x_29957);

var G__29958 = cljs.core.next.call(null,seq__29937_29951__$1);
var G__29959 = null;
var G__29960 = (0);
var G__29961 = (0);
seq__29937_29941 = G__29958;
chunk__29938_29942 = G__29959;
count__29939_29943 = G__29960;
i__29940_29944 = G__29961;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/UUIDHandler");
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
, "handlers": (function (){var x29971 = cljs.core.clone.call(null,handlers);
x29971.forEach = ((function (x29971,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29972 = cljs.core.seq.call(null,coll);
var chunk__29973 = null;
var count__29974 = (0);
var i__29975 = (0);
while(true){
if((i__29975 < count__29974)){
var vec__29976 = cljs.core._nth.call(null,chunk__29973,i__29975);
var k = cljs.core.nth.call(null,vec__29976,(0),null);
var v = cljs.core.nth.call(null,vec__29976,(1),null);
f.call(null,v,k);

var G__29978 = seq__29972;
var G__29979 = chunk__29973;
var G__29980 = count__29974;
var G__29981 = (i__29975 + (1));
seq__29972 = G__29978;
chunk__29973 = G__29979;
count__29974 = G__29980;
i__29975 = G__29981;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29972);
if(temp__4126__auto__){
var seq__29972__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29972__$1)){
var c__18778__auto__ = cljs.core.chunk_first.call(null,seq__29972__$1);
var G__29982 = cljs.core.chunk_rest.call(null,seq__29972__$1);
var G__29983 = c__18778__auto__;
var G__29984 = cljs.core.count.call(null,c__18778__auto__);
var G__29985 = (0);
seq__29972 = G__29982;
chunk__29973 = G__29983;
count__29974 = G__29984;
i__29975 = G__29985;
continue;
} else {
var vec__29977 = cljs.core.first.call(null,seq__29972__$1);
var k = cljs.core.nth.call(null,vec__29977,(0),null);
var v = cljs.core.nth.call(null,vec__29977,(1),null);
f.call(null,v,k);

var G__29986 = cljs.core.next.call(null,seq__29972__$1);
var G__29987 = null;
var G__29988 = (0);
var G__29989 = (0);
seq__29972 = G__29986;
chunk__29973 = G__29987;
count__29974 = G__29988;
i__29975 = G__29989;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29971,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29971;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__29970 = obj;
G__29970.push(kfn.call(null,k),vfn.call(null,v));

return G__29970;
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
if(typeof cognitect.transit.t29993 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t29993 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta29994){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta29994 = meta29994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t29993.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t29993.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t29993.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t29993.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t29993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29995){
var self__ = this;
var _29995__$1 = this;
return self__.meta29994;
});

cognitect.transit.t29993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29995,meta29994__$1){
var self__ = this;
var _29995__$1 = this;
return (new cognitect.transit.t29993(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta29994__$1));
});

cognitect.transit.t29993.cljs$lang$type = true;

cognitect.transit.t29993.cljs$lang$ctorStr = "cognitect.transit/t29993";

cognitect.transit.t29993.cljs$lang$ctorPrWriter = (function (this__18578__auto__,writer__18579__auto__,opt__18580__auto__){
return cljs.core._write.call(null,writer__18579__auto__,"cognitect.transit/t29993");
});

cognitect.transit.__GT_t29993 = (function __GT_t29993(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta29994){
return (new cognitect.transit.t29993(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta29994));
});

}

return (new cognitect.transit.t29993(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/zarkone/websites/teachers/teacherguild/resources/public/js/out/cognitect/transit.cljs"], null)));
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

//# sourceMappingURL=transit.js.map?rel=1422975378763