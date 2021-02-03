import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyClxUhIJVA3vv6gTVjVwIMBwDNZFMaKqaY",
  authDomain: "book-santa-1ffa5.firebaseapp.com",
  projectId: "book-santa-1ffa5",
  storageBucket: "book-santa-1ffa5.appspot.com",
  messagingSenderId: "66015089536",
  appId: "1:66015089536:web:d88e3ecbfdab1f475ea765"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
