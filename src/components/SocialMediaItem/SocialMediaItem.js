import React from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./SocialMediaItem.module.scss";
import classNames from "classnames";

const SocialMediaItem = ({ socialMedia }) => {
  const { icon, name, url, urlLabel } = socialMedia;

  return (
    <Box className={styles["social_media_item"]}>
      <Grid container spacing={1}>
        <Grid item>
          <i className={classNames(icon, styles["icon"])}></i>
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
