import {KidI, initialState} from"./state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'kids',
  initialState,
  reducers: {
    addKid: (state, action: PayloadAction<KidI>) => {
    const id = state.kids[state.kids.length-1].id+1;
    action.payload.id = id;
    (state.kids).push(action.payload);
    },
    removeKid: (state, action: PayloadAction<KidI>) => {
      const kidIndex = (state.kids).findIndex((kid: KidI) => kid.id === action.payload.id);
      state.kids.splice(kidIndex, 1);
    },
    editKid: (state, action: PayloadAction<KidI>) => {
        const kidIndex = (state.kids).findIndex((kid: KidI) => kid.id === action.payload.id);
        state.kids[kidIndex] = action.payload;
    }
  },
});

export default slice.reducer;