import * as React from 'react';
import { Grid } from '@material-ui/core';
import ItemGrid from "../../components/Grid/ItemGrid";
import TournamentCard from "../../components/Cards/TournamentCard";
import { StoreState } from '../../store/index';
import * as constants from "../../constants/index";

interface Props {
    tournament: StoreState
    onEntry: any;
}

class TournamentList extends React.Component<Props, {}> {
    public images = this.importAll(require.context('../../assets/img/cards', false, /\.(png|jpe?g|svg)$/));

    public importAll(r: any) {
        const images = {};
        r.keys().map((item: any, index: any) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    public render() {
        return (
            <div>
                <Grid container={true} spacing={16}>
                    {constants.TOURNAMENT_LIST.map(
                        (data, index) => {
                            return (
                                <ItemGrid xs={12} sm={4} key={index}>
                                    <TournamentCard
                                        title={data.title}
                                        subheader={data.subheader}
                                        image={this.images[data.image]}
                                        description={data.description}
                                        participant={this.props.tournament.tournamentList[data.id].participantNum}
                                        detail={data.detail}
                                        onEntry={this.props.onEntry}
                                        id={this.props.tournament.tournamentList[data.id].id}
                                        isEntry={this.props.tournament.tournamentList[data.id].isEntry}
                                    />
                                </ItemGrid>
                            )
                        }
                    )}
                </Grid>
            </div>
        );
    }
}

export default TournamentList;
