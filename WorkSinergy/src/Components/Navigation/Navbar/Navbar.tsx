import React from "react";
import './Navbar.css'

export const Navbar: React.FC = () => {

    return(
        <>
            <nav className="generalNavbar">
                <ul className="navList">

                    <li className="navLogo">
                        <img src="assets/logos/logo-full.svg"/>
                    </li>

                    <li className="logoAlterno">
                        <img src="assets/logos/logo-lite.svg"/>
                    </li>
                    <li>Option</li>
                    <li>Option</li>
                    <li>Option</li>
                    <li>Log in</li>
                    <li className="btnSignNav">Sign Up</li>
                    
                </ul>
            </nav>
        </>
    )
}