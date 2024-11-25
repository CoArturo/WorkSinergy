import React, { useState } from "react"
import './NewProposal.css'

export const NewProposal: React.FC = () => {

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
                            <h3>UX/UI para rediseño de una cafeteria <span>Diseño Web</span></h3>
                            <small>11 noviembre 2024</small> 
                        </div>

                        <div className="proposalInfoBody">
                            <p>
                                Necesitamos una aplicación móvil para iOS y Android con funcionalidad de carrito de compras, integración de pagos y diseño de interfaz simple y moderno. La app debe ser compatible con actualizaciones futuras.

                                Create a responsive WordPress site that includes booking and payment functionalities.
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
            </main>
        </>
    )
}