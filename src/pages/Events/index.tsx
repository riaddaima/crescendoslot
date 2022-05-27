import React from 'react';
import { Box } from '@mui/material';
import Calendar from '../../components/Calendar';
import Header from '../../components/Header';

const Events = () => {
  return (
    <div>
      <Header />
      <Box sx={{p: 3}}>
        <Calendar />
      </Box>
    </div>
  );
}

export default Events;