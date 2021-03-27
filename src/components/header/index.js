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
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1616855579/mathieutranchida.com/logo/Logo_Black_-_Mathieu_Tranchida_so31vq.png"
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
  @media (max-width: 500px) {
    left: 50px;
  }
`;

export default Header;
