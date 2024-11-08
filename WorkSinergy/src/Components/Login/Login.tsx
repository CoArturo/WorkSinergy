import React from "react"
import './Login.css'

export const Login: React.FC = () => {

    return(
        <>
            <div className="login">

                <div className="imageBanner">
                    <img src="assets/images/loginBanner.webp" alt="" />
                </div>

                <div className="loginControls">

                    <h3>Crea una cuenta nueva</h3>

                    <div className="autenticacion firstAuth">
                        <i className="fa-regular fa-envelope"></i>
                        <p>Registrarse con Google</p>
                    </div>

                    <div className="divider">
                        <hr />
                            <span className="or">
                                o   
                            </span>
                        <hr />
                    </div>

                    <div className="autenticacion">
                        <i className="fa-brands fa-google"></i>
                        <p>Registrarse con Google</p>
                    </div>

                    <div className="autenticacion">
                        <i className="fa-brands fa-facebook"></i>
                        <p>Registrarse con Facebook</p>
                    </div>

                    <div className="autenticacion">
                        <i className="fa-brands fa-x-twitter"></i>
                        <p>Registrarse con X</p>
                    </div>

                    <p className="confirm"> ¿Ya tienes una cuenta? <span>Inicia sesión</span> </p>

                    <p className="terminos">
                        Al unirte, aceptas los Términos de servicio de WorkSynergy, lee nuestra Política de privacidad para saber cómo utilizamos tus datos personales.
                    </p>

                </div>

            </div>
        </>
    )
}