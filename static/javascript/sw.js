var staticCacheName = 'todoapp';
 
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        // "./assets/192.png", 
        // "./css/style.css", 
        "./"
      ]);
    })
  );
});
 
self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
      if ((requestUrl.pathname === '/')) {
        event.respondWith(caches.match(''));
        return;
      }
    }
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
    console.log(`Fecting from ${e.request.url}`);
    console.log(fetch(event.request));
});