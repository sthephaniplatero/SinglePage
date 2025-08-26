// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 🔹 Importa Auth

const firebaseConfig = {
  apiKey: "AIzaSyCc4SCAm3q6dBWmaSeuQvzWjOLaGZdVZD0",
  authDomain: "singlepage-328ee.firebaseapp.com",
  projectId: "singlepage-328ee",
  storageBucket: "singlepage-328ee.firebasestorage.app",
  messagingSenderId: "716539553027",
  appId: "1:716539553027:web:e31002d936dbf3e26b7536"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// 🔹 Inicializa y exporta Auth
export const auth = getAuth(appFirebase);

export default appFirebase;
