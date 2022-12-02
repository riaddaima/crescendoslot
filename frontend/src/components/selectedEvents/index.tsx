import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { EventApi, formatDate } from '@fullcalendar/react';

import { COLORS } from '../../colors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectedEventsSelector } from './reducer/selector';
import { slice as selectedEventApplier } from './reducer';

const SelectedEvents = () => {
  const dispatch = useAppDispatch();
  const selectedEvents = useAppSelector(selectedEventsSelector);

  const handleUnselectEvent = (event: EventApi) => {
    dispatch(selectedEventApplier.actions.removeEvent(event));
  }

  return (
    <>
      <Box sx={{ flex: "1 1 20%", p: "15px", borderRadius: "4px", border: `1px solid ${COLORS.primaryColor} ` }} >
        <Typography variant="h5">Selected Events</Typography>
        <br></br>
        <List
          sx={{
            overflow: 'auto',
            maxHeight: '90%',
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {selectedEvents.events.map((event: EventApi) => {
            if (event.start) {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: COLORS.calendarEventColor,
                    margin: "10px 0",
                    width: "95%",
                    borderRadius: "2px",
                  }}
                  onClick={() => handleUnselectEvent(event)}
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
              )
            }
            return <></>
          })}
        </List>
      </Box >
    </>
  )
}

export default SelectedEvents;