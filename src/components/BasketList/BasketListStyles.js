import styled from "styled-components";

export const BasketListContainer = styled.ul`
  position: fixed;
  margin: 0;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 100, 0.75);
  background-color: rgba(255, 7, 110, 0.8);
  height: 20rem;
  width: 50rem;
  max-width: 95%;
  font-size: 1.5rem;
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
`;

export const List = styled.li`
  background-color: #5930e5;
  height: 3rem;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
