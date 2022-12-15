import UnitCard from "../../components/UnitCard";
import AddCard from "../../components/AddCard"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../app/hooks';
import { kidsSelector } from './reducer/selector';
import { KidI } from "./reducer/state";

const Dependents = () => {

    const kids = useAppSelector(kidsSelector);
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    {kids.map((skid: KidI) => 
                        <Grid item key={skid['id']}>
                            <UnitCard {...skid}/>
                        </Grid>
                    )} 
                    <Grid item>
                        <AddCard />
                    </Grid>
                </Grid>
            </Box>
        </>
        
    );
}

export default Dependents;