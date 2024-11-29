import React from "react";
import './Navbar.css'
import { Outlet, Link, useNavigate} from "react-router-dom";
import { removeCookie } from "../../../Auth/Cookie";
import { routes } from "../../../Router/Routes";

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
                    {
                        routes && 
                        routes
                        .filter((route) => route.isRender)
                        .map((route)=>{
                            return(
                                <li><Link className="navLinks" to={route.parent + route.path}>{route.name}</Link></li>
                            )
                        })
                    }
                    {/* <li><Link className="navLinks" to="freelancer/home">Home</Link></li>
                    <li><Link className="navLinks" to="/postnewjob">PostJobs</Link></li>
                    <li><Link className="navLinks" to="/freelancerhome">Jobs</Link></li>
                    <li><Link className="navLinks" to="/alloffers">Offers</Link></li> */}
                    <li className="navSignLink btn" onClick={()=>{navigate("/login")}}>Log-In</li>
                    <li className="navSignLink btn" onClick={()=>removeCookie}>Log Out</li>
                </ul>
            </nav>
        </>
    )
}