import React, { useEffect, useState } from "react";
import './JobOffers.css'
import { useLocation, useNavigate } from "react-router-dom";
import { Offer } from "../../Interfaces/JobOffer";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

export const JobOffers: React.FC = () => {
    

    const URL = 'https://localhost:7014/api/v1/JobOffer/GetByFreelancer/'

    const [offers, setOffers] = useState<Offer[]>([])

    const navigate = useNavigate()
    const auth: any = useAuthUser()

    useEffect(()=>{
        fetchPostNewJob()
        console.log(auth)
    }, [])

    useEffect(()=>{
        console.log(offers)
    }, [offers])

    const fetchPostNewJob = () => {
        fetch(URL + auth.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            if(data.data != null)
            {
                setOffers(data.data)
            }
            
        })
        .catch((error) => console.error("Error: ", error))
    }
    
    return(
            <>
                <section className="jobOffersContainer">
                    <h3 className="jobOfferHeaderTitle">Ofertas de trabajo <span>{offers.length}</span></h3>

                    {offers &&
                        offers.map((offer)=>{
                            return(
                                <div className="jobOffer" key={offer.id}>
                                    <div className="jobOfferHeader">
                                        <i className="fa-solid fa-user"></i> <p>{offer.client.firstName}</p>
                                    </div>

                                    <h3 className="jobOfferTitle">{offer && offer.post.title}</h3>

                                    <p className="jobOfferDescription">
                                        {offer && offer.post.description}
                                    </p>

                                    <div className="jobOfferAbilities">
                                        {offer && offer.post.abilities.map((ability)=>(
                                            <div className="jobOfferAbility" key={ability.id}>
                                                <p>{ability.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="jobOfferDetails">
                                        <div className="jobOfferDetail">
                                            <label htmlFor="">Fecha de inicio</label>
                                            <p>{offer.startDate}</p>
                                        </div>

                                        <div className="jobOfferDetail">
                                            <label htmlFor="">Fecha de finalizacion</label>
                                            <p>{offer.endDate}</p>
                                        </div>

                                        <div className="jobOfferDetail">
                                            <label htmlFor="">Presupuesto</label>
                                            <p><i className="fa-light fa-coin-front"></i> {offer.currency.iso3Code}${offer.post.from} - {offer.currency.iso3Code}${offer.post.from}</p>
                                        </div>

                                    </div>
                                    
                                    <div className="jobOfferAction">
                                        <button className="btn" onClick={()=>navigate(`/freelancer/viewoffer?id=${offer.id}`)}>Ver propuesta</button>
                                    </div>
                                </div>
                            )
                        })

                    }

                    
                </section>
            </>
    )
}