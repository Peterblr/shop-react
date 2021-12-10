import React from "react";
import {
  CardImage,
  CardStats,
  CardStatWrapper,
  CardTextBody,
  CardTextDate,
  CardTextTitle,
  CardTextWrapper,
  CardWrapper,
} from "./ProductStyles";

import Button from "../../Button/Button";

function Product({
  mainId,
  displayName,
  displayDescription,
  price,
  granted,
  AddOrder = Function.prototype,
}) {
  return (
    <CardWrapper>
      <CardImage background={granted.map((img) => img.images.background)} />
      <CardTextWrapper>
        <CardTextTitle>{displayName}</CardTextTitle>
        <CardTextBody>{displayDescription}</CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <Button
            onClick={() => {
              AddOrder({
                mainId,
                displayName,
                price,
              });
            }}
          >
            Купить
          </Button>
        </CardStats>
        <CardStats>
          <CardTextDate>{price.regularPrice}</CardTextDate>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
}

export default Product;
