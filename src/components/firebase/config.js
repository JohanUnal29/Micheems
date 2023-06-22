// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAysVKswLM9hCj-pM-2bXnqD1n8t_cDqpQ",
  authDomain: "micheems-26c2f.firebaseapp.com",
  projectId: "micheems-26c2f",
  storageBucket: "micheems-26c2f.appspot.com",
  messagingSenderId: "653219153604",
  appId: "1:653219153604:web:a12f3fb1431395b0ebab91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);