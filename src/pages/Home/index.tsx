import React, { useEffect, useState, ChangeEvent } from "react";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import Header from "../../components/Header";
import StaticDatePickerLandscape from "../../components/StaticDatePickerLandscape";
import { Stack, TextField, Grid, Box, Button } from "@mui/material";
import StaticTimePicker from "../../components/StaticTimePicker";
import { Profile } from "../../interfaces/Profile";

const Home = () => {
  const [cookies] = useCookies(['jwt-token']);
  const [profile, setProfile] = useState<Profile>({
    email: '',
    name: '',
    picture: '',
    iat: 0,
    exp: 0,
  });

  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [duration, setDuration] = useState(0);

  const onDurationChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDuration(event.target.value as number);
  };

  useEffect(() => {
    setProfile(jwtDecode(cookies["jwt-token"]));
  }, [cookies]);

  return (
    <div>
      <Header />
      <h1>Welcome Home, {profile.name}</h1>
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
    </div>
  );
}

export default Home;