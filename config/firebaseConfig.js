// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.Next_PUBLIC_FIREBASE_API_KEY,
  authDomain: "karya-mitra.firebaseapp.com",
  projectId: "karya-mitra",
  storageBucket: "karya-mitra.appspot.com",
  messagingSenderId: "291536013422",
  appId: "1:291536013422:web:f11009d1dd788266fb7e7f",
  measurementId: "G-P4GS9VLY7M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);