export interface PostJob {
    description: string;
    currency: string;
    title: string;
    contractOption: string;
    from: number;
    to: number;
    categories: number[];
    abilities: number[];
    creatorUserId: string;
}

export interface PostJobResponse {
    id: number;
    description: string;
    currency: string;
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
    currency: "",
    title: "",
    contractOption: "",
    from: 0,
    to: 0,
    categories: [],
    abilities: [],
    creatorUserId: "",
  };