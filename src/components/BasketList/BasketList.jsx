import React from "react";
import Basket from "./Basket/Basket";
import { BasketListContainer, List } from "./BasketListStyles";
import { AiFillCloseCircle } from "react-icons/ai";
import { BasketStyles } from "./Basket/BasketStyles";

function BasketList({
  order = [],
  handleBasketShow = Function.prototype,
  RemoveOrder = Function.prototype,
  IncQuantity = Function.prototype,
  DecQuantity = Function.prototype,
}) {
  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price.regularPrice * element.quantity;
  }, 0);

  return (
    <BasketListContainer>
      <List>
        Корзина
        <AiFillCloseCircle
          onClick={handleBasketShow}
          size="2.5rem"
          color="red"
          cursor="pointer"
        />
      </List>
      {order.length ? (
        order.map((item) => (
          <Basket
            key={item.mainId}
            {...item}
            RemoveOrder={RemoveOrder}
            IncQuantity={IncQuantity}
            DecQuantity={DecQuantity}
          />
        ))
      ) : (
        <BasketStyles>Корзина пуста</BasketStyles>
      )}
      <List>Общая Стоимость: {totalPrice}</List>
    </BasketListContainer>
  );
}

export default BasketList;
