import React from 'react';
import { useGlobalContext } from '../../context';
import { useApi } from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const AddToCartButton = ({ product }) => {
  const { cart, userInfo, fetchData } = useGlobalContext();
  const navigate = useNavigate();
  const request = useApi();

  const addToCart = async () => {
    try {
      await request.patch(`carts/${userInfo.cartId}`, {
        products: [...cart, product],
      });
      return await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!userInfo.userId ? (
        <React.Fragment>
          <Button variant="contained" onClick={() => navigate('/login')}>
            Add to cart
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Button variant="contained" onClick={() => addToCart()}>
            Add to cart
          </Button>
        </React.Fragment>
      )}
    </div>
  );
};
export default AddToCartButton;
