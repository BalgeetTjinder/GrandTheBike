import { thunk, action } from 'easy-peasy';
import { handlePromise } from 'Utils/data-utils';
import { casesAPI } from 'Services/api';
import config from 'Src/config';
import HttpStatusCode  from 'http-status-typed';

const { MY_CLIENT_ID } = config;

const theftMessageModel = {
  theftMessageState: {
    thefts: [],
  },
  addNewUnauthorizedMessage: thunk(async (actions, payload, { getState, getStoreState }) => {
    const newMessage = {
      status: 'new',
      licenseNumber: payload.licenseNumber,
      color: payload.color,
      type: payload.type,
      ownerFullName: payload.ownerFullName,
      description: payload.description,
      clientId: MY_CLIENT_ID,
    };

    const [addNewUnauthorizedMessageData, addNewUnauthorizedMessageError] = await handlePromise(
      casesAPI.addNewUnauthorizedMessage(newMessage)
    );

    if (!addNewUnauthorizedMessageError && addNewUnauthorizedMessageData.status === HttpStatusCode.OK) {
      alert('Ваше сообщение отправлено');
      actions.addNewMessageSuccess(addNewUnauthorizedMessageData.data.data);
    } else alert(addNewUnauthorizedMessageError);
  }),
  addNewMessage: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;
    const newMessage = {
      status: 'new',
      licenseNumber: payload.licenseNumber,
      color: payload.color,
      type: payload.type,
      ownerFullName: payload.ownerFullName,
      officer: payload.officer,
      description: payload.description,
    };

    const [addNewMessageData, addNewMessageError] = await handlePromise(
      casesAPI.addNewMessage(token, newMessage)
    );

    if (!addNewMessageError && addNewMessageData.status === 200) {
      alert('Ваше сообщение отправлено');
      actions.addNewMessageSuccess(addNewMessageData.data.data);
    } else alert(addNewMessageError);
  }),
  getTheftMessages: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;
    
    const [getAllMessagesData, getAllMessagesError] = await handlePromise(
      casesAPI.getAllMessages(token)
    );

    if (!getAllMessagesError && getAllMessagesData.status === HttpStatusCode.OK) {
      actions.addThefts(getAllMessagesData.data.data);
    } else alert(getAllMessagesError);
  }),
  deleteMessage: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;

    const [deleteMessageData, deleteMessageError] = await handlePromise(
      casesAPI.deleteMessage(token, payload.messageId)
    );

    if (!deleteMessageError) {
      actions.deleteMessageSuccess(deleteMessageData.config.url.substring(7, 31));
    } else alert(deleteMessageError);
  }),
  editMessage: thunk(async (actions, payload, { getState, getStoreState }) => {
    const { token } = getStoreState().auth.authState;
    const [editMessageData, editMessageError] = await handlePromise(
      casesAPI.editMessage(token, payload.messageId, {
        ...payload.newMessage,
      })
    );

    if (!editMessageError) {
      actions.editMessageSuccess(editMessageData.data.data);
    } else alert(editMessageError);
  }),
  addThefts: action((state, payload) => {
    state.theftMessageState = { ...state.theftMessageState, thefts: payload };
  }),
  deleteMessageSuccess: action((state, payload) => {
    state.theftMessageState = {
      ...state.theftMessageState,
      thefts: state.theftMessageState.thefts.filter((theft) => theft._id !== payload),
    };
  }),
  addNewMessageSuccess: action((state, payload) => {
    state.theftMessageState = {
      ...state.theftMessageState,
      thefts: [...state.theftMessageState.thefts, payload],
    };
  }),
  editMessageSuccess: action((state, payload) => {
    state.theftMessageState = {
      ...state.theftMessageState,
      thefts: state.theftMessageState.thefts.map((theft) => {
        if (theft.id === payload.id) {
          return payload;
        }
        return theft;
      }),
    };
  }),
};

export default theftMessageModel;
