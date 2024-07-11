import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

import Center from "./Center";
import { useSelector } from "react-redux";
import Bars from "./icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  display: none;
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  ${(props) =>
    props.$mobilenavactive === "false" &&
    `
      display: block;
    `}
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "All Products",
    path: "/products",
  },
  {
    id: 3,
    name: "Categories",
    path: "/categories",
  },
  {
    id: 4,
    name: "Account",
    path: "/account",
  },
  {
    id: 5,
    name: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [mobilenavactive, setmobilenavactive] = useState(false.toString());

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href="/">Ecommerce</Logo>
          <StyledNav $mobilenavactive={mobilenavactive}>
            {links.map((link) => (
              <NavLink key={link.id} href={link.path} suppressHydrationWarning>
                {link.path === "/cart"
                  ? link.name + " " + "(" + cartProducts?.length + ")"
                  : link.name}
              </NavLink>
            ))}
          </StyledNav>
          <NavButton
            onClick={() =>
              setmobilenavactive((prev) =>
                prev === "false" ? "true" : "false"
              )
            }
          >
            <Bars />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
