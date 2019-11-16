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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //for when looging out not display  null in console
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};

//used to send data to firestore
export const addCollectionAndItems = async (collection, objectsToAdd) => {
  const collectionRef = firestore.collection(collection);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  await batch.commit();
};

export const convertColletionToMap = collection => {
  const transformedColletcion = collection.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedColletcion.reduce((accmulator, collection) => {
    accmulator[collection.title.toLowerCase()] = collection;
    return accmulator;
  }, {});
};

export default firebase;
