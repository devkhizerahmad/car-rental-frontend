// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}   from 'firebase/firestore'
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8d5lnMyYiD1fFMmWIJFUONgX_l0F_m-4",
  authDomain: "hbaservices-9870b.firebaseapp.com",
  projectId: "hbaservices-9870b",
  storageBucket: "hbaservices-9870b.firebasestorage.app",
  messagingSenderId: "534663071388",
  appId: "1:534663071388:web:d81160c35b7b6e8de0cf59",
  measurementId: "G-QQ1Y2TR9YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);
export {auth};
const db = getFirestore(app);
export {db};