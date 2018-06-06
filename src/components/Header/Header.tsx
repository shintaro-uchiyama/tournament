import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import headerStyle from "../../assets/jss/material-tournament-react/headerStyle";
import { withStyles, WithStyles } from '@material-ui/core/styles';

type ClassNames = keyof typeof headerStyle;

const Header =
    (props: WithStyles<ClassNames>) => {
        const classes = props.classes;
        return (
            <div>
                <AppBar color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Tennis tournament
                        </Typography>
                        <Button color="inherit" size="small"><Link to="/tournamentList" className={classes.link}>List</Link></Button>
                        <Button color="inherit" size="small"><Link to="/entry/1" className={classes.link}>Entry</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    };

export default withStyles(headerStyle)<{}>(Header)