import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnrGbWcnhf63qcuX6C1Ne_VW2RPjoZZS8",
    authDomain: "crwn-db-99a58-b59f1.firebaseapp.com",
    databaseURL: "https://crwn-db-99a58-b59f1.firebaseio.com",
    projectId: "crwn-db-99a58",
    storageBucket: "",
    messagingSenderId: "521154417486",
    appId: "1:521154417486:web:8f1bda7d32b8194f"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;