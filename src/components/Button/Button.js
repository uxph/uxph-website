import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { Link } from "gatsby";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ children, href = "/", ...props }) => {
  if (props.variant === "outlined") {
    // ? outlined button
    return (
      <MuiButton
        className={classNames(styles["button"], styles["outlined"])}
        to={href}
        component={Link}
        {...props}
      >
        {children}
      </MuiButton>
    );
  } else {
    // ? standard button
    return (
      <MuiButton
        className={classNames(styles["button"])}
        to={href}
        component={Link}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
};

export default Button;
