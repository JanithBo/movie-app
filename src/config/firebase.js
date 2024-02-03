
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9rEqF5aavGp2z4hupcYCuU-5AWlElnW4",
  authDomain: "fir-project-66863.firebaseapp.com",
  projectId: "fir-project-66863",
  storageBucket: "fir-project-66863.appspot.com",
  messagingSenderId: "559588208121",
  appId: "1:559588208121:web:aa746ccbbe79873f626128",
  measurementId: "G-4RV9832PV5"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db= getFirestore(app);
export const storage = getStorage(app);


const analytics = getAnalytics(app);