import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { useGlobalContext } from '../../context';
const DeleteProducts = () => {
  const request = useApi();
  const navigate = useNavigate();
  const { products, setProducts } = useGlobalContext();

  const deleteAllProducts = async () => {
    await Promise.all(
      products.map(async (product) => {
        try {
          await request.delete(`products/${product.id}`);
        } catch (error) {
          console.log(error);
        }
      }),
    );

    setProducts([]);
    navigate(0);
  };
  return (
    <Button variant="contained" onClick={async () => await deleteAllProducts()}>
      Wipe Products
    </Button>
  );
};
export default DeleteProducts;
