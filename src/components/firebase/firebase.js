import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3fenpQ9pCORcDIVgWu0huY6ewtDn0Qqs",
  authDomain: "twitter-ae121.firebaseapp.com",
  projectId: "twitter-ae121",
  storageBucket: "twitter-ae121.appspot.com",
  messagingSenderId: "844719079505",
  appId: "1:844719079505:web:2bf3973b4ad8c07894f870",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
