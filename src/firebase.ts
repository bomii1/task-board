// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsjAzjjI_G4RBJAS1y3xKwa7Lhc7xUOLY",
  authDomain: "react-tack-app.firebaseapp.com",
  projectId: "react-tack-app",
  storageBucket: "react-tack-app.firebasestorage.app",
  messagingSenderId: "677288498280",
  appId: "1:677288498280:web:6e3e7ad82c8c55ae2a17dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);