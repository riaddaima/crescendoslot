import { RootState } from '../../../app/store';

export const calendarEventsSelector = (state: RootState) => state.calendar.events;
