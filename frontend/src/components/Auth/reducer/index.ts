import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from './thunks';
import { initialState } from './state';

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        state.jwt = action.payload.token;
      })
      .addCase(authLogin.rejected, (state, ) => {
        state.jwt = null;
      })
  },
});

export default slice.reducer;
