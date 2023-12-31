/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const cardValidation = 'card-validation-v1';
const assets = [
    './',
    './index.html',
    './img/favicon.ico',
    './index.js',
    './style.css',
    './validator.js',
    './img/logo.png'
]

// eslint-disable-next-line arrow-parens
self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(cardValidation).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        }),
    );
});