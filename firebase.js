// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYP05Upxf9m3XS-GTFHZcnXu03jDpy6u8",
  authDomain: "pantry-tracker-b6215.firebaseapp.com",
  projectId: "pantry-tracker-b6215",
  storageBucket: "pantry-tracker-b6215.appspot.com",
  messagingSenderId: "878062175026",
  appId: "1:878062175026:web:56ef5381a42ea41e75cd2b",
  measurementId: "G-DLLNYX2ZV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}