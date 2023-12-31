import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);


       // Register with email and password //
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe()
        }
    },[])
// ------------------------------------------------------------------ //

// Login with email and password //

    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In with Google  //
    const signInWithGoogle   = () => {
        return signInWithPopup(auth, new GoogleAuthProvider());
    };

    // Log out //

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        signInWithGoogle,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;