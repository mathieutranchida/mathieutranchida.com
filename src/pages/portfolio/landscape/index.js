import React from "react";
import styled from "styled-components";

import Header from "../../../components/headerPortfolio/index";

const images = [
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781338/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-9_osfvte.jpg",
    location: "Lake Alta",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781338/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-6_a5j3nd.jpg",
    location: "Eagle's Chair",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781337/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-10_e1sd0q.jpg",
    location: "Vancouver Harbour",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781336/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-1_u8fjbf.jpg",
    location: "Mont Tremblant",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781337/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-8_yxvpvp.jpg",
    location: "Sunshine Village",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781337/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-7_zwz7be.jpg",
    location: "Mont Temple",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781337/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-4_rvpbyz.jpg",
    location: "Jay Peak",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781336/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-3_caszaz.jpg",
    location: "Mont Sutton",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781336/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-2_s7t6ym.jpg",
    location: "Sunrise Lake",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781336/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-5_l5oyzt.jpg",
    location: "Val Claret",
  },
];

const PortfolioLifestyle = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          {images.map((image) => {
            return (
              <div key={image.imageSrc}>
                <Image
                  src={image.imageSrc}
                  draggable="false"
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            );
          })}
        </Main>
        <div style={{ marginTop: "25px" }}>
          <Header />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0px -10px 0px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  margin-bottom: 10px;
  user-select: none;
  z-index: -1;
  @media (max-width: 800px) {
    max-height: none;
  }
`;

export default PortfolioLifestyle;
