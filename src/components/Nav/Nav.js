import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import styles from "./Nav.module.scss";
import { NavItem } from "../Components";
import nav_items from "../../data/nav.json";

const Nav = ({ active }) => {
  return (
    <Box component="nav" className={styles["navigation"]}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item md={3}>
            <a href="/">
              <img
                src="/images/brand/uxph_logo.svg"
                alt="UXPH logo"
                className="width-128"
              />
            </a>
          </Grid>
          <Grid item container md={9} justify="flex-end">
            <Box component="ul" className={styles["nav_items"]}>
              {nav_items.map((item, index) => {
                return <NavItem nav={item} active={active} key={index} />;
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Nav;
