import React, { useEffect } from "react";
import UnitCard from "../../components/UnitCard";
import AddCard from "../../components/AddCard"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { kidsSelector } from './reducer/selector';
import { KidI } from "./reducer/state";
import "./styles.css";
import {
  getKids,
} from './reducer/thunks';

const Dependents = () => {

  const dispatch = useAppDispatch();
  const kids = useAppSelector(kidsSelector);
  
  useEffect(() => {
    dispatch(getKids());
  }, [dispatch])

  return (
    <div className="dependentpage">
      <Box>
        <h1>Dependents</h1>
        <Grid container spacing={5}>
          {kids.map((skid: KidI) =>
            <Grid item key={skid.id}>
              <UnitCard {...skid} />
            </Grid>
          )}
          <Grid item>
            <AddCard />
          </Grid>
        </Grid>
        <br></br>
      </Box>
    </div>

  );
}

export default Dependents;