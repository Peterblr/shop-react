import React from "react";
import Product from "./Product/Product";
import { CardWrapper } from "./ProductListStyle";

function ProductList({ product = [], AddOrder = Function.prototype }) {
  if (!product.length) {
    return <h2>Nothing here...</h2>;
  }
  return (
    <CardWrapper>
      {product.map((item) => (
        <Product key={item.mainId} {...item} AddOrder={AddOrder} />
      ))}
    </CardWrapper>
  );
}

export default ProductList;
