import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import classNames from "classnames";

const Header = ({
  className = "",
  content = null,
  image = null,
  contentWidth = 5,
}) => {
  return (
    <Box
      component="section"
      py={12}
      className={classNames("page-header", className)}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center">
          <Grid item md={contentWidth} sm={12}>
            {content}
          </Grid>
          <Grid item md={12 - contentWidth} sm={12}>
            {image}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
