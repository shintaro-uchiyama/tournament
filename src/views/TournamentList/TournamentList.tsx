import * as React from 'react';
import { Grid } from '@material-ui/core';
import ItemGrid from "../../components/Grid/ItemGrid";
import TournamentCard from "../../components/Cards/TournamentCard";
import azabu from "assets/img/cards/azabu.jpg";
import oizumi from "assets/img/cards/oizumi.jpg";
import yokohama from "assets/img/cards/yokohama.jpg";

class Dashboard extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Grid container={true} spacing={16}>
                    <ItemGrid xs={12} sm={4}>
                        <TournamentCard
                            title="Oizumi Cup"
                            subheader="Augast 18, 2018"
                            image={oizumi}
                            description="大泉学園で開催される「うまくなくても参加できるテニス大会」"
                            participant="12"
                            detail="持ち物や会場の情報など大会の詳細をここに記載予定"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={4}>
                        <TournamentCard
                            title="Yokohama Cup"
                            subheader="Augast 18, 2018"
                            image={yokohama}
                            description="大泉学園で開催される「うまくなくても参加できるテニス大会」"
                            participant="12"
                            detail="持ち物や会場の情報など大会の詳細をここに記載予定"
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={4}>
                        <TournamentCard
                            title="Azabu Cup"
                            subheader="Augast 18, 2018"
                            image={azabu}
                            description="大泉学園で開催される「うまくなくても参加できるテニス大会」"
                            participant="12"
                            detail="持ち物や会場の情報など大会の詳細をここに記載予定"
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
