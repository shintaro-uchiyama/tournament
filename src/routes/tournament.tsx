import TournamentList from "../containers/TournamentList/TournamentList";
import Entry from "../containers/Entry/Entry";
import Regist from "../views/Regist/Regist";

const tournamentRoutes = [
    {
        path: "/tournamentList",
        icon: TournamentList,
        component: TournamentList
    },
    {
        path: "/entry/:id",
        icon: Entry,
        component: Entry
    },
    {
        path: "/regist",
        icon: Regist,
        component: Regist
    },
    { redirect: true, path: "/", to: "/tournamentList", navbarName: "Redirect" }
];

export default tournamentRoutes;
