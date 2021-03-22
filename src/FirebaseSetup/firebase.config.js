import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6KhUZI4gjXY0ZJl0LHLqMBh8GAH_mo-M",
  authDomain: "rider-express-86550.firebaseapp.com",
  projectId: "rider-express-86550",
  storageBucket: "rider-express-86550.appspot.com",
  messagingSenderId: "415421006563",
  appId: "1:415421006563:web:315e52b99f5662d62e3bd6",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
