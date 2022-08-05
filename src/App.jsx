import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Products from './pages/Products';
import CheckOut from './components/cart/CheckOut';
import Cart from './pages/Cart';
import Product from './pages/Product';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/category/:category" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </Router>
  );
};
export default App;
