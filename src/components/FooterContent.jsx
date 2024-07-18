import { Box, Typography, Container } from '@mui/material';

const FooterContent = () => {

    return (

        <Box sx={{
            width: '100%',
            position: 'relative',
            bottom: 0,
            backgroundColor: '#192951',
            marginTop: '-10px'
        }} component="footer" variant="outlined">
            <Container maxWidth="lg">
                <Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            my: 1,
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            mb: 2,
                        }}
                    >
                        <Typography variant="caption" color="initial" sx={{ fontFamily: 'Donegal One', fontSize: '20px', color: '#fff', marginTop: '10px', marginBottom: '20px', fontWeight: 'bold' }}>
                            Fiorella Aquino Valditara
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default FooterContent;