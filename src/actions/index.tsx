import * as constants from '../constants'

// トーナメント申込み
export type TournamentAction = EntryTournament;
export interface EntryTournament {
    type: constants.ENTRY_TOURNAMENT;
    index: number;
}
export function entryTournament(index: number): EntryTournament {
    return {
        type: constants.ENTRY_TOURNAMENT,
        index
    }
}

// トーナメント申込みフォームの変更をstateに反映
export type HandleInputAction = HandleInputChange;
export interface HandleInputChange {
    type: constants.HANDLE_INPUT_CHANGE;
    name: string;
    value: string;
}
export function handleInputChange(name: string, value: string): HandleInputChange {
    return {
        type: constants.HANDLE_INPUT_CHANGE,
        name,
        value
    }
}