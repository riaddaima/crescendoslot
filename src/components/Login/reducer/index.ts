import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './thunks';
import { initialState } from './state';

export const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.jwt = action.payload;
      })
      .addCase(loginUser.rejected, (state, ) => {
        state.jwt = '';
      })
  },
});

export default slice.reducer;
