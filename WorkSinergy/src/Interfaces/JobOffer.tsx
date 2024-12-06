import { Client, InitialClient } from "./Client";
import { initialPostJob, initialPostJobResponse, PostJob, PostJobResponse } from "./Post";

export interface Offer {
    id: number;
    description: string;
    title: string;
    startDate: string;
    endDate: string;
    hourlyRate: number;
    clientUserId: string;
    freelancerId: string;
    client: Client
    freelancer: Client
    status: string;
    expirationDate: string;
    postId: number;
    post: PostJobResponse;
    currencyId: number;
    currency: {
        id: number;
        name: string;
        iso3Code: string;
    }
    contractOptionId: number;
    contractOption: {
        id: number;
        name: string;
    }
}

export const initialOffer:Offer = {
    id: 0,
    description: "",
    title: "",
    startDate: "",
    endDate: "",
    hourlyRate: 0,
    clientUserId: "",
    freelancerId: "",
    status: "",
    expirationDate: "",
    postId: 0,
    post: initialPostJobResponse,
    currencyId: 0,
    currency: {
        id: 0,
        name: "",
        iso3Code: ""
    },
    contractOptionId: 0,
    contractOption: {
        id: 0,
        name: ""
    },
    client: InitialClient,
    freelancer: InitialClient
}

export interface OfferPost {
    description: string;
    title: string;
    startDate: Date; 
    endDate: Date;   
    hourlyRate: number;
    clientUserId: string;
    freelancerId: string;
    expirationDate: string; 
    postId: number;
    currencyId: number | null;
    contractOptionId: number;
    totalHours: number;
}

export const InitialOfferPost: OfferPost = {
    description: "",
    title: "",
    startDate: new Date,
    endDate: new Date,
    hourlyRate: 0,
    clientUserId: "",
    freelancerId: "",
    expirationDate: "",
    postId: 0,
    currencyId: 0,
    contractOptionId: 0,
    totalHours: 0
}