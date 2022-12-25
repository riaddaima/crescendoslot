import React, { useState } from 'react';
import { Box, Autocomplete, Checkbox, TextField, Button, Snackbar } from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { kidsSelector } from '../../pages/Dependents/reducer/selector';
import { slice as selectedEventsApplier } from '../selectedEvents/reducer';
import { KidI } from '../../pages/Dependents/reducer/state';
import { BookingAPI } from '../../models/Booking';
import { selectedEventsSelector } from '../selectedEvents/reducer/selector';
import { getCalendarEvents } from '../../pages/Events/reducer/thunks';

interface Props { 
  setShowMessage: (showMessage: boolean) => void;
}

const BookingForm = ({ setShowMessage }: Props) => {

  const dispatch = useAppDispatch();
  const dependents = useAppSelector(kidsSelector);
  const selectedEvents = useAppSelector(selectedEventsSelector);
  const [selectedDependents, setSelectedDependents] = useState<KidI[]>([]);

  const handleBooking = async () => {
    await BookingAPI.bookEvents(selectedEvents.events, selectedDependents);
    dispatch(selectedEventsApplier.actions.resetState());
    setSelectedDependents([]);
    dispatch(getCalendarEvents());
    setShowMessage(true);
    // console.log('The events the user', profile.userId, 'wants to book are the following', selectedEvents.events, 'and the selected dependents are', selectedDependents)
  }

  return (
    <>
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
                checked={selected} />
              {option.fname + ' ' + option.lname}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Dependents" placeholder="Dependent Name" />
          )} />
      </Box><Box sx={{ pt: 3, pb: 3, float: 'right' }}>
        <Button variant="contained" onClick={handleBooking}>Book Events</Button>
      </Box>
    </>
  );
};

export default BookingForm;