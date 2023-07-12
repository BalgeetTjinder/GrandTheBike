import { thunk, action } from 'easy-peasy';
import { handlePromise } from 'Utils/data-utils';
import { authAPI } from 'Services/api';
import config from 'Src/config';
import HttpStatusCode from 'http-status-typed';

const { MY_CLIENT_ID } = config;

const authorization = JSON.parse(localStorage.getItem('bikeTheftAuthorization'));

const authModel = {
  authState: {
    userInfo: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      repassword: '',
      clientId: MY_CLIENT_ID,
      approved: false,
    },
    isAuth: authorization ? authorization.isAuth : false,
    token: authorization ? authorization.token : '',
  },
  authMeSuccess: action((state, payload) => {
    state.authState.isAuth = true;
    state.authState.token = payload;
  }),
  signOutSuccess: action((state, payload) => {
    state.authState.isAuth = false;
  }),
  updateUserData: action((state, payload) => {
    const newUserData = payload;
    state.authState.userInfo = { ...state.authState.userInfo, ...newUserData };
  }),
  signIn: thunk(async (actions, payload, { getState }) => {
    const [signInData, signInError] = await handlePromise(authAPI.signIn(payload));


    if (!signInError && (signInData.status === HttpStatusCode.OK || signInData.status === HttpStatusCode.CREATED)) {
      const { token } = signInData.data.data;


      actions.authMeSuccess(token);
      localStorage.setItem('bikeTheftAuthorization', JSON.stringify({ token, isAuth: true }));
    } else alert(`Неправильно введены данные \n\r${signInError.message}`);
  }),
  signUp: thunk(async (actions, payload, { getState }) => {
    actions.updateUserData(payload);
    const { userInfo } = getState().authState;
    const [signUpData, signUpError] = await handlePromise(
      authAPI.signUp({ ...userInfo, approved: false })
    );

    if (!signUpError && signUpData.status === HttpStatusCode.OK) {
      actions.authMeSuccess();
      alert('Вы зарегистрированы!');
    } 
    else if (payload.password !== payload.repassword) {
      alert('Пароли не совпадают')
    }
    else alert(signUpError.message);
  }),
  signOut: thunk(async (actions, payload, { getState }) => {
    localStorage.setItem('bikeTheftAuthorization', JSON.stringify({ token: null, isAuth: false }));

    actions.signOutSuccess();
  }),
};

export default authModel;
