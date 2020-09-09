import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //preparing the data layout

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allow us to pull information from data layout
export const useStateValue = () => useContext(StateContext);
