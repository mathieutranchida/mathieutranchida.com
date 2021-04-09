import React from "react";
import styled from "styled-components";

import HeaderTop from "./headerTop/index";
import HeaderScroll from "./headerScroll/index";

const HeaderIndex = () => {
  return (
    <>
      <Wrapper>
        <HeaderTop />
        <HeaderScroll />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default HeaderIndex;
