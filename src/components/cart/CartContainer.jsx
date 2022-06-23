import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../context";
import Box from "@mui/material/Box";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <Box sx={{ width: "100%" }} style={{ marginTop: 100 }}>
        <section className="cart" style={{ marginTop: 100 }}>
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100%" }} style={{ marginTop: 100 }}>
      <section>
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cart &&
            cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
        </div>
        <footer>
          <hr />
          <div>
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
          <button onClick={clearCart}>clear cart</button>
        </footer>
      </section>
    </Box>
  );
};

export default CartContainer;
