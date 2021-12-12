import React from "react";
import Basket from "./Basket/Basket";
import { BasketListContainer, List } from "./BasketListStyles";
import { AiFillCloseCircle } from "react-icons/ai";

function BasketList({ order = [], handleBasketShow = Function.prototype }) {
  return (
    <BasketListContainer>
      <List>
        Корзина
        <AiFillCloseCircle onClick={handleBasketShow} size="2.5rem" />
      </List>
      {order.length ? (
        order.map((item) => <Basket key={item.mainId} {...item} />)
      ) : (
        <li>Корзина пуста</li>
      )}
      <List>Общая Стоимость</List>
    </BasketListContainer>
  );
}

export default BasketList;
