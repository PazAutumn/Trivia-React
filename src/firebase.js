// src/firebase.js
import firebase from 'firebase'
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyD3gA_xqvNrwDrvpoKUufw05nxosuJGPtQ",
    authDomain: "trivia-react.firebaseapp.com",
    databaseURL: "https://trivia-react.firebaseio.com",
    projectId: "trivia-react",
    storageBucket: "",
    messagingSenderId: "748484161694"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;