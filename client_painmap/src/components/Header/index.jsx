import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';

import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  // Check if the current location is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <main>
      <header id="navigationMenu">
        <Link to="/">
          <img src="../../logo.png" className="nav-logo" alt="Logo" />
        </Link>
        <nav className='navbar'>
            <div className ="links">
          {user && !isHomePage && (
            <div className="userDisplay">
              <NavLink to="/">Home</NavLink>
              {!(user.user_id === "NHS@email.com") && (
                <>
                  <NavLink to="/select-gender">Articulate Your Pain</NavLink>
                  <NavLink to="/history">Medical History</NavLink>
                </>
              )}
              <NavLink to="/chat">Chat</NavLink>
              {user.user_id === "NHS@email.com" && (
                <NavLink to="/search">Search patients</NavLink>
              )}
            </div>
          )}
          {!user && !isHomePage && (
            <div className="userDisplay">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
          </div>
          {user && (
            <div className="userDisplay">
              <button className='logout-btn' onClick={handleClick}>Log out</button>
            </div>
          )}
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Header;