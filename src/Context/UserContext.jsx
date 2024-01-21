import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider)

   }

   /* varification Email */

   const verifyEmail = () => {

    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert('please check Your email and verify the address')
  });

   }

   const resetPassword = (email) => {
    return  sendPasswordResetEmail(auth, email)
    
   }
   
   const updateUserName = (name) =>{
    return updateProfile(auth.currentUser, {
        displayName:name,
    })
   
   
   }

    const logOut = () =>{
        signOut(auth).then(() =>{

        }).catct((error) =>{

        });
    }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        console.log('User Observing Running', currentUser);
    })
    return ()=> unsubscribe()
   }, [])

    const useInfo ={
        createUser,
        loginUser,
        googleLogin,
        user,
       logOut,
       verifyEmail,
       resetPassword,
       updateUserName
       
       



    }

   

    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;