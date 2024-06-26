import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2eQ3KWbDZaWarrFE7hU3N7kpKuItgQs0",
  authDomain: "calmi-mpv.firebaseapp.com",
  projectId: "calmi-mpv",
  storageBucket: "calmi-mpv.appspot.com",
  messagingSenderId: "116924349244",
  appId: "1:116924349244:web:dc5d5a6f021179666afc39",
  measurementId: "G-VSJWT2EC7P"
})

const db = firebaseApp.firestore();

export { db };