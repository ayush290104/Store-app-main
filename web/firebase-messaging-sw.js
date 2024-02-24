importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: 'AIzaSyA5z2MaEB785J978fJXnEhnMWAMBqIF8pU',
  appId: '1:586680111067:web:614197c9e24a369f64e1fe',
  messagingSenderId: '586680111067',
  projectId: 'eki-express-74357',
  authDomain: 'eki-express-74357.firebaseapp.com',
  storageBucket: 'eki-express-74357.appspot.com',
  measurementId: 'G-SC7Z2DNYSP',
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});