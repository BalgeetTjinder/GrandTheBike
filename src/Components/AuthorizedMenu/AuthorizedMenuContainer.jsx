import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthorizedMenu from "./AuthorizedMenu.jsx";

import { useStoreState } from 'easy-peasy';

const AuthorizedMenuContainer = () => {
  const { isAuth } = useStoreState(state => state.auth.authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/"); // перенаправление на главную страницу
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null; // можно вернуть <></> вместо null, если нужно что-то отобразить во время перенаправления
  }

  return <AuthorizedMenu />;
};

export default AuthorizedMenuContainer; 