import { Box, Button, Grid } from '@mui/material';
import iconDelirante from '../assets/logo/delirante-logo.png'
import { useNavigate } from 'react-router-dom';

const HeaderContent = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{ minHeight: '100%', minWidth: '100%', backgroundColor: '#ececec' }}>
            <Box display={"block"} sx={{
                paddingTop: '10px', marginBottom: '15px'
            }}>
                <Grid container spacing={2}>
                    <Grid item sm={2} >
                        <Box sx={{ margin: '15px 0px', marginLeft: '40px' }}>
                            <img src={iconDelirante} alt='logo' width={'175px'} height={'35px'}>
                            </img>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ backgroundColor: '#eebb91' }}>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <Button fullWidth className="btn-style" onClick={(() => navigate('/home'))}>
                            Nosotros
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button fullWidth className="btn-style" onClick={(() => navigate('/menu'))} >
                            Menu
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button fullWidth className="btn-style" onClick={(() => navigate('/locales'))} >
                            Locales
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button fullWidth className="btn-style" onClick={(() => navigate('/contacto'))} >
                            Contacto
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default HeaderContent;