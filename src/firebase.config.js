// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlw_TWz-BOqrCfLFzlni0u3GW-2Ct_oM",
  authDomain: "movie-list-a3113.firebaseapp.com",
  databaseURL: "https://movie-list-a3113-default-rtdb.firebaseio.com",
  projectId: "movie-list-a3113",
  storageBucket: "movie-list-a3113.appspot.com",
  messagingSenderId: "122780165719",
  appId: "1:122780165719:web:514356342ee34a11a7a512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();