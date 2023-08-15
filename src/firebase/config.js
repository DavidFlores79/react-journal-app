// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj68EiuAeWnCwxMAR3KkuEUL01xWlSvIc",
  authDomain: "react-journal-app-d0e59.firebaseapp.com",
  projectId: "react-journal-app-d0e59",
  storageBucket: "react-journal-app-d0e59.appspot.com",
  messagingSenderId: "397050266375",
  appId: "1:397050266375:web:c8649e7f8ae3a2c2f5fba2"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);