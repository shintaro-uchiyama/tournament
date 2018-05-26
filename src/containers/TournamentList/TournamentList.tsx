import TournamentList from '../../views/TournamentList/TournamentList';
import * as actions from '../../actions/index';
import { StoreState } from '../../store/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(tournament: StoreState) {
    return {
        tournament
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TournamentAction>) {
    return {
        onEntry: (index: number) => dispatch(actions.entryTournament(index)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentList);