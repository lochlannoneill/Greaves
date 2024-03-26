import React from "react";
import { useEffect } from "react";
import { CartItems } from "../../Components/Cart/CartItems/CartItems";
import { CartCheckout } from "../../Components/Cart/CartCheckout/CartCheckout";
import { Popular } from "../../Components/Popular/Popular";
import "./Cart.css";

export const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="cart-main">
        <CartItems />
        <CartCheckout />
      </div>
      <Popular />
    </div>
  );
};

export default Cart;
