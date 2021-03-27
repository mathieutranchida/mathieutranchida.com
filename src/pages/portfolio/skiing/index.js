import React from "react";
import styled from "styled-components";

import Header from "../../../components/headerPortfolio/index";

const images = [
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781386/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-2_g7dny3.jpg",
    athleteName: "Leo Taillefer",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781386/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-7_znrmkk.jpg",
    athleteName: "Remco Kayser",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781386/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-8_lp49qq.jpg",
    athleteName: "Laurent de Martin",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781387/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-5_qteq3i.jpg",
    athleteName: "Remco Kayser",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781387/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-10_hhzzkc.jpg",
    athleteName: "Aidan Cameron",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781387/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-9_keno3z.jpg",
    athleteName: "Vincent Authier",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781386/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-6_hrliux.jpg",
    athleteName: "Laurent de Martin",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781386/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-4_fdunq2.jpg",
    athleteName: "James Sakatch",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781387/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website_gg6que.jpg",
    athleteName: "Laurent de Martin",
  },

  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781386/mathieutranchida.com/portfolio/skiing/portfolio_skiing_website-3_prk9t0.jpg",
    athleteName: "Miles Ladd",
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
