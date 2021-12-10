import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: #5930e5;
  height: 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`;

export const Div1 = styled.div`
  margin-left: 2rem;
  align-items: center;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: rgba(255, 255, 100, 0.75);
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  } ;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const pulse = keyframes`
from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  text-decoration: none;
  border-radius: 30px;

  box-shadow: 0 0 50px #00ffff, 0 0 100px #00ffff, 0 0 150px #00ffff,
    0 0 200px #0072ff;

  animation: ${pulse} 3s linear infinite;

  &:hover {
    color: rgba(255, 255, 100, 0.75);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.2);
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  } ;
`;
