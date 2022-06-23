import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CheckOut from "./components/cart/CheckOut";
import CartContainer from "./components/cart/CartContainer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cartcontainer" element={<CartContainer />} />
        </Routes>
      </Container>
    </Router>
  );
};
export default App;
