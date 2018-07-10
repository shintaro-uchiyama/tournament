import * as React from 'react';
import { Grid } from '@material-ui/core';
import ItemGrid from "../../components/Grid/ItemGrid";
import TournamentCard from "../../components/Cards/TournamentCard";
import { StoreState } from '../../store/index';
import gql from "graphql-tag";
import { graphql, ChildProps } from "react-apollo";

interface Props {
    tournament: StoreState
    onEntry: any
    data: GraphqlResponse
}
interface GraphqlResponse {
    loading: any
    tournaments: any
    error: any
}

interface Response {
    tournaments: Tournament[];
};

interface Tournament {
    id: any
    title: any
    subheader: any
    image: any
    description: any
    participant: any
    detail: any
}

const TOURNAMENT_QUERY = gql`
  {
    tournaments {
      id
      title
      subtitle
      date
      image
      description
    }
  }
`;

const withTournamentList = graphql<Props, Response>(TOURNAMENT_QUERY, {});

class TournamentList extends React.Component<ChildProps<Props, Response>, {}> {
    public images = this.importAll(require.context('../../assets/img/cards', false, /\.(png|jpe?g|svg)$/));

    public importAll(r: any) {
        const images = {};
        r.keys().map((item: any, index: any) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    public render() {
        const { loading, tournaments, error } = this.props.data;
        if (loading) { return <div>Loading</div>; }
        if (error) { return <h1>ERROR</h1>; }
        return (
            <div>
                <Grid container={true} spacing={16}>
                    {tournaments.map(
                        (data: any, index: any) => {
                            return (
                                <ItemGrid xs={12} sm={4} key={index}>
                                    <TournamentCard
                                        title={data.title}
                                        subheader={data.subtitle}
                                        image={this.images[data.image]}
                                        description={data.description}
                                        participant={this.props.tournament.tournamentList[data.id - 1].participantNum}
                                        detail={data.description}
                                        onEntry={this.props.onEntry}
                                        id={this.props.tournament.tournamentList[data.id - 1].id}
                                        isEntry={this.props.tournament.tournamentList[data.id - 1].isEntry}
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

export default withTournamentList(TournamentList);
