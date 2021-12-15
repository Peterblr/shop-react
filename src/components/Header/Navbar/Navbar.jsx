import React from "react";
import { Container, Div1, Div2, NavLink } from "./NavbarStyles";
import { AiFillCar, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Navbar() {
  return (
    <Container>
      <Div1>logo</Div1>
      <Div2>
        <NavLink
          href="https://github.com/Peterblr/shop-react"
          target="_blank"
          id="github"
        >
          <AiFillGithub />
        </NavLink>
        <NavLink href="https://google.com" target="_blank">
          <AiFillLinkedin />
        </NavLink>
        <NavLink href="https://google.com" target="_blank">
          <AiFillCar />
        </NavLink>
      </Div2>
    </Container>
  );
}

export default Navbar;
