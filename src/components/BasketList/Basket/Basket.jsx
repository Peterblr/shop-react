import React from "react";
import { BasketStyles } from "./BasketStyles";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

function Basket({
  mainId,
  displayName,
  price,
  quantity,
  RemoveOrder = Function.prototype,
  IncQuantity = Function.prototype,
  DecQuantity = Function.prototype,
}) {
  return (
    <BasketStyles>
      {displayName}{" "}
      <AiFillMinusCircle cursor="pointer" onClick={() => DecQuantity(mainId)} />{" "}
      {quantity}
      <AiFillPlusCircle
        cursor="pointer"
        onClick={() => IncQuantity(mainId)}
      />{" "}
      = {price.regularPrice * quantity}
      <span onClick={() => RemoveOrder(mainId)}>
        <AiFillCloseCircle size="2.5rem" color="red" cursor="pointer" />
      </span>
    </BasketStyles>
  );
}

export default Basket;
