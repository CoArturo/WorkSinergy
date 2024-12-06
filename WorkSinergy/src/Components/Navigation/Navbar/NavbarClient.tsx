import React from "react";
import './Navbar.css'
import { Outlet, Link, useNavigate} from "react-router-dom";
import { removeCookie } from "../../../Auth/Cookie";
import { routes } from "../../../Router/Routes";
import { useUserContext } from "../../../contexts/UserContextZustand";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export const NavbarClient: React.FC = () => {

    const navigate = useNavigate();
    const signOut = useSignOut()
    const {userRol, setUserRolContext} = useUserContext()


    const logOut = () => {
        signOut()
        navigate("/welcome/login")
        setUserRolContext("")
    }

    return(
        <>
            <nav className="generalNavbar">
                <ul className="navList">

                    <li className="navLogo">
                        <Link className="navLinks" to="/client/home">
                            <img src="/assets/logos/logo-full.svg"/>
                        </Link>
                    </li>

                    <li className="logoAlterno">
                        <Link className="navLinks" to="/client/home">
                            <img src="/assets/logos/logo-lite.svg"/>
                        </Link>
                    </li>
                    {
                        routes && 
                        routes.routes
                        .filter((route) => route.isRender && route.parent == "/client")
                        .map((route)=>{
                            return(
                                <li key={route.id}><Link className="navLinks" to={route.parent + route.path}>{route.name}</Link></li>
                            )
                        })
                    }
                    {/* <li><Link className="navLinks" to="freelancer/home">Home</Link></li>
                    <li><Link className="navLinks" to="/postnewjob">PostJobs</Link></li>
                    <li><Link className="navLinks" to="/freelancerhome">Jobs</Link></li>
                    <li><Link className="navLinks" to="/alloffers">Offers</Link></li> */}
                    <li className="navSignLink btn" onClick={()=>logOut()}>Log Out</li>
                </ul>
            </nav>
        </>
    )
}