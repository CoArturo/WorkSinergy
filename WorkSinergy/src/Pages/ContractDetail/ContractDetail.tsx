import React, { useEffect, useState } from "react";
import './ContractDetail.css'
import { Button, Input, Progress } from "antd";
import { Contract, initialContract } from "../../Interfaces/Contract";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useLocation } from "react-router-dom";

export const ContractDetail: React.FC = () => {

    const milestone = new FormData();
    const auth: any = useAuthUser()
    const FILE = 'http://localhost:5013/api/v1/Contract/'
    const URL =`https://localhost:7014/api/v1/Contract/`
    const PAY ="https://localhost:7014/api/v1/Contract/PayContract?id="

    const [contract, setContract] = useState<Contract>(initialContract)
    const [porcentage, setPorcentage] = useState<number>(0)
    const [hours, setHours] = useState<string>("")
    const [payAmount, setPayAmount] = useState({contractId: contract.id, amount: 0})
    const [selectedFile, setSelectedFile] = useState<Blob | null>();
    const [contractOption, setContractOption] = useState<string>("");

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const keyValue = queryParams.get('id') || ""

    

    const fetchContract = () => {
        fetch(URL + `${keyValue}?role=${auth.rol}`, {
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
                setContract(data.data)
            }
            
        })
        .catch((error) => console.error("Error: ", error))
    }

    const payWork = () => {
        fetch(PAY + contract.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(payAmount)
        })
        .then((response) => response.json())
        .then(data => {
            if(data.succeeded)
            {
                fetchContract()
            }
            
        })
        .catch((error) => console.error("Error: ", error))
    }

    const sendEntregable = () => {
        fetch(FILE + contractOption, {
            method: 'POST',
            body: milestone
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error.error);
        });
    }

    useEffect(()=>{
        fetchContract()
    }, [])

    useEffect(()=>{
        setPorcentage(Math.round((contract.currentPayment/contract.totalPayment) * 100 * 100)/100)
        setPayAmount({...payAmount, contractId: contract.id})

        if(contract.contractOption?.id == 1)
        {
            setContractOption("FixedPriceMilestone")
        }
        else
        {
            setContractOption("HourlyMilestone")
        }

    }, [contract])

    useEffect(()=>{
        if(contract.contractOption?.id == 1)
        {
            milestone.append('contractId', contract.id.toString())
            milestone.append('milestoneId', contract && contract.fixedPriceMilestones != null ? contract.hourlyMilestones[0]?.id.toString() : "")
            milestone.append('deliverable', selectedFile ?? "" );
            console.log('contractId:', contract.id);
            console.log('milestoneId:', contract.fixedPriceMilestones != null ? contract.fixedPriceMilestones[0]?.id : "");
            console.log('deliverable:', selectedFile);
        }
        else
        {
            milestone.append('milestoneId',contract && contract.hourlyMilestones != null ? contract.hourlyMilestones[0]?.id.toString() : "")
            milestone.append('contractId',contract.id.toString())
            milestone.append('deliverable', selectedFile ?? "");
            milestone.append('workedHours',hours.toString())
            console.log('milestoneId:', contract && contract.hourlyMilestones != null ? contract.hourlyMilestones[0]?.id : "");
            console.log('contractId:', contract.id);
            console.log('deliverable:', selectedFile);
            console.log('workedHours:', hours);

        }
        setPorcentage(Math.round((contract.currentPayment/contract.totalPayment) * 100 * 100)/100)
        setPayAmount({...payAmount, contractId: contract.id})
    }, [contract, hours])

    return(
        <>
            <div className="contractContainer">
                <div className="contractBanner">
                    <div className="contractBannerTitle">
                        <h2>Contrato</h2>
                        <p>Protege tu trabajo con un contrato</p>
                    </div>

                    <div className="contractBannerLogo">
                        <img src="/assets/logos/logo-lite.svg" />
                    </div>
                </div>

                <article className="postContractDetail">
                    <h2 className="postContractDetailTitle">
                        Informacion del Proyecto
                    </h2>

                    <h4 className="postContractDetailSubtitle">
                        Titulo del proyecto: <span>{contract && contract.title}</span>
                    </h4>

                    <p className="postContractDetailDescription">
                        <span>Descripcion del proyecto:</span> {contract && contract.description}
                    </p>

                    <h3 className="applicantContractInfo">Datos del cliente</h3>
                    <h3 className="applicantContractInfo">Cliente: <span>{auth && auth.name}</span></h3>
                    <h3 className="applicantContractInfo">Freelancer: <span>{contract && contract.freelancer?.firstName}</span></h3>

                    <div className="contractDetailInfo">
                        <div className="contractDates contractDetailInfoChild">
                            <h3><i className="fa-regular fa-calendar"></i> Fecha de finalizacion</h3>
                            <p>{contract && contract.endDate}</p>
                        </div>

                        <div className="contractMoney contractDetailInfoChild">
                            <h3><i className="fa-regular fa-sack-dollar"></i> Presupuesto</h3>
                            <p>{contract && contract.currency?.iso3Code}${contract && contract.totalPayment}</p>
                        </div>
                    </div>


                </article>

                <article className="contractDetailEntregable">
                    

                    {
                        contract && contract.contractOption?.id == 1 ?
                        (
                            <>
                                <h3 className="contractHitoTitle">
                                    <i className="fa-regular fa-file-spreadsheet"></i> Entregables o hitos
                                </h3>

                                <article className="contractDetailHito">
                                    <h3><i className="fa-regular fa-flag"></i> Hito: <span>{contract && contract.fixedPriceMilestones[0].name}</span> </h3>
                                </article>
                                
                                <div className="contractDetailHitoInfo">
                                    <p><i className="fa-regular fa-calendar"></i> Fecha de entrega: {contract && contract.fixedPriceMilestones[0].endDate}</p>
                                </div>
                            </>
                        )

                        :

                        (
                            <article className="contractDetailPerHour">
                                <h3><i className="fa-regular fa-clock"></i>Horas trabajadas </h3>
                                
                                <div className="contractPerHourProgress">
                                    <Progress type="circle" size={200} percent={porcentage} />
                                </div>
                                
                                <div className="contractHours">
                                    <div className="contractTotalHour contractTotalHourInfo">
                                        <p>Total de horas trabajadas: <span>3hrs</span></p>
                                        <br />
                                        <p>Pagado: <span>{contract && contract.currency?.iso3Code}${contract && contract.currentPayment}</span></p>
                                    </div>

                                    <div className="contractHourForWork contractTotalHourInfo">
                                        <p>Horas restantes: <span>{contract.hourlyMilestones && contract.hourlyMilestones[0]?.currentHours}</span></p>
                                    </div>
                                </div>

                            </article>
                        )
                    }

                    


                    <div className="contractProgress">
                        {
                            auth && auth.rol == "Client" ?
                            (
                                <div className="contractUpdatePay">
                                    <Input placeholder="Introduce un monto" disabled={contract.currentPayment == contract.totalPayment ? true : false} onChange={(e) => setPayAmount({...payAmount, amount: parseInt(e.target.value)})} type="number" style={{width: 490, marginBottom: 40}}/>
                                    <Button type="primary" disabled={contract.currentPayment == contract.totalPayment ? true : false} onClick={payWork} style={{marginLeft: 10}}><span>Pagar</span></Button>
                                </div>
                            )

                            :

                            (
                                <></>
                            )
                        }
                        
                        <Progress percent={porcentage} />
                    </div>
                    <br />
                    <br />
                    <br />
                </article>


            </div>
        </>
    )
}