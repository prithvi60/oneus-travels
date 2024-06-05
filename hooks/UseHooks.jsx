"use client"
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <AppContext.Provider value={{ isInView, setIsInView }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
