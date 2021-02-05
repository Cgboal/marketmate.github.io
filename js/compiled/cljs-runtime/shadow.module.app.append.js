
shadow.cljs.devtools.client.env.module_loaded('app');

try { marketmate.core.init(); } catch (e) { console.error("An error occurred when calling (marketmate.core/init)"); throw(e); }