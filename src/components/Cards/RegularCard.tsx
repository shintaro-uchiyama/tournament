import * as React from "react";
import {
  WithStyles,
  withStyles,
  Card,
  CardContent,
  CardHeader,
  CardActions
} from "@material-ui/core";
import * as cx from "classnames";

import regularCardStyle from "../../assets/jss/material-tournament-react/regularCardStyle";

interface RegularCardProps {
  headerColor: string,
  plainCard: boolean,
  cardTitle: string,
  cardSubtitle: string,
  content: any,
  footer: any,
}

type ClassNames = keyof typeof regularCardStyle;

const RegularCard =
  (props: RegularCardProps & WithStyles<ClassNames>) => {
    const classes = props.classes;

    const plainCardClasses = cx({
      [" " + classes.cardPlain]: props.plainCard
    });
    const cardPlainHeaderClasses = cx({
      [" " + classes.cardPlainHeader]: props.plainCard
    });

    return (
      <Card className={classes.card + plainCardClasses} style={{ overflow: "visible" }}>
        <CardHeader
          classes={{
            root:
              classes.cardHeader +
              " " +
              classes[props.headerColor + "CardHeader"] +
              cardPlainHeaderClasses,
            title: classes.cardTitle,
            subheader: classes.cardSubtitle
          }}
          title={props.cardTitle}
          subheader={props.cardSubtitle}
        />
        <CardContent>{props.content}</CardContent>
        {props.footer !== undefined ? (
          <CardActions className={classes.cardActions}>{props.footer}</CardActions>
        ) : null}
      </Card>
    );
  }

export default withStyles<{} & ClassNames>(regularCardStyle)<RegularCardProps>(RegularCard);