
const CACHE="xau-journal-v2";
const ASSETS=["./xauusd_trading_journal.html","./manifest.json","./sw.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
