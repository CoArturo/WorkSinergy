import { Ability } from "./Ability";

export interface UserModel {
    id: string;
    userName: string;
    description: string;
    email: string;
    firstName: string;
    lastName: string;
    userImagePath: string | null;
    roles: string[];
    abilities: Ability[];
    isActive: boolean;
}

export const InitialUser:UserModel = {
    id: "",
    userName: "",
    description: "",
    email: "",
    firstName: "",
    lastName: "",
    userImagePath: null,
    roles: [],
    abilities: [],
    isActive: false
}