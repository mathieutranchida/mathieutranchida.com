import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link, scroller } from "react-scroll";

import Contact from "../../components/emailjs/index";

const Services = () => {
  const history = useHistory();

  const services = [
    {
      title: "For Individuals",
      imageSrc: "",
      imageAlt: "",
      description:
        "Photoshoots tailored to your unique needs. Great for individuals looking to capture their projects.",
    },
    {
      title: "For Businesses",
      imageSrc: "",
      imageAlt: "",
      description:
        "Photoshoots tailored to your business' needs. Great for companies, events, and movie productions.",
    },
  ];

  return (
    <>
      <Wrapper>
        <Header>Services</Header>
        <Main>Coming soon.</Main>
        {/* <CustomerTypeWrapper>
          {services.map((customer, index) => {
            return (
              <>
                <CustomerType>
                  <Title>{customer.title}</Title>
                  <Image></Image>
                  <DescriptionCard>{customer.description}</DescriptionCard>
                  <ExploreWrapper>
                    <Explore>Explore</Explore>
                  </ExploreWrapper>
                </CustomerType>
              </>
            );
          })}
        </CustomerTypeWrapper>

        <AftergridWrapper>
          <Strong>Ready to book a session?</Strong>
          <Description>
            Pitch me your project through the contact form below or call me
            directly at{" "}
            <span style={{ display: "inline-block" }}>+1 (438) 927-7693.</span>
          </Description>
        </AftergridWrapper>
        <ContactWrapper id="services-contact-wrapper">
          <Contact />
        </ContactWrapper> */}
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
  padding: 0px 50px;

  @media (max-width: 500px) {
    padding: 0px 30px;
  }
`;

const Main = styled.div`
  padding-top: 30px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
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

const Strong = styled.p`
  font-weight: 500;
  text-align: center;
  padding: 15px 0px 2px 0px;
  margin: 0px;
`;

const Description = styled.p`
  font-weight: 300;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 0px;
`;

const CustomerTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin: 0px auto;
  max-width: 850px;
  @media (max-width: 870px) {
    padding-top: 30px;
  }
  @media (max-width: 835px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CustomerType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  @media (max-width: 835px) {
    &:nth-child(1) {
      margin-bottom: 50px;
    }
  }
  @media (max-width: 440px) {
    width: 85vw;
  }
`;

const Title = styled.div`
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 348px;
  height: 418px;
  border: 1px solid black;
  @media (max-width: 440px) {
    width: 85vw;
    height: 100vw;
  }
`;

const DescriptionCard = styled.div`
  font-weight: 300;
  text-align: center;
  padding: 0px 0px 10px 0px;
  margin: 20px 0px 10px 0px;
  max-width: 350px;
`;

const ExploreWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Explore = styled.button`
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

const AftergridWrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 1100px) {
    margin-top: 50px;
  }
`;

const ContactWrapper = styled.div`
  margin-top: 40px;
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

export default Services;
