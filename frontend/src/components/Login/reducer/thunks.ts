import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginAPI } from "../../../models/Login";

export const loginUser = createAsyncThunk(
  'user/login',
  (token: string | undefined) => {
    return LoginAPI.login(token);
  }
);
