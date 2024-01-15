import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'; 

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";


const Header = () => {

    const { logout } = useLogout();
    // const { user } = useAuthContext();
  
    const handleClick = () => {
      logout();
    };
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/select-gender">Articulate Your Pain</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/history">Medical History</NavLink>
                </nav>
                {/* <div id="google_translate_element"></div> */}
                <button onClick={handleClick}>Log out</button>
            </header>
            <Outlet />
        </main>
    )
}

export default Header
