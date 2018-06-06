import TournamentList from "../containers/TournamentList/TournamentList";
import Entry from "../containers/Entry/Entry";

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
    { redirect: true, path: "/", to: "/tournamentList", navbarName: "Redirect" }
];

export default tournamentRoutes;
