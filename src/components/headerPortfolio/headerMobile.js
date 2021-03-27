import React, { useRef } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { gsap } from "gsap";

import { FiX } from "react-icons/fi";
import { disableScroll, enableScroll } from "../../customHooks/scrollFunctions";

const MobilePortfolioHeader = () => {
  let menu = useRef(null);

  const history = useHistory();

  const OpenMenu = () => {
    disableScroll();
    gsap.to(menu, {
      duration: 0.3,
      opacity: 1,
      display: "inherit",
      ease: "Power1.inOut",
    });
  };

  const CloseMenu = () => {
    gsap.to(menu, {
      duration: 0.3,
      opacity: 0,
      display: "none",
      ease: "Power1.inOut",
    });
    enableScroll();
  };

  return (
    <>
      <ButtonWrapper>
        <Menu onClick={OpenMenu}>Explore categories</Menu>
      </ButtonWrapper>
      <MenuWrapper
        ref={(e) => {
          menu = e;
        }}
      >
        <Main>
          <HomeButton
            onClick={() => {
              enableScroll();
              history.push("/");
            }}
          >
            Home
          </HomeButton>
          <CloseButton onClick={CloseMenu}>
            <X />
          </CloseButton>
          <Header>Select a category</Header>
          <Link exact to="/portfolio" onClick={enableScroll}>
            All time best
          </Link>
          <Link to="/portfolio/skiing" onClick={enableScroll}>
            Skiing
          </Link>
          <Link to="/portfolio/climbing" onClick={enableScroll}>
            Climbing
          </Link>
          <Link to="/portfolio/lifestyle" onClick={enableScroll}>
            Lifestyle
          </Link>
          <Link to="/portfolio/landscape" onClick={enableScroll}>
            Landscapes
          </Link>
        </Main>
      </MenuWrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.button`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  border: black solid 2px;
  padding: 10px 20px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;

const MenuWrapper = styled.div`
  opacity: 0;
  display: none;
`;

const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const HomeButton = styled.button`
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: black;
  text-decoration: none;
  position: fixed;
  top: 12px;
  left: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 15px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const X = styled(FiX)`
  color: black;
  width: 25px;
  height: 25px;
`;

const Header = styled.h3`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 40px;
`;

const Link = styled(NavLink)`
  padding: 14px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-size: 0.85rem;
  text-align: center;
  color: black;
  text-decoration: none;
  transition: 300ms ease-in-out;
  &.active {
    font-weight: 800;
  }
  &:hover {
    font-weight: 800;
  }
`;

export default MobilePortfolioHeader;
