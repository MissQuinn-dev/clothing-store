import React from 'react';
import Loading from '../components/Loading';
import ProductCategory from '../components/products/ProductCategory';
import Carousel from 'react-material-ui-carousel';
import { useGlobalContext } from '../context';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
  const { products, loading, categoryArray } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (products.length < 1) {
    return <h2>you need to have a category to show it</h2>;
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          border: 3,
          borderColor: '#ff94c6',
          marginTop: 4,
          marginBottom: 4,
          borderRadius: '16px',
        }}
      >
        <Carousel>
          {categoryArray.map((categoryArray, id) => {
            return <ProductCategory key={id} {...categoryArray} />;
          })}
        </Carousel>
      </Box>
      <Grid container item direction="row" justifyContent="space-around" alignItems="baseline">
        <Card>
          <Typography variant="h5">asdasdgsdfag</Typography>
        </Card>
        <Card>
          <Typography variant="h5">asdasdgsdfag</Typography>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
