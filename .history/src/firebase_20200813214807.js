import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7tcHyOvB3zlOzl3x6kEX57aZb2--Ohes",
  authDomain: "slack-clone-9d3bf.firebaseapp.com",
  databaseURL: "https://slack-clone-9d3bf.firebaseio.com",
  projectId: "slack-clone-9d3bf",
  storageBucket: "slack-clone-9d3bf.appspot.com",
  messagingSenderId: "1061365779666",
  appId: "1:1061365779666:web:3206cc3079f35e47e3310b",
  measurementId: "G-HZLWMQTRND",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
