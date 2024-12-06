import React, { useEffect, useState } from "react";
import "./ViewProposal.css"
import { useLocation, useNavigate } from "react-router-dom";
import { PostJobResponse } from "../../Interfaces/Post";
import { applicationResponse } from "../../Interfaces/Aplication";

export const ViewProposal: React.FC = () =>{
    
    const URL = "https://localhost:7014/api/v1/Post/"

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const keyValue = queryParams.get('id')

    const navigate = useNavigate()

    const [ postDetail, setPostDetail ] = useState<PostJobResponse>()
    const [ applicationsList, setApplicationsList ] = useState<applicationResponse[]>([])

    const getPost = async() => {
        fetch(URL + keyValue, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setPostDetail(data.data)
        })
        .catch((error) => console.error("Error: ", error))
    }

    const getApplications = async() => {
        fetch("https://localhost:7014/api/v1/JobApplciation/GetByPost/" + keyValue, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setApplicationsList(data.data)
        })
        .catch((error) => console.error("Error: ", error))
    }

    useEffect(()=>{
        console.log(applicationsList)
    }, [applicationsList])

    

    useEffect(()=>{
        getPost()
        getApplications()
    }, [])
    
    return(
            <>
                <section className="viewProposalContainer">
                    <div className="viewProposalPostDetail">
                        <div className="viewProposalPostDetailTitle">
                            <p>{postDetail && postDetail.title} <span>{postDetail && postDetail.tags[0].name}</span></p>
                            <small>{postDetail && postDetail.createdAt}</small>
                        </div>

                        <div className="viewProposalPostDetailDescription">
                            <p>
                                {postDetail && postDetail.description}
                            </p>
                        </div>

                    </div>

                    <div className="viewProposalBody">
                        <div className="viewProposalProjectDetail">
                            <h3>Detalles del proyecto</h3>

                            <p>Presupuesto</p>
                            <p>{postDetail && postDetail.currency.iso3Code}${postDetail && postDetail.from} - {postDetail && postDetail.currency.iso3Code}${postDetail && postDetail.to}</p>

                            <p>Habilidades</p>
                            <ul>
                                {
                                    postDetail && postDetail.abilities.map((ability) =>{
                                        return(
                                                <li>{postDetail && ability.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="viewProposalApplicants">

                            {
                                applicationsList && 
                                    applicationsList.map((application) =>{
                                        return(
                                            <div className="viewProposalAplicantCard">

                                                <div className="viewProposalAplicantTitle">
                                                    <p>{applicationsList && application.user.abilities?.[0]?.name}</p>

                                                    <div className="viewProposalAplicantAbilities">

                                                        {applicationsList && application.user.abilities?.map((ability)=>{
                                                            return(
                                                                <div className="viewProposalAplicantAbility">
                                                                    <p>{ability.name}</p>
                                                                </div>
                                                            )
                                                        })}
                                                        
                                                    </div>

                                                    <p>
                                                        {applicationsList && application.description}
                                                    </p>


                                                    <div className="viewProposalAplicantControls">
                                                        <button className="btn" onClick={()=>navigate("/profile", {state: applicationsList && application.user.id})}>Ver perffil</button>
                                                        <button className="btn" onClick={()=>navigate(`/client/newjoboffer`, {state: applicationsList && application.user.id.toString()})}>Enviar oferta</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }

                        </div>
                    </div>


                </section>
            </>
    )   
}