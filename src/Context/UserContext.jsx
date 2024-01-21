import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.inti";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {

  const [user, setUser] = useState({});
  const [loading,setLoading] = useState(true)

  const createUser = (email, password) => {
          setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email,password) => {
          setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
          setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const verifyEmail =()=>{
          sendEmailVerification(auth.currentUser)
          .then(() => {
          alert('please check your email and verify the email')
          });
  }
  const resetPassword =(email)=>{
      return    sendPasswordResetEmail(auth,email)
 
  }
  const updateUserName =(name)=>{
         return updateProfile(auth.currentUser,{
                    displayName:name
          })
          
  }

  const LogOut = () => {
   signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      console.log("User Observing Running", currentUser);
    });
    return () => unsubscribe();
  }, []);
  const useInfo = {
    createUser,
    loginUser,
    googleLogin,
    user,
    LogOut,
    verifyEmail,
    resetPassword,
    updateUserName,
    loading,
   
  };

  return (
    <AuthContext.Provider value={useInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
