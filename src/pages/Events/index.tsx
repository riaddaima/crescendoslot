import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Calendar from '../../components/Calendar';
import Header from '../../components/Header';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CalendarEvent } from '../../models/CalendarEvent/types';
import { calendarEventsSelector } from './reducer/selectors';
import {
  createCalendarEvent,
  getCalendarEvents,
  updateCalendarEvent,
  deleteCalendarEvent,
} from './reducer/thunks';

const Events = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(calendarEventsSelector);
  const [eventsCopy, setEventsCopy] = useState(events);

  useEffect(() => {
    dispatch(getCalendarEvents());
  }, [dispatch]);

  useEffect(() => {
    setEventsCopy(events);
  }, [events]);

  const onCreateEvent = (event: CalendarEvent) => {
    dispatch(createCalendarEvent(event));
  };

  const onUpdateEvent = (id: string) => {
    const index = eventsCopy.findIndex((event: CalendarEvent) => event.id === id);
    dispatch(updateCalendarEvent(eventsCopy[index]));
  };

  const onCancelEvent = (id: string) => {
    const index = eventsCopy.findIndex((event: CalendarEvent) => event.id === id);
    dispatch(deleteCalendarEvent(eventsCopy[index]));
  };
  return (
    <div>
      <Header />
      <Box sx={{p: 3}}>
        <Calendar
          events={eventsCopy}
          onCreateEvent={onCreateEvent}
          onUpdateEvent={onUpdateEvent}
          onCancelEvent={onCancelEvent}
        />
      </Box>
    </div>
  );
}

export default Events;