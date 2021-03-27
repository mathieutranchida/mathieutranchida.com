import React from "react";
import styled from "styled-components";

import Header from "../../../components/headerPortfolio/index";

const images = [
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-2_rupchs.jpg",
    athleteName: "Annie Chouinnard",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-3_r9khlp.jpg",
    athleteName: "Elmer Leung",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781308/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-10_jwiw5y.jpg",
    athleteName: "Jay Jeong",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781308/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website_pgj69v.jpg",
    athleteName: "Zoe Beauchemin",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-7_b4hqwl.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-4_wbb2vd.jpg",
    athleteName: "Elmer Leung",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-6_gcu9g3.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781308/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-8_mkktzr.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-5_xame2u.jpg",
    athleteName: "Zoe Beauchemin",
  },

  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781308/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-9_xd66hv.jpg",
    athleteName: "Bea Evans",
  },
];

const PortfolioClimbing = () => {
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

export default PortfolioClimbing;
