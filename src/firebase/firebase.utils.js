import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAR8loS9AplSJROaeTPbwtFNyE3TAH4LUY",
  authDomain: "crwn-db-16c0a.firebaseapp.com",
  projectId: "crwn-db-16c0a",
  storageBucket: "crwn-db-16c0a.appspot.com",
  messagingSenderId: "1017485227465",
  appId: "1:1017485227465:web:1ca068d4e017c2d809e418",
  measurementId: "G-Z89CF7Q6L7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;