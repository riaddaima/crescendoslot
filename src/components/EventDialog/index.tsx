import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import moment from 'moment-timezone';
import { EventApi } from '@fullcalendar/common/main';

interface EventDialogProps {
  event: EventApi;
  open: boolean;
  onHide: (hide: boolean) => void;
}

const EventDialog = ({ event, open, onHide, ...props }: EventDialogProps) => (
  <Dialog
    open={open}
    maxWidth="xs"
    onClose={() => onHide(false)}
    aria-labelledby="form-dialog-title"
    container={() => document.getElementById('mainContent')}
    {...props}
  >
    <DialogTitle id="form-dialog-title">Availability</DialogTitle>
    <DialogContent>
      <Grid container spacing={2}>
        <div></div>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            fullWidth
            label="Title"
            value={event.title}
            disabled
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            fullWidth
            label="Date"
            value={moment(event.start).format('DD/MM/YYYY')}
            disabled
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            fullWidth
            value={moment(event.start).format('HH:mm')}
            disabled
            label="Start time"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            fullWidth
            value={moment(event.end).format('HH:mm')}
            disabled
            label="End time"
          />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => onHide(false)} color="primary">
        Cancel
      </Button>
      <Button
        onClick={() => {
          onHide(true);
        }}
        color="secondary"
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);
export default EventDialog;
