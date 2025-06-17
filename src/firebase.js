// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmjrr3NJok1lBtPfncRg73CLEMqF0HP1k",
  authDomain: "hexanest-c98dd.firebaseapp.com",
  projectId: "hexanest-c98dd",
  storageBucket: "hexanest-c98dd.firebasestorage.app",
  messagingSenderId: "236347193395",
  appId: "1:236347193395:web:7ac1f6b806ab9eec6bcb46",
  measurementId: "G-3FDPF67LQC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
