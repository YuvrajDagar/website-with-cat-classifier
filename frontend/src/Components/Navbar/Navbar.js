import React from "react";
import { FaBars } from "react-icons/fa";
import {
  StyledNavbar,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./Navbar.styles";

const Navbar = ({ toggle }) => {
  return (
    <StyledNavbar>
      <NavbarContainer>
        <NavLogo to="/">Website</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/easy">Easy</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/hard">Hard</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/games">Games</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Sign up</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
