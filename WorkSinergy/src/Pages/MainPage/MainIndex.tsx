import React, { useEffect, useState } from "react";
import { Login } from "../Login/Login";
import './MainIndex.css'
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import { NavbarFreelancer } from "../../Components/Navigation/Navbar/Navbar";

import { UserLogin } from "../../Interfaces/UserLogin";

import { routes } from "../../Router/Routes";

import { NavbarNoUser } from "../../Components/Navigation/Navbar/NavbarNoUser";
import { NavbarClient } from "../../Components/Navigation/Navbar/NavbarClient";
import createStore from "react-auth-kit/createStore";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { ContextAuth } from "../../Interfaces/ContextAuth";
import { useUserContext } from "../../contexts/UserContextZustand";
import { RegisterHome } from "../RegisterHome/RegisterHome";

export const store = createStore({
    authType:'cookie',
    authName:'_auth',
    cookieDomain: window.location.hostname,
    cookieSecure: false,
});

export const MainIndex: React.FC = () => {

    const {userRol, setUserRolContext} = useUserContext()

    const auth: any = useAuthUser()
    const [ user, setUser ] = useState<UserLogin>({input: "defaultcontractor@gmail.com", password: "123Pa$$word!"})
    const [ authNav, setAuthNav ] = useState<string>(userRol)
    // const [ user, setUser ] = useState<UserLogin>({input: "defaultapplicant@gmail.com", password: "123Pa$$word!"})
    const URL = "https://localhost:7014/api/Account/authenticate"


    useEffect(()=>{
        console.log(userRol)
        setAuthNav(auth?.rol)
    }, [userRol])

    return(
            <div className="mainContainer">
                    <BrowserRouter>
                        {   
                            authNav != "" &&
                            authNav == "Freelancer" ? <NavbarFreelancer /> 
                                : authNav == "Client" ? <NavbarClient />
                                : <NavbarNoUser />
                        }
                        <Routes>
                            <Route>
                            {routes.routes
                                // .filter(route =>  route.Component && route.parent == `/${auth?.rol?.toLowerCase()}`)
                                .filter(route =>  route.Component) 
                                .map((route) => (
                                    <Route
                                        key={route.id}
                                        path={route.parent + route.path}
                                        element={ 
                                            <RequireAuth fallbackPath={"/welcome/login"}>
                                                {<route.Component /> }
                                            </RequireAuth>
                                         }
                                         />
                                        ))}

                            </Route>
                            <Route path="/welcome/login" element={<Login />} />
                            <Route path="/welcome" element={<RegisterHome />} />
                        </Routes>
                    </BrowserRouter>
            </div>
    )
}