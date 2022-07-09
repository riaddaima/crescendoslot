import React, { Dispatch, SetStateAction } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { COLORS } from '../../colors';

const theme = createTheme({
  components: {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          color: COLORS.primaryColor,
          '& .Mui-selected': {
            backgroundColor: COLORS.primaryColor,
          },
        },
      },
    },
    MuiDatePickerToolbar: {
      styleOverrides: {
        root: {
          '& .MuiPickersToolbar-penIconButton': {
            display: 'none',
          }
        },
      },
    }
  } as any,
});

interface StaticDatePickerLandscapeProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const StaticDatePickerLandscape = ({
  date,
  setDate
}: StaticDatePickerLandscapeProps) => {

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={date}
          onChange={(newValue: Date | null) => {
            setDate(newValue as Date);
          }}
          renderInput={(params) => <TextField {...params} />}
          minDate={new Date('01/01/2020')}
          maxDate={new Date('12/31/2040')}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default StaticDatePickerLandscape;