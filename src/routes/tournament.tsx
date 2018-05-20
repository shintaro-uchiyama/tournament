import TournamentList from "../views/TournamentList/TournamentList";
// import Entry from "views/Entry/Entry.jsx";

const tournamentRoutes = [
    {
        path: "/tournamentList",
        icon: TournamentList,
        component: TournamentList
    },
    /*  {
        path: "/entry",
        icon: Entry,
        component: Entry
      },*/
    { redirect: true, path: "/", to: "/tournamentList", navbarName: "Redirect" }
];

export default tournamentRoutes;
