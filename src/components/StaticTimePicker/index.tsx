import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

interface StaticTimePickerProps {
  startTime: number;
  setStartTime: Dispatch<SetStateAction<number>>;
}

const StaticTimePicker = ({
  startTime,
  setStartTime,
}: StaticTimePickerProps) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileTimePicker
        label="Start time"
        value={startTime}
        onChange={(newValue: number | null) => {
          setStartTime(newValue as number);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default StaticTimePicker;