import React from "react";
import { Box } from "@material-ui/core";
import { ArrowUpwardRounded } from "@material-ui/icons";

const BackToTop = () => {
  return (
    <Box id="back-to-top" className="back_to_top" borderRadius="50%">
      <ArrowUpwardRounded className="arrow_icon" />
    </Box>
  );
};

export default BackToTop;
