import React, { createContext, useReducer } from "react";
import { INITIAL_STATE, appReducer } from "../Reducer/reducer";

export const appContext = createContext();

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const { message } = state;

  const messageHandeler = (input) => dispatch({ type: "MESSAGE", payload: input });

  const value = { message: message, messageHandeler: messageHandeler };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContextProvider;
