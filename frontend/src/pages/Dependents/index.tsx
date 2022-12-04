import Header from "../../components/Header";
import UnitCard from "../../components/UnitCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const array = [1, 2, 3, 4];
const kids = [{id: 1, name: "youssra", gender: "F", age: 5}, 
                {id: 2, name: "othmane", gender: "M", age: 6}, 
                {id: 3, name: "hajar", gender: "F", age: 7}];

const Dependents = () => {
    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 , }}>
                <Grid container spacing={2}>
                    {kids.map( (kid) => 
                        <Grid item >
                            <UnitCard name={kid['name']} gender={kid['gender']}/>
                        </Grid>
                    )} 
                </Grid>
            </Box>
        </>
        
    );
}

export default Dependents;