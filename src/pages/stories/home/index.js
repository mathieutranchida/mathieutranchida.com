import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Stories = () => {
  const history = useHistory();

  const gridContent = [
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-7_b4hqwl.jpg",
      title: "Perspectives",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781308/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-8_mkktzr.jpg",
      title: "Urban bridge",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616551518/mathieutranchida.com/homepage%20photos/homepage_website-3_sphspm.jpg",
      title: "Exposure",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1612820353/mathieutranchida.io/photos/MathieuTranchidaWeb-8_rqzaon.jpg",
      title: "Olympic Moon",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-9_fj9lko.jpg",
      title: "Security",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-5_xame2u.jpg",
      title: "Fall visions",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781274/mathieutranchida.com/portfolio/best/portfolio_best_website-1_ikyqqb.jpg",
      title: "Trust",
      description: "Bea Bridge Sunset",
    },

    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781338/mathieutranchida.com/portfolio/landscape/portfolio_landscape_website-9_osfvte.jpg",
      title: "Bear attack",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1618025722/mathieutranchida.com/portfolio/other/DMhardlanding_hu5liv.jpg",
      title: "Forces",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781307/mathieutranchida.com/portfolio/climbing/portfolio_climbing_website-4_wbb2vd.jpg",
      title: "Sunset",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-10_tlhxxj.jpg",
      title: "Javelin",
      description: "Bea Bridge Sunset",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1618026655/mathieutranchida.com/portfolio/other/Whistler_2019May_LD_41_of_78_z4uhjy.jpg",
      title: "Timing",
      description: "Bea Bridge Sunset",
    },
  ];

  return (
    <>
      <Wrapper>
        <Header>Stories</Header>
        <Main>
          Coming soon.
          {/* <Grid>
            {gridContent.map((item, index) => {
              return (
                <>
                  <GridItem key={index}>
                    {item.title}
                    <Image
                      src={item.imageSrc}
                      alt={item.description}
                      draggable="false"
                    />
                  </GridItem>
                </>
              );
            })}
          </Grid> */}
        </Main>
        <ButtonWrapper>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            Back to homepage
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 75px);
  max-width: 1000px;
  margin: 0px auto;
  padding: 0px 100px;
  @media (max-width: 1000px) {
    padding: 0px 75px;
  }
  @media (max-width: 868px) {
    padding: 0px 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
  }
`;

const Header = styled.h1`
  text-transform: uppercase;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  padding-top: 150px;
  margin: 0px;
  @media (max-width: 1000px) {
    padding-top: 115px;
  }
  @media (max-width: 868px) {
    padding-top: 100px;
  }
`;

const Main = styled.div`
  padding-top: 30px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-gap: 20px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 25vw);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 32vw);
    grid-gap: 1vw;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 48.5vw);
    grid-gap: 1vw;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 100vw);
    grid-gap: 12px;
  }
`;

const GridItem = styled.button`
  position: relative;
  width: 100%;
  height: 20vw;
  border: none;
  margin: none;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.7);
  text-shadow: 0px 0px 10px black;
  transition: 200ms ease-in-out;
  cursor: pointer;
  @media (max-width: 1400px) {
    height: 25vw;
  }
  @media (max-width: 1000px) {
    height: 32vw;
  }
  @media (max-width: 800px) {
    height: 48.5vw;
  }
  @media (max-width: 550px) {
    height: 100vw;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
    text-shadow: none;
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
    text-shadow: none;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const Button = styled.button`
  font-family: sweet-sans-pro, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  border: black solid 2px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default Stories;
