import React, { createContext, useReducer } from "react";
import { INITIAL_STATE, appReducer } from "../Reducer/reducer";

export const appContext = createContext();

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const { copied } = state;

  const copyHandeler = (input) => dispatch({ type: "COPIED", payload: input });

  const value = { copied: copied, copyHandeler: copyHandeler };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};

export default AppContextProvider;
