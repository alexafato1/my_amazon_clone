import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBwAPU8fqGfJBbmUD0-kit5nNfuPjBeRU",
    authDomain: "e-from-alexa.firebaseapp.com",
    databaseURL: "https://e-from-alexa.firebaseio.com",
    projectId: "e-from-alexa",
    storageBucket: "e-from-alexa.appspot.com",
    messagingSenderId: "572363401774",
    appId: "1:572363401774:web:5a71cf970c9eea35e68dbf",
    measurementId: "G-2G864YZRJ0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };