var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAI_bNp_G-qTooRUh91NAvDHudkiu53wvM",
  authDomain: "pirateapp-266f7.firebaseapp.com",
  databaseURL: "https://pirateapp-266f7.firebaseio.com",
  projectId: "pirateapp-266f7",
  storageBucket: "pirateapp-266f7.appspot.com",
  messagingSenderId: "493559204969",
  appId: "1:493559204969:web:92baf2e37f51390b1666f8"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().createUserWithEmailAndPassword("testmail@mail.com", "password").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});