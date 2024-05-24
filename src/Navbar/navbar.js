import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogOut = () => {


    // Remove current session data, but keep user data
    localStorage.removeItem("currentSession");
    setUsername("");

  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentSession"));
    if (currentUser && currentUser.firstName) {
      setUsername(currentUser.firstName);
    }

    const handleStorageChange = () => {
      navigate(0);
      const updatedUser = JSON.parse(localStorage.getItem("currentSession"));
      setUsername(updatedUser ? updatedUser.firstName : "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link className="navbar-logo" to="/">
            RentEasy
          </Link>
          <Link className="navbar-button" to="/cars">
            Cars
          </Link>
          <Link className="navbar-button" to="/bikes">
            Bikes
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/about" className="navbar-button">
            About us
          </Link>
          {!username ? (
            <>
              <Link to="/login" className="navbar-button">
                Login
              </Link>
              <Link to="/signup" className="navbar-button">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <button className="navbar-button">{username}</button>
              <button className="navbar-button" onClick={handleLogOut}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
