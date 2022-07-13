import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CartItem from './CartItem';
import Grid from '@mui/material/Grid';

import { useGlobalContext } from '../../context';
const CartContainer = () => {
  const { cart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <React.Fragment>
        <Box textAlign="center" mt={3}>
          <Typography variant="h4" component="div">
            Oh No!~
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            You have not picked out anything yet.
          </Typography>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              style={{ transform: 'translate(10%, -20%)' }}
              variant="contained"
              color="secondary"
            >
              Take me back home!
            </Button>
          </Link>
        </Box>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {cart.map((cart, id) => {
          return <CartItem key={id} {...cart} />;
        })}
      </Grid>
      <Button variant="contained" color="secondary" onClick={() => console.log(...cart)}>
        Test
      </Button>
    </React.Fragment>
  );
};
export default CartContainer;
