import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { Profile } from '../../../interfaces/Profile';
import { profileGet, profileUpdate, profileCreate } from './thunks';

export const slice: Slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state = Object.assign(state, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileGet.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(profileGet.rejected, (state, ) => {
        state = initialState;
      })
      .addCase(profileCreate.fulfilled, (state, action) => {
        state = Object.assign(state, { ...action.payload.profile, newUser: false });
        window.location.href = '/';
      })
      .addCase(profileCreate.rejected, (state, ) => {
        state = initialState;
      })
  }
})

export default slice.reducer;