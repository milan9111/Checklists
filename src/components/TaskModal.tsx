import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalButton, ModalButtons } from "../styled/Modal";
import { WrapperModal } from "../styled/Wrappers";

const TaskModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <WrapperModal component="div">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete it?
        </Typography>
        <ModalButtons>
          <ModalButton variant="contained" color="success">
            Yes
          </ModalButton>
          <ModalButton variant="outlined" color="error">
            No
          </ModalButton>
        </ModalButtons>
      </WrapperModal>
    </Modal>
  );
};

export default TaskModal;
