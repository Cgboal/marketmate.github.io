goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__53587,p__53588){
var map__53589 = p__53587;
var map__53589__$1 = (((((!((map__53589 == null))))?(((((map__53589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53589):map__53589);
var svc = map__53589__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53589__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53589__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53589__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53590 = p__53588;
var map__53590__$1 = (((((!((map__53590 == null))))?(((((map__53590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53590):map__53590);
var msg = map__53590__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53590__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__53607,p__53608){
var map__53609 = p__53607;
var map__53609__$1 = (((((!((map__53609 == null))))?(((((map__53609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53609):map__53609);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53609__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__53610 = p__53608;
var map__53610__$1 = (((((!((map__53610 == null))))?(((((map__53610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53610):map__53610);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__53620,p__53621){
var map__53622 = p__53620;
var map__53622__$1 = (((((!((map__53622 == null))))?(((((map__53622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53622):map__53622);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53623 = p__53621;
var map__53623__$1 = (((((!((map__53623 == null))))?(((((map__53623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53623):map__53623);
var msg = map__53623__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53623__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__53646,tid){
var map__53647 = p__53646;
var map__53647__$1 = (((((!((map__53647 == null))))?(((((map__53647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53647):map__53647);
var svc = map__53647__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53647__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__53668 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__53669 = null;
var count__53670 = (0);
var i__53671 = (0);
while(true){
if((i__53671 < count__53670)){
var vec__53690 = chunk__53669.cljs$core$IIndexed$_nth$arity$2(null,i__53671);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53690,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53690,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53737 = seq__53668;
var G__53738 = chunk__53669;
var G__53739 = count__53670;
var G__53740 = (i__53671 + (1));
seq__53668 = G__53737;
chunk__53669 = G__53738;
count__53670 = G__53739;
i__53671 = G__53740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53668);
if(temp__5735__auto__){
var seq__53668__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53668__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53668__$1);
var G__53742 = cljs.core.chunk_rest(seq__53668__$1);
var G__53743 = c__4556__auto__;
var G__53744 = cljs.core.count(c__4556__auto__);
var G__53745 = (0);
seq__53668 = G__53742;
chunk__53669 = G__53743;
count__53670 = G__53744;
i__53671 = G__53745;
continue;
} else {
var vec__53697 = cljs.core.first(seq__53668__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53697,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53697,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53747 = cljs.core.next(seq__53668__$1);
var G__53748 = null;
var G__53749 = (0);
var G__53750 = (0);
seq__53668 = G__53747;
chunk__53669 = G__53748;
count__53670 = G__53749;
i__53671 = G__53750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__53656_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__53656_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__53657_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__53657_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__53659_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__53659_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__53661_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__53661_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__53703){
var map__53704 = p__53703;
var map__53704__$1 = (((((!((map__53704 == null))))?(((((map__53704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53704):map__53704);
var svc = map__53704__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53704__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53704__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
