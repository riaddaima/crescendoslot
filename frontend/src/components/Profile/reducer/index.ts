import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { Profile } from '../../../interfaces/Profile';
import { profileGet, profileUpdate, profileCreate } from './thunks';

export const slice: Slice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = Object.assign(state, action.payload.profile);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileGet.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
      })
      .addCase(profileGet.rejected, (state, ) => {
        state = initialState;
      })
      .addCase(profileCreate.fulfilled, (state, action) => {
        state.profile = Object.assign(state.profile, { ...action.payload.profile, newUser: false });
        window.location.href = '/';
      })
      .addCase(profileCreate.rejected, (state, ) => {
        state = initialState;
      })
      .addCase(profileUpdate.fulfilled, (state, action) => {
        state.profile = Object.assign(state.profile, action.payload.profile);
      })
      .addCase(profileUpdate.rejected, (state, ) => {
        state = initialState;
      });
  }
})

export default slice.reducer;