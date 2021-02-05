goog.provide('marketmate.subs');
marketmate.subs.forms_db_path = new cljs.core.Keyword(null,"forms","forms",2045992350);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,marketmate.db.forms_path);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"form-value","form-value",-1466863926),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350)], null),(function (forms_data,p__42718){
var vec__42719 = p__42718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(0),null);
var form_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(1),null);
var field_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(forms_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_id,field_path], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","data","pos-calc/data",686062865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350)], null),(function (forms_data,p__42722){
var vec__42723 = p__42722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42723,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42723,(1),null);
return new cljs.core.Keyword(null,"position-calc","position-calc",-82073486).cljs$core$IFn$_invoke$arity$1(forms_data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","calc","pos-calc/calc",-2090856946),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pos-calc","data","pos-calc/data",686062865)], null),(function (data,p__42726){
var vec__42727 = p__42726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42727,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42727,(1),null);
return marketmate.calc.calc_position(new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"stop-loss","stop-loss",1827451149).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"exit","exit",351849638).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"risk-limit","risk-limit",301468559).cljs$core$IFn$_invoke$arity$1(data));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","quantity","pos-calc/quantity",591939624),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pos-calc","calc","pos-calc/calc",-2090856946)], null),(function (data,p__42730){
var vec__42731 = p__42730;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42731,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42731,(1),null);
return new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","profit","pos-calc/profit",158320156),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pos-calc","calc","pos-calc/calc",-2090856946)], null),(function (data,p__42734){
var vec__42735 = p__42734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42735,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42735,(1),null);
return new cljs.core.Keyword(null,"profit","profit",-533264438).cljs$core$IFn$_invoke$arity$1(data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","loss","pos-calc/loss",1782792584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pos-calc","calc","pos-calc/calc",-2090856946)], null),(function (data,p__42738){
var vec__42739 = p__42738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42739,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42739,(1),null);
return new cljs.core.Keyword(null,"loss","loss",-1014627430).cljs$core$IFn$_invoke$arity$1(data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","risk-reward","pos-calc/risk-reward",-216076840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pos-calc","calc","pos-calc/calc",-2090856946)], null),(function (data,p__42742){
var vec__42743 = p__42742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42743,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42743,(1),null);
return new cljs.core.Keyword(null,"risk-reward","risk-reward",1541546986).cljs$core$IFn$_invoke$arity$1(data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("pos-calc","leverage","pos-calc/leverage",1867837328),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pos-calc","calc","pos-calc/calc",-2090856946)], null),(function (data,p__42746){
var vec__42747 = p__42746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42747,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42747,(1),null);
return new cljs.core.Keyword(null,"leverage","leverage",-1441157150).cljs$core$IFn$_invoke$arity$1(data);
})], 0));

//# sourceMappingURL=marketmate.subs.js.map
