import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB1mjmyHMaHpJCvO-0mVg4Yg09MU2JjyjM",
    authDomain: "grad-74ec3.firebaseapp.com",
    projectId: "grad-74ec3",
    storageBucket: "grad-74ec3.firebasestorage.app",
    messagingSenderId: "269565366792",
    appId: "1:269565366792:web:e3311cb1396d2942ab77bd",
    measurementId: "G-ECLSBRZ5L2"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

