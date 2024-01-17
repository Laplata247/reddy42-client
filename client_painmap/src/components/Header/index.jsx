import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";
// import { Logo } from "../Logo";
import './style.css';

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";


const Header = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };
    return (
        <main>
            <header id='navigationMenu'>
            <Link to="/">
                <img src='../../logo.png' className='nav-logo'></img>
            </Link>
                <nav className='navbar'>
                    {user && (
                        <div className="userDisplay">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/select-gender">Articulate Your Pain</NavLink>
                            <NavLink to="/chat">Chat</NavLink>
                            <NavLink to="/history">Medical History</NavLink>
                            {/* <span>{user.user_id}</span> */}
                            {user.user_id =="NHS@email.com" && (
                                <div className="userDisplay">
                                    <Link to="/search">Search patients</Link>
                                </div>
                            )}
                        </div>
                    )}
                    {!user && (
                        <div className="userDisplay">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}

                </nav>
                {user && (
                    <div className="userDisplay">
                        <button className='logout-btn' onClick={handleClick}>Log out</button>
                    </div>
                )}
            </header>
            <Outlet />
        </main>
    )
}

export default Header
