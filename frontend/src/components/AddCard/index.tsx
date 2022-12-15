import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch} from '../../app/hooks';
import { slice as kidsApplier } from '../../pages/Dependents/reducer';
import CancelIcon from '@mui/icons-material/Cancel';
import { KidI } from "../../pages/Dependents/reducer/state";


export default function AddCard() {
  const [editable, setEditable] = useState(false);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [sexe, setSexe] = React.useState('');
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const dispatch = useAppDispatch();
  const genders = [
    {
      value: "F",
      label: "Girl"
    },
    {
      value: "M",
      label: "Boy"
    }, {}
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
    setValue(null);
  }

  const handleSave = () => {
    setEditable(false);
    
    const kid : KidI = {
      id: 3,  // static value that changes in reducer before insert
      fname: fname,
      lname: lname,
      gender: sexe,
      age: 3, // static value

    }

    dispatch(kidsApplier.actions.addKid(kid));
    setFName('');
    setLName('');
    setSexe('');
    setValue(null);
  }
  return (
    <>
    <Card sx={{ width: 300, height: 340}}>
      {!editable ? 
        (
        <>
            <CardMedia 
                component="img"
                height="300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPN1pXbTRiNH6Lvj8OYw8m7AA1jDtMRM1Ow&usqp=CAU"
                alt="Add"
                onClick={() => handleEdit()}>
            </CardMedia>
           
        </>
      ) : (
        <>
        <CardContent>
          <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mb: 2}
        }}
        noValidate>
            <TextField required
              id="filled-basic"
              label="Name"
              variant="outlined"
              sx={{width: 262}}
              value={fname}
              onChange={(e)=>setFName(e.target.value)}
            ></TextField>
            <TextField required
              id="filled-basic"
              label="Name"
              variant="outlined"
              sx={{width: 262}}
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
                sx={{height: 50, width:262, textAlign:"left"}}
              >
                  {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value} sx={{color: 'black', float:'none'}}>
                        {option.label}
                      </MenuItem>
                    ))}
              </TextField>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of birth"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </Box>
          </CardContent>
          <CardActions >
            <IconButton>
              <SaveIcon onClick = {handleSave}/>
            </IconButton>
            <IconButton>
              <CancelIcon onClick = {handleCancel}/>
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
    </>
    
  );
}