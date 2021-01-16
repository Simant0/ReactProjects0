// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCQwy7km2BYl-pJlXE5zUXq9-Utp5u10RE",
//     authDomain: "testapp-fa498.firebaseapp.com",
//     projectId: "testapp-fa498",
//     storageBucket: "testapp-fa498.appspot.com",
//     messagingSenderId: "1042078271914",
//     appId: "1:1042078271914:web:f1b85667546019a213c3d3",
//     measurementId: "G-MWMEP09WD6"
//   };

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQwy7km2BYl-pJlXE5zUXq9-Utp5u10RE",
    authDomain: "testapp-fa498.firebaseapp.com",
    projectId: "testapp-fa498",
    storageBucket: "testapp-fa498.appspot.com",
    messagingSenderId: "1042078271914",
    appId: "1:1042078271914:web:f1b85667546019a213c3d3",
    measurementId: "G-MWMEP09WD6"
  });

  const db = firebaseApp.firestore();

  export default db;