import React from "react";
import { Box } from "@material-ui/core";

const BoardItem = ({ board }) => {
  const { image_url, name, role } = board;

  return (
    <Box component="div" className="board_item">
      <img src={image_url} className="margin-bottom-8 team_image" alt={name} />
      <h3 className="heading">{name}</h3>
      <p className="description">{role}</p>
    </Box>
  );
};

export default BoardItem;
