import React, { useState, useEffect } from 'react';
import AddToCartButton from '../Buttons/AddToCartButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useApi } from '../../hooks/useApi';

const ProductItem = ({ id }) => {
  const [product, setProduct] = useState('');
  const request = useApi();
  const getProduct = async () => {
    try {
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
    <Grid container item xs={12} sm={6} md={4}>
      <Card style={{ maxWidth: '100%' }}>
        <CardMedia component="img" alt={product.title} image={product.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{product.category}</Button>
          <AddToCartButton product={product} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
