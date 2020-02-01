importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
import {cacheNames} from 'workbox-core';

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

  workbox.precaching.precacheAndRoute([
    { url: "/index.html", revision:"383676"},
    { url: "/styles/inline.css", revision:null},
    { url: "/scripts/app.js", revision:null},
  ]);


self.addEventListener('install', (event) => {
  const urls = [/* ... */];
  const cacheName = cacheNames.runtime;
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urls)));
});