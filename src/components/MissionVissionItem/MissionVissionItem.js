import React from "react";
import { Box } from "@material-ui/core";
import styles from "./MissionVission.module.scss";
import classNames from "classnames";
const MissionVissionItem = ({ mv }) => {
  const { heading, description } = mv;
  return (
    <Box component="div" className={classNames(styles["perk_item"], "d-flex")}>
      <Box component="div">
        <h3 className="margin-bottom-12">{heading}</h3>
        <p className="text-gray">{description}</p>
      </Box>
    </Box>
  );
};

export default MissionVissionItem;
