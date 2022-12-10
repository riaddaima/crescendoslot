import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, Profile } from './state';

export const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state = action.payload;
    }
  }
})

export default slice.reducer;