import React from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./SocialMediaItem.module.scss";
import classNames from "classnames";
import { MaterialIcon } from "../Components";

const SocialMediaItem = ({ socialMedia }) => {
  const { icon, name, url, urlLabel } = socialMedia;

  return (
    <Box className={styles["social_media_item"]}>
      <Grid container spacing={1}>
        <Grid item>
          <MaterialIcon icon={icon} className={classNames(styles["icon"])} />
        </Grid>
        <Grid item>
          <h4 className={styles["name"]}>{name}</h4>
          <a href={url} target="blank" className={styles["url"]}>
            {urlLabel}
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMediaItem;
