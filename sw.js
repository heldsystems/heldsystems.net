const cacheName = 'resume-cache-v1';
const assets = [
  '/avengineer.html',
  '/noise-texture.png',
  '/Joe_Held-AV_Engineer.pdf'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
