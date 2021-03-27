import React from "react";
import styled from "styled-components";

import { FiX } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <LineWrapper>
          <Line />
        </LineWrapper>
        <ContactTitle>Contact</ContactTitle>
      </ContactWrapper>
    </>
  );
};

const ContactWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 30px;
  left: -20px;
  cursor: pointer;
  transition: 500ms ease;
  &:hover {
    transform: translateX(10px);
  }
  @media (max-width: 1025px) {
    display: none;
  }
`;

const LineWrapper = styled.div``;

const Line = styled.div`
  border-bottom: 2px solid black;
  margin: 5px 0px 5px 0px;
  width: 60px;
`;

const ContactTitle = styled.div`
  padding-bottom: 2px;
  margin-left: 15px;
  color: black;
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 2px;
`;

export default Contact;
