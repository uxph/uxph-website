import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import { Link } from "gatsby";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import { NavItem } from "../Components";
import nav_items from "../../data/nav.json";
import { navBreakpoint } from "../../helpers/responsive";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import $ from "jquery";

const Nav = ({ active }) => {
  const isBreakpoint = useMediaQuery({ query: navBreakpoint });

  return (
    <Box component="nav" className="navigation">
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item container md={isBreakpoint ? 12 : 2} alignItems="center">
            {isBreakpoint && (
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  $(".mobile_navigation").removeClass("hide");
                  $(".close").removeClass("hide");
                }}
              >
                <MenuRounded id="menu" className="menu" />
              </Link>
            )}
            <Link to="/">
              <img
                src="/images/brand/uxph_logo.svg"
                alt="UXPH logo"
                className={classNames("width-128", {
                  "margin-left-16 margin-bottom-16 margin-top-24": isBreakpoint,
                })}
              />
            </Link>
          </Grid>
          {!isBreakpoint && (
            <Grid item container md={10} justify="flex-end">
              <Box component="ul" className="nav_items">
                {nav_items.map((item, index) => {
                  return <NavItem nav={item} active={active} key={index} />;
                })}
              </Box>
            </Grid>
          )}
        </Grid>
        {isBreakpoint && (
          <Box component="div" className="mobile_navigation hide">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                $(".mobile_navigation").addClass("hide");
                $(".close").addClass("hide");
              }}
            >
              <Box component="div" className="overlay" id="overlay"></Box>
            </Link>

            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                $(".mobile_navigation").addClass("hide");
                $(".close").addClass("hide");
              }}
            >
              <CloseRounded className="close hide" id="close" />
            </Link>
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
                              <Link to={subNavItem.url} key={subIndex}>
                                <p className="text-white">
                                  <strong>{subNavItem.label}</strong>
                                </p>
                                <small className="d-block text-gray">
                                  {subNavItem.subLabel}
                                </small>
                              </Link>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                } else {
                  return (
                    <Link to={item.url} key={index}>
                      <Box
                        component="li"
                        px={5}
                        py={2}
                        key={index}
                        className={classNames("text-white", {
                          active: active === item.url,
                        })}
                      >
                        <strong>{item.label}</strong>
                      </Box>
                    </Link>
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
