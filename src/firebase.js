import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-QKMh_6viZzNRgC6jkJLwKEIl56VfwzI",
    authDomain: "doppelganger-20cbc.firebaseapp.com",
    databaseURL: "https://doppelganger-20cbc.firebaseio.com",
    projectId: "doppelganger-20cbc",
    storageBucket: "doppelganger-20cbc.appspot.com",
    messagingSenderId: "378027382232",
    appId: "1:378027382232:web:5e5bc6bbc50bf341958ead",
    measurementId: "G-JPZHFMFS7N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();  // real-time db in firebase
  const auth = firebase.auth(); // gives a variable we can use all the signing in, etc

export { db, auth };