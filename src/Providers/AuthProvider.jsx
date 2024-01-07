import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const linkon = true;

  // sign up
  const handleCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const handleUpdateProfile = (e) => updateProfile(auth.currentUser, e);

  // sign in
  const handleSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const provider = new GoogleAuthProvider();

  const handleGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sign out
  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    auth,
    provider,
    handleCreateUserWithEmailAndPassword,
    handleUpdateProfile,
    handleSignInWithEmailAndPassword,
    handleGoogleUser,
    handleSignOut,
    linkon
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
