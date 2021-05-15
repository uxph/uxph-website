import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "../Components";

const FeaturedItem = ({ item }) => {
  const { image, heading, description, url } = item;
  return (
    <Box component="div" className="featured_item">
      <img
        src={image}
        className="margin-bottom-24 featured_image"
        alt={heading}
      />
      <h3 className="margin-bottom-16 font-size-24 text-dark">{heading}</h3>
      <p className="margin-bottom-16">{description}</p>
      {url && <Button>something</Button>}
    </Box>
  );
};
export default FeaturedItem;
