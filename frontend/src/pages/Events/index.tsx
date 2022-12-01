import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
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

import { formatDate } from '@fullcalendar/react';

import { COLORS } from '../../colors';


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
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between">
          {/* CALENDAR SIDEBAR */}
          <Box sx={{ flex: "1 1 20%", p: "15px", borderRadius: "4px", border: `1px solid ${COLORS.primaryColor} `}}>
            <Typography variant="h5">Selected Events</Typography>
            <List>
              {events.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: COLORS.calendarEventColor,
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    sx={{
                      color: "white"
                    }}
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

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