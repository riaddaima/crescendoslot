import { createAsyncThunk } from '@reduxjs/toolkit';

import { CalendarEventAPI } from '../../../models/CalendarEvent';
import { CalendarEvent } from '../../../models/CalendarEvent/types';

export const getCalendarEvents = createAsyncThunk(
  'calendar/events/getlist',
  CalendarEventAPI.getList
)

export const createCalendarEvent = createAsyncThunk(
  'calendar/events/create',
  (event: CalendarEvent) => {
    return CalendarEventAPI.create(event);
  }
)

export const updateCalendarEvent = createAsyncThunk(
  'calendar/events/update',
  (event: CalendarEvent) => {
    return CalendarEventAPI.update(event);
  }
)

export const deleteCalendarEvent = createAsyncThunk(
  'calendar/events/cancel',
  (event: CalendarEvent) => {
    return CalendarEventAPI.cancel(event);
  }
)
