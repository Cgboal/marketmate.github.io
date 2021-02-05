goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__45443 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__45444 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__45444);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___45725 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___45725)){
var new_db_45728 = temp__5735__auto___45725;
var fexpr__45454_45729 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__45454_45729.cljs$core$IFn$_invoke$arity$1 ? fexpr__45454_45729.cljs$core$IFn$_invoke$arity$1(new_db_45728) : fexpr__45454_45729.call(null,new_db_45728));
} else {
}

var seq__45456 = cljs.core.seq(effects_without_db);
var chunk__45457 = null;
var count__45458 = (0);
var i__45459 = (0);
while(true){
if((i__45459 < count__45458)){
var vec__45475 = chunk__45457.cljs$core$IIndexed$_nth$arity$2(null,i__45459);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45475,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45475,(1),null);
var temp__5733__auto___45735 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45735)){
var effect_fn_45738 = temp__5733__auto___45735;
(effect_fn_45738.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45738.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45738.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45739 = seq__45456;
var G__45740 = chunk__45457;
var G__45741 = count__45458;
var G__45742 = (i__45459 + (1));
seq__45456 = G__45739;
chunk__45457 = G__45740;
count__45458 = G__45741;
i__45459 = G__45742;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45456);
if(temp__5735__auto__){
var seq__45456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45456__$1);
var G__45745 = cljs.core.chunk_rest(seq__45456__$1);
var G__45746 = c__4556__auto__;
var G__45747 = cljs.core.count(c__4556__auto__);
var G__45748 = (0);
seq__45456 = G__45745;
chunk__45457 = G__45746;
count__45458 = G__45747;
i__45459 = G__45748;
continue;
} else {
var vec__45488 = cljs.core.first(seq__45456__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45488,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45488,(1),null);
var temp__5733__auto___45754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45754)){
var effect_fn_45759 = temp__5733__auto___45754;
(effect_fn_45759.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45759.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45759.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45760 = cljs.core.next(seq__45456__$1);
var G__45761 = null;
var G__45762 = (0);
var G__45763 = (0);
seq__45456 = G__45760;
chunk__45457 = G__45761;
count__45458 = G__45762;
i__45459 = G__45763;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44622__auto___45768 = re_frame.interop.now();
var duration__44623__auto___45769 = (end__44622__auto___45768 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44623__auto___45769,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44622__auto___45768);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__45443);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___45771 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___45771)){
var new_db_45773 = temp__5735__auto___45771;
var fexpr__45495_45774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__45495_45774.cljs$core$IFn$_invoke$arity$1 ? fexpr__45495_45774.cljs$core$IFn$_invoke$arity$1(new_db_45773) : fexpr__45495_45774.call(null,new_db_45773));
} else {
}

var seq__45499 = cljs.core.seq(effects_without_db);
var chunk__45500 = null;
var count__45501 = (0);
var i__45502 = (0);
while(true){
if((i__45502 < count__45501)){
var vec__45526 = chunk__45500.cljs$core$IIndexed$_nth$arity$2(null,i__45502);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45526,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45526,(1),null);
var temp__5733__auto___45785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45785)){
var effect_fn_45786 = temp__5733__auto___45785;
(effect_fn_45786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45789 = seq__45499;
var G__45790 = chunk__45500;
var G__45791 = count__45501;
var G__45792 = (i__45502 + (1));
seq__45499 = G__45789;
chunk__45500 = G__45790;
count__45501 = G__45791;
i__45502 = G__45792;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45499);
if(temp__5735__auto__){
var seq__45499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45499__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45499__$1);
var G__45798 = cljs.core.chunk_rest(seq__45499__$1);
var G__45799 = c__4556__auto__;
var G__45800 = cljs.core.count(c__4556__auto__);
var G__45801 = (0);
seq__45499 = G__45798;
chunk__45500 = G__45799;
count__45501 = G__45800;
i__45502 = G__45801;
continue;
} else {
var vec__45534 = cljs.core.first(seq__45499__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45534,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45534,(1),null);
var temp__5733__auto___45802 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45802)){
var effect_fn_45804 = temp__5733__auto___45802;
(effect_fn_45804.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45804.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45804.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45806 = cljs.core.next(seq__45499__$1);
var G__45807 = null;
var G__45808 = (0);
var G__45809 = (0);
seq__45499 = G__45806;
chunk__45500 = G__45807;
count__45501 = G__45808;
i__45502 = G__45809;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__45544){
var map__45546 = p__45544;
var map__45546__$1 = (((((!((map__45546 == null))))?(((((map__45546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45546):map__45546);
var effect = map__45546__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__45553 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45554 = null;
var count__45555 = (0);
var i__45556 = (0);
while(true){
if((i__45556 < count__45555)){
var effect = chunk__45554.cljs$core$IIndexed$_nth$arity$2(null,i__45556);
re_frame.fx.dispatch_later(effect);


var G__45820 = seq__45553;
var G__45821 = chunk__45554;
var G__45822 = count__45555;
var G__45823 = (i__45556 + (1));
seq__45553 = G__45820;
chunk__45554 = G__45821;
count__45555 = G__45822;
i__45556 = G__45823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45553);
if(temp__5735__auto__){
var seq__45553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45553__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45553__$1);
var G__45826 = cljs.core.chunk_rest(seq__45553__$1);
var G__45827 = c__4556__auto__;
var G__45828 = cljs.core.count(c__4556__auto__);
var G__45829 = (0);
seq__45553 = G__45826;
chunk__45554 = G__45827;
count__45555 = G__45828;
i__45556 = G__45829;
continue;
} else {
var effect = cljs.core.first(seq__45553__$1);
re_frame.fx.dispatch_later(effect);


var G__45834 = cljs.core.next(seq__45553__$1);
var G__45835 = null;
var G__45836 = (0);
var G__45837 = (0);
seq__45553 = G__45834;
chunk__45554 = G__45835;
count__45555 = G__45836;
i__45556 = G__45837;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__45570 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__45571 = null;
var count__45572 = (0);
var i__45573 = (0);
while(true){
if((i__45573 < count__45572)){
var vec__45606 = chunk__45571.cljs$core$IIndexed$_nth$arity$2(null,i__45573);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45606,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45606,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___45843 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45843)){
var effect_fn_45845 = temp__5733__auto___45843;
(effect_fn_45845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45845.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__45847 = seq__45570;
var G__45848 = chunk__45571;
var G__45849 = count__45572;
var G__45850 = (i__45573 + (1));
seq__45570 = G__45847;
chunk__45571 = G__45848;
count__45572 = G__45849;
i__45573 = G__45850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45570);
if(temp__5735__auto__){
var seq__45570__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45570__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45570__$1);
var G__45852 = cljs.core.chunk_rest(seq__45570__$1);
var G__45853 = c__4556__auto__;
var G__45854 = cljs.core.count(c__4556__auto__);
var G__45855 = (0);
seq__45570 = G__45852;
chunk__45571 = G__45853;
count__45572 = G__45854;
i__45573 = G__45855;
continue;
} else {
var vec__45620 = cljs.core.first(seq__45570__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45620,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45620,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___45861 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45861)){
var effect_fn_45866 = temp__5733__auto___45861;
(effect_fn_45866.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45866.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45866.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__45869 = cljs.core.next(seq__45570__$1);
var G__45870 = null;
var G__45871 = (0);
var G__45872 = (0);
seq__45570 = G__45869;
chunk__45571 = G__45870;
count__45572 = G__45871;
i__45573 = G__45872;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__45627 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45628 = null;
var count__45629 = (0);
var i__45630 = (0);
while(true){
if((i__45630 < count__45629)){
var event = chunk__45628.cljs$core$IIndexed$_nth$arity$2(null,i__45630);
re_frame.router.dispatch(event);


var G__45881 = seq__45627;
var G__45882 = chunk__45628;
var G__45883 = count__45629;
var G__45884 = (i__45630 + (1));
seq__45627 = G__45881;
chunk__45628 = G__45882;
count__45629 = G__45883;
i__45630 = G__45884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45627);
if(temp__5735__auto__){
var seq__45627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45627__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45627__$1);
var G__45889 = cljs.core.chunk_rest(seq__45627__$1);
var G__45890 = c__4556__auto__;
var G__45891 = cljs.core.count(c__4556__auto__);
var G__45892 = (0);
seq__45627 = G__45889;
chunk__45628 = G__45890;
count__45629 = G__45891;
i__45630 = G__45892;
continue;
} else {
var event = cljs.core.first(seq__45627__$1);
re_frame.router.dispatch(event);


var G__45894 = cljs.core.next(seq__45627__$1);
var G__45895 = null;
var G__45896 = (0);
var G__45897 = (0);
seq__45627 = G__45894;
chunk__45628 = G__45895;
count__45629 = G__45896;
i__45630 = G__45897;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__45653 = cljs.core.seq(value);
var chunk__45654 = null;
var count__45655 = (0);
var i__45656 = (0);
while(true){
if((i__45656 < count__45655)){
var event = chunk__45654.cljs$core$IIndexed$_nth$arity$2(null,i__45656);
clear_event(event);


var G__45904 = seq__45653;
var G__45905 = chunk__45654;
var G__45906 = count__45655;
var G__45907 = (i__45656 + (1));
seq__45653 = G__45904;
chunk__45654 = G__45905;
count__45655 = G__45906;
i__45656 = G__45907;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45653);
if(temp__5735__auto__){
var seq__45653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45653__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45653__$1);
var G__45909 = cljs.core.chunk_rest(seq__45653__$1);
var G__45910 = c__4556__auto__;
var G__45911 = cljs.core.count(c__4556__auto__);
var G__45912 = (0);
seq__45653 = G__45909;
chunk__45654 = G__45910;
count__45655 = G__45911;
i__45656 = G__45912;
continue;
} else {
var event = cljs.core.first(seq__45653__$1);
clear_event(event);


var G__45914 = cljs.core.next(seq__45653__$1);
var G__45915 = null;
var G__45916 = (0);
var G__45917 = (0);
seq__45653 = G__45914;
chunk__45654 = G__45915;
count__45655 = G__45916;
i__45656 = G__45917;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
