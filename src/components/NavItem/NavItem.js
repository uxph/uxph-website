import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "gatsby";
import _ from "lodash";
import classNames from "classnames";

const NavItem = ({ nav, active }) => {
  const { label, url, subNav, direction } = nav;
  return (
    <Box
      component="li"
      m={0}
      p={0}
      className={classNames("nav_item", {
        active: active === url,
      })}
    >
      {!_.isNull(url) ? (
        <Link to={url} className="d-block padding-y-16 padding-x-16">
          {label}
        </Link>
      ) : (
        <span className="d-block padding-y-16 padding-x-16">{label}</span>
      )}
      {subNav && (
        <Box
          className="sub_nav"
          style={{
            transformOrigin: direction === "left" ? "top left" : "top right",
            right: direction === "left" ? "auto" : "0",
          }}
        >
          <Box className="sub_nav_container" borderRadius={8}>
            {subNav.map((subNavItem, index) => {
              return (
                <Box
                  px={3}
                  py={2}
                  className="sub_nav_item"
                  key={index}
                  borderRadius={4}
                >
                  <Link to={subNavItem.url} key={index}>
                    <p>{subNavItem.label}</p>
                    <small className="d-block text-gray">
                      {subNavItem.subLabel}
                    </small>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavItem;
