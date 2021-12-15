import React, { useState, useEffect } from "react";
import { MainContainer } from "./MainStyles";
import { API_KEY, API_URL } from "../../config";
import Preloader from "../Preloader/Preloader";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";
import BasketList from "../BasketList/BasketList";

function Main() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [basketShow, setBasketShow] = useState(false);

  const AddOrder = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const RemoveOrder = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!basketShow);
  };

  const IncQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return { ...el, quantity: newQuantity };
      } else return el;
    });

    setOrder(newOrder);
  };
  const DecQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return { ...el, quantity: newQuantity >= 0 ? newQuantity : 0 };
      } else return el;
    });

    setOrder(newOrder);
  };

  useEffect(() => {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setProduct(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <MainContainer>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <ProductList product={product} AddOrder={AddOrder} />
      )}
      {basketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          RemoveOrder={RemoveOrder}
          IncQuantity={IncQuantity}
          DecQuantity={DecQuantity}
        />
      )}
    </MainContainer>
  );
}

export default Main;
