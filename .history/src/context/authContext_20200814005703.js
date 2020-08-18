import React, { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ reducer, initialState, children }) => (
  <AuthContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AuthContext.Provider>
);

export const useAuthStateValue = () => {
  useContext(AuthContext);
};
