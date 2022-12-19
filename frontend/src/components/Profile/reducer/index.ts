import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { initialState } from './state';
import { Profile } from '../../../interfaces/Profile';

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
      .addCase(slice.actions.setProfile, (state, action) => {
        state = Object.assign(state, action.payload);
      })
  }
})

export default slice.reducer;