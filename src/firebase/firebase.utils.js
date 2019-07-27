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

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            userRef.set({
                displayName: displayName,
                email: email,
                date: createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const signInWithPassword = async ( email, password ) => {
    const user = await auth.signInWithEmailAndPassword( email, password ).catch((error)=>(console.log(error)));
    return user;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;