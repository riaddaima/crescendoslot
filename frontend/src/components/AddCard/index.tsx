import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch } from '../../app/hooks';
import { slice as kidsApplier } from '../../pages/Dependents/reducer';
import CancelIcon from '@mui/icons-material/Cancel';
import { KidI } from "../../pages/Dependents/reducer/state";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { createKid } from "../../pages/Dependents/reducer/thunks";
import dayjs from "dayjs";
import { DependentRequest } from "../../models/Dependent/request-helper";
import { COLORS } from "../../colors";




export default function AddCard() {
  const [editable, setEditable] = useState(false);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [sexe, setSexe] = React.useState('');
  const [dob, setDob] = React.useState(new Date());

  const dispatch = useAppDispatch();
  const genders = [
    {
      value: "F",
      label: "Girl"
    },
    {
      value: "M",
      label: "Boy"
    }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexe(event.target.value);
  };

  const clearForm = () => {
    setFName('');
    setLName('');
    setSexe('');
    setDob(new Date());
  }

  const handleEdit = () => {
    setEditable(true);
  }

  const handleCancel = () => {
    setEditable(false);
    clearForm();
  }

  const handleSave = () => {
    setEditable(false);

    if (dob) {
      const newKid: DependentRequest = {
        fname: fname,
        lname: lname,
        gender: sexe,
        dob
      }
      dispatch(createKid(newKid));
      clearForm();
    }
  }
  return (
    <>
      <Card sx={{ width: 320, minHeight: 350, display: 'block', justifyContent: 'center', border: `2px solid ${COLORS.darkBlack}` }}>
        {!editable ?
          (
            <>
              <CardMedia
                component="img"
                height="200"
                sx={{ cursor: "pointer",  marginTop: '10%' }}
                src="https://t3.ftcdn.net/jpg/02/40/35/30/360_F_240353010_HnntkJI3oNFSEOQRTPYU4Q2oGuKtlVut.jpg"
                alt="Add"
                onClick={handleEdit}>
              </CardMedia>
              <CardContent sx={{ padding: 0 }}>
                <div style={{ border: `0.5px solid ${COLORS.darkBlack}`, marginBottom: 3 }}></div>
                <h3 style={{ textAlign: "center", color: COLORS.darkBlack }}>Add a new dependent</h3>
              </CardContent>
            </>
          ) : (
            <>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { mt: 2 }
                  }}
                  noValidate>
                  <TextField required
                    id="filled-basic"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={fname}
                    onChange={(e) => setFName(e.target.value)}
                  ></TextField>
                  <TextField required
                    id="filled-basic"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={lname}
                    onChange={(e) => setLName(e.target.value)}
                  ></TextField>
                  <div>
                    <TextField required
                      id="outlined-select-gender"
                      select
                      label="Select"
                      onChange={handleChange}
                      value={sexe}
                      sx={{ height: 50, textAlign: "left" }}
                      fullWidth
                    >
                      {genders.map((option, index) => (
                        <MenuItem key={index} value={option.value} sx={{ color: 'black', float: 'none' }}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date of birth"
                      value={dayjs(dob)}
                      onChange={(newValue: any) => {
                        if (newValue) setDob(newValue);
                      }}
                      renderInput={(params: any) => <TextField fullWidth {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </CardContent>
              <CardActions >
                <IconButton onClick={handleSave}>
                  <SaveIcon />
                </IconButton>
                <IconButton onClick={handleCancel}>
                  <CancelIcon />
                </IconButton>
              </CardActions>
            </>
          )}
      </Card>
    </>

  );
}