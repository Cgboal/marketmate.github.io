goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49504 = arguments.length;
switch (G__49504) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49510 = (function (f,blockable,meta49511){
this.f = f;
this.blockable = blockable;
this.meta49511 = meta49511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49512,meta49511__$1){
var self__ = this;
var _49512__$1 = this;
return (new cljs.core.async.t_cljs$core$async49510(self__.f,self__.blockable,meta49511__$1));
}));

(cljs.core.async.t_cljs$core$async49510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49512){
var self__ = this;
var _49512__$1 = this;
return self__.meta49511;
}));

(cljs.core.async.t_cljs$core$async49510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49511","meta49511",-1299404282,null)], null);
}));

(cljs.core.async.t_cljs$core$async49510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49510");

(cljs.core.async.t_cljs$core$async49510.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49510.
 */
cljs.core.async.__GT_t_cljs$core$async49510 = (function cljs$core$async$__GT_t_cljs$core$async49510(f__$1,blockable__$1,meta49511){
return (new cljs.core.async.t_cljs$core$async49510(f__$1,blockable__$1,meta49511));
});

}

return (new cljs.core.async.t_cljs$core$async49510(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__49546 = arguments.length;
switch (G__49546) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__49570 = arguments.length;
switch (G__49570) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__49584 = arguments.length;
switch (G__49584) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52254 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52254) : fn1.call(null,val_52254));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52254) : fn1.call(null,val_52254));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__49606 = arguments.length;
switch (G__49606) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___52260 = n;
var x_52261 = (0);
while(true){
if((x_52261 < n__4613__auto___52260)){
(a[x_52261] = x_52261);

var G__52264 = (x_52261 + (1));
x_52261 = G__52264;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49627 = (function (flag,meta49628){
this.flag = flag;
this.meta49628 = meta49628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49629,meta49628__$1){
var self__ = this;
var _49629__$1 = this;
return (new cljs.core.async.t_cljs$core$async49627(self__.flag,meta49628__$1));
}));

(cljs.core.async.t_cljs$core$async49627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49629){
var self__ = this;
var _49629__$1 = this;
return self__.meta49628;
}));

(cljs.core.async.t_cljs$core$async49627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async49627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49628","meta49628",1451469924,null)], null);
}));

(cljs.core.async.t_cljs$core$async49627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49627");

(cljs.core.async.t_cljs$core$async49627.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49627.
 */
cljs.core.async.__GT_t_cljs$core$async49627 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49627(flag__$1,meta49628){
return (new cljs.core.async.t_cljs$core$async49627(flag__$1,meta49628));
});

}

return (new cljs.core.async.t_cljs$core$async49627(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49643 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49643 = (function (flag,cb,meta49644){
this.flag = flag;
this.cb = cb;
this.meta49644 = meta49644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49645,meta49644__$1){
var self__ = this;
var _49645__$1 = this;
return (new cljs.core.async.t_cljs$core$async49643(self__.flag,self__.cb,meta49644__$1));
}));

(cljs.core.async.t_cljs$core$async49643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49645){
var self__ = this;
var _49645__$1 = this;
return self__.meta49644;
}));

(cljs.core.async.t_cljs$core$async49643.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async49643.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async49643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49644","meta49644",678711392,null)], null);
}));

(cljs.core.async.t_cljs$core$async49643.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49643");

(cljs.core.async.t_cljs$core$async49643.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49643");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49643.
 */
cljs.core.async.__GT_t_cljs$core$async49643 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49643(flag__$1,cb__$1,meta49644){
return (new cljs.core.async.t_cljs$core$async49643(flag__$1,cb__$1,meta49644));
});

}

return (new cljs.core.async.t_cljs$core$async49643(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49666_SHARP_){
var G__49676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49666_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49676) : fret.call(null,G__49676));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49667_SHARP_){
var G__49677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49667_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__49677) : fret.call(null,G__49677));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52276 = (i + (1));
i = G__52276;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52277 = arguments.length;
var i__4737__auto___52278 = (0);
while(true){
if((i__4737__auto___52278 < len__4736__auto___52277)){
args__4742__auto__.push((arguments[i__4737__auto___52278]));

var G__52279 = (i__4737__auto___52278 + (1));
i__4737__auto___52278 = G__52279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49699){
var map__49700 = p__49699;
var map__49700__$1 = (((((!((map__49700 == null))))?(((((map__49700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49700):map__49700);
var opts = map__49700__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49689){
var G__49690 = cljs.core.first(seq49689);
var seq49689__$1 = cljs.core.next(seq49689);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49690,seq49689__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__49720 = arguments.length;
switch (G__49720) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49409__auto___52287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_49796){
var state_val_49798 = (state_49796[(1)]);
if((state_val_49798 === (7))){
var inst_49788 = (state_49796[(2)]);
var state_49796__$1 = state_49796;
var statearr_49810_52288 = state_49796__$1;
(statearr_49810_52288[(2)] = inst_49788);

(statearr_49810_52288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (1))){
var state_49796__$1 = state_49796;
var statearr_49811_52290 = state_49796__$1;
(statearr_49811_52290[(2)] = null);

(statearr_49811_52290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (4))){
var inst_49762 = (state_49796[(7)]);
var inst_49762__$1 = (state_49796[(2)]);
var inst_49768 = (inst_49762__$1 == null);
var state_49796__$1 = (function (){var statearr_49812 = state_49796;
(statearr_49812[(7)] = inst_49762__$1);

return statearr_49812;
})();
if(cljs.core.truth_(inst_49768)){
var statearr_49814_52294 = state_49796__$1;
(statearr_49814_52294[(1)] = (5));

} else {
var statearr_49815_52296 = state_49796__$1;
(statearr_49815_52296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (13))){
var state_49796__$1 = state_49796;
var statearr_49816_52297 = state_49796__$1;
(statearr_49816_52297[(2)] = null);

(statearr_49816_52297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (6))){
var inst_49762 = (state_49796[(7)]);
var state_49796__$1 = state_49796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49796__$1,(11),to,inst_49762);
} else {
if((state_val_49798 === (3))){
var inst_49790 = (state_49796[(2)]);
var state_49796__$1 = state_49796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49796__$1,inst_49790);
} else {
if((state_val_49798 === (12))){
var state_49796__$1 = state_49796;
var statearr_49826_52299 = state_49796__$1;
(statearr_49826_52299[(2)] = null);

(statearr_49826_52299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (2))){
var state_49796__$1 = state_49796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49796__$1,(4),from);
} else {
if((state_val_49798 === (11))){
var inst_49778 = (state_49796[(2)]);
var state_49796__$1 = state_49796;
if(cljs.core.truth_(inst_49778)){
var statearr_49828_52301 = state_49796__$1;
(statearr_49828_52301[(1)] = (12));

} else {
var statearr_49829_52302 = state_49796__$1;
(statearr_49829_52302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (9))){
var state_49796__$1 = state_49796;
var statearr_49830_52303 = state_49796__$1;
(statearr_49830_52303[(2)] = null);

(statearr_49830_52303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (5))){
var state_49796__$1 = state_49796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49832_52304 = state_49796__$1;
(statearr_49832_52304[(1)] = (8));

} else {
var statearr_49833_52306 = state_49796__$1;
(statearr_49833_52306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (14))){
var inst_49786 = (state_49796[(2)]);
var state_49796__$1 = state_49796;
var statearr_49836_52309 = state_49796__$1;
(statearr_49836_52309[(2)] = inst_49786);

(statearr_49836_52309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (10))){
var inst_49775 = (state_49796[(2)]);
var state_49796__$1 = state_49796;
var statearr_49839_52310 = state_49796__$1;
(statearr_49839_52310[(2)] = inst_49775);

(statearr_49839_52310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (8))){
var inst_49771 = cljs.core.async.close_BANG_(to);
var state_49796__$1 = state_49796;
var statearr_49840_52311 = state_49796__$1;
(statearr_49840_52311[(2)] = inst_49771);

(statearr_49840_52311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_49844 = [null,null,null,null,null,null,null,null];
(statearr_49844[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_49844[(1)] = (1));

return statearr_49844;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_49796){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_49796);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e49846){var ex__49226__auto__ = e49846;
var statearr_49849_52314 = state_49796;
(statearr_49849_52314[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_49796[(4)]))){
var statearr_49853_52316 = state_49796;
(statearr_49853_52316[(1)] = cljs.core.first((state_49796[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52317 = state_49796;
state_49796 = G__52317;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_49796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_49796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_49854 = f__49412__auto__();
(statearr_49854[(6)] = c__49409__auto___52287);

return statearr_49854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__49864){
var vec__49867 = p__49864;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49867,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49867,(1),null);
var job = vec__49867;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__49409__auto___52325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_49877){
var state_val_49878 = (state_49877[(1)]);
if((state_val_49878 === (1))){
var state_49877__$1 = state_49877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49877__$1,(2),res,v);
} else {
if((state_val_49878 === (2))){
var inst_49874 = (state_49877[(2)]);
var inst_49875 = cljs.core.async.close_BANG_(res);
var state_49877__$1 = (function (){var statearr_49889 = state_49877;
(statearr_49889[(7)] = inst_49874);

return statearr_49889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49877__$1,inst_49875);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0 = (function (){
var statearr_49891 = [null,null,null,null,null,null,null,null];
(statearr_49891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__);

(statearr_49891[(1)] = (1));

return statearr_49891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1 = (function (state_49877){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_49877);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e49894){var ex__49226__auto__ = e49894;
var statearr_49896_52349 = state_49877;
(statearr_49896_52349[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_49877[(4)]))){
var statearr_49897_52350 = state_49877;
(statearr_49897_52350[(1)] = cljs.core.first((state_49877[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52353 = state_49877;
state_49877 = G__52353;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = function(state_49877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1.call(this,state_49877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_49907 = f__49412__auto__();
(statearr_49907[(6)] = c__49409__auto___52325);

return statearr_49907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49910){
var vec__49912 = p__49910;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49912,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49912,(1),null);
var job = vec__49912;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___52355 = n;
var __52356 = (0);
while(true){
if((__52356 < n__4613__auto___52355)){
var G__49923_52357 = type;
var G__49923_52358__$1 = (((G__49923_52357 instanceof cljs.core.Keyword))?G__49923_52357.fqn:null);
switch (G__49923_52358__$1) {
case "compute":
var c__49409__auto___52360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52356,c__49409__auto___52360,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async){
return (function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = ((function (__52356,c__49409__auto___52360,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async){
return (function (state_49941){
var state_val_49942 = (state_49941[(1)]);
if((state_val_49942 === (1))){
var state_49941__$1 = state_49941;
var statearr_49945_52363 = state_49941__$1;
(statearr_49945_52363[(2)] = null);

(statearr_49945_52363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49942 === (2))){
var state_49941__$1 = state_49941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49941__$1,(4),jobs);
} else {
if((state_val_49942 === (3))){
var inst_49939 = (state_49941[(2)]);
var state_49941__$1 = state_49941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49941__$1,inst_49939);
} else {
if((state_val_49942 === (4))){
var inst_49929 = (state_49941[(2)]);
var inst_49930 = process(inst_49929);
var state_49941__$1 = state_49941;
if(cljs.core.truth_(inst_49930)){
var statearr_49953_52368 = state_49941__$1;
(statearr_49953_52368[(1)] = (5));

} else {
var statearr_49955_52369 = state_49941__$1;
(statearr_49955_52369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49942 === (5))){
var state_49941__$1 = state_49941;
var statearr_49956_52370 = state_49941__$1;
(statearr_49956_52370[(2)] = null);

(statearr_49956_52370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49942 === (6))){
var state_49941__$1 = state_49941;
var statearr_49957_52371 = state_49941__$1;
(statearr_49957_52371[(2)] = null);

(statearr_49957_52371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49942 === (7))){
var inst_49937 = (state_49941[(2)]);
var state_49941__$1 = state_49941;
var statearr_49961_52372 = state_49941__$1;
(statearr_49961_52372[(2)] = inst_49937);

(statearr_49961_52372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52356,c__49409__auto___52360,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async))
;
return ((function (__52356,switch__49222__auto__,c__49409__auto___52360,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0 = (function (){
var statearr_49970 = [null,null,null,null,null,null,null];
(statearr_49970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__);

(statearr_49970[(1)] = (1));

return statearr_49970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1 = (function (state_49941){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_49941);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e49972){var ex__49226__auto__ = e49972;
var statearr_49974_52379 = state_49941;
(statearr_49974_52379[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_49941[(4)]))){
var statearr_49977_52381 = state_49941;
(statearr_49977_52381[(1)] = cljs.core.first((state_49941[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52382 = state_49941;
state_49941 = G__52382;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = function(state_49941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1.call(this,state_49941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__;
})()
;})(__52356,switch__49222__auto__,c__49409__auto___52360,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async))
})();
var state__49413__auto__ = (function (){var statearr_49981 = f__49412__auto__();
(statearr_49981[(6)] = c__49409__auto___52360);

return statearr_49981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
});})(__52356,c__49409__auto___52360,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async))
);


break;
case "async":
var c__49409__auto___52384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52356,c__49409__auto___52384,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async){
return (function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = ((function (__52356,c__49409__auto___52384,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async){
return (function (state_50009){
var state_val_50010 = (state_50009[(1)]);
if((state_val_50010 === (1))){
var state_50009__$1 = state_50009;
var statearr_50015_52385 = state_50009__$1;
(statearr_50015_52385[(2)] = null);

(statearr_50015_52385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50010 === (2))){
var state_50009__$1 = state_50009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50009__$1,(4),jobs);
} else {
if((state_val_50010 === (3))){
var inst_50006 = (state_50009[(2)]);
var state_50009__$1 = state_50009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50009__$1,inst_50006);
} else {
if((state_val_50010 === (4))){
var inst_49993 = (state_50009[(2)]);
var inst_49995 = async(inst_49993);
var state_50009__$1 = state_50009;
if(cljs.core.truth_(inst_49995)){
var statearr_50023_52387 = state_50009__$1;
(statearr_50023_52387[(1)] = (5));

} else {
var statearr_50025_52392 = state_50009__$1;
(statearr_50025_52392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50010 === (5))){
var state_50009__$1 = state_50009;
var statearr_50026_52394 = state_50009__$1;
(statearr_50026_52394[(2)] = null);

(statearr_50026_52394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50010 === (6))){
var state_50009__$1 = state_50009;
var statearr_50027_52400 = state_50009__$1;
(statearr_50027_52400[(2)] = null);

(statearr_50027_52400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50010 === (7))){
var inst_50004 = (state_50009[(2)]);
var state_50009__$1 = state_50009;
var statearr_50031_52408 = state_50009__$1;
(statearr_50031_52408[(2)] = inst_50004);

(statearr_50031_52408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52356,c__49409__auto___52384,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async))
;
return ((function (__52356,switch__49222__auto__,c__49409__auto___52384,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0 = (function (){
var statearr_50039 = [null,null,null,null,null,null,null];
(statearr_50039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__);

(statearr_50039[(1)] = (1));

return statearr_50039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1 = (function (state_50009){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50009);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50040){var ex__49226__auto__ = e50040;
var statearr_50041_52418 = state_50009;
(statearr_50041_52418[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50009[(4)]))){
var statearr_50042_52420 = state_50009;
(statearr_50042_52420[(1)] = cljs.core.first((state_50009[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52421 = state_50009;
state_50009 = G__52421;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = function(state_50009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1.call(this,state_50009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__;
})()
;})(__52356,switch__49222__auto__,c__49409__auto___52384,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async))
})();
var state__49413__auto__ = (function (){var statearr_50044 = f__49412__auto__();
(statearr_50044[(6)] = c__49409__auto___52384);

return statearr_50044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
});})(__52356,c__49409__auto___52384,G__49923_52357,G__49923_52358__$1,n__4613__auto___52355,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49923_52358__$1)].join('')));

}

var G__52422 = (__52356 + (1));
__52356 = G__52422;
continue;
} else {
}
break;
}

var c__49409__auto___52423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50078){
var state_val_50079 = (state_50078[(1)]);
if((state_val_50079 === (7))){
var inst_50070 = (state_50078[(2)]);
var state_50078__$1 = state_50078;
var statearr_50091_52431 = state_50078__$1;
(statearr_50091_52431[(2)] = inst_50070);

(statearr_50091_52431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50079 === (1))){
var state_50078__$1 = state_50078;
var statearr_50092_52437 = state_50078__$1;
(statearr_50092_52437[(2)] = null);

(statearr_50092_52437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50079 === (4))){
var inst_50051 = (state_50078[(7)]);
var inst_50051__$1 = (state_50078[(2)]);
var inst_50053 = (inst_50051__$1 == null);
var state_50078__$1 = (function (){var statearr_50096 = state_50078;
(statearr_50096[(7)] = inst_50051__$1);

return statearr_50096;
})();
if(cljs.core.truth_(inst_50053)){
var statearr_50097_52447 = state_50078__$1;
(statearr_50097_52447[(1)] = (5));

} else {
var statearr_50098_52448 = state_50078__$1;
(statearr_50098_52448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50079 === (6))){
var inst_50057 = (state_50078[(8)]);
var inst_50051 = (state_50078[(7)]);
var inst_50057__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50062 = [inst_50051,inst_50057__$1];
var inst_50063 = (new cljs.core.PersistentVector(null,2,(5),inst_50060,inst_50062,null));
var state_50078__$1 = (function (){var statearr_50103 = state_50078;
(statearr_50103[(8)] = inst_50057__$1);

return statearr_50103;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50078__$1,(8),jobs,inst_50063);
} else {
if((state_val_50079 === (3))){
var inst_50073 = (state_50078[(2)]);
var state_50078__$1 = state_50078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50078__$1,inst_50073);
} else {
if((state_val_50079 === (2))){
var state_50078__$1 = state_50078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50078__$1,(4),from);
} else {
if((state_val_50079 === (9))){
var inst_50067 = (state_50078[(2)]);
var state_50078__$1 = (function (){var statearr_50104 = state_50078;
(statearr_50104[(9)] = inst_50067);

return statearr_50104;
})();
var statearr_50108_52459 = state_50078__$1;
(statearr_50108_52459[(2)] = null);

(statearr_50108_52459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50079 === (5))){
var inst_50055 = cljs.core.async.close_BANG_(jobs);
var state_50078__$1 = state_50078;
var statearr_50109_52466 = state_50078__$1;
(statearr_50109_52466[(2)] = inst_50055);

(statearr_50109_52466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50079 === (8))){
var inst_50057 = (state_50078[(8)]);
var inst_50065 = (state_50078[(2)]);
var state_50078__$1 = (function (){var statearr_50115 = state_50078;
(statearr_50115[(10)] = inst_50065);

return statearr_50115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50078__$1,(9),results,inst_50057);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0 = (function (){
var statearr_50116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__);

(statearr_50116[(1)] = (1));

return statearr_50116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1 = (function (state_50078){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50078);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50120){var ex__49226__auto__ = e50120;
var statearr_50122_52479 = state_50078;
(statearr_50122_52479[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50078[(4)]))){
var statearr_50123_52480 = state_50078;
(statearr_50123_52480[(1)] = cljs.core.first((state_50078[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52481 = state_50078;
state_50078 = G__52481;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = function(state_50078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1.call(this,state_50078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50126 = f__49412__auto__();
(statearr_50126[(6)] = c__49409__auto___52423);

return statearr_50126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


var c__49409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50179){
var state_val_50180 = (state_50179[(1)]);
if((state_val_50180 === (7))){
var inst_50172 = (state_50179[(2)]);
var state_50179__$1 = state_50179;
var statearr_50191_52486 = state_50179__$1;
(statearr_50191_52486[(2)] = inst_50172);

(statearr_50191_52486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (20))){
var state_50179__$1 = state_50179;
var statearr_50197_52487 = state_50179__$1;
(statearr_50197_52487[(2)] = null);

(statearr_50197_52487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (1))){
var state_50179__$1 = state_50179;
var statearr_50198_52488 = state_50179__$1;
(statearr_50198_52488[(2)] = null);

(statearr_50198_52488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (4))){
var inst_50135 = (state_50179[(7)]);
var inst_50135__$1 = (state_50179[(2)]);
var inst_50136 = (inst_50135__$1 == null);
var state_50179__$1 = (function (){var statearr_50200 = state_50179;
(statearr_50200[(7)] = inst_50135__$1);

return statearr_50200;
})();
if(cljs.core.truth_(inst_50136)){
var statearr_50203_52489 = state_50179__$1;
(statearr_50203_52489[(1)] = (5));

} else {
var statearr_50204_52490 = state_50179__$1;
(statearr_50204_52490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (15))){
var inst_50148 = (state_50179[(8)]);
var state_50179__$1 = state_50179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50179__$1,(18),to,inst_50148);
} else {
if((state_val_50180 === (21))){
var inst_50167 = (state_50179[(2)]);
var state_50179__$1 = state_50179;
var statearr_50207_52491 = state_50179__$1;
(statearr_50207_52491[(2)] = inst_50167);

(statearr_50207_52491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (13))){
var inst_50169 = (state_50179[(2)]);
var state_50179__$1 = (function (){var statearr_50210 = state_50179;
(statearr_50210[(9)] = inst_50169);

return statearr_50210;
})();
var statearr_50211_52493 = state_50179__$1;
(statearr_50211_52493[(2)] = null);

(statearr_50211_52493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (6))){
var inst_50135 = (state_50179[(7)]);
var state_50179__$1 = state_50179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50179__$1,(11),inst_50135);
} else {
if((state_val_50180 === (17))){
var inst_50159 = (state_50179[(2)]);
var state_50179__$1 = state_50179;
if(cljs.core.truth_(inst_50159)){
var statearr_50212_52494 = state_50179__$1;
(statearr_50212_52494[(1)] = (19));

} else {
var statearr_50214_52495 = state_50179__$1;
(statearr_50214_52495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (3))){
var inst_50175 = (state_50179[(2)]);
var state_50179__$1 = state_50179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50179__$1,inst_50175);
} else {
if((state_val_50180 === (12))){
var inst_50145 = (state_50179[(10)]);
var state_50179__$1 = state_50179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50179__$1,(14),inst_50145);
} else {
if((state_val_50180 === (2))){
var state_50179__$1 = state_50179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50179__$1,(4),results);
} else {
if((state_val_50180 === (19))){
var state_50179__$1 = state_50179;
var statearr_50221_52501 = state_50179__$1;
(statearr_50221_52501[(2)] = null);

(statearr_50221_52501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (11))){
var inst_50145 = (state_50179[(2)]);
var state_50179__$1 = (function (){var statearr_50222 = state_50179;
(statearr_50222[(10)] = inst_50145);

return statearr_50222;
})();
var statearr_50223_52504 = state_50179__$1;
(statearr_50223_52504[(2)] = null);

(statearr_50223_52504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (9))){
var state_50179__$1 = state_50179;
var statearr_50225_52505 = state_50179__$1;
(statearr_50225_52505[(2)] = null);

(statearr_50225_52505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (5))){
var state_50179__$1 = state_50179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50229_52506 = state_50179__$1;
(statearr_50229_52506[(1)] = (8));

} else {
var statearr_50232_52507 = state_50179__$1;
(statearr_50232_52507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (14))){
var inst_50148 = (state_50179[(8)]);
var inst_50148__$1 = (state_50179[(2)]);
var inst_50150 = (inst_50148__$1 == null);
var inst_50152 = cljs.core.not(inst_50150);
var state_50179__$1 = (function (){var statearr_50236 = state_50179;
(statearr_50236[(8)] = inst_50148__$1);

return statearr_50236;
})();
if(inst_50152){
var statearr_50240_52508 = state_50179__$1;
(statearr_50240_52508[(1)] = (15));

} else {
var statearr_50242_52509 = state_50179__$1;
(statearr_50242_52509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (16))){
var state_50179__$1 = state_50179;
var statearr_50243_52510 = state_50179__$1;
(statearr_50243_52510[(2)] = false);

(statearr_50243_52510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (10))){
var inst_50142 = (state_50179[(2)]);
var state_50179__$1 = state_50179;
var statearr_50247_52516 = state_50179__$1;
(statearr_50247_52516[(2)] = inst_50142);

(statearr_50247_52516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (18))){
var inst_50156 = (state_50179[(2)]);
var state_50179__$1 = state_50179;
var statearr_50248_52523 = state_50179__$1;
(statearr_50248_52523[(2)] = inst_50156);

(statearr_50248_52523[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50180 === (8))){
var inst_50139 = cljs.core.async.close_BANG_(to);
var state_50179__$1 = state_50179;
var statearr_50249_52536 = state_50179__$1;
(statearr_50249_52536[(2)] = inst_50139);

(statearr_50249_52536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0 = (function (){
var statearr_50250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__);

(statearr_50250[(1)] = (1));

return statearr_50250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1 = (function (state_50179){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50179);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50254){var ex__49226__auto__ = e50254;
var statearr_50255_52545 = state_50179;
(statearr_50255_52545[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50179[(4)]))){
var statearr_50256_52547 = state_50179;
(statearr_50256_52547[(1)] = cljs.core.first((state_50179[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52550 = state_50179;
state_50179 = G__52550;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__ = function(state_50179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1.call(this,state_50179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50259 = f__49412__auto__();
(statearr_50259[(6)] = c__49409__auto__);

return statearr_50259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));

return c__49409__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50261 = arguments.length;
switch (G__50261) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50270 = arguments.length;
switch (G__50270) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50283 = arguments.length;
switch (G__50283) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__49409__auto___52573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50322){
var state_val_50323 = (state_50322[(1)]);
if((state_val_50323 === (7))){
var inst_50318 = (state_50322[(2)]);
var state_50322__$1 = state_50322;
var statearr_50327_52575 = state_50322__$1;
(statearr_50327_52575[(2)] = inst_50318);

(statearr_50327_52575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (1))){
var state_50322__$1 = state_50322;
var statearr_50328_52579 = state_50322__$1;
(statearr_50328_52579[(2)] = null);

(statearr_50328_52579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (4))){
var inst_50297 = (state_50322[(7)]);
var inst_50297__$1 = (state_50322[(2)]);
var inst_50299 = (inst_50297__$1 == null);
var state_50322__$1 = (function (){var statearr_50329 = state_50322;
(statearr_50329[(7)] = inst_50297__$1);

return statearr_50329;
})();
if(cljs.core.truth_(inst_50299)){
var statearr_50330_52584 = state_50322__$1;
(statearr_50330_52584[(1)] = (5));

} else {
var statearr_50331_52585 = state_50322__$1;
(statearr_50331_52585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (13))){
var state_50322__$1 = state_50322;
var statearr_50332_52587 = state_50322__$1;
(statearr_50332_52587[(2)] = null);

(statearr_50332_52587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (6))){
var inst_50297 = (state_50322[(7)]);
var inst_50305 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50297) : p.call(null,inst_50297));
var state_50322__$1 = state_50322;
if(cljs.core.truth_(inst_50305)){
var statearr_50335_52589 = state_50322__$1;
(statearr_50335_52589[(1)] = (9));

} else {
var statearr_50336_52590 = state_50322__$1;
(statearr_50336_52590[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (3))){
var inst_50320 = (state_50322[(2)]);
var state_50322__$1 = state_50322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50322__$1,inst_50320);
} else {
if((state_val_50323 === (12))){
var state_50322__$1 = state_50322;
var statearr_50338_52596 = state_50322__$1;
(statearr_50338_52596[(2)] = null);

(statearr_50338_52596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (2))){
var state_50322__$1 = state_50322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50322__$1,(4),ch);
} else {
if((state_val_50323 === (11))){
var inst_50297 = (state_50322[(7)]);
var inst_50309 = (state_50322[(2)]);
var state_50322__$1 = state_50322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50322__$1,(8),inst_50309,inst_50297);
} else {
if((state_val_50323 === (9))){
var state_50322__$1 = state_50322;
var statearr_50339_52598 = state_50322__$1;
(statearr_50339_52598[(2)] = tc);

(statearr_50339_52598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (5))){
var inst_50302 = cljs.core.async.close_BANG_(tc);
var inst_50303 = cljs.core.async.close_BANG_(fc);
var state_50322__$1 = (function (){var statearr_50340 = state_50322;
(statearr_50340[(8)] = inst_50302);

return statearr_50340;
})();
var statearr_50343_52603 = state_50322__$1;
(statearr_50343_52603[(2)] = inst_50303);

(statearr_50343_52603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (14))){
var inst_50316 = (state_50322[(2)]);
var state_50322__$1 = state_50322;
var statearr_50345_52607 = state_50322__$1;
(statearr_50345_52607[(2)] = inst_50316);

(statearr_50345_52607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (10))){
var state_50322__$1 = state_50322;
var statearr_50346_52608 = state_50322__$1;
(statearr_50346_52608[(2)] = fc);

(statearr_50346_52608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50323 === (8))){
var inst_50311 = (state_50322[(2)]);
var state_50322__$1 = state_50322;
if(cljs.core.truth_(inst_50311)){
var statearr_50347_52612 = state_50322__$1;
(statearr_50347_52612[(1)] = (12));

} else {
var statearr_50349_52613 = state_50322__$1;
(statearr_50349_52613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_50353 = [null,null,null,null,null,null,null,null,null];
(statearr_50353[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_50353[(1)] = (1));

return statearr_50353;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_50322){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50322);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50354){var ex__49226__auto__ = e50354;
var statearr_50356_52617 = state_50322;
(statearr_50356_52617[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50322[(4)]))){
var statearr_50357_52621 = state_50322;
(statearr_50357_52621[(1)] = cljs.core.first((state_50322[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52622 = state_50322;
state_50322 = G__52622;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_50322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_50322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50364 = f__49412__auto__();
(statearr_50364[(6)] = c__49409__auto___52573);

return statearr_50364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50389){
var state_val_50390 = (state_50389[(1)]);
if((state_val_50390 === (7))){
var inst_50385 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
var statearr_50394_52626 = state_50389__$1;
(statearr_50394_52626[(2)] = inst_50385);

(statearr_50394_52626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (1))){
var inst_50366 = init;
var inst_50367 = inst_50366;
var state_50389__$1 = (function (){var statearr_50395 = state_50389;
(statearr_50395[(7)] = inst_50367);

return statearr_50395;
})();
var statearr_50397_52627 = state_50389__$1;
(statearr_50397_52627[(2)] = null);

(statearr_50397_52627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (4))){
var inst_50371 = (state_50389[(8)]);
var inst_50371__$1 = (state_50389[(2)]);
var inst_50372 = (inst_50371__$1 == null);
var state_50389__$1 = (function (){var statearr_50404 = state_50389;
(statearr_50404[(8)] = inst_50371__$1);

return statearr_50404;
})();
if(cljs.core.truth_(inst_50372)){
var statearr_50405_52628 = state_50389__$1;
(statearr_50405_52628[(1)] = (5));

} else {
var statearr_50406_52629 = state_50389__$1;
(statearr_50406_52629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (6))){
var inst_50367 = (state_50389[(7)]);
var inst_50371 = (state_50389[(8)]);
var inst_50376 = (state_50389[(9)]);
var inst_50376__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50367,inst_50371) : f.call(null,inst_50367,inst_50371));
var inst_50377 = cljs.core.reduced_QMARK_(inst_50376__$1);
var state_50389__$1 = (function (){var statearr_50408 = state_50389;
(statearr_50408[(9)] = inst_50376__$1);

return statearr_50408;
})();
if(inst_50377){
var statearr_50409_52633 = state_50389__$1;
(statearr_50409_52633[(1)] = (8));

} else {
var statearr_50410_52634 = state_50389__$1;
(statearr_50410_52634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (3))){
var inst_50387 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50389__$1,inst_50387);
} else {
if((state_val_50390 === (2))){
var state_50389__$1 = state_50389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50389__$1,(4),ch);
} else {
if((state_val_50390 === (9))){
var inst_50376 = (state_50389[(9)]);
var inst_50367 = inst_50376;
var state_50389__$1 = (function (){var statearr_50417 = state_50389;
(statearr_50417[(7)] = inst_50367);

return statearr_50417;
})();
var statearr_50421_52635 = state_50389__$1;
(statearr_50421_52635[(2)] = null);

(statearr_50421_52635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (5))){
var inst_50367 = (state_50389[(7)]);
var state_50389__$1 = state_50389;
var statearr_50424_52636 = state_50389__$1;
(statearr_50424_52636[(2)] = inst_50367);

(statearr_50424_52636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (10))){
var inst_50383 = (state_50389[(2)]);
var state_50389__$1 = state_50389;
var statearr_50425_52640 = state_50389__$1;
(statearr_50425_52640[(2)] = inst_50383);

(statearr_50425_52640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50390 === (8))){
var inst_50376 = (state_50389[(9)]);
var inst_50379 = cljs.core.deref(inst_50376);
var state_50389__$1 = state_50389;
var statearr_50426_52641 = state_50389__$1;
(statearr_50426_52641[(2)] = inst_50379);

(statearr_50426_52641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49223__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49223__auto____0 = (function (){
var statearr_50428 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50428[(0)] = cljs$core$async$reduce_$_state_machine__49223__auto__);

(statearr_50428[(1)] = (1));

return statearr_50428;
});
var cljs$core$async$reduce_$_state_machine__49223__auto____1 = (function (state_50389){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50389);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50430){var ex__49226__auto__ = e50430;
var statearr_50431_52644 = state_50389;
(statearr_50431_52644[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50389[(4)]))){
var statearr_50432_52645 = state_50389;
(statearr_50432_52645[(1)] = cljs.core.first((state_50389[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52646 = state_50389;
state_50389 = G__52646;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49223__auto__ = function(state_50389){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49223__auto____1.call(this,state_50389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49223__auto____0;
cljs$core$async$reduce_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49223__auto____1;
return cljs$core$async$reduce_$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50433 = f__49412__auto__();
(statearr_50433[(6)] = c__49409__auto__);

return statearr_50433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));

return c__49409__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__49409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50445){
var state_val_50446 = (state_50445[(1)]);
if((state_val_50446 === (1))){
var inst_50439 = cljs.core.async.reduce(f__$1,init,ch);
var state_50445__$1 = state_50445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50445__$1,(2),inst_50439);
} else {
if((state_val_50446 === (2))){
var inst_50441 = (state_50445[(2)]);
var inst_50442 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50441) : f__$1.call(null,inst_50441));
var state_50445__$1 = state_50445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50445__$1,inst_50442);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49223__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49223__auto____0 = (function (){
var statearr_50456 = [null,null,null,null,null,null,null];
(statearr_50456[(0)] = cljs$core$async$transduce_$_state_machine__49223__auto__);

(statearr_50456[(1)] = (1));

return statearr_50456;
});
var cljs$core$async$transduce_$_state_machine__49223__auto____1 = (function (state_50445){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50445);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50457){var ex__49226__auto__ = e50457;
var statearr_50458_52650 = state_50445;
(statearr_50458_52650[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50445[(4)]))){
var statearr_50459_52651 = state_50445;
(statearr_50459_52651[(1)] = cljs.core.first((state_50445[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52653 = state_50445;
state_50445 = G__52653;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49223__auto__ = function(state_50445){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49223__auto____1.call(this,state_50445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49223__auto____0;
cljs$core$async$transduce_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49223__auto____1;
return cljs$core$async$transduce_$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50464 = f__49412__auto__();
(statearr_50464[(6)] = c__49409__auto__);

return statearr_50464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));

return c__49409__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50467 = arguments.length;
switch (G__50467) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50509){
var state_val_50510 = (state_50509[(1)]);
if((state_val_50510 === (7))){
var inst_50488 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50515_52658 = state_50509__$1;
(statearr_50515_52658[(2)] = inst_50488);

(statearr_50515_52658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (1))){
var inst_50476 = cljs.core.seq(coll);
var inst_50478 = inst_50476;
var state_50509__$1 = (function (){var statearr_50517 = state_50509;
(statearr_50517[(7)] = inst_50478);

return statearr_50517;
})();
var statearr_50518_52660 = state_50509__$1;
(statearr_50518_52660[(2)] = null);

(statearr_50518_52660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (4))){
var inst_50478 = (state_50509[(7)]);
var inst_50486 = cljs.core.first(inst_50478);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50509__$1,(7),ch,inst_50486);
} else {
if((state_val_50510 === (13))){
var inst_50502 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50519_52668 = state_50509__$1;
(statearr_50519_52668[(2)] = inst_50502);

(statearr_50519_52668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (6))){
var inst_50491 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50491)){
var statearr_50520_52670 = state_50509__$1;
(statearr_50520_52670[(1)] = (8));

} else {
var statearr_50526_52671 = state_50509__$1;
(statearr_50526_52671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (3))){
var inst_50506 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50509__$1,inst_50506);
} else {
if((state_val_50510 === (12))){
var state_50509__$1 = state_50509;
var statearr_50527_52672 = state_50509__$1;
(statearr_50527_52672[(2)] = null);

(statearr_50527_52672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (2))){
var inst_50478 = (state_50509[(7)]);
var state_50509__$1 = state_50509;
if(cljs.core.truth_(inst_50478)){
var statearr_50528_52677 = state_50509__$1;
(statearr_50528_52677[(1)] = (4));

} else {
var statearr_50529_52679 = state_50509__$1;
(statearr_50529_52679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (11))){
var inst_50499 = cljs.core.async.close_BANG_(ch);
var state_50509__$1 = state_50509;
var statearr_50530_52680 = state_50509__$1;
(statearr_50530_52680[(2)] = inst_50499);

(statearr_50530_52680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (9))){
var state_50509__$1 = state_50509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50531_52681 = state_50509__$1;
(statearr_50531_52681[(1)] = (11));

} else {
var statearr_50533_52682 = state_50509__$1;
(statearr_50533_52682[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (5))){
var inst_50478 = (state_50509[(7)]);
var state_50509__$1 = state_50509;
var statearr_50536_52683 = state_50509__$1;
(statearr_50536_52683[(2)] = inst_50478);

(statearr_50536_52683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (10))){
var inst_50504 = (state_50509[(2)]);
var state_50509__$1 = state_50509;
var statearr_50537_52687 = state_50509__$1;
(statearr_50537_52687[(2)] = inst_50504);

(statearr_50537_52687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50510 === (8))){
var inst_50478 = (state_50509[(7)]);
var inst_50494 = cljs.core.next(inst_50478);
var inst_50478__$1 = inst_50494;
var state_50509__$1 = (function (){var statearr_50538 = state_50509;
(statearr_50538[(7)] = inst_50478__$1);

return statearr_50538;
})();
var statearr_50539_52689 = state_50509__$1;
(statearr_50539_52689[(2)] = null);

(statearr_50539_52689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_50542 = [null,null,null,null,null,null,null,null];
(statearr_50542[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_50542[(1)] = (1));

return statearr_50542;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_50509){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50509);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50544){var ex__49226__auto__ = e50544;
var statearr_50545_52692 = state_50509;
(statearr_50545_52692[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50509[(4)]))){
var statearr_50546_52694 = state_50509;
(statearr_50546_52694[(1)] = cljs.core.first((state_50509[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52696 = state_50509;
state_50509 = G__52696;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_50509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_50509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50547 = f__49412__auto__();
(statearr_50547[(6)] = c__49409__auto__);

return statearr_50547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));

return c__49409__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50550 = arguments.length;
switch (G__50550) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52717 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52717(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52732 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52732(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52743 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52743(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52756 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52756(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50586 = (function (ch,cs,meta50587){
this.ch = ch;
this.cs = cs;
this.meta50587 = meta50587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50588,meta50587__$1){
var self__ = this;
var _50588__$1 = this;
return (new cljs.core.async.t_cljs$core$async50586(self__.ch,self__.cs,meta50587__$1));
}));

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50588){
var self__ = this;
var _50588__$1 = this;
return self__.meta50587;
}));

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50587","meta50587",305440914,null)], null);
}));

(cljs.core.async.t_cljs$core$async50586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50586");

(cljs.core.async.t_cljs$core$async50586.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50586.
 */
cljs.core.async.__GT_t_cljs$core$async50586 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50586(ch__$1,cs__$1,meta50587){
return (new cljs.core.async.t_cljs$core$async50586(ch__$1,cs__$1,meta50587));
});

}

return (new cljs.core.async.t_cljs$core$async50586(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__49409__auto___52802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_50748){
var state_val_50752 = (state_50748[(1)]);
if((state_val_50752 === (7))){
var inst_50744 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50760_52804 = state_50748__$1;
(statearr_50760_52804[(2)] = inst_50744);

(statearr_50760_52804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (20))){
var inst_50641 = (state_50748[(7)]);
var inst_50654 = cljs.core.first(inst_50641);
var inst_50655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(0),null);
var inst_50656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(1),null);
var state_50748__$1 = (function (){var statearr_50761 = state_50748;
(statearr_50761[(8)] = inst_50655);

return statearr_50761;
})();
if(cljs.core.truth_(inst_50656)){
var statearr_50762_52805 = state_50748__$1;
(statearr_50762_52805[(1)] = (22));

} else {
var statearr_50766_52807 = state_50748__$1;
(statearr_50766_52807[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (27))){
var inst_50684 = (state_50748[(9)]);
var inst_50686 = (state_50748[(10)]);
var inst_50605 = (state_50748[(11)]);
var inst_50691 = (state_50748[(12)]);
var inst_50691__$1 = cljs.core._nth(inst_50684,inst_50686);
var inst_50692 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50691__$1,inst_50605,done);
var state_50748__$1 = (function (){var statearr_50768 = state_50748;
(statearr_50768[(12)] = inst_50691__$1);

return statearr_50768;
})();
if(cljs.core.truth_(inst_50692)){
var statearr_50769_52809 = state_50748__$1;
(statearr_50769_52809[(1)] = (30));

} else {
var statearr_50770_52810 = state_50748__$1;
(statearr_50770_52810[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (1))){
var state_50748__$1 = state_50748;
var statearr_50771_52812 = state_50748__$1;
(statearr_50771_52812[(2)] = null);

(statearr_50771_52812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (24))){
var inst_50641 = (state_50748[(7)]);
var inst_50661 = (state_50748[(2)]);
var inst_50662 = cljs.core.next(inst_50641);
var inst_50614 = inst_50662;
var inst_50615 = null;
var inst_50616 = (0);
var inst_50617 = (0);
var state_50748__$1 = (function (){var statearr_50772 = state_50748;
(statearr_50772[(13)] = inst_50617);

(statearr_50772[(14)] = inst_50661);

(statearr_50772[(15)] = inst_50615);

(statearr_50772[(16)] = inst_50614);

(statearr_50772[(17)] = inst_50616);

return statearr_50772;
})();
var statearr_50773_52825 = state_50748__$1;
(statearr_50773_52825[(2)] = null);

(statearr_50773_52825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (39))){
var state_50748__$1 = state_50748;
var statearr_50777_52826 = state_50748__$1;
(statearr_50777_52826[(2)] = null);

(statearr_50777_52826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (4))){
var inst_50605 = (state_50748[(11)]);
var inst_50605__$1 = (state_50748[(2)]);
var inst_50606 = (inst_50605__$1 == null);
var state_50748__$1 = (function (){var statearr_50778 = state_50748;
(statearr_50778[(11)] = inst_50605__$1);

return statearr_50778;
})();
if(cljs.core.truth_(inst_50606)){
var statearr_50779_52829 = state_50748__$1;
(statearr_50779_52829[(1)] = (5));

} else {
var statearr_50780_52830 = state_50748__$1;
(statearr_50780_52830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (15))){
var inst_50617 = (state_50748[(13)]);
var inst_50615 = (state_50748[(15)]);
var inst_50614 = (state_50748[(16)]);
var inst_50616 = (state_50748[(17)]);
var inst_50633 = (state_50748[(2)]);
var inst_50638 = (inst_50617 + (1));
var tmp50774 = inst_50615;
var tmp50775 = inst_50614;
var tmp50776 = inst_50616;
var inst_50614__$1 = tmp50775;
var inst_50615__$1 = tmp50774;
var inst_50616__$1 = tmp50776;
var inst_50617__$1 = inst_50638;
var state_50748__$1 = (function (){var statearr_50781 = state_50748;
(statearr_50781[(18)] = inst_50633);

(statearr_50781[(13)] = inst_50617__$1);

(statearr_50781[(15)] = inst_50615__$1);

(statearr_50781[(16)] = inst_50614__$1);

(statearr_50781[(17)] = inst_50616__$1);

return statearr_50781;
})();
var statearr_50786_52834 = state_50748__$1;
(statearr_50786_52834[(2)] = null);

(statearr_50786_52834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (21))){
var inst_50665 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50790_52835 = state_50748__$1;
(statearr_50790_52835[(2)] = inst_50665);

(statearr_50790_52835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (31))){
var inst_50691 = (state_50748[(12)]);
var inst_50695 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50691);
var state_50748__$1 = state_50748;
var statearr_50791_52836 = state_50748__$1;
(statearr_50791_52836[(2)] = inst_50695);

(statearr_50791_52836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (32))){
var inst_50684 = (state_50748[(9)]);
var inst_50683 = (state_50748[(19)]);
var inst_50686 = (state_50748[(10)]);
var inst_50685 = (state_50748[(20)]);
var inst_50697 = (state_50748[(2)]);
var inst_50698 = (inst_50686 + (1));
var tmp50787 = inst_50684;
var tmp50788 = inst_50683;
var tmp50789 = inst_50685;
var inst_50683__$1 = tmp50788;
var inst_50684__$1 = tmp50787;
var inst_50685__$1 = tmp50789;
var inst_50686__$1 = inst_50698;
var state_50748__$1 = (function (){var statearr_50792 = state_50748;
(statearr_50792[(9)] = inst_50684__$1);

(statearr_50792[(19)] = inst_50683__$1);

(statearr_50792[(10)] = inst_50686__$1);

(statearr_50792[(21)] = inst_50697);

(statearr_50792[(20)] = inst_50685__$1);

return statearr_50792;
})();
var statearr_50793_52851 = state_50748__$1;
(statearr_50793_52851[(2)] = null);

(statearr_50793_52851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (40))){
var inst_50713 = (state_50748[(22)]);
var inst_50718 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50713);
var state_50748__$1 = state_50748;
var statearr_50794_52852 = state_50748__$1;
(statearr_50794_52852[(2)] = inst_50718);

(statearr_50794_52852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (33))){
var inst_50701 = (state_50748[(23)]);
var inst_50703 = cljs.core.chunked_seq_QMARK_(inst_50701);
var state_50748__$1 = state_50748;
if(inst_50703){
var statearr_50795_52853 = state_50748__$1;
(statearr_50795_52853[(1)] = (36));

} else {
var statearr_50796_52855 = state_50748__$1;
(statearr_50796_52855[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (13))){
var inst_50626 = (state_50748[(24)]);
var inst_50630 = cljs.core.async.close_BANG_(inst_50626);
var state_50748__$1 = state_50748;
var statearr_50797_52858 = state_50748__$1;
(statearr_50797_52858[(2)] = inst_50630);

(statearr_50797_52858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (22))){
var inst_50655 = (state_50748[(8)]);
var inst_50658 = cljs.core.async.close_BANG_(inst_50655);
var state_50748__$1 = state_50748;
var statearr_50798_52861 = state_50748__$1;
(statearr_50798_52861[(2)] = inst_50658);

(statearr_50798_52861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (36))){
var inst_50701 = (state_50748[(23)]);
var inst_50707 = cljs.core.chunk_first(inst_50701);
var inst_50708 = cljs.core.chunk_rest(inst_50701);
var inst_50709 = cljs.core.count(inst_50707);
var inst_50683 = inst_50708;
var inst_50684 = inst_50707;
var inst_50685 = inst_50709;
var inst_50686 = (0);
var state_50748__$1 = (function (){var statearr_50799 = state_50748;
(statearr_50799[(9)] = inst_50684);

(statearr_50799[(19)] = inst_50683);

(statearr_50799[(10)] = inst_50686);

(statearr_50799[(20)] = inst_50685);

return statearr_50799;
})();
var statearr_50800_52864 = state_50748__$1;
(statearr_50800_52864[(2)] = null);

(statearr_50800_52864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (41))){
var inst_50701 = (state_50748[(23)]);
var inst_50720 = (state_50748[(2)]);
var inst_50724 = cljs.core.next(inst_50701);
var inst_50683 = inst_50724;
var inst_50684 = null;
var inst_50685 = (0);
var inst_50686 = (0);
var state_50748__$1 = (function (){var statearr_50801 = state_50748;
(statearr_50801[(9)] = inst_50684);

(statearr_50801[(19)] = inst_50683);

(statearr_50801[(10)] = inst_50686);

(statearr_50801[(25)] = inst_50720);

(statearr_50801[(20)] = inst_50685);

return statearr_50801;
})();
var statearr_50802_52866 = state_50748__$1;
(statearr_50802_52866[(2)] = null);

(statearr_50802_52866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (43))){
var state_50748__$1 = state_50748;
var statearr_50803_52867 = state_50748__$1;
(statearr_50803_52867[(2)] = null);

(statearr_50803_52867[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (29))){
var inst_50732 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50804_52869 = state_50748__$1;
(statearr_50804_52869[(2)] = inst_50732);

(statearr_50804_52869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (44))){
var inst_50741 = (state_50748[(2)]);
var state_50748__$1 = (function (){var statearr_50808 = state_50748;
(statearr_50808[(26)] = inst_50741);

return statearr_50808;
})();
var statearr_50809_52873 = state_50748__$1;
(statearr_50809_52873[(2)] = null);

(statearr_50809_52873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (6))){
var inst_50675 = (state_50748[(27)]);
var inst_50674 = cljs.core.deref(cs);
var inst_50675__$1 = cljs.core.keys(inst_50674);
var inst_50676 = cljs.core.count(inst_50675__$1);
var inst_50677 = cljs.core.reset_BANG_(dctr,inst_50676);
var inst_50682 = cljs.core.seq(inst_50675__$1);
var inst_50683 = inst_50682;
var inst_50684 = null;
var inst_50685 = (0);
var inst_50686 = (0);
var state_50748__$1 = (function (){var statearr_50815 = state_50748;
(statearr_50815[(9)] = inst_50684);

(statearr_50815[(19)] = inst_50683);

(statearr_50815[(10)] = inst_50686);

(statearr_50815[(27)] = inst_50675__$1);

(statearr_50815[(20)] = inst_50685);

(statearr_50815[(28)] = inst_50677);

return statearr_50815;
})();
var statearr_50816_52879 = state_50748__$1;
(statearr_50816_52879[(2)] = null);

(statearr_50816_52879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (28))){
var inst_50701 = (state_50748[(23)]);
var inst_50683 = (state_50748[(19)]);
var inst_50701__$1 = cljs.core.seq(inst_50683);
var state_50748__$1 = (function (){var statearr_50817 = state_50748;
(statearr_50817[(23)] = inst_50701__$1);

return statearr_50817;
})();
if(inst_50701__$1){
var statearr_50819_52881 = state_50748__$1;
(statearr_50819_52881[(1)] = (33));

} else {
var statearr_50820_52883 = state_50748__$1;
(statearr_50820_52883[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (25))){
var inst_50686 = (state_50748[(10)]);
var inst_50685 = (state_50748[(20)]);
var inst_50688 = (inst_50686 < inst_50685);
var inst_50689 = inst_50688;
var state_50748__$1 = state_50748;
if(cljs.core.truth_(inst_50689)){
var statearr_50821_52885 = state_50748__$1;
(statearr_50821_52885[(1)] = (27));

} else {
var statearr_50822_52886 = state_50748__$1;
(statearr_50822_52886[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (34))){
var state_50748__$1 = state_50748;
var statearr_50826_52887 = state_50748__$1;
(statearr_50826_52887[(2)] = null);

(statearr_50826_52887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (17))){
var state_50748__$1 = state_50748;
var statearr_50827_52890 = state_50748__$1;
(statearr_50827_52890[(2)] = null);

(statearr_50827_52890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (3))){
var inst_50746 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50748__$1,inst_50746);
} else {
if((state_val_50752 === (12))){
var inst_50670 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50830_52896 = state_50748__$1;
(statearr_50830_52896[(2)] = inst_50670);

(statearr_50830_52896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (2))){
var state_50748__$1 = state_50748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50748__$1,(4),ch);
} else {
if((state_val_50752 === (23))){
var state_50748__$1 = state_50748;
var statearr_50831_52901 = state_50748__$1;
(statearr_50831_52901[(2)] = null);

(statearr_50831_52901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (35))){
var inst_50730 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50833_52909 = state_50748__$1;
(statearr_50833_52909[(2)] = inst_50730);

(statearr_50833_52909[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (19))){
var inst_50641 = (state_50748[(7)]);
var inst_50645 = cljs.core.chunk_first(inst_50641);
var inst_50646 = cljs.core.chunk_rest(inst_50641);
var inst_50647 = cljs.core.count(inst_50645);
var inst_50614 = inst_50646;
var inst_50615 = inst_50645;
var inst_50616 = inst_50647;
var inst_50617 = (0);
var state_50748__$1 = (function (){var statearr_50834 = state_50748;
(statearr_50834[(13)] = inst_50617);

(statearr_50834[(15)] = inst_50615);

(statearr_50834[(16)] = inst_50614);

(statearr_50834[(17)] = inst_50616);

return statearr_50834;
})();
var statearr_50835_52910 = state_50748__$1;
(statearr_50835_52910[(2)] = null);

(statearr_50835_52910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (11))){
var inst_50641 = (state_50748[(7)]);
var inst_50614 = (state_50748[(16)]);
var inst_50641__$1 = cljs.core.seq(inst_50614);
var state_50748__$1 = (function (){var statearr_50836 = state_50748;
(statearr_50836[(7)] = inst_50641__$1);

return statearr_50836;
})();
if(inst_50641__$1){
var statearr_50843_52911 = state_50748__$1;
(statearr_50843_52911[(1)] = (16));

} else {
var statearr_50844_52912 = state_50748__$1;
(statearr_50844_52912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (9))){
var inst_50672 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50845_52913 = state_50748__$1;
(statearr_50845_52913[(2)] = inst_50672);

(statearr_50845_52913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (5))){
var inst_50612 = cljs.core.deref(cs);
var inst_50613 = cljs.core.seq(inst_50612);
var inst_50614 = inst_50613;
var inst_50615 = null;
var inst_50616 = (0);
var inst_50617 = (0);
var state_50748__$1 = (function (){var statearr_50846 = state_50748;
(statearr_50846[(13)] = inst_50617);

(statearr_50846[(15)] = inst_50615);

(statearr_50846[(16)] = inst_50614);

(statearr_50846[(17)] = inst_50616);

return statearr_50846;
})();
var statearr_50847_52914 = state_50748__$1;
(statearr_50847_52914[(2)] = null);

(statearr_50847_52914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (14))){
var state_50748__$1 = state_50748;
var statearr_50848_52917 = state_50748__$1;
(statearr_50848_52917[(2)] = null);

(statearr_50848_52917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (45))){
var inst_50738 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50849_52919 = state_50748__$1;
(statearr_50849_52919[(2)] = inst_50738);

(statearr_50849_52919[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (26))){
var inst_50675 = (state_50748[(27)]);
var inst_50734 = (state_50748[(2)]);
var inst_50735 = cljs.core.seq(inst_50675);
var state_50748__$1 = (function (){var statearr_50851 = state_50748;
(statearr_50851[(29)] = inst_50734);

return statearr_50851;
})();
if(inst_50735){
var statearr_50852_52920 = state_50748__$1;
(statearr_50852_52920[(1)] = (42));

} else {
var statearr_50853_52921 = state_50748__$1;
(statearr_50853_52921[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (16))){
var inst_50641 = (state_50748[(7)]);
var inst_50643 = cljs.core.chunked_seq_QMARK_(inst_50641);
var state_50748__$1 = state_50748;
if(inst_50643){
var statearr_50854_52922 = state_50748__$1;
(statearr_50854_52922[(1)] = (19));

} else {
var statearr_50855_52924 = state_50748__$1;
(statearr_50855_52924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (38))){
var inst_50727 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50857_52926 = state_50748__$1;
(statearr_50857_52926[(2)] = inst_50727);

(statearr_50857_52926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (30))){
var state_50748__$1 = state_50748;
var statearr_50858_52927 = state_50748__$1;
(statearr_50858_52927[(2)] = null);

(statearr_50858_52927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (10))){
var inst_50617 = (state_50748[(13)]);
var inst_50615 = (state_50748[(15)]);
var inst_50625 = cljs.core._nth(inst_50615,inst_50617);
var inst_50626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50625,(0),null);
var inst_50628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50625,(1),null);
var state_50748__$1 = (function (){var statearr_50859 = state_50748;
(statearr_50859[(24)] = inst_50626);

return statearr_50859;
})();
if(cljs.core.truth_(inst_50628)){
var statearr_50860_52932 = state_50748__$1;
(statearr_50860_52932[(1)] = (13));

} else {
var statearr_50861_52933 = state_50748__$1;
(statearr_50861_52933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (18))){
var inst_50668 = (state_50748[(2)]);
var state_50748__$1 = state_50748;
var statearr_50862_52934 = state_50748__$1;
(statearr_50862_52934[(2)] = inst_50668);

(statearr_50862_52934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (42))){
var state_50748__$1 = state_50748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50748__$1,(45),dchan);
} else {
if((state_val_50752 === (37))){
var inst_50701 = (state_50748[(23)]);
var inst_50713 = (state_50748[(22)]);
var inst_50605 = (state_50748[(11)]);
var inst_50713__$1 = cljs.core.first(inst_50701);
var inst_50715 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50713__$1,inst_50605,done);
var state_50748__$1 = (function (){var statearr_50863 = state_50748;
(statearr_50863[(22)] = inst_50713__$1);

return statearr_50863;
})();
if(cljs.core.truth_(inst_50715)){
var statearr_50864_52938 = state_50748__$1;
(statearr_50864_52938[(1)] = (39));

} else {
var statearr_50865_52939 = state_50748__$1;
(statearr_50865_52939[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (8))){
var inst_50617 = (state_50748[(13)]);
var inst_50616 = (state_50748[(17)]);
var inst_50619 = (inst_50617 < inst_50616);
var inst_50620 = inst_50619;
var state_50748__$1 = state_50748;
if(cljs.core.truth_(inst_50620)){
var statearr_50866_52945 = state_50748__$1;
(statearr_50866_52945[(1)] = (10));

} else {
var statearr_50867_52946 = state_50748__$1;
(statearr_50867_52946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__49223__auto__ = null;
var cljs$core$async$mult_$_state_machine__49223__auto____0 = (function (){
var statearr_50868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50868[(0)] = cljs$core$async$mult_$_state_machine__49223__auto__);

(statearr_50868[(1)] = (1));

return statearr_50868;
});
var cljs$core$async$mult_$_state_machine__49223__auto____1 = (function (state_50748){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_50748);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e50869){var ex__49226__auto__ = e50869;
var statearr_50870_52948 = state_50748;
(statearr_50870_52948[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_50748[(4)]))){
var statearr_50871_52949 = state_50748;
(statearr_50871_52949[(1)] = cljs.core.first((state_50748[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52950 = state_50748;
state_50748 = G__52950;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49223__auto__ = function(state_50748){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49223__auto____1.call(this,state_50748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49223__auto____0;
cljs$core$async$mult_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49223__auto____1;
return cljs$core$async$mult_$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_50872 = f__49412__auto__();
(statearr_50872[(6)] = c__49409__auto___52802);

return statearr_50872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50882 = arguments.length;
switch (G__50882) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52960 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52960(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52961 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52961(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52966 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52966(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52969 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52969(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52972 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52972(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52973 = arguments.length;
var i__4737__auto___52974 = (0);
while(true){
if((i__4737__auto___52974 < len__4736__auto___52973)){
args__4742__auto__.push((arguments[i__4737__auto___52974]));

var G__52975 = (i__4737__auto___52974 + (1));
i__4737__auto___52974 = G__52975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50949){
var map__50950 = p__50949;
var map__50950__$1 = (((((!((map__50950 == null))))?(((((map__50950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50950):map__50950);
var opts = map__50950__$1;
var statearr_50952_52977 = state;
(statearr_50952_52977[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50953_52978 = state;
(statearr_50953_52978[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_50955_52979 = state;
(statearr_50955_52979[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50945){
var G__50946 = cljs.core.first(seq50945);
var seq50945__$1 = cljs.core.next(seq50945);
var G__50947 = cljs.core.first(seq50945__$1);
var seq50945__$2 = cljs.core.next(seq50945__$1);
var G__50948 = cljs.core.first(seq50945__$2);
var seq50945__$3 = cljs.core.next(seq50945__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50946,G__50947,G__50948,seq50945__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50957 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50958){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50958 = meta50958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50959,meta50958__$1){
var self__ = this;
var _50959__$1 = this;
return (new cljs.core.async.t_cljs$core$async50957(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50958__$1));
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50959){
var self__ = this;
var _50959__$1 = this;
return self__.meta50958;
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50957.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50958","meta50958",912542676,null)], null);
}));

(cljs.core.async.t_cljs$core$async50957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50957");

(cljs.core.async.t_cljs$core$async50957.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50957.
 */
cljs.core.async.__GT_t_cljs$core$async50957 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50957(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50958){
return (new cljs.core.async.t_cljs$core$async50957(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50958));
});

}

return (new cljs.core.async.t_cljs$core$async50957(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49409__auto___53024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51065){
var state_val_51066 = (state_51065[(1)]);
if((state_val_51066 === (7))){
var inst_50977 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
var statearr_51067_53026 = state_51065__$1;
(statearr_51067_53026[(2)] = inst_50977);

(statearr_51067_53026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (20))){
var inst_50990 = (state_51065[(7)]);
var state_51065__$1 = state_51065;
var statearr_51068_53033 = state_51065__$1;
(statearr_51068_53033[(2)] = inst_50990);

(statearr_51068_53033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (27))){
var state_51065__$1 = state_51065;
var statearr_51069_53034 = state_51065__$1;
(statearr_51069_53034[(2)] = null);

(statearr_51069_53034[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (1))){
var inst_50963 = (state_51065[(8)]);
var inst_50963__$1 = calc_state();
var inst_50965 = (inst_50963__$1 == null);
var inst_50966 = cljs.core.not(inst_50965);
var state_51065__$1 = (function (){var statearr_51070 = state_51065;
(statearr_51070[(8)] = inst_50963__$1);

return statearr_51070;
})();
if(inst_50966){
var statearr_51071_53041 = state_51065__$1;
(statearr_51071_53041[(1)] = (2));

} else {
var statearr_51072_53042 = state_51065__$1;
(statearr_51072_53042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (24))){
var inst_51039 = (state_51065[(9)]);
var inst_51016 = (state_51065[(10)]);
var inst_51025 = (state_51065[(11)]);
var inst_51039__$1 = (inst_51016.cljs$core$IFn$_invoke$arity$1 ? inst_51016.cljs$core$IFn$_invoke$arity$1(inst_51025) : inst_51016.call(null,inst_51025));
var state_51065__$1 = (function (){var statearr_51073 = state_51065;
(statearr_51073[(9)] = inst_51039__$1);

return statearr_51073;
})();
if(cljs.core.truth_(inst_51039__$1)){
var statearr_51074_53046 = state_51065__$1;
(statearr_51074_53046[(1)] = (29));

} else {
var statearr_51075_53047 = state_51065__$1;
(statearr_51075_53047[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (4))){
var inst_50980 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_50980)){
var statearr_51077_53048 = state_51065__$1;
(statearr_51077_53048[(1)] = (8));

} else {
var statearr_51078_53049 = state_51065__$1;
(statearr_51078_53049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (15))){
var inst_51009 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_51009)){
var statearr_51079_53053 = state_51065__$1;
(statearr_51079_53053[(1)] = (19));

} else {
var statearr_51080_53054 = state_51065__$1;
(statearr_51080_53054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (21))){
var inst_51014 = (state_51065[(12)]);
var inst_51014__$1 = (state_51065[(2)]);
var inst_51016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51014__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51014__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51014__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51065__$1 = (function (){var statearr_51081 = state_51065;
(statearr_51081[(12)] = inst_51014__$1);

(statearr_51081[(10)] = inst_51016);

(statearr_51081[(13)] = inst_51017);

return statearr_51081;
})();
return cljs.core.async.ioc_alts_BANG_(state_51065__$1,(22),inst_51018);
} else {
if((state_val_51066 === (31))){
var inst_51047 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_51047)){
var statearr_51082_53059 = state_51065__$1;
(statearr_51082_53059[(1)] = (32));

} else {
var statearr_51083_53060 = state_51065__$1;
(statearr_51083_53060[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (32))){
var inst_51024 = (state_51065[(14)]);
var state_51065__$1 = state_51065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51065__$1,(35),out,inst_51024);
} else {
if((state_val_51066 === (33))){
var inst_51014 = (state_51065[(12)]);
var inst_50990 = inst_51014;
var state_51065__$1 = (function (){var statearr_51084 = state_51065;
(statearr_51084[(7)] = inst_50990);

return statearr_51084;
})();
var statearr_51087_53070 = state_51065__$1;
(statearr_51087_53070[(2)] = null);

(statearr_51087_53070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (13))){
var inst_50990 = (state_51065[(7)]);
var inst_50998 = inst_50990.cljs$lang$protocol_mask$partition0$;
var inst_50999 = (inst_50998 & (64));
var inst_51000 = inst_50990.cljs$core$ISeq$;
var inst_51001 = (cljs.core.PROTOCOL_SENTINEL === inst_51000);
var inst_51002 = ((inst_50999) || (inst_51001));
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_51002)){
var statearr_51090_53075 = state_51065__$1;
(statearr_51090_53075[(1)] = (16));

} else {
var statearr_51091_53076 = state_51065__$1;
(statearr_51091_53076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (22))){
var inst_51024 = (state_51065[(14)]);
var inst_51025 = (state_51065[(11)]);
var inst_51023 = (state_51065[(2)]);
var inst_51024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51023,(0),null);
var inst_51025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51023,(1),null);
var inst_51026 = (inst_51024__$1 == null);
var inst_51027 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51025__$1,change);
var inst_51028 = ((inst_51026) || (inst_51027));
var state_51065__$1 = (function (){var statearr_51094 = state_51065;
(statearr_51094[(14)] = inst_51024__$1);

(statearr_51094[(11)] = inst_51025__$1);

return statearr_51094;
})();
if(cljs.core.truth_(inst_51028)){
var statearr_51097_53083 = state_51065__$1;
(statearr_51097_53083[(1)] = (23));

} else {
var statearr_51099_53085 = state_51065__$1;
(statearr_51099_53085[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (36))){
var inst_51014 = (state_51065[(12)]);
var inst_50990 = inst_51014;
var state_51065__$1 = (function (){var statearr_51100 = state_51065;
(statearr_51100[(7)] = inst_50990);

return statearr_51100;
})();
var statearr_51101_53086 = state_51065__$1;
(statearr_51101_53086[(2)] = null);

(statearr_51101_53086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (29))){
var inst_51039 = (state_51065[(9)]);
var state_51065__$1 = state_51065;
var statearr_51103_53090 = state_51065__$1;
(statearr_51103_53090[(2)] = inst_51039);

(statearr_51103_53090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (6))){
var state_51065__$1 = state_51065;
var statearr_51104_53091 = state_51065__$1;
(statearr_51104_53091[(2)] = false);

(statearr_51104_53091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (28))){
var inst_51035 = (state_51065[(2)]);
var inst_51036 = calc_state();
var inst_50990 = inst_51036;
var state_51065__$1 = (function (){var statearr_51107 = state_51065;
(statearr_51107[(7)] = inst_50990);

(statearr_51107[(15)] = inst_51035);

return statearr_51107;
})();
var statearr_51109_53092 = state_51065__$1;
(statearr_51109_53092[(2)] = null);

(statearr_51109_53092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (25))){
var inst_51061 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
var statearr_51111_53095 = state_51065__$1;
(statearr_51111_53095[(2)] = inst_51061);

(statearr_51111_53095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (34))){
var inst_51059 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
var statearr_51112_53096 = state_51065__$1;
(statearr_51112_53096[(2)] = inst_51059);

(statearr_51112_53096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (17))){
var state_51065__$1 = state_51065;
var statearr_51113_53097 = state_51065__$1;
(statearr_51113_53097[(2)] = false);

(statearr_51113_53097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (3))){
var state_51065__$1 = state_51065;
var statearr_51116_53098 = state_51065__$1;
(statearr_51116_53098[(2)] = false);

(statearr_51116_53098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (12))){
var inst_51063 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51065__$1,inst_51063);
} else {
if((state_val_51066 === (2))){
var inst_50963 = (state_51065[(8)]);
var inst_50968 = inst_50963.cljs$lang$protocol_mask$partition0$;
var inst_50969 = (inst_50968 & (64));
var inst_50971 = inst_50963.cljs$core$ISeq$;
var inst_50972 = (cljs.core.PROTOCOL_SENTINEL === inst_50971);
var inst_50973 = ((inst_50969) || (inst_50972));
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_50973)){
var statearr_51121_53099 = state_51065__$1;
(statearr_51121_53099[(1)] = (5));

} else {
var statearr_51125_53100 = state_51065__$1;
(statearr_51125_53100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (23))){
var inst_51024 = (state_51065[(14)]);
var inst_51030 = (inst_51024 == null);
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_51030)){
var statearr_51127_53102 = state_51065__$1;
(statearr_51127_53102[(1)] = (26));

} else {
var statearr_51128_53103 = state_51065__$1;
(statearr_51128_53103[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (35))){
var inst_51050 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
if(cljs.core.truth_(inst_51050)){
var statearr_51130_53104 = state_51065__$1;
(statearr_51130_53104[(1)] = (36));

} else {
var statearr_51131_53105 = state_51065__$1;
(statearr_51131_53105[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (19))){
var inst_50990 = (state_51065[(7)]);
var inst_51011 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50990);
var state_51065__$1 = state_51065;
var statearr_51136_53106 = state_51065__$1;
(statearr_51136_53106[(2)] = inst_51011);

(statearr_51136_53106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (11))){
var inst_50990 = (state_51065[(7)]);
var inst_50995 = (inst_50990 == null);
var inst_50996 = cljs.core.not(inst_50995);
var state_51065__$1 = state_51065;
if(inst_50996){
var statearr_51141_53107 = state_51065__$1;
(statearr_51141_53107[(1)] = (13));

} else {
var statearr_51144_53108 = state_51065__$1;
(statearr_51144_53108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (9))){
var inst_50963 = (state_51065[(8)]);
var state_51065__$1 = state_51065;
var statearr_51146_53113 = state_51065__$1;
(statearr_51146_53113[(2)] = inst_50963);

(statearr_51146_53113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (5))){
var state_51065__$1 = state_51065;
var statearr_51148_53118 = state_51065__$1;
(statearr_51148_53118[(2)] = true);

(statearr_51148_53118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (14))){
var state_51065__$1 = state_51065;
var statearr_51151_53123 = state_51065__$1;
(statearr_51151_53123[(2)] = false);

(statearr_51151_53123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (26))){
var inst_51025 = (state_51065[(11)]);
var inst_51032 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51025);
var state_51065__$1 = state_51065;
var statearr_51154_53125 = state_51065__$1;
(statearr_51154_53125[(2)] = inst_51032);

(statearr_51154_53125[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (16))){
var state_51065__$1 = state_51065;
var statearr_51156_53126 = state_51065__$1;
(statearr_51156_53126[(2)] = true);

(statearr_51156_53126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (38))){
var inst_51055 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
var statearr_51157_53135 = state_51065__$1;
(statearr_51157_53135[(2)] = inst_51055);

(statearr_51157_53135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (30))){
var inst_51016 = (state_51065[(10)]);
var inst_51017 = (state_51065[(13)]);
var inst_51025 = (state_51065[(11)]);
var inst_51042 = cljs.core.empty_QMARK_(inst_51016);
var inst_51043 = (inst_51017.cljs$core$IFn$_invoke$arity$1 ? inst_51017.cljs$core$IFn$_invoke$arity$1(inst_51025) : inst_51017.call(null,inst_51025));
var inst_51044 = cljs.core.not(inst_51043);
var inst_51045 = ((inst_51042) && (inst_51044));
var state_51065__$1 = state_51065;
var statearr_51162_53141 = state_51065__$1;
(statearr_51162_53141[(2)] = inst_51045);

(statearr_51162_53141[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (10))){
var inst_50963 = (state_51065[(8)]);
var inst_50985 = (state_51065[(2)]);
var inst_50986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50985,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50985,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50985,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50990 = inst_50963;
var state_51065__$1 = (function (){var statearr_51165 = state_51065;
(statearr_51165[(7)] = inst_50990);

(statearr_51165[(16)] = inst_50986);

(statearr_51165[(17)] = inst_50989);

(statearr_51165[(18)] = inst_50988);

return statearr_51165;
})();
var statearr_51169_53144 = state_51065__$1;
(statearr_51169_53144[(2)] = null);

(statearr_51169_53144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (18))){
var inst_51006 = (state_51065[(2)]);
var state_51065__$1 = state_51065;
var statearr_51171_53145 = state_51065__$1;
(statearr_51171_53145[(2)] = inst_51006);

(statearr_51171_53145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (37))){
var state_51065__$1 = state_51065;
var statearr_51172_53147 = state_51065__$1;
(statearr_51172_53147[(2)] = null);

(statearr_51172_53147[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51066 === (8))){
var inst_50963 = (state_51065[(8)]);
var inst_50982 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50963);
var state_51065__$1 = state_51065;
var statearr_51175_53148 = state_51065__$1;
(statearr_51175_53148[(2)] = inst_50982);

(statearr_51175_53148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49223__auto__ = null;
var cljs$core$async$mix_$_state_machine__49223__auto____0 = (function (){
var statearr_51179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51179[(0)] = cljs$core$async$mix_$_state_machine__49223__auto__);

(statearr_51179[(1)] = (1));

return statearr_51179;
});
var cljs$core$async$mix_$_state_machine__49223__auto____1 = (function (state_51065){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51065);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e51181){var ex__49226__auto__ = e51181;
var statearr_51182_53157 = state_51065;
(statearr_51182_53157[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51065[(4)]))){
var statearr_51183_53158 = state_51065;
(statearr_51183_53158[(1)] = cljs.core.first((state_51065[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53163 = state_51065;
state_51065 = G__53163;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49223__auto__ = function(state_51065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49223__auto____1.call(this,state_51065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49223__auto____0;
cljs$core$async$mix_$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49223__auto____1;
return cljs$core$async$mix_$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_51185 = f__49412__auto__();
(statearr_51185[(6)] = c__49409__auto___53024);

return statearr_51185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53170 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53170(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53181 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53181(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53191 = (function() {
var G__53192 = null;
var G__53192__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53192__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53192 = function(p,v){
switch(arguments.length){
case 1:
return G__53192__1.call(this,p);
case 2:
return G__53192__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53192.cljs$core$IFn$_invoke$arity$1 = G__53192__1;
G__53192.cljs$core$IFn$_invoke$arity$2 = G__53192__2;
return G__53192;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51206 = arguments.length;
switch (G__51206) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53191(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53191(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51215 = arguments.length;
switch (G__51215) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51212_SHARP_){
if(cljs.core.truth_((p1__51212_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51212_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51212_SHARP_.call(null,topic)))){
return p1__51212_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51212_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51217 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51218){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51218 = meta51218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51219,meta51218__$1){
var self__ = this;
var _51219__$1 = this;
return (new cljs.core.async.t_cljs$core$async51217(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51218__$1));
}));

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51219){
var self__ = this;
var _51219__$1 = this;
return self__.meta51218;
}));

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51217.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51218","meta51218",-153033236,null)], null);
}));

(cljs.core.async.t_cljs$core$async51217.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51217");

(cljs.core.async.t_cljs$core$async51217.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51217");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51217.
 */
cljs.core.async.__GT_t_cljs$core$async51217 = (function cljs$core$async$__GT_t_cljs$core$async51217(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51218){
return (new cljs.core.async.t_cljs$core$async51217(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51218));
});

}

return (new cljs.core.async.t_cljs$core$async51217(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49409__auto___53233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51320){
var state_val_51321 = (state_51320[(1)]);
if((state_val_51321 === (7))){
var inst_51316 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51325_53238 = state_51320__$1;
(statearr_51325_53238[(2)] = inst_51316);

(statearr_51325_53238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (20))){
var state_51320__$1 = state_51320;
var statearr_51326_53240 = state_51320__$1;
(statearr_51326_53240[(2)] = null);

(statearr_51326_53240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (1))){
var state_51320__$1 = state_51320;
var statearr_51327_53241 = state_51320__$1;
(statearr_51327_53241[(2)] = null);

(statearr_51327_53241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (24))){
var inst_51298 = (state_51320[(7)]);
var inst_51308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51298);
var state_51320__$1 = state_51320;
var statearr_51328_53243 = state_51320__$1;
(statearr_51328_53243[(2)] = inst_51308);

(statearr_51328_53243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (4))){
var inst_51240 = (state_51320[(8)]);
var inst_51240__$1 = (state_51320[(2)]);
var inst_51242 = (inst_51240__$1 == null);
var state_51320__$1 = (function (){var statearr_51329 = state_51320;
(statearr_51329[(8)] = inst_51240__$1);

return statearr_51329;
})();
if(cljs.core.truth_(inst_51242)){
var statearr_51330_53248 = state_51320__$1;
(statearr_51330_53248[(1)] = (5));

} else {
var statearr_51331_53253 = state_51320__$1;
(statearr_51331_53253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (15))){
var inst_51291 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51333_53255 = state_51320__$1;
(statearr_51333_53255[(2)] = inst_51291);

(statearr_51333_53255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (21))){
var inst_51313 = (state_51320[(2)]);
var state_51320__$1 = (function (){var statearr_51334 = state_51320;
(statearr_51334[(9)] = inst_51313);

return statearr_51334;
})();
var statearr_51335_53257 = state_51320__$1;
(statearr_51335_53257[(2)] = null);

(statearr_51335_53257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (13))){
var inst_51272 = (state_51320[(10)]);
var inst_51274 = cljs.core.chunked_seq_QMARK_(inst_51272);
var state_51320__$1 = state_51320;
if(inst_51274){
var statearr_51336_53260 = state_51320__$1;
(statearr_51336_53260[(1)] = (16));

} else {
var statearr_51337_53261 = state_51320__$1;
(statearr_51337_53261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (22))){
var inst_51305 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
if(cljs.core.truth_(inst_51305)){
var statearr_51339_53266 = state_51320__$1;
(statearr_51339_53266[(1)] = (23));

} else {
var statearr_51340_53267 = state_51320__$1;
(statearr_51340_53267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (6))){
var inst_51301 = (state_51320[(11)]);
var inst_51298 = (state_51320[(7)]);
var inst_51240 = (state_51320[(8)]);
var inst_51298__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51240) : topic_fn.call(null,inst_51240));
var inst_51300 = cljs.core.deref(mults);
var inst_51301__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51300,inst_51298__$1);
var state_51320__$1 = (function (){var statearr_51345 = state_51320;
(statearr_51345[(11)] = inst_51301__$1);

(statearr_51345[(7)] = inst_51298__$1);

return statearr_51345;
})();
if(cljs.core.truth_(inst_51301__$1)){
var statearr_51346_53269 = state_51320__$1;
(statearr_51346_53269[(1)] = (19));

} else {
var statearr_51347_53271 = state_51320__$1;
(statearr_51347_53271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (25))){
var inst_51310 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51348_53274 = state_51320__$1;
(statearr_51348_53274[(2)] = inst_51310);

(statearr_51348_53274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (17))){
var inst_51272 = (state_51320[(10)]);
var inst_51282 = cljs.core.first(inst_51272);
var inst_51283 = cljs.core.async.muxch_STAR_(inst_51282);
var inst_51284 = cljs.core.async.close_BANG_(inst_51283);
var inst_51285 = cljs.core.next(inst_51272);
var inst_51256 = inst_51285;
var inst_51257 = null;
var inst_51258 = (0);
var inst_51259 = (0);
var state_51320__$1 = (function (){var statearr_51352 = state_51320;
(statearr_51352[(12)] = inst_51284);

(statearr_51352[(13)] = inst_51259);

(statearr_51352[(14)] = inst_51256);

(statearr_51352[(15)] = inst_51258);

(statearr_51352[(16)] = inst_51257);

return statearr_51352;
})();
var statearr_51353_53282 = state_51320__$1;
(statearr_51353_53282[(2)] = null);

(statearr_51353_53282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (3))){
var inst_51318 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51320__$1,inst_51318);
} else {
if((state_val_51321 === (12))){
var inst_51293 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51354_53284 = state_51320__$1;
(statearr_51354_53284[(2)] = inst_51293);

(statearr_51354_53284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (2))){
var state_51320__$1 = state_51320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51320__$1,(4),ch);
} else {
if((state_val_51321 === (23))){
var state_51320__$1 = state_51320;
var statearr_51359_53288 = state_51320__$1;
(statearr_51359_53288[(2)] = null);

(statearr_51359_53288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (19))){
var inst_51301 = (state_51320[(11)]);
var inst_51240 = (state_51320[(8)]);
var inst_51303 = cljs.core.async.muxch_STAR_(inst_51301);
var state_51320__$1 = state_51320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51320__$1,(22),inst_51303,inst_51240);
} else {
if((state_val_51321 === (11))){
var inst_51256 = (state_51320[(14)]);
var inst_51272 = (state_51320[(10)]);
var inst_51272__$1 = cljs.core.seq(inst_51256);
var state_51320__$1 = (function (){var statearr_51363 = state_51320;
(statearr_51363[(10)] = inst_51272__$1);

return statearr_51363;
})();
if(inst_51272__$1){
var statearr_51364_53292 = state_51320__$1;
(statearr_51364_53292[(1)] = (13));

} else {
var statearr_51366_53293 = state_51320__$1;
(statearr_51366_53293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (9))){
var inst_51295 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51369_53294 = state_51320__$1;
(statearr_51369_53294[(2)] = inst_51295);

(statearr_51369_53294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (5))){
var inst_51253 = cljs.core.deref(mults);
var inst_51254 = cljs.core.vals(inst_51253);
var inst_51255 = cljs.core.seq(inst_51254);
var inst_51256 = inst_51255;
var inst_51257 = null;
var inst_51258 = (0);
var inst_51259 = (0);
var state_51320__$1 = (function (){var statearr_51377 = state_51320;
(statearr_51377[(13)] = inst_51259);

(statearr_51377[(14)] = inst_51256);

(statearr_51377[(15)] = inst_51258);

(statearr_51377[(16)] = inst_51257);

return statearr_51377;
})();
var statearr_51378_53295 = state_51320__$1;
(statearr_51378_53295[(2)] = null);

(statearr_51378_53295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (14))){
var state_51320__$1 = state_51320;
var statearr_51382_53296 = state_51320__$1;
(statearr_51382_53296[(2)] = null);

(statearr_51382_53296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (16))){
var inst_51272 = (state_51320[(10)]);
var inst_51277 = cljs.core.chunk_first(inst_51272);
var inst_51278 = cljs.core.chunk_rest(inst_51272);
var inst_51279 = cljs.core.count(inst_51277);
var inst_51256 = inst_51278;
var inst_51257 = inst_51277;
var inst_51258 = inst_51279;
var inst_51259 = (0);
var state_51320__$1 = (function (){var statearr_51385 = state_51320;
(statearr_51385[(13)] = inst_51259);

(statearr_51385[(14)] = inst_51256);

(statearr_51385[(15)] = inst_51258);

(statearr_51385[(16)] = inst_51257);

return statearr_51385;
})();
var statearr_51386_53302 = state_51320__$1;
(statearr_51386_53302[(2)] = null);

(statearr_51386_53302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (10))){
var inst_51259 = (state_51320[(13)]);
var inst_51256 = (state_51320[(14)]);
var inst_51258 = (state_51320[(15)]);
var inst_51257 = (state_51320[(16)]);
var inst_51266 = cljs.core._nth(inst_51257,inst_51259);
var inst_51267 = cljs.core.async.muxch_STAR_(inst_51266);
var inst_51268 = cljs.core.async.close_BANG_(inst_51267);
var inst_51269 = (inst_51259 + (1));
var tmp51379 = inst_51256;
var tmp51380 = inst_51258;
var tmp51381 = inst_51257;
var inst_51256__$1 = tmp51379;
var inst_51257__$1 = tmp51381;
var inst_51258__$1 = tmp51380;
var inst_51259__$1 = inst_51269;
var state_51320__$1 = (function (){var statearr_51387 = state_51320;
(statearr_51387[(13)] = inst_51259__$1);

(statearr_51387[(14)] = inst_51256__$1);

(statearr_51387[(17)] = inst_51268);

(statearr_51387[(15)] = inst_51258__$1);

(statearr_51387[(16)] = inst_51257__$1);

return statearr_51387;
})();
var statearr_51388_53305 = state_51320__$1;
(statearr_51388_53305[(2)] = null);

(statearr_51388_53305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (18))){
var inst_51288 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51389_53309 = state_51320__$1;
(statearr_51389_53309[(2)] = inst_51288);

(statearr_51389_53309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (8))){
var inst_51259 = (state_51320[(13)]);
var inst_51258 = (state_51320[(15)]);
var inst_51261 = (inst_51259 < inst_51258);
var inst_51262 = inst_51261;
var state_51320__$1 = state_51320;
if(cljs.core.truth_(inst_51262)){
var statearr_51390_53310 = state_51320__$1;
(statearr_51390_53310[(1)] = (10));

} else {
var statearr_51391_53311 = state_51320__$1;
(statearr_51391_53311[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_51392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51392[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_51392[(1)] = (1));

return statearr_51392;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_51320){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51320);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e51393){var ex__49226__auto__ = e51393;
var statearr_51394_53318 = state_51320;
(statearr_51394_53318[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51320[(4)]))){
var statearr_51395_53319 = state_51320;
(statearr_51395_53319[(1)] = cljs.core.first((state_51320[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53320 = state_51320;
state_51320 = G__53320;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_51320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_51320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_51397 = f__49412__auto__();
(statearr_51397[(6)] = c__49409__auto___53233);

return statearr_51397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51404 = arguments.length;
switch (G__51404) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51416 = arguments.length;
switch (G__51416) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51427 = arguments.length;
switch (G__51427) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__49409__auto___53338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51503){
var state_val_51504 = (state_51503[(1)]);
if((state_val_51504 === (7))){
var state_51503__$1 = state_51503;
var statearr_51508_53339 = state_51503__$1;
(statearr_51508_53339[(2)] = null);

(statearr_51508_53339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (1))){
var state_51503__$1 = state_51503;
var statearr_51511_53341 = state_51503__$1;
(statearr_51511_53341[(2)] = null);

(statearr_51511_53341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (4))){
var inst_51444 = (state_51503[(7)]);
var inst_51443 = (state_51503[(8)]);
var inst_51446 = (inst_51444 < inst_51443);
var state_51503__$1 = state_51503;
if(cljs.core.truth_(inst_51446)){
var statearr_51517_53344 = state_51503__$1;
(statearr_51517_53344[(1)] = (6));

} else {
var statearr_51518_53345 = state_51503__$1;
(statearr_51518_53345[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (15))){
var inst_51486 = (state_51503[(9)]);
var inst_51491 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51486);
var state_51503__$1 = state_51503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51503__$1,(17),out,inst_51491);
} else {
if((state_val_51504 === (13))){
var inst_51486 = (state_51503[(9)]);
var inst_51486__$1 = (state_51503[(2)]);
var inst_51487 = cljs.core.some(cljs.core.nil_QMARK_,inst_51486__$1);
var state_51503__$1 = (function (){var statearr_51523 = state_51503;
(statearr_51523[(9)] = inst_51486__$1);

return statearr_51523;
})();
if(cljs.core.truth_(inst_51487)){
var statearr_51524_53346 = state_51503__$1;
(statearr_51524_53346[(1)] = (14));

} else {
var statearr_51525_53347 = state_51503__$1;
(statearr_51525_53347[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (6))){
var state_51503__$1 = state_51503;
var statearr_51526_53348 = state_51503__$1;
(statearr_51526_53348[(2)] = null);

(statearr_51526_53348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (17))){
var inst_51493 = (state_51503[(2)]);
var state_51503__$1 = (function (){var statearr_51539 = state_51503;
(statearr_51539[(10)] = inst_51493);

return statearr_51539;
})();
var statearr_51540_53352 = state_51503__$1;
(statearr_51540_53352[(2)] = null);

(statearr_51540_53352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (3))){
var inst_51498 = (state_51503[(2)]);
var state_51503__$1 = state_51503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51503__$1,inst_51498);
} else {
if((state_val_51504 === (12))){
var _ = (function (){var statearr_51545 = state_51503;
(statearr_51545[(4)] = cljs.core.rest((state_51503[(4)])));

return statearr_51545;
})();
var state_51503__$1 = state_51503;
var ex51531 = (state_51503__$1[(2)]);
var statearr_51548_53354 = state_51503__$1;
(statearr_51548_53354[(5)] = ex51531);


if((ex51531 instanceof Object)){
var statearr_51549_53355 = state_51503__$1;
(statearr_51549_53355[(1)] = (11));

(statearr_51549_53355[(5)] = null);

} else {
throw ex51531;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (2))){
var inst_51442 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51443 = cnt;
var inst_51444 = (0);
var state_51503__$1 = (function (){var statearr_51551 = state_51503;
(statearr_51551[(7)] = inst_51444);

(statearr_51551[(8)] = inst_51443);

(statearr_51551[(11)] = inst_51442);

return statearr_51551;
})();
var statearr_51552_53356 = state_51503__$1;
(statearr_51552_53356[(2)] = null);

(statearr_51552_53356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (11))){
var inst_51461 = (state_51503[(2)]);
var inst_51462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51503__$1 = (function (){var statearr_51553 = state_51503;
(statearr_51553[(12)] = inst_51461);

return statearr_51553;
})();
var statearr_51554_53358 = state_51503__$1;
(statearr_51554_53358[(2)] = inst_51462);

(statearr_51554_53358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (9))){
var inst_51444 = (state_51503[(7)]);
var _ = (function (){var statearr_51556 = state_51503;
(statearr_51556[(4)] = cljs.core.cons((12),(state_51503[(4)])));

return statearr_51556;
})();
var inst_51472 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51444) : chs__$1.call(null,inst_51444));
var inst_51473 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51444) : done.call(null,inst_51444));
var inst_51474 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51472,inst_51473);
var ___$1 = (function (){var statearr_51557 = state_51503;
(statearr_51557[(4)] = cljs.core.rest((state_51503[(4)])));

return statearr_51557;
})();
var state_51503__$1 = state_51503;
var statearr_51558_53366 = state_51503__$1;
(statearr_51558_53366[(2)] = inst_51474);

(statearr_51558_53366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (5))){
var inst_51484 = (state_51503[(2)]);
var state_51503__$1 = (function (){var statearr_51559 = state_51503;
(statearr_51559[(13)] = inst_51484);

return statearr_51559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51503__$1,(13),dchan);
} else {
if((state_val_51504 === (14))){
var inst_51489 = cljs.core.async.close_BANG_(out);
var state_51503__$1 = state_51503;
var statearr_51564_53368 = state_51503__$1;
(statearr_51564_53368[(2)] = inst_51489);

(statearr_51564_53368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (16))){
var inst_51496 = (state_51503[(2)]);
var state_51503__$1 = state_51503;
var statearr_51568_53372 = state_51503__$1;
(statearr_51568_53372[(2)] = inst_51496);

(statearr_51568_53372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (10))){
var inst_51444 = (state_51503[(7)]);
var inst_51477 = (state_51503[(2)]);
var inst_51478 = (inst_51444 + (1));
var inst_51444__$1 = inst_51478;
var state_51503__$1 = (function (){var statearr_51569 = state_51503;
(statearr_51569[(7)] = inst_51444__$1);

(statearr_51569[(14)] = inst_51477);

return statearr_51569;
})();
var statearr_51570_53373 = state_51503__$1;
(statearr_51570_53373[(2)] = null);

(statearr_51570_53373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51504 === (8))){
var inst_51482 = (state_51503[(2)]);
var state_51503__$1 = state_51503;
var statearr_51572_53378 = state_51503__$1;
(statearr_51572_53378[(2)] = inst_51482);

(statearr_51572_53378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_51573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51573[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_51573[(1)] = (1));

return statearr_51573;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_51503){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51503);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e51574){var ex__49226__auto__ = e51574;
var statearr_51575_53380 = state_51503;
(statearr_51575_53380[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51503[(4)]))){
var statearr_51576_53385 = state_51503;
(statearr_51576_53385[(1)] = cljs.core.first((state_51503[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53386 = state_51503;
state_51503 = G__53386;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_51503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_51503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_51578 = f__49412__auto__();
(statearr_51578[(6)] = c__49409__auto___53338);

return statearr_51578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51582 = arguments.length;
switch (G__51582) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49409__auto___53390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51621){
var state_val_51622 = (state_51621[(1)]);
if((state_val_51622 === (7))){
var inst_51598 = (state_51621[(7)]);
var inst_51599 = (state_51621[(8)]);
var inst_51598__$1 = (state_51621[(2)]);
var inst_51599__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51598__$1,(0),null);
var inst_51600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51598__$1,(1),null);
var inst_51601 = (inst_51599__$1 == null);
var state_51621__$1 = (function (){var statearr_51625 = state_51621;
(statearr_51625[(7)] = inst_51598__$1);

(statearr_51625[(9)] = inst_51600);

(statearr_51625[(8)] = inst_51599__$1);

return statearr_51625;
})();
if(cljs.core.truth_(inst_51601)){
var statearr_51626_53391 = state_51621__$1;
(statearr_51626_53391[(1)] = (8));

} else {
var statearr_51627_53392 = state_51621__$1;
(statearr_51627_53392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (1))){
var inst_51586 = cljs.core.vec(chs);
var inst_51587 = inst_51586;
var state_51621__$1 = (function (){var statearr_51629 = state_51621;
(statearr_51629[(10)] = inst_51587);

return statearr_51629;
})();
var statearr_51630_53396 = state_51621__$1;
(statearr_51630_53396[(2)] = null);

(statearr_51630_53396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (4))){
var inst_51587 = (state_51621[(10)]);
var state_51621__$1 = state_51621;
return cljs.core.async.ioc_alts_BANG_(state_51621__$1,(7),inst_51587);
} else {
if((state_val_51622 === (6))){
var inst_51615 = (state_51621[(2)]);
var state_51621__$1 = state_51621;
var statearr_51632_53397 = state_51621__$1;
(statearr_51632_53397[(2)] = inst_51615);

(statearr_51632_53397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (3))){
var inst_51617 = (state_51621[(2)]);
var state_51621__$1 = state_51621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51621__$1,inst_51617);
} else {
if((state_val_51622 === (2))){
var inst_51587 = (state_51621[(10)]);
var inst_51590 = cljs.core.count(inst_51587);
var inst_51591 = (inst_51590 > (0));
var state_51621__$1 = state_51621;
if(cljs.core.truth_(inst_51591)){
var statearr_51638_53402 = state_51621__$1;
(statearr_51638_53402[(1)] = (4));

} else {
var statearr_51640_53404 = state_51621__$1;
(statearr_51640_53404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (11))){
var inst_51587 = (state_51621[(10)]);
var inst_51608 = (state_51621[(2)]);
var tmp51635 = inst_51587;
var inst_51587__$1 = tmp51635;
var state_51621__$1 = (function (){var statearr_51643 = state_51621;
(statearr_51643[(11)] = inst_51608);

(statearr_51643[(10)] = inst_51587__$1);

return statearr_51643;
})();
var statearr_51645_53405 = state_51621__$1;
(statearr_51645_53405[(2)] = null);

(statearr_51645_53405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (9))){
var inst_51599 = (state_51621[(8)]);
var state_51621__$1 = state_51621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51621__$1,(11),out,inst_51599);
} else {
if((state_val_51622 === (5))){
var inst_51613 = cljs.core.async.close_BANG_(out);
var state_51621__$1 = state_51621;
var statearr_51652_53409 = state_51621__$1;
(statearr_51652_53409[(2)] = inst_51613);

(statearr_51652_53409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (10))){
var inst_51611 = (state_51621[(2)]);
var state_51621__$1 = state_51621;
var statearr_51654_53410 = state_51621__$1;
(statearr_51654_53410[(2)] = inst_51611);

(statearr_51654_53410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51622 === (8))){
var inst_51598 = (state_51621[(7)]);
var inst_51600 = (state_51621[(9)]);
var inst_51599 = (state_51621[(8)]);
var inst_51587 = (state_51621[(10)]);
var inst_51603 = (function (){var cs = inst_51587;
var vec__51593 = inst_51598;
var v = inst_51599;
var c = inst_51600;
return (function (p1__51580_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51580_SHARP_);
});
})();
var inst_51604 = cljs.core.filterv(inst_51603,inst_51587);
var inst_51587__$1 = inst_51604;
var state_51621__$1 = (function (){var statearr_51657 = state_51621;
(statearr_51657[(10)] = inst_51587__$1);

return statearr_51657;
})();
var statearr_51660_53417 = state_51621__$1;
(statearr_51660_53417[(2)] = null);

(statearr_51660_53417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_51669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51669[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_51669[(1)] = (1));

return statearr_51669;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_51621){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51621);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e51670){var ex__49226__auto__ = e51670;
var statearr_51672_53421 = state_51621;
(statearr_51672_53421[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51621[(4)]))){
var statearr_51673_53422 = state_51621;
(statearr_51673_53422[(1)] = cljs.core.first((state_51621[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53424 = state_51621;
state_51621 = G__53424;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_51621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_51621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_51676 = f__49412__auto__();
(statearr_51676[(6)] = c__49409__auto___53390);

return statearr_51676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51680 = arguments.length;
switch (G__51680) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49409__auto___53430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51707){
var state_val_51708 = (state_51707[(1)]);
if((state_val_51708 === (7))){
var inst_51689 = (state_51707[(7)]);
var inst_51689__$1 = (state_51707[(2)]);
var inst_51690 = (inst_51689__$1 == null);
var inst_51691 = cljs.core.not(inst_51690);
var state_51707__$1 = (function (){var statearr_51709 = state_51707;
(statearr_51709[(7)] = inst_51689__$1);

return statearr_51709;
})();
if(inst_51691){
var statearr_51712_53434 = state_51707__$1;
(statearr_51712_53434[(1)] = (8));

} else {
var statearr_51713_53435 = state_51707__$1;
(statearr_51713_53435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (1))){
var inst_51684 = (0);
var state_51707__$1 = (function (){var statearr_51715 = state_51707;
(statearr_51715[(8)] = inst_51684);

return statearr_51715;
})();
var statearr_51716_53436 = state_51707__$1;
(statearr_51716_53436[(2)] = null);

(statearr_51716_53436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (4))){
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51707__$1,(7),ch);
} else {
if((state_val_51708 === (6))){
var inst_51702 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51721_53446 = state_51707__$1;
(statearr_51721_53446[(2)] = inst_51702);

(statearr_51721_53446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (3))){
var inst_51704 = (state_51707[(2)]);
var inst_51705 = cljs.core.async.close_BANG_(out);
var state_51707__$1 = (function (){var statearr_51726 = state_51707;
(statearr_51726[(9)] = inst_51704);

return statearr_51726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51707__$1,inst_51705);
} else {
if((state_val_51708 === (2))){
var inst_51684 = (state_51707[(8)]);
var inst_51686 = (inst_51684 < n);
var state_51707__$1 = state_51707;
if(cljs.core.truth_(inst_51686)){
var statearr_51735_53450 = state_51707__$1;
(statearr_51735_53450[(1)] = (4));

} else {
var statearr_51736_53452 = state_51707__$1;
(statearr_51736_53452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (11))){
var inst_51684 = (state_51707[(8)]);
var inst_51694 = (state_51707[(2)]);
var inst_51695 = (inst_51684 + (1));
var inst_51684__$1 = inst_51695;
var state_51707__$1 = (function (){var statearr_51738 = state_51707;
(statearr_51738[(8)] = inst_51684__$1);

(statearr_51738[(10)] = inst_51694);

return statearr_51738;
})();
var statearr_51739_53457 = state_51707__$1;
(statearr_51739_53457[(2)] = null);

(statearr_51739_53457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (9))){
var state_51707__$1 = state_51707;
var statearr_51740_53458 = state_51707__$1;
(statearr_51740_53458[(2)] = null);

(statearr_51740_53458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (5))){
var state_51707__$1 = state_51707;
var statearr_51744_53459 = state_51707__$1;
(statearr_51744_53459[(2)] = null);

(statearr_51744_53459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (10))){
var inst_51699 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51745_53460 = state_51707__$1;
(statearr_51745_53460[(2)] = inst_51699);

(statearr_51745_53460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (8))){
var inst_51689 = (state_51707[(7)]);
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51707__$1,(11),out,inst_51689);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_51746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51746[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_51746[(1)] = (1));

return statearr_51746;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_51707){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51707);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e51747){var ex__49226__auto__ = e51747;
var statearr_51748_53471 = state_51707;
(statearr_51748_53471[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51707[(4)]))){
var statearr_51749_53472 = state_51707;
(statearr_51749_53472[(1)] = cljs.core.first((state_51707[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53473 = state_51707;
state_51707 = G__53473;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_51707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_51707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_51750 = f__49412__auto__();
(statearr_51750[(6)] = c__49409__auto___53430);

return statearr_51750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51752 = (function (f,ch,meta51753){
this.f = f;
this.ch = ch;
this.meta51753 = meta51753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51754,meta51753__$1){
var self__ = this;
var _51754__$1 = this;
return (new cljs.core.async.t_cljs$core$async51752(self__.f,self__.ch,meta51753__$1));
}));

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51754){
var self__ = this;
var _51754__$1 = this;
return self__.meta51753;
}));

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51766 = (function (f,ch,meta51753,_,fn1,meta51767){
this.f = f;
this.ch = ch;
this.meta51753 = meta51753;
this._ = _;
this.fn1 = fn1;
this.meta51767 = meta51767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51768,meta51767__$1){
var self__ = this;
var _51768__$1 = this;
return (new cljs.core.async.t_cljs$core$async51766(self__.f,self__.ch,self__.meta51753,self__._,self__.fn1,meta51767__$1));
}));

(cljs.core.async.t_cljs$core$async51766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51768){
var self__ = this;
var _51768__$1 = this;
return self__.meta51767;
}));

(cljs.core.async.t_cljs$core$async51766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51751_SHARP_){
var G__51774 = (((p1__51751_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51751_SHARP_) : self__.f.call(null,p1__51751_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51774) : f1.call(null,G__51774));
});
}));

(cljs.core.async.t_cljs$core$async51766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51753","meta51753",541489854,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51752","cljs.core.async/t_cljs$core$async51752",-662563898,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51767","meta51767",-1312362941,null)], null);
}));

(cljs.core.async.t_cljs$core$async51766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51766");

(cljs.core.async.t_cljs$core$async51766.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51766.
 */
cljs.core.async.__GT_t_cljs$core$async51766 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51766(f__$1,ch__$1,meta51753__$1,___$2,fn1__$1,meta51767){
return (new cljs.core.async.t_cljs$core$async51766(f__$1,ch__$1,meta51753__$1,___$2,fn1__$1,meta51767));
});

}

return (new cljs.core.async.t_cljs$core$async51766(self__.f,self__.ch,self__.meta51753,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51775 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51775) : self__.f.call(null,G__51775));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51753","meta51753",541489854,null)], null);
}));

(cljs.core.async.t_cljs$core$async51752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51752");

(cljs.core.async.t_cljs$core$async51752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51752.
 */
cljs.core.async.__GT_t_cljs$core$async51752 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51752(f__$1,ch__$1,meta51753){
return (new cljs.core.async.t_cljs$core$async51752(f__$1,ch__$1,meta51753));
});

}

return (new cljs.core.async.t_cljs$core$async51752(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51792 = (function (f,ch,meta51793){
this.f = f;
this.ch = ch;
this.meta51793 = meta51793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51794,meta51793__$1){
var self__ = this;
var _51794__$1 = this;
return (new cljs.core.async.t_cljs$core$async51792(self__.f,self__.ch,meta51793__$1));
}));

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51794){
var self__ = this;
var _51794__$1 = this;
return self__.meta51793;
}));

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51793","meta51793",1802184532,null)], null);
}));

(cljs.core.async.t_cljs$core$async51792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51792");

(cljs.core.async.t_cljs$core$async51792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51792.
 */
cljs.core.async.__GT_t_cljs$core$async51792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51792(f__$1,ch__$1,meta51793){
return (new cljs.core.async.t_cljs$core$async51792(f__$1,ch__$1,meta51793));
});

}

return (new cljs.core.async.t_cljs$core$async51792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51800 = (function (p,ch,meta51801){
this.p = p;
this.ch = ch;
this.meta51801 = meta51801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51802,meta51801__$1){
var self__ = this;
var _51802__$1 = this;
return (new cljs.core.async.t_cljs$core$async51800(self__.p,self__.ch,meta51801__$1));
}));

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51802){
var self__ = this;
var _51802__$1 = this;
return self__.meta51801;
}));

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51801","meta51801",900532303,null)], null);
}));

(cljs.core.async.t_cljs$core$async51800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51800");

(cljs.core.async.t_cljs$core$async51800.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51800.
 */
cljs.core.async.__GT_t_cljs$core$async51800 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51800(p__$1,ch__$1,meta51801){
return (new cljs.core.async.t_cljs$core$async51800(p__$1,ch__$1,meta51801));
});

}

return (new cljs.core.async.t_cljs$core$async51800(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51809 = arguments.length;
switch (G__51809) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49409__auto___53533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51830){
var state_val_51831 = (state_51830[(1)]);
if((state_val_51831 === (7))){
var inst_51826 = (state_51830[(2)]);
var state_51830__$1 = state_51830;
var statearr_51832_53542 = state_51830__$1;
(statearr_51832_53542[(2)] = inst_51826);

(statearr_51832_53542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (1))){
var state_51830__$1 = state_51830;
var statearr_51834_53546 = state_51830__$1;
(statearr_51834_53546[(2)] = null);

(statearr_51834_53546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (4))){
var inst_51812 = (state_51830[(7)]);
var inst_51812__$1 = (state_51830[(2)]);
var inst_51813 = (inst_51812__$1 == null);
var state_51830__$1 = (function (){var statearr_51835 = state_51830;
(statearr_51835[(7)] = inst_51812__$1);

return statearr_51835;
})();
if(cljs.core.truth_(inst_51813)){
var statearr_51836_53549 = state_51830__$1;
(statearr_51836_53549[(1)] = (5));

} else {
var statearr_51837_53550 = state_51830__$1;
(statearr_51837_53550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (6))){
var inst_51812 = (state_51830[(7)]);
var inst_51817 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51812) : p.call(null,inst_51812));
var state_51830__$1 = state_51830;
if(cljs.core.truth_(inst_51817)){
var statearr_51838_53551 = state_51830__$1;
(statearr_51838_53551[(1)] = (8));

} else {
var statearr_51839_53552 = state_51830__$1;
(statearr_51839_53552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (3))){
var inst_51828 = (state_51830[(2)]);
var state_51830__$1 = state_51830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51830__$1,inst_51828);
} else {
if((state_val_51831 === (2))){
var state_51830__$1 = state_51830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51830__$1,(4),ch);
} else {
if((state_val_51831 === (11))){
var inst_51820 = (state_51830[(2)]);
var state_51830__$1 = state_51830;
var statearr_51840_53556 = state_51830__$1;
(statearr_51840_53556[(2)] = inst_51820);

(statearr_51840_53556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (9))){
var state_51830__$1 = state_51830;
var statearr_51841_53557 = state_51830__$1;
(statearr_51841_53557[(2)] = null);

(statearr_51841_53557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (5))){
var inst_51815 = cljs.core.async.close_BANG_(out);
var state_51830__$1 = state_51830;
var statearr_51842_53558 = state_51830__$1;
(statearr_51842_53558[(2)] = inst_51815);

(statearr_51842_53558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (10))){
var inst_51823 = (state_51830[(2)]);
var state_51830__$1 = (function (){var statearr_51843 = state_51830;
(statearr_51843[(8)] = inst_51823);

return statearr_51843;
})();
var statearr_51844_53559 = state_51830__$1;
(statearr_51844_53559[(2)] = null);

(statearr_51844_53559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51831 === (8))){
var inst_51812 = (state_51830[(7)]);
var state_51830__$1 = state_51830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51830__$1,(11),out,inst_51812);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_51845 = [null,null,null,null,null,null,null,null,null];
(statearr_51845[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_51845[(1)] = (1));

return statearr_51845;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_51830){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51830);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e51846){var ex__49226__auto__ = e51846;
var statearr_51847_53566 = state_51830;
(statearr_51847_53566[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51830[(4)]))){
var statearr_51848_53568 = state_51830;
(statearr_51848_53568[(1)] = cljs.core.first((state_51830[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53569 = state_51830;
state_51830 = G__53569;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_51830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_51830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_51849 = f__49412__auto__();
(statearr_51849[(6)] = c__49409__auto___53533);

return statearr_51849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51855 = arguments.length;
switch (G__51855) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49409__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_51960){
var state_val_51961 = (state_51960[(1)]);
if((state_val_51961 === (7))){
var inst_51956 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
var statearr_51963_53574 = state_51960__$1;
(statearr_51963_53574[(2)] = inst_51956);

(statearr_51963_53574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (20))){
var inst_51926 = (state_51960[(7)]);
var inst_51937 = (state_51960[(2)]);
var inst_51938 = cljs.core.next(inst_51926);
var inst_51911 = inst_51938;
var inst_51912 = null;
var inst_51913 = (0);
var inst_51914 = (0);
var state_51960__$1 = (function (){var statearr_51964 = state_51960;
(statearr_51964[(8)] = inst_51913);

(statearr_51964[(9)] = inst_51911);

(statearr_51964[(10)] = inst_51912);

(statearr_51964[(11)] = inst_51937);

(statearr_51964[(12)] = inst_51914);

return statearr_51964;
})();
var statearr_51965_53575 = state_51960__$1;
(statearr_51965_53575[(2)] = null);

(statearr_51965_53575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (1))){
var state_51960__$1 = state_51960;
var statearr_51966_53576 = state_51960__$1;
(statearr_51966_53576[(2)] = null);

(statearr_51966_53576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (4))){
var inst_51900 = (state_51960[(13)]);
var inst_51900__$1 = (state_51960[(2)]);
var inst_51901 = (inst_51900__$1 == null);
var state_51960__$1 = (function (){var statearr_51967 = state_51960;
(statearr_51967[(13)] = inst_51900__$1);

return statearr_51967;
})();
if(cljs.core.truth_(inst_51901)){
var statearr_51968_53577 = state_51960__$1;
(statearr_51968_53577[(1)] = (5));

} else {
var statearr_51969_53578 = state_51960__$1;
(statearr_51969_53578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (15))){
var state_51960__$1 = state_51960;
var statearr_51973_53579 = state_51960__$1;
(statearr_51973_53579[(2)] = null);

(statearr_51973_53579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (21))){
var state_51960__$1 = state_51960;
var statearr_51974_53581 = state_51960__$1;
(statearr_51974_53581[(2)] = null);

(statearr_51974_53581[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (13))){
var inst_51913 = (state_51960[(8)]);
var inst_51911 = (state_51960[(9)]);
var inst_51912 = (state_51960[(10)]);
var inst_51914 = (state_51960[(12)]);
var inst_51921 = (state_51960[(2)]);
var inst_51922 = (inst_51914 + (1));
var tmp51970 = inst_51913;
var tmp51971 = inst_51911;
var tmp51972 = inst_51912;
var inst_51911__$1 = tmp51971;
var inst_51912__$1 = tmp51972;
var inst_51913__$1 = tmp51970;
var inst_51914__$1 = inst_51922;
var state_51960__$1 = (function (){var statearr_51975 = state_51960;
(statearr_51975[(8)] = inst_51913__$1);

(statearr_51975[(9)] = inst_51911__$1);

(statearr_51975[(10)] = inst_51912__$1);

(statearr_51975[(14)] = inst_51921);

(statearr_51975[(12)] = inst_51914__$1);

return statearr_51975;
})();
var statearr_51976_53585 = state_51960__$1;
(statearr_51976_53585[(2)] = null);

(statearr_51976_53585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (22))){
var state_51960__$1 = state_51960;
var statearr_51977_53586 = state_51960__$1;
(statearr_51977_53586[(2)] = null);

(statearr_51977_53586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (6))){
var inst_51900 = (state_51960[(13)]);
var inst_51909 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51900) : f.call(null,inst_51900));
var inst_51910 = cljs.core.seq(inst_51909);
var inst_51911 = inst_51910;
var inst_51912 = null;
var inst_51913 = (0);
var inst_51914 = (0);
var state_51960__$1 = (function (){var statearr_51978 = state_51960;
(statearr_51978[(8)] = inst_51913);

(statearr_51978[(9)] = inst_51911);

(statearr_51978[(10)] = inst_51912);

(statearr_51978[(12)] = inst_51914);

return statearr_51978;
})();
var statearr_51979_53597 = state_51960__$1;
(statearr_51979_53597[(2)] = null);

(statearr_51979_53597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (17))){
var inst_51926 = (state_51960[(7)]);
var inst_51930 = cljs.core.chunk_first(inst_51926);
var inst_51931 = cljs.core.chunk_rest(inst_51926);
var inst_51932 = cljs.core.count(inst_51930);
var inst_51911 = inst_51931;
var inst_51912 = inst_51930;
var inst_51913 = inst_51932;
var inst_51914 = (0);
var state_51960__$1 = (function (){var statearr_51980 = state_51960;
(statearr_51980[(8)] = inst_51913);

(statearr_51980[(9)] = inst_51911);

(statearr_51980[(10)] = inst_51912);

(statearr_51980[(12)] = inst_51914);

return statearr_51980;
})();
var statearr_51981_53600 = state_51960__$1;
(statearr_51981_53600[(2)] = null);

(statearr_51981_53600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (3))){
var inst_51958 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51960__$1,inst_51958);
} else {
if((state_val_51961 === (12))){
var inst_51946 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
var statearr_51982_53603 = state_51960__$1;
(statearr_51982_53603[(2)] = inst_51946);

(statearr_51982_53603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (2))){
var state_51960__$1 = state_51960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51960__$1,(4),in$);
} else {
if((state_val_51961 === (23))){
var inst_51954 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
var statearr_51983_53612 = state_51960__$1;
(statearr_51983_53612[(2)] = inst_51954);

(statearr_51983_53612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (19))){
var inst_51941 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
var statearr_51984_53615 = state_51960__$1;
(statearr_51984_53615[(2)] = inst_51941);

(statearr_51984_53615[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (11))){
var inst_51911 = (state_51960[(9)]);
var inst_51926 = (state_51960[(7)]);
var inst_51926__$1 = cljs.core.seq(inst_51911);
var state_51960__$1 = (function (){var statearr_51985 = state_51960;
(statearr_51985[(7)] = inst_51926__$1);

return statearr_51985;
})();
if(inst_51926__$1){
var statearr_51986_53618 = state_51960__$1;
(statearr_51986_53618[(1)] = (14));

} else {
var statearr_51987_53619 = state_51960__$1;
(statearr_51987_53619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (9))){
var inst_51948 = (state_51960[(2)]);
var inst_51949 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51960__$1 = (function (){var statearr_51988 = state_51960;
(statearr_51988[(15)] = inst_51948);

return statearr_51988;
})();
if(cljs.core.truth_(inst_51949)){
var statearr_51989_53627 = state_51960__$1;
(statearr_51989_53627[(1)] = (21));

} else {
var statearr_51990_53628 = state_51960__$1;
(statearr_51990_53628[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (5))){
var inst_51903 = cljs.core.async.close_BANG_(out);
var state_51960__$1 = state_51960;
var statearr_51995_53639 = state_51960__$1;
(statearr_51995_53639[(2)] = inst_51903);

(statearr_51995_53639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (14))){
var inst_51926 = (state_51960[(7)]);
var inst_51928 = cljs.core.chunked_seq_QMARK_(inst_51926);
var state_51960__$1 = state_51960;
if(inst_51928){
var statearr_51996_53642 = state_51960__$1;
(statearr_51996_53642[(1)] = (17));

} else {
var statearr_51997_53645 = state_51960__$1;
(statearr_51997_53645[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (16))){
var inst_51944 = (state_51960[(2)]);
var state_51960__$1 = state_51960;
var statearr_51998_53650 = state_51960__$1;
(statearr_51998_53650[(2)] = inst_51944);

(statearr_51998_53650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51961 === (10))){
var inst_51912 = (state_51960[(10)]);
var inst_51914 = (state_51960[(12)]);
var inst_51919 = cljs.core._nth(inst_51912,inst_51914);
var state_51960__$1 = state_51960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51960__$1,(13),out,inst_51919);
} else {
if((state_val_51961 === (18))){
var inst_51926 = (state_51960[(7)]);
var inst_51935 = cljs.core.first(inst_51926);
var state_51960__$1 = state_51960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51960__$1,(20),out,inst_51935);
} else {
if((state_val_51961 === (8))){
var inst_51913 = (state_51960[(8)]);
var inst_51914 = (state_51960[(12)]);
var inst_51916 = (inst_51914 < inst_51913);
var inst_51917 = inst_51916;
var state_51960__$1 = state_51960;
if(cljs.core.truth_(inst_51917)){
var statearr_51999_53665 = state_51960__$1;
(statearr_51999_53665[(1)] = (10));

} else {
var statearr_52000_53667 = state_51960__$1;
(statearr_52000_53667[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49223__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49223__auto____0 = (function (){
var statearr_52001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52001[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49223__auto__);

(statearr_52001[(1)] = (1));

return statearr_52001;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49223__auto____1 = (function (state_51960){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_51960);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e52002){var ex__49226__auto__ = e52002;
var statearr_52003_53683 = state_51960;
(statearr_52003_53683[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_51960[(4)]))){
var statearr_52004_53684 = state_51960;
(statearr_52004_53684[(1)] = cljs.core.first((state_51960[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53688 = state_51960;
state_51960 = G__53688;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49223__auto__ = function(state_51960){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49223__auto____1.call(this,state_51960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49223__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49223__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_52005 = f__49412__auto__();
(statearr_52005[(6)] = c__49409__auto__);

return statearr_52005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));

return c__49409__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52007 = arguments.length;
switch (G__52007) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52009 = arguments.length;
switch (G__52009) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52011 = arguments.length;
switch (G__52011) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49409__auto___53714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_52037){
var state_val_52038 = (state_52037[(1)]);
if((state_val_52038 === (7))){
var inst_52032 = (state_52037[(2)]);
var state_52037__$1 = state_52037;
var statearr_52039_53716 = state_52037__$1;
(statearr_52039_53716[(2)] = inst_52032);

(statearr_52039_53716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (1))){
var inst_52014 = null;
var state_52037__$1 = (function (){var statearr_52040 = state_52037;
(statearr_52040[(7)] = inst_52014);

return statearr_52040;
})();
var statearr_52041_53717 = state_52037__$1;
(statearr_52041_53717[(2)] = null);

(statearr_52041_53717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (4))){
var inst_52017 = (state_52037[(8)]);
var inst_52017__$1 = (state_52037[(2)]);
var inst_52018 = (inst_52017__$1 == null);
var inst_52019 = cljs.core.not(inst_52018);
var state_52037__$1 = (function (){var statearr_52042 = state_52037;
(statearr_52042[(8)] = inst_52017__$1);

return statearr_52042;
})();
if(inst_52019){
var statearr_52043_53722 = state_52037__$1;
(statearr_52043_53722[(1)] = (5));

} else {
var statearr_52044_53723 = state_52037__$1;
(statearr_52044_53723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (6))){
var state_52037__$1 = state_52037;
var statearr_52045_53724 = state_52037__$1;
(statearr_52045_53724[(2)] = null);

(statearr_52045_53724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (3))){
var inst_52034 = (state_52037[(2)]);
var inst_52035 = cljs.core.async.close_BANG_(out);
var state_52037__$1 = (function (){var statearr_52046 = state_52037;
(statearr_52046[(9)] = inst_52034);

return statearr_52046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52037__$1,inst_52035);
} else {
if((state_val_52038 === (2))){
var state_52037__$1 = state_52037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52037__$1,(4),ch);
} else {
if((state_val_52038 === (11))){
var inst_52017 = (state_52037[(8)]);
var inst_52026 = (state_52037[(2)]);
var inst_52014 = inst_52017;
var state_52037__$1 = (function (){var statearr_52047 = state_52037;
(statearr_52047[(7)] = inst_52014);

(statearr_52047[(10)] = inst_52026);

return statearr_52047;
})();
var statearr_52048_53731 = state_52037__$1;
(statearr_52048_53731[(2)] = null);

(statearr_52048_53731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (9))){
var inst_52017 = (state_52037[(8)]);
var state_52037__$1 = state_52037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52037__$1,(11),out,inst_52017);
} else {
if((state_val_52038 === (5))){
var inst_52017 = (state_52037[(8)]);
var inst_52014 = (state_52037[(7)]);
var inst_52021 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52017,inst_52014);
var state_52037__$1 = state_52037;
if(inst_52021){
var statearr_52050_53733 = state_52037__$1;
(statearr_52050_53733[(1)] = (8));

} else {
var statearr_52051_53734 = state_52037__$1;
(statearr_52051_53734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (10))){
var inst_52029 = (state_52037[(2)]);
var state_52037__$1 = state_52037;
var statearr_52052_53736 = state_52037__$1;
(statearr_52052_53736[(2)] = inst_52029);

(statearr_52052_53736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52038 === (8))){
var inst_52014 = (state_52037[(7)]);
var tmp52049 = inst_52014;
var inst_52014__$1 = tmp52049;
var state_52037__$1 = (function (){var statearr_52053 = state_52037;
(statearr_52053[(7)] = inst_52014__$1);

return statearr_52053;
})();
var statearr_52054_53741 = state_52037__$1;
(statearr_52054_53741[(2)] = null);

(statearr_52054_53741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_52055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52055[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_52055[(1)] = (1));

return statearr_52055;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_52037){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_52037);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e52056){var ex__49226__auto__ = e52056;
var statearr_52057_53751 = state_52037;
(statearr_52057_53751[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_52037[(4)]))){
var statearr_52058_53752 = state_52037;
(statearr_52058_53752[(1)] = cljs.core.first((state_52037[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53754 = state_52037;
state_52037 = G__53754;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_52037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_52037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_52059 = f__49412__auto__();
(statearr_52059[(6)] = c__49409__auto___53714);

return statearr_52059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52061 = arguments.length;
switch (G__52061) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49409__auto___53756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_52103){
var state_val_52104 = (state_52103[(1)]);
if((state_val_52104 === (7))){
var inst_52099 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
var statearr_52105_53757 = state_52103__$1;
(statearr_52105_53757[(2)] = inst_52099);

(statearr_52105_53757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (1))){
var inst_52066 = (new Array(n));
var inst_52067 = inst_52066;
var inst_52068 = (0);
var state_52103__$1 = (function (){var statearr_52106 = state_52103;
(statearr_52106[(7)] = inst_52068);

(statearr_52106[(8)] = inst_52067);

return statearr_52106;
})();
var statearr_52107_53758 = state_52103__$1;
(statearr_52107_53758[(2)] = null);

(statearr_52107_53758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (4))){
var inst_52071 = (state_52103[(9)]);
var inst_52071__$1 = (state_52103[(2)]);
var inst_52072 = (inst_52071__$1 == null);
var inst_52073 = cljs.core.not(inst_52072);
var state_52103__$1 = (function (){var statearr_52108 = state_52103;
(statearr_52108[(9)] = inst_52071__$1);

return statearr_52108;
})();
if(inst_52073){
var statearr_52109_53764 = state_52103__$1;
(statearr_52109_53764[(1)] = (5));

} else {
var statearr_52110_53765 = state_52103__$1;
(statearr_52110_53765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (15))){
var inst_52093 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
var statearr_52111_53770 = state_52103__$1;
(statearr_52111_53770[(2)] = inst_52093);

(statearr_52111_53770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (13))){
var state_52103__$1 = state_52103;
var statearr_52114_53772 = state_52103__$1;
(statearr_52114_53772[(2)] = null);

(statearr_52114_53772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (6))){
var inst_52068 = (state_52103[(7)]);
var inst_52089 = (inst_52068 > (0));
var state_52103__$1 = state_52103;
if(cljs.core.truth_(inst_52089)){
var statearr_52116_53777 = state_52103__$1;
(statearr_52116_53777[(1)] = (12));

} else {
var statearr_52117_53778 = state_52103__$1;
(statearr_52117_53778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (3))){
var inst_52101 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52103__$1,inst_52101);
} else {
if((state_val_52104 === (12))){
var inst_52067 = (state_52103[(8)]);
var inst_52091 = cljs.core.vec(inst_52067);
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52103__$1,(15),out,inst_52091);
} else {
if((state_val_52104 === (2))){
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52103__$1,(4),ch);
} else {
if((state_val_52104 === (11))){
var inst_52083 = (state_52103[(2)]);
var inst_52084 = (new Array(n));
var inst_52067 = inst_52084;
var inst_52068 = (0);
var state_52103__$1 = (function (){var statearr_52122 = state_52103;
(statearr_52122[(7)] = inst_52068);

(statearr_52122[(8)] = inst_52067);

(statearr_52122[(10)] = inst_52083);

return statearr_52122;
})();
var statearr_52123_53783 = state_52103__$1;
(statearr_52123_53783[(2)] = null);

(statearr_52123_53783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (9))){
var inst_52067 = (state_52103[(8)]);
var inst_52081 = cljs.core.vec(inst_52067);
var state_52103__$1 = state_52103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52103__$1,(11),out,inst_52081);
} else {
if((state_val_52104 === (5))){
var inst_52068 = (state_52103[(7)]);
var inst_52067 = (state_52103[(8)]);
var inst_52071 = (state_52103[(9)]);
var inst_52076 = (state_52103[(11)]);
var inst_52075 = (inst_52067[inst_52068] = inst_52071);
var inst_52076__$1 = (inst_52068 + (1));
var inst_52077 = (inst_52076__$1 < n);
var state_52103__$1 = (function (){var statearr_52125 = state_52103;
(statearr_52125[(12)] = inst_52075);

(statearr_52125[(11)] = inst_52076__$1);

return statearr_52125;
})();
if(cljs.core.truth_(inst_52077)){
var statearr_52126_53790 = state_52103__$1;
(statearr_52126_53790[(1)] = (8));

} else {
var statearr_52127_53791 = state_52103__$1;
(statearr_52127_53791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (14))){
var inst_52096 = (state_52103[(2)]);
var inst_52097 = cljs.core.async.close_BANG_(out);
var state_52103__$1 = (function (){var statearr_52130 = state_52103;
(statearr_52130[(13)] = inst_52096);

return statearr_52130;
})();
var statearr_52131_53796 = state_52103__$1;
(statearr_52131_53796[(2)] = inst_52097);

(statearr_52131_53796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (10))){
var inst_52087 = (state_52103[(2)]);
var state_52103__$1 = state_52103;
var statearr_52132_53797 = state_52103__$1;
(statearr_52132_53797[(2)] = inst_52087);

(statearr_52132_53797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52104 === (8))){
var inst_52067 = (state_52103[(8)]);
var inst_52076 = (state_52103[(11)]);
var tmp52128 = inst_52067;
var inst_52067__$1 = tmp52128;
var inst_52068 = inst_52076;
var state_52103__$1 = (function (){var statearr_52134 = state_52103;
(statearr_52134[(7)] = inst_52068);

(statearr_52134[(8)] = inst_52067__$1);

return statearr_52134;
})();
var statearr_52135_53802 = state_52103__$1;
(statearr_52135_53802[(2)] = null);

(statearr_52135_53802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_52136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52136[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_52136[(1)] = (1));

return statearr_52136;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_52103){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_52103);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e52138){var ex__49226__auto__ = e52138;
var statearr_52139_53812 = state_52103;
(statearr_52139_53812[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_52103[(4)]))){
var statearr_52144_53813 = state_52103;
(statearr_52144_53813[(1)] = cljs.core.first((state_52103[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53815 = state_52103;
state_52103 = G__53815;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_52103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_52103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_52145 = f__49412__auto__();
(statearr_52145[(6)] = c__49409__auto___53756);

return statearr_52145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52148 = arguments.length;
switch (G__52148) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__49409__auto___53824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49412__auto__ = (function (){var switch__49222__auto__ = (function (state_52191){
var state_val_52192 = (state_52191[(1)]);
if((state_val_52192 === (7))){
var inst_52187 = (state_52191[(2)]);
var state_52191__$1 = state_52191;
var statearr_52193_53825 = state_52191__$1;
(statearr_52193_53825[(2)] = inst_52187);

(statearr_52193_53825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (1))){
var inst_52150 = [];
var inst_52151 = inst_52150;
var inst_52152 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52191__$1 = (function (){var statearr_52194 = state_52191;
(statearr_52194[(7)] = inst_52152);

(statearr_52194[(8)] = inst_52151);

return statearr_52194;
})();
var statearr_52195_53827 = state_52191__$1;
(statearr_52195_53827[(2)] = null);

(statearr_52195_53827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (4))){
var inst_52155 = (state_52191[(9)]);
var inst_52155__$1 = (state_52191[(2)]);
var inst_52156 = (inst_52155__$1 == null);
var inst_52157 = cljs.core.not(inst_52156);
var state_52191__$1 = (function (){var statearr_52196 = state_52191;
(statearr_52196[(9)] = inst_52155__$1);

return statearr_52196;
})();
if(inst_52157){
var statearr_52197_53828 = state_52191__$1;
(statearr_52197_53828[(1)] = (5));

} else {
var statearr_52198_53829 = state_52191__$1;
(statearr_52198_53829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (15))){
var inst_52181 = (state_52191[(2)]);
var state_52191__$1 = state_52191;
var statearr_52199_53830 = state_52191__$1;
(statearr_52199_53830[(2)] = inst_52181);

(statearr_52199_53830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (13))){
var state_52191__$1 = state_52191;
var statearr_52200_53831 = state_52191__$1;
(statearr_52200_53831[(2)] = null);

(statearr_52200_53831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (6))){
var inst_52151 = (state_52191[(8)]);
var inst_52176 = inst_52151.length;
var inst_52177 = (inst_52176 > (0));
var state_52191__$1 = state_52191;
if(cljs.core.truth_(inst_52177)){
var statearr_52201_53832 = state_52191__$1;
(statearr_52201_53832[(1)] = (12));

} else {
var statearr_52202_53833 = state_52191__$1;
(statearr_52202_53833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (3))){
var inst_52189 = (state_52191[(2)]);
var state_52191__$1 = state_52191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52191__$1,inst_52189);
} else {
if((state_val_52192 === (12))){
var inst_52151 = (state_52191[(8)]);
var inst_52179 = cljs.core.vec(inst_52151);
var state_52191__$1 = state_52191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52191__$1,(15),out,inst_52179);
} else {
if((state_val_52192 === (2))){
var state_52191__$1 = state_52191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52191__$1,(4),ch);
} else {
if((state_val_52192 === (11))){
var inst_52155 = (state_52191[(9)]);
var inst_52159 = (state_52191[(10)]);
var inst_52169 = (state_52191[(2)]);
var inst_52170 = [];
var inst_52171 = inst_52170.push(inst_52155);
var inst_52151 = inst_52170;
var inst_52152 = inst_52159;
var state_52191__$1 = (function (){var statearr_52203 = state_52191;
(statearr_52203[(7)] = inst_52152);

(statearr_52203[(8)] = inst_52151);

(statearr_52203[(11)] = inst_52171);

(statearr_52203[(12)] = inst_52169);

return statearr_52203;
})();
var statearr_52204_53836 = state_52191__$1;
(statearr_52204_53836[(2)] = null);

(statearr_52204_53836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (9))){
var inst_52151 = (state_52191[(8)]);
var inst_52167 = cljs.core.vec(inst_52151);
var state_52191__$1 = state_52191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52191__$1,(11),out,inst_52167);
} else {
if((state_val_52192 === (5))){
var inst_52152 = (state_52191[(7)]);
var inst_52155 = (state_52191[(9)]);
var inst_52159 = (state_52191[(10)]);
var inst_52159__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52155) : f.call(null,inst_52155));
var inst_52160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52159__$1,inst_52152);
var inst_52161 = cljs.core.keyword_identical_QMARK_(inst_52152,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52162 = ((inst_52160) || (inst_52161));
var state_52191__$1 = (function (){var statearr_52207 = state_52191;
(statearr_52207[(10)] = inst_52159__$1);

return statearr_52207;
})();
if(cljs.core.truth_(inst_52162)){
var statearr_52208_53843 = state_52191__$1;
(statearr_52208_53843[(1)] = (8));

} else {
var statearr_52209_53844 = state_52191__$1;
(statearr_52209_53844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (14))){
var inst_52184 = (state_52191[(2)]);
var inst_52185 = cljs.core.async.close_BANG_(out);
var state_52191__$1 = (function (){var statearr_52211 = state_52191;
(statearr_52211[(13)] = inst_52184);

return statearr_52211;
})();
var statearr_52212_53845 = state_52191__$1;
(statearr_52212_53845[(2)] = inst_52185);

(statearr_52212_53845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (10))){
var inst_52174 = (state_52191[(2)]);
var state_52191__$1 = state_52191;
var statearr_52213_53846 = state_52191__$1;
(statearr_52213_53846[(2)] = inst_52174);

(statearr_52213_53846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52192 === (8))){
var inst_52151 = (state_52191[(8)]);
var inst_52155 = (state_52191[(9)]);
var inst_52159 = (state_52191[(10)]);
var inst_52164 = inst_52151.push(inst_52155);
var tmp52210 = inst_52151;
var inst_52151__$1 = tmp52210;
var inst_52152 = inst_52159;
var state_52191__$1 = (function (){var statearr_52214 = state_52191;
(statearr_52214[(14)] = inst_52164);

(statearr_52214[(7)] = inst_52152);

(statearr_52214[(8)] = inst_52151__$1);

return statearr_52214;
})();
var statearr_52215_53850 = state_52191__$1;
(statearr_52215_53850[(2)] = null);

(statearr_52215_53850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49223__auto__ = null;
var cljs$core$async$state_machine__49223__auto____0 = (function (){
var statearr_52216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52216[(0)] = cljs$core$async$state_machine__49223__auto__);

(statearr_52216[(1)] = (1));

return statearr_52216;
});
var cljs$core$async$state_machine__49223__auto____1 = (function (state_52191){
while(true){
var ret_value__49224__auto__ = (function (){try{while(true){
var result__49225__auto__ = switch__49222__auto__(state_52191);
if(cljs.core.keyword_identical_QMARK_(result__49225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49225__auto__;
}
break;
}
}catch (e52218){var ex__49226__auto__ = e52218;
var statearr_52219_53851 = state_52191;
(statearr_52219_53851[(2)] = ex__49226__auto__);


if(cljs.core.seq((state_52191[(4)]))){
var statearr_52220_53852 = state_52191;
(statearr_52220_53852[(1)] = cljs.core.first((state_52191[(4)])));

} else {
throw ex__49226__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53855 = state_52191;
state_52191 = G__53855;
continue;
} else {
return ret_value__49224__auto__;
}
break;
}
});
cljs$core$async$state_machine__49223__auto__ = function(state_52191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49223__auto____1.call(this,state_52191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49223__auto____0;
cljs$core$async$state_machine__49223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49223__auto____1;
return cljs$core$async$state_machine__49223__auto__;
})()
})();
var state__49413__auto__ = (function (){var statearr_52226 = f__49412__auto__();
(statearr_52226[(6)] = c__49409__auto___53824);

return statearr_52226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49413__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
