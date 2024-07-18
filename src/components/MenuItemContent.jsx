
import { Typography, Box } from '@mui/material';
import { useEffect } from 'react';

const MenuItemContent = ({ img, name, price }) => {
    useEffect(() => {
    }, [])

    return (
        <Box sx={{
            backgroundColor: '#dadada',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
        }}>
            <Box sx={{ paddingTop: '20px' }} display="flex" justifyContent="center">
                <img src={img} height={'200px'} alt={name} style={{ borderRadius: "10px" }} ></img>
            </Box>
            <Box sx={{ paddingTop: '10px' }} display="flex" justifyContent="center">
                <Typography fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={600} color={'#000'}>
                    {name}
                </Typography>
            </Box>
            <Box sx={{ paddingTop: '10px' }} display="flex" justifyContent="center">
                <Typography fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={100} color={'#000'}>
                    {price}
                </Typography>
            </Box>
        </Box>
    );
};
export default MenuItemContent;