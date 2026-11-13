const S="ruzgar-20261113113959",D=["./","index.html","manifest.webmanifest","ikon-192.png","ikon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(S).then(c=>c.addAll(D.map(x=>new Request(x,{cache:"reload"})))))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==S).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;
e.respondWith(fetch(e.request,{cache:"no-cache"}).then(r=>{const k=r.clone();caches.open(S).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
