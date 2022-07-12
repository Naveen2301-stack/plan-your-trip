// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4OsiBz0pa24UEkdCBXeONdCk-2ltRE_0",
  authDomain: "trip-your-pan.firebaseapp.com",
  projectId: "trip-your-pan",
  storageBucket: "trip-your-pan.appspot.com",
  messagingSenderId: "203534877204",
  appId: "1:203534877204:web:25cd61344eb88dfdc7dd01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app
