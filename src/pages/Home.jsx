import React from 'react';
import Loading from '../components/Loading';
import ProductCategory from '../components/products/ProductCategory';
import Carousel from 'react-material-ui-carousel';
import { useGlobalContext } from '../context';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GenerateFakeProductsButton from '../components/Buttons/GenerateFakeProductsButton';
import DeleteProducts from '../components/Buttons/DeleteProducts';
const Home = () => {
  const { products, loading, categoryArray } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (products.length < 1) {
    return (
      <div>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Grid container item style={{ maxWidth: '51%' }}>
            <Typography variant="h5" align="center">
              Pressing this will populate the API with placeholder products. Make sure you have the
              API up and running first. Thank you for stopping by my storefront website!
            </Typography>
          </Grid>
          <Grid container item direction="row" justifyContent="center" mt={3}>
            <GenerateFakeProductsButton>Generate Fake Products</GenerateFakeProductsButton>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h2" sx={{ fontFamily: 'Roboto' }}>
            BunNeed
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ fontFamily: 'Roboto' }}>
            All your necessary products in one place!~
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          border: 4,
          borderColor: '#ff94c6',
          marginTop: 2,
          marginBottom: 2,
          borderRadius: '8px',
        }}
      >
        <Carousel>
          {categoryArray.map((categoryArray, id) => {
            return <ProductCategory key={id} {...categoryArray} />;
          })}
        </Carousel>
      </Box>
      <Grid container item direction="row" justifyContent="space-between">
        <Grid container item sx={{ maxWidth: '48%' }}>
          <Box
            sx={{
              border: 2,
              borderColor: '#ff94c6',
              marginTop: 4,
              marginBottom: 4,
              borderRadius: '16px',
            }}
          >
            <Typography variant="h5" sx={{ m: 3 }} align="center">
              Thank you for checking out my storefront Website template. Make sure you have the API
              running and then use the buttons below to add or remove placeholder content. Or use
              the API to generate your own products. Log in or register to see full features. Have a
              wonderful day~!
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              sx={{ mt: 5 }}
            >
              <GenerateFakeProductsButton />
              <DeleteProducts />
            </Grid>
          </Box>
        </Grid>
        <Grid container item sx={{ maxWidth: '48%' }}>
          <Box
            sx={{
              border: 2,
              borderColor: '#ff94c6',
              marginTop: 4,
              marginBottom: 4,
              borderRadius: '16px',
            }}
          >
            <Typography variant="h5" sx={{ m: 3 }}>
              Here at BunNeed we pride ourselfs on providing easy access to all of your wildest
              needs in one convienent place! Fusce at congue libero. In risus dui, lacinia malesuada
              orci in, semper ultrices elit. Pellentesque laoreet faucibus dui vitae fermentum.
              Morbi vulputate mollis nisi a fermentum. Sed laoreet tellus sit amet elit rhoncus, non
              convallis lectus tincidunt. Pellentesque ullamcorper efficitur ex, non convallis
              lectus suscipit ac.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
