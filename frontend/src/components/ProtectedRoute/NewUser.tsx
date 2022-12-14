import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { profileSelector } from '../Profile/reducer/selector';

const NewUser = () => {

  const { newUser } = useAppSelector(profileSelector);
  
  return (
    newUser ? <Navigate to="/complete-profile" /> : <Outlet />
  );
};

export default NewUser;