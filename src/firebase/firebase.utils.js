import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAZkzMFfZlwoiDg8KPgJHjI_o9sGDHH4Y4",
    authDomain: "beautique-0.firebaseapp.com",
    databaseURL: "https://beautique-0.firebaseio.com",
    projectId: "beautique-0",
    storageBucket: "beautique-0.appspot.com",
    messagingSenderId: "157535205453",
    appId: "1:157535205453:web:fc938749d0fcfe19b24404",
    measurementId: "G-4PP1RVC1W4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;