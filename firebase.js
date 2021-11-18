import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDIG8pBSRAWCGu1jdlKYu0wlN5LvxWMPu0",
    authDomain: "signal-clone-27c23.firebaseapp.com",
    projectId: "signal-clone-27c23",
    storageBucket: "signal-clone-27c23.appspot.com",
    messagingSenderId: "859872823915",
    appId: "1:859872823915:web:4b41af82481fe7a1123f2e"
  };

  let app;
  
  if (firebase.apps.length === 0) { 
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };