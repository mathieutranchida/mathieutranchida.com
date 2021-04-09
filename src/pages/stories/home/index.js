import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Stories = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Header>Stories</Header>
        <DescriptionDiv>
          <Description>Coming soon.</Description>
        </DescriptionDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 75px);
  max-width: 1000px;
  margin: 0px auto;
  padding: 0px 100px;
  @media (max-width: 1000px) {
    padding: 0px 75px;
  }
  @media (max-width: 868px) {
    padding: 0px 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
`;

const Header = styled.h1`
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  padding-top: 150px;
  margin: 0px;
  @media (max-width: 1000px) {
    padding-top: 115px;
  }
  @media (max-width: 868px) {
    padding-top: 100px;
  }
`;

const DescriptionDiv = styled.div`
  padding-top: 30px;
  margin: 0px auto;
  max-width: 650px;
`;

const Description = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 0px;
`;

export default Stories;
