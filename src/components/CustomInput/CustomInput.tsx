import * as React from "react";
import { WithStyles, withStyles, FormControl, InputLabel, Input } from "@material-ui/core";
import { Clear, Check } from "@material-ui/icons";
import * as cx from "classnames";

import customInputStyle from "../../assets/jss/material-tournament-react/customInputStyle";

interface CustomInputProps {
  formControlProps: any,
  labelText: any,
  id: string,
  labelProps: string,
  inputProps: string,
  error: boolean,
  success: boolean,
}

type ClassNames = keyof typeof customInputStyle;
const CustomInput = (props: CustomInputProps & WithStyles<ClassNames>) => {
  const classes = props.classes;

  const labelClasses = cx({
    [" " + classes.labelRootError]: props.error,
    [" " + classes.labelRootSuccess]: props.success && !props.error
  });
  const underlineClasses = cx({
    [classes.underlineError]: props.error,
    [classes.underlineSuccess]: props.success && !props.error,
    [classes.underline]: true
  });
  const marginTop = cx({
    [classes.marginTop]: props.labelText === undefined
  });
  return (
    <FormControl
      {...props.formControlProps}
      className={props.formControlProps.className + " " + classes.formControl}
    >
      {props.labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={props.id}
          {...props.labelProps}
        >
          {props.labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={props.id}
        {...props.inputProps}
      />
      {props.error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : props.success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

export default withStyles<{} & ClassNames>(customInputStyle)(CustomInput);