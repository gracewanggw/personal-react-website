import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCu_i6Grq8iyuCEKQpfRBNvtXqMR8z7mjY",
    authDomain: "react-website-bb9e8.firebaseapp.com",
    projectId: "react-website-bb9e8",
    storageBucket: "react-website-bb9e8.appspot.com",
    messagingSenderId: "514894441549",
    appId: "1:514894441549:web:21042cbc04b66c906ac004",
    measurementId: "G-GMJYHQW86Y"
});


const db = firebase.firestore();

export default {
  firebase, db
}

