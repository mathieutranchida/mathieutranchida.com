import React from "react";
import styled from "styled-components";

import Intro from "./intro";
import About from "./about";
import Collaborations from "./collaborations";
import Testimonies from "./testimonies";
import Gallery from "./gallery";

const Homepage = () => {
  return (
    <Wrapper>
      <Intro />
      <About />
      <Collaborations />
      <Testimonies />
      <Gallery />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Homepage;
