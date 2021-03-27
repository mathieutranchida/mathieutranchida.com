import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Header>Services</Header>
        <DescriptionDiv>
          <Description>
            Here, you can get an idea of the services I provide, what they
            include, and what I generally charge for them. Take it as a
            baseline, every project is unique and requires special treatment.
            The final price will fluctuate in accordance with your specific
            needs.
          </Description>
          <Strong>Ready to book a session?</Strong>
          <Description>
            Pitch me your project through the contact form below or call me
            directly at{" "}
            <span style={{ display: "inline-block" }}>+1 (438) 927-7693.</span>
          </Description>
        </DescriptionDiv>
        <GridWrapper>
          <GridElement>
            <GridItemPhoto>Illustration with name here</GridItemPhoto>
            <GridItemTextWrapper>
              <GITHeader>The Casual - $250</GITHeader>
              <GITDescription>
                A one-hour professional photoshoot in easy-access / low-risk
                environment such as a climbing gym, skatepark, in-bound ski
                resort, urban, etc.
              </GITDescription>
              <GITSubHeader>What you're getting:</GITSubHeader>
              <GITList>
                <GITListItem>
                  One-hour photo session with photographer Mathieu Tranchida.
                </GITListItem>
                <GITListItem>
                  Professional retouching of four photos.
                </GITListItem>
                <GITListItem>
                  Digital delivery of four high resolution photos. Maximum of
                  two action photos. Delay of five days between shoot and
                  digital delivery.
                </GITListItem>
                <GITListItem>
                  Personnal use license (does not include commercial use).
                </GITListItem>
                <GITListItem>
                  Subject to the photographer's availability.
                </GITListItem>
                <GITListItem>
                  Does not include transportation and taxes (if applicable).
                </GITListItem>
                <GITListItem>No refund.</GITListItem>
              </GITList>
            </GridItemTextWrapper>
          </GridElement>
          <GridElement>
            <GridItemPhoto>Illustration with name here</GridItemPhoto>
            <GridItemTextWrapper>
              <GITHeader>The Casual - $250</GITHeader>
              <GITDescription>
                A one-hour professional photoshoot in easy-access / low-risk
                environment such as a climbing gym, skatepark, in-bound ski
                resort, urban, etc.
              </GITDescription>
              <GITSubHeader>What you're getting:</GITSubHeader>
              <GITList>
                <GITListItem>
                  One-hour photo session with photographer Mathieu Tranchida.
                </GITListItem>
                <GITListItem>
                  Professional retouching of four photos.
                </GITListItem>
                <GITListItem>
                  Digital delivery of four high resolution photos. Maximum of
                  two action photos. Delay of five days between shoot and
                  digital delivery.
                </GITListItem>
                <GITListItem>
                  Personnal use license (does not include commercial use).
                </GITListItem>
                <GITListItem>
                  Subject to the photographer's availability.
                </GITListItem>
                <GITListItem>
                  Does not include transportation and taxes (if applicable).
                </GITListItem>
                <GITListItem>No refund.</GITListItem>
              </GITList>
            </GridItemTextWrapper>
          </GridElement>
        </GridWrapper>
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
  max-width: 850px;
  @media (max-width: 800px) {
    padding-top: 20px;
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

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 35px;
`;

const GridElement = styled.div`
  width: 300px;
  margin: 0px auto;
`;

const GridItemPhoto = styled.div`
  width: 298px;
  height: 348px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridItemTextWrapper = styled.div`
  padding: 18px 0px 0px 0px;
`;

const GITHeader = styled.h3`
  margin: 0px;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
`;

const GITDescription = styled.p`
  margin: 10px 0px 0px 0px;
  font-weight: 300;
  font-size: 1rem;
`;

const GITSubHeader = styled.h4`
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 20px 0px 0px 0px;
`;

const GITList = styled.ul`
  list-style-position: outside;
  padding: 0px 0px 0px 23px;
  margin: 5px 0px;
`;

const GITListItem = styled.li`
  font-weight: 300;
  font-size: 0.9rem;
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
