importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// 1. 실제 파이어베이스 프로젝트 설정값
firebase.initializeApp({
  apiKey: "AIzaSyDQpqwltPiJtcMMrmA8TQAks1b3RbR_lvA",
  authDomain: "mhrl-goaltrack.firebaseapp.com",
  databaseURL: "https://mhrl-goaltrack-default-rtdb.firebaseio.com",
  projectId: "mhrl-goaltrack",
  storageBucket: "mhrl-goaltrack.firebasestorage.app",
  messagingSenderId: "204480953444",
  appId: "1:204480953444:web:912cae81416f690bdd7371"
});

const messaging = firebase.messaging();

// 2. 백그라운드 푸시 알림 수신
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);

  const notificationTitle = payload.notification ? payload.notification.title : '건강행동 실천 알림';
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : '오늘의 목표를 확인해 보세요!',
    icon: './MHRL icon.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
