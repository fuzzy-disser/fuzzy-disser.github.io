// Compiled by ClojureScript 0.0-2655 {}
if(!goog.isProvided_('figwheel.client.heads_up')) {
goog.provide('figwheel.client.heads_up');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30711_30719 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30712_30720 = null;
var count__30713_30721 = (0);
var i__30714_30722 = (0);
while(true){
if((i__30714_30722 < count__30713_30721)){
var k_30723 = cljs.core._nth.call(null,chunk__30712_30720,i__30714_30722);
e.setAttribute(cljs.core.name.call(null,k_30723),cljs.core.get.call(null,attrs,k_30723));

var G__30724 = seq__30711_30719;
var G__30725 = chunk__30712_30720;
var G__30726 = count__30713_30721;
var G__30727 = (i__30714_30722 + (1));
seq__30711_30719 = G__30724;
chunk__30712_30720 = G__30725;
count__30713_30721 = G__30726;
i__30714_30722 = G__30727;
continue;
} else {
var temp__4126__auto___30728 = cljs.core.seq.call(null,seq__30711_30719);
if(temp__4126__auto___30728){
var seq__30711_30729__$1 = temp__4126__auto___30728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30711_30729__$1)){
var c__18778__auto___30730 = cljs.core.chunk_first.call(null,seq__30711_30729__$1);
var G__30731 = cljs.core.chunk_rest.call(null,seq__30711_30729__$1);
var G__30732 = c__18778__auto___30730;
var G__30733 = cljs.core.count.call(null,c__18778__auto___30730);
var G__30734 = (0);
seq__30711_30719 = G__30731;
chunk__30712_30720 = G__30732;
count__30713_30721 = G__30733;
i__30714_30722 = G__30734;
continue;
} else {
var k_30735 = cljs.core.first.call(null,seq__30711_30729__$1);
e.setAttribute(cljs.core.name.call(null,k_30735),cljs.core.get.call(null,attrs,k_30735));

var G__30736 = cljs.core.next.call(null,seq__30711_30729__$1);
var G__30737 = null;
var G__30738 = (0);
var G__30739 = (0);
seq__30711_30719 = G__30736;
chunk__30712_30720 = G__30737;
count__30713_30721 = G__30738;
i__30714_30722 = G__30739;
continue;
}
} else {
}
}
break;
}

var seq__30715_30740 = cljs.core.seq.call(null,children);
var chunk__30716_30741 = null;
var count__30717_30742 = (0);
var i__30718_30743 = (0);
while(true){
if((i__30718_30743 < count__30717_30742)){
var ch_30744 = cljs.core._nth.call(null,chunk__30716_30741,i__30718_30743);
e.appendChild(ch_30744);

var G__30745 = seq__30715_30740;
var G__30746 = chunk__30716_30741;
var G__30747 = count__30717_30742;
var G__30748 = (i__30718_30743 + (1));
seq__30715_30740 = G__30745;
chunk__30716_30741 = G__30746;
count__30717_30742 = G__30747;
i__30718_30743 = G__30748;
continue;
} else {
var temp__4126__auto___30749 = cljs.core.seq.call(null,seq__30715_30740);
if(temp__4126__auto___30749){
var seq__30715_30750__$1 = temp__4126__auto___30749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30715_30750__$1)){
var c__18778__auto___30751 = cljs.core.chunk_first.call(null,seq__30715_30750__$1);
var G__30752 = cljs.core.chunk_rest.call(null,seq__30715_30750__$1);
var G__30753 = c__18778__auto___30751;
var G__30754 = cljs.core.count.call(null,c__18778__auto___30751);
var G__30755 = (0);
seq__30715_30740 = G__30752;
chunk__30716_30741 = G__30753;
count__30717_30742 = G__30754;
i__30718_30743 = G__30755;
continue;
} else {
var ch_30756 = cljs.core.first.call(null,seq__30715_30750__$1);
e.appendChild(ch_30756);

var G__30757 = cljs.core.next.call(null,seq__30715_30750__$1);
var G__30758 = null;
var G__30759 = (0);
var G__30760 = (0);
seq__30715_30740 = G__30757;
chunk__30716_30741 = G__30758;
count__30717_30742 = G__30759;
i__30718_30743 = G__30760;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30761){
var t = cljs.core.first(arglist__30761);
arglist__30761 = cljs.core.next(arglist__30761);
var attrs = cljs.core.first(arglist__30761);
var children = cljs.core.rest(arglist__30761);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18888__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18889__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18890__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18891__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18892__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18888__auto__,prefer_table__18889__auto__,method_cache__18890__auto__,cached_hierarchy__18891__auto__,hierarchy__18892__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18888__auto__,prefer_table__18889__auto__,method_cache__18890__auto__,cached_hierarchy__18891__auto__,hierarchy__18892__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18892__auto__,method_table__18888__auto__,prefer_table__18889__auto__,method_cache__18890__auto__,cached_hierarchy__18891__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30762,st_map){
var map__30766 = p__30762;
var map__30766__$1 = ((cljs.core.seq_QMARK_.call(null,map__30766))?cljs.core.apply.call(null,cljs.core.hash_map,map__30766):map__30766);
var container_el = cljs.core.get.call(null,map__30766__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30766,map__30766__$1,container_el){
return (function (p__30767){
var vec__30768 = p__30767;
var k = cljs.core.nth.call(null,vec__30768,(0),null);
var v = cljs.core.nth.call(null,vec__30768,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30766,map__30766__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30769,dom_str){
var map__30771 = p__30769;
var map__30771__$1 = ((cljs.core.seq_QMARK_.call(null,map__30771))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var c = map__30771__$1;
var content_area_el = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__30772){
var map__30774 = p__30772;
var map__30774__$1 = ((cljs.core.seq_QMARK_.call(null,map__30774))?cljs.core.apply.call(null,cljs.core.hash_map,map__30774):map__30774);
var content_area_el = cljs.core.get.call(null,map__30774__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_30816){
var state_val_30817 = (state_30816[(1)]);
if((state_val_30817 === (2))){
var inst_30801 = (state_30816[(7)]);
var inst_30810 = (state_30816[(2)]);
var inst_30811 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30812 = ["auto"];
var inst_30813 = cljs.core.PersistentHashMap.fromArrays(inst_30811,inst_30812);
var inst_30814 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30801,inst_30813);
var state_30816__$1 = (function (){var statearr_30818 = state_30816;
(statearr_30818[(8)] = inst_30810);

return statearr_30818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30816__$1,inst_30814);
} else {
if((state_val_30817 === (1))){
var inst_30801 = (state_30816[(7)]);
var inst_30801__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30802 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30803 = ["10px","10px","100%","68px","1.0"];
var inst_30804 = cljs.core.PersistentHashMap.fromArrays(inst_30802,inst_30803);
var inst_30805 = cljs.core.merge.call(null,inst_30804,style);
var inst_30806 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30801__$1,inst_30805);
var inst_30807 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30801__$1,msg);
var inst_30808 = cljs.core.async.timeout.call(null,(300));
var state_30816__$1 = (function (){var statearr_30819 = state_30816;
(statearr_30819[(9)] = inst_30806);

(statearr_30819[(10)] = inst_30807);

(statearr_30819[(7)] = inst_30801__$1);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30816__$1,(2),inst_30808);
} else {
return null;
}
}
});})(c__20653__auto__))
;
return ((function (switch__20597__auto__,c__20653__auto__){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_30823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30823[(0)] = state_machine__20598__auto__);

(statearr_30823[(1)] = (1));

return statearr_30823;
});
var state_machine__20598__auto____1 = (function (state_30816){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30824){if((e30824 instanceof Object)){
var ex__20601__auto__ = e30824;
var statearr_30825_30827 = state_30816;
(statearr_30825_30827[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30828 = state_30816;
state_30816 = G__30828;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30816){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_30826 = f__20654__auto__.call(null);
(statearr_30826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30830 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30830,(0),null);
var ln = cljs.core.nth.call(null,vec__30830,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__30833 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__30833,(0),null);
var file_line = cljs.core.nth.call(null,vec__30833,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30833,file_name,file_line){
return (function (p1__30831_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30831_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30833,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__30835 = figwheel.client.heads_up.ensure_container.call(null);
var map__30835__$1 = ((cljs.core.seq_QMARK_.call(null,map__30835))?cljs.core.apply.call(null,cljs.core.hash_map,map__30835):map__30835);
var content_area_el = cljs.core.get.call(null,map__30835__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_30882){
var state_val_30883 = (state_30882[(1)]);
if((state_val_30883 === (3))){
var inst_30865 = (state_30882[(7)]);
var inst_30879 = (state_30882[(2)]);
var inst_30880 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30865,"");
var state_30882__$1 = (function (){var statearr_30884 = state_30882;
(statearr_30884[(8)] = inst_30879);

return statearr_30884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30882__$1,inst_30880);
} else {
if((state_val_30883 === (2))){
var inst_30865 = (state_30882[(7)]);
var inst_30872 = (state_30882[(2)]);
var inst_30873 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30874 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30875 = cljs.core.PersistentHashMap.fromArrays(inst_30873,inst_30874);
var inst_30876 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30865,inst_30875);
var inst_30877 = cljs.core.async.timeout.call(null,(200));
var state_30882__$1 = (function (){var statearr_30885 = state_30882;
(statearr_30885[(9)] = inst_30872);

(statearr_30885[(10)] = inst_30876);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30882__$1,(3),inst_30877);
} else {
if((state_val_30883 === (1))){
var inst_30865 = (state_30882[(7)]);
var inst_30865__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30866 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30867 = ["0.0"];
var inst_30868 = cljs.core.PersistentHashMap.fromArrays(inst_30866,inst_30867);
var inst_30869 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30865__$1,inst_30868);
var inst_30870 = cljs.core.async.timeout.call(null,(300));
var state_30882__$1 = (function (){var statearr_30886 = state_30882;
(statearr_30886[(7)] = inst_30865__$1);

(statearr_30886[(11)] = inst_30869);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30882__$1,(2),inst_30870);
} else {
return null;
}
}
}
});})(c__20653__auto__))
;
return ((function (switch__20597__auto__,c__20653__auto__){
return (function() {
var state_machine__20598__auto__ = null;
var state_machine__20598__auto____0 = (function (){
var statearr_30890 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30890[(0)] = state_machine__20598__auto__);

(statearr_30890[(1)] = (1));

return statearr_30890;
});
var state_machine__20598__auto____1 = (function (state_30882){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30891){if((e30891 instanceof Object)){
var ex__20601__auto__ = e30891;
var statearr_30892_30894 = state_30882;
(statearr_30892_30894[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30895 = state_30882;
state_30882 = G__30895;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30882){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_30893 = f__20654__auto__.call(null);
(statearr_30893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__20653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20653__auto__){
return (function (){
var f__20654__auto__ = (function (){var switch__20597__auto__ = ((function (c__20653__auto__){
return (function (state_30927){
var state_val_30928 = (state_30927[(1)]);
if((state_val_30928 === (4))){
var inst_30925 = (state_30927[(2)]);
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30927__$1,inst_30925);
} else {
if((state_val_30928 === (3))){
var inst_30922 = (state_30927[(2)]);
var inst_30923 = figwheel.client.heads_up.clear.call(null);
var state_30927__$1 = (function (){var statearr_30929 = state_30927;
(statearr_30929[(7)] = inst_30922);

return statearr_30929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30927__$1,(4),inst_30923);
} else {
if((state_val_30928 === (2))){
var inst_30919 = (state_30927[(2)]);
var inst_30920 = cljs.core.async.timeout.call(null,(400));
var state_30927__$1 = (function (){var statearr_30930 = state_30927;
(statearr_30930[(8)] = inst_30919);

return statearr_30930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30927__$1,(3),inst_30920);
} else {
if((state_val_30928 === (1))){
var inst_30917 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30927__$1 = state_30927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30927__$1,(2),inst_30917);
} else {
return null;
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
var statearr_30934 = [null,null,null,null,null,null,null,null,null];
(statearr_30934[(0)] = state_machine__20598__auto__);

(statearr_30934[(1)] = (1));

return statearr_30934;
});
var state_machine__20598__auto____1 = (function (state_30927){
while(true){
var ret_value__20599__auto__ = (function (){try{while(true){
var result__20600__auto__ = switch__20597__auto__.call(null,state_30927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20600__auto__;
}
break;
}
}catch (e30935){if((e30935 instanceof Object)){
var ex__20601__auto__ = e30935;
var statearr_30936_30938 = state_30927;
(statearr_30936_30938[(5)] = ex__20601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30939 = state_30927;
state_30927 = G__30939;
continue;
} else {
return ret_value__20599__auto__;
}
break;
}
});
state_machine__20598__auto__ = function(state_30927){
switch(arguments.length){
case 0:
return state_machine__20598__auto____0.call(this);
case 1:
return state_machine__20598__auto____1.call(this,state_30927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20598__auto____0;
state_machine__20598__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20598__auto____1;
return state_machine__20598__auto__;
})()
;})(switch__20597__auto__,c__20653__auto__))
})();
var state__20655__auto__ = (function (){var statearr_30937 = f__20654__auto__.call(null);
(statearr_30937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20653__auto__);

return statearr_30937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20655__auto__);
});})(c__20653__auto__))
);

return c__20653__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1422975380998