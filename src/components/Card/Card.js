import React from "react";
import { Box } from "@material-ui/core";

const Card = ({ suspend = 0, children, p = 0 }) => {
  return (
    <Box p={p} borderRadius={8} bottom={suspend * -1} className="suspense_card">
      {children}
    </Box>
  );
};

export default Card;
