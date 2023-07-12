import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm.jsx";
import { useStoreActions, useStoreState } from 'easy-peasy';

const SignInContainer = () => {
  const navigate = useNavigate();
  const { isAuth } = useStoreState(state => state.auth.authState);
  const signIn = useStoreActions(actions => actions.auth.signIn);
  const temp = useStoreState(state => state.auth.authState.token)

  useEffect(() => {
    if (isAuth && temp !== null && temp !== undefined) {
      navigate("/menu");
    }
  }, [isAuth, temp]);
  
  const onSubmit = (formData) => {
    signIn(formData);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignInContainer;