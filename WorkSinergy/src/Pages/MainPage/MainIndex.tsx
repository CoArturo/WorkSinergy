import React from "react";
import { Login } from "../../Components/Login/Login";
import './MainIndex.css'


export const MainIndex: React.FC = () => {

    return(
        <>
            <div className="loginContainer">
                <Login />
            </div>
        </>
    )
}