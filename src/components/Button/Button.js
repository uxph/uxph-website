import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { Link } from "gatsby";
import classNames from "classnames";

const Button = ({
  children,
  href = "/",
  className = "",
  variant,
  isExternal = false,
  ...props
}) => {
  if (variant === "outlined") {
    // ? outlined button
    return (
      <MuiButton
        className={classNames("button outlined", className)}
        to={href}
        href={href}
        component={!isExternal ? Link : "a"}
        {...props}
      >
        {children}
      </MuiButton>
    );
  } else if (variant === "white") {
    // ? outlined button
    return (
      <MuiButton
        className={classNames("button white", className)}
        to={href}
        href={href}
        component={!isExternal ? Link : "a"}
        {...props}
      >
        {children}
      </MuiButton>
    );
  } else if (variant === "link") {
    // ? link button
    return (
      <MuiButton
        className={classNames("button link", className)}
        to={href}
        href={href}
        component={!isExternal ? Link : "a"}
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
        href={href}
        component={!isExternal ? Link : "a"}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
};

export default Button;
