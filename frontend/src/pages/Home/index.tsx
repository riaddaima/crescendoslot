import React, { useState, ChangeEvent } from "react";
import Header from "../../components/Header";
import StaticDatePickerLandscape from "../../components/StaticDatePickerLandscape";
import { Stack, TextField, Grid, Box, Button } from "@mui/material";
import StaticTimePicker from "../../components/StaticTimePicker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { profileSelector } from "../../components/Profile/reducer/selector";
import Sidebar from "../../components/Sidebar/Sidebar";
const Home = () => {
  const profile = useAppSelector(profileSelector);

  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [duration, setDuration] = useState(0);

  const onDurationChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDuration(event.target.value as number);
  };

  return (
    <><Sidebar />
    <div>
      <h1>Welcome Home, {profile.firstName}</h1>
      <br />
      <Stack
        justifyContent="center"
        alignItems="center">
          <StaticDatePickerLandscape date={date} setDate={setDate} />
          <br />
          <Box component="div" sx={{ display: 'inline' }}>
            <Grid container spacing={2}>
              <Grid item>
                <StaticTimePicker startTime={startTime} setStartTime={setStartTime} />
              </Grid>
              <Grid item>
                <TextField
                  type="number"
                  label="Duration"
                  value={duration}
                  onChange={onDurationChange}
                />
              </Grid>
            </Grid>
          </Box>
          <br />
          <Button variant="contained">Create timeslot</Button>
      </Stack>
    </div> </>
  );
}

export default Home;