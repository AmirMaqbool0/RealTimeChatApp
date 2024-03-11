// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe5fKtrO_kP_AzYKeoUozF5pXGhfAG1CY",
  authDomain: "chat-application-92d7c.firebaseapp.com",
  projectId: "chat-application-92d7c",
  storageBucket: "chat-application-92d7c.appspot.com",
  messagingSenderId: "33921943916",
  appId: "1:33921943916:web:868df8ee8ad12d03cb0b49"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
