import React from "react";
import './Navbar.css'
import { Outlet, Link, useNavigate} from "react-router-dom";
import { getCookie, removeCookie } from "../../../Auth/Cookie";
import { routes } from "../../../Router/Routes";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export const NavbarNoUser: React.FC = () => {

    const navigate = useNavigate();
    const signOut = useSignOut()

    const logOut = () => {
        signOut()
        navigate("/welcome/login")
    }

    return(
        <>
            <nav className="generalNavbar">
                <ul className="navList">

                    <li className="navLogo">
                            <img src="/assets/logos/logo-full.svg"/>
                    </li>
                </ul>
            </nav>
        </>
    )
}