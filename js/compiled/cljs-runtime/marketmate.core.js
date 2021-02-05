goog.provide('marketmate.core');
marketmate.core.dev_setup = (function marketmate$core$dev_setup(){
if(marketmate.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
marketmate.core.mount_root = (function marketmate$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marketmate.views.main_panel], null),root_el);
});
marketmate.core.init = (function marketmate$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("marketmate.events","initialize-db","marketmate.events/initialize-db",-1554046522)], null));

marketmate.core.dev_setup();

return marketmate.core.mount_root();
});

//# sourceMappingURL=marketmate.core.js.map
