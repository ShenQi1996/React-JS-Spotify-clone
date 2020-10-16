//create the data layer we need for our app

import React, { useContext, createContext, useReducer } from "react";

// prepare the data layer
export const DataLayerContext = createContext();

// create the data layer we need
export const DataLayer = ({ initialState, reducer, children /**<- App */ }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// This is where we can call it and get the info in the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
