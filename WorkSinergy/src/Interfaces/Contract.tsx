import { Currency } from "./Currency";
import { FixedPriceMilestone } from "./FixedPriceMilestone";
import { GetModel } from "./GetModel";
import { HourlyMilestone } from "./HourlyMilestone";
import { UserModel } from "./UserModel";

export interface Contract {
    id: number;
    description: string;
    currencyId: number;
    currency: Currency | null;
    totalPayment: number;
    currentPayment: number;
    title: string;
    contractOptionId: number;
    contractOption: GetModel | null;
    startDate: string;
    endDate: string;
    freelancerId: string;
    freelancer: UserModel | null;
    creatorUserId: string;
    creatorUser: UserModel | null;
    fixedPriceMilestones: FixedPriceMilestone[];
    hourlyMilestones: HourlyMilestone[];
}

export const initialContract: Contract = {
    id: 0,
    description: "",
    currencyId: 0,
    currency: null,
    totalPayment: 0,
    currentPayment: 0,
    title: "",
    contractOptionId: 0,
    contractOption: null,
    startDate: "",
    endDate: "",
    freelancerId: "",
    freelancer: null,
    creatorUserId: "",
    creatorUser: null,
    fixedPriceMilestones: [],
    hourlyMilestones: []
}