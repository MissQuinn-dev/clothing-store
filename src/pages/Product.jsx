import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';

import { useApi } from '../hooks/useApi';
import { useGlobalContext } from '../context';

const Product = () => {
  const { fetchData, cart, cartId } = useGlobalContext();
  console.log(cart);

  const [product, setProduct] = useState('');
  const { id } = useParams();
  const request = useApi();
  const getProduct = async () => {
    try {
      // const response = await fetch(`http://localhost:4000/products/${id}`);
      const response = await request.get(`products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  const addToCart = async () => {
    try {
      await request.patch(`carts/${cartId}`, {
        products: [...cart, product],
      });
      return await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Grid container alignItems="stretch" justifyContent="space-around">
        <Grid item xs={5} md={7}>
          <Container maxWidth="md">
            <Box sx={{ height: '50vh' }}>
              <Card>
                <CardMedia style={{ height: '100%', width: '100%' }}>
                  <img
                    style={{ minWidth: 400, margin: 'auto' }}
                    src={product.image}
                    alt={product.title}
                  />
                </CardMedia>
              </Card>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={7} md={5}>
          <Container maxWidth="md">
            <Box sx={{ bgcolor: '#FFD7EA', height: '50vh' }}>
              <Typography variant="h5" gutterBottom component="div">
                {product.title}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="h6" gutterBottom component="div">
                {product.price}
              </Typography>
              <Box>
                <Rating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" color="error" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </Box>
              <Button variant="contained" color="secondary" onClick={() => addToCart()}>
                Add to cart
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Product;
