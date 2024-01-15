import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'; 


const Header = () => {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/select-gender">Articulate Your Pain</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/history">Medical History</NavLink>
                </nav>
                <div id="google_translate_element"></div>
            </header>
            <Outlet />
        </main>
    )
}

export default Header
