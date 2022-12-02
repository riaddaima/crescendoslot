import { EventApi } from "@fullcalendar/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const slice = createSlice({
  name: 'selectedEvents',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<EventApi>) => {
      const eventIndex = (state.events as EventApi[]).findIndex((event: EventApi) => event.id === action.payload.id);
      if (eventIndex < 0) (state.events as EventApi[]).push(action.payload);
    },
    removeEvent: (state, action: PayloadAction<EventApi>) => {
      const eventIndex = (state.events as EventApi[]).findIndex((event: EventApi) => event.id === action.payload.id);
      state.events.splice(eventIndex, 1);
    }
  },
});

export default slice.reducer;