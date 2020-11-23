import React from "react";
import { Box } from "@material-ui/core";
import styles from "./SuspenseCard.module.scss";

const SuspenseCard = ({ suspend = 0, children }) => {
  return (
    <Box mt={suspend * -1} p={3} className={styles["suspense_card"]}>
      {children}
    </Box>
  );
};

export default SuspenseCard;
