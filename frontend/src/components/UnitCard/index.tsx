import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import { Box, MenuItem, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { kidsSelector } from '../../pages/Dependents/reducer/selector';
import { slice as kidsApplier } from '../../pages/Dependents/reducer';
import { KidI } from "../../pages/Dependents/reducer/state";
import { COLORS } from "../../colors";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


import './styles.css';


export default function UnitCard(
  kid
    : KidI) {
  const [editable, setEditable] = useState(false);
  const [sexe, setSexe] = useState(kid.gender);
  const [enteredFName, setEnteredFName] = useState(kid.fname);
  const [enteredLName, setEnteredLName] = useState(kid.lname);
  const [dob, setDob] = useState(kid.dob);



  const genders = [
    {
      value: 'F',
      label: 'Girl',
    },
    {
      value: 'M',
      label: 'Boy',
    }
  ];
  const dispatch = useAppDispatch();
  const kids = useAppSelector(kidsSelector);

  const skid = kids.filter((kidi: KidI) => kidi.id === kid.id)[0];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexe(event.target.value);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleDelete = (kid: KidI) => {
    dispatch(kidsApplier.actions.removeKid(skid));
  }

  const handleSave = () => {
    setEditable(false);
    const newKid: KidI = {
      id: kid.id,
      fname: enteredFName,
      lname: enteredLName,
      gender: sexe,
      dob,
      age: 5 // static,
    }

    dispatch(kidsApplier.actions.editKid(newKid));
  }
  return (
    <Card sx={{ width: 320, minHeight: 350, display: 'block', justifyContent: 'center' }}>
      {!editable ? (
        <> {kid.gender === "M" ? (<CardMedia
          component="img"
          sx={{ mt: 2, objectFit: "contain" }}
          height="150"
          image="/boy.png"
          alt="Boy"
        />) : (
          <CardMedia
            component="img"
            sx={{ mt: 2, objectFit: "contain", }}
            height="150"
            image="/girl.png"
            alt="Girl"
          />
        )
        }
          <CardContent>
            <div style={{ border: `0.5px solid ${COLORS.primaryColor}`, marginBottom: 3 }}></div>
            <Typography variant="h5" color={COLORS.primaryColor} sx={{ marginTop: 4 }}>
              {kid.fname + " " + kid.lname}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => handleDelete(kid)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          </CardActions>
        </>
      ) : (
        <>
          <CardContent>
            <Box
              component="form"
              sx={{
                m: 2,
                '& .MuiTextField-root': { mb: 2, mt: 2 }
              }}
              noValidate>
              <TextField required
                id="filled-basic"
                label="First Name"
                variant="outlined"
                value={enteredFName}
                onChange={(e) => setEnteredFName(e.target.value)}
                fullWidth
              ></TextField>
              <TextField required
                id="filled-basic"
                label="Last Name"
                variant="outlined"
                value={enteredLName}
                onChange={(e) => setEnteredLName(e.target.value)}
                fullWidth
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of birth"
                  value={dob}
                  onChange={(newValue: any) => {
                    if (newValue) setDob(newValue);
                  }}
                  renderInput={(params: any) => <TextField fullWidth {...params} />} />
              </LocalizationProvider>
            </Box>
          </CardContent>
          <CardActions disableSpacing sx={{ bottom: 0 }}>
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
}
