// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS397DM_3qf1ou_MxjPJhLRR_YcYSkWhc",
  authDomain: "eng-mat.firebaseapp.com",
  projectId: "eng-mat",
  storageBucket: "eng-mat.firebasestorage.app",
  messagingSenderId: "911430971596",
  appId: "1:911430971596:web:0aeb540b237f71f38dd269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;