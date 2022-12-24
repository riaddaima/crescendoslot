import { initialState, KidI } from"./state";
import { createSlice } from "@reduxjs/toolkit";

import {
  getKids,
  getKid,
  createKid,
  updateKid,
  deleteKid
} from './thunks';

export const slice = createSlice({
  name: 'dependents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKids.fulfilled, (state, action) => {
        state.kids = action.payload;
      })
      .addCase(getKids.rejected, (state, ) => {
        state.kids = [...state.kids];
      })
      .addCase(getKid.fulfilled, (state, action) => {
        state.kids = [...state.kids, action.payload];
      })
      .addCase(getKid.rejected, (state, ) => {
        state.kids = [...state.kids];
      })
      .addCase(createKid.fulfilled, (state, action) => {
        state.kids = [...state.kids, action.payload];
      })
      .addCase(createKid.rejected, (state, ) => {
        state.kids = [...state.kids];
      })
      .addCase(updateKid.fulfilled, (state, action) => {
        state.kids = [...state.kids.filter((kid: KidI) => kid.id !== action.payload.id), action.payload];
      })
      .addCase(updateKid.rejected, (state, ) => {
        state.kids = [...state.kids];
      })
      .addCase(deleteKid.fulfilled, (state, action) => {
        state.kids = [...state.kids.filter((kid: KidI) => kid.id !== action.payload.id)];
      })
      .addCase(deleteKid.rejected, (state, ) => {
        state.kids = [...state.kids];
      })
  }
});

export default slice.reducer;