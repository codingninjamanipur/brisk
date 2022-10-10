// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlb7w0CmHAgtmUMF80Kj0o4TMhFMpmA5E",
  authDomain: "brisk-bd9eb.firebaseapp.com",
  projectId: "brisk-bd9eb",
  storageBucket: "brisk-bd9eb.appspot.com",
  messagingSenderId: "979048852206",
  appId: "1:979048852206:web:9f4ba6667f4edca21e61ff",
  measurementId: "G-QV730Y5Z9N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
