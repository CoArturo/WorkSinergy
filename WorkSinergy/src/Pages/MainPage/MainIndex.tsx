import React from "react";
import { Login } from "../../Components/Login/Login";
import './MainIndex.css'
import { Freelancer } from "../Freelancer/Freelancer";


export const MainIndex: React.FC = () => {

    return(
        <>
            <div className="loginContainer">
                {/* <Login /> */}
                <Freelancer />
            </div>
        </>
    )
}