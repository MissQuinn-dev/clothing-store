import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';

import Products from './pages/Products';
import CheckOut from './components/cart/CheckOut';
import CartContainer from './components/cart/CartContainer';
import Product from './pages/Product';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cartcontainer" element={<CartContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </Router>
  );
};
export default App;