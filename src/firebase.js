import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBr4C-zIHdFzP0YBNDpDsj40YMiC3R8-AQ",
  authDomain: "clone-219da.firebaseapp.com",
  databaseURL: "https://clone-219da.firebaseio.com",
  projectId: "clone-219da",
  storageBucket: "clone-219da.appspot.com",
  messagingSenderId: "464757893047",
  appId: "1:464757893047:web:80706b76f993b026ff6a32"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { db, auth };