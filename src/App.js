import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles/globalStyles";
import styled from "styled-components";

// User interface
import Header from "./components/header/index";
import Homepage from "./pages/homepage/index";
import PortfolioBest from "./pages/portfolio/best/index";
import PortfolioSkiing from "./pages/portfolio/skiing/index";
import PortfolioClimbing from "./pages/portfolio/climbing/index";
import PortfolioLifestyle from "./pages/portfolio/lifestyle/index";
import PortfolioLandscape from "./pages/portfolio/landscape/index";
import Footer from "./components/footer/index";
import Testimonies from "./pages/testimonials/index";
// import Cart from "./components/cart/index";
// import OrderConfirmation from "./components/orderConfirmation/index";
// import OrderError from "./components/errorPages/OrderError";

// Blog
// import Blog from "./components/blog";
// import Fswl from "./components/blog/fswl";
// import MontrealUrbanClimbing from "./components/blog/montrealUrbanClimbing";

// Custom hook call imports
// import useFetchAllProducts from "./customHooks/useFetchAllProducts";
// import useFetchPriceList from "./customHooks/useFetchPriceList";
// import useCartId from "./customHooks/useCartId";
import ScrollToTop from "./customHooks/scrollToTop";

const App = () => {
  // useFetchAllProducts();
  // useFetchPriceList();
  // useCartId();
  // useFetchAllOrders();
  // useFetchNewsletter();

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
              {/* <Route path="/store">
                <Shop />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/order-confirmation">
                <OrderConfirmation />
              </Route>
              <Route path="/order-error">
                <OrderError />
              </Route> */}
              {/* --------------------BLOG------------------ */}
              {/* <Route exact path="/blog">
                <Blog />
              </Route>
              <Route path="/blog/from-switzerland-with-love">
                <Fswl />
              </Route>
              <Route path="/blog/montreal-urban-climbing">
                <MontrealUrbanClimbing />
              </Route> */}
            </Switch>
            <Footer />
          </Wrapper>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export default App;
