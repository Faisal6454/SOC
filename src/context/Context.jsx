//Context.js
import React, { createContext, useContext } from "react";

const Context = createContext();

export const useDataContext = () => {
  return useContext(Context);
};

export const DataProvider = ({ children }) => {
  return <Context.Provider value={{}}>
          {children}
         </Context.Provider>;
};
