import React, { useContext, useEffect, useState } from "react";
import './FreelancerCardsPresentation.css'
import { Navigate, useNavigate} from "react-router-dom";
import { PostJob, PostJobResponse } from "../../Interfaces/Post";

interface props {
    post: PostJobResponse
}

export const FreelancerCardsPresentation: React.FC<props> = ({post}) => {
    
    const navigate = useNavigate();

    return(
        <>
            <article className="cardContainer">

                <div className="topCard">

                    <div className="profileImage">
                        <img src="assets/images/UserBanner.png" />
                    </div>

                    <div className="information">
                        <h4>Aqui va el nombre {post.creatorUserId}</h4>
                        <small>@loki_cabreja04 <i className="fa-solid fa-star"></i> 3.8</small>

                        <h3>{post.title}</h3>

                        <p>
                            {post.description}
                        </p>

                        <span className="serviceInfo"><i className="fa-regular fa-clock"></i> USD${post.from} - USD${post.to}</span>
                    </div>
                    
                    <div className="cardControls">
                        <i className="fa-solid fa-share-nodes"></i>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                </div>

                <div className="botCardControls">
                    <button className="btn btnCard btnSave"><i className="fa-regular fa-bookmark"></i>Guardar</button>
                    <button className="btn btnCard btnAsk" onClick={()=>navigate(`/freelancer/apply?id=${post.id}`)}>Solicitar</button>
                </div>

            </article>
        </>
    )
}