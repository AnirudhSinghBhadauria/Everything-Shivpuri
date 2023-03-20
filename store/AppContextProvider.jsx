import React, { createContext, useReducer, useEffect } from "react";
import { INITIAL_STATE, appReducer } from "../Reducer/reducer";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import Cookies from "js-cookie";

export const appContext = createContext();

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const { message, curruntUser } = state;

  const messageHandeler = (input) =>
    dispatch({ type: "MESSAGE", payload: input });

  const signinWithGoogle = async () => {
    try {
      messageHandeler({ status: "loading", value: "Signing in..." });
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential.accessToken;
      const user = response.user;
      Cookies.set("isLoggedIn", true);
      messageHandeler({ status: "success", value: "Successfully Logged" });
    } catch (error) {
      messageHandeler({ value: `${error.message}`, status: "error" });
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const signOutGoogle = async () => {
    try {
      messageHandeler({ status: "loading", value: "Logging out" });
      const signout = await signOut(auth);
      Cookies.remove("isLoggedIn");
      messageHandeler({ status: "success", value: "Logged out" });
    } catch (error) {
      messageHandeler({ status: "error", value: `${error.message}` });
      return;
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch({ type: "USER", payload: user });
        console.log(user);
      } else {
        dispatch({ type: "USER", payload: "" });
        console.log("NO-USER");
      }
    });

    return () => unsub();
  }, []);

  const value = {
    message: message,
    messageHandeler: messageHandeler,
    signinWithGoogle: signinWithGoogle,
    curruntUser: curruntUser,
    signOutGoogle: signOutGoogle,
  };

  if (curruntUser) {
    console.log(curruntUser.uid);
  } else {
    console.log("NO USER");
  }

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContextProvider;
