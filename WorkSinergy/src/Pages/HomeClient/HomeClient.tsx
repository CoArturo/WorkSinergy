import React, { useEffect, useState } from "react"
import './HomeClient.css'
import { HomeClientCardPresentation } from "../../Components/HomeClientWorkCards/HomeClientCardPresentation"
import { HomeClientTalentsCardsPresentation } from "../../Components/HomeClientTalentsCards/HomeClientTalentsCardsPresentation"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.css';
import '../../../node_modules/swiper/modules/pagination.css';
import '../../../node_modules/swiper/modules/scrollbar.css';
import { A11y, Navigation, Scrollbar, Pagination } from "swiper/modules"
import { PostJobResponse } from "../../Interfaces/Post"
import { UserModel } from "../../Interfaces/UserModel"

export const HomeClient: React.FC = () => {

    const URL = "https://localhost:7014/api/v1/Post/GetByUser/"
    const URLFRELANCER = "https://localhost:7014/api/Account/GetByRole/Freelancer"
    const auth: any = useAuthUser()
    const navigate = useNavigate()

    const [ posts, setPosts ] = useState<PostJobResponse[]>([])
    const [ frelancers, setFreelancers ] = useState<UserModel[]>([])

    const getPosts = () => {
        fetch(URL + auth.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            if(data != null)
            {
                setPosts(data.data)
            }
        })
        .catch((error) => console.error("Error: ", error))
    }

    const getFreelancer = () => {
        fetch(URLFRELANCER, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then((response) => response.json())
        .then(data => {
            if(data.data != null)
            {
                setFreelancers(data.data)
            }
        })
        .catch((error) => console.error("Error: ", error))
    }

    useEffect(()=>{
        getPosts()
        getFreelancer()
    }, [])
   
    return(
        <>
            <main className="homeClientContainer">
                <section className="homeClientBanner">
                    <div className="homeClientElements">
                        <h2>Transforma tus ideas en realidad con los <span>Mejores Freelancers</span></h2>
                        <small>Desde diseño hasta desarrollo web, encuentra al freelancer ideal para hacer realidad tus ideas.</small>
                    </div>
                </section>

                <div className="workHeader">
                    <h2>¡Bienvenido de nuevo, <span>{auth.name}</span>!</h2>
                    <small>Encuentre al profesional adecuado para hacer realidad tus ideas</small>
                </div>


                <article className="titleWorks">
                    <h2 onClick={()=>navigate("/client/viewallpost")}>Tus trabajos | <a href="#">Ver todos los trabajos <i className="fa-light fa-arrow-right"></i></a></h2>
                    <button className="btn" onClick={()=>navigate("/client/postjob")}><i className="fa-regular fa-plus"></i>Publica un trabajo</button>
                </article>

                <article className="workType">

                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        navigation={false}
                        scrollbar={{ draggable: true }}
                        >

                        {
                            posts &&
                            posts.map((post)=>{
                                return(
                                    <SwiperSlide><HomeClientCardPresentation post={post}/></SwiperSlide>
                                )
                            })
                        }
                        <br />
                    </Swiper>

                </article>

                <div className="talentHeader">
                    <h2>Explorar talentos | <a href="#">Buscar freelancers <i className="fa-light fa-arrow-right"></i></a></h2>
                </div>

                <article className="workType">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        navigation={false}
                        scrollbar={{ draggable: true }}
                        direction="horizontal"
                        >

                        {
                            frelancers &&
                            frelancers.map((freelancer)=>{
                                return(
                                    
                                    <SwiperSlide><HomeClientTalentsCardsPresentation user={freelancer} /></SwiperSlide>

                                )
                            })
                        }
                        <br />
                        <br />
                    </Swiper>
                </article>

                <br />
                <br />
                <br />
                <br />
            </main>
        </>
    )
}