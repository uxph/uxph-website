import React from "react";
import { Box, Container } from "@material-ui/core";

const Header = ({ children, bgImage, py = 12 }) => {
  return (
    <Box component="section" py={py} className="page-header">
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default Header;
