import React from 'react';
import Loading from '../components/Loading';
import ProductItem from '../components/products/ProductItem';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context';

const Products = () => {
  const { products, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (products.length < 1) {
    return <h2>no products match your search term.</h2>;
  }
  return (
    <div>
      <Typography variant="h3" component="div" gutterBottom>
        Products
      </Typography>
      <Divider variant="middle" style={{ marginBottom: 48 }} />
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {products.map((product, index) => {
          return <ProductItem key={index} {...product} />;
        })}
      </Grid>
    </div>
  );
};

export default Products;
