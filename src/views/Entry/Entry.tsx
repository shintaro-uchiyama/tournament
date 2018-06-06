import * as React from "react";
import { Grid, Button, WithStyles, withStyles } from "@material-ui/core";

import RegularCard from "../../components/Cards/RegularCard";
import ItemGrid from "../../components/Grid/ItemGrid";
import CustomInput from "../../components/CustomInput/CustomInput";
import { Link } from 'react-router-dom'
import { StoreState } from '../../store/index';
import entryStyle from "../../assets/jss/material-tournament-react/entryStyle";

interface EntryProps {
    tournament: StoreState,
    onEntry: any,
    classes: any,
    match: any
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
                                            />
                                        </ItemGrid>
                                    </Grid>
                                </div>
                            }
                            footer={
                                <Button variant="raised" style={{ background: "linear-gradient(60deg, #ab47bc, #8e24aa)", color: "#FFF" }}>
                                    <Link to="/tournamentList" className={this.props.classes.link} onClick={this.entryClick}>申し込む</Link>
                                </Button>
                            }
                        />
                    </ItemGrid>
                </Grid>
            </div>
        );
    }

    private entryClick = () => {
        this.props.onEntry(parseInt(this.props.match.params.id, 10));
    }
}

export default withStyles<{} & ClassNames>(entryStyle)<EntryProps>(Entry);