import { ClientPostJob } from "../Pages/ClientPostJob/ClientPostJob";
import { Freelancer } from "../Pages/Freelancer/Freelancer";
import { JobOffers } from "../Pages/JobOffers/JobOffers";
import { NewProposal } from "../Pages/NewProposal/NewProposal";
import { ViewJobOffer } from "../Pages/ViewJobOffer/ViewJobOffer";

export const routes = [
    {
        id: 1,
        parent: "/freelancer",
        path: "/home",
        name: "home",
        Component: Freelancer,
        isRender: true
    },
    {
        id: 2,
        parent: "/freelancer",
        path: "/NewProposal",
        name: "nueva propuesta",
        Component: NewProposal,
        isRender: true,
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
]