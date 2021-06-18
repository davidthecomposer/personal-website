import React, { useEffect } from "react";
import styled from "styled-components";
// import { ButtonRegularStyles } from "components/Buttons";
// import { Heading1, BodyCopy2 } from "components/Text";
// import colors from "styles/Colors";
import gsap from "gsap";
import { ReactComponent as BG2SVG } from "assets/svg/slide2BG.svg";
import filmTeaser from "assets/images/davidFilmTeaser.jpg";
import media from "styles/media";

const Hero: React.FC<{}> = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero_slideshow-1", { y: "8vw", duration: 1.2 }, 1.8).to(
      ".hero_slideshow-1",
      { opacity: 1, duration: 1.1 },
      1.9
    );
  }, []);

  return (
    <Wrapper id="music-hero">
      <TopHaze />
      <Card>
        <BG2 />
      </Card>
      <Card className="hero_slideshow-1">
        <img src={filmTeaser} alt={"david conducting"} />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vw;
  padding: 10vw 0 0 0;
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

const Card = styled.div`
  width: 100%;
  height: 50.4vw;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 3.4vw;
  z-index: 1;
  opacity: 0;
  img {
    position: absolute;
    width: 100%;
    top: 7.4vw;
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
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const TopHaze = styled.div`
  position: absolute;
  width: 100%;
  height: 28.7vw;
  left: 0;
  top: 0.3vw;
  z-index: 5;
  background: linear-gradient(
    180deg,
    #000000 40.19%,
    rgba(0, 0, 0, 0.87) 49.7%,
    rgba(0, 0, 0, 0.36) 70.94%,
    rgba(23, 22, 27, 0.03) 92.73%
  );
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default Hero;
