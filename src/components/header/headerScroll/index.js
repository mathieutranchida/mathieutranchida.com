import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Contact from "./contact";
import {
  disableScroll,
  enableScroll,
} from "../../../customHooks/scrollFunctions";
import { FiX } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const history = useHistory();

  let headerRef = useRef(null);
  let scrollTriggerRef = useRef(null);
  let menu = useRef(null);
  let backgroundLayer = useRef(null);

  useEffect(() => {
    gsap.to(headerRef, {
      duration: 0.5,
      y: "60px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: scrollTriggerRef,
        start: "bottom top",
        toggleActions: "play none reverse none",
      },
    });
  });

  const openMenu = () => {
    disableScroll();
    gsap.set(menu, { display: "inherit" });
    gsap.set(backgroundLayer, { display: "inherit" });
    gsap.to(menu, {
      duration: 0.6,
      right: "0%",
      ease: "power1.out",
    });
    gsap.to(backgroundLayer, { duration: 0.6, opacity: 1 });
  };

  const closeMenu = () => {
    enableScroll();
    gsap.to(menu, {
      duration: 0.7,
      right: "-100%",
      ease: "power1.in",
    });
    gsap.to(backgroundLayer, {
      duration: 0.7,
      opacity: 0,
    });
    gsap.set(menu, { delay: 0.7, display: "none" });
    gsap.set(backgroundLayer, { delay: 0.7, display: "none" });
  };

  return (
    <>
      <Wrapper
        ref={(e) => {
          headerRef = e;
        }}
      >
        <Contact />
        <Logo
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1616855579/mathieutranchida.com/logo/Logo_Black_-_Mathieu_Tranchida_so31vq.png"
          alt="Mathieu Tranchida's logo"
          onClick={() => {
            history.push("/");
          }}
        />
        <HamburgerWrapper onClick={openMenu}>
          <Header>Menu</Header>
          <LineWrapper>
            <Line />
            <Line />
            <Line />
          </LineWrapper>
        </HamburgerWrapper>
      </Wrapper>
      <BackgroundLayer
        ref={(e) => {
          backgroundLayer = e;
        }}
        onClick={closeMenu}
      ></BackgroundLayer>
      <SideMenu
        ref={(e) => {
          menu = e;
        }}
      >
        <CloseButton onClick={closeMenu}>
          <X />
        </CloseButton>
        <LinkDiv>
          <Link exact to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link to="/stories" onClick={closeMenu}>
            Stories
          </Link>
          <Link to="/testimonials" onClick={closeMenu}>
            Testimonials
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <LinkContact to="/contact" onClick={closeMenu}>
            Contact
          </LinkContact>
        </LinkDiv>
      </SideMenu>
      <RefScrollTrigger
        ref={(e) => {
          scrollTriggerRef = e;
        }}
      ></RefScrollTrigger>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: -60px;
  left: 0px;
  height: 60px;
  background-color: white;
  z-index: 1;
`;

const Logo = styled.img`
  height: 40px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
  @media (max-width: 500px) {
    left: 50px;
  }
`;

const HamburgerWrapper = styled.button`
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
  top: 7px;
  right: -26px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 500ms ease;
  &:hover {
    transform: translateX(-10px);
  }
`;

const Header = styled.h1`
  margin-right: 15px;
  color: white;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: black;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16px;
`;

const Line = styled.div`
  border-bottom: 2px solid black;
  width: 60px;
`;

const BackgroundLayer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  display: none;
  z-index: 2;
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0px;
  right: -100%;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: none;
  z-index: 5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const X = styled(FiX)`
  color: black;
  width: 25px;
  height: 25px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  top: 42%;
  transform: translate(0%, -40%);
  margin-right: 25px;
`;

const Link = styled(NavLink)`
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: right;
  color: black;
  text-decoration: none;
  padding: 7px 10px;
  transition: 300ms ease-in-out;
  width: fit-content;
  &.active {
    padding: 7px 50px 7px 10px;
  }
  &:hover {
    padding: 7px 50px 7px 10px;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
  @media (max-width: 350px) {
    font-size: 1.4rem;
    &.active {
      padding: 7px 35px 7px 10px;
    }
    &:hover {
      padding: 7px 35px 7px 10px;
    }
  }
`;

const LinkContact = styled(NavLink)`
  color: white;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: right;
  color: black;
  text-decoration: none;
  padding: 50px 10px 0px 0px;
  transition: 300ms ease-in-out;
  width: fit-content;
  &.active {
    padding: 50px 50px 0px 0px;
  }
  &:hover {
    padding: 50px 50px 0px 0px;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
  @media (max-width: 350px) {
    font-size: 1.4rem;
    &.active {
      padding: 50px 35px 0px 0px;
    }
    &:hover {
      padding: 50px 35px 0px 0px;
    }
  }
`;

const RefScrollTrigger = styled.div`
  height: 350px;
  position: absolute;
`;

export default Index;
