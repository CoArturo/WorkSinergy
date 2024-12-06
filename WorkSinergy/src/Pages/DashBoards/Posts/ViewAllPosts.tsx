import { useNavigate } from 'react-router-dom'
import './ViewAllPost.css'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useEffect, useState } from 'react'
import { PostJobResponse } from '../../../Interfaces/Post'
import { Result } from 'antd'
import { ResultComponent } from '../../../Components/Result/Result'

export const ViewAllPost: React.FC = () => {

    const navigate = useNavigate()
    const auth:any = useAuthUser()

    const URL = "https://localhost:7014/api/v1/Post/GetByUser/"
    const DELETE = "https://localhost:7014/api/v1/Post/"
    
    const [ posts, setPosts ] = useState<PostJobResponse[]>([])

    const getPost = async() => {
        fetch(URL + auth.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setPosts(data.data)
        })
        .catch((error) => console.error("Error: ", error))
    }

    const deletePost = async( id: number) => {
        fetch(DELETE + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            getPost()
        })
        .catch((error) => console.error("Error: ", error))
    }

    useEffect(()=>{
        getPost()
    }, [])

    useEffect(()=>{
        console.log(posts)
    }, [posts])


    
    
    
    
    
    return(
        <>
            <section className="tablePostContainer">

                <div className="tablePostBanner">
                    <p>¡Organiza y sigue de cerca el progreso de tus proyectos!</p>
                    <div className="tablePostBannerFigura">
                        <div className="tablePostFigura1"></div>
                        <div className="tablePostFigura2"></div>
                    </div>
                </div>

                <div className="tablePostHeader">
                    <p>Todas tus publicaciones</p>
                    <button className='btn' onClick={()=>navigate("/client/postjob")}><i className="fa-solid fa-plus"></i>Publica un trabajo</button>
                </div>

                <table>
                    <thead>
                        <th>Titulo de la publicacion</th>
                        <th>Categoria</th>
                        <th>Propuestas</th>
                        <th>Acciones</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>UX/UI para rediseño de una cafetería</td>
                            <td ><p className='tablePostCategory'>Diseño Web</p></td>
                            <td>10 propuestas</td>
                            <td> icono </td>
                        </tr>
                        {
                            posts &&
                                posts.map((post)=>{
                                    return (
                                        <tr>
                                            <td>{post && post.title}</td>
                                            <td ><p className='tablePostCategory'>{post && post.tags[0].name}</p></td>
                                            <td>{post && post.applicationsCount + " propuestas"}</td>
                                            <td> <i className="fa-regular fa-eye tablePostIcon tablePostViewIcon btn" onClick={()=>navigate(`/client/viewproposal?id=${post?.id}`)}></i> <i className="fa-regular fa-trash tablePostIcon tablePostDeleteIcon btn" onClick={()=>deletePost(post.id)}></i> </td>
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