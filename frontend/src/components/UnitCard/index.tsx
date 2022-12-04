import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItem from '@mui/material/ListItem';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from "@mui/material";
import { useState } from "react";

export default function UnitCard({
  name,
  gender,
}: {
  name: string;
  gender: string;
}) {
  const [editable, setEditable] = useState(false);
  const [sexe, setSexe] = React.useState('');
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const genders = [
    {
      value: 'F',
      label: 'Girl',
    },
    {
      value: 'M',
      label: 'Boy',
    },
    {
      value: 'NB',
      label: 'Non Binary'
    }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexe(event.target.value);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
  }

  return (
    <Card sx={{ width: 300 }}>
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
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <EditIcon onClick={handleEdit} />
            </IconButton>
          </CardActions>
        </>
      ) : (
        <>
          <CardContent>
            <TextField required
              id="filled-basic"
              label="Name"
              variant="outlined"
              defaultValue={name}
              sx={{width: 262}}
            ></TextField>
            <div>
              <TextField required
                id="outlined-select-gender"
                select
                label="Gender"
                value={sexe}
                onChange={handleChange}
                sx={{mt: 2, width: 262, mb: 2}}
              >
                {genders.map((option) => (
                  <ListItem key={option.value} value={option.value} sx={{color: 'black'}}>
                    {option.label}
                  </ListItem>
                ))}
              </TextField>
            </div> 
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker
                label="Date of birth"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick = {handleSave}>
              <SaveIcon />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
}
