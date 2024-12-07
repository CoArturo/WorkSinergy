import { Ability } from "./Ability";
import { Category } from "./Category";
import { GetModel } from "./GetModel";

export interface PostJob {
    description: string;
    currencyId: number;
    title: string;
    contractOption: string;
    from: number;
    to: number;
    categories: number[];
    abilities: number[];
    creatorUserId: string;
}

export const initialPostJob: PostJob = {
    description: "",
    currencyId: 0,
    title: "",
    contractOption: "",
    from: 0,
    to: 0,
    categories: [],
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
    applicationsCount: number;
    createdAt: string;
    contractOption: {
        id: number,
        name: string
      }
    title: string;
    from: number;
    to: number;
    categories: Category[];
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
    categories: [],
    abilities: [],
    creatorUserId: "",
    applicationsCount: 0,
    createdAt: ""
};