import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB6rqtcyIgqzqTs_Xo-JsvavZj4CemQsRg",
  authDomain: "projectone-a8a72.firebaseapp.com",
  projectId: "projectone-a8a72",
  storageBucket: "projectone-a8a72.appspot.com",
  messagingSenderId: "283986443559",
  appId: "1:283986443559:web:88c75b951114f5cca53d02",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
