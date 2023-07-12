import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserCreateForm from "./UserCreateForm.jsx";

import { useStoreActions, useStoreState } from 'easy-peasy';

const UserCreateContainer = () => {
  const isAuth = useStoreState(state => state.auth.authState.isAuth)
  const signUp = useStoreActions(actions => actions.auth.signUp)
  const test = useStoreState(state=>state)
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const onSubmit = (formData) => {
    signUp(formData);
  };

  return (
      <UserCreateForm
        onSubmit={onSubmit}
        buttonName="Зарегистрироваться"
        isRegistration={true}
      />
  );
}; 

export default UserCreateContainer;