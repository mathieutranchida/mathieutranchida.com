import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>© Mathieu Tranchida - 2020 All rights Reserved</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  color: black;
  font-weight: 200;
  text-align: center;
  font-size: 0.9rem;
`;

export default Footer;
