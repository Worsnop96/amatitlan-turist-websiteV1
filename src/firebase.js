// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNRmpbDEIg6kJcq1RWRM_TehwxMTDR43s",
    authDomain: "amatitlan-turist.firebaseapp.com",
    databaseURL: "https://amatitlan-turist.firebaseio.com",
    projectId: "amatitlan-turist",
    storageBucket: "amatitlan-turist.appspot.com",
    messagingSenderId: "1062385447610",
    appId: "1:1062385447610:web:9cf6f7690c1ad05a37c883",
    measurementId: "G-96HGSSR924"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;