import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB7WQA0GtJA2FYCdZ3mw3NO2kZrO5Jxh1o",
  authDomain: "slack-clone-app-18c76.firebaseapp.com",
  projectId: "slack-clone-app-18c76",
  storageBucket: "slack-clone-app-18c76.appspot.com",
  messagingSenderId: "903087767071",
  appId: "1:903087767071:web:52b51edb7007585ce49f2a"
};

// create and initialize fire base app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize firestore database
const db = firebaseApp.firestore();

// to use the db we have to export it
export default db;