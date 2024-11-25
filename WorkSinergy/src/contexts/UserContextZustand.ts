import {create} from 'zustand'
import { UserBody } from '../Interfaces/UserBody'

interface UserContext {
    userContext: UserBody
    setUserContext: (value: UserBody) => void
}

const defaultUser:UserBody = {
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
    jwToken: "",
}

export const useUserContext = create<UserContext>((set) => ({
    userContext: defaultUser,
    setUserContext: (value: UserBody) => set(state => ({
        userContext: state.userContext = value
    }))
}))