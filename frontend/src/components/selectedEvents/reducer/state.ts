import { EventApi } from "@fullcalendar/common";

interface selectedEventsI {
  events: EventApi[];
}

export const initialState: selectedEventsI = {
  events: []
}