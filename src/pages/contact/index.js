import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import ContactForm from "../../components/emailjs/index";

const Contact = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Header>Contact & Inquiries</Header>
        <DescriptionDiv>
          <Strong>Pitch me your project.</Strong>
          <Description>
            Reach out for prints, photoshoots, lessons, or any other inquiry.
          </Description>
          <Description>
            I'll do my best to answer within three days. You can also call me
            directly at{" "}
            <span style={{ display: "inline-block" }}>+1 (438) 927-7693.</span>
          </Description>
        </DescriptionDiv>
        <ContactDiv>
          <ContactForm />
        </ContactDiv>
        <ButtonWrapper>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            Back to homepage
          </Button>
        </ButtonWrapper>
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

const Strong = styled.p`
  font-weight: 500;
  text-align: center;
  padding: 5px 0px 0px 0px;
  margin: 0px;
`;

const Description = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 0px;
`;

const ContactDiv = styled.div`
  padding: 50px 0px 20px 0px;
  @media (max-width: 1000px) {
    padding-top: 40px;
  }
  @media (max-width: 500px) {
    padding-top: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const Button = styled.button`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  border: black solid 2px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default Contact;
