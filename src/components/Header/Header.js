import React from "react";
import { Box, Container } from "@material-ui/core";

const Header = ({ children, bgImage }) => {
  return (
    <Box
      component="section"
      py={12}
      className="bg-dark-blue"
      style={{
        background: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};

export default Header;
