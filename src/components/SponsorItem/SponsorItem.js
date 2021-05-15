import React from "react";
import { Box } from "@material-ui/core";

const SponsorItem = ({ sponsor }) => {
  const { image_url, url, name, width } = sponsor;
  return (
    <a href={url} target="blank">
      <Box component="div" className="sponsor_item" borderRadius={8} p={2}>
        <img
          src={image_url}
          alt={name}
          className="sponsor_image"
          style={{
            width: width ? width : "75%",
          }}
        />
      </Box>
    </a>
  );
};

export default SponsorItem;
