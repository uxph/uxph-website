import React from "react";
import { Box, Grid } from "@material-ui/core";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
} from "@material-ui/icons";
import styles from "./SocialMediaItem.module.scss";
import classNames from "classnames";

const SocialMediaItem = ({ socialMedia }) => {
  const { icon, name, url, urlLabel } = socialMedia;

  const socialMediaIcons = {
    facebook: <Facebook className={classNames(styles["icon"])} />,
    twitter: <Twitter className={classNames(styles["icon"])} />,
    instagram: <Instagram className={classNames(styles["icon"])} />,
    linkedin: <LinkedIn className={classNames(styles["icon"])} />,
    email: <Email className={classNames(styles["icon"])} />,
  };

  return (
    <Box className={styles["social_media_item"]}>
      <Grid container spacing={1}>
        <Grid item>{socialMediaIcons[icon]}</Grid>
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
