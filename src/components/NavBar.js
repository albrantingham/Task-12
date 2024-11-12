import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const NavBar = ({ username }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation(); // Get the current location for active link styling

  // Toggle the mobile navbar when the hamburger button is clicked
  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  // Close the navbar when the screen is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setNavbarOpen(false); // Close navbar on resize for desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavbarOpen && !event.target.closest('.navbar-content')) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavbarOpen]);

  // Function to check if the link is active
  const isActiveLink = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="fixed-banner navbar">
      <div className="navbar-content container d-flex align-items-center justify-content-between">
        {/* Title */}
        <h1 className="banner-title">Caswell Surf</h1>

        {/* Desktop Links */}
        <div className="d-none d-lg-flex">
          <Link to="/" className={`nav-link ${isActiveLink('/')}`}>HOME</Link>
          <Link to="/shop" className={`nav-link ${isActiveLink('/shop')}`}>SHOP</Link>
          <Link to="/cart" className={`nav-link ${isActiveLink('/cart')}`}>CART</Link>
          <Link to="/registration" className={`nav-link ${isActiveLink('/registration')}`}>REGISTRATION</Link>
          {username ? (
            <span className="nav-link username-display">Welcome, {username}!</span>
          ) : (
            <Link to="/login" className={`nav-link ${isActiveLink('/login')}`}>LOGIN</Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-button d-lg-none"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Mobile Links */}
      {isNavbarOpen && (
        <div className="sidebar d-lg-none">
          <Link to="/" className={`nav-link ${isActiveLink('/')}`} onClick={toggleNavbar}>HOME</Link>
          <Link to="/shop" className={`nav-link ${isActiveLink('/shop')}`} onClick={toggleNavbar}>SHOP</Link>
          <Link to="/cart" className={`nav-link ${isActiveLink('/cart')}`} onClick={toggleNavbar}>CART</Link>
          <Link to="/registration" className={`nav-link ${isActiveLink('/registration')}`} onClick={toggleNavbar}>REGISTRATION</Link>
          {username ? (
            <span className="nav-link username-display" onClick={toggleNavbar}>Welcome, {username}</span>
          ) : (
            <Link to="/login" className={`nav-link ${isActiveLink('/login')}`} onClick={toggleNavbar}>LOGIN</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
