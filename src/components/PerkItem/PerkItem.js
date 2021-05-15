import React from "react";
import { Box } from "@material-ui/core";
import { Person } from "@material-ui/icons";
const PerkItem = ({ perk }) => {
  const { heading, description } = perk;
  return (
    <Box component="div" className="perk_item" display="flex">
      <Box component="div" className="perk_icon" mr={2}>
        <Person />
      </Box>
      <Box component="div">
        <h3 className="margin-bottom-12">{heading}</h3>
        <p className="text-gray">{description}</p>
      </Box>
    </Box>
  );
};

export default PerkItem;
