import * as React from "react";
import { WithStyles, withStyles, FormControl, InputLabel, Input } from "@material-ui/core";
import { Clear, Check } from "@material-ui/icons";
import * as cx from "classnames";

import customInputStyle from "../../assets/jss/material-tournament-react/customInputStyle";

interface CustomInputProps {
  classes: any,
  formControlProps: any,
  labelText: any,
  id: string,
  labelProps: string,
  inputProps: string,
  error: boolean,
  success: boolean,
  handleInputChange: any
}

type ClassNames = keyof typeof customInputStyle;
class CustomInput extends React.Component<CustomInputProps & WithStyles<ClassNames>, {}> {
  public constructor(props: CustomInputProps) {
    super(props);
  }

  public render() {
    const classes = this.props.classes;

    const labelClasses = cx({
      [" " + classes.labelRootError]: this.props.error,
      [" " + classes.labelRootSuccess]: this.props.success && !this.props.error
    });
    const underlineClasses = cx({
      [classes.underlineError]: this.props.error,
      [classes.underlineSuccess]: this.props.success && !this.props.error,
      [classes.underline]: true
    });
    const marginTop = cx({
      [classes.marginTop]: this.props.labelText === undefined
    });

    return (
      <FormControl
        {...this.props.formControlProps}
        className={this.props.formControlProps.className + " " + classes.formControl}
      >
        {this.props.labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + labelClasses}
            htmlFor={this.props.id}
            {...this.props.labelProps}
          >
            {this.props.labelText}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses,
          }}
          id={this.props.id}
          {...this.props.inputProps}
          onChange={this.handleInputChange}
        />
        {this.props.error ? (
          <Clear className={classes.feedback + " " + classes.labelRootError} />
        ) : this.props.success ? (
          <Check className={classes.feedback + " " + classes.labelRootSuccess} />
        ) : null}
      </FormControl>
    );
  }

  private handleInputChange = (event: any) => {
    this.props.handleInputChange(this.props.id, event.target.value);
  }
}

export default withStyles<{} & ClassNames>(customInputStyle)(CustomInput);