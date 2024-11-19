import React from "react";
import './Navbar.css'
import { Outlet, Link, useNavigate} from "react-router-dom";
import { removeCookie } from "../../../Auth/Cookie";

export const Navbar: React.FC = () => {

    const navigate = useNavigate();

    return(
        <>
            <nav className="generalNavbar">
                <ul className="navList">

                    <li className="navLogo">
                        <Link className="navLinks" to="/freelancerhome">
                            <img src="assets/logos/logo-full.svg"/>
                        </Link>
                    </li>

                    <li className="logoAlterno">
                        <Link className="navLinks" to="/freelancerhome">
                            <img src="assets/logos/logo-lite.svg"/>
                        </Link>
                    </li>
                    <li><Link className="navLinks" to="/freelancerhome">Freelancer</Link></li>
                    <li><Link className="navLinks" to="/postnewjob">PostJobs</Link></li>
                    <li><Link className="navLinks" to="/freelancer">Jobs</Link></li>
                    <li className="navSignLink btn" onClick={()=>{navigate("/login")}}>Log-In</li>
                    <li className="navSignLink btn" onClick={()=>removeCookie}>Log Out</li>
                </ul>
            </nav>
        </>
    )
}