import React from "react";
import styled from "styled-components";

const collabs = [
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524489/mathieutranchida.com/collabs/686_r9uemq.png",
    alt: "Logo 686",
    link:
      "https://ca.686.com/blogs/news/gfs-camp-recap-with-laurent-de-martin?utm_source=ebay&utm_medium=affiliate&utm_campaign=generic&clickId=3048279547",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616527686/mathieutranchida.com/collabs/downdays_logo-full-black-transparent_gincft.png",
    alt: "Logo Downdays",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524490/mathieutranchida.com/collabs/arcteryx_llinsj.png",
    alt: "Logo Arc'teryx",
    link:
      "https://www.facebook.com/arcteryxmontreal/media_set/?set=a.2269975689763053",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524489/mathieutranchida.com/collabs/equipe_yqkjt4.png",
    alt: "Logo L'équipe",
    link:
      "https://www.lequipe.fr/Adrenaline/Ski-freeride/Actualites/Couloir-itineraire-domaine-piste-preferes-le-val-d-isere-de-leo-taillefer/998758",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616528009/mathieutranchida.com/collabs/shema_logo_pwjdbi.png",
    alt: "Logo Newschoolers",
    link:
      "https://www.newschoolers.com/news/read/From-Switzerland-Love-Movie-Review",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616527715/mathieutranchida.com/collabs/410696_980_qox5iz.jpg",
    alt: "Logo The Ski Journal",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524489/mathieutranchida.com/collabs/fswl_gm7cfr.png",
    alt: "Logo From Switzerland With Love",
    link: "https://fromswitzerlandwithlove.ch/",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524774/mathieutranchida.com/collabs/08_20_12.010lav3ta_buff-logo_rvhcae.png",
    alt: "Logo Buff",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616527859/mathieutranchida.com/collabs/cropped-Rectangle-endorfeen-logo-writting-1330-x-500-300psi_ixes4i.png",
    alt: "Logo Endorfeen",
    link: "https://endorfeen.com/mathieu-tranchida/",
  },

  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524489/mathieutranchida.com/collabs/psicobloc_pf6jcj.png",
    alt: "Logo Psicobloc",
    link:
      "https://www.instagram.com/p/B1odeuHDAog/?utm_source=ig_web_copy_link",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524488/mathieutranchida.com/collabs/if3_ttxhqv.png",
    alt: "Logo International Freeski Festival",
    link: "https://www.facebook.com/media/set/?set=a.10156832575509189&type=3",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524550/mathieutranchida.com/collabs/logo-dark_skcsqw.png",
    alt: "Logo Allez Up",
    link:
      "https://www.facebook.com/arcteryxmontreal/media_set/?set=a.2269975689763053",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616524628/mathieutranchida.com/collabs/JcklpLogo2018-noir_rudin1.png",
    alt: "Logo Jackalope",
    link: "https://jackalope.tribu.co/bouldering-is-not-a-crime/",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616527597/mathieutranchida.com/collabs/gripped-masthead_kr8mhr.png",
    alt: "Logo Gripped Magazine",
    link:
      "https://gripped.com/profiles/climbing-on-buildings-montreals-urban-ascent-scene/",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616528926/mathieutranchida.com/collabs/freeskier_fevpd2.png",
    alt: "Logo Freeskier",
    link:
      "https://freeskier.com/stories/qa-behind-the-scenes-of-from-switzerland-with-love",
  },
  {
    logoSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616527861/mathieutranchida.com/collabs/la-presse-logo-web_j9dsin.svg",
    alt: "Logo La Presse",
    link:
      "https://www.lapresse.ca/sports/sports-d-hiver/2021-03-15/lysanne-richard/plongeon-et-plongee-sous-glace.php?fbclid=IwAR26BY2PPvU_4hXgaM36nyvPYEXpgCuPc9fwh7c9AqSfNe9kqtMVtEutOi0",
  },
];

const CollaborationsWrapper = () => {
  return (
    <>
      <Wrapper>
        <Title>Collaborations</Title>
        <Main>
          <Collaborations>
            <Div>
              {collabs.map((collab, key) => {
                return (
                  <A
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={collab.logoSrc} alt={collab.alt} />
                  </A>
                );
              })}
            </Div>
          </Collaborations>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 190px auto 75px auto;
  @media (max-width: 1200px) {
    margin: 150px auto 50px auto;
  }
  @media (max-width: 1100px) {
    margin: 150px auto 50px auto;
  }
  @media (max-width: 868px) {
    margin: 100px auto 50px auto;
  }
  @media (max-width: 666px) {
    margin: 65px auto 50px auto;
  }
`;

const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 1.4rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collaborations = styled.div`
  max-width: 1050px;
  margin: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  justify-content: center;
`;

const A = styled.a`
  height: 80px;
  width: 80px;
  margin: 20px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(1);
  opacity: 0.8;
  transition: 300ms ease-in-out;
  @media (max-width: 439px) {
    margin: 10px 25px;
  }
  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

const Image = styled.img`
  max-height: 80px;
  max-width: 80px;
`;

export default CollaborationsWrapper;
