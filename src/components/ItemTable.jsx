import { Grid, Typography } from '@mui/material';

const ItemTable = ({ item }) => {

    return (
        <div>
            <Grid container item>
                <Grid item xs={12} alignContent='right' alignSelf='right'>
                    <Typography sx={{ paddingLeft: '15px' }} fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={100} color={'#000'}>
                        {item?.name} {item?.price}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemTable;