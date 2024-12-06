import {create} from 'zustand'
import { UserBody } from '../Interfaces/UserBody'

interface UserContext {
    userId: string
    userRol: string
    value: boolean
    setUserContext: (value: string) => void
    setUserRolContext: (value: string) => void
    setUserValue: (value: boolean) => void
}


export const useUserContext = create<UserContext>((set) => ({
    userId: "",
    userRol: "",
    value: false,
    setUserContext: (value: string) => set(state => ({
        userId: state.userId = value
    })),
    setUserRolContext: (value: string) => set(state => ({
        userRol: state.userRol = value
    })),
    setUserValue: (value: boolean) => set(state => ({
        value: state.value = value
    }))
}))