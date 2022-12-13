import Header from "../../components/Header";
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
            <Header />
            <Box>
                <Grid container spacing={2}>
                    {kids.kids.map((kid: KidI) => 
                        <Grid item key={kid['id']}>
                            <UnitCard id= {kid['id']} name={kid['name']} gender={kid['gender']}/>
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