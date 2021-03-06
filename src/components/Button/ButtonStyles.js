import styled from "styled-components";

export const ButtonStyles = styled.button`
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 24px;
  background-color: rgb(255, 7, 110);
  display: table;
  cursor: pointer;
  transition: 500ms all;
  text-shadow: 2px 2px 10px yellow;

  &:hover {
    transform: scale(1.2);
  }
`;
