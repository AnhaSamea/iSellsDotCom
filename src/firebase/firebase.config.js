// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMnpM6oxtQBNUdZNh2XT4hojbNLRSofa8",
  authDomain: "isells-dotcom.firebaseapp.com",
  projectId: "isells-dotcom",
  storageBucket: "isells-dotcom.appspot.com",
  messagingSenderId: "550234801194",
  appId: "1:550234801194:web:6128ed11459728980b6f53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;