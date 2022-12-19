import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginAPI } from "../../../models/Login";

export const authLogin = createAsyncThunk(
  'auth/login',
  (token: string | undefined) => {
    return LoginAPI.login(token);
  }
);
