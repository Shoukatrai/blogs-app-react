import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuBvIdsuIzy3q5Ni34A3Hqh5292b5aXf8",
  authDomain: "blogs-app-8a228.firebaseapp.com",
  projectId: "blogs-app-8a228",
  storageBucket: "blogs-app-8a228.firebasestorage.app",
  messagingSenderId: "854316630713",
  appId: "1:854316630713:web:e43f20a67249d2be1c1168"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);
export {
    app, auth , db
}