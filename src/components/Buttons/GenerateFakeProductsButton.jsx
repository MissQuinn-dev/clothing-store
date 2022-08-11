import React from 'react';
import Button from '@mui/material/Button';
import { fakeProducts } from '../../utils/fakeProducts';
import { useApi } from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

/*
...this button can be imported anywhere. and when clicked it loops over the fakeProducts Array, and runs request.post to the createProduct route 

fakeProducts.forEach((product) =>{
    request . post product
})

request.post product
*/

const GenerateFakeProductsButton = () => {
  const request = useApi();
  const navigate = useNavigate();
  const { fetchData } = useGlobalContext();
  const addFakeProducts = async () => {
    await Promise.all(
      fakeProducts.map(async (product) => {
        try {
          await request.post('products', { ...product });
        } catch (error) {
          console.log(error);
        }
      }),
    );

    fetchData();
    navigate(0);
  };

  return (
    <Button variant="contained" onClick={() => addFakeProducts()}>
      Generate Fake Products
    </Button>
  );
};
export default GenerateFakeProductsButton;
