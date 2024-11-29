import {create} from 'zustand'
import { UserBody } from '../Interfaces/UserBody'

interface UserContext {
    userId: string
    setUserContext: (value: string) => void
}

export const useUserContext = create<UserContext>((set) => ({
    userId: "",
    setUserContext: (value: string) => set(state => ({
        userId: state.userId = value
    }))
}))