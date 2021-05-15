import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { Link } from "gatsby";

const Button = ({ children, href = "/", ...props }) => {
  if (props.variant === "outlined") {
    // ? outlined button
    return (
      <MuiButton
        className="button outlined"
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
      <MuiButton className="button" to={href} component={Link} {...props}>
        {children}
      </MuiButton>
    );
  }
};

export default Button;
