import React from "react";
import { Box, Grid } from "@material-ui/core";
import { MaterialIcon } from "../Components";

const SocialMediaItem = ({ socialMedia }) => {
  const { icon, name, url, urlLabel } = socialMedia;

  return (
    <Box className="social_media_item">
      <Grid container spacing={1}>
        <Grid item>
          <MaterialIcon icon={icon} className="icon" />
        </Grid>
        <Grid item>
          <h4 className="name">{name}</h4>
          <a href={url} target="blank" className="url">
            {urlLabel}
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMediaItem;
