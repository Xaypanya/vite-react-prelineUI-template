// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "handsof-17bd4.firebaseapp.com",
  projectId: "handsof-17bd4",
  storageBucket: "handsof-17bd4.appspot.com",
  messagingSenderId: "839494130993",
  appId: "1:839494130993:web:0cdf491cf1c9671846a410",
  measurementId: "G-DM9DVX2SLN"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 const analytics = getAnalytics(app);