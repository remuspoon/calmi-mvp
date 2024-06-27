// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2eQ3KWbDZaWarrFE7hU3N7kpKuItgQs0",
  authDomain: "calmi-mpv.firebaseapp.com",
  projectId: "calmi-mpv",
  storageBucket: "calmi-mpv.appspot.com",
  messagingSenderId: "116924349244",
  appId: "1:116924349244:web:dc5d5a6f021179666afc39",
  measurementId: "G-VSJWT2EC7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);