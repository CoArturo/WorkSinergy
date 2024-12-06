import React from "react"
import './HomeClientTalentsCards.css'
import { useNavigate } from "react-router-dom"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { UserModel } from "../../Interfaces/UserModel"

interface props{
    user: UserModel
}

export const HomeClientTalentsCardsPresentation: React.FC<props> = ({user}) => {

    const navigate = useNavigate()
    const auth:any = useAuthUser()

    return(
        <>
            <div className="talentContainerCard">
                <div className="talentCardProfile">
                    <div className="talentProfileImg">
                        {
                            user.userImagePath != null || '' ? (
                                <img src={`https://localhost:7014/Files/${user.userImagePath}`}  />

                            ) : (
                                <i className="fa-regular fa-user"></i>
                            )
                        }
                    </div>
                    <h3>{user && user.firstName + user.lastName}</h3>
                    <small>{user && user.abilities?.[0]?.name}</small>
                </div>

                <div className="talentCardInfo">
                    <p><i className="fa-regular fa-star"></i>3.8</p>
                    <p><i className="fa-regular fa-suitcase"></i>100</p>
                </div>

                <div className="talentCardAbility">
                    <h5>Habilidades</h5>
                    <div className="abilitysContainer">
                        <div className="talentAbility">
                            {
                                user &&
                                user.abilities.map((ability)=>{
                                    return(
                                        <p>{ability.name}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="talentCardControl">
                    <button className="btn viewTalent" onClick={()=>navigate("/profile", {state: user.id})}>Ver perfil</button>
                    <button className="btn likeTalent" ><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </>
    )
}