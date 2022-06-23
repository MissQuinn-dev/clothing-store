import React from "react";
import CartItem from "../components/cart/CartItem";
const Home = () => {
  const fakeItem = {
    id: "butts",
    title: "turtle",
    price: 6.69,
  };
  return (
    <nav>
      <h2>home</h2>
      <CartItem {...fakeItem}></CartItem>
    </nav>
  );
};

export default Home;
