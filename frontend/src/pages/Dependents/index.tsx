import UnitCard from "../../components/UnitCard";
import AddCard from "../../components/AddCard"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../app/hooks';
import { kidsSelector } from './reducer/selector';
import { KidI } from "./reducer/state";
import "./styles.css";

const Dependents = () => {

    const kids = useAppSelector(kidsSelector);
    return (
        <div className="dependentpage">
            <Box>
                <h1>Dependents</h1>
                <Grid container spacing={5}>
                    {kids.map((skid: KidI) => 
                        <Grid item key={skid.id}>
                            <UnitCard {...skid}/>
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