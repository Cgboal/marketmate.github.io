goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5735__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5735__auto__)){
var network_js = temp__5735__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5735__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5735__auto___46977 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5735__auto___46977)){
var app_db_reaction_46978 = temp__5735__auto___46977;
re_frisk.subs_graph.set_root_node(app_db_reaction_46978);
} else {
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__45956_46979 = cljs.core.seq(traces);
var chunk__45960_46980 = null;
var count__45961_46981 = (0);
var i__45962_46982 = (0);
while(true){
if((i__45962_46982 < count__45961_46981)){
var map__46564_46983 = chunk__45960_46980.cljs$core$IIndexed$_nth$arity$2(null,i__45962_46982);
var map__46564_46984__$1 = (((((!((map__46564_46983 == null))))?(((((map__46564_46983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46564_46983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46564_46983):map__46564_46983);
var subs_46985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46564_46984__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__46566_46987 = cljs.core.seq(subs_46985);
var chunk__46567_46988 = null;
var count__46568_46989 = (0);
var i__46569_46990 = (0);
while(true){
if((i__46569_46990 < count__46568_46989)){
var map__46619_46992 = chunk__46567_46988.cljs$core$IIndexed$_nth$arity$2(null,i__46569_46990);
var map__46619_46993__$1 = (((((!((map__46619_46992 == null))))?(((((map__46619_46992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46619_46992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46619_46992):map__46619_46992);
var op_type_46994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46993__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_46995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46993__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_46996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46993__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_46997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46619_46993__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___47000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_46995);
if(cljs.core.truth_(temp__5733__auto___47000)){
var old_reaction_47001 = temp__5733__auto___47000;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_46994,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_47001))){
var updated_node_47002 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_47001,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_46994,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_46994)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_46995,updated_node_47002);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_47002], null)));
} else {
}
} else {
}
} else {
var data_47006 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_46995,new cljs.core.Keyword(null,"label","label",1718410804),operation_46997,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_46994)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_46994], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_46995,data_47006);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_47006);
}

if(cljs.core.truth_(input_signals_46996)){
var seq__46631_47011 = cljs.core.seq(input_signals_46996);
var chunk__46632_47012 = null;
var count__46633_47013 = (0);
var i__46634_47014 = (0);
while(true){
if((i__46634_47014 < count__46633_47013)){
var input_reaction_47015 = chunk__46632_47012.cljs$core$IIndexed$_nth$arity$2(null,i__46634_47014);
var reaction_path_47016 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47015),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_46995)].join('');
var temp__5733__auto___47018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47016);
if(cljs.core.truth_(temp__5733__auto___47018)){
var old_edge_47020 = temp__5733__auto___47018;
var updated_edge_47021 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47020,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47016,updated_edge_47021);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47021], null)));
} else {
}
} else {
var data_47025 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47016,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47015,new cljs.core.Keyword(null,"to","to",192099007),reaction_46995,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47016,data_47025);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47025));
} else {
}
}


var G__47027 = seq__46631_47011;
var G__47028 = chunk__46632_47012;
var G__47029 = count__46633_47013;
var G__47030 = (i__46634_47014 + (1));
seq__46631_47011 = G__47027;
chunk__46632_47012 = G__47028;
count__46633_47013 = G__47029;
i__46634_47014 = G__47030;
continue;
} else {
var temp__5735__auto___47031 = cljs.core.seq(seq__46631_47011);
if(temp__5735__auto___47031){
var seq__46631_47033__$1 = temp__5735__auto___47031;
if(cljs.core.chunked_seq_QMARK_(seq__46631_47033__$1)){
var c__4556__auto___47034 = cljs.core.chunk_first(seq__46631_47033__$1);
var G__47036 = cljs.core.chunk_rest(seq__46631_47033__$1);
var G__47037 = c__4556__auto___47034;
var G__47038 = cljs.core.count(c__4556__auto___47034);
var G__47039 = (0);
seq__46631_47011 = G__47036;
chunk__46632_47012 = G__47037;
count__46633_47013 = G__47038;
i__46634_47014 = G__47039;
continue;
} else {
var input_reaction_47040 = cljs.core.first(seq__46631_47033__$1);
var reaction_path_47041 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47040),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_46995)].join('');
var temp__5733__auto___47042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47041);
if(cljs.core.truth_(temp__5733__auto___47042)){
var old_edge_47043 = temp__5733__auto___47042;
var updated_edge_47045 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47043,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47041,updated_edge_47045);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47045], null)));
} else {
}
} else {
var data_47048 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47041,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47040,new cljs.core.Keyword(null,"to","to",192099007),reaction_46995,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47041,data_47048);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47048));
} else {
}
}


var G__47052 = cljs.core.next(seq__46631_47033__$1);
var G__47053 = null;
var G__47054 = (0);
var G__47055 = (0);
seq__46631_47011 = G__47052;
chunk__46632_47012 = G__47053;
count__46633_47013 = G__47054;
i__46634_47014 = G__47055;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47057 = seq__46566_46987;
var G__47058 = chunk__46567_46988;
var G__47059 = count__46568_46989;
var G__47060 = (i__46569_46990 + (1));
seq__46566_46987 = G__47057;
chunk__46567_46988 = G__47058;
count__46568_46989 = G__47059;
i__46569_46990 = G__47060;
continue;
} else {
var temp__5735__auto___47061 = cljs.core.seq(seq__46566_46987);
if(temp__5735__auto___47061){
var seq__46566_47062__$1 = temp__5735__auto___47061;
if(cljs.core.chunked_seq_QMARK_(seq__46566_47062__$1)){
var c__4556__auto___47063 = cljs.core.chunk_first(seq__46566_47062__$1);
var G__47064 = cljs.core.chunk_rest(seq__46566_47062__$1);
var G__47065 = c__4556__auto___47063;
var G__47066 = cljs.core.count(c__4556__auto___47063);
var G__47067 = (0);
seq__46566_46987 = G__47064;
chunk__46567_46988 = G__47065;
count__46568_46989 = G__47066;
i__46569_46990 = G__47067;
continue;
} else {
var map__46686_47068 = cljs.core.first(seq__46566_47062__$1);
var map__46686_47069__$1 = (((((!((map__46686_47068 == null))))?(((((map__46686_47068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46686_47068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46686_47068):map__46686_47068);
var op_type_47070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686_47069__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_47071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686_47069__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_47072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686_47069__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_47073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46686_47069__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___47075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_47071);
if(cljs.core.truth_(temp__5733__auto___47075)){
var old_reaction_47076 = temp__5733__auto___47075;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47070,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_47076))){
var updated_node_47078 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_47076,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47070,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47070)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_47071,updated_node_47078);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_47078], null)));
} else {
}
} else {
}
} else {
var data_47083 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_47071,new cljs.core.Keyword(null,"label","label",1718410804),operation_47073,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47070)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47070], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_47071,data_47083);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_47083);
}

if(cljs.core.truth_(input_signals_47072)){
var seq__46698_47087 = cljs.core.seq(input_signals_47072);
var chunk__46699_47088 = null;
var count__46700_47089 = (0);
var i__46701_47090 = (0);
while(true){
if((i__46701_47090 < count__46700_47089)){
var input_reaction_47091 = chunk__46699_47088.cljs$core$IIndexed$_nth$arity$2(null,i__46701_47090);
var reaction_path_47092 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47091),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47071)].join('');
var temp__5733__auto___47093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47092);
if(cljs.core.truth_(temp__5733__auto___47093)){
var old_edge_47094 = temp__5733__auto___47093;
var updated_edge_47096 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47094,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47092,updated_edge_47096);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47096], null)));
} else {
}
} else {
var data_47098 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47092,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47091,new cljs.core.Keyword(null,"to","to",192099007),reaction_47071,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47092,data_47098);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47098));
} else {
}
}


var G__47099 = seq__46698_47087;
var G__47100 = chunk__46699_47088;
var G__47101 = count__46700_47089;
var G__47102 = (i__46701_47090 + (1));
seq__46698_47087 = G__47099;
chunk__46699_47088 = G__47100;
count__46700_47089 = G__47101;
i__46701_47090 = G__47102;
continue;
} else {
var temp__5735__auto___47103__$1 = cljs.core.seq(seq__46698_47087);
if(temp__5735__auto___47103__$1){
var seq__46698_47104__$1 = temp__5735__auto___47103__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46698_47104__$1)){
var c__4556__auto___47105 = cljs.core.chunk_first(seq__46698_47104__$1);
var G__47106 = cljs.core.chunk_rest(seq__46698_47104__$1);
var G__47107 = c__4556__auto___47105;
var G__47108 = cljs.core.count(c__4556__auto___47105);
var G__47109 = (0);
seq__46698_47087 = G__47106;
chunk__46699_47088 = G__47107;
count__46700_47089 = G__47108;
i__46701_47090 = G__47109;
continue;
} else {
var input_reaction_47110 = cljs.core.first(seq__46698_47104__$1);
var reaction_path_47112 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47110),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47071)].join('');
var temp__5733__auto___47113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47112);
if(cljs.core.truth_(temp__5733__auto___47113)){
var old_edge_47115 = temp__5733__auto___47113;
var updated_edge_47116 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47115,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47112,updated_edge_47116);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47116], null)));
} else {
}
} else {
var data_47117 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47112,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47110,new cljs.core.Keyword(null,"to","to",192099007),reaction_47071,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47112,data_47117);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47117));
} else {
}
}


var G__47119 = cljs.core.next(seq__46698_47104__$1);
var G__47120 = null;
var G__47121 = (0);
var G__47122 = (0);
seq__46698_47087 = G__47119;
chunk__46699_47088 = G__47120;
count__46700_47089 = G__47121;
i__46701_47090 = G__47122;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47124 = cljs.core.next(seq__46566_47062__$1);
var G__47125 = null;
var G__47126 = (0);
var G__47127 = (0);
seq__46566_46987 = G__47124;
chunk__46567_46988 = G__47125;
count__46568_46989 = G__47126;
i__46569_46990 = G__47127;
continue;
}
} else {
}
}
break;
}


var G__47128 = seq__45956_46979;
var G__47129 = chunk__45960_46980;
var G__47130 = count__45961_46981;
var G__47131 = (i__45962_46982 + (1));
seq__45956_46979 = G__47128;
chunk__45960_46980 = G__47129;
count__45961_46981 = G__47130;
i__45962_46982 = G__47131;
continue;
} else {
var temp__5735__auto___47132 = cljs.core.seq(seq__45956_46979);
if(temp__5735__auto___47132){
var seq__45956_47133__$1 = temp__5735__auto___47132;
if(cljs.core.chunked_seq_QMARK_(seq__45956_47133__$1)){
var c__4556__auto___47134 = cljs.core.chunk_first(seq__45956_47133__$1);
var G__47135 = cljs.core.chunk_rest(seq__45956_47133__$1);
var G__47136 = c__4556__auto___47134;
var G__47137 = cljs.core.count(c__4556__auto___47134);
var G__47138 = (0);
seq__45956_46979 = G__47135;
chunk__45960_46980 = G__47136;
count__45961_46981 = G__47137;
i__45962_46982 = G__47138;
continue;
} else {
var map__46725_47140 = cljs.core.first(seq__45956_47133__$1);
var map__46725_47141__$1 = (((((!((map__46725_47140 == null))))?(((((map__46725_47140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46725_47140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46725_47140):map__46725_47140);
var subs_47142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46725_47141__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__46729_47145 = cljs.core.seq(subs_47142);
var chunk__46730_47146 = null;
var count__46731_47147 = (0);
var i__46732_47148 = (0);
while(true){
if((i__46732_47148 < count__46731_47147)){
var map__46777_47149 = chunk__46730_47146.cljs$core$IIndexed$_nth$arity$2(null,i__46732_47148);
var map__46777_47150__$1 = (((((!((map__46777_47149 == null))))?(((((map__46777_47149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46777_47149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46777_47149):map__46777_47149);
var op_type_47151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46777_47150__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_47152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46777_47150__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_47153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46777_47150__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_47154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46777_47150__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___47155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_47152);
if(cljs.core.truth_(temp__5733__auto___47155)){
var old_reaction_47157 = temp__5733__auto___47155;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47151,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_47157))){
var updated_node_47158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_47157,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47151,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47151)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_47152,updated_node_47158);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_47158], null)));
} else {
}
} else {
}
} else {
var data_47165 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_47152,new cljs.core.Keyword(null,"label","label",1718410804),operation_47154,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47151)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47151], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_47152,data_47165);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_47165);
}

if(cljs.core.truth_(input_signals_47153)){
var seq__46781_47168 = cljs.core.seq(input_signals_47153);
var chunk__46782_47169 = null;
var count__46783_47170 = (0);
var i__46784_47171 = (0);
while(true){
if((i__46784_47171 < count__46783_47170)){
var input_reaction_47172 = chunk__46782_47169.cljs$core$IIndexed$_nth$arity$2(null,i__46784_47171);
var reaction_path_47175 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47172),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47152)].join('');
var temp__5733__auto___47176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47175);
if(cljs.core.truth_(temp__5733__auto___47176)){
var old_edge_47186 = temp__5733__auto___47176;
var updated_edge_47189 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47186,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47175,updated_edge_47189);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47189], null)));
} else {
}
} else {
var data_47191 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47175,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47172,new cljs.core.Keyword(null,"to","to",192099007),reaction_47152,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47175,data_47191);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47191));
} else {
}
}


var G__47193 = seq__46781_47168;
var G__47194 = chunk__46782_47169;
var G__47195 = count__46783_47170;
var G__47196 = (i__46784_47171 + (1));
seq__46781_47168 = G__47193;
chunk__46782_47169 = G__47194;
count__46783_47170 = G__47195;
i__46784_47171 = G__47196;
continue;
} else {
var temp__5735__auto___47197__$1 = cljs.core.seq(seq__46781_47168);
if(temp__5735__auto___47197__$1){
var seq__46781_47198__$1 = temp__5735__auto___47197__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46781_47198__$1)){
var c__4556__auto___47199 = cljs.core.chunk_first(seq__46781_47198__$1);
var G__47200 = cljs.core.chunk_rest(seq__46781_47198__$1);
var G__47201 = c__4556__auto___47199;
var G__47202 = cljs.core.count(c__4556__auto___47199);
var G__47203 = (0);
seq__46781_47168 = G__47200;
chunk__46782_47169 = G__47201;
count__46783_47170 = G__47202;
i__46784_47171 = G__47203;
continue;
} else {
var input_reaction_47205 = cljs.core.first(seq__46781_47198__$1);
var reaction_path_47209 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47205),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47152)].join('');
var temp__5733__auto___47210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47209);
if(cljs.core.truth_(temp__5733__auto___47210)){
var old_edge_47212 = temp__5733__auto___47210;
var updated_edge_47213 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47212,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47209,updated_edge_47213);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47213], null)));
} else {
}
} else {
var data_47217 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47209,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47205,new cljs.core.Keyword(null,"to","to",192099007),reaction_47152,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47209,data_47217);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47217));
} else {
}
}


var G__47222 = cljs.core.next(seq__46781_47198__$1);
var G__47223 = null;
var G__47224 = (0);
var G__47225 = (0);
seq__46781_47168 = G__47222;
chunk__46782_47169 = G__47223;
count__46783_47170 = G__47224;
i__46784_47171 = G__47225;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47226 = seq__46729_47145;
var G__47227 = chunk__46730_47146;
var G__47228 = count__46731_47147;
var G__47229 = (i__46732_47148 + (1));
seq__46729_47145 = G__47226;
chunk__46730_47146 = G__47227;
count__46731_47147 = G__47228;
i__46732_47148 = G__47229;
continue;
} else {
var temp__5735__auto___47230__$1 = cljs.core.seq(seq__46729_47145);
if(temp__5735__auto___47230__$1){
var seq__46729_47231__$1 = temp__5735__auto___47230__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46729_47231__$1)){
var c__4556__auto___47232 = cljs.core.chunk_first(seq__46729_47231__$1);
var G__47233 = cljs.core.chunk_rest(seq__46729_47231__$1);
var G__47234 = c__4556__auto___47232;
var G__47235 = cljs.core.count(c__4556__auto___47232);
var G__47236 = (0);
seq__46729_47145 = G__47233;
chunk__46730_47146 = G__47234;
count__46731_47147 = G__47235;
i__46732_47148 = G__47236;
continue;
} else {
var map__46798_47237 = cljs.core.first(seq__46729_47231__$1);
var map__46798_47238__$1 = (((((!((map__46798_47237 == null))))?(((((map__46798_47237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46798_47237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46798_47237):map__46798_47237);
var op_type_47239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46798_47238__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_47240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46798_47238__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_47241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46798_47238__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_47242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46798_47238__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___47247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_47240);
if(cljs.core.truth_(temp__5733__auto___47247)){
var old_reaction_47248 = temp__5733__auto___47247;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47239,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_47248))){
var updated_node_47252 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_47248,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47239,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47239)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_47240,updated_node_47252);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_47252], null)));
} else {
}
} else {
}
} else {
var data_47256 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_47240,new cljs.core.Keyword(null,"label","label",1718410804),operation_47242,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47239)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47239], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_47240,data_47256);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_47256);
}

if(cljs.core.truth_(input_signals_47241)){
var seq__46809_47262 = cljs.core.seq(input_signals_47241);
var chunk__46810_47263 = null;
var count__46811_47264 = (0);
var i__46812_47265 = (0);
while(true){
if((i__46812_47265 < count__46811_47264)){
var input_reaction_47269 = chunk__46810_47263.cljs$core$IIndexed$_nth$arity$2(null,i__46812_47265);
var reaction_path_47270 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47269),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47240)].join('');
var temp__5733__auto___47271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47270);
if(cljs.core.truth_(temp__5733__auto___47271)){
var old_edge_47275 = temp__5733__auto___47271;
var updated_edge_47276 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47275,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47270,updated_edge_47276);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47276], null)));
} else {
}
} else {
var data_47277 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47270,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47269,new cljs.core.Keyword(null,"to","to",192099007),reaction_47240,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47270,data_47277);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47277));
} else {
}
}


var G__47280 = seq__46809_47262;
var G__47281 = chunk__46810_47263;
var G__47282 = count__46811_47264;
var G__47283 = (i__46812_47265 + (1));
seq__46809_47262 = G__47280;
chunk__46810_47263 = G__47281;
count__46811_47264 = G__47282;
i__46812_47265 = G__47283;
continue;
} else {
var temp__5735__auto___47287__$2 = cljs.core.seq(seq__46809_47262);
if(temp__5735__auto___47287__$2){
var seq__46809_47289__$1 = temp__5735__auto___47287__$2;
if(cljs.core.chunked_seq_QMARK_(seq__46809_47289__$1)){
var c__4556__auto___47290 = cljs.core.chunk_first(seq__46809_47289__$1);
var G__47291 = cljs.core.chunk_rest(seq__46809_47289__$1);
var G__47292 = c__4556__auto___47290;
var G__47293 = cljs.core.count(c__4556__auto___47290);
var G__47294 = (0);
seq__46809_47262 = G__47291;
chunk__46810_47263 = G__47292;
count__46811_47264 = G__47293;
i__46812_47265 = G__47294;
continue;
} else {
var input_reaction_47295 = cljs.core.first(seq__46809_47289__$1);
var reaction_path_47296 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47295),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47240)].join('');
var temp__5733__auto___47297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_47296);
if(cljs.core.truth_(temp__5733__auto___47297)){
var old_edge_47298 = temp__5733__auto___47297;
var updated_edge_47299 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_47298,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47296,updated_edge_47299);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_47299], null)));
} else {
}
} else {
var data_47301 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_47296,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47295,new cljs.core.Keyword(null,"to","to",192099007),reaction_47240,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_47296,data_47301);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_47301));
} else {
}
}


var G__47303 = cljs.core.next(seq__46809_47289__$1);
var G__47304 = null;
var G__47305 = (0);
var G__47306 = (0);
seq__46809_47262 = G__47303;
chunk__46810_47263 = G__47304;
count__46811_47264 = G__47305;
i__46812_47265 = G__47306;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47307 = cljs.core.next(seq__46729_47231__$1);
var G__47308 = null;
var G__47309 = (0);
var G__47310 = (0);
seq__46729_47145 = G__47307;
chunk__46730_47146 = G__47308;
count__46731_47147 = G__47309;
i__46732_47148 = G__47310;
continue;
}
} else {
}
}
break;
}


var G__47312 = cljs.core.next(seq__45956_47133__$1);
var G__47313 = null;
var G__47314 = (0);
var G__47315 = (0);
seq__45956_46979 = G__47312;
chunk__45960_46980 = G__47313;
count__45961_46981 = G__47314;
i__45962_46982 = G__47315;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__46845 = cljs.core.seq(cljs.core.deref(new_nodes));
var chunk__46846 = null;
var count__46847 = (0);
var i__46848 = (0);
while(true){
if((i__46848 < count__46847)){
var data = chunk__46846.cljs$core$IIndexed$_nth$arity$2(null,i__46848);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__47317 = seq__46845;
var G__47318 = chunk__46846;
var G__47319 = count__46847;
var G__47320 = (i__46848 + (1));
seq__46845 = G__47317;
chunk__46846 = G__47318;
count__46847 = G__47319;
i__46848 = G__47320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46845);
if(temp__5735__auto__){
var seq__46845__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46845__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46845__$1);
var G__47322 = cljs.core.chunk_rest(seq__46845__$1);
var G__47323 = c__4556__auto__;
var G__47324 = cljs.core.count(c__4556__auto__);
var G__47325 = (0);
seq__46845 = G__47322;
chunk__46846 = G__47323;
count__46847 = G__47324;
i__46848 = G__47325;
continue;
} else {
var data = cljs.core.first(seq__46845__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__47326 = cljs.core.next(seq__46845__$1);
var G__47327 = null;
var G__47328 = (0);
var G__47329 = (0);
seq__46845 = G__47326;
chunk__46846 = G__47327;
count__46847 = G__47328;
i__46848 = G__47329;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__46853){
var map__46854 = p__46853;
var map__46854__$1 = (((((!((map__46854 == null))))?(((((map__46854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46854):map__46854);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46854__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46854__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var temp__5735__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__46864_47333 = cljs.core.seq(subs);
var chunk__46865_47334 = null;
var count__46866_47335 = (0);
var i__46867_47336 = (0);
while(true){
if((i__46867_47336 < count__46866_47335)){
var map__46920_47337 = chunk__46865_47334.cljs$core$IIndexed$_nth$arity$2(null,i__46867_47336);
var map__46920_47338__$1 = (((((!((map__46920_47337 == null))))?(((((map__46920_47337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46920_47337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46920_47337):map__46920_47337);
var op_type_47339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46920_47338__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_47340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46920_47338__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_47341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46920_47338__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_47342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46920_47338__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___47344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_47340);
if(cljs.core.truth_(temp__5733__auto___47344)){
var old_reaction_47345 = temp__5733__auto___47344;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47339,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_47345))){
var updated_node_47346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_47345,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47339,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47339)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_47340,updated_node_47346);
} else {
}
} else {
var data_47348 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_47340,new cljs.core.Keyword(null,"label","label",1718410804),operation_47342,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47339)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47339], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_47340,data_47348);
}

if(cljs.core.truth_(input_signals_47341)){
var seq__46925_47349 = cljs.core.seq(input_signals_47341);
var chunk__46926_47350 = null;
var count__46927_47351 = (0);
var i__46928_47352 = (0);
while(true){
if((i__46928_47352 < count__46927_47351)){
var input_reaction_47353 = chunk__46926_47350.cljs$core$IIndexed$_nth$arity$2(null,i__46928_47352);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47353),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47340)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47353),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47340)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47353,new cljs.core.Keyword(null,"to","to",192099007),reaction_47340], null));
}


var G__47355 = seq__46925_47349;
var G__47356 = chunk__46926_47350;
var G__47357 = count__46927_47351;
var G__47358 = (i__46928_47352 + (1));
seq__46925_47349 = G__47355;
chunk__46926_47350 = G__47356;
count__46927_47351 = G__47357;
i__46928_47352 = G__47358;
continue;
} else {
var temp__5735__auto___47359__$1 = cljs.core.seq(seq__46925_47349);
if(temp__5735__auto___47359__$1){
var seq__46925_47360__$1 = temp__5735__auto___47359__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46925_47360__$1)){
var c__4556__auto___47361 = cljs.core.chunk_first(seq__46925_47360__$1);
var G__47362 = cljs.core.chunk_rest(seq__46925_47360__$1);
var G__47363 = c__4556__auto___47361;
var G__47364 = cljs.core.count(c__4556__auto___47361);
var G__47365 = (0);
seq__46925_47349 = G__47362;
chunk__46926_47350 = G__47363;
count__46927_47351 = G__47364;
i__46928_47352 = G__47365;
continue;
} else {
var input_reaction_47367 = cljs.core.first(seq__46925_47360__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47367),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47340)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47367),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47340)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47367,new cljs.core.Keyword(null,"to","to",192099007),reaction_47340], null));
}


var G__47368 = cljs.core.next(seq__46925_47360__$1);
var G__47369 = null;
var G__47370 = (0);
var G__47371 = (0);
seq__46925_47349 = G__47368;
chunk__46926_47350 = G__47369;
count__46927_47351 = G__47370;
i__46928_47352 = G__47371;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47372 = seq__46864_47333;
var G__47373 = chunk__46865_47334;
var G__47374 = count__46866_47335;
var G__47375 = (i__46867_47336 + (1));
seq__46864_47333 = G__47372;
chunk__46865_47334 = G__47373;
count__46866_47335 = G__47374;
i__46867_47336 = G__47375;
continue;
} else {
var temp__5735__auto___47376__$1 = cljs.core.seq(seq__46864_47333);
if(temp__5735__auto___47376__$1){
var seq__46864_47377__$1 = temp__5735__auto___47376__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46864_47377__$1)){
var c__4556__auto___47378 = cljs.core.chunk_first(seq__46864_47377__$1);
var G__47379 = cljs.core.chunk_rest(seq__46864_47377__$1);
var G__47380 = c__4556__auto___47378;
var G__47381 = cljs.core.count(c__4556__auto___47378);
var G__47382 = (0);
seq__46864_47333 = G__47379;
chunk__46865_47334 = G__47380;
count__46866_47335 = G__47381;
i__46867_47336 = G__47382;
continue;
} else {
var map__46935_47383 = cljs.core.first(seq__46864_47377__$1);
var map__46935_47384__$1 = (((((!((map__46935_47383 == null))))?(((((map__46935_47383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46935_47383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46935_47383):map__46935_47383);
var op_type_47385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46935_47384__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_47386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46935_47384__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_47387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46935_47384__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_47388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46935_47384__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___47389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_47386);
if(cljs.core.truth_(temp__5733__auto___47389)){
var old_reaction_47391 = temp__5733__auto___47389;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47385,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_47391))){
var updated_node_47392 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_47391,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47385,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47385)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_47386,updated_node_47392);
} else {
}
} else {
var data_47393 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_47386,new cljs.core.Keyword(null,"label","label",1718410804),operation_47388,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_47385)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_47385], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_47386,data_47393);
}

if(cljs.core.truth_(input_signals_47387)){
var seq__46943_47396 = cljs.core.seq(input_signals_47387);
var chunk__46944_47397 = null;
var count__46945_47398 = (0);
var i__46946_47399 = (0);
while(true){
if((i__46946_47399 < count__46945_47398)){
var input_reaction_47400 = chunk__46944_47397.cljs$core$IIndexed$_nth$arity$2(null,i__46946_47399);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47400),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47386)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47400),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47386)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47400,new cljs.core.Keyword(null,"to","to",192099007),reaction_47386], null));
}


var G__47402 = seq__46943_47396;
var G__47403 = chunk__46944_47397;
var G__47404 = count__46945_47398;
var G__47405 = (i__46946_47399 + (1));
seq__46943_47396 = G__47402;
chunk__46944_47397 = G__47403;
count__46945_47398 = G__47404;
i__46946_47399 = G__47405;
continue;
} else {
var temp__5735__auto___47406__$2 = cljs.core.seq(seq__46943_47396);
if(temp__5735__auto___47406__$2){
var seq__46943_47407__$1 = temp__5735__auto___47406__$2;
if(cljs.core.chunked_seq_QMARK_(seq__46943_47407__$1)){
var c__4556__auto___47408 = cljs.core.chunk_first(seq__46943_47407__$1);
var G__47409 = cljs.core.chunk_rest(seq__46943_47407__$1);
var G__47410 = c__4556__auto___47408;
var G__47411 = cljs.core.count(c__4556__auto___47408);
var G__47412 = (0);
seq__46943_47396 = G__47409;
chunk__46944_47397 = G__47410;
count__46945_47398 = G__47411;
i__46946_47399 = G__47412;
continue;
} else {
var input_reaction_47413 = cljs.core.first(seq__46943_47407__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47413),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47386)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_47413),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_47386)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_47413,new cljs.core.Keyword(null,"to","to",192099007),reaction_47386], null));
}


var G__47415 = cljs.core.next(seq__46943_47407__$1);
var G__47416 = null;
var G__47417 = (0);
var G__47418 = (0);
seq__46943_47396 = G__47415;
chunk__46944_47397 = G__47416;
count__46945_47398 = G__47417;
i__46946_47399 = G__47418;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47419 = cljs.core.next(seq__46864_47377__$1);
var G__47420 = null;
var G__47421 = (0);
var G__47422 = (0);
seq__46864_47333 = G__47419;
chunk__46865_47334 = G__47420;
count__46866_47335 = G__47421;
i__46867_47336 = G__47422;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
