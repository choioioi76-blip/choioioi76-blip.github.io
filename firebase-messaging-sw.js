importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

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

// 백그라운드 푸시 수신 처리 (관리자가 보낸 입력값 그대로 알림 표출)
messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);

  const notificationTitle = payload.notification ? payload.notification.title : '건강행동 실천 알림';
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : '',
    icon: './MHRL%20icon.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
