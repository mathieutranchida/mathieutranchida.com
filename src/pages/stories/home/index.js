import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();

  return (
    <>
      <TextWrapper>
        <Header>Photo stories</Header>
      </TextWrapper>
      <NavWrapper>
        <StoryNavLink>
          <StoryTitle>Bea Evans</StoryTitle>
          <AnimationLayer>
            <OpacityLayer></OpacityLayer>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg"
              alt="buasbdhuqb"
            />
          </AnimationLayer>
        </StoryNavLink>
        <StoryNavLink>
          <StoryTitle>Bea Evans</StoryTitle>
          <AnimationLayer>
            <OpacityLayer></OpacityLayer>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg"
              alt="buasbdhuqb"
            />
          </AnimationLayer>
        </StoryNavLink>
        <StoryNavLink>
          <StoryTitle>Bea Evans</StoryTitle>
          <AnimationLayer>
            <OpacityLayer></OpacityLayer>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg"
              alt="buasbdhuqb"
            />
          </AnimationLayer>
        </StoryNavLink>
        <StoryNavLink>
          <StoryTitle>Bea Evans</StoryTitle>
          <AnimationLayer>
            <OpacityLayer></OpacityLayer>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg"
              alt="buasbdhuqb"
            />
          </AnimationLayer>
        </StoryNavLink>
        <StoryNavLink>
          <StoryTitle>Bea Evans</StoryTitle>
          <AnimationLayer>
            <OpacityLayer></OpacityLayer>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg"
              alt="buasbdhuqb"
            />
          </AnimationLayer>
        </StoryNavLink>
        <StoryNavLink>
          <StoryTitle>Bea Evans</StoryTitle>
          <AnimationLayer>
            <OpacityLayer></OpacityLayer>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg"
              alt="buasbdhuqb"
            />
          </AnimationLayer>
        </StoryNavLink>
      </NavWrapper>
    </>
  );
};

const TextWrapper = styled.div`
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

const NavWrapper = styled.div`
  max-width: 80%;
  margin: 0px auto;
  white-space: nowrap;
  overflow: auto;
`;

const StoryNavLink = styled.div`
  height: 65vh;
  width: 300px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
`;

const AnimationLayer = styled.div`
  height: 100%;
  width: 100%;
  transition: 400ms ease-in-out;
  z-index: 2;
  &:hover {
    transform: scale(1.03);
  }
`;

const StoryTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  text-align: right;
  justify-content: right;
  text-transform: uppercase;
  margin-top: -8px;
  font-size: 35pt;
  font-weight: 900;
  letter-spacing: 5px;
  color: transparent;
  font-family: sweet-sans-pro, sans-serif;
  font-style: italic;
  -webkit-text-stroke: 1px white;
  line-height: 39px;
  user-select: none;
  pointer-events: none;
  z-index: 5;
`;

const OpacityLayer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

// const DescriptionDiv = styled.div`
//   padding-top: 30px;
//   margin: 0px auto;
//   max-width: 650px;
// `;

// const Strong = styled.p`
//   font-weight: 500;
//   text-align: center;
//   padding: 5px 0px 0px 0px;
//   margin: 0px;
// `;

// const Description = styled.p`
//   font-weight: 300;
//   text-align: center;
//   padding: 0px 0px 10px 0px;
//   margin: 0px;
// `;

// const ContactDiv = styled.div`
//   padding: 50px 0px 20px 0px;
//   @media (max-width: 1000px) {
//     padding-top: 40px;
//   }
//   @media (max-width: 500px) {
//     padding-top: 20px;
//   }
// `;

export default Contact;
