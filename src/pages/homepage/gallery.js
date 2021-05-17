import React from "react";
import styled from "styled-components";

const Gallery = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <I1>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551516/mathieutranchida.com/homepage%20photos/homepage_website-7_a8awm2.jpg"
              alt="Gallery image"
            />
          </I1>
          <I2>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551517/mathieutranchida.com/homepage%20photos/homepage_website-8_n5zudi.jpg"
              alt="Gallery image"
            />
          </I2>
          <I3>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551514/mathieutranchida.com/homepage%20photos/homepage_website-23_sreyup.jpg"
              alt="Gallery image"
            />
          </I3>
          <I4>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551515/mathieutranchida.com/homepage%20photos/homepage_website-17_jjgfuy.jpg"
              alt="Gallery image"
            />
          </I4>
          <I5>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551517/mathieutranchida.com/homepage%20photos/homepage_website-1_tdxmn6.jpg"
              alt="Gallery image"
            />
          </I5>
          <I6>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551516/mathieutranchida.com/homepage%20photos/homepage_website-9_feloqd.jpg"
              alt="Gallery image"
            />
          </I6>
          <I7>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551515/mathieutranchida.com/homepage%20photos/homepage_website-14_ui3zmu.jpg"
              alt="Gallery image"
            />
          </I7>
          <I8>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551514/mathieutranchida.com/homepage%20photos/homepage_website-20_hlbj3h.jpg"
              alt="Gallery image"
            />
          </I8>
          <I9>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551514/mathieutranchida.com/homepage%20photos/homepage_website-22_pp2xgy.jpg"
              alt="Gallery image"
            />
          </I9>
          <I10>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551516/mathieutranchida.com/homepage%20photos/homepage_website-11_lnhakk.jpg"
              alt="Gallery image"
            />
          </I10>
          <I11>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551516/mathieutranchida.com/homepage%20photos/homepage_website-10_khjxxu.jpg"
              alt="Gallery image"
            />
          </I11>
          <I12>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551515/mathieutranchida.com/homepage%20photos/homepage_website-15_wvhnpw.jpg"
              alt="Gallery image"
            />
          </I12>
          <I13>
            <Image
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551515/mathieutranchida.com/homepage%20photos/homepage_website-16_qxaa33.jpg"
              alt="Gallery image"
            />
          </I13>
        </Main>
        <Second>
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551514/mathieutranchida.com/homepage%20photos/homepage_website-20_hlbj3h.jpg"
            alt="Gallery image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551515/mathieutranchida.com/homepage%20photos/homepage_website-14_ui3zmu.jpg"
            alt="Gallery image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551516/mathieutranchida.com/homepage%20photos/homepage_website-7_a8awm2.jpg"
            alt="Gallery image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551516/mathieutranchida.com/homepage%20photos/homepage_website-10_khjxxu.jpg"
            alt="Gallery image"
          />
          <Image
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1616551515/mathieutranchida.com/homepage%20photos/homepage_website-15_wvhnpw.jpg"
            alt="Gallery image"
          />
        </Second>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const I1 = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 7;
  z-index: -1;
`;

const I2 = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 4;
  z-index: -1;
`;

const I3 = styled.div`
  grid-column: 4 / 5;
  grid-row: 4 / 7;
  z-index: -1;
`;

const I4 = styled.div`
  grid-column: 5 / 7;
  grid-row: 3 / 10;
  z-index: -1;
`;

const I5 = styled.div`
  grid-column: 7 / 10;
  grid-row: 4 / 9;
  z-index: -1;
`;

const I6 = styled.div`
  grid-column: 10 / 13;
  grid-row: 2 / 11;
  z-index: -1;
`;

const I7 = styled.div`
  grid-column: 1 / 5;
  grid-row: 7 / 13;
  z-index: -1;
`;

const I8 = styled.div`
  grid-column: 5 / 7;
  grid-row: 10 / 13;
  z-index: -1;
`;

const I9 = styled.div`
  grid-column: 7 / 10;
  grid-row: 9 / 20;
  z-index: -1;
`;

const I10 = styled.div`
  grid-column: 1 / 3;
  grid-row: 13 / 20;
  z-index: -1;
`;

const I11 = styled.div`
  grid-column: 3 / 7;
  grid-row: 13 / 20;
  z-index: -1;
`;

const I12 = styled.div`
  grid-column: 10 / 13;
  grid-row: 11 / 16;
  z-index: -1;
`;

const I13 = styled.div`
  grid-column: 10 / 13;
  grid-row: 16 / 20;
  z-index: -1;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(19, 2.7vw);
  grid-gap: 10px;
  padding: 0 10px;
  @media (max-width: 750px) {
    display: none;
  }
`;

const Second = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  @media (min-width: 751px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default Gallery;
