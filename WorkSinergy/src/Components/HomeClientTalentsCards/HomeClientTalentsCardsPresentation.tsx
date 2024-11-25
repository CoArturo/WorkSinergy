import React from "react"
import './HomeClientTalentsCards.css'

interface props{
    
}


export const HomeClientTalentsCardsPresentation: React.FC = () => {

    return(
        <>
            <div className="talentContainerCard">
                <div className="talentCardProfile">
                    <div className="profileImg">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <h3>Julia Patiño Flore</h3>
                    <small>Diseñadora Grafica</small>
                </div>

                <div className="talentCardInfo">
                    <p><i className="fa-regular fa-star"></i>3.8</p>
                    <p><i className="fa-regular fa-suitcase"></i>100</p>
                </div>

                <div className="talentCardAbility">
                    <h5>Habilidades</h5>
                    <div className="abilitysContainer">
                        <div className="talentAbility">
                            <p>Diseño Web</p>
                            <p>Mockup</p>
                            <p>Figma</p>
                            <p>Diseño Web</p>
                        </div>
                    </div>
                </div>

                <div className="talentCardControl">
                    <button className="btn viewTalent">Ver perfil</button>
                    <button className="btn likeTalent"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </>
    )
}