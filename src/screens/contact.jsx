import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import HeaderContent from "../components/HeaderContent";
import FooterContent from "../components/FooterContent";
import { useState } from "react";

function Contact() {

    const [data, setData] = useState({});

    const sendContact = () => {
        setData({ name: '', mail: '', observation: '' });
    };

    const handleInput = (evt, value) => {
        setData({ ...data, [evt.target.name]: value })
    };

    return (
        <Box>
            <HeaderContent />
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">

                <Box sx={{ margin: '50px 100px', textAlign: 'center', width: { xs: 'auto', sm: '400px' } }}>
                    <Typography fontFamily={'Donegal One'} fontSize={'20px'}>
                        ¿Tenés alguna duda ó consulta?
                    </Typography>
                    <Typography fontFamily={'Donegal One'} fontSize={'20px'}>
                        No dudes en contactarnos
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sx={{ marginTop: '50px' }}>
                            <TextField
                                id='name'
                                name='name'
                                label="Nombre"
                                fullWidth
                                value={data.name}
                                onChange={handleInput}
                                variant="outlined"
                            >

                            </TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: '30px' }}>
                            <TextField
                                id='mail'
                                name='mail'
                                label="Correo electrónico"
                                fullWidth
                                value={data.mail}
                                onChange={handleInput}
                                variant="outlined">
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sx={{ marginTop: '30px' }}>
                            <TextField
                                id='observation'
                                name='observation'
                                label="Observación"
                                value={data.observation}
                                rows={5}
                                multiline
                                fullWidth
                                onChange={handleInput}
                                variant="outlined">

                            </TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: '30px' }}>
                            <Button sx={{ color: '#fff', backgroundColor: '#192951', width: '200px' }} onClick={sendContact}>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: '30px' }}>
                        <Typography fontFamily={'Donegal One'} fontSize={'15px'} display="block" variant="oveline" sx={{ 'margin': '5px' }}>
                            Mitre 585 - Bariloche
                        </Typography>
                        <Typography fontFamily={'Donegal One'} fontSize={'15px'} display="block" variant="oveline" sx={{ 'margin': '5px' }}>
                            Horario de 8:00 a 20:00
                        </Typography>
                        <Typography fontFamily={'Donegal One'} fontSize={'15px'} display="block" variant="oveline" sx={{ 'margin': '5px' }}>
                            +54 9 2944 14 0550</
                        Typography>
                        <Typography fontFamily={'Donegal One'} fontSize={'16px'} display="block" variant="oveline" sx={{ 'margin': '5px' }}>
                            hola@cafedelirante.com.ar
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <FooterContent />
        </Box>
    );
}
export default Contact;