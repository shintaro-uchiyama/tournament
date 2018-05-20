import { withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import tournamentRoutes from "../../routes/tournament";
import styles from "../../assets/jss/material-tournament-react/appStyle";

const switchRoutes = (
  <Switch>
    {tournamentRoutes.map((prop, key) => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      }
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

type ClassNames = keyof typeof styles;
class App extends React.Component<{} & WithStyles<ClassNames>, {}> {
  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel}>
          <Header
          />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)(App);