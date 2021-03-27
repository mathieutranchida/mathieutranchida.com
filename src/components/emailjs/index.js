import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { gsap } from "gsap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let formArea = useRef(null);
  let messageArea = useRef(null);
  let loadingSpinner = useRef(null);
  let confirmationMessage = useRef(null);

  const handleSend = () => {
    gsap.to(formArea, {
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
      userSelect: "none",
      zIndex: -1,
    });
    gsap.set(formArea, { display: "none", delay: 0.7 });
    gsap.set(loadingSpinner, { display: "inherit", delay: 0.7 });
    gsap.to(loadingSpinner, {
      duration: 0.5,
      delay: 0.7,
      opacity: 1,
    });
    gsap.to(loadingSpinner, {
      duration: 0.5,
      delay: 2.5,
      opacity: 0,
    });
    gsap.set(loadingSpinner, { display: "none", delay: 3 });
    gsap.set(confirmationMessage, { display: "inherit", delay: 3 });
    gsap.to(confirmationMessage, {
      duration: 0.5,
      delay: 4,
      opacity: 1,
      zIndex: 1,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_2lz9tdc",
    //     "template_qu7pwha",
    //     e.target,
    //     "user_48pmgavLTUZbdVapzMSzv"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setName("");
    //       setEmail("");
    //       setMessage("");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <Wrapper>
      <div>
        <Main>
          <Form
            className="contact-form"
            ref={(e) => {
              formArea = e;
            }}
            onSubmit={sendEmail}
          >
            <Input type="hidden" name="contact_number" />
            <Underline>
              <Input
                type="text"
                name="user_name"
                placeholder="*name"
                value={name}
                onChange={(ev) => {
                  setName(ev.target.value);
                }}
              />
            </Underline>
            <Underline>
              <Input
                type="email"
                name="user_email"
                placeholder="*email"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
            </Underline>
            <Underline>
              <Textarea
                name="message"
                value={message}
                placeholder="*message"
                ref={(e) => {
                  messageArea = e;
                }}
                onChange={(ev) => {
                  setMessage(ev.target.value);
                  gsap.to(messageArea, {
                    duration: 1,
                    height: "150px",
                    ease: "power2",
                  });
                }}
                onSelect={() => {
                  gsap.to(messageArea, {
                    duration: 1,
                    height: "150px",
                    ease: "power2",
                  });
                }}
              />
              <TextareaReducedMotion
                name="message"
                value={message}
                placeholder="*message"
                onChange={(ev) => {
                  setMessage(ev.target.value);
                }}
              />
            </Underline>
            <Button
              type="submit"
              value="send message"
              disabled={!name || !email.includes("@") || !message}
              variant="contained"
              color="primary"
              onClick={handleSend}
            />
          </Form>
        </Main>
      </div>
      <LoadingWrapper
        ref={(e) => {
          loadingSpinner = e;
        }}
      >
        <LoadingLogoDiv>
          <SpinningLoader
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1616855579/mathieutranchida.com/logo/Logo_Black_-_Mathieu_Tranchida_so31vq.png"
            alt="Loading spinner logo"
          />
        </LoadingLogoDiv>
      </LoadingWrapper>
      <ConfirmationWrapper
        ref={(e) => {
          confirmationMessage = e;
        }}
      >
        <Confirmation>
          Your message has been sent successfully! I will come back to you as
          soon as I have the chance.
        </Confirmation>
      </ConfirmationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0px auto;
`;

const Form = styled.form`
  width: 100%;
`;

const Underline = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 15px;
  outline: none;
  border: none;
  background-color: transparent;
  color: black;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  padding: 0px 0px 7px 2px;
  margin-top: 6px;
  @media screen and (prefers-reduced-motion) {
    display: none;
  }
`;

const TextareaReducedMotion = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  border: none;
  background-color: transparent;
  color: black;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  padding: 0px 0px 7px 2px;
  margin-top: 6px;
  @media screen and (prefers-reduced-motion: no-preference) {
    display: none;
  }
`;

const Button = styled.input`
  background-color: transparent;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: black;
  border: none;
  margin: 4px -8px 0px 0px;
  float: right;
  transition: 300ms ease-in-out;
  &:disabled {
    color: rgba(0, 0, 0, 0.2);
  }
  &:hover:not([disabled]) {
    cursor: pointer;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
`;

const LoadingWrapper = styled.image`
  height: 288px;
  width: 100%;
  opacity: 0;
  z-index: -1;
  display: none;
`;

const LoadingLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinningLoader = styled.img`
  height: 55px;
  color: black;
  animation-duration: 800ms;
  animation-name: opacity-in-out;
  animation-iteration-count: infinite;
  @keyframes opacity-in-out {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;

const ConfirmationWrapper = styled.div`
  height: 288px;
  width: 100%;
  opacity: 0;
  z-index: -1;
  display: none;
`;

const Confirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Contact;
