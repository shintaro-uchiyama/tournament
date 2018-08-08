import { TournamentState } from './tournament/types'

export interface StoreState {
    tournamentList: TournamentState[],
    entry: {
        teamName: string,
        leaderName: string,
        email: string,
        phoneNo: string
    }
}