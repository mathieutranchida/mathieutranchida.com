import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Testimonies = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Title>Testimonials</Title>
        <TextDiv>
          <Text>
            "Mat’s artistic vision always blows my mind. His enthusiasm and
            passion for the work he does is extremely inspiring. He never takes
            no for an answer and is constantly trying to come up with new ideas
            and new ways to take his work to a new level. He really goes above
            and beyond and takes pride in creating the best possible outcome in
            whatever he’s working on. I have had the pleasure of working
            together with Mat on a few projects. He is very easy to work with,
            contributing fresh, new ideas while still capturing the essence of
            whatever concept he is working on. Collaborating with him is an
            experience I always look forward to."
          </Text>
          <Person>Aidan Cameron, Content Creator</Person>
          <Text>
            "Mathieu is a very professional photographer. During the shoot of
            our movie "From Switzerland With Love", the priority is first and
            foremost the film and Mathieu knew how to immortalize each moment of
            the sessions without disturbing the cameramen in any way. From
            lifestyle to action, he produced quality content that I am extremely
            happy with."
          </Text>
          <Person>Laurent de Martin, Professional Skier & Producer</Person>
          <Text>
            "Very fortunate to have met Mathieu through Arc'teryx! Over the
            years we have done a variety of shoots together and he is always
            able to create a feeling of exhilaration and intensity in his work.
            It has been such a pleasure to shoot training, product, lifestyle,
            and outdoor projects with him. Looking forward to the many more to
            come!"
          </Text>
          <Person>
            Zoe Beauchemin, Climbing Athlete for Arc’teryx and Allez-up
          </Person>
          <Text>
            "It was a pleasure to work with Mathieu. He’s an outstanding
            photographer who knows exactly how to get the “money shot”. All his
            photos are created with deliberate intention. He is able to combine
            the needs of his client with his artistic vision to create
            spectacular photos. He achieves what few others do as well, which is
            to capture the atmosphere and the emotion of an event."
          </Text>
          <Person>
            Alexa Fay, Digital Marketing Director of Psicobloc Open Series
          </Person>
          <Text>
            "Mathieu is professional and always at the top of his game. His
            images are technically beautiful. He's always wiling to learn new
            skills to adapt to customer needs. He is capable of creating the
            right settings no matter the request or environment."
          </Text>
          <Person>
            Katherine Boivin, Marketing Lead at Arc’teryx Montreal
          </Person>
          <Text>
            "I was lucky to have Mathieu as a photographer during two rock
            climbing outings in Orford and Weir. Mathieu is very professional
            and quickly developed a superb chemistry to put me at ease! He
            worked tirelessly to get the shots he wanted, perfectly knowing what
            I was looking for. He captured precious moments that fully showcased
            the passion, effort, and emotions I experienced during the ascents.
            Mathieu person of great talent that I can recommend without
            hesitation!"
          </Text>
          <Person>Felicien Roy, Climber</Person>
        </TextDiv>
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

const Title = styled.h1`
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

const TextDiv = styled.div`
  padding-top: 30px;
  margin: 0px;
  @media (max-width: 800px) {
    padding-top: 15px;
  }
  @media (max-width: 500px) {
    padding-top: 5px;
  }
`;

const Text = styled.p`
  font-weight: 300;
  margin-bottom: 15px;
  text-indent: 40px;
  text-align: justify;
`;

const Person = styled.p`
  font-weight: 500;
  margin-bottom: 65px;
  text-align: right;
`;

const Button = styled.button`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  border: black solid 2px;
  padding: 10px 20px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Testimonies;
