import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../Buttons/AddToCartButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';

import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

const ProductItem = ({ id }) => {
  const [product, setProduct] = useState('');
  const request = useApi();
  const navigate = useNavigate();
  const getProduct = useCallback(async () => {
    try {
      const response = await request.get(`products/${id}`);
      const data = await response.data;
      if (data) {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);
  return (
    <Grid container direction="row" justifyContent="center" item sm={12} md={6} lg={4}>
      <Card style={{ maxWidth: '100%' }}>
        <ButtonBase onClick={() => navigate(`../product/${product.id}`, { replace: true })}>
          <CardMedia component="img" alt={product.title} image={product.image} />
        </ButtonBase>
        <Grid container>
          <CardContent>
            <Link to={`../product/${product.id}`} style={{ textDecoration: 'none' }}>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                {product.title}
              </Typography>
            </Link>
            <Typography gutterBottom variant="h5" component="div">
              ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Grid>
        <CardActions>
          <Grid>
            <Button
              variant="contained"
              onClick={() =>
                navigate(`../products/category/${product.category}`, { replace: true })
              }
            >
              {product.category}
            </Button>
          </Grid>
          <AddToCartButton product={product} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
