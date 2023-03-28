import React, { createContext, useReducer, useEffect } from "react";
import { INITIAL_STATE, appReducer } from "../Reducer/reducer";
import {
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

  const { message, curruntUser, sidebar, barClasses } = state;

  const messageHandeler = (input) =>
    dispatch({ type: "MESSAGE", payload: input });

  const sidebarHandeler = (value) =>
    dispatch({ type: "SIDEBAR", payload: value });

  const barClassesHandeler = (input) =>
    dispatch({ type: "BAR-CLASSES", payload: input });

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
      messageHandeler({ value: `${error.code}`, status: "error" });
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const signOutGoogle = async () => {
    try {
      messageHandeler({ status: "loading", value: "Logging out" });
      const signout = await signOut(auth);
      Cookies.remove("isLoggedIn");
      localStorage.setItem("ifUser", "false");
      messageHandeler({ status: "success", value: "Logged out" });
    } catch (error) {
      messageHandeler({ status: "error", value: `${error.code}` });
      return;
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch({ type: "USER", payload: user });
        localStorage.setItem("ifUser", "true");
      } else {
        dispatch({ type: "USER", payload: "" });
        console.log("NO-USER");
        localStorage.setItem("ifUser", "false");
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (curruntUser) {
      if (localStorage.getItem("ifUser") === "true") {
        const name = curruntUser.displayName.split(" ")[0];

        messageHandeler({
          status: "success",
          value: `Hey, ${name}. Great to see you,`,
        });
      }
    }
  }, [curruntUser]);

  const value = {
    message: message,
    messageHandeler: messageHandeler,
    signinWithGoogle: signinWithGoogle,
    curruntUser: curruntUser,
    signOutGoogle: signOutGoogle,
    sidebar,
    sidebarHandeler,
    barClassesHandeler,
    barClasses,
  };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContextProvider;
