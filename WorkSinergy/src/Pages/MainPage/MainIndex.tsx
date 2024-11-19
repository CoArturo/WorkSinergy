import React, { useState } from "react";
import { Login } from "../Login/Login";
import { Input } from "../../Components/General/Inputs/Input";
import './MainIndex.css'
import { Freelancer } from "../Freelancer/Freelancer";
import { RegisterHome } from "../RegisterHome/RegisterHome";
import { ClientPostJob } from "../ClientPostJob/ClientPostJob";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navigation/Navbar/Navbar";
import { UserProvider } from "../../contexts/UserProvider";

export const MainIndex: React.FC = () => {
    

    return(
        <UserProvider>
            <div className="mainContainer">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/freelancerhome" element={<Freelancer />} />
                        <Route path="/postnewjob" element={<ClientPostJob />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegisterHome />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </UserProvider>
        
    )
}