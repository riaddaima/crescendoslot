import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Calendar from '../../components/Calendar';
import Header from '../../components/Header';
import SelectedEvents from '../../components/selectedEvents';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CalendarEvent } from '../../models/CalendarEvent/types';
import { calendarEventsSelector } from './reducer/selectors';
import {
  createCalendarEvent,
  getCalendarEvents,
  updateCalendarEvent,
  deleteCalendarEvent,
} from './reducer/thunks';
import { selectedEventsSelector } from '../../components/selectedEvents/reducer/selector';
import Sidebar from '../../components/Sidebar/Sidebar';

const Events = () => {
  const dispatch = useAppDispatch();
  const selectedEvents = useAppSelector(selectedEventsSelector);
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
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" maxHeight={845}>
          {selectedEvents.events.length !== 0 ? <SelectedEvents /> : <></>}
          <Box flex="1 1 100%" ml="15px">
            <Calendar
              events={eventsCopy}
              originalEvents={events}
              setEvents={setEventsCopy}
              onCreateEvent={onCreateEvent}
              onUpdateEvent={onUpdateEvent}
              onCancelEvent={onCancelEvent}
            />
          </Box>
        </Box>
      </Box>
    </div>
    
  );
}

export default Events;