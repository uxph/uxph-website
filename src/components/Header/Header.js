import React from "react";
import { Box, Container } from "@material-ui/core";
import classNames from "classnames";

const Header = ({
  children,
  py = 12,
  pb = 12,
  className = "",
  relative = false,
}) => {
  return (
    <Box
      component="section"
      py={py}
      pb={pb}
      className={classNames("page-header", className)}
    >
      <Container
        maxWidth="lg"
        className={classNames({
          "position-relative": relative,
        })}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Header;
