import firebase from 'firebase';
import { createContext } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyBd6ko6RFgGyU9ZiZ0r_DXU8b1rZ3HRspI',
  authDomain: 'disney-clone-111.firebaseapp.com',
  projectId: 'disney-clone-111',
  storageBucket: 'disney-clone-111.appspot.com',
  messagingSenderId: '286451882315',
  appId: '1:286451882315:web:1c8e436b93895eda2230ce',
  measurementId: 'G-FWXEC47ZCH',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

export default db;
