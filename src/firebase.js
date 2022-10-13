import * as all from "firebase/app";
import firebase from "firebase/compat/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44evkPJ50S9P7d0p9MQRQwtLQ_LH2Da8",
  authDomain: "facebook-clone-9e00a.firebaseapp.com",
  projectId: "facebook-clone-9e00a",
  storageBucket: "facebook-clone-9e00a.appspot.com",
  messagingSenderId: "217195288497",
  appId: "1:217195288497:web:f8ef261d5d75366c194f90",
  measurementId: "G-ZG33HW2F1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
