import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { EventApi } from '@fullcalendar/react';

import { COLORS } from '../../colors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectedEventsSelector } from './reducer/selector';
import { slice as selectedEventApplier } from './reducer';
import moment from 'moment-timezone';

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
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleUnselectEvent(event)}>
                      <DeleteTwoToneIcon sx={{ color: 'white' }} />
                    </IconButton>
                  }
                >
                  <ListItemText
                    sx={{
                      color: "white"
                    }}
                    primary={event.title}
                    secondary={
                      <Typography>
                        {moment(event.start).format("ddd MM/DD hh:mm A")}
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