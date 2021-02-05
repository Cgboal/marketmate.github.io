goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53706 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_53706(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53711 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_53711(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__52285 = coll;
var G__52286 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__52285,G__52286) : shadow.dom.lazy_native_coll_seq.call(null,G__52285,G__52286));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__52327 = arguments.length;
switch (G__52327) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__52354 = arguments.length;
switch (G__52354) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__52365 = arguments.length;
switch (G__52365) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__52376 = arguments.length;
switch (G__52376) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__52409 = arguments.length;
switch (G__52409) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__52454 = arguments.length;
switch (G__52454) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e52485){if((e52485 instanceof Object)){
var e = e52485;
return console.log("didnt support attachEvent",el,e);
} else {
throw e52485;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__52496 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__52497 = null;
var count__52498 = (0);
var i__52499 = (0);
while(true){
if((i__52499 < count__52498)){
var el = chunk__52497.cljs$core$IIndexed$_nth$arity$2(null,i__52499);
var handler_53759__$1 = ((function (seq__52496,chunk__52497,count__52498,i__52499,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52496,chunk__52497,count__52498,i__52499,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53759__$1);


var G__53760 = seq__52496;
var G__53761 = chunk__52497;
var G__53762 = count__52498;
var G__53763 = (i__52499 + (1));
seq__52496 = G__53760;
chunk__52497 = G__53761;
count__52498 = G__53762;
i__52499 = G__53763;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52496);
if(temp__5735__auto__){
var seq__52496__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52496__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52496__$1);
var G__53766 = cljs.core.chunk_rest(seq__52496__$1);
var G__53767 = c__4556__auto__;
var G__53768 = cljs.core.count(c__4556__auto__);
var G__53769 = (0);
seq__52496 = G__53766;
chunk__52497 = G__53767;
count__52498 = G__53768;
i__52499 = G__53769;
continue;
} else {
var el = cljs.core.first(seq__52496__$1);
var handler_53771__$1 = ((function (seq__52496,chunk__52497,count__52498,i__52499,el,seq__52496__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52496,chunk__52497,count__52498,i__52499,el,seq__52496__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53771__$1);


var G__53773 = cljs.core.next(seq__52496__$1);
var G__53774 = null;
var G__53775 = (0);
var G__53776 = (0);
seq__52496 = G__53773;
chunk__52497 = G__53774;
count__52498 = G__53775;
i__52499 = G__53776;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__52549 = arguments.length;
switch (G__52549) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__52562 = cljs.core.seq(events);
var chunk__52563 = null;
var count__52564 = (0);
var i__52565 = (0);
while(true){
if((i__52565 < count__52564)){
var vec__52581 = chunk__52563.cljs$core$IIndexed$_nth$arity$2(null,i__52565);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52581,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53786 = seq__52562;
var G__53787 = chunk__52563;
var G__53788 = count__52564;
var G__53789 = (i__52565 + (1));
seq__52562 = G__53786;
chunk__52563 = G__53787;
count__52564 = G__53788;
i__52565 = G__53789;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52562);
if(temp__5735__auto__){
var seq__52562__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52562__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52562__$1);
var G__53792 = cljs.core.chunk_rest(seq__52562__$1);
var G__53793 = c__4556__auto__;
var G__53794 = cljs.core.count(c__4556__auto__);
var G__53795 = (0);
seq__52562 = G__53792;
chunk__52563 = G__53793;
count__52564 = G__53794;
i__52565 = G__53795;
continue;
} else {
var vec__52592 = cljs.core.first(seq__52562__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52592,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53798 = cljs.core.next(seq__52562__$1);
var G__53799 = null;
var G__53800 = (0);
var G__53801 = (0);
seq__52562 = G__53798;
chunk__52563 = G__53799;
count__52564 = G__53800;
i__52565 = G__53801;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__52599 = cljs.core.seq(styles);
var chunk__52600 = null;
var count__52601 = (0);
var i__52602 = (0);
while(true){
if((i__52602 < count__52601)){
var vec__52618 = chunk__52600.cljs$core$IIndexed$_nth$arity$2(null,i__52602);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53803 = seq__52599;
var G__53804 = chunk__52600;
var G__53805 = count__52601;
var G__53806 = (i__52602 + (1));
seq__52599 = G__53803;
chunk__52600 = G__53804;
count__52601 = G__53805;
i__52602 = G__53806;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52599);
if(temp__5735__auto__){
var seq__52599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52599__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52599__$1);
var G__53807 = cljs.core.chunk_rest(seq__52599__$1);
var G__53808 = c__4556__auto__;
var G__53809 = cljs.core.count(c__4556__auto__);
var G__53810 = (0);
seq__52599 = G__53807;
chunk__52600 = G__53808;
count__52601 = G__53809;
i__52602 = G__53810;
continue;
} else {
var vec__52623 = cljs.core.first(seq__52599__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52623,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53816 = cljs.core.next(seq__52599__$1);
var G__53817 = null;
var G__53818 = (0);
var G__53819 = (0);
seq__52599 = G__53816;
chunk__52600 = G__53817;
count__52601 = G__53818;
i__52602 = G__53819;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__52630_53820 = key;
var G__52630_53821__$1 = (((G__52630_53820 instanceof cljs.core.Keyword))?G__52630_53820.fqn:null);
switch (G__52630_53821__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_53826 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_53826,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_53826,"aria-");
}
})())){
el.setAttribute(ks_53826,value);
} else {
(el[ks_53826] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__52656){
var map__52657 = p__52656;
var map__52657__$1 = (((((!((map__52657 == null))))?(((((map__52657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52657):map__52657);
var props = map__52657__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__52665 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52665,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52665,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52665,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__52669 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__52669,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__52669;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__52678 = arguments.length;
switch (G__52678) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__52695){
var vec__52697 = p__52695;
var seq__52698 = cljs.core.seq(vec__52697);
var first__52699 = cljs.core.first(seq__52698);
var seq__52698__$1 = cljs.core.next(seq__52698);
var nn = first__52699;
var first__52699__$1 = cljs.core.first(seq__52698__$1);
var seq__52698__$2 = cljs.core.next(seq__52698__$1);
var np = first__52699__$1;
var nc = seq__52698__$2;
var node = vec__52697;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52701 = nn;
var G__52702 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52701,G__52702) : create_fn.call(null,G__52701,G__52702));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52705 = nn;
var G__52706 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52705,G__52706) : create_fn.call(null,G__52705,G__52706));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52718 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52718,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52718,(1),null);
var seq__52723_53857 = cljs.core.seq(node_children);
var chunk__52724_53858 = null;
var count__52725_53859 = (0);
var i__52726_53860 = (0);
while(true){
if((i__52726_53860 < count__52725_53859)){
var child_struct_53861 = chunk__52724_53858.cljs$core$IIndexed$_nth$arity$2(null,i__52726_53860);
var children_53862 = shadow.dom.dom_node(child_struct_53861);
if(cljs.core.seq_QMARK_(children_53862)){
var seq__52816_53863 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53862));
var chunk__52818_53864 = null;
var count__52819_53865 = (0);
var i__52820_53866 = (0);
while(true){
if((i__52820_53866 < count__52819_53865)){
var child_53867 = chunk__52818_53864.cljs$core$IIndexed$_nth$arity$2(null,i__52820_53866);
if(cljs.core.truth_(child_53867)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53867);


var G__53868 = seq__52816_53863;
var G__53869 = chunk__52818_53864;
var G__53870 = count__52819_53865;
var G__53871 = (i__52820_53866 + (1));
seq__52816_53863 = G__53868;
chunk__52818_53864 = G__53869;
count__52819_53865 = G__53870;
i__52820_53866 = G__53871;
continue;
} else {
var G__53873 = seq__52816_53863;
var G__53874 = chunk__52818_53864;
var G__53875 = count__52819_53865;
var G__53876 = (i__52820_53866 + (1));
seq__52816_53863 = G__53873;
chunk__52818_53864 = G__53874;
count__52819_53865 = G__53875;
i__52820_53866 = G__53876;
continue;
}
} else {
var temp__5735__auto___53877 = cljs.core.seq(seq__52816_53863);
if(temp__5735__auto___53877){
var seq__52816_53879__$1 = temp__5735__auto___53877;
if(cljs.core.chunked_seq_QMARK_(seq__52816_53879__$1)){
var c__4556__auto___53880 = cljs.core.chunk_first(seq__52816_53879__$1);
var G__53881 = cljs.core.chunk_rest(seq__52816_53879__$1);
var G__53882 = c__4556__auto___53880;
var G__53883 = cljs.core.count(c__4556__auto___53880);
var G__53884 = (0);
seq__52816_53863 = G__53881;
chunk__52818_53864 = G__53882;
count__52819_53865 = G__53883;
i__52820_53866 = G__53884;
continue;
} else {
var child_53887 = cljs.core.first(seq__52816_53879__$1);
if(cljs.core.truth_(child_53887)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53887);


var G__53889 = cljs.core.next(seq__52816_53879__$1);
var G__53890 = null;
var G__53891 = (0);
var G__53892 = (0);
seq__52816_53863 = G__53889;
chunk__52818_53864 = G__53890;
count__52819_53865 = G__53891;
i__52820_53866 = G__53892;
continue;
} else {
var G__53893 = cljs.core.next(seq__52816_53879__$1);
var G__53894 = null;
var G__53895 = (0);
var G__53896 = (0);
seq__52816_53863 = G__53893;
chunk__52818_53864 = G__53894;
count__52819_53865 = G__53895;
i__52820_53866 = G__53896;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53862);
}


var G__53897 = seq__52723_53857;
var G__53898 = chunk__52724_53858;
var G__53899 = count__52725_53859;
var G__53900 = (i__52726_53860 + (1));
seq__52723_53857 = G__53897;
chunk__52724_53858 = G__53898;
count__52725_53859 = G__53899;
i__52726_53860 = G__53900;
continue;
} else {
var temp__5735__auto___53901 = cljs.core.seq(seq__52723_53857);
if(temp__5735__auto___53901){
var seq__52723_53902__$1 = temp__5735__auto___53901;
if(cljs.core.chunked_seq_QMARK_(seq__52723_53902__$1)){
var c__4556__auto___53903 = cljs.core.chunk_first(seq__52723_53902__$1);
var G__53905 = cljs.core.chunk_rest(seq__52723_53902__$1);
var G__53906 = c__4556__auto___53903;
var G__53907 = cljs.core.count(c__4556__auto___53903);
var G__53908 = (0);
seq__52723_53857 = G__53905;
chunk__52724_53858 = G__53906;
count__52725_53859 = G__53907;
i__52726_53860 = G__53908;
continue;
} else {
var child_struct_53913 = cljs.core.first(seq__52723_53902__$1);
var children_53914 = shadow.dom.dom_node(child_struct_53913);
if(cljs.core.seq_QMARK_(children_53914)){
var seq__52844_53915 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53914));
var chunk__52846_53916 = null;
var count__52847_53917 = (0);
var i__52848_53918 = (0);
while(true){
if((i__52848_53918 < count__52847_53917)){
var child_53919 = chunk__52846_53916.cljs$core$IIndexed$_nth$arity$2(null,i__52848_53918);
if(cljs.core.truth_(child_53919)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53919);


var G__53920 = seq__52844_53915;
var G__53921 = chunk__52846_53916;
var G__53922 = count__52847_53917;
var G__53923 = (i__52848_53918 + (1));
seq__52844_53915 = G__53920;
chunk__52846_53916 = G__53921;
count__52847_53917 = G__53922;
i__52848_53918 = G__53923;
continue;
} else {
var G__53924 = seq__52844_53915;
var G__53925 = chunk__52846_53916;
var G__53926 = count__52847_53917;
var G__53927 = (i__52848_53918 + (1));
seq__52844_53915 = G__53924;
chunk__52846_53916 = G__53925;
count__52847_53917 = G__53926;
i__52848_53918 = G__53927;
continue;
}
} else {
var temp__5735__auto___53928__$1 = cljs.core.seq(seq__52844_53915);
if(temp__5735__auto___53928__$1){
var seq__52844_53930__$1 = temp__5735__auto___53928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52844_53930__$1)){
var c__4556__auto___53931 = cljs.core.chunk_first(seq__52844_53930__$1);
var G__53932 = cljs.core.chunk_rest(seq__52844_53930__$1);
var G__53933 = c__4556__auto___53931;
var G__53934 = cljs.core.count(c__4556__auto___53931);
var G__53935 = (0);
seq__52844_53915 = G__53932;
chunk__52846_53916 = G__53933;
count__52847_53917 = G__53934;
i__52848_53918 = G__53935;
continue;
} else {
var child_53937 = cljs.core.first(seq__52844_53930__$1);
if(cljs.core.truth_(child_53937)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53937);


var G__53940 = cljs.core.next(seq__52844_53930__$1);
var G__53941 = null;
var G__53942 = (0);
var G__53943 = (0);
seq__52844_53915 = G__53940;
chunk__52846_53916 = G__53941;
count__52847_53917 = G__53942;
i__52848_53918 = G__53943;
continue;
} else {
var G__53944 = cljs.core.next(seq__52844_53930__$1);
var G__53945 = null;
var G__53946 = (0);
var G__53947 = (0);
seq__52844_53915 = G__53944;
chunk__52846_53916 = G__53945;
count__52847_53917 = G__53946;
i__52848_53918 = G__53947;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53914);
}


var G__53948 = cljs.core.next(seq__52723_53902__$1);
var G__53949 = null;
var G__53950 = (0);
var G__53951 = (0);
seq__52723_53857 = G__53948;
chunk__52724_53858 = G__53949;
count__52725_53859 = G__53950;
i__52726_53860 = G__53951;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__52898 = cljs.core.seq(node);
var chunk__52902 = null;
var count__52904 = (0);
var i__52905 = (0);
while(true){
if((i__52905 < count__52904)){
var n = chunk__52902.cljs$core$IIndexed$_nth$arity$2(null,i__52905);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53961 = seq__52898;
var G__53962 = chunk__52902;
var G__53963 = count__52904;
var G__53964 = (i__52905 + (1));
seq__52898 = G__53961;
chunk__52902 = G__53962;
count__52904 = G__53963;
i__52905 = G__53964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52898);
if(temp__5735__auto__){
var seq__52898__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52898__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52898__$1);
var G__53965 = cljs.core.chunk_rest(seq__52898__$1);
var G__53966 = c__4556__auto__;
var G__53967 = cljs.core.count(c__4556__auto__);
var G__53968 = (0);
seq__52898 = G__53965;
chunk__52902 = G__53966;
count__52904 = G__53967;
i__52905 = G__53968;
continue;
} else {
var n = cljs.core.first(seq__52898__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53969 = cljs.core.next(seq__52898__$1);
var G__53970 = null;
var G__53971 = (0);
var G__53972 = (0);
seq__52898 = G__53969;
chunk__52902 = G__53970;
count__52904 = G__53971;
i__52905 = G__53972;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__52925 = arguments.length;
switch (G__52925) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__52936 = arguments.length;
switch (G__52936) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__52965 = arguments.length;
switch (G__52965) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53994 = arguments.length;
var i__4737__auto___53995 = (0);
while(true){
if((i__4737__auto___53995 < len__4736__auto___53994)){
args__4742__auto__.push((arguments[i__4737__auto___53995]));

var G__53996 = (i__4737__auto___53995 + (1));
i__4737__auto___53995 = G__53996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53014_53997 = cljs.core.seq(nodes);
var chunk__53015_53998 = null;
var count__53016_53999 = (0);
var i__53017_54000 = (0);
while(true){
if((i__53017_54000 < count__53016_53999)){
var node_54001 = chunk__53015_53998.cljs$core$IIndexed$_nth$arity$2(null,i__53017_54000);
fragment.appendChild(shadow.dom._to_dom(node_54001));


var G__54002 = seq__53014_53997;
var G__54003 = chunk__53015_53998;
var G__54004 = count__53016_53999;
var G__54005 = (i__53017_54000 + (1));
seq__53014_53997 = G__54002;
chunk__53015_53998 = G__54003;
count__53016_53999 = G__54004;
i__53017_54000 = G__54005;
continue;
} else {
var temp__5735__auto___54010 = cljs.core.seq(seq__53014_53997);
if(temp__5735__auto___54010){
var seq__53014_54012__$1 = temp__5735__auto___54010;
if(cljs.core.chunked_seq_QMARK_(seq__53014_54012__$1)){
var c__4556__auto___54013 = cljs.core.chunk_first(seq__53014_54012__$1);
var G__54014 = cljs.core.chunk_rest(seq__53014_54012__$1);
var G__54015 = c__4556__auto___54013;
var G__54016 = cljs.core.count(c__4556__auto___54013);
var G__54017 = (0);
seq__53014_53997 = G__54014;
chunk__53015_53998 = G__54015;
count__53016_53999 = G__54016;
i__53017_54000 = G__54017;
continue;
} else {
var node_54018 = cljs.core.first(seq__53014_54012__$1);
fragment.appendChild(shadow.dom._to_dom(node_54018));


var G__54019 = cljs.core.next(seq__53014_54012__$1);
var G__54020 = null;
var G__54021 = (0);
var G__54022 = (0);
seq__53014_53997 = G__54019;
chunk__53015_53998 = G__54020;
count__53016_53999 = G__54021;
i__53017_54000 = G__54022;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq52991){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52991));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53037_54025 = cljs.core.seq(scripts);
var chunk__53038_54026 = null;
var count__53039_54027 = (0);
var i__53040_54028 = (0);
while(true){
if((i__53040_54028 < count__53039_54027)){
var vec__53055_54029 = chunk__53038_54026.cljs$core$IIndexed$_nth$arity$2(null,i__53040_54028);
var script_tag_54030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53055_54029,(0),null);
var script_body_54031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53055_54029,(1),null);
eval(script_body_54031);


var G__54032 = seq__53037_54025;
var G__54033 = chunk__53038_54026;
var G__54034 = count__53039_54027;
var G__54035 = (i__53040_54028 + (1));
seq__53037_54025 = G__54032;
chunk__53038_54026 = G__54033;
count__53039_54027 = G__54034;
i__53040_54028 = G__54035;
continue;
} else {
var temp__5735__auto___54036 = cljs.core.seq(seq__53037_54025);
if(temp__5735__auto___54036){
var seq__53037_54037__$1 = temp__5735__auto___54036;
if(cljs.core.chunked_seq_QMARK_(seq__53037_54037__$1)){
var c__4556__auto___54038 = cljs.core.chunk_first(seq__53037_54037__$1);
var G__54040 = cljs.core.chunk_rest(seq__53037_54037__$1);
var G__54041 = c__4556__auto___54038;
var G__54042 = cljs.core.count(c__4556__auto___54038);
var G__54043 = (0);
seq__53037_54025 = G__54040;
chunk__53038_54026 = G__54041;
count__53039_54027 = G__54042;
i__53040_54028 = G__54043;
continue;
} else {
var vec__53061_54049 = cljs.core.first(seq__53037_54037__$1);
var script_tag_54050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53061_54049,(0),null);
var script_body_54051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53061_54049,(1),null);
eval(script_body_54051);


var G__54052 = cljs.core.next(seq__53037_54037__$1);
var G__54053 = null;
var G__54054 = (0);
var G__54055 = (0);
seq__53037_54025 = G__54052;
chunk__53038_54026 = G__54053;
count__53039_54027 = G__54054;
i__53040_54028 = G__54055;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53071){
var vec__53072 = p__53071;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53072,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53072,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__53094 = arguments.length;
switch (G__53094) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__53137 = cljs.core.seq(style_keys);
var chunk__53138 = null;
var count__53139 = (0);
var i__53140 = (0);
while(true){
if((i__53140 < count__53139)){
var it = chunk__53138.cljs$core$IIndexed$_nth$arity$2(null,i__53140);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54067 = seq__53137;
var G__54068 = chunk__53138;
var G__54069 = count__53139;
var G__54070 = (i__53140 + (1));
seq__53137 = G__54067;
chunk__53138 = G__54068;
count__53139 = G__54069;
i__53140 = G__54070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53137);
if(temp__5735__auto__){
var seq__53137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53137__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53137__$1);
var G__54072 = cljs.core.chunk_rest(seq__53137__$1);
var G__54073 = c__4556__auto__;
var G__54074 = cljs.core.count(c__4556__auto__);
var G__54075 = (0);
seq__53137 = G__54072;
chunk__53138 = G__54073;
count__53139 = G__54074;
i__53140 = G__54075;
continue;
} else {
var it = cljs.core.first(seq__53137__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54076 = cljs.core.next(seq__53137__$1);
var G__54077 = null;
var G__54078 = (0);
var G__54079 = (0);
seq__53137 = G__54076;
chunk__53138 = G__54077;
count__53139 = G__54078;
i__53140 = G__54079;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53154,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53171 = k53154;
var G__53171__$1 = (((G__53171 instanceof cljs.core.Keyword))?G__53171.fqn:null);
switch (G__53171__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53154,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53180){
var vec__53183 = p__53180;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53183,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53183,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53153){
var self__ = this;
var G__53153__$1 = this;
return (new cljs.core.RecordIter((0),G__53153__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53155,other53156){
var self__ = this;
var this53155__$1 = this;
return (((!((other53156 == null)))) && ((this53155__$1.constructor === other53156.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53155__$1.x,other53156.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53155__$1.y,other53156.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53155__$1.__extmap,other53156.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53153){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53219 = cljs.core.keyword_identical_QMARK_;
var expr__53220 = k__4388__auto__;
if(cljs.core.truth_((pred__53219.cljs$core$IFn$_invoke$arity$2 ? pred__53219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53220) : pred__53219.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53220)))){
return (new shadow.dom.Coordinate(G__53153,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53219.cljs$core$IFn$_invoke$arity$2 ? pred__53219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53220) : pred__53219.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53220)))){
return (new shadow.dom.Coordinate(self__.x,G__53153,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53153),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53153){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53153,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53162){
var extmap__4419__auto__ = (function (){var G__53245 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53162,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53162)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53245);
} else {
return G__53245;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53162),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53162),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53263,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53275 = k53263;
var G__53275__$1 = (((G__53275 instanceof cljs.core.Keyword))?G__53275.fqn:null);
switch (G__53275__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53263,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53283){
var vec__53285 = p__53283;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53285,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53285,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53262){
var self__ = this;
var G__53262__$1 = this;
return (new cljs.core.RecordIter((0),G__53262__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53264,other53265){
var self__ = this;
var this53264__$1 = this;
return (((!((other53265 == null)))) && ((this53264__$1.constructor === other53265.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53264__$1.w,other53265.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53264__$1.h,other53265.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53264__$1.__extmap,other53265.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53262){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53315 = cljs.core.keyword_identical_QMARK_;
var expr__53316 = k__4388__auto__;
if(cljs.core.truth_((pred__53315.cljs$core$IFn$_invoke$arity$2 ? pred__53315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53316) : pred__53315.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53316)))){
return (new shadow.dom.Size(G__53262,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53315.cljs$core$IFn$_invoke$arity$2 ? pred__53315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53316) : pred__53315.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53316)))){
return (new shadow.dom.Size(self__.w,G__53262,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53262),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53262){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53262,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53268){
var extmap__4419__auto__ = (function (){var G__53333 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53268,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53268)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53333);
} else {
return G__53333;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53268),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53268),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__54125 = (i + (1));
var G__54126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__54125;
ret = G__54126;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53367){
var vec__53369 = p__53367;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53369,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53379 = arguments.length;
switch (G__53379) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__54134 = ps;
var G__54135 = (i + (1));
el__$1 = G__54134;
i = G__54135;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__53431 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53437_54141 = cljs.core.seq(props);
var chunk__53438_54142 = null;
var count__53439_54143 = (0);
var i__53440_54144 = (0);
while(true){
if((i__53440_54144 < count__53439_54143)){
var vec__53461_54145 = chunk__53438_54142.cljs$core$IIndexed$_nth$arity$2(null,i__53440_54144);
var k_54146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53461_54145,(0),null);
var v_54147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53461_54145,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_54146);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54146),v_54147);


var G__54148 = seq__53437_54141;
var G__54149 = chunk__53438_54142;
var G__54150 = count__53439_54143;
var G__54151 = (i__53440_54144 + (1));
seq__53437_54141 = G__54148;
chunk__53438_54142 = G__54149;
count__53439_54143 = G__54150;
i__53440_54144 = G__54151;
continue;
} else {
var temp__5735__auto___54152 = cljs.core.seq(seq__53437_54141);
if(temp__5735__auto___54152){
var seq__53437_54153__$1 = temp__5735__auto___54152;
if(cljs.core.chunked_seq_QMARK_(seq__53437_54153__$1)){
var c__4556__auto___54154 = cljs.core.chunk_first(seq__53437_54153__$1);
var G__54155 = cljs.core.chunk_rest(seq__53437_54153__$1);
var G__54156 = c__4556__auto___54154;
var G__54157 = cljs.core.count(c__4556__auto___54154);
var G__54158 = (0);
seq__53437_54141 = G__54155;
chunk__53438_54142 = G__54156;
count__53439_54143 = G__54157;
i__53440_54144 = G__54158;
continue;
} else {
var vec__53475_54159 = cljs.core.first(seq__53437_54153__$1);
var k_54160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53475_54159,(0),null);
var v_54161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53475_54159,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_54160);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54160),v_54161);


var G__54162 = cljs.core.next(seq__53437_54153__$1);
var G__54163 = null;
var G__54164 = (0);
var G__54165 = (0);
seq__53437_54141 = G__54162;
chunk__53438_54142 = G__54163;
count__53439_54143 = G__54164;
i__53440_54144 = G__54165;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__53484 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53484,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53484,(1),null);
var seq__53487_54166 = cljs.core.seq(node_children);
var chunk__53489_54167 = null;
var count__53490_54168 = (0);
var i__53491_54169 = (0);
while(true){
if((i__53491_54169 < count__53490_54168)){
var child_struct_54171 = chunk__53489_54167.cljs$core$IIndexed$_nth$arity$2(null,i__53491_54169);
if((!((child_struct_54171 == null)))){
if(typeof child_struct_54171 === 'string'){
var text_54172 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54172),child_struct_54171].join(''));
} else {
var children_54176 = shadow.dom.svg_node(child_struct_54171);
if(cljs.core.seq_QMARK_(children_54176)){
var seq__53534_54177 = cljs.core.seq(children_54176);
var chunk__53536_54178 = null;
var count__53537_54179 = (0);
var i__53538_54180 = (0);
while(true){
if((i__53538_54180 < count__53537_54179)){
var child_54181 = chunk__53536_54178.cljs$core$IIndexed$_nth$arity$2(null,i__53538_54180);
if(cljs.core.truth_(child_54181)){
node.appendChild(child_54181);


var G__54183 = seq__53534_54177;
var G__54184 = chunk__53536_54178;
var G__54185 = count__53537_54179;
var G__54186 = (i__53538_54180 + (1));
seq__53534_54177 = G__54183;
chunk__53536_54178 = G__54184;
count__53537_54179 = G__54185;
i__53538_54180 = G__54186;
continue;
} else {
var G__54188 = seq__53534_54177;
var G__54189 = chunk__53536_54178;
var G__54190 = count__53537_54179;
var G__54191 = (i__53538_54180 + (1));
seq__53534_54177 = G__54188;
chunk__53536_54178 = G__54189;
count__53537_54179 = G__54190;
i__53538_54180 = G__54191;
continue;
}
} else {
var temp__5735__auto___54192 = cljs.core.seq(seq__53534_54177);
if(temp__5735__auto___54192){
var seq__53534_54193__$1 = temp__5735__auto___54192;
if(cljs.core.chunked_seq_QMARK_(seq__53534_54193__$1)){
var c__4556__auto___54194 = cljs.core.chunk_first(seq__53534_54193__$1);
var G__54195 = cljs.core.chunk_rest(seq__53534_54193__$1);
var G__54196 = c__4556__auto___54194;
var G__54197 = cljs.core.count(c__4556__auto___54194);
var G__54198 = (0);
seq__53534_54177 = G__54195;
chunk__53536_54178 = G__54196;
count__53537_54179 = G__54197;
i__53538_54180 = G__54198;
continue;
} else {
var child_54199 = cljs.core.first(seq__53534_54193__$1);
if(cljs.core.truth_(child_54199)){
node.appendChild(child_54199);


var G__54200 = cljs.core.next(seq__53534_54193__$1);
var G__54201 = null;
var G__54202 = (0);
var G__54203 = (0);
seq__53534_54177 = G__54200;
chunk__53536_54178 = G__54201;
count__53537_54179 = G__54202;
i__53538_54180 = G__54203;
continue;
} else {
var G__54204 = cljs.core.next(seq__53534_54193__$1);
var G__54205 = null;
var G__54206 = (0);
var G__54207 = (0);
seq__53534_54177 = G__54204;
chunk__53536_54178 = G__54205;
count__53537_54179 = G__54206;
i__53538_54180 = G__54207;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54176);
}
}


var G__54209 = seq__53487_54166;
var G__54210 = chunk__53489_54167;
var G__54211 = count__53490_54168;
var G__54212 = (i__53491_54169 + (1));
seq__53487_54166 = G__54209;
chunk__53489_54167 = G__54210;
count__53490_54168 = G__54211;
i__53491_54169 = G__54212;
continue;
} else {
var G__54213 = seq__53487_54166;
var G__54214 = chunk__53489_54167;
var G__54215 = count__53490_54168;
var G__54216 = (i__53491_54169 + (1));
seq__53487_54166 = G__54213;
chunk__53489_54167 = G__54214;
count__53490_54168 = G__54215;
i__53491_54169 = G__54216;
continue;
}
} else {
var temp__5735__auto___54217 = cljs.core.seq(seq__53487_54166);
if(temp__5735__auto___54217){
var seq__53487_54218__$1 = temp__5735__auto___54217;
if(cljs.core.chunked_seq_QMARK_(seq__53487_54218__$1)){
var c__4556__auto___54219 = cljs.core.chunk_first(seq__53487_54218__$1);
var G__54220 = cljs.core.chunk_rest(seq__53487_54218__$1);
var G__54221 = c__4556__auto___54219;
var G__54222 = cljs.core.count(c__4556__auto___54219);
var G__54223 = (0);
seq__53487_54166 = G__54220;
chunk__53489_54167 = G__54221;
count__53490_54168 = G__54222;
i__53491_54169 = G__54223;
continue;
} else {
var child_struct_54224 = cljs.core.first(seq__53487_54218__$1);
if((!((child_struct_54224 == null)))){
if(typeof child_struct_54224 === 'string'){
var text_54225 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54225),child_struct_54224].join(''));
} else {
var children_54226 = shadow.dom.svg_node(child_struct_54224);
if(cljs.core.seq_QMARK_(children_54226)){
var seq__53560_54227 = cljs.core.seq(children_54226);
var chunk__53562_54228 = null;
var count__53563_54229 = (0);
var i__53564_54230 = (0);
while(true){
if((i__53564_54230 < count__53563_54229)){
var child_54231 = chunk__53562_54228.cljs$core$IIndexed$_nth$arity$2(null,i__53564_54230);
if(cljs.core.truth_(child_54231)){
node.appendChild(child_54231);


var G__54232 = seq__53560_54227;
var G__54233 = chunk__53562_54228;
var G__54234 = count__53563_54229;
var G__54235 = (i__53564_54230 + (1));
seq__53560_54227 = G__54232;
chunk__53562_54228 = G__54233;
count__53563_54229 = G__54234;
i__53564_54230 = G__54235;
continue;
} else {
var G__54236 = seq__53560_54227;
var G__54237 = chunk__53562_54228;
var G__54238 = count__53563_54229;
var G__54239 = (i__53564_54230 + (1));
seq__53560_54227 = G__54236;
chunk__53562_54228 = G__54237;
count__53563_54229 = G__54238;
i__53564_54230 = G__54239;
continue;
}
} else {
var temp__5735__auto___54240__$1 = cljs.core.seq(seq__53560_54227);
if(temp__5735__auto___54240__$1){
var seq__53560_54241__$1 = temp__5735__auto___54240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53560_54241__$1)){
var c__4556__auto___54242 = cljs.core.chunk_first(seq__53560_54241__$1);
var G__54243 = cljs.core.chunk_rest(seq__53560_54241__$1);
var G__54244 = c__4556__auto___54242;
var G__54245 = cljs.core.count(c__4556__auto___54242);
var G__54246 = (0);
seq__53560_54227 = G__54243;
chunk__53562_54228 = G__54244;
count__53563_54229 = G__54245;
i__53564_54230 = G__54246;
continue;
} else {
var child_54247 = cljs.core.first(seq__53560_54241__$1);
if(cljs.core.truth_(child_54247)){
node.appendChild(child_54247);


var G__54248 = cljs.core.next(seq__53560_54241__$1);
var G__54249 = null;
var G__54250 = (0);
var G__54251 = (0);
seq__53560_54227 = G__54248;
chunk__53562_54228 = G__54249;
count__53563_54229 = G__54250;
i__53564_54230 = G__54251;
continue;
} else {
var G__54252 = cljs.core.next(seq__53560_54241__$1);
var G__54253 = null;
var G__54254 = (0);
var G__54255 = (0);
seq__53560_54227 = G__54252;
chunk__53562_54228 = G__54253;
count__53563_54229 = G__54254;
i__53564_54230 = G__54255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54226);
}
}


var G__54256 = cljs.core.next(seq__53487_54218__$1);
var G__54257 = null;
var G__54258 = (0);
var G__54259 = (0);
seq__53487_54166 = G__54256;
chunk__53489_54167 = G__54257;
count__53490_54168 = G__54258;
i__53491_54169 = G__54259;
continue;
} else {
var G__54260 = cljs.core.next(seq__53487_54218__$1);
var G__54261 = null;
var G__54262 = (0);
var G__54263 = (0);
seq__53487_54166 = G__54260;
chunk__53489_54167 = G__54261;
count__53490_54168 = G__54262;
i__53491_54169 = G__54263;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54267 = arguments.length;
var i__4737__auto___54268 = (0);
while(true){
if((i__4737__auto___54268 < len__4736__auto___54267)){
args__4742__auto__.push((arguments[i__4737__auto___54268]));

var G__54269 = (i__4737__auto___54268 + (1));
i__4737__auto___54268 = G__54269;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53583){
var G__53584 = cljs.core.first(seq53583);
var seq53583__$1 = cljs.core.next(seq53583);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53584,seq53583__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__53605 = arguments.length;
switch (G__53605) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__49409__auto___54273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_53636){
var state_val_53637 = (state_53636[(1)]);
if((state_val_53637 === (1))){
var state_53636__$1 = state_53636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53636__$1,(2),once_or_cleanup);
} else {
if((state_val_53637 === (2))){
var inst_53632 = (state_53636[(2)]);
var inst_53634 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53636__$1 = (function (){var statearr_53649 = state_53636;
(statearr_53649[(7)] = inst_53632);

return statearr_53649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53636__$1,inst_53634);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49223__auto__ = null;
var shadow$dom$state_machine__49223__auto____0 = (function (){
var statearr_53655 = [null,null,null,null,null,null,null,null];
(statearr_53655[(0)] = shadow$dom$state_machine__49223__auto__);

(statearr_53655[(1)] = (1));

return statearr_53655;
});
var shadow$dom$state_machine__49223__auto____1 = (function (state_53636){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_53636);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e53658){var ex__49226__auto__ = e53658;
var statearr_53662_54276 = state_53636;
(statearr_53662_54276[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_53636[(4)]))){
var statearr_53664_54277 = state_53636;
(statearr_53664_54277[(1)] = cljs.core.first((state_53636[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54278 = state_53636;
state_53636 = G__54278;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
shadow$dom$state_machine__49223__auto__ = function(state_53636){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49223__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49223__auto____1.call(this,state_53636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49223__auto____0;
shadow$dom$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49223__auto____1;
return shadow$dom$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_53666 = f__49412__auto__();
(statearr_53666[(6)] = c__49409__auto___54273);

return statearr_53666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
