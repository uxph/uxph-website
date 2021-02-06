import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styles from "./TeamItem.module.scss";
import classNames from "classnames";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const TeamItem = ({ team }) => {
  const { image_url, name, role, buttonLabel } = team;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Box component="div" className={styles["team_item"]} onClick={toggle} >
      {buttonLabel}
    
      <img
        src={image_url}
        className={classNames("margin-bottom-8", styles["team_image"])}
        alt={name}
      />
      <h3 className={styles["heading"]}>{name}</h3>
      <p className={styles["description"]}>{role}</p>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>  Lorem ipsum dolor sit amet.  </ModalBody>
        <ModalFooter> </ModalFooter>
      </Modal>

     
    </Box>

  );
};

export default TeamItem;
