import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { kidsSelector } from '../../pages/Dependents/reducer/selector';
import { slice as kidsApplier } from '../../pages/Dependents/reducer';
import { KidI } from "../../pages/Dependents/reducer/state";


export default function UnitCard(
  kid
: KidI) {
  const [editable, setEditable] = useState(false);
  const [sexe, setSexe] = React.useState(kid.gender);
  const [enteredFName, setEnteredFName] = useState(kid.fname);
  const [enteredLName, setEnteredLName] = useState(kid.lname);
  const [value, setValue] = React.useState<Dayjs | null>(null);



  const genders = [
    {
      value: 'F',
      label: 'Girl',
    },
    {
      value: 'M',
      label: 'Boy',
    },{}
  ];
  const dispatch = useAppDispatch();
  const kids = useAppSelector(kidsSelector);

  const skid = kids.filter((kidi : KidI)=>kidi.id === kid.id)[0];

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
    const newKid : KidI = {
      id: kid.id,
      fname: enteredFName,
      lname: enteredLName,
      gender: sexe,
      age: 5 // static
    }

    dispatch(kidsApplier.actions.editKid(newKid));
  }
  return (
    <Card sx={{width: 350, minHeight: 350, display: 'block', justifyContent: 'center'}}>
      {!editable ? (
        <> {kid.gender === "M"? (<div style = {{display:'flex', justifyContent:'center'}}>
          <CardMedia
            component="img"
            height="250"
            image="..\..\..\public\boy.png"
            sx={{width: 300, position: 150}}
            alt="Boy"
          />
        </div>) : (
          <div style = {{display:'flex', justifyContent:'center'}}>
            <CardMedia
              component="img"
              height="250"
              image="..\..\..\public\girl.png"
              sx={{width: 300, position: 200}}
              alt="Girl"
            />
          </div>
      )
      }
          
          <CardContent>
            <Typography variant="h5" color="text.primary">
              {kid.fname + " " + kid.lname}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <DeleteIcon onClick={() => handleDelete(kid)}/>
            </IconButton>
            <IconButton aria-label="share">
              <EditIcon onClick={handleEdit} />
            </IconButton>
          </CardActions>
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
                  value={enteredFName}
                  onChange={(e)=>setEnteredFName(e.target.value)}
                  sx={{ width: 262 }}
                ></TextField>
                <TextField required
                  id="filled-basic"
                  label="Last Name"
                  variant="outlined"
                  value={enteredLName}
                  onChange={(e)=>setEnteredLName(e.target.value)}
                  sx={{ width: 262 }}
                ></TextField>
                <div>
                  <TextField required
                    id="outlined-select-gender"
                    select
                    label="Select"
                    onChange={handleChange}
                    value={sexe}
                  sx={{ height: 50, width: 262, textAlign:"left"}}
                  >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value} sx={{ color: 'black', float: 'none' }}>
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
                  } }
                  renderInput={(params) => <TextField {...params} />} />
              </LocalizationProvider>
            </Box>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
}
