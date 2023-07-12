import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Officers from "./Officers.jsx";
import { useStoreActions, useStoreState } from 'easy-peasy';

const OfficersContainer = () => {
  const isAuth = useStoreState(state => state.auth.authState.isAuth);
  const navigate = useNavigate();

  const officers = useStoreState(state => state.officers.officersState.officers);
  const getOfficersList = useStoreActions(action => action.officers.getOfficersList);
  const editOfficer = useStoreActions(action => action.officers.editOfficer);
  const deleteOfficer = useStoreActions(action => action.officers.deleteOfficer);
  const addNewOfficer = useStoreActions(action => action.officers.addNewOfficer);
  
  useEffect(() => {
    getOfficersList();
  }, []);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const onAddOfficerSubmit = (officerData) => {
    closeAddModal();
    addNewOfficer(officerData);
  };

  const [selectedOfficerId, setSelectedOfficerId] = useState(null);
  const openEditOfficer = (id) => {setSelectedOfficerId(id); setIsEditModalOpen(true)};
  const closeEditOfficer = () => {setSelectedOfficerId(null); setIsEditModalOpen(false)};

  useEffect(() => {
    getOfficersList();
  }, []);

  if (!isAuth) 
    navigate("/");

  return (
    <Officers
      officers={officers}
      isAddModalOpen={isAddModalOpen}
      isEditModalOpen={isEditModalOpen}
      selectedOfficerId={selectedOfficerId}
      editOfficer={editOfficer}
      deleteOfficer={deleteOfficer}
      onAddOfficerSubmit={onAddOfficerSubmit}
      openAddModal={openAddModal}
      closeAddModal={closeAddModal}
      openEditOfficer={openEditOfficer}
      closeEditOfficer={closeEditOfficer}
      navigate={navigate}
    />
  );
};

export default OfficersContainer;