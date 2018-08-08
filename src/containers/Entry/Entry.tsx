import Entry from '../../views/Entry/Entry';
import * as actions from '../../actions/index';
import { StoreState } from '../../store/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(tournament: StoreState) {
  return {
    tournament,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onEntry: (index: number) => dispatch(actions.entryTournament(index)),
    handleInputChange: (name: string, value: string) => dispatch(actions.handleInputChange(name, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);