// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1F6vvlfhTpTKpjyskrBCDDb6s_gGFCec",
  authDomain: "toy-nestopia.firebaseapp.com",
  projectId: "toy-nestopia",
  storageBucket: "toy-nestopia.appspot.com",
  messagingSenderId: "1054443611259",
  appId: "1:1054443611259:web:fb10d21dc25d4c4c88eede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;