import React from 'react';
import Loading from '../components/Loading';
import ProductCategory from '../components/products/ProductCategory';
import Carousel from 'react-material-ui-carousel';
import { useGlobalContext } from '../context';
import Typography from '@mui/material/Typography';
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
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1" sx={{ fontFamily: 'Roboto' }}>
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
            <Typography variant="h5" sx={{ m: 2 }}>
              Here at BunNeed we pride ourselfs on providing easy access to all of your wildest
              needs in one convienent place! Fusce at congue libero. In risus dui, lacinia malesuada
              orci in, semper ultrices elit. Pellentesque laoreet faucibus dui vitae fermentum.
              Morbi vulputate mollis nisi a fermentum. Sed laoreet tellus sit amet elit rhoncus, non
              convallis lectus tincidunt. Pellentesque ullamcorper efficitur ex, non convallis
              lectus suscipit ac. Praesent dapibus, lectus in ultricies luctus, purus lectus
              hendrerit erat, in pulvinar ipsum tortor at dolor.
            </Typography>
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
            <Typography variant="h5" sx={{ m: 2 }}>
              Here at BunNeed we pride ourselfs on providing easy access to all of your wildest
              needs in one convienent place! Fusce at congue libero. In risus dui, lacinia malesuada
              orci in, semper ultrices elit. Pellentesque laoreet faucibus dui vitae fermentum.
              Morbi vulputate mollis nisi a fermentum. Sed laoreet tellus sit amet elit rhoncus, non
              convallis lectus tincidunt. Pellentesque ullamcorper efficitur ex, non convallis
              lectus suscipit ac. Integer dignissim odio consequat ante vestibulum, vitae ornare
              velit feugiat. Maecenas quis cursus dui, et fringilla nisi. Duis non sapien ante.
              Donec sit amet tempus tortor. Sed at dui quam. Praesent dapibus, lectus in ultricies
              luctus, purus lectus hendrerit erat, in pulvinar ipsum tortor at dolor.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
