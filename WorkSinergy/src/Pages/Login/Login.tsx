import React, { useContext, useEffect, useState } from "react"
import './Login.css'
import { UserLogin } from "../../Interfaces/UserLogin"
import { getCookie, getCookieDecrypt, removeCookie, setCookie } from "../../Auth/Cookie"
import { UserBody } from "../../Interfaces/UserBody"
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextZustand"



export const Login: React.FC = () => {

    // const navigate = useNavigate();
    
    // const [isInitialLoad, setIsInitialLoad] = useState(true);
    
    // const { usuario, setUsuario } = useContext(UserContext)
    // const URL = "https://localhost:7014/api/Account/authenticate"
    const [ showPassword, setShowPassword ] = useState<string>("password")
    const [ user, setUser ] = useState<UserLogin>({input: "", password: ""})
    // const [ userFetch, setUserFetch ] = useState<UserBody>()

    // const body:UserLogin = user;

    // const { userContext, setUserContext } = useUserContext()

    // const navegarHome = () => {
    //     if(usuario.roles[0] == "Client" && usuario.roles[0] != "")
    //     {
    //         navigate("/freelancerhome")
    //     }
    //     else
    //     {
    //         navigate("/postnewjob")
    //     }
    // }

    // useEffect(() => {
    //     if(!isInitialLoad && userContext.id != "")
    //     {
    //         console.log("Set de cookies");
    //         setCookie(usuario)
    //         navegarHome()
    //         let cookie = getCookie()
    //         if(cookie)
    //         {
    //             navegarHome()
    //         }
    //     }
    // }, [userContext]);

    // useEffect(()=>{
    //     setIsInitialLoad(false)
  
    //     setUserContext(getCookieDecrypt())  

    //     if(usuario.roles[0] == "Client")
    //     {
    //         navigate("/")
    //     }
    // }, [])

    // const autenticarLogin = async() => {
    //     fetch(URL, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //           },
    //         body: JSON.stringify(body),
    //     })
    //     .then((response) => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         if(data.id != null)
    //         {
    //             setUserContext(data)
    //             setCookie(data)
    //             navegarHome()
    //         }
    //     })
    //     .catch((error) => console.error("Error: ", error))
    // }

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
                        <input type="text" onChange={(e)=>setUser({...user, input: e.target.value})} placeholder="Correo"/>
                    </div>

                    <div className="loginInputs">
                        <label htmlFor="">Contraseña</label>
                        <i className="fa-solid fa-lock"></i>
                        <input type={showPassword} onChange={(e)=>setUser({...user, password: e.target.value})} placeholder="Contraseña"/>
                        <i className="fa-solid fa-lock"></i>
                        {showPassword == "password" ? <i className="fa-solid fa-eye-slash passwordLogin" onClick={()=>setShowPassword("text")}></i> : <i className="fa-solid fa-eye passwordLogin" onClick={()=>setShowPassword("password")}></i> }
                    </div>

                    <small className="forget"> ¿Olvidaste tu contraseña?</small>
                    
                    <button className="btn">Iniciar sesión</button>
                    {/* <button className="btn" onClick={()=>setCookie(usuario)}>Set cookie</button> */}
                    <button className="btn" onClick={()=>getCookie()}>Get cookie</button>
                    <button className="btn" onClick={()=>removeCookie()}>Remove cookie</button>

                </div>

            </div>
        </>
    )
}