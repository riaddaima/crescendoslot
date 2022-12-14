import {KidI, initialState} from"./state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'kids',
  initialState,
  reducers: {
    addKid: (state, action: PayloadAction<KidI>) => {
      const id = state[state.length-1].id+1;
      action.payload.id = id;
      (state).push(action.payload);
    },
    removeKid: (state, action: PayloadAction<KidI>) => {
      const kidIndex = (state).findIndex((kid: KidI) => kid.id === action.payload.id);
      state.splice(kidIndex, 1);
    },
    editKid: (state, action: PayloadAction<KidI>) => {
        const kidIndex = (state).findIndex((kid: KidI) => kid.id === action.payload.id);
        state[kidIndex] = action.payload;
    }
  },
});

export default slice.reducer;