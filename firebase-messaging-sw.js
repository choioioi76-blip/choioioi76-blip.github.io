// Firebase SDK 스크립트 불러오기 (서비스 워커용)
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Firebase 설정 (index.html과 동일한 설정)
const firebaseConfig = {
  apiKey: "AIzaSyDQpqwltPiJtcMMrmA8TQAks1b3RbR_lvA",
  authDomain: "mhrl-goaltrack.firebaseapp.com",
  databaseURL: "https://mhrl-goaltrack-default-rtdb.firebaseio.com",
  projectId: "mhrl-goaltrack",
  storageBucket: "mhrl-goaltrack.firebasestorage.app",
  messagingSenderId: "204480953444",
  appId: "1:204480953444:web:912cae81416f690bdd7371"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 앱이 꺼져있거나 백그라운드 상태일 때 푸시 알림 수신 처리
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);

  const notificationTitle = payload.notification?.title || '건강행동 실천 앱';
  const notificationOptions = {
    body: payload.notification?.body || '새로운 메시지가 도착했습니다.',
    icon: './icon-192.png', // manifest.json에 등록된 앱 아이콘 경로
    badge: './icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
