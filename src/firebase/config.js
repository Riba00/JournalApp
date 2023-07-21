// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYBI9AbeFcF0Laoq0o-Y0I5RAuSAJ7iyw",
  authDomain: "react-cursos-fac27.firebaseapp.com",
  projectId: "react-cursos-fac27",
  storageBucket: "react-cursos-fac27.appspot.com",
  messagingSenderId: "337223551009",
  appId: "1:337223551009:web:4797973390c6e0933abb60"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(FirebaseApp);