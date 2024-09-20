
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB1lSqbNHl3Uqc2ga3rpXEptvZwIA1l5ac",
  authDomain: "clone-1f6ae.firebaseapp.com",
  projectId: "clone-1f6ae",
  storageBucket: "clone-1f6ae.appspot.com",
  messagingSenderId: "98408917416",
  appId: "1:98408917416:web:2c8a3d60b8c1dd7fe8959d",
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
