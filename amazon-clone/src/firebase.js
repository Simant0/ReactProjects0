import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXZ2XNQcItRtKMs02VjiPiSTxjN9kPVqM",
  authDomain: "clone-55d66.firebaseapp.com",
  projectId: "clone-55d66",
  storageBucket: "clone-55d66.appspot.com",
  messagingSenderId: "593248251935",
  appId: "1:593248251935:web:50027e903ba02c76e7e52a",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
