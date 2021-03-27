import React from "react";
import styled from "styled-components";

import Header from "../../../components/headerPortfolio/index";

const images = [
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-10_vhkzcn.jpg",
    athleteName: "N/A",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781361/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-6_gqsvr0.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781361/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-4_tjmnpc.jpg",
    athleteName: "Remco Kayser, Titouan Bessire",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website_kd9ifq.jpg",
    athleteName: "Zoe Beauchemin",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-7_d4upch.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-5_gjzrhm.jpg",
    athleteName: "Remco Kayser, Numa Sneiders",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781361/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-2_xambbw.jpg",
    athleteName: "Will Berman, Titouan Bessire",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-3_ogohnu.jpg",
    athleteName: "Remco Kayser, Laurent de Martin, Will Berman",
  },

  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-9_fwosp7.jpg",
    athleteName: "Bea Evans, Alexa Fay, Antoine Seguin",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781362/mathieutranchida.com/portfolio/lifestyle/portfolio_lifestyle_website-8_hbuk7j.jpg",
    athleteName: "Bea Evans",
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
