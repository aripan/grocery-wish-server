import firebase from "firebase/app";
import { auth } from "./firebase.config";

// Catching the user
const updateUserInfo = (name, password) => {
  const user = auth.currentUser;

  user
    .updateProfile({
      displayName: name,
      password: password,
    })
    .then(() => {
      console.log("Name successfully updated");
    })
    .catch((error) => {
      console.log(error);
    });
};

// SignUp with Email and Password
export const createUserWithEmailAndPassword = (name, email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const { email } = res.user;
      updateUserInfo(name, password);
      const newUser = {
        isSignedIn: true,
        name: name,
        email: email,
        password: password,
        success: "User Successfully signed up",
        error: "",
      };

      return newUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUser = {
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        success: "",
        error: errorMessage,
      };
      return newUser;
    });
};

// SignIn with Email and Password
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email } = res.user;
      const newUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        password: password,
        success: "User Successfully signed in",
        error: "",
      };
      return newUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUser = {
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        success: "",
        error: errorMessage,
      };
      return newUser;
    });
};

// SignOut
export const SignOut = () => {
  return auth
    .signOut()
    .then(() => {
      const newUser = {};
      return newUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};

// Facebook SignIn
export const facebookSignInMethod = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return auth
    .signInWithPopup(facebookProvider)
    .then((result) => {
      const { displayName, email } = result.user;
      const newUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        success: "User Successfully signed in using facebook",
        error: "",
      };
      return newUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUser = {
        isSignedIn: false,
        name: "",
        email: "",
        success: "",
        error: errorMessage,
      };
      return newUser;
    });
};

// Google SignIn
export const googleSignInMethod = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email } = result.user;
      const newUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        success: "User Successfully signed in google",
        error: "",
      };
      return newUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUser = {
        isSignedIn: false,
        name: "",
        email: "",
        success: "",
        error: errorMessage,
      };
      return newUser;
    });
};
