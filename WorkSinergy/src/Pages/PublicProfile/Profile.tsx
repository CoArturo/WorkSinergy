import './Profile.css'


export const Profile: React.FC = () => {
    

    
    return(
            <>
                <section className="profileContainer">
                    <article className="profileBanner">
                        <div className="profileImg">

                        </div>
                        <div className="profileInfo">
                            <h3>Kamille Therm Jack <span className='profileUsername'>@kthermjack</span></h3>
                            <p>Diseñadora grafica</p>
                            <p><i className="fa-regular fa-star"></i> <span>3.8</span> <i className="fa-regular fa-suitcase"></i><span>100</span></p>
                        </div>
                    </article>

                    

                </section>
            </>
    )
}