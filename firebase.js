// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdB7Jr_xxVCly2DWbgsI8vMOU5RpDQ-aY",
  authDomain: "imessage-clone-73551.firebaseapp.com",
  projectId: "imessage-clone-73551",
  storageBucket: "imessage-clone-73551.appspot.com",
  messagingSenderId: "597210708368",
  appId: "1:597210708368:web:2fee8282ea1b1f1ace5b15"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
