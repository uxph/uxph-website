import React from "react";
import { Box, Container } from "@material-ui/core";

const Header = ({ children, bgImage, py = 12 }) => {
  return (
    <Box
      component="section"
      py={py}
      style={{
        background: `url(${bgImage}),rgba(0,0,0,0.72)`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};

export default Header;
