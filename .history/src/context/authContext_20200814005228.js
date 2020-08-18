import React, { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ reducer, initialState, children }) => (
  <AuthContextProvider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContextProvider>
);

export const useAuthStateValue = () => {
  useContext(AuthContext);
};
