import React, { useContext, useEffect } from "react";
import './FreelancerCardsPresentation.css'
import { Navigate, useNavigate} from "react-router-dom";
import { UserContext } from "../../contexts/UserProvider";

export const FreelancerCardsPresentation: React.FC = () => {

    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(UserContext)
    
    useEffect(()=>{
        if(usuario.if == null)
        {
            navigate("/login")
        }
    }, [])

    return(
        <>
            <article className="cardContainer">

                <div className="topCard">

                    <div className="profileImage">
                        <img src="assets/images/UserBanner.png" />
                    </div>

                    <div className="information">
                        <h4>Loki Cabreja</h4>
                        <small>@loki_cabreja04 <i className="fa-solid fa-star"></i> 3.8</small>

                        <h3>UI Designer Needed for Restaurant Application</h3>

                        <p>
                            We are seeking a skilled UI/UX Designer to create a landing page design 
                            for Platt & Co., an independent consultancy. The project is time-sensitive 
                            and must be completed within four hours (by 8 PM ET). The design should be 
                            based on the structure and style of the Home and About pages from this 
                            reference website: Interface EU Website: https://www.interface-eu.org/ 
                        </p>

                        <span className="serviceInfo"><i className="fa-regular fa-clock"></i> USD$25.00 - USD$50.00</span>
                    </div>
                    
                    <div className="cardControls">
                        <i className="fa-solid fa-share-nodes"></i>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                </div>

                <div className="botCardControls">
                    <button className="btn btnCard btnSave"><i className="fa-regular fa-bookmark"></i>Guardar</button>
                    <button className="btn btnCard btnAsk">Solicitar</button>
                </div>

            </article>
        </>
    )
}