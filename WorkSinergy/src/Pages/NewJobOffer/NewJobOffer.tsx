import React, { useEffect, useState } from "react"
import './NewJobOffer.css'
import { DatePicker, Input, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { InitialOfferPost, OfferPost } from "../../Interfaces/JobOffer";
import { useUserContext } from "../../contexts/UserContextZustand";
import { initialPostJobResponse, PostJobResponse } from "../../Interfaces/Post";
import { Currency } from "../../Interfaces/Currency";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

export const NewJobOffer: React.FC = () => {
    
    const auth: any = useAuthUser()

    const URL = "https://localhost:7014/api/v1/JobOffer"
    const POST = `https://localhost:7014/api/v1/Post/GetByUser/${auth.id}`
    const CURRENCY = `https://localhost:7014/api/v1/Currency`
    const [jobOffer, setJobOffer] = useState<OfferPost>(InitialOfferPost)
    const [posts, setPosts] = useState<PostJobResponse[]>([])
    const [currencys, setCurrencys] = useState<Currency[]>([])
    
    const navigate = useNavigate()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const keyValue = queryParams.get('id') || ""
    let number = location.state || "";

    useEffect(() => {
        if(number == "")
        {
            // navigate("/")
            // console.log("hola")
        }
        setJobOffer({...jobOffer, clientUserId: auth.id, freelancerId: number, postId: parseInt(keyValue) | 0})
        getCurrency()
        // console.log(auth.id)
        console.log(location.state + " " + keyValue)
    }, [])


    useEffect(() => {
        console.log(jobOffer)
        // console.log(currencys)
    }, [jobOffer])

    useEffect(() => {
        if(jobOffer.contractOptionId == 1)
        {
            setJobOffer({...jobOffer, totalHours: 0})
        }
    }, [jobOffer.contractOptionId])

    const getPost = async () => {
        await fetch(POST, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            // console.log(data)
            if(data.data != null)
            {
                setPosts(data.data)
            }
            // navigate("/")
        })
        .catch((error) => console.error("Error: ", error))
    }

    const getCurrency = async () => {
        await fetch(CURRENCY, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            // console.log(data)
            if(data.data != null)
            {
                setCurrencys(data.data)
            }
            // navigate("/")
        })
        .catch((error) => console.error("Error: ", error))
    }
    
    const sendJobOffer = async () => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: JSON.stringify(jobOffer),
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            // navigate("/")
        })
        .catch((error) => console.error("Error: ", error))
    }

    return (
            <>
                <section className="newJobOfferContainer">
                    <div className="newJobOfferBanner">
                        <div className="newJobOfferBannerTitle">
                            <h3>Oferta de trabajo</h3>
                            <p>Sigue los siguientes pasos para hacer tu propuesta</p>
                        </div>
                        <i className="fa-regular fa-suitcase"></i>
                    </div>

                    <div className="newJobOfferPost">
                        <h3>Publicacion</h3>
                        <p>Elige el titulo de la publicacion a la que quieres enlazar esta propuesta</p>
                        <Select 
                            onClick={getPost} 
                            aria-required placeholder="Selecciona una publicacion..." 
                            style={{width: 500, height:40, marginRight:30}} 
                            onChange={(value) => setJobOffer({...jobOffer, postId: value})}
                            >
                            {
                                posts &&
                                    posts.map((post)=>{
                                        return(
                                            <Select.Option key={post.id}> {post.title} </Select.Option>
                                        )
                                    })

                            }
                        </Select>
                    </div>

                    <div className="newJobOfferPostInfoContainer">
                        <h3>Informacion de publicacion</h3>

                        <div className="newJobOfferPostInfo">
                            <h3>UX/UI para rediseño de una cafetería <span>Diseño Web</span></h3>
                            <small>11 Noviembre 2024</small>

                            <p>
                                Necesitamos una aplicación móvil para iOS y Android con funcionalidad de carrito de compras, integración de pagos y diseño de interfaz simple y moderno. La app debe ser compatible con actualizaciones futuras.

                                Create a responsive WordPress site that includes booking and payment functionalities.
                            </p>
                        </div>

                    </div>

                    <div className="newJobOfferPeriod">
                        
                        <h3>Plazo de entrega</h3>
                        
                        <div className="newJobOfferPeriodTitle">

                            <div className="newJobOfferStartDate newJobOfferDate">
                                <label htmlFor="">Fecha de inicio</label>
                                <DatePicker required picker="date" onChange={(value: Date)=>setJobOffer({...jobOffer, startDate: value})}/>
                            </div>

                            <div className="newJobOfferEndDate newJobOfferDate">
                                <label htmlFor="">Fecha de finalizacion</label>
                                <DatePicker required picker="date" onChange={(value: Date)=>setJobOffer({...jobOffer, endDate: value})}/>
                            </div>
                        </div>
                    </div>

                    <div className="newJobOfferBadge">
                        <h3>Presupuesto</h3>
                        <div className="newJobOfferPriceType">
                            <div className="newJobOfferPrice">
                                <label htmlFor="newJobPricePerHour" onClick={(e)=>setJobOffer({...jobOffer, contractOptionId: 2})}></label>
                                <i className="fa-regular fa-sack-dollar"></i>
                                <p>Precio por hora</p>
                                <input type="radio" name="payTerm" id="newJobPricePerHour" />
                            </div>

                            <div className="newJobOfferPrice">
                                <label htmlFor="newJobFixedPrice" onClick={(e)=>setJobOffer({...jobOffer, contractOptionId: 1})}></label>
                                <i className="fa-regular fa-clock"></i>
                                <p>Precio fijo</p>
                                <input type="radio" name="payTerm" id="newJobFixedPrice" />
                            </div>
                        </div>

                        <h3>Divisa</h3>
                        <div className="newJobOfferBudget">
                            <Select 
                                aria-required placeholder="Divisa" 
                                style={{width: 300, height:40, marginRight:30}}
                                defaultValue={null}
                                onChange={(value)=>setJobOffer({...jobOffer, currencyId: value})}
                                >
                                    {
                                        currencys &&
                                        currencys.map((currency)=>{
                                            return(
                                                <Select.Option key={currency.id} value={currency.id}> {currency.name} </Select.Option>
                                            )
                                        })
                                    }
                            </Select>
                        </div>

                        <h3>Horas totales</h3>
                        <div className="newJobOfferBudget">
                            <Input required disabled={jobOffer.contractOptionId == 1 ? true : false} placeholder="Ingresa las horas" style={{width: 300, height:40, marginRight:30}} onChange={(e) =>setJobOffer({...jobOffer, totalHours: parseInt(e.target.value)})}>
                                
                            </Input>
                        </div>

                        <h3>Especifica el monto</h3>
                        <div className="newJobOfferBudget">
                            <Input required placeholder="Monto" style={{width: 300, height:40, marginRight:30}} onChange={(e) =>setJobOffer({...jobOffer, hourlyRate: parseInt(e.target.value)})}>
                                
                            </Input>
                        </div>

                        <h3>Informacion</h3>
                        <div className="newJobOfferInformation">
                            <Input required placeholder="Titulo" style={{width: 300, height:40, marginRight:30}} onChange={(e) =>setJobOffer({...jobOffer, title: e.target.value})}>
                                
                            </Input>

                            <textarea required placeholder="Escribe una descripcion"  name="" id="" onChange={(e) =>setJobOffer({...jobOffer, description: e.target.value})}></textarea>
                        </div>

                    </div>

                    <div className="newJobOfferControls">
                        <button className="newJobOfferCancel btn" onClick={()=>navigate("/client/home")}>Cancelar</button>
                        <button className="newJobOfferAccept btn" onClick={()=>sendJobOffer()}>Enviar propuesta</button>
                    </div>
                    {/* onClick={(e)=>setPostNewJob({...postNewJob, contractOption: "FixedPrice"})} */}
                    

                </section>

            </>
    ) 
}


export default NewJobOffer;