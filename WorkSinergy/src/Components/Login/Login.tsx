import React from "react"
import './Login.css'

export const Login: React.FC = () => {

    const whats = async () => {
        window.open("https://wa.me/?text=https://www.youtube.com/watch?v=wz8pNp0qJtA&t=642s&ab_channel=FaridDieck", "_blank")
    }

    return(
        <>
            <div className="login">

                <div className="imageBanner">
                    <img src="assets/images/loginBanner.webp" alt="" />
                </div>

                <div className="loginControls">

                    <div className="backLogin">
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>Volver</p>
                    </div>

                    <h3>Continua con tu correo o nombre de usuario</h3>

                    <div className="loginInputs">
                        <label htmlFor="">Correo electrónico</label>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" />
                    </div>

                    <div className="loginInputs">
                        <label htmlFor="">Contraseña</label>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" />
                        <i className="fa-solid fa-eye-slash passwordLogin"></i>
                    </div>

                    <small className="forget"> ¿Olvidaste tu contraseña?</small>
                    
                    <button className="btn" onClick={whats}>Iniciar sesión</button>

                </div>

            </div>
        </>
    )
}