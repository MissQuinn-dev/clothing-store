import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useGlobalContext } from '../../context';
//cannot distructure id of tiem
const CartItem = ({ item, addToCart }) => {
  const { remove } = useGlobalContext();
  //need to pull in global context stuff {increase, decrease, toggleAmount}

  const { id, title, price, amount, image } = item;

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" style={{ marginTop: 100 }}>
      <div>
        <div>
          <h3>{title}</h3>
          <div className="information">
            <p>Price: ${price}</p>
          </div>
          <div className="buttons">
            <Button size="small" disableElevation variant="contained" onClick={() => remove(id)}>
              -
            </Button>
            <p>{amount}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </div>
        </div>
        <img src={image} alt={title} />
      </div>
    </Box>
  );
};

export default CartItem;
