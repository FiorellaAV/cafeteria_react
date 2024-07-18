import { Box, Grid, Typography, Paper, Container } from '@mui/material';

const LocationCard = ({ location, address }) => {

    return (
        <Box sx={{ backgroundColor: '#dadada', borderRadius: '10px', height: '120px', width: '600px', marginTop: '20px', boxShadow: '1px 5px 1px #000' }}>
            <Typography sx={{ paddingTop: '20px', paddingLeft: '20px', }} fontFamily={'Donegal One'} fontSize={'20px'} fontWeight={600} >
                {location}
            </Typography>
            <Typography sx={{ paddingTop: '10px', paddingLeft: '20px' }} fontFamily={'Donegal One'} fontSize={'15px'}>
                {address}
            </Typography>
        </Box>
    )
}

export default LocationCard;