import React from "react"
import './HomeClientCard.css'

interface props{
    
}


export const HomeClientCardPresentation: React.FC = () => {

    return(
        <>
            <div className="workCard">
                <div className="titleWorkCard">
                    <p>Diseño de Identidad Corporativa para Empresa</p>
                </div>

                <button className="btn">Revisar propuesta</button>
            </div>
        </>
    )
}