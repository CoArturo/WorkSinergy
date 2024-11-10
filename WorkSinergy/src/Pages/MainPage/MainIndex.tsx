import React from "react";
import { Login } from "../../Components/Login/Login";
import './MainIndex.css'
import { Freelancer } from "../Freelancer/Freelancer";
import { RegisterHome } from "../../Components/RegisterHome/RegisterHome";


export const MainIndex: React.FC = () => {

    return(
        <>
            <div className="loginContainer">
                {/* <RegisterHome /> */}
                <Login />
                {/* <Freelancer /> */}
            </div>
        </>
    )
}