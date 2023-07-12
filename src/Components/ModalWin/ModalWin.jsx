import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useCustomStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalWin = ({ isAddModalOpen, openAddModal, closeAddModal, children }) => {
  const classes = useCustomStyles()

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isAddModalOpen}
        onClose={closeAddModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isAddModalOpen}>
          <div className={classes.paper}>
            {children}
          </div>
        </Fade>
      </Modal>
  );
};

export default ModalWin;
