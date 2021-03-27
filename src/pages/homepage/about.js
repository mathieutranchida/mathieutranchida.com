import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Wrapper>
        <Title>About me</Title>
        <Main>
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1612820352/mathieutranchida.io/photos/MathieuTranchidaWeb-6_insm6c.jpg"
            alt="mathieu tranchida's portrait"
          />
          <div>
            <Text>
              Hey! I'm Mathieu Tranchida; an outdoor action photographer
              specialized in extreme sports photography. I am based in Montreal
              and travel worldwide for my projects.
            </Text>
            <Text>
              As a photographer, I work with passion and only undertake projects
              I feel inspired by. Over the years, I have produced content for
              professional athletes, brands, events, and magazines (see my
              collaborations below). My process is authentic. My editing style
              is minimal. I aim to tell a story as it happened.
            </Text>
            <Text>
              I am comfortable in the mountains and I have shown the ability to
              operate in complex terrain with professional camera equipment. I
              am a certified Advanced Wilderness First Aider (AWFA) and an
              Avalanche Safety Training 1 (AST1) graduate. I am also able to do
              rope operations for shoots requiring me to be in the air. These
              abilities allow me to be completely autonomous, leaving the
              athlete in their zone, ultimately leading to more authentic
              pictures.
            </Text>
            <Text>
              Finally, my experience in marketing, social media, and web
              development allows me to fully understand your needs and gives me
              the keys to produce the shot you didn't know you needed.
            </Text>
          </div>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 150px;
  @media (max-width: 1150px) {
    margin-top: 75px;
    margin-bottom: 75px;
  }
  @media (max-width: 1000px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 868px) {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.4rem;
`;

const Main = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 100px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 35px;
  @media (max-width: 1000px) {
    padding: 0px 75px;
  }
  @media (max-width: 868px) {
    padding: 0px 50px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 666px) {
    padding: 0px 50px;
  }
`;

const Text = styled.p`
  font-weight: 300;
  margin-bottom: 20px;
  text-indent: 40px;
  margin-top: 0px;
  margin-bottom: 15px;
  text-align: justify;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default About;