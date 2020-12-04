import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "../Components";
import styles from "./FeaturedItem.module.scss";
import classNames from "classnames";

const FeaturedItem = ({ item }) => {
  const { image, heading, description, url } = item;
  return (
    <Box component="div" className={styles["featured_item"]}>
      <img
        src={image}
        className={classNames("margin-bottom-24", styles["featured_image"])}
        alt={heading}
      />
      <h3 className="margin-bottom-16 font-size-24 text-dark">{heading}</h3>
      <p className="margin-bottom-16">{description}</p>
      {url && <Button>something</Button>}
    </Box>
  );
};
export default FeaturedItem;
