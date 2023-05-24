// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP97KZPcjDDJf9PX4uPuSStPGF-Q1W6Bs",
  authDomain: "food-buzz-b2a90.firebaseapp.com",
  projectId: "food-buzz-b2a90",
  storageBucket: "food-buzz-b2a90.appspot.com",
  messagingSenderId: "286502583229",
  appId: "1:286502583229:web:baedada2c28a6f1daab0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;