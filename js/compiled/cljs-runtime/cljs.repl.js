goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56224){
var map__56225 = p__56224;
var map__56225__$1 = (((((!((map__56225 == null))))?(((((map__56225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56225):map__56225);
var m = map__56225__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56225__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56229_56440 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56230_56441 = null;
var count__56231_56442 = (0);
var i__56232_56443 = (0);
while(true){
if((i__56232_56443 < count__56231_56442)){
var f_56444 = chunk__56230_56441.cljs$core$IIndexed$_nth$arity$2(null,i__56232_56443);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56444], 0));


var G__56445 = seq__56229_56440;
var G__56446 = chunk__56230_56441;
var G__56447 = count__56231_56442;
var G__56448 = (i__56232_56443 + (1));
seq__56229_56440 = G__56445;
chunk__56230_56441 = G__56446;
count__56231_56442 = G__56447;
i__56232_56443 = G__56448;
continue;
} else {
var temp__5735__auto___56449 = cljs.core.seq(seq__56229_56440);
if(temp__5735__auto___56449){
var seq__56229_56450__$1 = temp__5735__auto___56449;
if(cljs.core.chunked_seq_QMARK_(seq__56229_56450__$1)){
var c__4556__auto___56451 = cljs.core.chunk_first(seq__56229_56450__$1);
var G__56452 = cljs.core.chunk_rest(seq__56229_56450__$1);
var G__56453 = c__4556__auto___56451;
var G__56454 = cljs.core.count(c__4556__auto___56451);
var G__56455 = (0);
seq__56229_56440 = G__56452;
chunk__56230_56441 = G__56453;
count__56231_56442 = G__56454;
i__56232_56443 = G__56455;
continue;
} else {
var f_56456 = cljs.core.first(seq__56229_56450__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56456], 0));


var G__56457 = cljs.core.next(seq__56229_56450__$1);
var G__56458 = null;
var G__56459 = (0);
var G__56460 = (0);
seq__56229_56440 = G__56457;
chunk__56230_56441 = G__56458;
count__56231_56442 = G__56459;
i__56232_56443 = G__56460;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56461 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56461], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56461)))?cljs.core.second(arglists_56461):arglists_56461)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56237_56462 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56238_56463 = null;
var count__56239_56464 = (0);
var i__56240_56465 = (0);
while(true){
if((i__56240_56465 < count__56239_56464)){
var vec__56251_56466 = chunk__56238_56463.cljs$core$IIndexed$_nth$arity$2(null,i__56240_56465);
var name_56467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56251_56466,(0),null);
var map__56254_56468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56251_56466,(1),null);
var map__56254_56469__$1 = (((((!((map__56254_56468 == null))))?(((((map__56254_56468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56254_56468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56254_56468):map__56254_56468);
var doc_56470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254_56469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254_56469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56467], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56471], 0));

if(cljs.core.truth_(doc_56470)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56470], 0));
} else {
}


var G__56476 = seq__56237_56462;
var G__56477 = chunk__56238_56463;
var G__56478 = count__56239_56464;
var G__56479 = (i__56240_56465 + (1));
seq__56237_56462 = G__56476;
chunk__56238_56463 = G__56477;
count__56239_56464 = G__56478;
i__56240_56465 = G__56479;
continue;
} else {
var temp__5735__auto___56480 = cljs.core.seq(seq__56237_56462);
if(temp__5735__auto___56480){
var seq__56237_56481__$1 = temp__5735__auto___56480;
if(cljs.core.chunked_seq_QMARK_(seq__56237_56481__$1)){
var c__4556__auto___56482 = cljs.core.chunk_first(seq__56237_56481__$1);
var G__56483 = cljs.core.chunk_rest(seq__56237_56481__$1);
var G__56484 = c__4556__auto___56482;
var G__56485 = cljs.core.count(c__4556__auto___56482);
var G__56486 = (0);
seq__56237_56462 = G__56483;
chunk__56238_56463 = G__56484;
count__56239_56464 = G__56485;
i__56240_56465 = G__56486;
continue;
} else {
var vec__56258_56487 = cljs.core.first(seq__56237_56481__$1);
var name_56488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258_56487,(0),null);
var map__56261_56489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258_56487,(1),null);
var map__56261_56490__$1 = (((((!((map__56261_56489 == null))))?(((((map__56261_56489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56261_56489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56261_56489):map__56261_56489);
var doc_56491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261_56490__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261_56490__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56488], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56492], 0));

if(cljs.core.truth_(doc_56491)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56491], 0));
} else {
}


var G__56497 = cljs.core.next(seq__56237_56481__$1);
var G__56498 = null;
var G__56499 = (0);
var G__56500 = (0);
seq__56237_56462 = G__56497;
chunk__56238_56463 = G__56498;
count__56239_56464 = G__56499;
i__56240_56465 = G__56500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56264 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56265 = null;
var count__56266 = (0);
var i__56267 = (0);
while(true){
if((i__56267 < count__56266)){
var role = chunk__56265.cljs$core$IIndexed$_nth$arity$2(null,i__56267);
var temp__5735__auto___56501__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56501__$1)){
var spec_56502 = temp__5735__auto___56501__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56502)], 0));
} else {
}


var G__56503 = seq__56264;
var G__56504 = chunk__56265;
var G__56505 = count__56266;
var G__56506 = (i__56267 + (1));
seq__56264 = G__56503;
chunk__56265 = G__56504;
count__56266 = G__56505;
i__56267 = G__56506;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56264);
if(temp__5735__auto____$1){
var seq__56264__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56264__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56264__$1);
var G__56507 = cljs.core.chunk_rest(seq__56264__$1);
var G__56508 = c__4556__auto__;
var G__56509 = cljs.core.count(c__4556__auto__);
var G__56510 = (0);
seq__56264 = G__56507;
chunk__56265 = G__56508;
count__56266 = G__56509;
i__56267 = G__56510;
continue;
} else {
var role = cljs.core.first(seq__56264__$1);
var temp__5735__auto___56511__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56511__$2)){
var spec_56512 = temp__5735__auto___56511__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56512)], 0));
} else {
}


var G__56513 = cljs.core.next(seq__56264__$1);
var G__56514 = null;
var G__56515 = (0);
var G__56516 = (0);
seq__56264 = G__56513;
chunk__56265 = G__56514;
count__56266 = G__56515;
i__56267 = G__56516;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56517 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56518 = cljs.core.ex_cause(t);
via = G__56517;
t = G__56518;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56296 = datafied_throwable;
var map__56296__$1 = (((((!((map__56296 == null))))?(((((map__56296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56296):map__56296);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56296__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56297 = cljs.core.last(via);
var map__56297__$1 = (((((!((map__56297 == null))))?(((((map__56297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56297):map__56297);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56298 = data;
var map__56298__$1 = (((((!((map__56298 == null))))?(((((map__56298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56298):map__56298);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56298__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56298__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56298__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56299 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56299__$1 = (((((!((map__56299 == null))))?(((((map__56299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56299):map__56299);
var top_data = map__56299__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56328 = phase;
var G__56328__$1 = (((G__56328 instanceof cljs.core.Keyword))?G__56328.fqn:null);
switch (G__56328__$1) {
case "read-source":
var map__56343 = data;
var map__56343__$1 = (((((!((map__56343 == null))))?(((((map__56343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56343):map__56343);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56343__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56343__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56345 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56345__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56345,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56345);
var G__56345__$2 = (cljs.core.truth_((function (){var fexpr__56346 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56346.cljs$core$IFn$_invoke$arity$1 ? fexpr__56346.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56346.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56345__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56345__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56345__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56345__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56351 = top_data;
var G__56351__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56351,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56351);
var G__56351__$2 = (cljs.core.truth_((function (){var fexpr__56355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56355.cljs$core$IFn$_invoke$arity$1 ? fexpr__56355.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56355.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56351__$1);
var G__56351__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56351__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56351__$2);
var G__56351__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56351__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56351__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56351__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56351__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56360 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(3),null);
var G__56370 = top_data;
var G__56370__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56370);
var G__56370__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56370__$1);
var G__56370__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56370__$2);
var G__56370__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56370__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56370__$4;
}

break;
case "execution":
var vec__56382 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56288_SHARP_){
var or__4126__auto__ = (p1__56288_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56390.cljs$core$IFn$_invoke$arity$1 ? fexpr__56390.cljs$core$IFn$_invoke$arity$1(p1__56288_SHARP_) : fexpr__56390.call(null,p1__56288_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56391 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56391__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56391,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56391);
var G__56391__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56391__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56391__$1);
var G__56391__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56391__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56391__$2);
var G__56391__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56391__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56391__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56391__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56391__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56328__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56396){
var map__56397 = p__56396;
var map__56397__$1 = (((((!((map__56397 == null))))?(((((map__56397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56397):map__56397);
var triage_data = map__56397__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56400 = phase;
var G__56400__$1 = (((G__56400 instanceof cljs.core.Keyword))?G__56400.fqn:null);
switch (G__56400__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56401 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56402 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56403 = loc;
var G__56404 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56405_56523 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56406_56524 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56407_56525 = true;
var _STAR_print_fn_STAR__temp_val__56408_56526 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56407_56525);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56408_56526);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56393_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56393_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56406_56524);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56405_56523);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56401,G__56402,G__56403,G__56404) : format.call(null,G__56401,G__56402,G__56403,G__56404));

break;
case "macroexpansion":
var G__56410 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56411 = cause_type;
var G__56412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56413 = loc;
var G__56414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56410,G__56411,G__56412,G__56413,G__56414) : format.call(null,G__56410,G__56411,G__56412,G__56413,G__56414));

break;
case "compile-syntax-check":
var G__56416 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56417 = cause_type;
var G__56418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56419 = loc;
var G__56420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56416,G__56417,G__56418,G__56419,G__56420) : format.call(null,G__56416,G__56417,G__56418,G__56419,G__56420));

break;
case "compilation":
var G__56421 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56422 = cause_type;
var G__56423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56424 = loc;
var G__56425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56421,G__56422,G__56423,G__56424,G__56425) : format.call(null,G__56421,G__56422,G__56423,G__56424,G__56425));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56426 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56427 = symbol;
var G__56428 = loc;
var G__56429 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56430_56527 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56431_56528 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56432_56529 = true;
var _STAR_print_fn_STAR__temp_val__56433_56530 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56432_56529);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56433_56530);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56394_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56394_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56431_56528);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56430_56527);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56426,G__56427,G__56428,G__56429) : format.call(null,G__56426,G__56427,G__56428,G__56429));
} else {
var G__56434 = "Execution error%s at %s(%s).\n%s\n";
var G__56435 = cause_type;
var G__56436 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56437 = loc;
var G__56438 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56434,G__56435,G__56436,G__56437,G__56438) : format.call(null,G__56434,G__56435,G__56436,G__56437,G__56438));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56400__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
