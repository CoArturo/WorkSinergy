import React, { useEffect, useState } from "react"
import './NewProposal.css'
import { useLocation, useNavigate, useNavigation } from "react-router-dom"
import { initialPostJob, initialPostJobResponse, PostJob, PostJobResponse } from "../../Interfaces/Post"
import { aplication, initialAplication } from "../../Interfaces/Aplication"
import { useUserContext } from "../../contexts/UserContextZustand"
import { Navigation } from "swiper/modules"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"

export const NewProposal: React.FC = () => {

    const URL = "https://localhost:7014/api/v1/Post/"
    const PROPOSAL = "https://localhost:7014/api/v1/JobApplciation"

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const keyValue = queryParams.get('id')

    const [postDetail, setPostDetail] = useState<PostJobResponse>(initialPostJobResponse)
    const [aplication, setAplication] = useState<aplication>(initialAplication)

    const auth: any = useAuthUser()

    const navigate = useNavigate()

    useEffect(()=>{
        setPage()
    }, [])

    useEffect(()=>{
        console.log(aplication)
    }, [aplication])

    useEffect(()=>{
        console.log(postDetail)
        setAplication({...aplication, postId:postDetail.id})
    }, [postDetail])

    const setPage = async () => {
        await fetchPostCards()
        setAplication({...aplication, applicantId:auth.id, postId:postDetail.id})
    }

    const fetchPostCards = async () => {
        await fetch(URL + keyValue, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            setPostDetail(data.data)
        })
        .catch((error) => console.error("Error: ", error))
    }

    const sendAplication = async () => {
        await fetch(PROPOSAL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(aplication),
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            navigate(`/${auth.rol.toLowerCase()}/home`)
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
                            <h3>{postDetail && postDetail.title} <span>{postDetail && postDetail.tags?.[0]?.name }</span></h3>
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
                            {postDetail && postDetail.abilities.map((ability)=>{
                                return (
                                    <div className="proposalInfoBottomAbility" key={ability.id}>
                                        <p>{ability.name}</p>
                                    </div>
                                )
                            })}

                            </div>
                        </div>
                    </div>
                </article>

                <article className="makeProposal">
                    <h3>Cuenta tu historia</h3>
                    <p>Antes de enviar tu solicitud, tómate un momento para contarnos por qué eres el freelancer ideal para este proyecto.</p>
                    <textarea onChange={(e)=>setAplication({...aplication, description: e.target.value})} placeholder="Escribre la descripcion"></textarea>
                    <p className="stepTip"><span><i className="fa-regular fa-lightbulb"></i> Tip:</span> Le pondremos en contacto con candidatos especializados en la categoría seleccionada.</p>
                    <div className="makeProposalControls">
                        <button className="btn submitProposal" onClick={()=>sendAplication()}>Enviar propuesta</button>
                        <button className="btn cancelProposal" onClick={()=>navigate("/freelancer/home")}>Cancelar</button>
                    </div>
                </article>
            </main>
        </>
    )
}