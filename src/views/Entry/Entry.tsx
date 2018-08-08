import * as React from "react";
import { Grid, Button, WithStyles, withStyles } from "@material-ui/core";
import gql from "graphql-tag";
import RegularCard from "../../components/Cards/RegularCard";
import ItemGrid from "../../components/Grid/ItemGrid";
import CustomInput from "../../components/CustomInput/CustomInput";
import { StoreState } from '../../store/index';
import entryStyle from "../../assets/jss/material-tournament-react/entryStyle";
import { Mutation } from "react-apollo";

const PRE_ENTRY = gql`
  mutation PreEntryTournament($tournamentId: String!, $teamName: String!, $representiveName: String!, $email: String!, $phone: String!) {
    preEntryTournament(tournamentId: $tournamentId, teamName: $teamName, representiveName: $representiveName, email: $email, phone: $phone) {
      preEntry{
        teamName
        representiveName
        email
        phone
      }
      errors {
        type
        message
      }
    }
  }  
`

interface EntryProps {
    tournament: StoreState,
    onEntry: any,
    classes: any,
    match: any,
    handleInputChange: any
}

type ClassNames = keyof typeof entryStyle;
class Entry extends React.Component<EntryProps & WithStyles<ClassNames>, {}> {
    constructor(props: EntryProps) {
        super(props)
        this.state = {
            expanded: false
        }
    }
    public render() {
        return (
            <Mutation mutation={PRE_ENTRY}>
                {(preEntry, { data, loading, error }) => (
                    <div>
                        <Grid container={true}>
                            <ItemGrid xs={12} sm={12} md={8}>
                                <RegularCard
                                    headerColor="purple"
                                    plainCard={true}
                                    cardTitle="申し込みページ"
                                    cardSubtitle="Oizumi CUP"
                                    content={
                                        <div>
                                            <Grid container={true}>
                                                <ItemGrid xs={12} sm={4}>
                                                    <CustomInput
                                                        labelText="チーム名"
                                                        id="teamName"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        error={false}
                                                        success={false}
                                                        inputProps=""
                                                        labelProps=""
                                                        handleInputChange={this.props.handleInputChange}
                                                    />
                                                </ItemGrid>
                                                <ItemGrid xs={12} sm={4}>
                                                    <CustomInput
                                                        labelText="代表名"
                                                        id="leaderName"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        error={false}
                                                        success={false}
                                                        inputProps=""
                                                        labelProps=""
                                                        handleInputChange={this.props.handleInputChange}
                                                    />
                                                </ItemGrid>
                                                <ItemGrid xs={12} sm={4}>
                                                    <CustomInput
                                                        labelText="メールアドレス"
                                                        id="email"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        error={false}
                                                        success={false}
                                                        inputProps=""
                                                        labelProps=""
                                                        handleInputChange={this.props.handleInputChange}
                                                    />
                                                </ItemGrid>
                                                <ItemGrid xs={12} sm={4}>
                                                    <CustomInput
                                                        labelText="電話番号"
                                                        id="phoneNo"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        error={false}
                                                        success={false}
                                                        inputProps=""
                                                        labelProps=""
                                                        handleInputChange={this.props.handleInputChange}
                                                    />
                                                </ItemGrid>
                                            </Grid>
                                        </div>
                                    }
                                    footer={
                                        <Button variant="raised" style={{ background: "linear-gradient(60deg, #ab47bc, #8e24aa)", color: "#FFF" }} onClick={(this.entryClick.bind(this, preEntry))}>
                                            申し込む
                                        </Button>
                                    }
                                />
                            </ItemGrid>
                        </Grid>
                        {data && <p>仮登録API通信完了（時間見つけて重複登録とかレスポンスに応じた出し分けしたい）</p>}
                        {loading && <p>Loading...</p>}
                        {error && <p>Error :( Please try again</p>}
                    </div>)}
            </Mutation>
        );
    }

    private entryClick = (preEntry: any) => {
        preEntry({
            variables: {
                tournamentId: this.props.match.params.id,
                teamName: this.props.tournament.entry.teamName,
                representiveName: this.props.tournament.entry.leaderName,
                email: this.props.tournament.entry.email,
                phone: this.props.tournament.entry.phoneNo
            }
        })
        this.props.onEntry(parseInt(this.props.match.params.id, 10));
    }
}

export default withStyles<{} & ClassNames>(entryStyle)<EntryProps>(Entry);