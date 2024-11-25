import React, { useEffect, useState } from "react"
import { PostJob, PostJobResponse } from "../../Interfaces/Post"
import { FreelancerCardsPresentation } from "./FreelancerCardsPresentation"

export const FreelancerCardsContainer: React.FC = () => {

    const URL = "https://localhost:7014/api/v1/Post"

    const [postCards, setPostCards] = useState<PostJobResponse[]>([])


    useEffect(()=>{
        fetchPostCards()
    }, [])

    useEffect(()=>{
        console.log(postCards)
    }, [postCards])

    const fetchPostCards = () => {
        fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            
            setPostCards(data.data)
            
        })
        .catch((error) => console.error("Error: ", error))
    }

    return(
        <>
            {
                postCards && 
                postCards.map((card) => {
                    return(
                        <FreelancerCardsPresentation key={card.id} post={card} />
                    )
                })
            }
        </>
    )
}