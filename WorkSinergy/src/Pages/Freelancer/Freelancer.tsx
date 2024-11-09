import React from "react";
import './Freelancer.css'
import { FreelancerCardsPresentation } from "../../Components/FreelancerCards/FreelancerCardsPresentation";

export const Freelancer: React.FC = () => {

    return(
        <>
            <section className="cuadroBusquedaFreelancer">
                <div className="figuraFondo">
                    <div className="circulo1"></div>
                    <div className="circulo2"></div>
                </div>

                <p className="maintext textoBusqueda">
                    ¡Busca el trabajo que se adapte a tus <span>habilidades</span>!
                </p>

                <div className="support textoBusqueda">
                    <a href="#" className="supportText">
                        Empieza a explorar 
                    </a>

                    <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="barraBusqueda">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Buscar"/>
                </div>
            </section>

            <section className="cardsContainer">
                <FreelancerCardsPresentation />
                <FreelancerCardsPresentation />
                <FreelancerCardsPresentation />
                <FreelancerCardsPresentation />
            </section>
        </>
    )
}