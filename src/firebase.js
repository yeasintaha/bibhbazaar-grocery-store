import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDYsMG2XpTEz-pGRY6ZpwdSr63KQtoTDvI",
  authDomain: "bibhbazaar-grocery-store.firebaseapp.com",
  databaseURL: "https://bibhbazaar-grocery-store.firebaseio.com",
  projectId: "bibhbazaar-grocery-store",
  storageBucket: "bibhbazaar-grocery-store.appspot.com",
  messagingSenderId: "207978344896",
  appId: "1:207978344896:web:4c2fda3d793916aa6d5825"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();








