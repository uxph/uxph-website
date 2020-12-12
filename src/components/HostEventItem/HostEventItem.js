import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "../Components";
import styles from "./HostEventItem.module.scss";

const HostEventItem = ({ host }) => {
  const { heading, description } = host;
  return (
    <Box component="div" className={styles["host_item"]}>
      <h3 className="margin-bottom-16 font-size-24 text-dark">{heading}</h3>
      <p className="margin-bottom-16">{description}</p>
      <Button variant="contained">Download Package</Button>
    </Box>
  );
};

export default HostEventItem;
