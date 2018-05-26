import * as React from 'react';
import { Grid } from '@material-ui/core';
import ItemGrid from "../../components/Grid/ItemGrid";
import TournamentCard from "../../components/Cards/TournamentCard";
import { StoreState } from '../../store/index';
import azabu from "assets/img/cards/azabu.jpg";
import oizumi from "assets/img/cards/oizumi.jpg";
import yokohama from "assets/img/cards/yokohama.jpg";

interface Props {
    tournament: StoreState
    onEntry: any;
}

class TournamentList extends React.Component<Props, {}> {
    public render() {
        return (
            <div>
                <Grid container={true} spacing={16}>
                    <ItemGrid xs={12} sm={4}>
                        <TournamentCard
                            title="Oizumi"
                            subheader="Augast 18, 2018"
                            image={oizumi}
                            description="大泉学園で開催される「うまくなくても参加できるテニス大会」"
                            participant={this.props.tournament.tournamentList[0].participantNum}
                            detail="持ち物や会場の情報など大会の詳細をここに記載予定"
                            onEntry={this.props.onEntry}
                            id={this.props.tournament.tournamentList[0].id}
                            isEntry={this.props.tournament.tournamentList[0].isEntry}
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={4}>
                        <TournamentCard
                            title="Yokohama Cup"
                            subheader="Augast 18, 2018"
                            image={yokohama}
                            description="大泉学園で開催される「うまくなくても参加できるテニス大会」"
                            participant={this.props.tournament.tournamentList[1].participantNum}
                            detail="持ち物や会場の情報など大会の詳細をここに記載予定"
                            onEntry={this.props.onEntry}
                            id={2}
                            isEntry={this.props.tournament.tournamentList[1].isEntry}
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={4}>
                        <TournamentCard
                            title="Azabu Cup"
                            subheader="Augast 18, 2018"
                            image={azabu}
                            description="大泉学園で開催される「うまくなくても参加できるテニス大会」"
                            participant={this.props.tournament.tournamentList[2].participantNum}
                            detail="持ち物や会場の情報など大会の詳細をここに記載予定"
                            onEntry={this.props.onEntry}
                            id={3}
                            isEntry={this.props.tournament.tournamentList[2].isEntry}
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

export default TournamentList;
