import React from "react";
import { Box } from "@material-ui/core";
import styles from "./TeamItem.module.scss";
import classNames from "classnames";

const TeamItem = ({ team }) => {
  const { image_url, name, role } = team;
  return (
    <Box component="div" className={styles["team_item"]}>
      <img
        src={image_url}
        className={classNames("margin-bottom-8", styles["team_image"])}
        alt={name}
      />
      <h3 className={styles["heading"]}>{name}</h3>
      <p className={styles["description"]}>{role}</p>
    </Box>
  );
};

export default TeamItem;
