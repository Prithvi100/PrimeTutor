import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDfbMmz93s3T4R5jyLWJfZsAbUa1oIMuq4",
  authDomain: "trojanmind-web.firebaseapp.com",
  projectId: "trojanmind-web",
  storageBucket: "trojanmind-web.appspot.com",
  messagingSenderId: "308216278613",
  appId: "1:308216278613:web:66d54f200f6829deb2aedc",
  measurementId: "G-K8KBPRK7F8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
