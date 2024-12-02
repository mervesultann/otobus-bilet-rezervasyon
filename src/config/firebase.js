import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBDJFQgkqju2cHTE75tmb30CkMAhX1Vz9k",
    authDomain: "otobus-rezervasyon.firebaseapp.com",
    projectId: "otobus-rezervasyon",
    storageBucket: "otobus-rezervasyon.firebasestorage.app",
    messagingSenderId: "356188237296",
    appId: "1:356188237296:web:e21a789dd14b2c1fa2c135",
    measurementId: "G-GYSCHG9D3Y"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



