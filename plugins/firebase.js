import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD4eaZiGdd65l6QQ9OCCmBsWGRpnsC4usY",
    authDomain: "contact-book-db48f.firebaseapp.com",
    databaseURL: "https://contact-book-db48f.firebaseio.com",
    projectId: "contact-book-db48f",
    storageBucket: "contact-book-db48f.appspot.com",
    messagingSenderId: "96434624357",
    appId: "1:96434624357:web:b9dbdf5d6fd4fca5e3338c",
    measurementId: "G-EBQJ4BLJ4P"
  };
  // Initialize Firebase
  export default !firebase.apps.length 
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore(); 
//   const db = firebase.firestore();
//   const settings = {
//     timestampsInSnapshots: true
// };
//   db.settings(settings);
//   export default db;
