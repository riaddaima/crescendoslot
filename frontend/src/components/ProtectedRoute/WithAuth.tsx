import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { signupSelector } from '../Auth/reducer/selectors';

const WithAuth = () => {

  const token = useAppSelector(signupSelector);

  const isAuthenticated = (): Boolean => {
    if (token) return true;
    return false;
  }
  
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
  );
};

export default WithAuth;