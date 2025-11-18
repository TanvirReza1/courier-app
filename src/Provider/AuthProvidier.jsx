import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { auth } from "../FireBase/FireBase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvidier = ({ children }) => {
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    registerUser,
    logInUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvidier;
