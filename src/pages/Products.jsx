import React, { useState, useEffect } from 'react';
import ProductItem from '../components/products/ProductItem';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useApi } from '../hooks/useApi';
import { useParams } from 'react-router-dom';
import Error from './Error';

const Products = () => {
  const { category } = useParams();
  const [displayProducts, setDisplayProducts] = useState([]);
  const request = useApi();

  const matchCategory = (value) => {
    if (value.category && category) {
      return value.category.toLowerCase().trim() === category.toLowerCase().trim();
    }
    return true;
  };

  const getProducts = async () => {
    try {
      // const response = await fetch(`http://localhost:4000/products/${id}`);
      const response = await request.get(`products`);
      const products = response.data;
      if (!category) {
        setDisplayProducts(products);
      }
      setDisplayProducts(products.filter(matchCategory));
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  //Call back ticket!!!
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [category]);

  return displayProducts.length > 0 ? (
    <div>
      <Typography variant="h3" component="div" gutterBottom>
        Products
      </Typography>
      <Divider variant="middle" style={{ marginBottom: 48 }} />
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {displayProducts.map((product, id) => {
          return <ProductItem key={id} {...product} />;
        })}
      </Grid>
    </div>
  ) : (
    <Error />
  );
};

export default Products;
