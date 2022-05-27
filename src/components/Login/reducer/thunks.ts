import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginAPI } from "../../../models/Login";
// import { LoginPOSTRequest } from '../../../models/Login/request-helper';

export const loginUser = createAsyncThunk(
  'user/login',
  (token: string | undefined) => {
    return LoginAPI.login(token);
  }
);
