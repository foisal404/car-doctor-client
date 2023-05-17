import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext()


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const signUPWithGoogle=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signUp=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth,currenUser=>{
            setUser(currenUser)
            setLoader(false)
        })
        return (()=>{
            unsubscribed()
        })
    },[])

    const value={
        signUPWithGoogle,
        user,
        loader,
        signUp,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;