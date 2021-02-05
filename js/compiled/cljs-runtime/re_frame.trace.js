goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__44669){
var map__44670 = p__44669;
var map__44670__$1 = (((((!((map__44670 == null))))?(((((map__44670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44670):map__44670);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__44674_44717 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__44675_44718 = null;
var count__44676_44719 = (0);
var i__44677_44720 = (0);
while(true){
if((i__44677_44720 < count__44676_44719)){
var vec__44688_44721 = chunk__44675_44718.cljs$core$IIndexed$_nth$arity$2(null,i__44677_44720);
var k_44722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44688_44721,(0),null);
var cb_44723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44688_44721,(1),null);
try{var G__44692_44724 = cljs.core.deref(re_frame.trace.traces);
(cb_44723.cljs$core$IFn$_invoke$arity$1 ? cb_44723.cljs$core$IFn$_invoke$arity$1(G__44692_44724) : cb_44723.call(null,G__44692_44724));
}catch (e44691){var e_44725 = e44691;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44722,"while storing",cljs.core.deref(re_frame.trace.traces),e_44725], 0));
}

var G__44727 = seq__44674_44717;
var G__44728 = chunk__44675_44718;
var G__44729 = count__44676_44719;
var G__44730 = (i__44677_44720 + (1));
seq__44674_44717 = G__44727;
chunk__44675_44718 = G__44728;
count__44676_44719 = G__44729;
i__44677_44720 = G__44730;
continue;
} else {
var temp__5735__auto___44731 = cljs.core.seq(seq__44674_44717);
if(temp__5735__auto___44731){
var seq__44674_44732__$1 = temp__5735__auto___44731;
if(cljs.core.chunked_seq_QMARK_(seq__44674_44732__$1)){
var c__4556__auto___44733 = cljs.core.chunk_first(seq__44674_44732__$1);
var G__44734 = cljs.core.chunk_rest(seq__44674_44732__$1);
var G__44735 = c__4556__auto___44733;
var G__44736 = cljs.core.count(c__4556__auto___44733);
var G__44737 = (0);
seq__44674_44717 = G__44734;
chunk__44675_44718 = G__44735;
count__44676_44719 = G__44736;
i__44677_44720 = G__44737;
continue;
} else {
var vec__44693_44738 = cljs.core.first(seq__44674_44732__$1);
var k_44739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44693_44738,(0),null);
var cb_44740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44693_44738,(1),null);
try{var G__44697_44741 = cljs.core.deref(re_frame.trace.traces);
(cb_44740.cljs$core$IFn$_invoke$arity$1 ? cb_44740.cljs$core$IFn$_invoke$arity$1(G__44697_44741) : cb_44740.call(null,G__44697_44741));
}catch (e44696){var e_44742 = e44696;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44739,"while storing",cljs.core.deref(re_frame.trace.traces),e_44742], 0));
}

var G__44743 = cljs.core.next(seq__44674_44732__$1);
var G__44744 = null;
var G__44745 = (0);
var G__44746 = (0);
seq__44674_44717 = G__44743;
chunk__44675_44718 = G__44744;
count__44676_44719 = G__44745;
i__44677_44720 = G__44746;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
