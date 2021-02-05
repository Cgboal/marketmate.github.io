goog.provide('marketmate.calc');
marketmate.calc.account_risk = (function marketmate$calc$account_risk(balance,risk_percent){
return ((balance / (100)) * risk_percent);
});
marketmate.calc.risk_per_share = (function marketmate$calc$risk_per_share(entry,stop){
return (entry - stop);
});
marketmate.calc.position_size = (function marketmate$calc$position_size(balance,entry,stop,risk_percent){
return (marketmate.calc.account_risk(balance,risk_percent) / marketmate.calc.risk_per_share(entry,stop));
});
marketmate.calc.potential_profit = (function marketmate$calc$potential_profit(position_size,exit,entry){
return (position_size * (exit - entry));
});
marketmate.calc.potential_loss = (function marketmate$calc$potential_loss(position_size,stop,entry){
return (position_size * (entry - stop));
});
marketmate.calc.risk_reward = (function marketmate$calc$risk_reward(profit,loss){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((loss / loss)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((profit / loss))].join('');
});
marketmate.calc.calc_agnostic = (function marketmate$calc$calc_agnostic(balance,entry,stop,exit,risk_percent){
var quantity = marketmate.calc.position_size(balance,entry,stop,risk_percent);
var unrealized_profit = marketmate.calc.potential_profit(quantity,exit,entry);
var unrealized_loss = marketmate.calc.potential_loss(quantity,stop,entry);
var ratio = marketmate.calc.risk_reward(unrealized_profit,unrealized_loss);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"profit","profit",-533264438),unrealized_profit,new cljs.core.Keyword(null,"loss","loss",-1014627430),unrealized_loss,new cljs.core.Keyword(null,"risk-reward","risk-reward",1541546986),ratio], null);
});
marketmate.calc.calc_position = (function marketmate$calc$calc_position(balance,entry,stop,exit,risk_percent){
return marketmate.calc.calc_agnostic(balance,entry,stop,exit,risk_percent);
});

//# sourceMappingURL=marketmate.calc.js.map
