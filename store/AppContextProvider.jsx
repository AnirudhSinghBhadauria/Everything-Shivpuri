import React, { createContext, useReducer, useEffect } from "react";
import { INITIAL_STATE, appReducer } from "../Reducer/reducer";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

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
      messageHandeler({ status: "success", value: "Successfully Logged" });
    } catch (error) {
      messageHandeler({ value: `${error.message}`, status: "error" });
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch({ type: "USER", curruntUser: user });
      } else {
        console.log("NO-USER");
      }
    });

    return () => unsub();
  }, []);

  const value = {
    message: message,
    messageHandeler: messageHandeler,
    signinWithGoogle: signinWithGoogle,
  };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContextProvider;
