import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDzi1lTSVGJ1F2j7Nocb3zi-uZAwouv3eM",
    authDomain: "react-firebase-upload-1f95a.firebaseapp.com",
    projectId: "react-firebase-upload-1f95a",
    storageBucket: "react-firebase-upload-1f95a.appspot.com",
    messagingSenderId: "570470044379",
    appId: "1:570470044379:web:a2cd9683026bfb171432fe"
  };
  const app = initializeApp(firebaseConfig)
  const storage = getStorage(app);

  export{storage,app};