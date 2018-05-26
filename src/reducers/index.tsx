import { TournamentAction } from '../actions';
import { StoreState } from '../store/index';
import { ENTRY_TOURNAMENT } from '../constants/index';

export function tournament(state: StoreState, action: TournamentAction): StoreState {
    switch (action.type) {
        case ENTRY_TOURNAMENT:
            return Object.assign({}, state, {
                tournamentList: state.tournamentList.map(((eachTournament, index) => {
                    if (eachTournament.id === action.index) {
                        return Object.assign({}, eachTournament, {
                            participantNum: ++eachTournament.participantNum
                        });
                    }
                    return eachTournament;
                }))
            })
    }
    return state;
}