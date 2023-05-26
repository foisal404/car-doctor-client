import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    const updateUser=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:`${name}`
        })
    }
    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth,currenUser=>{
            setUser(currenUser)
            console.log(currenUser.email);
            setLoader(false)
            if(currenUser && currenUser.email){
                const loggedUser={email:currenUser.email}
                fetch('http://localhost:5000/jwt',{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log("jwt response",data);
              localStorage.setItem("Car_Access_Token",data.token)
            })
            }
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
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;