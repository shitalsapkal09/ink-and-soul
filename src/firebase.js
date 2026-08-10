import { initializeApp } from "firebase/app";

import {
  getFirestore,
} from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8t2aj56LS1xdF_5WxNcEENs3iFyU8nyk",
  authDomain: "inkandsoul-f307d.firebaseapp.com",
  projectId: "inkandsoul-f307d",
  storageBucket: "inkandsoul-f307d.firebasestorage.app",
  messagingSenderId: "630729048678",
  appId: "1:630729048678:web:b7d9b5d64ca175fda4a3a7",
  measurementId: "G-FHBFZHKH56",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();