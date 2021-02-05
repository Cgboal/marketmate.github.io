goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55270 = arguments.length;
var i__4737__auto___55271 = (0);
while(true){
if((i__4737__auto___55271 < len__4736__auto___55270)){
args__4742__auto__.push((arguments[i__4737__auto___55271]));

var G__55272 = (i__4737__auto___55271 + (1));
i__4737__auto___55271 = G__55272;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq55120){
var G__55121 = cljs.core.first(seq55120);
var seq55120__$1 = cljs.core.next(seq55120);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55121,seq55120__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__55122 = cljs.core.seq(sources);
var chunk__55123 = null;
var count__55124 = (0);
var i__55125 = (0);
while(true){
if((i__55125 < count__55124)){
var map__55136 = chunk__55123.cljs$core$IIndexed$_nth$arity$2(null,i__55125);
var map__55136__$1 = (((((!((map__55136 == null))))?(((((map__55136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55136):map__55136);
var src = map__55136__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55136__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55136__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55136__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55136__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e55138){var e_55273 = e55138;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55273);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55273.message)].join('')));
}

var G__55274 = seq__55122;
var G__55275 = chunk__55123;
var G__55276 = count__55124;
var G__55277 = (i__55125 + (1));
seq__55122 = G__55274;
chunk__55123 = G__55275;
count__55124 = G__55276;
i__55125 = G__55277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55122);
if(temp__5735__auto__){
var seq__55122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55122__$1);
var G__55278 = cljs.core.chunk_rest(seq__55122__$1);
var G__55279 = c__4556__auto__;
var G__55280 = cljs.core.count(c__4556__auto__);
var G__55281 = (0);
seq__55122 = G__55278;
chunk__55123 = G__55279;
count__55124 = G__55280;
i__55125 = G__55281;
continue;
} else {
var map__55140 = cljs.core.first(seq__55122__$1);
var map__55140__$1 = (((((!((map__55140 == null))))?(((((map__55140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55140):map__55140);
var src = map__55140__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55140__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55140__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55140__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e55142){var e_55282 = e55142;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55282);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55282.message)].join('')));
}

var G__55283 = cljs.core.next(seq__55122__$1);
var G__55284 = null;
var G__55285 = (0);
var G__55286 = (0);
seq__55122 = G__55283;
chunk__55123 = G__55284;
count__55124 = G__55285;
i__55125 = G__55286;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__55143 = cljs.core.seq(js_requires);
var chunk__55144 = null;
var count__55145 = (0);
var i__55146 = (0);
while(true){
if((i__55146 < count__55145)){
var js_ns = chunk__55144.cljs$core$IIndexed$_nth$arity$2(null,i__55146);
var require_str_55287 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55287);


var G__55288 = seq__55143;
var G__55289 = chunk__55144;
var G__55290 = count__55145;
var G__55291 = (i__55146 + (1));
seq__55143 = G__55288;
chunk__55144 = G__55289;
count__55145 = G__55290;
i__55146 = G__55291;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55143);
if(temp__5735__auto__){
var seq__55143__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55143__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55143__$1);
var G__55292 = cljs.core.chunk_rest(seq__55143__$1);
var G__55293 = c__4556__auto__;
var G__55294 = cljs.core.count(c__4556__auto__);
var G__55295 = (0);
seq__55143 = G__55292;
chunk__55144 = G__55293;
count__55145 = G__55294;
i__55146 = G__55295;
continue;
} else {
var js_ns = cljs.core.first(seq__55143__$1);
var require_str_55296 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55296);


var G__55297 = cljs.core.next(seq__55143__$1);
var G__55298 = null;
var G__55299 = (0);
var G__55300 = (0);
seq__55143 = G__55297;
chunk__55144 = G__55298;
count__55145 = G__55299;
i__55146 = G__55300;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__55148){
var map__55149 = p__55148;
var map__55149__$1 = (((((!((map__55149 == null))))?(((((map__55149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55149):map__55149);
var msg = map__55149__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55149__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55149__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55151(s__55152){
return (new cljs.core.LazySeq(null,(function (){
var s__55152__$1 = s__55152;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55152__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__55157 = cljs.core.first(xs__6292__auto__);
var map__55157__$1 = (((((!((map__55157 == null))))?(((((map__55157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55157):map__55157);
var src = map__55157__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55157__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__55152__$1,map__55157,map__55157__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55149,map__55149__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55151_$_iter__55153(s__55154){
return (new cljs.core.LazySeq(null,((function (s__55152__$1,map__55157,map__55157__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55149,map__55149__$1,msg,info,reload_info){
return (function (){
var s__55154__$1 = s__55154;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55154__$1);
if(temp__5735__auto____$1){
var s__55154__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55154__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55154__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55156 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55155 = (0);
while(true){
if((i__55155 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__55155);
cljs.core.chunk_append(b__55156,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__55301 = (i__55155 + (1));
i__55155 = G__55301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55156),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55151_$_iter__55153(cljs.core.chunk_rest(s__55154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55156),null);
}
} else {
var warning = cljs.core.first(s__55154__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55151_$_iter__55153(cljs.core.rest(s__55154__$2)));
}
} else {
return null;
}
break;
}
});})(s__55152__$1,map__55157,map__55157__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55149,map__55149__$1,msg,info,reload_info))
,null,null));
});})(s__55152__$1,map__55157,map__55157__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55149,map__55149__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55151(cljs.core.rest(s__55152__$1)));
} else {
var G__55302 = cljs.core.rest(s__55152__$1);
s__55152__$1 = G__55302;
continue;
}
} else {
var G__55303 = cljs.core.rest(s__55152__$1);
s__55152__$1 = G__55303;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__55161_55304 = cljs.core.seq(warnings);
var chunk__55162_55305 = null;
var count__55163_55306 = (0);
var i__55164_55307 = (0);
while(true){
if((i__55164_55307 < count__55163_55306)){
var map__55169_55308 = chunk__55162_55305.cljs$core$IIndexed$_nth$arity$2(null,i__55164_55307);
var map__55169_55309__$1 = (((((!((map__55169_55308 == null))))?(((((map__55169_55308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55169_55308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55169_55308):map__55169_55308);
var w_55310 = map__55169_55309__$1;
var msg_55311__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55169_55309__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55169_55309__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55169_55309__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55169_55309__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55314)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55312),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55313),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55311__$1)].join(''));


var G__55315 = seq__55161_55304;
var G__55316 = chunk__55162_55305;
var G__55317 = count__55163_55306;
var G__55318 = (i__55164_55307 + (1));
seq__55161_55304 = G__55315;
chunk__55162_55305 = G__55316;
count__55163_55306 = G__55317;
i__55164_55307 = G__55318;
continue;
} else {
var temp__5735__auto___55319 = cljs.core.seq(seq__55161_55304);
if(temp__5735__auto___55319){
var seq__55161_55320__$1 = temp__5735__auto___55319;
if(cljs.core.chunked_seq_QMARK_(seq__55161_55320__$1)){
var c__4556__auto___55321 = cljs.core.chunk_first(seq__55161_55320__$1);
var G__55322 = cljs.core.chunk_rest(seq__55161_55320__$1);
var G__55323 = c__4556__auto___55321;
var G__55324 = cljs.core.count(c__4556__auto___55321);
var G__55325 = (0);
seq__55161_55304 = G__55322;
chunk__55162_55305 = G__55323;
count__55163_55306 = G__55324;
i__55164_55307 = G__55325;
continue;
} else {
var map__55171_55326 = cljs.core.first(seq__55161_55320__$1);
var map__55171_55327__$1 = (((((!((map__55171_55326 == null))))?(((((map__55171_55326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55171_55326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55171_55326):map__55171_55326);
var w_55328 = map__55171_55327__$1;
var msg_55329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55171_55327__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55171_55327__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55171_55327__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55171_55327__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55332)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55330),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55331),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55329__$1)].join(''));


var G__55333 = cljs.core.next(seq__55161_55320__$1);
var G__55334 = null;
var G__55335 = (0);
var G__55336 = (0);
seq__55161_55304 = G__55333;
chunk__55162_55305 = G__55334;
count__55163_55306 = G__55335;
i__55164_55307 = G__55336;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__55147_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__55147_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__55173){
var map__55174 = p__55173;
var map__55174__$1 = (((((!((map__55174 == null))))?(((((map__55174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55174):map__55174);
var msg = map__55174__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55174__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__55176 = cljs.core.seq(updates);
var chunk__55178 = null;
var count__55179 = (0);
var i__55180 = (0);
while(true){
if((i__55180 < count__55179)){
var path = chunk__55178.cljs$core$IIndexed$_nth$arity$2(null,i__55180);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__55210_55337 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__55214_55338 = null;
var count__55215_55339 = (0);
var i__55216_55340 = (0);
while(true){
if((i__55216_55340 < count__55215_55339)){
var node_55341 = chunk__55214_55338.cljs$core$IIndexed$_nth$arity$2(null,i__55216_55340);
if(cljs.core.not(node_55341.shadow$old)){
var path_match_55342 = shadow.cljs.devtools.client.browser.match_paths(node_55341.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55342)){
var new_link_55343 = (function (){var G__55222 = node_55341.cloneNode(true);
G__55222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55342),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55222;
})();
(node_55341.shadow$old = true);

(new_link_55343.onload = ((function (seq__55210_55337,chunk__55214_55338,count__55215_55339,i__55216_55340,seq__55176,chunk__55178,count__55179,i__55180,new_link_55343,path_match_55342,node_55341,path,map__55174,map__55174__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55341);
});})(seq__55210_55337,chunk__55214_55338,count__55215_55339,i__55216_55340,seq__55176,chunk__55178,count__55179,i__55180,new_link_55343,path_match_55342,node_55341,path,map__55174,map__55174__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55342], 0));

goog.dom.insertSiblingAfter(new_link_55343,node_55341);


var G__55344 = seq__55210_55337;
var G__55345 = chunk__55214_55338;
var G__55346 = count__55215_55339;
var G__55347 = (i__55216_55340 + (1));
seq__55210_55337 = G__55344;
chunk__55214_55338 = G__55345;
count__55215_55339 = G__55346;
i__55216_55340 = G__55347;
continue;
} else {
var G__55348 = seq__55210_55337;
var G__55349 = chunk__55214_55338;
var G__55350 = count__55215_55339;
var G__55351 = (i__55216_55340 + (1));
seq__55210_55337 = G__55348;
chunk__55214_55338 = G__55349;
count__55215_55339 = G__55350;
i__55216_55340 = G__55351;
continue;
}
} else {
var G__55352 = seq__55210_55337;
var G__55353 = chunk__55214_55338;
var G__55354 = count__55215_55339;
var G__55355 = (i__55216_55340 + (1));
seq__55210_55337 = G__55352;
chunk__55214_55338 = G__55353;
count__55215_55339 = G__55354;
i__55216_55340 = G__55355;
continue;
}
} else {
var temp__5735__auto___55356 = cljs.core.seq(seq__55210_55337);
if(temp__5735__auto___55356){
var seq__55210_55357__$1 = temp__5735__auto___55356;
if(cljs.core.chunked_seq_QMARK_(seq__55210_55357__$1)){
var c__4556__auto___55358 = cljs.core.chunk_first(seq__55210_55357__$1);
var G__55359 = cljs.core.chunk_rest(seq__55210_55357__$1);
var G__55360 = c__4556__auto___55358;
var G__55361 = cljs.core.count(c__4556__auto___55358);
var G__55362 = (0);
seq__55210_55337 = G__55359;
chunk__55214_55338 = G__55360;
count__55215_55339 = G__55361;
i__55216_55340 = G__55362;
continue;
} else {
var node_55363 = cljs.core.first(seq__55210_55357__$1);
if(cljs.core.not(node_55363.shadow$old)){
var path_match_55364 = shadow.cljs.devtools.client.browser.match_paths(node_55363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55364)){
var new_link_55365 = (function (){var G__55223 = node_55363.cloneNode(true);
G__55223.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55223;
})();
(node_55363.shadow$old = true);

(new_link_55365.onload = ((function (seq__55210_55337,chunk__55214_55338,count__55215_55339,i__55216_55340,seq__55176,chunk__55178,count__55179,i__55180,new_link_55365,path_match_55364,node_55363,seq__55210_55357__$1,temp__5735__auto___55356,path,map__55174,map__55174__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55363);
});})(seq__55210_55337,chunk__55214_55338,count__55215_55339,i__55216_55340,seq__55176,chunk__55178,count__55179,i__55180,new_link_55365,path_match_55364,node_55363,seq__55210_55357__$1,temp__5735__auto___55356,path,map__55174,map__55174__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55364], 0));

goog.dom.insertSiblingAfter(new_link_55365,node_55363);


var G__55366 = cljs.core.next(seq__55210_55357__$1);
var G__55367 = null;
var G__55368 = (0);
var G__55369 = (0);
seq__55210_55337 = G__55366;
chunk__55214_55338 = G__55367;
count__55215_55339 = G__55368;
i__55216_55340 = G__55369;
continue;
} else {
var G__55370 = cljs.core.next(seq__55210_55357__$1);
var G__55371 = null;
var G__55372 = (0);
var G__55373 = (0);
seq__55210_55337 = G__55370;
chunk__55214_55338 = G__55371;
count__55215_55339 = G__55372;
i__55216_55340 = G__55373;
continue;
}
} else {
var G__55374 = cljs.core.next(seq__55210_55357__$1);
var G__55375 = null;
var G__55376 = (0);
var G__55377 = (0);
seq__55210_55337 = G__55374;
chunk__55214_55338 = G__55375;
count__55215_55339 = G__55376;
i__55216_55340 = G__55377;
continue;
}
}
} else {
}
}
break;
}


var G__55378 = seq__55176;
var G__55379 = chunk__55178;
var G__55380 = count__55179;
var G__55381 = (i__55180 + (1));
seq__55176 = G__55378;
chunk__55178 = G__55379;
count__55179 = G__55380;
i__55180 = G__55381;
continue;
} else {
var G__55382 = seq__55176;
var G__55383 = chunk__55178;
var G__55384 = count__55179;
var G__55385 = (i__55180 + (1));
seq__55176 = G__55382;
chunk__55178 = G__55383;
count__55179 = G__55384;
i__55180 = G__55385;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55176);
if(temp__5735__auto__){
var seq__55176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55176__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55176__$1);
var G__55386 = cljs.core.chunk_rest(seq__55176__$1);
var G__55387 = c__4556__auto__;
var G__55388 = cljs.core.count(c__4556__auto__);
var G__55389 = (0);
seq__55176 = G__55386;
chunk__55178 = G__55387;
count__55179 = G__55388;
i__55180 = G__55389;
continue;
} else {
var path = cljs.core.first(seq__55176__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__55224_55390 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__55228_55391 = null;
var count__55229_55392 = (0);
var i__55230_55393 = (0);
while(true){
if((i__55230_55393 < count__55229_55392)){
var node_55394 = chunk__55228_55391.cljs$core$IIndexed$_nth$arity$2(null,i__55230_55393);
if(cljs.core.not(node_55394.shadow$old)){
var path_match_55395 = shadow.cljs.devtools.client.browser.match_paths(node_55394.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55395)){
var new_link_55396 = (function (){var G__55236 = node_55394.cloneNode(true);
G__55236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55395),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55236;
})();
(node_55394.shadow$old = true);

(new_link_55396.onload = ((function (seq__55224_55390,chunk__55228_55391,count__55229_55392,i__55230_55393,seq__55176,chunk__55178,count__55179,i__55180,new_link_55396,path_match_55395,node_55394,path,seq__55176__$1,temp__5735__auto__,map__55174,map__55174__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55394);
});})(seq__55224_55390,chunk__55228_55391,count__55229_55392,i__55230_55393,seq__55176,chunk__55178,count__55179,i__55180,new_link_55396,path_match_55395,node_55394,path,seq__55176__$1,temp__5735__auto__,map__55174,map__55174__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55395], 0));

goog.dom.insertSiblingAfter(new_link_55396,node_55394);


var G__55397 = seq__55224_55390;
var G__55398 = chunk__55228_55391;
var G__55399 = count__55229_55392;
var G__55400 = (i__55230_55393 + (1));
seq__55224_55390 = G__55397;
chunk__55228_55391 = G__55398;
count__55229_55392 = G__55399;
i__55230_55393 = G__55400;
continue;
} else {
var G__55401 = seq__55224_55390;
var G__55402 = chunk__55228_55391;
var G__55403 = count__55229_55392;
var G__55404 = (i__55230_55393 + (1));
seq__55224_55390 = G__55401;
chunk__55228_55391 = G__55402;
count__55229_55392 = G__55403;
i__55230_55393 = G__55404;
continue;
}
} else {
var G__55405 = seq__55224_55390;
var G__55406 = chunk__55228_55391;
var G__55407 = count__55229_55392;
var G__55408 = (i__55230_55393 + (1));
seq__55224_55390 = G__55405;
chunk__55228_55391 = G__55406;
count__55229_55392 = G__55407;
i__55230_55393 = G__55408;
continue;
}
} else {
var temp__5735__auto___55409__$1 = cljs.core.seq(seq__55224_55390);
if(temp__5735__auto___55409__$1){
var seq__55224_55410__$1 = temp__5735__auto___55409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55224_55410__$1)){
var c__4556__auto___55411 = cljs.core.chunk_first(seq__55224_55410__$1);
var G__55412 = cljs.core.chunk_rest(seq__55224_55410__$1);
var G__55413 = c__4556__auto___55411;
var G__55414 = cljs.core.count(c__4556__auto___55411);
var G__55415 = (0);
seq__55224_55390 = G__55412;
chunk__55228_55391 = G__55413;
count__55229_55392 = G__55414;
i__55230_55393 = G__55415;
continue;
} else {
var node_55416 = cljs.core.first(seq__55224_55410__$1);
if(cljs.core.not(node_55416.shadow$old)){
var path_match_55417 = shadow.cljs.devtools.client.browser.match_paths(node_55416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55417)){
var new_link_55418 = (function (){var G__55237 = node_55416.cloneNode(true);
G__55237.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55417),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55237;
})();
(node_55416.shadow$old = true);

(new_link_55418.onload = ((function (seq__55224_55390,chunk__55228_55391,count__55229_55392,i__55230_55393,seq__55176,chunk__55178,count__55179,i__55180,new_link_55418,path_match_55417,node_55416,seq__55224_55410__$1,temp__5735__auto___55409__$1,path,seq__55176__$1,temp__5735__auto__,map__55174,map__55174__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55416);
});})(seq__55224_55390,chunk__55228_55391,count__55229_55392,i__55230_55393,seq__55176,chunk__55178,count__55179,i__55180,new_link_55418,path_match_55417,node_55416,seq__55224_55410__$1,temp__5735__auto___55409__$1,path,seq__55176__$1,temp__5735__auto__,map__55174,map__55174__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55417], 0));

goog.dom.insertSiblingAfter(new_link_55418,node_55416);


var G__55419 = cljs.core.next(seq__55224_55410__$1);
var G__55420 = null;
var G__55421 = (0);
var G__55422 = (0);
seq__55224_55390 = G__55419;
chunk__55228_55391 = G__55420;
count__55229_55392 = G__55421;
i__55230_55393 = G__55422;
continue;
} else {
var G__55423 = cljs.core.next(seq__55224_55410__$1);
var G__55424 = null;
var G__55425 = (0);
var G__55426 = (0);
seq__55224_55390 = G__55423;
chunk__55228_55391 = G__55424;
count__55229_55392 = G__55425;
i__55230_55393 = G__55426;
continue;
}
} else {
var G__55427 = cljs.core.next(seq__55224_55410__$1);
var G__55428 = null;
var G__55429 = (0);
var G__55430 = (0);
seq__55224_55390 = G__55427;
chunk__55228_55391 = G__55428;
count__55229_55392 = G__55429;
i__55230_55393 = G__55430;
continue;
}
}
} else {
}
}
break;
}


var G__55431 = cljs.core.next(seq__55176__$1);
var G__55432 = null;
var G__55433 = (0);
var G__55434 = (0);
seq__55176 = G__55431;
chunk__55178 = G__55432;
count__55179 = G__55433;
i__55180 = G__55434;
continue;
} else {
var G__55435 = cljs.core.next(seq__55176__$1);
var G__55436 = null;
var G__55437 = (0);
var G__55438 = (0);
seq__55176 = G__55435;
chunk__55178 = G__55436;
count__55179 = G__55437;
i__55180 = G__55438;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__55238){
var map__55239 = p__55238;
var map__55239__$1 = (((((!((map__55239 == null))))?(((((map__55239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55239):map__55239);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55239__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__55241){
var map__55242 = p__55241;
var map__55242__$1 = (((((!((map__55242 == null))))?(((((map__55242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55242):map__55242);
var _ = map__55242__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55242__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__55244,done,error){
var map__55245 = p__55244;
var map__55245__$1 = (((((!((map__55245 == null))))?(((((map__55245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55245):map__55245);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55245__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__55247,done,error){
var map__55248 = p__55247;
var map__55248__$1 = (((((!((map__55248 == null))))?(((((map__55248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55248):map__55248);
var msg = map__55248__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55248__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55248__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55248__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55250){
var map__55251 = p__55250;
var map__55251__$1 = (((((!((map__55251 == null))))?(((((map__55251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55251):map__55251);
var src = map__55251__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55251__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__55253 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__55253) : done.call(null,G__55253));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__55254){
var map__55255 = p__55254;
var map__55255__$1 = (((((!((map__55255 == null))))?(((((map__55255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55255):map__55255);
var msg__$1 = map__55255__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55255__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e55257){var ex = e55257;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__55258){
var map__55259 = p__55258;
var map__55259__$1 = (((((!((map__55259 == null))))?(((((map__55259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55259):map__55259);
var env = map__55259__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55259__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__55261){
var map__55262 = p__55261;
var map__55262__$1 = (((((!((map__55262 == null))))?(((((map__55262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55262):map__55262);
var msg = map__55262__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55262__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__55264){
var map__55265 = p__55264;
var map__55265__$1 = (((((!((map__55265 == null))))?(((((map__55265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55265):map__55265);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55265__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55265__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__55267){
var map__55268 = p__55267;
var map__55268__$1 = (((((!((map__55268 == null))))?(((((map__55268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55268):map__55268);
var svc = map__55268__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55268__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
