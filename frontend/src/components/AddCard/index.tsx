import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch} from '../../app/hooks';
import { slice as kidsApplier } from '../../pages/Dependents/reducer';
import CancelIcon from '@mui/icons-material/Cancel';
import { KidI } from "../../pages/Dependents/reducer/state";
import AdapterDateFns from '@mui/lab/AdapterDateFns';



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

  const handleEdit = () => {
    setEditable(true);
  }

  const handleCancel = () => {
    setEditable(false);

    setFName('');
    setLName('');
    setSexe('');
    setDob(new Date());
  }

  const handleSave = () => {
    setEditable(false);

    if (dob) {
      const kid : KidI = {
        id: 3,  // static value that changes in reducer before insert
        fname: fname,
        lname: lname,
        gender: sexe,
        age: 3, // static value
        dob
      }
      dispatch(kidsApplier.actions.addKid(kid));
      setFName('');
      setLName('');
      setSexe('');
      setDob(new Date());
    }
  }
  return (
    <>
    <Card sx={{ width: 320, minHeight: 350, display:'block', justifyContent:'center'}}>
      {!editable ? 
        (
        <>
            <CardMedia 
                component="img"
                height="200"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain", cursor: "pointer" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPN1pXbTRiNH6Lvj8OYw8m7AA1jDtMRM1Ow&usqp=CAU"
                alt="Add"
                onClick={handleEdit}>
            </CardMedia>
           
        </>
      ) : (
        <>
        <CardContent>
          <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mt: 2}
        }}
        noValidate>
            <TextField required
              id="filled-basic"
              label="First Name"
              variant="outlined"
              fullWidth
              value={fname}
              onChange={(e)=>setFName(e.target.value)}
            ></TextField>
            <TextField required
              id="filled-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lname}
              onChange={(e)=>setLName(e.target.value)}
            ></TextField>
            <div>
            <TextField required
                id="outlined-select-gender"
                select
                label="Select"
                onChange={handleChange}
                value={sexe}
                sx={{height: 50, textAlign:"left"}}
                fullWidth
              >
                  {genders.map((option, index) => (
                      <MenuItem key={index} value={option.value} sx={{color: 'black', float:'none'}}>
                        {option.label}
                      </MenuItem>
                    ))}
              </TextField>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of birth"
                value={dob}
                onChange={(newValue) => {
                  if (newValue) setDob(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
            </Box>
          </CardContent>
          <CardActions >
            <IconButton onClick={handleSave}>
              <SaveIcon/>
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