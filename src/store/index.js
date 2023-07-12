import { createStore } from 'easy-peasy';
import authModel from './auth-model';
import officersModel from './officers-model'
import theftMessageModel from './theft-message-model'

const model = {
  auth: authModel,
  officers: officersModel,
  theftMessage: theftMessageModel
};

const easyStore = createStore(model);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept(model, () => {
      easyStore.reconfigure(model);
    });
  }
}

export const refreshPage = async () => {
  await easyStore.persist.flush();

};

export const deleteStoreData = async () => {
  await easyStore.persist.clear()
}

export default easyStore;