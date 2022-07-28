import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useApi } from '../../hooks/useApi';

import Button from '@mui/material/Button';

const AddToCart = ({ product }) => {
  const { cart, cartId, fetchData } = useGlobalContext();
  const request = useApi();

  const addToCart = async () => {
    try {
      await request.patch(`carts/${cartId}`, {
        products: [...cart, product],
      });
      return await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={() => addToCart()}>
      Add to cart
    </Button>
  );
};
export default AddToCart;
