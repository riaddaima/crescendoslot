import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from './thunks';
import { initialState } from './state';

import { slice as ProfileSlicer } from '../../Profile/reducer';
import { Profile } from '../../../interfaces/Profile';

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        state.jwt = action.payload.token;
        // const {[key]: deletedKey, ...otherKeys} = object;
        const profile: Profile = {
          [action.payload.token]: action.payload.token,
          ...action.payload,
        };
        console.log(profile);
        ProfileSlicer.actions.setProfile(state, profile);
        ProfileSlicer.caseReducers.setProfile(state, profile);
      })
      .addCase(authLogin.rejected, (state, ) => {
        state.jwt = null;
      })
  },
});

export default slice.reducer;
