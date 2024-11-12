import React, { useContext } from 'react'; // Importing React and the useContext hook
import { UserContext } from './UserContext'; // Importing the UserContext to access the current user's data

const Header = () => {
    // Using the useContext hook to access the current username from UserContext
    const { username } = useContext(UserContext);

    return (
        <header className="header">
            {/* Displaying the main heading of the website */}
            <h1>Welcome to Caswell Surf</h1>
            
            {/* Conditionally render the logged-in username */}
            {username && (
                // If a username exists, display it with a personalized message
                <p className="header-username">Logged in as: {username}</p>
            )}
        </header>
    );
};

export default Header;
