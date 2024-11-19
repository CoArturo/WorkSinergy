import { Children, createContext, useState } from "react"
import { UserBody } from "../Interfaces/UserBody"


interface props {
    children: JSX.Element | JSX.Element[]
}

const defaultUser = {
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
}

export const UserContext = createContext<any>({});



export const UserProvider = ({ children }:any) => {

    const [usuario, setUsuario] = useState<UserBody>(defaultUser)

    return (
        <UserContext.Provider value={{
            usuario, 
            setUsuario
            }}>
            { children }
        </UserContext.Provider>
    )
}