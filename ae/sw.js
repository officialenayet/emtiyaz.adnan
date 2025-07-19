self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json"
        // যদি style.css বা অন্য js file থাকে, সেগুলাও এখানে যোগ করো
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
