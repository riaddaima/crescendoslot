import React, { useState, ChangeEvent } from "react";
import Header from "../../components/Header";
import StaticDatePickerLandscape from "../../components/StaticDatePickerLandscape";
import { Stack, TextField, Grid, Box, Button } from "@mui/material";
import StaticTimePicker from "../../components/StaticTimePicker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { profileSelector } from "../../components/Profile/reducer/selector";
const Home = () => {
  const profile = useAppSelector(profileSelector);

  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [duration, setDuration] = useState(0);

  const onDurationChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDuration(event.target.value as number);
  };

  return (
    <div>
      <h1>Welcome Home, {profile.firstName}</h1>
      <br />
    </div>
  );
}

export default Home;