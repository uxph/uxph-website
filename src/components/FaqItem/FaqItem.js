import React from "react";
import { Box } from "@material-ui/core";

const FaqItem = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <Box component="div" className="margin-bottom-32">
      <h3 className="margin-bottom-8 text-dark font-size-24">{question}</h3>
      {answer}
    </Box>
  );
};

export default FaqItem;
