// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID
  apiKey: "AIzaSyA1occl737sTq0AuNJrj8PV1KEic0367SM",
  authDomain: "job-portal-8e62c.firebaseapp.com",
  projectId: "job-portal-8e62c",
  storageBucket: "job-portal-8e62c.appspot.com",
  messagingSenderId: "759188795181",
  appId: "1:759188795181:web:8945dbd328f5bbc3e72da4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
