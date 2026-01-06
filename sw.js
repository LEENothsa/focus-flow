// 名字可以随便取，这里叫 focus-flow-cache
const CACHE_NAME = 'focus-flow-v1';

// 安装时，把网页存进缓存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['index.html']);
    })
  );
});

// 每次打开网页，先从缓存里找，这样没网也能开
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});