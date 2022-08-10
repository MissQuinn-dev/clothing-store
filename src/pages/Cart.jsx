import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CartItem from '../components/cart/CartItem';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context';
import { moneyFormatter } from '../utils/moneyFormatter';

const Cart = () => {
  const { cart } = useGlobalContext();
  const allCartItems = [...new Set(cart)];
  const itemAmount = {};
  let grandTotal = 0;
  const totals = Array.from(
    allCartItems.reduce(
      (thing, { title, price }) => thing.set(title, (thing.get(title) || 0) + price),
      new Map(),
    ),
    ([title, price]) => ({ title, price }),
  );

  totals.forEach((thing) => {
    grandTotal = grandTotal + thing.price;
  });

  allCartItems.forEach((product) => {
    itemAmount[product.id] = (itemAmount[product.id] || 0) + 1;
  });

  console.log(grandTotal);

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
            <Button style={{ transform: 'translate(10%, -20%)' }} variant="contained">
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
        {eachUniqueItem.map((cartObject, index) => {
          return <CartItem key={index} {...cartObject} amount={itemAmount[cartObject.id]} />;
        })}
      </Grid>

      <Grid container direction="row" justifyContent="center" alignItems="flex-start">
        <Card sx={{ maxWidth: '40%' }}>
          <Typography m={2} align="center" variant="h4">
            Total: {moneyFormatter.format(grandTotal)}
          </Typography>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default Cart;
