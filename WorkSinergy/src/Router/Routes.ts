import { ClientPostJob } from "../Pages/ClientPostJob/ClientPostJob";
import { ContractDetail } from "../Pages/ContractDetail/ContractDetail";
import { ViewAllContracts } from "../Pages/DashBoards/Contracts/ViewAllContracts";
import { ViewAllContractsFreelancer } from "../Pages/DashBoards/ContractsFreelancer/ViewAllContractsFreelancer";
import { ViewAllPost } from "../Pages/DashBoards/Posts/ViewAllPosts";
import { Freelancer } from "../Pages/Freelancer/Freelancer";
import { HomeClient } from "../Pages/HomeClient/HomeClient";
import { JobOffers } from "../Pages/JobOffers/JobOffers";
import { Login } from "../Pages/Login/Login";
import NewJobOffer from "../Pages/NewJobOffer/NewJobOffer";
import { NewProposal } from "../Pages/NewProposal/NewProposal";
import { Profile } from "../Pages/PublicProfile/Profile";
import { RegisterHome } from "../Pages/RegisterHome/RegisterHome";
import { ViewJobOffer } from "../Pages/ViewJobOffer/ViewJobOffer";
import { ViewProposal } from "../Pages/ViewProposal/ViewProposal";

interface Routes {
    id: number;
    parent: string;
    path: string;
    name: string;
    Component: React.ComponentType; 
    isRender: boolean;
}

interface RoutesList {
    routes: Routes[]
}


export const routes: RoutesList = {
    routes: [
        {
            id: 1,
            parent: "/freelancer",
            path: "/home",
            name: "home",
            Component: Freelancer,
            isRender: true,
        },
        {
            id: 2,
            parent: "/freelancer",
            path: "/apply",
            name: "nueva propuesta",
            Component: NewProposal,
            isRender: false,
        },
        {
            id: 3,
            parent: "/freelancer",
            path: "/offers",
            name: "ofertas",
            Component: JobOffers,
            isRender: true,
        },
        {
            id: 4,
            parent: "/freelancer",
            path: "/viewoffer",
            name: "",
            Component: ViewJobOffer,
            isRender: false,
        },
        {
            id: 5,
            parent: "/client",
            path: "/postjob",
            name: "nuevo post",
            Component: ClientPostJob,
            isRender: true,
        },
        {
            id: 6,
            parent: "/client",
            path: "/newjoboffer",
            name: "",
            Component: NewJobOffer,
            isRender: false,
        },
        {
            id: 7,
            parent: "/freelancer",
            path: "/apply2",
            name: "",
            Component: ViewJobOffer,
            isRender: false,
        },
        {
            id: 9,
            parent: "",
            path: "/",
            name: "",
            Component: Login,
            isRender: false,
        },
        {
            id: 10,
            parent: "/client",
            path: "/home",
            name: "home",
            Component: HomeClient,
            isRender: true,
        },
        {
            id: 11,
            parent: "",
            path: "/profile",
            name: "",
            Component: Profile,
            isRender: true,
        },
        {
            id: 11,
            parent: "/client",
            path: "/viewallpost",
            name: "posts",
            Component: ViewAllPost,
            isRender: true,
        },
        {
            id: 12,
            parent: "/client",
            path: "/viewproposal",
            name: "posts",
            Component: ViewProposal,
            isRender: false,
        },
        {
            id: 13,
            parent: "/client",
            path: "/contractdetail",
            name: "",
            Component: ContractDetail,
            isRender: false,
        },
        {
            id: 14,
            parent: "/client",
            path: "/viewallcontracts",
            name: "contracts",
            Component: ViewAllContracts,
            isRender: true,
        },
        {
            id: 15,
            parent: "/freelancer",
            path: "/viewallcontracts",
            name: "contracts",
            Component: ViewAllContractsFreelancer,
            isRender: true,
        },
    ],
};