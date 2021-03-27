import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Contact from "./contact";
import Menu from "./menu";

const Header = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Contact />
        <Logo
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1614221970/mathieutranchida.io/logo/logo_ces9cw.svg"
          alt="Mathieu Tranchida's logo"
          onClick={() => {
            history.push("/");
          }}
        />
        <Menu />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const Logo = styled.img`
  height: 55px;
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  border: red 1px solid;
  @media (max-width: 1025px) {
    left: 50px;
  }
`;

export default Header;
