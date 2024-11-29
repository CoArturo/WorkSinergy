import React, { useEffect, useState } from "react";
import { Login } from "../Login/Login";
import { Input } from "../../Components/General/Inputs/Input";
import './MainIndex.css'
import { ClientPostJob } from "../ClientPostJob/ClientPostJob";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../Components/Navigation/Navbar/Navbar";
import { NewProposal } from "../NewProposal/NewProposal";
import { UserLogin } from "../../Interfaces/UserLogin";
import { useUserContext } from "../../contexts/UserContextZustand";
import { JobOffers } from "../JobOffers/JobOffers";
import { routes } from "../../Router/Routes";
import ProtectedRoutes from "../../Auth/ProtectedRoutes";

export const MainIndex: React.FC = () => {
    
    const [ user, setUser ] = useState<UserLogin>({input: "defaultcontractor@gmail.com", password: "123Pa$$word!"})

    const { userId, setUserContext } = useUserContext()
    const URL = "https://localhost:7014/api/Account/authenticate"

    useEffect(()=>{
        autenticarLogin()
    }, [])


    const autenticarLogin = async() => {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then(data => {
            setUserContext(data.id)
        })
        .catch((error) => console.error("Error: ", error))
    }

    return(
            <div className="mainContainer">
                    <BrowserRouter>
                        <Navbar />
                        <Routes>

                            <Route path="/login" element={<Login />} />
                            <Route element={<ProtectedRoutes/>}>
                                {routes.map((route)=>{
                                    return (
                                        <Route key={route.id} path={route.parent + route.path} element={<route.Component />}/>
                                    )
                                })}
                            </Route>

                            
                            {/* <Route path="freelancer/home" element={<Freelancer />} /> */}
                            {/* <Route path="/" element={<HomeClient />} /> */}
                            {/* <Route path="/offer" element={<ViewJobOffer />} />
                            <Route path="/" element={<Profile />} /> */}
                            {/* <Route path="/" element={<NewProposal/>} /> */}
                            <Route path="/" element={<NewProposal/>} />
                            <Route path="/postnewjob" element={<ClientPostJob />} />
                            <Route path="/alloffers" element={<JobOffers />} /> 

                            {/* <Route path="/register" element={<RegisterHome />} /> */}
                        </Routes>
                    </BrowserRouter>
            </div>
    )
}