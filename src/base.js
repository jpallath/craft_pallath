import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDSUlbU68PO--9F5Lj2qihMz2TOj0yLlTM",
  authDomain: "analog-reddit.firebaseapp.com",
  databaseURL: "https://analog-reddit.firebaseio.com",
  projectId: "analog-reddit",
  storageBucket: "analog-reddit.appspot.com"
});

export default app;
