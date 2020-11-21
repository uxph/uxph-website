import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ children, ...props }) => {
  if (props.variant === "outlined") {
    // ? outlined button
    return (
      <MuiButton
        className={classNames(styles["button"], styles["outlined"])}
        {...props}
      >
        {children}
      </MuiButton>
    );
  } else {
    // ? standard button
    return (
      <MuiButton className={classNames(styles["button"])} {...props}>
        {children}
      </MuiButton>
    );
  }
};

export default Button;
