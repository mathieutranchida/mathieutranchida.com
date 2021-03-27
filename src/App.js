import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles/globalStyles";
import styled from "styled-components";

import Header from "./components/header/index";
import Homepage from "./pages/homepage/index";
import PortfolioBest from "./pages/portfolio/best/index";
import PortfolioSkiing from "./pages/portfolio/skiing/index";
import PortfolioClimbing from "./pages/portfolio/climbing/index";
import PortfolioLifestyle from "./pages/portfolio/lifestyle/index";
import PortfolioLandscape from "./pages/portfolio/landscape/index";
import Footer from "./components/footer/index";
import Testimonies from "./pages/testimonials/index";
import ScrollToTop from "./customHooks/scrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <GlobalStyles />
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/testimonials">
                <Testimonies />
              </Route>
              <Route exact path="/portfolio">
                <PortfolioBest />
              </Route>
              <Route path="/portfolio/skiing">
                <PortfolioSkiing />
              </Route>
              <Route path="/portfolio/climbing">
                <PortfolioClimbing />
              </Route>
              <Route path="/portfolio/lifestyle">
                <PortfolioLifestyle />
              </Route>
              <Route path="/portfolio/landscape">
                <PortfolioLandscape />
              </Route>
            </Switch>
            <Footer />
          </Wrapper>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export default App;
