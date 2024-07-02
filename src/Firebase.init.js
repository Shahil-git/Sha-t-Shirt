// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhKFQtvQn2Q2eG7_6wEwGxZau-22cTBQw",
  authDomain: "sha-shop.firebaseapp.com",
  projectId: "sha-shop",
  storageBucket: "sha-shop.appspot.com",
  messagingSenderId: "391888716357",
  appId: "1:391888716357:web:235c22688444419222592c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;