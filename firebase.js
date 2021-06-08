firebase.initializeApp({

    apiKey: "AIzaSyAReCq5TMbnd_8hTVp03j5odJt_0Ta5Of8",

    authDomain: "riturajps-indian.firebaseapp.com",
    projectId: "riturajps-indian",
    storageBucket: "riturajps-indian.appspot.com",
    messagingSenderId: "958623260306",
    appId: "1:958623260306:web:084cd71e99cf1ac1d1d04b",
    measurementId: "G-MDJQH3V7NL"
});
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
