import React, { useEffect, useState } from "react"
import './NewProposal.css'
import { useLocation } from "react-router-dom"
import { initialPostJob, PostJob } from "../../Interfaces/Post"

export const NewProposal: React.FC = () => {

    const URL = "https://localhost:7014/api/v1/Post/"

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const keyValue = queryParams.get('id')

    const [postDetail, setPostDetail] = useState<PostJob>(initialPostJob)

    useEffect(()=>{
        fetchPostCards()
    }, [])

    useEffect(()=>{
        console.log(postDetail)
    }, [postDetail])

    const fetchPostCards = () => {
        fetch(URL + keyValue, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            
            // console.log(data.data)
            setPostDetail(data.data)
            
        })
        .catch((error) => console.error("Error: ", error))
    }

    return(
        <>
            <main className="newProposalContainer">
                <article className="proposalDetails">
                    <div className="proposalTitle">
                        <h3>Detalles del trabajo <i className="fa-regular fa-suitcase"></i></h3>
                        <hr />
                    </div>

                    <div className="proposalInfo">
                        <div className="proposalInfoTitle">
                            <h3>{postDetail && postDetail.title} <span>{postDetail && postDetail.abilities[0]}</span></h3>
                            <small>11 noviembre 2024</small> 
                        </div>

                        <div className="proposalInfoBody">
                            <p>
                                {postDetail && postDetail.description}
                            </p>
                        </div>

                        <div className="proposalInfoBottom">
                            <h4>Habilidades</h4>
                            <div className="proposalAbilities">
                                <div className="proposalInfoBottomAbility">
                                    <p>CSS3</p>
                                </div>

                                <div className="proposalInfoBottomAbility">
                                    <p>CSS4</p>
                                </div>

                                <div className="proposalInfoBottomAbility">
                                    <p>CSS5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="makeProposal">
                    <h3>Cuenta tu historia</h3>
                    <p>Antes de enviar tu solicitud, tómate un momento para contarnos por qué eres el freelancer ideal para este proyecto.</p>
                    <textarea placeholder="Escribre la descripcion"></textarea>
                    <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Le pondremos en contacto con candidatos especializados en la categoría seleccionada.</p>
                    <div className="makeProposalControls">
                        <button className="btn submitProposal">Enviar propuesta</button>
                        <button className="btn cancelProposal">Cancelar</button>
                    </div>
                </article>
            </main>
        </>
    )
}