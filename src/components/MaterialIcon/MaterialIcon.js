import React from "react";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
} from "@material-ui/icons";

const MaterialIcon = ({ icon, ...props }) => {
  const icons = {
    facebook: <Facebook {...props} />,
    twitter: <Twitter {...props} />,
    instagram: <Instagram {...props} />,
    linkedin: <LinkedIn {...props} />,
    email: <Email {...props} />,
  };

  return icons[icon];
};

export default MaterialIcon;
