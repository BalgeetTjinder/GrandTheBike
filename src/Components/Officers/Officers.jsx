import React from "react";
import Officer from "./Officer.jsx";
import ModalWin from "Components/ModalWin/ModalWin.jsx";
import UserCreateForm from "Components/UserCreate/UserCreateForm.jsx";
import EditOfficer from "./Edit/EditOfficer.jsx";
import useStyles from './Officers.module'
import {StyledButton} from 'style/components/index.js'

const Officers = ({
  officers,
  editOfficer,
  deleteOfficer,
  isAddModalOpen,
  isEditModalOpen,
  openAddModal,
  closeAddModal,
  onAddOfficerSubmit,
  selectedOfficerId,
  openEditOfficer,
  closeEditOfficer,
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.officers}>
        {officers.map((officer) => (
          <Officer
            key={officer._id}
            officer={officer}
            editOfficer={editOfficer}
            deleteOfficer={deleteOfficer}
            openEditOfficer={openEditOfficer}
          />
        ))}
      </div>
      {isAddModalOpen && (
        <ModalWin
          isAddModalOpen={isAddModalOpen}
          openAddModal={openAddModal}
          closeAddModal={closeAddModal}
        >
          <UserCreateForm
            onSubmit={onAddOfficerSubmit}
            buttonName="Добавить сотрудника"
          />
        </ModalWin>
      )}
      {selectedOfficerId && (
        <EditOfficer
          officers={officers}
          selectedOfficerId={selectedOfficerId}
          editOfficer={editOfficer}
          closeEditOfficer={closeEditOfficer}
          isEditOfficerOpen={isEditModalOpen}
        />
      )}
      <StyledButton onClick={openAddModal}>
        Добавить сотрудника
      </StyledButton>
    </>
  );
};

export default Officers;
