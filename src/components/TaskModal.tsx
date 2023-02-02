import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { ModalButton, ModalButtons } from "../styled/Modal";
import { WrapperModal } from "../styled/Wrappers";
import {
  removeTask,
  setIdRemoveTask,
  showModal,
} from "../store/reducers/TaskSlice";

const TaskModal: React.FC = () => {
  const { modal, idRemoveTask } = useAppSelector((state) => state.taskReducer);

  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(showModal());
    dispatch(setIdRemoveTask(0));
  };

  const onRemoveTask = (): void => {
    dispatch(removeTask(idRemoveTask));
    dispatch(showModal());
    dispatch(setIdRemoveTask(0));
  };

  return (
    <Modal
      open={modal}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
    >
      <WrapperModal component="div">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete it?
        </Typography>
        <ModalButtons>
          <ModalButton
            variant="contained"
            color="success"
            onClick={() => onRemoveTask()}
          >
            Yes
          </ModalButton>
          <ModalButton
            onClick={() => handleClose()}
            variant="outlined"
            color="error"
          >
            No
          </ModalButton>
        </ModalButtons>
      </WrapperModal>
    </Modal>
  );
};

export default TaskModal;
