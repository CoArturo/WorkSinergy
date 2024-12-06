import Cookies from "universal-cookie";
import Crypto from 'crypto-js'
import { useContext } from "react";
import { UserBody } from "../Interfaces/UserBody";
import { useUserContext } from "../contexts/UserContextZustand";
// import { useUserContext } from "../contexts/UserContextZustand";

const cookies = new Cookies({path: '/'});
// const { setUserContext, setUserRolContext, userId, userRol } = useUserContext()

export const setCookie = (value:any) => {
    cookies.set("context", value)
}

export function getCookie() {
    let userCookies = cookies.get("context")
    console.log(userCookies)
    return userCookies
}

export const removeCookie = () => {
    // setUserContext("")
    // setUserRolContext("")
    console.log("Hola")
    cookies.remove("context")
}

export const Auth: React.FC = () => {

    return(
        <>
        
        </>
        
    )
}