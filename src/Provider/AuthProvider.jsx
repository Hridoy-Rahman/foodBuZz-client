import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider()

    const registerUser = (email, password, photo, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signInWithGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const getUser = () => {
        const user = auth.currentUser;
        console.log(user);
        return user;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        registerUser,
        login,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        getUser,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
