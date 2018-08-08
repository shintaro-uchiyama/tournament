import { StoreState } from '../store/index';
import { ENTRY_TOURNAMENT, HANDLE_INPUT_CHANGE } from '../constants/index';

export function tournament(state: StoreState, action: any): StoreState {
    switch (action.type) {
        case ENTRY_TOURNAMENT:
            return Object.assign({}, state, {
                tournamentList: state.tournamentList.map(((eachTournament, index) => {
                    if (eachTournament.id === action.index) {
                        return Object.assign({}, eachTournament, {
                            participantNum: ++eachTournament.participantNum,
                            isEntry: !eachTournament.isEntry
                        });
                    }
                    return eachTournament;
                }))
            })
        case HANDLE_INPUT_CHANGE:
            state = Object.assign({}, state);
            switch (action.name) {
                case "teamName":
                    state.entry.teamName = action.value;
                    return state;
                case "leaderName":
                    state.entry.leaderName = action.value;
                    return state;
                case "email":
                    state.entry.email = action.value;
                    return state;
                case "phoneNo":
                    state.entry.phoneNo = action.value;
                    return state;
            }
    }
    return state;
}