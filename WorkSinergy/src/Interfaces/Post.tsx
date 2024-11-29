import { Ability } from "./Ability";
import { Category } from "./Category";
import { GetModel } from "./GetModel";

export interface PostJob {
    description: string;
    currency: string;
    title: string;
    contractOption: string;
    from: number;
    to: number;
    tags: number[];
    abilities: number[];
    creatorUserId: string;
}

export const initialPostJob: PostJob = {
    description: "",
    currency: "",
    title: "",
    contractOption: "",
    from: 0,
    to: 0,
    tags: [],
    abilities: [],
    creatorUserId: "",
  };

export interface PostJobResponse {
    id: number;
    description: string;
    currency: {
        id: number,
        name: string,
        iso3Code: string
    };
    contractOption: {
        id: number,
        name: string
      }
    title: string;
    from: number;
    to: number;
    tags: Category[];
    abilities: Ability[];
    creatorUserId: string;
}


export const initialPostJobResponse: PostJobResponse = {
    id: 0,
    description: "",
    currency: {
        id: 0,
        name: "",
        iso3Code: ""
    },
    contractOption: {
        id: 0,
        name: ""
    },
    title: "",
    from: 0,
    to: 0,
    tags: [],
    abilities: [],
    creatorUserId: ""
};