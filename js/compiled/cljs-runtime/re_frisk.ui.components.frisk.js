goog.provide('re_frisk.ui.components.frisk');
re_frisk.ui.components.frisk.debounce_pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frisk.ui.components.frisk.debounce = (function re_frisk$ui$components$frisk$debounce(key,delay,f){
var old_timeout = (function (){var G__53023 = cljs.core.deref(re_frisk.ui.components.frisk.debounce_pending);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__53023) : key.call(null,G__53023));
})();
var new_timeout = setTimeout(f,delay);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.ui.components.frisk.debounce_pending,cljs.core.assoc,key,new_timeout);

return clearTimeout(old_timeout);
});
re_frisk.ui.components.frisk.ExpandButton = (function re_frisk$ui$components$frisk$ExpandButton(p__53025){
var map__53028 = p__53025;
var map__53028__$1 = (((((!((map__53028 == null))))?(((((map__53028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53028):map__53028);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53028__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53028__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53028__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53035 = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"contract","contract",798152745):new cljs.core.Keyword(null,"expand","expand",595248157));
var G__53036 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__53035,G__53036) : emit_fn.call(null,G__53035,G__53036));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"gray",new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null)], null)], null);
});
re_frisk.ui.components.frisk.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null),new cljs.core.Keyword(null,"strings","strings",-2055406807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#4Ebb4E"], null),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.Keyword(null,"numbers","numbers",1036309864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#4EE24E"], null)], null);
re_frisk.ui.components.frisk.ExpandAllButton = (function re_frisk$ui$components$frisk$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data) : emit_fn.call(null,new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"borderTopLeftRadius","borderTopLeftRadius",-1503490700),"2px",new cljs.core.Keyword(null,"borderBottomLeftRadius","borderBottomLeftRadius",-1845172472),"2px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid darkgray",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null),"Expand all"], null);
});
re_frisk.ui.components.frisk.CollapseAllButton = (function re_frisk$ui$components$frisk$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825)) : emit_fn.call(null,new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825)));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderBottomRightRadius","borderBottomRightRadius",1814053058),new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),new cljs.core.Keyword(null,"borderTopRightRadius","borderTopRightRadius",1530376433),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRight","borderRight",-873333451),new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","0px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
re_frisk.ui.components.frisk.edit_debounce_ms = (400);
re_frisk.ui.components.frisk.FilterEditBox = (function re_frisk$ui$components$frisk$FilterEditBox(emit_fn,filter){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null),new cljs.core.Keyword(null,"value","value",305978217),filter,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type here to find keys...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53058_SHARP_){
var G__53064 = new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903);
var G__53065 = p1__53058_SHARP_.target.value;
var G__53066 = re_frisk.ui.components.frisk.edit_debounce_ms;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__53064,G__53065,G__53066) : emit_fn.call(null,G__53064,G__53065,G__53066));
})], null)], null);
});
re_frisk.ui.components.frisk.FilterReset = (function re_frisk$ui$components$frisk$FilterReset(emit_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"width","width",-384071477),(25)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),"",(0)) : emit_fn.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),"",(0)));
})], null),"X"], null);
});
re_frisk.ui.components.frisk.node_clicked = (function re_frisk$ui$components$frisk$node_clicked(p__53077){
var map__53078 = p__53077;
var map__53078__$1 = (((((!((map__53078 == null))))?(((((map__53078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53078):map__53078);
var all = map__53078__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"event","event",301435442));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"path","path",-188191168));
event.stopPropagation();

var G__53087 = new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903);
var G__53088 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(path);
var G__53089 = (0);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__53087,G__53088,G__53089) : emit_fn.call(null,G__53087,G__53088,G__53089));
});
re_frisk.ui.components.frisk.NilText = (function re_frisk$ui$components$frisk$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))], null);
});
re_frisk.ui.components.frisk.StringText = (function re_frisk$ui$components$frisk$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"strings","strings",-2055406807).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
re_frisk.ui.components.frisk.KeywordText = (function re_frisk$ui$components$frisk$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null);
});
re_frisk.ui.components.frisk.NumberText = (function re_frisk$ui$components$frisk$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"numbers","numbers",1036309864).cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.styles)], null),data], null);
});
re_frisk.ui.components.frisk.is_prefix = (function re_frisk$ui$components$frisk$is_prefix(needle,haystack){
return (((cljs.core.count(needle) < cljs.core.count(haystack))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(haystack,(0),cljs.core.count(needle)))));
});
re_frisk.ui.components.frisk.Node = (function re_frisk$ui$components$frisk$Node(p__53136){
var map__53142 = p__53136;
var map__53142__$1 = (((((!((map__53142 == null))))?(((((map__53142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53142):map__53142);
var val = map__53142__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"node","node",581201198));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px"], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__53124_SHARP_){
return re_frisk.ui.components.frisk.node_clicked(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),p1__53124_SHARP_,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn,new cljs.core.Keyword(null,"path","path",-188191168),path], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(node)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matching_paths,path))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff9db"], null):null)], 0))], null),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function re_frisk$ui$components$frisk$Node_$_string_changed(e){
var G__53159 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__53160 = path;
var G__53161 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__53159,G__53160,G__53161) : emit_fn.call(null,G__53159,G__53160,G__53161));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.name(data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function re_frisk$ui$components$frisk$Node_$_keyword_changed(e){
var G__53167 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__53168 = path;
var G__53169 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__53167,G__53168,G__53169) : emit_fn.call(null,G__53167,G__53168,G__53169));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?"Object":((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function re_frisk$ui$components$frisk$Node_$_number_changed(e){
var G__53174 = new cljs.core.Keyword(null,"changed","changed",570724917);
var G__53175 = path;
var G__53176 = Number(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__53174,G__53175,G__53176) : emit_fn.call(null,G__53174,G__53175,G__53176));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.NumberText,data], null)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)
)))))], null)], null);
});
re_frisk.ui.components.frisk.is_expanded = (function re_frisk$ui$components$frisk$is_expanded(expanded_paths,expanded_matching_paths,path){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_matching_paths,path);
}
});
re_frisk.ui.components.frisk.KeyValNode = (function re_frisk$ui$components$frisk$KeyValNode(p__53196){
var map__53200 = p__53196;
var map__53200__$1 = (((((!((map__53200 == null))))?(((((map__53200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53200):map__53200);
var vec__53201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53201,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53200__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),k,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths], null),new cljs.core.Keyword(null,"data","data",-232669377),v,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null);
});
re_frisk.ui.components.frisk.MapNode = (function re_frisk$ui$components$frisk$MapNode(p__53222){
var map__53224 = p__53222;
var map__53224__$1 = (((((!((map__53224 == null))))?(((((map__53224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53224):map__53224);
var all = map__53224__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk.ui.components.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," {"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.keys(data)))," keys"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,new cljs.core.Keyword(null,"data","data",-232669377),x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data):null)], null)], null);
});
re_frisk.ui.components.frisk.ListVecNode = (function re_frisk$ui$components$frisk$ListVecNode(p__53247){
var map__53249 = p__53247;
var map__53249__$1 = (((((!((map__53249 == null))))?(((((map__53249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53249):map__53249);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk.ui.components.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?" [":" ("),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_(data))?"]":")")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data):null)], null)], null);
});
re_frisk.ui.components.frisk.SetNode = (function re_frisk$ui$components$frisk$SetNode(p__53276){
var map__53277 = p__53276;
var map__53277__$1 = (((((!((map__53277 == null))))?(((((map__53277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53277):map__53277);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53277__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk.ui.components.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," #{",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),data):null)], null)], null);
});
re_frisk.ui.components.frisk.DataFrisk = (function re_frisk$ui$components$frisk$DataFrisk(p__53297){
var map__53298 = p__53297;
var map__53298__$1 = (((((!((map__53298 == null))))?(((((map__53298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53298):map__53298);
var all = map__53298__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53298__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.SetNode,all], null);
} else {
if(((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ListVecNode,all], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Node,all], null);

}
}
}
}
});
re_frisk.ui.components.frisk.conj_to_set = (function re_frisk$ui$components$frisk$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = coll;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
re_frisk.ui.components.frisk.expand_all_paths = (function re_frisk$ui$components$frisk$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"node","node",581201198),root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(remaining)){
var vec__53349 = remaining;
var seq__53350 = cljs.core.seq(vec__53349);
var first__53351 = cljs.core.first(seq__53350);
var seq__53350__$1 = cljs.core.next(seq__53350);
var current = first__53351;
var rest = seq__53350__$1;
var current_node = (((function (){var G__53353 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current);
if((!((G__53353 == null)))){
if((((G__53353.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__53353.cljs$core$IDeref$)))){
return true;
} else {
if((!G__53353.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__53353);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__53353);
}
})())?cljs.core.deref(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current)):new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__53629 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__53349,seq__53350,first__53351,seq__53350__$1,current,rest,current_node){
return (function (p__53357){
var vec__53359 = p__53357;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53359,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),k),new cljs.core.Keyword(null,"node","node",581201198),v], null);
});})(remaining,expanded_paths,vec__53349,seq__53350,first__53351,seq__53350__$1,current,rest,current_node))
,current_node));
var G__53630 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__53629;
expanded_paths = G__53630;
continue;
} else {
if(((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node)))){
var G__53643 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__53349,seq__53350,first__53351,seq__53350__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),i),new cljs.core.Keyword(null,"node","node",581201198),node], null);
});})(remaining,expanded_paths,vec__53349,seq__53350,first__53351,seq__53350__$1,current,rest,current_node))
,current_node));
var G__53644 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__53643;
expanded_paths = G__53644;
continue;
} else {
var G__53652 = rest;
var G__53653 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__53652;
expanded_paths = G__53653;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
re_frisk.ui.components.frisk.apply_filter = (function re_frisk$ui$components$frisk$apply_filter(state,id){
var filter = re_frisk.filter.filter_parser.parse(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"raw-filter","raw-filter",2130663181)], null)));
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),filter);
});
re_frisk.ui.components.frisk.emit_fn_factory = (function re_frisk$ui$components$frisk$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__53660__delegate = function (event,args){
var G__53389 = event;
var G__53389__$1 = (((G__53389 instanceof cljs.core.Keyword))?G__53389.fqn:null);
switch (G__53389__$1) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk.ui.components.frisk.conj_to_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk.ui.components.frisk.expand_all_paths(cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "filter-change":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"raw-filter","raw-filter",2130663181)], null),cljs.core.first(args));

return re_frisk.ui.components.frisk.debounce(new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),cljs.core.second(args),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_frisk.ui.components.frisk.apply_filter,id);
}));

break;
case "changed":
var vec__53393 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53393,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53393,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_(swappable,value);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53389__$1)].join('')));

}
};
var G__53660 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__53675__i = 0, G__53675__a = new Array(arguments.length -  1);
while (G__53675__i < G__53675__a.length) {G__53675__a[G__53675__i] = arguments[G__53675__i + 1]; ++G__53675__i;}
  args = new cljs.core.IndexedSeq(G__53675__a,0,null);
} 
return G__53660__delegate.call(this,event,args);};
G__53660.cljs$lang$maxFixedArity = 1;
G__53660.cljs$lang$applyTo = (function (arglist__53678){
var event = cljs.core.first(arglist__53678);
var args = cljs.core.rest(arglist__53678);
return G__53660__delegate(event,args);
});
G__53660.cljs$core$IFn$_invoke$arity$variadic = G__53660__delegate;
return G__53660;
})()
;
});
re_frisk.ui.components.frisk.walk_paths = (function re_frisk$ui$components$frisk$walk_paths(var_args){
var G__53403 = arguments.length;
switch (G__53403) {
case 1:
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1 = (function (data){
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,data);
}));

(re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2 = (function (prefix,data){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53411){
var vec__53412 = p__53411;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53412,(1),null);
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k),v);
}),data)):((cljs.core.set_QMARK_(data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,v),v);
}),data)):((((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data))))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,i),v);
}),data)):(((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data)))?re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.deref(data)):cljs.core.PersistentHashSet.EMPTY
)))),prefix);
}));

(re_frisk.ui.components.frisk.walk_paths.cljs$lang$maxFixedArity = 2);

re_frisk.ui.components.frisk.matching_paths = (function re_frisk$ui$components$frisk$matching_paths(data,filter_SINGLEQUOTE_){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53425_SHARP_){
return re_frisk.filter.filter_matcher.match(filter_SINGLEQUOTE_,p1__53425_SHARP_);
}),re_frisk.ui.components.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1(data)));
});
re_frisk.ui.components.frisk.prefixes = (function re_frisk$ui$components$frisk$prefixes(path){
return cljs.core.set(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,path));
});
re_frisk.ui.components.frisk.expanded_matching_paths = (function re_frisk$ui$components$frisk$expanded_matching_paths(paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.frisk.prefixes,paths));
});
re_frisk.ui.components.frisk.Root = (function re_frisk$ui$components$frisk$Root(data,id,state_atom){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var swappable = (((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var filter = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var matching = re_frisk.ui.components.frisk.matching_paths(data,filter);
var expanded_matching = re_frisk.ui.components.frisk.expanded_matching_paths(matching);
var emit_fn = re_frisk.ui.components.frisk.emit_fn_factory(state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#444444"], null),new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 2px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.CollapseAllButton,emit_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff9db"], null)], null),cljs.core.count(matching)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.FilterEditBox,emit_fn,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"raw-filter","raw-filter",2130663181)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.FilterReset,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null)),new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)], null)], null);
});
re_frisk.ui.components.frisk.expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53464_SHARP_,p2__53465_SHARP_){
return cljs.core.assoc_in(p1__53464_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__53465_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));

//# sourceMappingURL=re_frisk.ui.components.frisk.js.map
