import React, { useState } from "react";
import { Login } from "../../Components/Login/Login";
import { Input } from "../../Components/General/Inputs/Input";
import './MainIndex.css'
import { Freelancer } from "../Freelancer/Freelancer";
import { RegisterHome } from "../../Components/RegisterHome/RegisterHome";
import { ClientPostJob } from "../ClientPostJob/ClientPostJob";


export const MainIndex: React.FC = () => {
    

    return(
        <>
            <div className="loginContainer">
                {/* <RegisterHome /> */}
                {/* <Login /> */}
                {/* <Freelancer /> */}

                <ClientPostJob />
            </div>
        </>
    )
}