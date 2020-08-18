import React, { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ reducer, initialState, children }) => (
  <AuthContextProvider.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContextProvider.Provider>
);

export const useAuthStateValue = () => {
  useContext(AuthContext);
};
