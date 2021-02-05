goog.provide('marketmate.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("marketmate.events","initialize-db","marketmate.events/initialize-db",-1554046522),(function (_,___$1){
return marketmate.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-form-field","set-form-field",-1461262443),(function (db,p__42262){
var vec__42263 = p__42262;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(0),null);
var form_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(1),null);
var field_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(2),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marketmate.db.forms_path,form_id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_path)], null),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-form","clear-form",-1594897196),(function (db,p__42266){
var vec__42267 = p__42266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(0),null);
var form_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marketmate.db.forms_path,form_id], null),cljs.core.PersistentArrayMap.EMPTY);
}));

//# sourceMappingURL=marketmate.events.js.map
