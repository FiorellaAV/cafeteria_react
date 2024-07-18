import { Box, Grid, Typography, Button } from "@mui/material";
import HeaderContent from "../components/HeaderContent";
import FooterContent from "../components/FooterContent";
import MenuItemContent from '../components/MenuItemContent';
import { useEffect, useState } from "react";
import ItemTable from "../components/ItemTable";

function Menu() {

    const [listPhotos, setListPhotos] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (img, name, price) => {
        setTotal(total + Number(price.replace('$', '')));
        setCartList([...cartList, { img: img, name: name, price: price }]);
    }

    const setData = (photosMapped) => {
        setListPhotos(photosMapped);
    }

    const clearBasket = () => {
        setCartList([]);
        setTotal(0);
    }

    const handlePay = () => {
        alert('La plataforma de pagos no se encuentra disponible');
        setCartList([]);
        setTotal(0);
    }

    const fetchImages = async () => {
        const fetched = await fetch('https://api.sampleapis.com/coffee/hot')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return data;
            });
        const photosMapped = fetched.map((photo) => ({
            ...photo,
            name: photo.title,
            price: `$ ${(Math.floor(Math.random() * (3000 - 2000 + 1) + 2000)).toFixed(2)}`,
            image: photo.image
        }))
        setData(photosMapped);
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <Box>
            <HeaderContent />
            <Box sx={{ margin: '50px' }}>

                <Box sx={{ margin: '20px 20px' }} textAlign={'center'}>
                    <Typography fontFamily={'Donegal One'} fontSize={'35px'} fontWeight={600} color={'#000'}>
                        Nuestro menu
                    </Typography>
                </Box>
                <Grid container spacing={1}>{

                    listPhotos.map((item) => {
                        return (
                            <Grid item xs={12} sm={4} md={2}>
                                <MenuItemContent img={item.image} name={item.name} price={item.price} />
                                <Box display="flex" justifyContent="center" sx={{
                                    backgroundColor: '#dadada',
                                    borderBottomLeftRadius: '10px',
                                    borderBottomRightRadius: '10px'
                                }}>
                                    <Button sx={{ margin: '15px', backgroundColor: '#192951', color: '#fff', borderRadius: '10px' }} onClick={() => { addToCart(item.image, item.name, item.price) }}>
                                        Añadir
                                    </Button>
                                </Box>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Box>
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">
                <Box sx={{ backgroundColor: '#dadada', borderRadius: '15px', width: '500px', marginBottom: '20px', paddingBottom: '20px' }}>
                    <Grid item xs={12} sx={{ margin: '20px 20px' }} textAlign={'end'}>
                        {cartList.length > 0 && cartList.map((item, item_index) => {
                            return (
                                <div key={`table-basket-${item_index}`}>
                                    <ItemTable item={item} />
                                </div>
                            )
                        })}
                    </Grid>
                    <Grid container spacing={1} direction='row'>
                        <Grid item xs={10}>
                            <Box sx={{ margin: '20px 20px' }}>
                                <Typography fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={100} color={'#000'}>
                                    Total
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{ margin: '20px 0px' }} >
                                <Typography fontFamily={'Donegal One'} fontSize={'15px'} fontWeight={100} color={'#000'}>
                                    ${total}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} direction='row' alignItems="center" justifyContent="center" textAlign='center'>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ margin: '0px 20px' }}>
                                <Button className="btn-style-cancel" fullWidth sx={{ borderRadius: '10px' }} onClick={clearBasket}>
                                    Limpiar cesto
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ margin: '0px 20px' }}>
                                <Button className="btn-style-acept" fullWidth sx={{ borderRadius: '10px' }} onClick={handlePay}>
                                    Pagar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <FooterContent />
        </Box >
    );
}
export default Menu;