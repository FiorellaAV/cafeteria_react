import { Box } from '@mui/material'
import HeaderContent from '../components/HeaderContent';
import FooterContent from '../components/FooterContent';
import MainContent from '../components/MainContent';

function Home() {

    return (
        <Box>
            <HeaderContent />
            <MainContent />
            <FooterContent />

        </Box >
    );
}
export default Home;