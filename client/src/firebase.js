// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-819fa.firebaseapp.com",
  projectId: "mern-estate-819fa",
  storageBucket: "mern-estate-819fa.appspot.com",
  messagingSenderId: "659718190558",
  appId: "1:659718190558:web:df0edf444172f7324e594f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);