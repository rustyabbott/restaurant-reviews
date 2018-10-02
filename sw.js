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

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
      .addAll(cacheFiles)
      .catch(error => {
        console.log('Caches.open failed with error: ' + error);
      })
    })
  )
})
