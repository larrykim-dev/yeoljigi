// 열지기가 https://yeoljigi.github.io/ 로 옮겼다 — 예전 판 캐시를 지우고 스스로 물러난 뒤, 열린 창을 다시 불러 옮김 안내를 보인다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
  })());
});
