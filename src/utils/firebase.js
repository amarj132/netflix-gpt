// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj9_I0B1CeDf-noeCYjHs5owO1wA8pMMw",
  authDomain: "netflixgpt-72dd0.firebaseapp.com",
  projectId: "netflixgpt-72dd0",
  storageBucket: "netflixgpt-72dd0.appspot.com",
  messagingSenderId: "754695337115",
  appId: "1:754695337115:web:18e273d01467701f4a423e",
  measurementId: "G-5K7E4MWF6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();