// do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFM2DppnD7EVNONel8BlIwqnvHmnqhBrs",
  authDomain: "simple-firebase-a1f30.firebaseapp.com",
  projectId: "simple-firebase-a1f30",
  storageBucket: "simple-firebase-a1f30.firebasestorage.app",
  messagingSenderId: "11306812073",
  appId: "1:11306812073:web:444e4cb0c7113b95b29fb8",
  measurementId: "G-01GCF3RNL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
