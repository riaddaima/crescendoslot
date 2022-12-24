import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginAPI } from "../../../models/Login";
import { slice as ProfileApplier } from '../../Profile/reducer'

export const authLogin = createAsyncThunk(
  'auth/login',
  async (token: string | undefined, thunkAPI) => {
    const response = await LoginAPI.login(token);
    thunkAPI.dispatch(ProfileApplier.actions.setProfile(response.profile));
    if (response.profile.newUser) window.location.href = '/profile';
    else window.location.href = '/';
    return response;
  }
);
