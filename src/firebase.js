// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtws1L1kbKLLu3WOcwuxXEzM3YD-_wHes",
  authDomain: "to-do-list-22633.firebaseapp.com",
  projectId: "to-do-list-22633",
  storageBucket: "to-do-list-22633.appspot.com",
  messagingSenderId: "622150182110",
  appId: "1:622150182110:web:3ed445d4272bcb0350ce4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
