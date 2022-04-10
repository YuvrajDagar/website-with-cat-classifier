import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoutes,
  SideItem,
} from "./Sidebar.Styles";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">
            <SideItem onClick={toggle}>Home</SideItem>
          </SidebarLink>
          <SidebarLink to="/about">
            <SideItem onClick={toggle}>About</SideItem>
          </SidebarLink>
          <SidebarLink to="/easy">
            <SideItem onClick={toggle}>Easy</SideItem>
          </SidebarLink>
          <SidebarLink to="/hard">
            <SideItem onClick={toggle}>Hard</SideItem>
          </SidebarLink>
          <SidebarLink to="/games">
            <SideItem onClick={toggle}>Games</SideItem>
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoutes to="/" onClick={toggle}>
            Sign Up
          </SidebarRoutes>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
