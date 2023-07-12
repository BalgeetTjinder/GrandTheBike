import React from "react";
import Header from "./Header.jsx";

import { useStoreActions, useStoreState } from 'easy-peasy';

const HeaderContainer = () => {
  const { isAuth } = useStoreState(state => state.auth.authState)
  const signOut = useStoreActions(actions => actions.auth.signOut)
  const temp = useStoreState(state => state.auth.authState.token)

  return <Header isAuth={ isAuth && temp !== null && temp !== undefined} signOut={ signOut } />;
};

export default HeaderContainer; 