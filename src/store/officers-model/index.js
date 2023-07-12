import { thunk, action } from 'easy-peasy';
import { handlePromise } from 'Utils/data-utils';
import { officersAPI } from 'Services/api';
import HttpStatusCode from 'http-status-typed';


const officersModel = {
  officersState: {
    officers: [], 
  },

  
  getOfficersList: thunk(async (actions, payload, { getState, getStoreState }) => {
    
    const { token } = getStoreState().auth.authState;

    const [getOfficersData, getOfficersError] = await handlePromise(officersAPI.getOfficers(token));

    if (!getOfficersError && getOfficersData.status === HttpStatusCode.OK) {
      actions.updateOfficerList(getOfficersData.data.officers);
    } else alert(getOfficersError);
  }),
  addNewOfficer: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;

    const [addNewOfficerData, addNewOfficerError] = await handlePromise(
      officersAPI.addNewOfficer(token, payload)
    );


    if (!addNewOfficerError && addNewOfficerData.status === HttpStatusCode.OK) {
      actions.getOfficersList();
    } else alert(addNewOfficerError);
  }),
  editOfficer: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;

    const [editOfficerData, editOfficerError] = await handlePromise(
      officersAPI.editOfficer(token, payload.officerId, payload.officerData)
    );

    if (!editOfficerError && editOfficerData.status === HttpStatusCode.OK) {
      actions.getOfficersList();
    } else alert(editOfficerError);
  }),
  deleteOfficer: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;
    const [deleteOfficerData, deleteOfficerError] = await handlePromise(
      officersAPI.deleteOfficer(token, payload.officerId)
    );

    if (!deleteOfficerError && deleteOfficerData.status === HttpStatusCode.OK) {
      actions.getOfficersList();
    } else alert(deleteOfficerError);
  }),
  updateOfficerList: action((state, payload) => {
    state.officersState = { ...state.officersState, officers: payload };
  }),
};

export default officersModel;
