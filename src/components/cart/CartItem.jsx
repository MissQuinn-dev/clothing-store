import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { useApi } from '../../hooks/useApi';

const CartItem = ({ id }) => {
  const [cartItem, setCartItem] = useState('');
  const request = useApi();
  const getProduct = async () => {
    try {
      const response = await request.get(`products/${id}`);
      setCartItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <Grid item xs={3}>
      <Card style={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          alt={cartItem.title}
          image={cartItem.image}
          style={{ height: 100 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cartItem.title}${cartItem.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cartItem.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{cartItem.category}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CartItem;
