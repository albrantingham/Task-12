// Importing necessary modules from React
import React, { createContext, useState } from 'react';

// Create a Context to hold user-related data
export const UserContext = createContext();

// UserProvider component that provides context value to its children
export const UserProvider = ({ children }) => {
    // Local state to store the username, initially set to an empty string
    const [username, setUsername] = useState('');

    return (
        // The UserContext.Provider makes the `username` and `setUsername` state
        // accessible to all children components that consume this context
        <UserContext.Provider value={{ username, setUsername }}>
            {/* Render the child components that will consume the context */}
            {children}
        </UserContext.Provider>
    );
};
