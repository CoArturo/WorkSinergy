import Cookies from "universal-cookie";
import Crypto from 'crypto-js'
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import { UserBody } from "../Interfaces/UserBody";

const cookies = new Cookies();

export const setCookie = (value:any) => {

    let encryptMessage = Crypto.AES.encrypt(JSON.stringify(value), "123").toString()
    cookies.set("jwt", encryptMessage, {
        expires: new Date(Date.now() + 1 * 60 * 1000)
    })
    console.log(cookies.get("jwt"))
}

export function getCookie() {
    let userCookies = cookies.get("jwt")
    console.log(userCookies)
    return userCookies
    // let decryptMessage = Crypto.AES.decrypt(cookies.get("jwt"), "123")
    // var decryptedData = JSON.parse(decryptMessage.toString(Crypto.enc.Utf8));
    // console.log(decryptedData)
}

export function getCookieDecrypt() {
    
    let userCookie:UserBody = {
        id: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        username: "",
        email: "",
        roles: [],
        isVerified: false,
        userImagePath: null,
        hasError: false,
        error: null,
        jwToken: ""
    };

    let cookieJWT = cookies.get("jwt")

    if(cookieJWT)
    {
        let decryptMessage = Crypto.AES.decrypt(cookies.get("jwt"), "123")
        var decryptedData = JSON.parse(decryptMessage.toString(Crypto.enc.Utf8));
        userCookie = decryptedData
        return userCookie
    }
    return userCookie
}

export const removeCookie = () => {
    cookies.remove("jwt")
}

export const Auth: React.FC = () => {

    return(
        <>
        
        </>
        
    )
}