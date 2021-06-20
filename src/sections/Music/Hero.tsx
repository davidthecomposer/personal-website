import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// import { ButtonRegularStyles } from "components/Buttons";
import { SlideHeading, MetroHeading32 } from "styles/text";
// import colors from "styles/Colors";
import gsap from "gsap";
import { ReactComponent as BG2SVG } from "assets/svg/slide2BG.svg";
import { ReactComponent as BG3SVG } from "assets/svg/slide3BG.svg";
import { ReactComponent as BG4SVG } from "assets/svg/slide4BG.svg";
import filmTeaser from "assets/images/davidFilmTeaser.jpg";
import davidSerious from "assets/images/davidSerious.jpg";
import Liz1 from "assets/images/Liz1.jpg";
import mandi1 from "assets/images/mandi1.jpg";
import media from "styles/media";
import davidSkeptic from "assets/images/davidSkeptic.jpg";
import jennyCampbell from "assets/images/jennyCampbell.jpg";
import oCTLogo from "assets/images/oCTLogo.jpg";
import davidSmile1 from "assets/images/davidSmile1.jpg";
import oCTSeason from "assets/images/oCTSeason.jpg";
import { ReactComponent as HazeFrame } from "assets/svg/hazeFrame.svg";

const Hero: React.FC<{}> = () => {
  const [next, setNext] = useState(0);
  const initial = useRef(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        initial.current = false;
        setNext(1);
      },
    });

    tl.to(".slideshow-main1", { y: "-8vw", duration: 1.2 }, 1.8)
      .to(".main1-bg", { opacity: 1, duration: 1.5 }, 1.9)
      .to(".main1-header", { opacity: 1, y: "-=5vw", duration: 1 }, 2.2)
      .to(".main1-metro", { opacity: 1, x: "+=5vw", duration: 0.8 }, 2.5)
      .to(".main1-metro", { duration: 6 }, 3);
  }, []);

  useEffect(() => {
    if (!initial.current) {
      const order = ["main1", "ssc", "coc", "cir"];
      const current = order[next];
      const last = order[next === 0 ? order.length - 1 : next - 1];
      const nextSlide = next === order.length - 1 ? 0 : next + 1;
      const hasImage = document.querySelector(`.${current}-image`);
      const hadImage = document.querySelector(`.${last}-image`);
      const tl = gsap.timeline({
        onComplete: () => {
          setNext(nextSlide);
        },
      });

      tl.to(`.slideshow-${current}`, { y: "-=8vw", duration: 1.2 }, 0)
        .to(`.${current}-bg`, { opacity: 1, duration: 1.5 }, 0.1)
        .to(`.${current}-header`, { opacity: 1, y: "-=5vw", duration: 1 }, 0.3)
        .to(`.${current}-metro`, { opacity: 1, x: "+=5vw", duration: 0.8 }, 0.6)
        .to(`.${current}-metro`, { duration: 6 }, 3)
        .to(
          [`.${last}-bg`, `.${last}-header`, `.${last}-metro`],
          { opacity: 0, duration: 0.3 },
          0
        )
        .to(
          [
            `.${last}-bg`,
            `.${last}-header`,
            `.${last}-metro`,
            `.slideshow-${last}`,
          ],
          { x: 0, y: 0, duration: 0 },
          0.5
        );

      if (hasImage) {
        gsap.to(`.${current}-image`, {
          opacity: 1,
          y: "+=5vw",
          stagger: 0.3,
          duration: 1.5,
          delay: 0.5,
        });
      }
      if (hadImage) {
        gsap.to(`.${last}-image`, { opacity: 0, duration: 0.3 });
        gsap.to(`.${last}-image`, { y: "-=5vw", duration: 0, delay: 0.4 });
      }
    }
  }, [next]);

  return (
    <Wrapper id="music-hero">
      <SlideWrapper>
        <Card4 className="slideshow-cir">
          <img className="cir-image" src={davidSmile1} alt="David Campbell" />
          <img className="cir-image" src={oCTSeason} alt="oCTSeason" />
          <BG4 className="cir-bg" />
          <Header className="cir-header">Composer-in-residence</Header>
          <Metro36 className="cir-metro">beginning 2020</Metro36>
        </Card4>
        <Card3 className="slideshow-coc">
          <img className="coc-image" src={davidSkeptic} alt="David Campbell" />
          <img className="coc-image" src={oCTLogo} alt="Mandi Barrus" />
          <img
            className="coc-image"
            src={jennyCampbell}
            alt="Jennifer Campbell"
          />

          <Header className="coc-header">Chamber Opera Commission</Header>
          <Metro36 className="coc-metro">Summer 2022</Metro36>
          <BG3 className="coc-bg" />
        </Card3>

        <Card2 className="slideshow-ssc">
          <img className="ssc-image" src={davidSerious} alt="David Campbell" />
          <img className="ssc-image" src={Liz1} alt="Liz Christensen" />
          <img className="ssc-image" src={mandi1} alt="Mandi Barrus" />
          <Header className="ssc-header">Song Cycle Commission</Header>
          <Metro36 className="ssc-metro">Autumn 2021</Metro36>
          <BG2 className="ssc-bg" />
        </Card2>
        <Card className="slideshow-main1">
          <Header className="main1-header">Flatline</Header>
          <Metro36 className="main1-metro">New Music</Metro36>
          <img className="main1-bg" src={filmTeaser} alt={"david conducting"} />
        </Card>
      </SlideWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9vw 0 0 0;
  position: relative;
  box-sizing: border-box;
  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 240vw;
    padding: 15vw 0vw 0vw 23vw;
  }
`;

const Header = styled.h2`
  ${SlideHeading};
  position: absolute;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Metro36 = styled.h3`
  ${MetroHeading32};
  position: absolute;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Card = styled.div`
  width: 88vw;
  height: 45vw;

  position: absolute;
  left: 6.1vw;
  top: 10.4vw;
  z-index: 1;

  img {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
    opacity: 0;
  }
  ${Header} {
    width: fit-content;
    bottom: -3.7vw;

    right: 6.9vw;
  }

  ${Metro36} {
    right: 11.9vw;
    bottom: 7.2vw;

    width: fit-content;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const Card2 = styled(Card)`
  ${Header} {
    width: 36vw;
    bottom: 3.1vw;
    left: 5.6vw;
  }

  ${Metro36} {
    left: 0.6vw;
    top: 3.8vw;

    width: fit-content;
  }
  img {
    width: 17.6vw;
    height: 25.3vw;
    box-shadow: 0.6vw 0.6vw 1.6vw 0.7vw rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }

  img:nth-child(1) {
    z-index: 1;
    left: 29.2vw;
    top: -5.8vw;
  }
  img:nth-child(2) {
    z-index: 3;
    left: 46.4vw;
    top: 4.9vw;
  }
  img:nth-child(3) {
    z-index: 2;
    left: 63.6vw;
    top: -3.1vw;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const Card3 = styled(Card)`
  ${Header} {
    width: 35.4vw;
    right: auto;
    bottom: 2.1vw;
    right: 2.8vw;
  }

  ${Metro36} {
    right: 7.8vw;
    top: 4.2vw;

    width: fit-content;
  }

  img {
    position: absolute;
    width: 17.9vw;
    height: 25.2vw;
    box-shadow: 0.6vw 0.6vw 1.6vw 0.7vw rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }

  img:nth-child(1) {
    z-index: 1;
    left: 0.2vw;
    top: 6.1vw;
  }
  img:nth-child(2) {
    z-index: 3;
    width: 24.6vw;
    height: 24.6vw;
    left: 17.8vw;
    top: 0.4vw;
  }
  img:nth-child(3) {
    z-index: 2;
    left: 42.2vw;
    top: -5.3vw;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const Card4 = styled(Card)`
  ${Header} {
    width: fit-content;
    left: 5vw;
    top: 13.2vw;
  }

  ${Metro36} {
    right: 9.7vw;
    bottom: 2.5vw;

    width: fit-content;
  }

  img {
    position: absolute;
    box-shadow: 0.6vw 0.6vw 1.6vw 0.7vw rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }

  img:nth-child(1) {
    z-index: 1;

    width: 20.4vw;
    height: 24.4vw;

    right: 4.7vw;
    top: -0.7vw;
  }
  img:nth-child(2) {
    z-index: 2;
    width: 59.6vw;
    height: 22.5vw;
    top: auto;
    right: auto;
    left: 5vw;
    bottom: 10vw;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const BG2 = styled(BG2SVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const BG3 = styled(BG3SVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const BG4 = styled(BG4SVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 53.9vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default Hero;
