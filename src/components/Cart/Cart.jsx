import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartStyles } from "./CartStyles";

function Cart({ quantity = 0 }) {
  return (
    <CartStyles>
      <HiShoppingCart />
      {quantity ? <span>{quantity}</span> : null}
    </CartStyles>
  );
}

export default Cart;
