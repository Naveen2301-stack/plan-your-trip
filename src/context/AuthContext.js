import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user] = useState({});
  // const [loggedIn, setLoggedIn] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const addData = async (auth, email, name) => {

    setDoc(doc(db, "users", auth.currentUser.uid), {

      uid: auth.currentUser.uid,

      name: name,

      email: email,

      createdAt: Timestamp.fromDate(new Date()),

    });

  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  
  return (
    <UserContext.Provider value={{ createUser, login, logout, user,addData }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
