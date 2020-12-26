import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0h17TEuHkc5FgT44-oLxk6HMTG7PMG94",
  authDomain: "messenger-app-d6778.firebaseapp.com",
  projectId: "messenger-app-d6778",
  storageBucket: "messenger-app-d6778.appspot.com",
  messagingSenderId: "682634440684",
  appId: "1:682634440684:web:ac5fb685b94682d7e99ac9",
  measurementId: "G-1805N64555",
});

const db = firebaseApp.firestore();

export default db ;
