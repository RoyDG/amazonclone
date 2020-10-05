import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF9Oy3VtSxDpen9usbQizPwH5e9La3RBs",
  authDomain: "ama-clone-7.firebaseapp.com",
  databaseURL: "https://ama-clone-7.firebaseio.com",
  projectId: "ama-clone-7",
  storageBucket: "ama-clone-7.appspot.com",
  messagingSenderId: "92966741684",
  appId: "1:92966741684:web:d2ac4e84880810559019e1",
  measurementId: "G-6XCQ994KF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

