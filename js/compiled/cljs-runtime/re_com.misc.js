goog.provide('re_com.misc');
re_com.misc.throbber_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.throbber_size_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.throbber_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"#999",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS color"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the throbber, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the throbber, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the throbber, not the wrapping div)"], null)], null)], null);
/**
 * Render an animated throbber using CSS
 */
re_com.misc.throbber = (function re_com$misc$throbber(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49915 = arguments.length;
var i__4737__auto___49916 = (0);
while(true){
if((i__4737__auto___49916 < len__4736__auto___49915)){
args__4742__auto__.push((arguments[i__4737__auto___49916]));

var G__49918 = (i__4737__auto___49916 + (1));
i__4737__auto___49916 = G__49918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic = (function (p__49650){
var map__49651 = p__49650;
var map__49651__$1 = (((((!((map__49651 == null))))?(((((map__49651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49651):map__49651);
var args = map__49651__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49651__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.throbber_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throbber"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro throbber-args-desc args \"throbber\")"));
}

var seg = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null):null)], null);
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-throbber-wrapper",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-throbber loader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__49663 = size;
var G__49663__$1 = (((G__49663 instanceof cljs.core.Keyword))?G__49663.fqn:null);
switch (G__49663__$1) {
case "regular":
return "";

break;
case "smaller":
return "smaller ";

break;
case "small":
return "small ";

break;
case "large":
return "large ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style], null),attr], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null)], null)], null);
}));

(re_com.misc.throbber.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.throbber.cljs$lang$applyTo = (function (seq49642){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49642));
}));

re_com.misc.input_text_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string/nil | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.nillable_string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"text of the input (can be atom or value/nil)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. Passed the current input string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(3),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"ONLY applies to 'input-textarea': the number of rows of text to show"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," function on blur, otherwise on every change (character by character)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"regex",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.regex_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user input is only accepted if it would result in a string that matches this regular expression"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the textbox, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"ONLY applies to super function 'base-input-text': either ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":input"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":password"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":textarea"], null)], null)], null)], null);
/**
 * Returns markup for a basic text input label
 */
re_com.misc.input_text_base = (function re_com$misc$input_text_base(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49996 = arguments.length;
var i__4737__auto___49999 = (0);
while(true){
if((i__4737__auto___49999 < len__4736__auto___49996)){
args__4742__auto__.push((arguments[i__4737__auto___49999]));

var G__50008 = (i__4737__auto___49999 + (1));
i__4737__auto___49999 = G__50008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__49692){
var map__49693 = p__49692;
var map__49693__$1 = (((((!((map__49693 == null))))?(((((map__49693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49693):map__49693);
var args = map__49693__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"model","model",331153215));
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.input_text_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-text"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(external_model) == null))?"":cljs.core.deref(external_model)));
return (function() { 
var G__50019__delegate = function (p__49703){
var map__49706 = p__49703;
var map__49706__$1 = (((((!((map__49706 == null))))?(((((map__49706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49706):map__49706);
var args__$1 = map__49706__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49706__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var validation_regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.input_text_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["input-text"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var latest_ext_model = re_com.util.deref_or_value(model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),latest_ext_model)){
cljs.core.reset_BANG_(external_model,latest_ext_model);

cljs.core.reset_BANG_(internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__49716 = status;
var G__49716__$1 = (((G__49716 instanceof cljs.core.Keyword))?G__49716.fqn:null);
switch (G__49716__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),(cljs.core.truth_((function (){var and__4115__auto__ = status;
if(cljs.core.truth_(and__4115__auto__)){
return status_icon_QMARK_;
} else {
return and__4115__auto__;
}
})())?"has-feedback":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,new cljs.core.Keyword(null,"password","password",417022471)))?new cljs.core.Keyword(null,"input","input",556931961):input_type),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[placeholder,disabled_QMARK___$1,cljs.core.deref(internal_model),(function (event){
if(cljs.core.truth_((function (){var and__4115__auto__ = on_change;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(external_model));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__49723_50058 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__49723_50058) : on_change.call(null,G__49723_50058));
} else {
}

return null;
}),(function (){var G__49727 = input_type;
var G__49727__$1 = (((G__49727 instanceof cljs.core.Keyword))?G__49727.fqn:null);
switch (G__49727__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(function (){var or__4126__auto__ = rows;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (3);
}
})():null),(function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__49730_50075 = event.which;
switch (G__49730_50075) {
case (13):
if(cljs.core.truth_(on_change)){
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__49733_50080 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__49733_50080) : on_change.call(null,G__49733_50080));
} else {
}

break;
case (27):
cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));

break;
default:

}
}

return null;
}),["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),(function (event){
var new_val_50081 = event.target.value;
if(cljs.core.truth_((function (){var and__4115__auto__ = on_change;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(disabled_QMARK___$1)){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find(validation_regex,new_val_50081);
} else {
return true;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,new_val_50081);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__49735_50086 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__49735_50086) : on_change.call(null,G__49735_50086));
}
} else {
}

return null;
})]),attr], 0))], null)], null),(cljs.core.truth_((function (){var and__4115__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return status;
} else {
return and__4115__auto__;
}
})())?(function (){var icon_class = (function (){var G__49736 = status;
var G__49736__$1 = (((G__49736 instanceof cljs.core.Keyword))?G__49736.fqn:null);
switch (G__49736__$1) {
case "success":
return "zmdi-check-circle";

break;
case "warning":
return "zmdi-alert-triangle";

break;
case "error":
return "zmdi-alert-circle zmdi-spinner";

break;
case "validating":
return "zmdi-hc-spin zmdi-rotate-right zmdi-spinner";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49736__$1)].join('')));

}
})();
if(cljs.core.truth_(status_tooltip)){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"label","label",1718410804),status_tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validating","validating",1866468207),status))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"class","class",-2030961996),"smaller",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
if(cljs.core.truth_((function (){var and__4115__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return status;
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__4115__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return status;
} else {
return and__4115__auto__;
}
})())?"1":"0")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
if(cljs.core.truth_((function (){var and__4115__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return status;
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_(showing_QMARK_,true);
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null)], null)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"130%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validating","validating",1866468207),status)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"class","class",-2030961996),"smaller"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["zmdi zmdi-hc-fw ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_class)," form-control-feedback"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),re_com.box.align_style(new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"130%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__4115__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return status;
} else {
return and__4115__auto__;
}
})())?"1":"0"),new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], 0)),new cljs.core.Keyword(null,"title","title",636505583),status_tooltip], null)], null);
}
}
})():null)], null)], null);
};
var G__50019 = function (var_args){
var p__49703 = null;
if (arguments.length > 0) {
var G__50105__i = 0, G__50105__a = new Array(arguments.length -  0);
while (G__50105__i < G__50105__a.length) {G__50105__a[G__50105__i] = arguments[G__50105__i + 0]; ++G__50105__i;}
  p__49703 = new cljs.core.IndexedSeq(G__50105__a,0,null);
} 
return G__50019__delegate.call(this,p__49703);};
G__50019.cljs$lang$maxFixedArity = 0;
G__50019.cljs$lang$applyTo = (function (arglist__50107){
var p__49703 = cljs.core.seq(arglist__50107);
return G__50019__delegate(p__49703);
});
G__50019.cljs$core$IFn$_invoke$arity$variadic = G__50019__delegate;
return G__50019;
})()
;
}));

(re_com.misc.input_text_base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.input_text_base.cljs$lang$applyTo = (function (seq49687){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49687));
}));

re_com.misc.input_text = (function re_com$misc$input_text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50110 = arguments.length;
var i__4737__auto___50111 = (0);
while(true){
if((i__4737__auto___50111 < len__4736__auto___50110)){
args__4742__auto__.push((arguments[i__4737__auto___50111]));

var G__50113 = (i__4737__auto___50111 + (1));
i__4737__auto___50111 = G__50113;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
}));

(re_com.misc.input_text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.input_text.cljs$lang$applyTo = (function (seq49755){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49755));
}));

re_com.misc.input_password = (function re_com$misc$input_password(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50118 = arguments.length;
var i__4737__auto___50119 = (0);
while(true){
if((i__4737__auto___50119 < len__4736__auto___50118)){
args__4742__auto__.push((arguments[i__4737__auto___50119]));

var G__50121 = (i__4737__auto___50119 + (1));
i__4737__auto___50119 = G__50121;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.input_password.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"password","password",417022471),args);
}));

(re_com.misc.input_password.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.input_password.cljs$lang$applyTo = (function (seq49764){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49764));
}));

re_com.misc.input_textarea = (function re_com$misc$input_textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50127 = arguments.length;
var i__4737__auto___50128 = (0);
while(true){
if((i__4737__auto___50128 < len__4736__auto___50127)){
args__4742__auto__.push((arguments[i__4737__auto___50128]));

var G__50129 = (i__4737__auto___50128 + (1));
i__4737__auto___50128 = G__50129;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"textarea","textarea",-650375824),args);
}));

(re_com.misc.input_textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.input_textarea.cljs$lang$applyTo = (function (seq49772){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49772));
}));

re_com.misc.checkbox_args_desc = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"holds state of the checkbox when it is called"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the checkbox is clicked. Passed the new value of the checkbox"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, user interaction is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style map (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the checkbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style map (applies to the checkbox, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the checkbox, not the wrapping div)"], null)], null)], null);
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
re_com.misc.checkbox = (function re_com$misc$checkbox(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50189 = arguments.length;
var i__4737__auto___50190 = (0);
while(true){
if((i__4737__auto___50190 < len__4736__auto___50189)){
args__4742__auto__.push((arguments[i__4737__auto___50190]));

var G__50192 = (i__4737__auto___50190 + (1));
i__4737__auto___50190 = G__50192;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__49800){
var map__49801 = p__49800;
var map__49801__$1 = (((((!((map__49801 == null))))?(((((map__49801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49801):map__49801);
var args = map__49801__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49801__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.checkbox_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["checkbox"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro checkbox-args-desc args \"checkbox\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var callback_fn = (function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = on_change;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4115__auto__;
}
})())){
var G__49807 = cljs.core.not(model__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__49807) : on_change.call(null,G__49807));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-checkbox-wrapper noselect",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-checkbox ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style], 0)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(model__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
callback_fn();

return null;
})], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
callback_fn();

return null;
})], null),label], null):null)], null)], null);
}));

(re_com.misc.checkbox.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.checkbox.cljs$lang$applyTo = (function (seq49794){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49794));
}));

re_com.misc.radio_button_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"selected value of the radio button group. See also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)," then this radio button is selected"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the radio button is clicked. Passed ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the radio button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style map (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the radio-button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style map (applies to the radio-button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the radio-button, not the wrapping div)"], null)], null)], null);
/**
 * I return the markup for a radio button, with an optional RHS label
 */
re_com.misc.radio_button = (function re_com$misc$radio_button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50234 = arguments.length;
var i__4737__auto___50235 = (0);
while(true){
if((i__4737__auto___50235 < len__4736__auto___50234)){
args__4742__auto__.push((arguments[i__4737__auto___50235]));

var G__50238 = (i__4737__auto___50235 + (1));
i__4737__auto___50235 = G__50238;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__49817){
var map__49820 = p__49817;
var map__49820__$1 = (((((!((map__49820 == null))))?(((((map__49820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49820):map__49820);
var args = map__49820__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49820__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.radio_button_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["radio-button"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro radio-button-args-desc args \"radio-button\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var callback_fn = (function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = on_change;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4115__auto__;
}
})())){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-radio-button-wrapper noselect",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-radio-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style], 0)),new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model__$1,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
callback_fn();

return null;
})], null),attr], 0))], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
callback_fn();

return null;
})], null),label], null):null)], null)], null);
}));

(re_com.misc.radio_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.radio_button.cljs$lang$applyTo = (function (seq49813){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49813));
}));

re_com.misc.slider_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the slider is moved. Passed the new value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the minimum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(100),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(1),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"step value between min and max"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"400px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't change the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the slider, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the slider, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the slider, not the wrapping div)"], null)], null)], null);
/**
 * Returns markup for an HTML5 slider input
 */
re_com.misc.slider = (function re_com$misc$slider(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50262 = arguments.length;
var i__4737__auto___50263 = (0);
while(true){
if((i__4737__auto___50263 < len__4736__auto___50262)){
args__4742__auto__.push((arguments[i__4737__auto___50263]));

var G__50268 = (i__4737__auto___50263 + (1));
i__4737__auto___50263 = G__50268;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__49847){
var map__49850 = p__49847;
var map__49850__$1 = (((((!((map__49850 == null))))?(((((map__49850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49850):map__49850);
var args = map__49850__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49850__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49850__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.slider_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["slider"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro slider-args-desc args \"slider\")"));
}

var model__$1 = re_com.util.deref_or_value(model);
var min__$1 = re_com.util.deref_or_value(min);
var max__$1 = re_com.util.deref_or_value(max);
var step__$1 = re_com.util.deref_or_value(step);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-slider-wrapper",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],[min__$1,disabled_QMARK___$1,model__$1,"range",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "400px";
}
})(),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"default")], null),style], 0)),max__$1,["rc-slider ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),(function (event){
var G__49858_50286 = Number(event.target.value);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__49858_50286) : on_change.call(null,G__49858_50286));

return null;
}),step__$1]),attr], 0))], null)], null);
}));

(re_com.misc.slider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.slider.cljs$lang$applyTo = (function (seq49841){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49841));
}));

re_com.misc.progress_bar_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider. A number between 0 and 100"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"striped?","striped?",-797214979),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the progress section is a set of animated stripes"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bar-class","bar-class",1668073058),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class name(s) for the actual progress bar itself, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the progress-bar, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the progress-bar, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the progress-bar, not the wrapping div)"], null)], null)], null);
/**
 * Render a bootstrap styled progress bar
 */
re_com.misc.progress_bar = (function re_com$misc$progress_bar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50324 = arguments.length;
var i__4737__auto___50325 = (0);
while(true){
if((i__4737__auto___50325 < len__4736__auto___50324)){
args__4742__auto__.push((arguments[i__4737__auto___50325]));

var G__50326 = (i__4737__auto___50325 + (1));
i__4737__auto___50325 = G__50326;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__49870){
var map__49871 = p__49870;
var map__49871__$1 = (((((!((map__49871 == null))))?(((((map__49871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49871):map__49871);
var args = map__49871__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49871__$1,new cljs.core.Keyword(null,"width","width",-384071477),"100%");
var striped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"striped?","striped?",-797214979));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var bar_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"bar-class","bar-class",1668073058));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.misc.progress_bar_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["progress-bar"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro progress-bar-args-desc args \"progress-bar\")"));
}

var model__$1 = re_com.util.deref_or_value(model);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-progress-bar-wrapper",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-progress-bar progress ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["progress-bar ",(cljs.core.truth_(striped_QMARK_)?"progress-bar-striped active ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bar_class)].join(''),new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),"%"].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),"none"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),"%"].join('')], null)], null)], null);
}));

(re_com.misc.progress_bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.misc.progress_bar.cljs$lang$applyTo = (function (seq49861){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49861));
}));


//# sourceMappingURL=re_com.misc.js.map
