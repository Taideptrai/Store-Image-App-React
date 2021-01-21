import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBIw-Ivdrtau_v6dmSKZcB99JRuPcKr1g",
  authDomain: "shoppingwebreact.firebaseapp.com",
  databaseURL: "https://shoppingwebreact.firebaseio.com",
  projectId: "shoppingwebreact",
  storageBucket: "shoppingwebreact.appspot.com",
  messagingSenderId: "530625832237",
  appId: "1:530625832237:web:c3473e01e4f4ba95b21fa4",
  measurementId: "G-F2PHQHTXPP"
};
  firebase.initializeApp(firebaseConfig);

  const projectStore = firebase.storage();
  const projectFirestore = firebase.firestore();
  const auth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStore, projectFirestore,timestamp,auth}