import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Main.jsx";

import { useStoreActions, useStoreState } from 'easy-peasy';

const MainContainer = () => {
  const navigate = useNavigate();
  const { isAuth } = useStoreState(state => state.auth.authState)
  const temp = useStoreState(state => state.auth.authState.token)

  useEffect(() => {
    if (isAuth && temp !== null && temp !== undefined) {
      navigate("/menu");
    }
  }, []);

  return <Main />;
};

export default MainContainer; 