import React from "react";
import { logout } from "../../services/auth";
import {useHistory} from 'react-router-dom'

const LogoutButton = ({setAuthenticated}) => {
  const history = useHistory()
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    history.push('/')
    window.location.reload()
  };

  return <p onClick={onLogout}>Logout</p>;
};

export default LogoutButton;
