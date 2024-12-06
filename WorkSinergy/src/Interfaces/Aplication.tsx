import { Ability } from "./Ability";
import { Category } from "./Category";
import { PostJobResponse } from "./Post";

export interface aplication {

    applicantId: string,
    postId: number,
    description: string,
}

export const initialAplication: aplication = {
    applicantId: "",
    postId: 0,
    description: ""
}

export interface applicationResponse {
  id: number;
  description: string;
  applicantId: string;
  post: PostJobResponse;
  user: {
    id: string;
    userName: string;
    description: string;
    email: string;
    firstName: string;
    lastName: string;
    userImagePath: string;
    roles: string[];
    abilities: Ability[];
    isActive: boolean;
  };
}