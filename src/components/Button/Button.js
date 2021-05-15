import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { Link } from "gatsby";
import classNames from "classnames";

const Button = ({ children, href = "/", className = "", ...props }) => {
  if (props.variant === "outlined") {
    // ? outlined button
    return (
      <MuiButton
        className={classNames("button outlined", className)}
        to={href}
        component={Link}
        {...props}
      >
        {children}
      </MuiButton>
    );
  } else if (props.variant === "white") {
    // ? outlined button
    return (
      <MuiButton
        className={classNames("button white", className)}
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
        className={classNames("button", className)}
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
