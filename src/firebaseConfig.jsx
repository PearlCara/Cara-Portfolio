// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXEzPBmYVYsvgcoMhcZpns7fsCkknBO_Y",
  authDomain: "portfolio-29e8d.firebaseapp.com",
  projectId: "portfolio-29e8d",
  storageBucket: "portfolio-29e8d.appspot.com",
  messagingSenderId: "383481849371",
  appId: "1:383481849371:web:00e7c5f09a78a37dc87abe",
  measurementId: "G-VY22SFB539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };