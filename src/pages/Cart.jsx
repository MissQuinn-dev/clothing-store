import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CartItem from '../components/cart/CartItem';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context';

const Cart = () => {
  const { cart } = useGlobalContext();
  const allCartItems = [...new Set(cart)];
  const itemAmount = {};

  allCartItems.forEach((product) => {
    itemAmount[product.id] = (itemAmount[product.id] || 0) + 1;
  });

  let eachUniqueItem = allCartItems.filter(function ({ id }) {
    return !this.has(id) && this.add(id);
  }, new Set());

  if (allCartItems.length === 0) {
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
        {eachUniqueItem.map((cartObject, id) => {
          return <CartItem key={id} {...cartObject} />;
        })}
      </Grid>
      <Button variant="contained" color="secondary" onClick={() => console.log(itemAmount)}>
        Test
      </Button>
    </React.Fragment>
  );
};
export default Cart;
