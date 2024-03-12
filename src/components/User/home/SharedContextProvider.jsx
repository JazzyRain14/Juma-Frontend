import React, { createContext, useState } from 'react'
const SharedContext = createContext({
    isOpen: false,
    toggleOpen: () => { },
});
const SharedContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <SharedContext.Provider value={{ isOpen, toggleOpen }}>
            {children}
        </SharedContext.Provider>
    )
}

export { SharedContext, SharedContextProvider }