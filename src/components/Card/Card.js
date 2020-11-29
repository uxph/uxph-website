import React from "react";
import { Box } from "@material-ui/core";
import styles from "./Card.module.scss";

const Card = ({ suspend = 0, children, hasPadding = true }) => {
  return (
    <Box
      mt={suspend * -1}
      p={hasPadding ? 3 : 0}
      className={styles["suspense_card"]}
    >
      {children}
    </Box>
  );
};

export default Card;
