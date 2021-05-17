import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link, scroller } from "react-scroll";

import Contact from "../../components/emailjs/index";

const Services = () => {
  const history = useHistory();

  const services = [
    {
      title: "The Casual",
      price: "$200",
      imageSrc: "",
      imageAlt: "",
      description:
        "A professional one-hour photoshoot in low-risk environment such as a climbing gym, skatepark, urban, etc.",
      subheader: "What you're getting:",
      listItems: [
        "One-hour photo session with photographer Mathieu Tranchida.",
        "Professional retouching of four photos.",
        "Digital delivery of four high resolution photos. Maximum of two action photos. Delay of five days between shoot and digital delivery.",
        "Personnal use license (does not include commercial use).",
        "Subject to the photographer's availability.",
        "Does not include transportation, equipment rentals, and taxes (if applicable).",
        "No refund.",
      ],
    },
    {
      title: "The Hiker",
      price: "$400",
      imageSrc: "",
      imageAlt: "",
      description:
        "A professional one-day expedition photoshoot in medium-risk environment and activities such as in-bound skiing, trail, hiking, etc.",
      subheader: "What you're getting:",
      listItems: [
        "One-day photo session with photographer Mathieu Tranchida.",
        "Professional retouching of ten photos.",
        "Digital delivery of ten high resolution photos. Delay of five days between shoot and digital delivery.",
        "Personnal use license (does not include commercial use).",
        "Subject to the photographer's availability.",
        "Does not include transportation, equipment rentals, and taxes (if applicable).",
        "No refund.",
      ],
    },
    {
      title: "The Sender",
      price: "$500",
      imageSrc: "",
      imageAlt: "",
      description:
        "A professional one-day photoshoot in high-risk environment such as climbing, ice-climbing, out-bound ski touring, etc.",
      subheader: "What you're getting:",
      listItems: [
        "One-day photo session with photographer Mathieu Tranchida.",
        'One "high-risk" photo (ex: on a rope).',
        "Professional retouching of six photos.",
        "Digital delivery of six high resolution photos. Delay of five days between shoot and digital delivery.",
        "Personnal use license (does not include commercial use).",
        "Subject to the photographer's availability.",
        "Does not include transportation, equipment rentals, and taxes (if applicable).",
        "No refund.",
      ],
    },
    {
      title: "The Sponsored",
      price: "$750",
      imageSrc: "",
      imageAlt: "",
      description:
        "A professional one-day photoshoot in high-risk environment with commercial license.",
      subheader: "What you're getting:",
      listItems: [
        "One-day photo session with photographer Mathieu Tranchida.",
        "Professional retouching of six photos. Three re-edits avilable.",
        "Digital delivery of a six amount of high resolution photos. Delay of five days between shoot and digital delivery.",
        "Commercial use license for limited use (contact me for more information).",
        "Subject to the photographer's availability.",
        "Does not include transportation, equipment rentals, and taxes (if applicable).",
        "No refund.",
      ],
    },
    {
      title: "The Manager",
      price: "+$1,250",
      imageSrc: "",
      imageAlt: "",
      description:
        "Hire me as a full-time photographer on your project. I'll manage other photographers, take care of photography media related duties, take photos, and much more.",
      subheader: "What you're getting:",
      listItems: [
        "Pre-shoot work, multi-day photoshoot and, after-shoot work.",
        "Professional retouching of a custom amount of photos.",
        "Digital delivery of a custom amount of high resolution photos. Delay of ten days between shoot and digital delivery.",
        "Commercial use license.",
        "Subject to the photographer's availability.",
        "Does not include transportation, equipment rentals, and taxes (if applicable).",
        "No refund.",
      ],
    },
    {
      title: "The Custom",
      price: "$???",
      imageSrc: "",
      imageAlt: "",
      description:
        "Previous services provide a great baseline for you to get an idea of what I charge. However, if you feel like none of them come close to what you need and still think I'm the guy for your project, pitch me your idea in the contact form below or call me at +1 (438) 927-7693.",
      subheader: "",
      listItems: [],
    },
  ];

  return (
    <>
      <Wrapper>
        <Header>Services</Header>
        <DescriptionDiv>
          <Description>
            Here, you can get an idea of the services I provide, what they
            include, and what I generally charge for them. Take it as a
            baseline, your project is unique and will require special treatment.
            The final price will fluctuate in accordance with your needs.
          </Description>
          <Strong>Ready to book your session?</Strong>
          <Description>
            Pitch me your project through the{" "}
            <ScrollTo
              to="services-contact-wrapper"
              smooth={true}
              duration={500}
              tabIndex="0"
              aria-label="Scroll to contact form"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  scroller.scrollTo("services-contact-wrapper", {
                    smooth: true,
                    duration: 500,
                  });
                }
              }}
            >
              contact form below
            </ScrollTo>{" "}
            or call me directly at{" "}
            <span style={{ display: "inline-block" }}>+1 (438) 927-7693.</span>
          </Description>
        </DescriptionDiv>
        <GridWrapper>
          {services.map((service, index) => {
            return (
              <GridElement key={index}>
                <GridItemPhoto>Illustration with name here</GridItemPhoto>
                <GridItemTextWrapper>
                  <GITHeader>
                    {service.title} | {service.price}
                  </GITHeader>
                  <GITDescription>{service.description}</GITDescription>
                  <GITSubHeader>{service.subheader}</GITSubHeader>
                  <GITList>
                    {service.listItems.map((item, index) => {
                      return <GITListItem key={index}>{item}</GITListItem>;
                    })}
                  </GITList>
                </GridItemTextWrapper>
              </GridElement>
            );
          })}
        </GridWrapper>
        <AftergridWrapper>
          <Strong>Ready to book your session?</Strong>
          <Description>
            Pitch me your project through the contact form below or call me
            directly at{" "}
            <span style={{ display: "inline-block" }}>+1 (438) 927-7693.</span>
          </Description>
        </AftergridWrapper>
        <ContactWrapper id="services-contact-wrapper">
          <Contact />
        </ContactWrapper>
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

const ScrollTo = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 35px;
  grid-column-gap: 50px;
  margin-top: 35px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0px;
    max-width: 800px;
    margin: 35px auto 0px auto;
  }
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const GridElement = styled.div`
  width: 300px;
  margin: 0px auto;
  @media (max-width: 380px) {
    width: 280px;
  }
  @media (max-width: 350px) {
    width: 260px;
  }
  @media (max-width: 330px) {
    width: 240px;
  }
  @media (max-width: 305px) {
    width: 100%;
  }
`;

const GridItemPhoto = styled.div`
  width: 296px;
  height: 346px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 380px) {
    width: 276px;
    height: 300px;
  }
  @media (max-width: 350px) {
    width: 256px;
    height: 280px;
  }
  @media (max-width: 330px) {
    width: 236px;
    height: 260px;
  }
  @media (max-width: 305px) {
    display: none;
  }
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
  text-align: center;
`;

const GITDescription = styled.p`
  margin: 10px 0px 0px 0px;
  font-weight: 300;
  font-size: 1rem;
  text-align: justify;
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
