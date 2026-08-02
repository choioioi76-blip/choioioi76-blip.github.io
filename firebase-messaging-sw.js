importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// 1. Firebase 설정 (본인 Firebase 콘솔의 프로젝트 설정 값)
firebase.initializeApp({
  apiKey: "본인의_API_KEY",
  authDomain: "본인의_PROJECT_ID.firebaseapp.com",
  projectId: "본인의_PROJECT_ID",
  storageBucket: "본인의_PROJECT_ID.appspot.com",
  messagingSenderId: "본인의_SENDER_ID",
  appId: "본인의_APP_ID"
});

const messaging = firebase.messaging();

// 2. 백그라운드 상태(앱이 꺼져있거나 화면이 꺼졌을 때) 푸시 알림 수신
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);

  const notificationTitle = payload.notification.title || 'GoalTrack 알림';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: '/MHRL%20icon.png' // 앱 아이콘 경로
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
