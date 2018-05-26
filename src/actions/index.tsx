import * as constants from '../constants'

export interface EntryTournament {
    type: constants.ENTRY_TOURNAMENT;
    index: number;
}

export type TournamentAction = EntryTournament;

export function entryTournament(index: number): EntryTournament {
    return {
        type: constants.ENTRY_TOURNAMENT,
        index
    }
}