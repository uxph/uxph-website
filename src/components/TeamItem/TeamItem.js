import React from "react";
import { Box } from "@material-ui/core";

const TeamItem = ({ team }) => {
  const { image_url, name, role } = team;

  return (
    <Box component="div" className="team_item">
      <img src={image_url} className="margin-bottom-8 team_image" alt={name} />
      <h3 className="heading">{name}</h3>
      <p className="description">{role}</p>
    </Box>
  );
};

export default TeamItem;
