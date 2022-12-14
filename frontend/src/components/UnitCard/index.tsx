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


export default function UnitCard({
  id,
  name,
  gender,
}: {
  id: number,
  name: string,
  gender: string;
}) {
  const [editable, setEditable] = useState(false);
  const [sexe, setSexe] = React.useState(gender);
  const [enteredName, setEnteredName] = useState(name);
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

  const kid = kids.filter((kid : KidI)=>kid.id === id)[0];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexe(event.target.value);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleDelete = (kid: KidI) => {
    dispatch(kidsApplier.actions.removeKid(kid));
  }

  const handleSave = () => {
    setEditable(false);
    const newKid : KidI = {
      id: kid.id,
      name: enteredName,
      gender: sexe,
      age: 5 // static
    }

    dispatch(kidsApplier.actions.editKid(newKid));
  }
  return (
    <Card sx={{width: 300, height: 340}}>
      {!editable ? (
        <> {gender === "M"? (<CardMedia
        component="img"
        height="220"
        image="https://static.vecteezy.com/system/resources/previews/000/652/388/non_2x/head-of-cute-little-boy-avatar-character-vector.jpg"
        alt="Boy"
      />) : (
        <CardMedia
        component="img"
        height="220"
        image="https://static.vecteezy.com/system/resources/previews/000/649/904/non_2x/head-of-cute-little-girl-avatar-character-vector.jpg"
        alt="Girl"
      />
      )
      }
          
          <CardContent>
            <Typography variant="h5" color="text.primary">
              {name}
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
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 2, mt: 2 }
                }}
                noValidate>
                <TextField required
                  id="filled-basic"
                  label="Name"
                  variant="outlined"
                  value={enteredName}
                  onChange={(e)=>setEnteredName(e.target.value)}
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
