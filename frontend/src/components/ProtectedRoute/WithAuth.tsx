import React from 'react';
import { useCookies } from 'react-cookie';
import { Outlet, Navigate } from 'react-router-dom';

const WithAuth = () => {

  const [cookies, ] = useCookies(['jwt-token']);

  const isAuthenticated = (): Boolean => {
    if (cookies['jwt-token']) return true;
    return false;
  }
  
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
  );
};

export default WithAuth;