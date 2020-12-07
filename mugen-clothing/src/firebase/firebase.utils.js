import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdPwQ03jq7Dh5p8BBJVXKV3_TvI8hUGqA",
  authDomain: "mugen-clothing.firebaseapp.com",
  projectId: "mugen-clothing",
  storageBucket: "mugen-clothing.appspot.com",
  messagingSenderId: "272315070587",
  appId: "1:272315070587:web:6354885ac2bb6b433f8ade",
  measurementId: "G-TX3M14D2T3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;