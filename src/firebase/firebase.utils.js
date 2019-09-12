import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAcNdd24SpGcmdPoInGXJOxCp0cMw4ni7g",
  authDomain: "crwn-dbs-4e99e.firebaseapp.com",
  databaseURL: "https://crwn-dbs-4e99e.firebaseio.com",
  projectId: "crwn-dbs-4e99e",
  storageBucket: "",
  messagingSenderId: "532871368869",
  appId: "1:532871368869:web:3b061b124e4ecc77f9fd4c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
