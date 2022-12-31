// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1JIogTUVG4MwKLMW52uHQuiZ88CAMRWo",
  authDomain: "admin-katalog-4be90.firebaseapp.com",
  projectId: "admin-katalog-4be90",
  storageBucket: "admin-katalog-4be90.appspot.com",
  messagingSenderId: "192046204346",
  appId: "1:192046204346:web:8f50f14d032656840dc983",
  measurementId: "G-QXREPS3F7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };
