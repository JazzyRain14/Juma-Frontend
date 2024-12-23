import React, { createContext, useState } from "react";

export const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <SharedContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </SharedContext.Provider>
  );
};
