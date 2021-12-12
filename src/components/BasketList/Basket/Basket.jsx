import React from "react";
import { BasketStyles } from "./BasketStyles";
import { AiFillCloseCircle } from "react-icons/ai";

function Basket({ mainId, displayName, price, quantity }) {
  return (
    <BasketStyles>
      {displayName} * {quantity} = {price.regularPrice}
      <span>
        <AiFillCloseCircle size="2.5rem" />
      </span>
    </BasketStyles>
  );
}

export default Basket;
