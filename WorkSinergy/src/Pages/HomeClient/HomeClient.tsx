import React, { useEffect, useState } from "react"
import './HomeClient.css'
import { HomeClientCardPresentation } from "../../Components/HomeClientWorkCards/HomeClientCardPresentation"
import { HomeClientTalentsCardsPresentation } from "../../Components/HomeClientTalentsCards/HomeClientTalentsCardsPresentation"
import { useUserContext } from "../../contexts/UserContextZustand"

export const HomeClient: React.FC = () => {

    const { userContext, setUserContext } = useUserContext()


    const prueba = () => {
        console.log(userContext)
    }
   
    return(
        <>
            <main className="homeClientContainer">
                <section className="homeClientBanner">
                    <div className="homeClientElements">
                        <h2>Transforma tus ideas en realidad con los <span>Mejores Freelancers</span></h2>
                        <small>Desde diseño hasta desarrollo web, encuentra al freelancer ideal para hacer realidad tus ideas.</small>
                    </div>
                </section>

                <div className="workHeader">
                    <h2>¡Bienvenido de nuevo, <span>Usuario</span>!</h2>
                    <small>Encuentre al profesional adecuado para hacer realidad tus ideas</small>
                </div>


                <article className="titleWorks">
                    <h2>Tus trabajos | <a href="#">Ver todos los trabajos <i className="fa-light fa-arrow-right"></i></a></h2>
                    <button className="btn" onClick={prueba}><i className="fa-regular fa-plus"></i>Publica un trabajo</button>
                </article>

                <article className="workType">
                    <HomeClientCardPresentation />
                    {/* <HomeClientCardPresentation />
                    <HomeClientCardPresentation /> */}
                </article>

                <div className="talentHeader">
                    <h2>Explorar talentos | <a href="#">Buscar freelancers <i className="fa-light fa-arrow-right"></i></a></h2>
                </div>

                <article className="workType">
                    <HomeClientTalentsCardsPresentation />
                </article>

                <br />
                <br />
                <br />
                <br />
            </main>
        </>
    )
}