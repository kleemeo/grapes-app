import firebase from "firebase/app";
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCdmJMwFqrer3bNVzFSOZz1dhG0mHCnALs",
  authDomain: "juno-project3-2665a.firebaseapp.com",
  databaseURL: "https://juno-project3-2665a-default-rtdb.firebaseio.com",
  projectId: "juno-project3-2665a",
  storageBucket: "juno-project3-2665a.appspot.com",
  messagingSenderId: "39475202944",
  appId: "1:39475202944:web:20fa115199c38a6a564f65"
};


firebase.initializeApp(firebaseConfig);

export default firebase;