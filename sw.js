---
layout: null
---

var CACHE_NAME = 'alexdiliberto-cache-v2';
var urlsToCache = [];

// Cache posts
// Limits the number of posts that gets cached to 3
// Reads a piece of front-matter in each post that directs the second loop to the folder where the assets are held
// {% for post in site.posts limit:3 %}
//   urlsToCache.push("{{ post.url }}");
//   {% for asset in post.assets %}
//     {% for file in site.static_files %}
//       {% if file.path contains asset %}
//         urlsToCache.push("{{ file.path }}");
//       {% endif %}
//     {% endfor %}
//   {% endfor %}
// {% endfor %}

{% for post in site.posts limit:3 %}
  urlsToCache.push("{{ post.url }}");
{% endfor %}

// Cache pages
{% for page in site.html_pages %}
  {% unless page.url contains '/talks' %}
    urlsToCache.push("{{ page.url }}");
  {% endunless %}
{% endfor %}

// Cache assets
{% for file in site.static_files %}
  {% unless file.path contains '/talks' %}
    {% if file.path contains '/img' or file.extname == '.js' or file.extname == '.png' %}
      urlsToCache.push("{{ file.path }}")
    {% endif %}
  {% endunless %}
{% endfor %}

//console.log('urlsToCache', urlsToCache);

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(response) {
          if (event.request.url.indexOf('chrome-extension') !== -1) {
            return response;
          }
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(function() {
      return caches.match('/offline/');
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
