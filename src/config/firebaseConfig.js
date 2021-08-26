import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClPnMRs2eXhdKQUjSkhLko58OpA-WMfWM",
  authDomain: "pokemon-app-5f525.firebaseapp.com",
  projectId: "pokemon-app-5f525",
  storageBucket: "pokemon-app-5f525.appspot.com",
  messagingSenderId: "659338827581",
  appId: "1:659338827581:web:e7dda1a072aac7cef29754",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export { db, google, facebook, firebase };
