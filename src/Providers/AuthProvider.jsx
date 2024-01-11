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
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [noteloading, setNoteLoading] = useState(true);
  const [handleToast, setToast] = useState(false);

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
    handleToast,
    setToast,
    noteloading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axiosSecure
          .post("/users", {
            email: currentUser.email,
            username: currentUser.displayName,
            profilePic: currentUser.photoURL,
          })
          //don't forget to import axios
          .then((res) => {
            console.log("token response", res.data);
            setNoteLoading(false);
          });
      } else {
        axiosSecure.post("/logout", loggedUser).then((res) => {
          console.log("from frontend", res.data);
          setNoteLoading(true);
        });
      }
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
