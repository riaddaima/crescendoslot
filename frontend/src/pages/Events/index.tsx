import React, { useState, useEffect } from 'react';
import { Autocomplete, Box, Checkbox, TextField, Button } from '@mui/material';
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

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { kidsSelector } from '../Dependents/reducer/selector';
import { KidI } from '../Dependents/reducer/state';
import { profileSelector } from '../../components/Profile/reducer/selector';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Events = () => {
  const dispatch = useAppDispatch();
  const selectedEvents = useAppSelector(selectedEventsSelector);
  const events = useAppSelector(calendarEventsSelector);
  const [eventsCopy, setEventsCopy] = useState(events);
  const dependents = useAppSelector(kidsSelector);
  const [selectedDependents, setSelectedDependents] = useState<KidI[]>([]);
  const profile = useAppSelector(profileSelector);

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

  const exampleTest = () => {
    console.log('The events the user', profile.userId, 'wants to book are the following', selectedEvents.events, 'and the selected dependents are', selectedDependents)
  }

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
        <Box sx={{ pt: 3 }}>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            fullWidth
            options={dependents}
            onChange={(event, value) => setSelectedDependents(value)}
            disableCloseOnSelect
            getOptionLabel={(option: KidI) => option.fname + ' ' + option.lname}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.fname + ' ' + option.lname}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Dependents" placeholder="Dependent Name" />
            )}
          />
        </Box>
        <Box sx={{ pt: 3, pb: 3, float: 'right' }}>
          <Button variant="contained" onClick={exampleTest}>Book Events</Button>
        </Box>
      </Box>
    </div>

  );
}

export default Events;