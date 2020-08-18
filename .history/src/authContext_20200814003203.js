import React, { createContext, useContext, useReducer } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ reducer, initialState, children }) => (
  <AuthContextProvider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContextProvider>
);
