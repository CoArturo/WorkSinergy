import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css'
import { useEffect, useState } from 'react';
import { InitialUser, UserModel } from '../../Interfaces/UserModel';

export const Profile: React.FC = () => {
    
    const URL = 'https://localhost:7014/api/Account/'
    const navigate = useNavigate();
    const location = useLocation();
    let number = location.state || "";

    const [ userProfile, setUserProfile ] = useState<UserModel>(InitialUser)
    
    useEffect(()=>{
        if(number == "")
        {
            navigate('/')
        }
        fetchprofile()
    }, [])

    useEffect(()=>{
        console.log(userProfile)
    }, [userProfile])
    
    const fetchprofile = () => {
        fetch(URL + number, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              },
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data.data)
            if(data.data != null)
            {
                setUserProfile(data.data)
            }
        })
        .catch((error) => console.error("Error: ", error))
    }
    
    return(
            <>
                {
                    userProfile && 
                        <section className="profileContainer">
                            <article className="profileBanner">
                                <div className="profileImg">
                                {
                                    userProfile.userImagePath != null || '' ? (
                                        <img src={`https://localhost:7014/Files/${userProfile.userImagePath}`}  />

                                    ) : (
                                        <i className="fa-regular fa-user"></i>
                                    )
                                }
                                </div>
                                <div className="profileInfo">
                                    <h3>{userProfile.firstName + userProfile.lastName} <span className='profileUsername'>@{userProfile.userName}</span></h3>
                                    <p></p>
                                    <p><i className="fa-regular fa-star"></i> <span>3.8</span> <i className="fa-regular fa-suitcase"></i><span>100</span></p>
                                </div>
                                
                            </article>

                            <article className="profileBody">
                                
                                <div className="profileDescription">
                                    <h3>Conoceme</h3>
                                    <p>
                                        {userProfile.description}
                                    </p>
                                </div>

                                <div className="profileAbilities">
                                    <h3>Habilidades</h3>
                                    <div className="profileAbilitiesContainer">

                                        {userProfile && userProfile.abilities?.map((ability)=>{
                                            return(
                                                <div className="profileAbility">
                                                    <p>{ability.name}</p>
                                                </div>

                                            )
                                        })}

                                    </div>
                                </div>

                            </article>


                            {
                                userProfile.roles[0] != "Client" &&
                                <article className="profileSendOffer">
                                    <h3>¿Te interesa este perfil?</h3>
                                    <button className='btn' onClick={()=>navigate("/client/newjoboffer", {state: userProfile && userProfile.id})}><i className="fa-regular fa-paper-plane"></i>Enviar oferta de trabajo</button>
                                </article>

                            }
                        </section>
                }
                
            </>
    )
}