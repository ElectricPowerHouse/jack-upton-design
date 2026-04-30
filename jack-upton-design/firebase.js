// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDUY3wmLY2ZwESjJK97t9GPLPaRr1pkXe4",

  authDomain: "jackuptondesign.firebaseapp.com",

  projectId: "jackuptondesign",

  storageBucket: "jackuptondesign.firebasestorage.app",

  messagingSenderId: "1068777268782",

  appId: "1:1068777268782:web:c9cd82ef4813202dbda1bf",

  measurementId: "G-JS49NXSEEB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);