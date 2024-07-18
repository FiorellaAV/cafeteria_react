import { Box, Grid, Typography } from '@mui/material'
import backgroundCoffee from '../assets/images/fondo-cafe.jpg';
import wePic from '../assets/images/cafe_delirante_nosotros.png';
import coffeeAero from '../assets/images/coffee-aeropress.jpg';
import coffeeChemex from '../assets/images/coffee-chemex.jpg';
import coffeePress from '../assets/images/coffee-press.jpg';
import coffeeV60 from '../assets/images/coffee-v60.jpg';

const MainContent = () => {

    const handleClickImage = (imageClicked) => {
        switch (imageClicked) {
            case 'aero':
                window.open('https://www.youtube.com/watch?v=VaYB69Sjpfc', "_blank", "noreferrer");
                break;
            case 'chemex':
                window.open('https://www.youtube.com/watch?v=kKG1nXKrZig', "_blank", "noreferrer");
                break;
            case 'press':
                window.open('https://www.youtube.com/watch?v=ZW0DVjlZ96U', "_blank", "noreferrer");
                break;
            case 'v60':
                window.open('https://www.youtube.com/watch?v=PY9OI_49UmE', "_blank", "noreferrer");
                break;
            default:
                null
        }

    }

    return (
        <Grid container sx={{
            margin: 0, textAlign: 'center', backgroundColor: '#ececec'
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ paddingTop: '30px' }}>
                        <img src={backgroundCoffee} height={'300px'} >
                        </img>
                    </Box>
                    <Box sx={{ paddingTop: '10px' }}>
                        <Typography fontFamily={'Donegal One'} fontSize={'25px'} fontWeight={600} color={'#d0a559'}>
                            Nuestra historia
                        </Typography>
                    </Box>
                    <Box sx={{ paddingTop: '10px' }}>
                        <Typography fontFamily={'Donegal One'} fontSize={'30px'} fontWeight={600} color={'#000'}>
                            Existimos para transformar la
                            forma en que se toma café.
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '30px 20%' }}>
                        <Typography fontFamily={'Donegal One'} fontSize={'15px'}>
                            <p>
                                La palabra Delirante viene del término latino “delirare”, que significa salir del surco al labrar la tierra. Nuestro café quiere llevarte a volar fuera de tu surco, haciendo la vida más disparatada e interesante.
                            </p>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ padding: '20px', paddingLeft: { sm: '0px', md: '55%' } }} >
                        <Box sx={{ borderTop: '2px solid black', borderBottom: '2px solid black', padding: '20px 0px' }}>
                            <Typography fontFamily={'Donegal One'} fontSize={'30px'}>
                                Creemos que tostar buen café es producto del trabajo consciente, la capacitación y la aplicación de la tecnología.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ padding: '20px', paddingRight: { sm: '0px', md: '50%' } }} >
                        <img src={wePic} height={'270px'} alt='nuestro-staff' >
                        </img>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ padding: '30px 20%' }}>
                        <Typography fontFamily={'Donegal One'} fontSize={'15px'}>
                            <p>
                                Cada tueste es una oportunidad para aprender y mejorar nuestros productos.
                                Desarrollamos los perfiles de cada café basándonos en los datos precisos que obtenemos mediante
                                el uso de instrumental especializado y la constante evaluación sensorial de nuestros cafés.
                            </p>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction={'row'} justifyContent={'center'} spacing={0.5} sx={{ backgroundColor: '#aba9a3' }} >
                <Grid item xs={3}>
                    <Box sx={{ padding: '30px' }} className='coffeeImage'>
                        <img src={coffeeAero} height={'300px'} style={{ borderRadius: "100px" }} alt='cafe aeroprensa' onClick={() => { handleClickImage('aero') }}  >
                        </img>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ padding: '30px' }} className='coffeeImage'>
                        <img src={coffeeChemex} height={'300px'} style={{ borderRadius: "100px" }} alt='cafe chemex' onClick={() => { handleClickImage('chemex') }}>
                        </img>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ padding: '30px' }} className='coffeeImage'>
                        <img src={coffeePress} height={'300px'} style={{ borderRadius: "100px" }} alt='cafe prensa francesa' onClick={() => { handleClickImage('press') }}>
                        </img>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ padding: '30px' }} className='coffeeImage'>
                        <img src={coffeeV60} height={'300px'} style={{ borderRadius: "100px" }} alt='cafe v60' onClick={() => { handleClickImage('v60') }}>
                        </img>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ padding: '60px 0px', backgroundColor: '#b58f57' }}>
                        <Box>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dz6wccZjfnM?si=QnoXFnuRl8t8UYRu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
                        </Box>
                        <Box sx={{ paddingTop: '35px' }}>
                            <Typography fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={600} color={'#000'}>
                                Somos uno de los tostadores de café de especialidad
                                más reconocidos de Argentina.
                            </Typography>
                        </Box>
                        <Box sx={{ padding: '15px 0' }}>
                            <Typography fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={200} color={'#000'}>
                                Desde Bariloche trabajamos para producir un excelente café.
                            </Typography>
                        </Box>
                        <Box sx={{ paddingTop: '8px 0' }}>
                            <Typography fontFamily={'Donegal One'} fontSize={'30px'} fontWeight={600} color={'#000'}>
                                Somos Delirante!
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default MainContent;