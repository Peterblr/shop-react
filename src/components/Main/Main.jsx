import React, { useState, useEffect } from "react";
import { MainContainer } from "./MainStyles";
import { API_KEY, API_URL } from "../../config";
import Preloader from "../Preloader/Preloader";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";

function Main() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  console.log();

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
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <ProductList product={product} AddOrder={AddOrder} />
      )}
    </MainContainer>
  );
}

export default Main;
