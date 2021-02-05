goog.provide('re_frisk.filter.filter_parser');
re_frisk.filter.filter_parser.read_all = (function re_frisk$filter$filter_parser$read_all(rdr){
var G__51220 = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51220)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(cljs.tools.reader.reader_types.read_char(rdr),(re_frisk.filter.filter_parser.read_all.cljs$core$IFn$_invoke$arity$1 ? re_frisk.filter.filter_parser.read_all.cljs$core$IFn$_invoke$arity$1(rdr) : re_frisk.filter.filter_parser.read_all.call(null,rdr)));

}
});
re_frisk.filter.filter_parser.read_string_SINGLEQUOTE_ = (function re_frisk$filter$filter_parser$read_string_SINGLEQUOTE_(s){
var sr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s);
var val = cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1(sr);
var rest = clojure.string.join.cljs$core$IFn$_invoke$arity$1(re_frisk.filter.filter_parser.read_all(sr));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
});
re_frisk.filter.filter_parser.parse_freeform = (function re_frisk$filter$filter_parser$parse_freeform(s){
var vec__51227 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,(2));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51227,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51227,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"free","free",801364328),prefix], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__4126__auto__ = rest;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()], null);
});
re_frisk.filter.filter_parser.parse_clojure_expr = (function re_frisk$filter$filter_parser$parse_clojure_expr(s){
try{var map__51234 = re_frisk.filter.filter_parser.read_string_SINGLEQUOTE_(s);
var map__51234__$1 = (((((!((map__51234 == null))))?(((((map__51234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51234):map__51234);
var foo = map__51234__$1;
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51234__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51234__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e51233){var _ = e51233;
return re_frisk.filter.filter_parser.parse_freeform(s);
}});
re_frisk.filter.filter_parser.parse_clojure_string = (function re_frisk$filter$filter_parser$parse_clojure_string(s){
try{var map__51263 = re_frisk.filter.filter_parser.read_string_SINGLEQUOTE_(s);
var map__51263__$1 = (((((!((map__51263 == null))))?(((((map__51263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51263):map__51263);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51263__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51263__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e51241){var _ = e51241;
var vec__51248 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,(2));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51248,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51248,(1),null);
var prefix__$1 = clojure.string.replace(prefix,/^\"/,"");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734),prefix__$1], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__4126__auto__ = rest;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()], null);
}});
re_frisk.filter.filter_parser.parse_part = (function re_frisk$filter$filter_parser$parse_part(s){
var G__51276 = cljs.core.first(s);
switch (G__51276) {
case "[":
case "(":
case "{":
case "#":
case "\\":
case "'":
case ":":
return re_frisk.filter.filter_parser.parse_clojure_expr(s);

break;
case "\"":
return re_frisk.filter.filter_parser.parse_clojure_string(s);

break;
default:
return re_frisk.filter.filter_parser.parse_freeform(s);

}
});
re_frisk.filter.filter_parser.parse_SINGLEQUOTE_ = (function re_frisk$filter$filter_parser$parse_SINGLEQUOTE_(s){
var s__$1 = clojure.string.trim(s);
var s__$2 = clojure.string.replace(s__$1,/^\[(.*)\]$/,"$1");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s__$2,"")){
return cljs.core.List.EMPTY;
} else {
var map__51297 = re_frisk.filter.filter_parser.parse_part(s__$2);
var map__51297__$1 = (((((!((map__51297 == null))))?(((((map__51297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51297):map__51297);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51297__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51297__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return cljs.core.cons(val,(re_frisk.filter.filter_parser.parse_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? re_frisk.filter.filter_parser.parse_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(rest) : re_frisk.filter.filter_parser.parse_SINGLEQUOTE_.call(null,rest)));
}
});
re_frisk.filter.filter_parser.parse = (function re_frisk$filter$filter_parser$parse(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,re_frisk.filter.filter_parser.parse_SINGLEQUOTE_(s));
});

//# sourceMappingURL=re_frisk.filter.filter_parser.js.map
