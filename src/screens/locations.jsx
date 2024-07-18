import { Box, Grid, Typography } from "@mui/material";
import HeaderContent from "../components/HeaderContent";
import FooterContent from "../components/FooterContent";
import LocationCard from "../components/LocationCard";

function Locations() {
    return (
        <Box>
            <HeaderContent />
            <Box textAlign={'center'}>
                <Typography sx={{ paddingTop: '10px', paddingLeft: '20px' }} fontFamily={'Donegal One'} fontWeight={600} fontSize={'30px'} color={'#e7b894'}>
                    Nuestros Locales
                </Typography>
            </Box>
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">
                <Grid item xs={12} sm={6} >
                    <LocationCard location={'Neuquén'} address={'Gral. Roca 595, Q8430 San Martín de los Andes'} />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <LocationCard location={'Río Negro'} address={'Remedios de Escalada 1802, R8400 San Carlos de Bariloche'} />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <LocationCard location={'Río Negro'} address={'Mitre 585, R8400GMC San Carlos de Bariloche'} />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <LocationCard location={'Río Negro'} address={'Av. de los Pioneros 4962, R8400 San Carlos de Bariloche'} />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <LocationCard location={'Río Negro'} address={'Base Cerro Catedral - Plaza Amancay, R8400 San Carlos de Bariloche'} />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <LocationCard location={'Río Negro'} address={'Onelli 2715, R8430 El Bolsón'} />
                </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item xs={12} >
                    <Box sx={{ margin: '50px', border: '2px solid black', borderRadius: '5px' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1087570.3604438775!2d-71.50037163904008!3d-41.155978264236495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCaf%C3%A9%20Delirante!5e0!3m2!1ses!2sar!4v1720919949257!5m2!1ses!2sar" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Grid>
            </Grid>
            <FooterContent />
        </Box>
    );
}
export default Locations;