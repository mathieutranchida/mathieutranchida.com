import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Wrapper>
        <Title>About me</Title>
        <Main>
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1617216239/mathieutranchida.com/homepage%20photos/MathieuTranchidaWeb-6_insm6c_fbfj7f.png"
            alt="mathieu tranchida's portrait"
          />
          <div>
            <Text>
              Hey! I'm Mathieu Tranchida; an outdoor action photographer
              specialized in extreme sports photography. I am based in Montreal
              and love to travel worldwide for projects.
            </Text>
            <Text>
              As a photographer, I work with passion and undertake projects that
              inspire me. Over the years, I have produced content for
              professional athletes, world-renowned brands, events, and
              magazines (see my collaborations below). My process is authentic.
              My editing style is minimal. I aim to tell a story as honestly as
              possible.
            </Text>
            <Text>
              Through my experience in skiing, rock climbing, hiking and cycling
              I am comfortable in most conditions. Not only do I have the
              ability to work in complex, challenging terrain but I also enjoy
              it and feel at ease working with professional camera equipment in
              this environment. I am a certified Advanced Wilderness First Aider
              (AWFA) and an Avalanche Safety Training 1 (AST1) graduate. I am
              also capable to set up ascender/rope rigs for shoots that require
              me to be suspended in the air. These abilities allow me to be
              completely autonomous, leaving the athlete in their zone, keeping
              the moment focused/genuine and ultimately leading to more
              authentic pictures.
            </Text>
            <Text>
              Finally, my experience in marketing, social media, and web
              development allows me to fully understand your needs and gives me
              the keys to produce the shot you didn't know you needed.
              Additionally, I have a degree in international business and
              management, and a diploma in web development.
            </Text>
          </div>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 1150px) {
    margin-top: 75px;
    margin-bottom: 75px;
  }
  @media (max-width: 1000px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 868px) {
    margin-top: 50px;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 0px;
`;

const Main = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 100px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 40px;
  margin-top: 25px;
  @media (max-width: 1000px) {
    padding: 0px 75px;
  }
  @media (max-width: 868px) {
    padding: 0px 50px;
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
  height: 95%;
  width: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  margin: 0px auto;
`;

export default About;
