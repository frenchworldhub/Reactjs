import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyACxS7842UPk8t4p9bIk7DXf29HDsFDA20",
    authDomain: "french-world.firebaseapp.com",
    databaseURL: "https://french-world.firebaseio.com",
    projectId: "french-world",
    storageBucket: "french-world.appspot.com",
    messagingSenderId: "897737559508",
    appId: "1:897737559508:web:56a881d354ef43e2b61a41",
    measurementId: "G-SBSWD0HC9Z"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;