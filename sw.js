const C='hl-v1',F=['./','index.html','app.js','shops.json','manifest.json','icon-192.png','logos/coop-extra.png','logos/coop-mega.png','logos/coop-obs.png','logos/kiwi.png','logos/meny.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request))));
