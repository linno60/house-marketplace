import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHAvq0Qx7THnRu0GUz0ZF-MBcA5zoVhGg",
  authDomain: "house-marketplace-app-1ea4a.firebaseapp.com",
  projectId: "house-marketplace-app-1ea4a",
  storageBucket: "house-marketplace-app-1ea4a.appspot.com",
  messagingSenderId: "877572029057",
  appId: "1:877572029057:web:f5fe101ea09e806ee06b80"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()