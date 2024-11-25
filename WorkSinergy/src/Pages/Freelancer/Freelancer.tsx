import React from "react";
import './Freelancer.css'
import { FreelancerCardsPresentation } from "../../Components/FreelancerCards/FreelancerCardsPresentation";
import { FreelancerCardsContainer } from "../../Components/FreelancerCards/FreelancerCardsContainer";

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

                    <div className="cua1 cua"></div>
                    <div className="cua2 cua"></div>
                </div>
            </section>

            <section className="cardsContainer">
                <div className="sortFreelancer">
                    <span className="sortText">Filtrar por: </span>
                    <select defaultValue={1}>
                        <option value="1">
                            <span className="option">Nuevos</span>
                        </option>

                        <option value="1">
                            <span className="option">Nuevos</span>
                        </option>
                    </select>
                </div>

                <FreelancerCardsContainer />
                
            </section>
        </>
    )
}