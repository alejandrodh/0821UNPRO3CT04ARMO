import app from 'firebase/app';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lkzI7YklHccoIvb5umfxcHPBMDzi_to",
  authDomain: "unpro3tt04.firebaseapp.com",
  projectId: "unpro3tt04",
  storageBucket: "unpro3tt04.appspot.com",
  messagingSenderId: "384748452039",
  appId: "1:384748452039:web:8ad6ce1689f2dab5e6e6e2"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();