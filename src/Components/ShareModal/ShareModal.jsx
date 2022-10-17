import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ShareModal = ({ open, toggle, modalHeader, modalBody, size }) => {
  return (
    <Modal isOpen={open} toggle={toggle} centered={true} size={size}>
      {modalHeader && <ModalHeader toggle={toggle}>{modalHeader}</ModalHeader>}
      <ModalBody>{modalBody}</ModalBody>
    </Modal>
  );
};

export default ShareModal;
