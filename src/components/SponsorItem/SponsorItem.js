import React from "react";
import { Box } from "@material-ui/core";
import styles from "./SponsorItem.module.scss";
import classNames from "classnames";

const SponsorItem = ({ sponsor }) => {
  const { image_url, url, name, width } = sponsor;
  return (
    <a href={url} target="blank">
      <Box
        component="div"
        className={classNames(
          "border-radius-8 padding-y-16 padding-x-16",
          styles["sponsor_item"]
        )}
      >
        <img
          src={image_url}
          alt={name}
          className={classNames(styles["sponsor_image"])}
          style={{
            width: width ? width : "75%",
          }}
        />
      </Box>
    </a>
  );
};

export default SponsorItem;
