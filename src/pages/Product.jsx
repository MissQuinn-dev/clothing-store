import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../components/Buttons/AddToCartButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';

import { useApi } from '../hooks/useApi';

const Product = () => {
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
  //Call back ticket!!!
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, [id]);

  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={12} lg={6}>
          <Card>
            <CardMedia>
              <img
                style={{ margin: 'auto', maxHeight: 550 }}
                src={product.image}
                alt={product.title}
              />
            </CardMedia>
          </Card>
        </Grid>

        <Grid container item xs={12} lg={6} mt={1}>
          <Grid item>
            <Card style={{ height: 'inherit' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {product.title}
                </Typography>
                <Divider variant="middle" />
                <Typography variant="h6" gutterBottom component="div">
                  ${product.price}
                  <AddToCartButton product={product} />
                </Typography>

                <Rating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" color="error" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Product;
