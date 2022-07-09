import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './state';
import {
  getCalendarEvents,
  createCalendarEvent,
  updateCalendarEvent,
  deleteCalendarEvent
} from './thunks';

export const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCalendarEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(getCalendarEvents.rejected, (state, ) => {
        state.events = [...state.events];
      })
      .addCase(createCalendarEvent.fulfilled, (state, action) => {
        state.events = [...state.events, action.payload];
      })
      .addCase(createCalendarEvent.rejected, (state, ) => {
        state.events = [...state.events];
      })
      .addCase(updateCalendarEvent.fulfilled, (state, action) => {
        state.events = [
          ...state.events.filter((event) => event.id !== action.payload.id),
        ];
      })
      .addCase(updateCalendarEvent.rejected, (state, ) => {
        state.events = [...state.events];
      })
      .addCase(deleteCalendarEvent.fulfilled, (state, action) => {
        state.events = [
          ...state.events.filter((event) => event.id !== action.payload.id),
        ];
      })
      .addCase(deleteCalendarEvent.rejected, (state, ) => {
        state.events = [...state.events];
      })
  },
});

export default slice.reducer;