import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2bx88Fxtir15lMNhOpvntwIH1IV6coKc",
    authDomain: "crwn-db-e286f.firebaseapp.com",
    projectId: "crwn-db-e286f",
    storageBucket: "crwn-db-e286f.appspot.com",
    messagingSenderId: "406623835319",
    appId: "1:406623835319:web:fbc6b98d6d2989ca3ca932",
    measurementId: "G-HTPFEBSPGJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;