export interface Client {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    documentId: string;
    phoneNumber: string;
    userImagePath: string;
    roles: string[];
}

export const InitialClient:Client = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    documentId: "",
    phoneNumber: "",
    userImagePath: "",
    roles: []
}