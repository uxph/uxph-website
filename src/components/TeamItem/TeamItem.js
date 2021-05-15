import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TeamItem = ({ team }) => {
  const { image_url, name, role, buttonLabel } = team;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Box component="div" className="team_item" onClick={toggle}>
      {buttonLabel}

      <img src={image_url} className="margin-bottom-8 team_image" alt={name} />
      <h3 className="heading">{name}</h3>
      <p className="description">{role}</p>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody> Lorem ipsum dolor sit amet. </ModalBody>
        <ModalFooter> </ModalFooter>
      </Modal>
    </Box>
  );
};

export default TeamItem;
