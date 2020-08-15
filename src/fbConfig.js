
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD3K-JOfd1yjA2yG31oHzI6stmpg8_o2-U",
    authDomain: "pzpizza-fce09.firebaseapp.com",
    databaseURL: "https://pzpizza-fce09.firebaseio.com",
    projectId: "pzpizza-fce09",
    storageBucket: "pzpizza-fce09.appspot.com",
    messagingSenderId: "899426270614",
    appId: "1:899426270614:web:5dc220a3cc4697154531b7",
    measurementId: "G-XQ7079SCD1"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
