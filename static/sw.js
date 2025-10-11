/*
🔥 Service Worker "Kill Switch"
================================
This file intentionally replaces the old service worker that was previously
registered at /sw.js on alexdiliberto.com. The old worker aggressively cached
pages and assets, which could cause repeat visitors to see stale content even
after the site no longer used a service worker.

How this file works:
  • Installs and activates immediately (skipWaiting + claim).
  • Deletes *all* existing caches (covers legacy alexdiliberto-cache-* entries).
  • Sends a message to controlled pages telling them to reload once.
  • Calls registration.unregister() so no service worker remains registered.
  • Does NOT include a fetch handler, so all requests go directly to the network.

Why this file exists:
  • To ensure any visitor who had the old SW installed gets it removed.
  • Safe to leave here indefinitely: negligible performance cost, self-cleaning.

Important for future maintainers:
  • If you ever want to add a NEW service worker, remove or replace this file.
    Otherwise this "kill switch" will continue unregistering any new worker
    registered at /sw.js.
  • Consider updating Cache-Control headers for /sw.js (no-cache) or purging
    your CDN (e.g., Cloudflare) so browsers always fetch the latest version.

In short: This is a deliberate "anti-service-worker" file. It cleans up the
past SW and prevents stale offline caches. Remove/replace it only when you
intentionally want a new service worker.
*/

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (evt) => {
  evt.waitUntil((async () => {
    await self.clients.claim();
    for (const key of await caches.keys()) await caches.delete(key);
    for (const c of await self.clients.matchAll({ includeUncontrolled: true })) {
      c.postMessage({ type: 'SW_CLEAR_AND_RELOAD' });
    }
    await self.registration.unregister();
  })());
});
