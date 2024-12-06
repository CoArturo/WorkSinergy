import React, { useContext, useEffect, useState } from "react"
import './Login.css'
import { UserLogin } from "../../Interfaces/UserLogin"
import { getCookie, setCookie } from "../../Auth/Cookie"
import { UserBody } from "../../Interfaces/UserBody"
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextZustand"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"


export const Login: React.FC = () => {

    const navigate = useNavigate();

    
    const URL = "https://localhost:7014/api/Account/authenticate"
    const [ showPassword, setShowPassword ] = useState<string>("password")
    const [ user, setUser ] = useState<UserLogin>({input: "", password: ""})
    const [ isAuth, setIsAuth ] = useState<boolean>(false)

    const body:UserLogin = user;
    const {userRol, setUserRolContext} = useUserContext()
    const signIn = useSignIn()
    const auth:any = useAuthUser()

    useEffect(()=>{
        navegarHome()
    }, [])

    useEffect(()=>{
        navegarHome()
    }, [isAuth])

    const navegarHome = () => {
        if(auth != null)
        {
            navigate(`/${auth.rol.toLowerCase()}/home`)
        }
    }

    const autenticarLogin = async() => {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setUserRolContext(data.roles[0])
            
            signIn({
                auth: {
                    token: data.jwToken
                },
                userState: {
                    email: data.email,
                    id: data.id,
                    rol: data.roles[0],
                    name: data.firstName
                }
            })

            setIsAuth(true)
        })
        .catch((error) => console.error("Error: ", error))
    }

    return(
        <>
            <div className="login">

                {/* <div className="imageBanner">
                    <img src="assets/images/loginBanner.webp" />
                </div> */}

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
                    
                    <button className="btn" onClick={()=>autenticarLogin()}>Iniciar sesión</button>
                    {/* <button className="btn" onClick={()=>setCookie(usuario)}>Set cookie</button> */}

                </div>

            </div>
        </>
    )
}