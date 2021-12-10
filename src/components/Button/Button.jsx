import React from "react";
import { ButtonStyles } from "./ButtonStyles";

function Button({ children, onClick }) {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}

export default Button;
