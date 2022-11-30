import { CalendarEvent } from '../../../models/CalendarEvent/types';

interface CalendarState {
  events: Array<CalendarEvent>;
}

export const initialState: CalendarState = {
  events: [],
};