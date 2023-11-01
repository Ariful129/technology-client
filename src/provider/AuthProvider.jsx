import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'


export const AuthContex = createContext(null);
const auth = getAuth(app);

//google dia login
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  

    //For Register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Current state find
    useEffect(() => {
        const unScribe = onAuthStateChanged(auth, currentUser => {
            console.log('rakib-User-Current', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unScribe();
        }
    }, [])
    

    //Login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //SigIn with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //Transfer data all
    const authInfo = { user, createUser,loading,signIn,logOut,signInWithGoogle}


    return (
     <AuthContex.Provider value={authInfo}>
        {children}
    </AuthContex.Provider>
    );
};

export default AuthProvider;