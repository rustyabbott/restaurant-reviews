const cacheName = 'restaurant-reviews-app';
const cacheFiles = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/restaurant.html'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => {
      return cache
      .addAll(cacheFiles)
      .catch(error => {
        console.log('Caches.open failed with error: ' + error);
      })
    })
  )
})

// From https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
self.addEventListener('fetch', event => {
  if (event.request.method != 'GET') return;
  event.respondWith(async function() {
    const cache = await caches.open('retaurant-reviews-app');
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      event.waitUntil(cache.add(event.request));
      return cachedResponse;
    }
    return fetch(event.request);
  }());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return true;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
