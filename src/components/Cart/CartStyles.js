import styled, { keyframes } from "styled-components";

const pulse = keyframes`
from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

export const CartStyles = styled.div`
  position: fixed;
  color: rgba(255, 255, 100, 0.75);
  font-size: 5rem;
  right: 3rem;
  cursor: pointer;
  animation: ${pulse} 3s linear infinite;
  z-index: 5;
  background-color: rgba(255, 7, 110, 0.5);
  padding: 1rem;
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);

  &:hover {
    color: rgb(255, 7, 110);
    background-color: none;
    opacity: 1;
    cursor: pointer;
    transform: scale(1.2);
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  } ;
`;
