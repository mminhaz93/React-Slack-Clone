import React, { createContext, useContext, useReducer } from "react";
import { auth } from "../firebase";
import reducer from "./reducer"

export const authContext = createContext();

export const AuthContextProvider = ({ reducer, initialState, children }) => (
  <AuthContextProvider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContextProvider>
);

export const useAuthStateValue = () => {
  useContext(authContext);
};
