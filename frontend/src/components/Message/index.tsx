import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { COLORS } from '../../colors';

interface MessageI {
  message: string;
  open: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const Message = ({ message, open, handleClose }: MessageI) => {
  return (
    <>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: COLORS.primaryColor, color: 'white' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Message;