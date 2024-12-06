import React from "react"
import './HomeClientCard.css'
import { useNavigate } from "react-router-dom"
import { PostJob, PostJobResponse } from "../../Interfaces/Post"

interface props{
    post?: PostJobResponse
}

export const HomeClientCardPresentation: React.FC<props> = ({post}) => {

    const navigate = useNavigate()

    return(
        <>
            <div className="workCard">
                <div className="titleWorkCard">
                    <p>{post && post.title}</p>
                </div>

                <button className="btn" onClick={()=>navigate(`/client/viewproposal?id=${post?.id}`)}>Revisar propuesta</button>
            </div>
        </>
    )
}