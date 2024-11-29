import React, { useEffect, useState } from "react"
import './ViewJobOffer.css'
import { useLocation, useNavigate } from "react-router-dom"
import { initialOffer, Offer } from "../../Interfaces/JobOffer"

export const ViewJobOffer: React.FC = () => {
    
    const URL = "https://localhost:7014/api/v1/JobOffer/"
    const STATUS = "https://localhost:7014/api/v1/JobOffer/"

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const keyValue = queryParams.get('id')

    const [offer, setOffer] = useState<Offer>(initialOffer)
    const [jobOfferId, setJobOfferId] = useState<number>(0)

    const navigate = useNavigate()

    useEffect(()=>{
        fetchOffer()
        setJobOfferId(parseInt(keyValue ?? "0"))
    }, [])

    const fetchOffer = () => {
        fetch(URL + keyValue, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data.data)
            setOffer(data.data)
            
        })
        .catch((error) => console.error("Error: ", error))
    }

    const acceptOrDecline = ( status: string ) => {
        fetch(STATUS + keyValue, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                status: status,
                jobOfferId: jobOfferId
            }),
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            navigate("/alloffers")
        })
        .catch((error) => console.error("Error: ", error))
    }
    
    return(
            <>
                { offer && 
                    <section className="viewJobOfferContainer">
                        <div className="bannerViewOffer">
                            <h3>Oferta de trabajo</h3>
                            <p>De: <span>{offer.client.firstName}</span></p>
                        </div>

                        <h3 className="viewJobOfferHeaderTitle">Informacion de la publicacion</h3>

                        <article className="viewJobOfferDetails">

                            <div className="viewJobOfferInfo">

                                <div className="viewJobOfferTitle">
                                    <h3>{offer.title} <span>Diseño Web</span></h3>
                                    <small>11 noviembre 2024</small> 
                                </div>

                                <div className="viewJobOfferInfoBody">
                                    <p>
                                        {offer && offer.description}
                                    </p>
                                </div>

                                <div className="viewJobOfferInfoBottom">
                                    <h4>Habilidades</h4>
                                    <div className="viewJobOfferAbilities">
                                        {offer && offer.post.abilities.map((ability)=>(
                                            <div className="viewJobOfferInfoBottomAbility" key={ability.id}>
                                                <p>{ability.name}</p>
                                            </div>
                                        ))}
                                        

                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="jobOfferMoreDetails">
                            <div className="jobOfferMoreDetailsStep1 jobOfferMoreDetailsSteps">
                                <div className="jobOfferSphere">
                                    1
                                </div>
                                <div className="jobOfferMoreDetailsDate">
                                    <div className="jobOfferDate">
                                        <label htmlFor="">Fecha de inicio</label>
                                        {offer && offer.startDate}
                                    </div>

                                    <div className="jobOfferDate">
                                        <label htmlFor="">Fecha de finalizacion</label>
                                        {offer && offer.endDate}
                                    </div>
                                </div>
                            </div>

                            <div className="jobOfferMoreDetailsStep2 jobOfferMoreDetailsSteps">
                                <div className="jobOfferSphere">
                                    2
                                </div>
                                <div className="jobOfferMoreDetailsDate">
                                    <div className="jobOfferMoney">
                                        <label htmlFor="">Presupuesto</label>
                                        <p><i className="fa-light fa-coin-front"></i> {offer && offer.currency.iso3Code}${offer && offer.post.from} - {offer && offer.currency.iso3Code}${offer && offer.post.to}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="viewJobOfferControls">
                                <button className="btn viewJobOfferCancel" onClick={()=>acceptOrDecline("Declined")}>Cancelar</button>
                                <button className="btn viewJobOfferAccept" onClick={()=>acceptOrDecline("Accepted")}>Aceptar propuesta</button>
                            </div>
                        </div>


                    </section>
                }
            </>
    )
}