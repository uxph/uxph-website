import React, { useEffect } from "react";
import { Container, Box, Grid } from "@material-ui/core";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import styles from "./Nav.module.scss";
import { NavItem } from "../Components";
import nav_items from "../../data/nav.json";
import { navBreakpoint } from "../../helpers/responsive";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import $ from "jquery";

const Nav = ({ active }) => {
  const isBreakpoint = useMediaQuery({ query: navBreakpoint });

  useEffect(() => {
    $("#close").on("click", function () {
      $(`.${styles["mobile_navigation"]}`).addClass(`${styles["hide"]}`);
      $(`.${styles["close"]}`).addClass(`${styles["hide"]}`);
    });

    $("#overlay").on("click", function () {
      $(`.${styles["mobile_navigation"]}`).addClass(`${styles["hide"]}`);
      $(`.${styles["close"]}`).addClass(`${styles["hide"]}`);
    });

    $("#menu").on("click", function () {
      $(`.${styles["mobile_navigation"]}`).removeClass(`${styles["hide"]}`);
      $(`.${styles["close"]}`).removeClass(`${styles["hide"]}`);
    });
  }, []);

  return (
    <Box component="nav" className={styles["navigation"]}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item container md={isBreakpoint ? 12 : 2} alignItems="center">
            {isBreakpoint && (
              <MenuRounded id="menu" className={styles["menu"]} />
            )}
            <a href="/">
              <img
                src="/images/brand/uxph_logo.svg"
                alt="UXPH logo"
                className={classNames("width-128", {
                  "margin-left-16 margin-bottom-16 margin-top-24": isBreakpoint,
                })}
              />
            </a>
          </Grid>
          {!isBreakpoint && (
            <Grid item container md={10} justify="flex-end">
              <Box component="ul" className={styles["nav_items"]}>
                {nav_items.map((item, index) => {
                  return <NavItem nav={item} active={active} key={index} />;
                })}
              </Box>
            </Grid>
          )}
        </Grid>
        {isBreakpoint && (
          <Box
            component="div"
            className={classNames(styles["mobile_navigation"], styles["hide"])}
          >
            <Box
              component="div"
              className={styles["overlay"]}
              id="overlay"
            ></Box>
            <CloseRounded
              className={classNames(styles["close"], styles["hide"])}
              id="close"
            />
            <Box component="ul" my={10}>
              {nav_items.map((item, index) => {
                if (item.subNav) {
                  return (
                    <Box
                      component="li"
                      px={5}
                      py={2}
                      key={index}
                      className="text-white"
                    >
                      <span className="text-gray">{item.label}</span>
                      <Box component="div" ml={2}>
                        {item.subNav.map((subNavItem, subIndex) => {
                          return (
                            <Box component="div" py={1} key={subIndex}>
                              <a href={subNavItem.url} key={subIndex}>
                                <p className="text-white">
                                  <strong>{subNavItem.label}</strong>
                                </p>
                                <small className="d-block text-gray">
                                  {subNavItem.subLabel}
                                </small>
                              </a>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                } else {
                  return (
                    <a href={item.url} key={index}>
                      <Box
                        component="li"
                        px={5}
                        py={2}
                        key={index}
                        className={classNames("text-white", {
                          [`${styles["active"]}`]: active === item.url,
                        })}
                      >
                        <strong>{item.label}</strong>
                      </Box>
                    </a>
                  );
                }
              })}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Nav;
