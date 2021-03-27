import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DesktopPortfolioHeader = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Link to="/portfolio/skiing">Skiing</Link>
          <Link to="/portfolio/climbing">Climbing</Link>
          <Link exact to="/portfolio">
            All time best
          </Link>
          <Link to="/portfolio/lifestyle">Lifestyle</Link>
          <Link to="/portfolio/landscape">Landscapes</Link>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  max-width: 1000px;
  padding: 0px 50px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Link = styled(NavLink)`
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  color: black;
  text-decoration: none;
  transition: 300ms ease-in-out;
  &.active {
    font-weight: 800;
  }
  &:hover {
    font-weight: 800;
  }
`;

export default DesktopPortfolioHeader;
