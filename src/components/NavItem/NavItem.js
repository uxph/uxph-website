import React from "react";
import { Box } from "@material-ui/core";
import _ from "lodash";
import styles from "./NavItem.module.scss";
import classNames from "classnames";

const NavItem = ({ nav, active }) => {
  const { label, url, subNav, direction } = nav;
  return (
    <Box
      component="li"
      m={0}
      p={0}
      className={classNames(styles["nav_item"], {
        [`${styles["active"]}`]: active === url,
      })}
    >
      {!_.isNull(url) ? (
        <a href={url} className="d-block padding-y-16 padding-x-16">
          {label}
        </a>
      ) : (
        <span href={url} className="d-block padding-y-16 padding-x-16">
          {label}
        </span>
      )}
      {subNav && (
        <Box
          className={styles["sub_nav"]}
          style={{
            transformOrigin: direction === "left" ? "top left" : "top right",
            right: direction === "left" ? "auto" : "0",
          }}
        >
          <Box
            className={classNames(
              styles["sub_nav_container"],
              "border-radius-8"
            )}
          >
            {subNav.map((subNavItem, index) => {
              return (
                <Box
                  px={3}
                  py={2}
                  className={classNames(
                    styles["sub_nav_item"],
                    "border-radius-4"
                  )}
                  key={index}
                >
                  <a href={subNavItem.url} key={index}>
                    <p>{subNavItem.label}</p>
                    <small className="d-block text-gray">
                      {subNavItem.subLabel}
                    </small>
                  </a>
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
