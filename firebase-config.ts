// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDQgKY6qoznrP3A0UgPPhiTVTx1bN2_vI",
  authDomain: "intern-app-7a0cd.firebaseapp.com",
  projectId: "intern-app-7a0cd",
  storageBucket: "intern-app-7a0cd.appspot.com",
  messagingSenderId: "984873487125",
  appId: "1:984873487125:web:700917f5f701890a97771c",
  measurementId: "G-DVLHQP9KJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
