const CACHE_NAME = 'goaltrack-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './MHRL%20icon.png'
];

// 서비스 워커 설치 및 파일 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 오프라인 상태 및 네트워크 요청 처리
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
