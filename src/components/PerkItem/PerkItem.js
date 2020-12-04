import React from "react";
import { Box } from "@material-ui/core";
import styles from "./PerkItem.module.scss";
import { Person } from "@material-ui/icons";
import classNames from "classnames";
const PerkItem = ({ perk }) => {
  const { heading, description } = perk;
  return (
    <Box component="div" className={classNames(styles["perk_item"], "d-flex")}>
      <Box
        component="div"
        className={classNames(styles["perk_icon"], "margin-right-16")}
      >
        <Person />
      </Box>
      <Box component="div">
        <h3 className="margin-bottom-12">{heading}</h3>
        <p className="text-gray">{description}</p>
      </Box>
    </Box>
  );
};

export default PerkItem;
