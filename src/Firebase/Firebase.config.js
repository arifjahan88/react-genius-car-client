// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi7dW4TSTuMjtlS6mR7cN8b2s2YoMY6L4",
  authDomain: "react-genius-car-client.firebaseapp.com",
  projectId: "react-genius-car-client",
  storageBucket: "react-genius-car-client.appspot.com",
  messagingSenderId: "394740689109",
  appId: "1:394740689109:web:b31c56873a53aed24ada5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
