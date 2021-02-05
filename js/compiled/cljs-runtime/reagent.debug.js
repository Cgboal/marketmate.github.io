goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42252__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42255__i = 0, G__42255__a = new Array(arguments.length -  0);
while (G__42255__i < G__42255__a.length) {G__42255__a[G__42255__i] = arguments[G__42255__i + 0]; ++G__42255__i;}
  args = new cljs.core.IndexedSeq(G__42255__a,0,null);
} 
return G__42252__delegate.call(this,args);};
G__42252.cljs$lang$maxFixedArity = 0;
G__42252.cljs$lang$applyTo = (function (arglist__42256){
var args = cljs.core.seq(arglist__42256);
return G__42252__delegate(args);
});
G__42252.cljs$core$IFn$_invoke$arity$variadic = G__42252__delegate;
return G__42252;
})()
);

(o.error = (function() { 
var G__42257__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42259__i = 0, G__42259__a = new Array(arguments.length -  0);
while (G__42259__i < G__42259__a.length) {G__42259__a[G__42259__i] = arguments[G__42259__i + 0]; ++G__42259__i;}
  args = new cljs.core.IndexedSeq(G__42259__a,0,null);
} 
return G__42257__delegate.call(this,args);};
G__42257.cljs$lang$maxFixedArity = 0;
G__42257.cljs$lang$applyTo = (function (arglist__42263){
var args = cljs.core.seq(arglist__42263);
return G__42257__delegate(args);
});
G__42257.cljs$core$IFn$_invoke$arity$variadic = G__42257__delegate;
return G__42257;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
