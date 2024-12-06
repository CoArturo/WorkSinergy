import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextZustand";
import { getCookie } from "./Cookie";

interface props {
    isAuth: boolean;
}


export const protectedRoutesComponent: React.FC<props> = ({isAuth = true}) => {

    useEffect(()=>{
        getCookie()
    },[])

    return isAuth == false ? <Outlet/> : <Navigate to={"/client/home"}/>
}

export default protectedRoutesComponent