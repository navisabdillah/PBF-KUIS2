import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyDpNABbbWeKdXMV2dJIZkhH4zxmS5ZqtNA",
    authDomain: "kuis2-b3390.firebaseapp.com",
    projectId: "kuis2-b3390",
    storageBucket: "kuis2-b3390.appspot.com",
    messagingSenderId: "792429707154",
    appId: "1:792429707154:web:37a03326f600fd8756cb4b",
    measurementId: "G-32BYHZX0HX"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;  

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;