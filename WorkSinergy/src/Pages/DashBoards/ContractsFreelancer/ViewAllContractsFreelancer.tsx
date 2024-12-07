import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { useNavigate } from "react-router-dom"
import { PostJobResponse } from "../../../Interfaces/Post"
import { Contract } from "../../../Interfaces/Contract"
import { useEffect, useState } from "react"


export const ViewAllContractsFreelancer: React.FC = () => {

    const navigate = useNavigate()
    const auth:any = useAuthUser()

    const URL = "https://localhost:7014/api/v1/Post/GetByUser/"
    const DELETE = "https://localhost:7014/api/v1/Post/"
    const CONTRACTS = `https://localhost:7014/api/v1/Contract?role=${auth.rol}&userId=${auth.id}`
    
    const [ posts, setPosts ] = useState<PostJobResponse[]>([])
    const [contracts, setContracts] = useState<Contract[]>([])

    const getContracts = async() => {
        fetch(CONTRACTS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setContracts(data.data)
        })
        .catch((error) => console.error("Error: ", error))
    }

    useEffect(()=>{
        getContracts()
    }, [])

    useEffect(()=>{
        console.log(posts)
    }, [posts])
    
    return(
        <>
            <section className="tablePostContainer">

                <div className="tablePostBanner">
                    <p>¡Organiza y sigue de cerca el progreso de tus contratos!</p>
                    <div className="tablePostBannerFigura">
                        <div className="tablePostFigura1"></div>
                        <div className="tablePostFigura2"></div>
                    </div>
                </div>

                <table>
                    <thead>
                        <th>Titulo del contrato</th>
                        <th>Freelancer</th>
    
                        <th>Acciones</th>
                    </thead>

                    <tbody>
                        {/* <tr>
                            <td>UX/UI para rediseño de una cafetería</td>
                            <td ><p className='tablePostCategory'>Diseño Web</p></td>
                            <td> icono </td>
                        </tr> */}
                        {
                            contracts &&
                                contracts.map((contract)=>{
                                    return (
                                        <tr>
                                            <td>{contract && contract.title}</td>
                                            <td ><p className='tablePostCategory'>{contract && contract.creatorUser?.firstName}</p></td>
                                            <td className="accionesContracts"> <i className="fa-regular fa-eye tablePostIcon tablePostViewIcon btn" onClick={()=>navigate(`/client/contractdetail?id=${contract.id}`)}></i> </td>
                                        </tr>
                                    )
                                })
                        }
                        

                    </tbody>
                </table>
            </section>
        </>
    )
}