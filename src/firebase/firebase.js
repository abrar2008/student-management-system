import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import "firebase/auth";
import "firebase/database";

const settings = {timestampsInSnapshots: true};

export const config = {
    apiKey: "AIzaSyDerpF5537kuPQAC8858weoMIlHMnqBKfg",
    authDomain: "project1-6005e.firebaseapp.com",
    databaseURL: "https://project1-6005e.firebaseio.com",
    projectId: "project1-6005e",
    storageBucket: "project1-6005e.appspot.com",
    messagingSenderId: "294249519058",
    appId: "1:294249519058:web:9b91b6bbc7025a631f9a0b",
    measurementId: "G-2YV55J25RF"
  };


  firebase.initializeApp(config);
firebase.firestore().settings(settings);


  
  //separting database API and authentication
  const db = firebase.database();
  const auth = firebase.auth();
  
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  
  export { db, auth, facebookProvider };
  export default firebase;
  
