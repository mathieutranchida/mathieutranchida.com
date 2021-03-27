import React from "react";
import styled from "styled-components";

import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <DesktopDiv>
          <HeaderDesktop />
        </DesktopDiv>
        <MobileDiv>
          <HeaderMobile />
        </MobileDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const DesktopDiv = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileDiv = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`;

export default Homepage;
