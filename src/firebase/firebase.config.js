// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGKhF4-s1oljx1hHLvynZ4fM_tUn8pJkE",
  authDomain: "technical-client.firebaseapp.com",
  projectId: "technical-client",
  storageBucket: "technical-client.appspot.com",
  messagingSenderId: "375926887948",
  appId: "1:375926887948:web:1e6d6b6071c9adc6868029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;