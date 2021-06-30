import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// import { ButtonRegularStyles } from "components/Buttons";
import { SlideHeading, MetroHeading32 } from "styles/text";
// import colors from "styles/Colors";
import gsap from "gsap";
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
import { useRectGlow } from "components/Blurs";

const Hero: React.FC<{}> = () => {
  const [next, setNext] = useState(0);
  const initial = useRef(true);
  const ord = useRef(["main1", "ssc", "coc", "cir"]);
  const length = useRef(114 - ord.current.length * 7);
  const direction = useRef(true);
  const tealCanvas = useRef(null);
  const tealCanvas1 = useRef(null);
  const yellowCanvas = useRef(null);
  const wrapper = useRef(null);
  const purpleCanvas = useRef(null);
  const redCanvas = useRef(null);
  const purpleCanvas2 = useRef(null);
  const orangeCanvas = useRef(null);
  const wrapper1 = useRef(null);
  const wrapper2 = useRef(null);

  useRectGlow(
    wrapper,
    purpleCanvas,
    0,
    0.1,
    0.56,
    0.5,
    Math.PI / 12,
    "#91199455"
  );
  useRectGlow(
    wrapper,
    tealCanvas,
    0.5,
    0.6,
    0.41,
    0.15,
    Math.PI / 12,
    "#009EA886"
  );

  useRectGlow(
    wrapper,
    redCanvas,
    0.3,
    0.3,
    0.55,
    0.2,
    Math.PI / 12,
    "#FF010188"
  );

  useRectGlow(
    wrapper,
    tealCanvas1,
    0.1,
    0.1,
    0.46,
    0.47,
    Math.PI / 12,
    "#2CBBA1"
  );

  useRectGlow(
    wrapper,
    yellowCanvas,
    0.45,
    0.1,
    0.42,
    0.45,
    Math.PI / 12,
    "#99A43C"
  );

  useRectGlow(
    wrapper2,
    purpleCanvas2,
    0.1,
    0.05,
    0.75,
    0.52,
    Math.PI / 12,
    "#4C2D8F77"
  );

  useRectGlow(
    wrapper2,
    orangeCanvas,
    0.2,
    0.2,
    0.65,
    0.4,
    Math.PI / 12,
    "#BB702C"
  );

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        initial.current = false;
        setNext(1);
      },
    });

    tl.to(".hero__counter", { opacity: 1, duration: 5 }, 1.8)
      .to(".slideshow-main1", { y: "-8vw", duration: 1.5 }, 1.8)
      .to(".main1-bg", { opacity: 1, duration: 1.8 }, 1.9)
      .to(".main1-header", { opacity: 1, y: "-=5vw", duration: 1.3 }, 2.2)
      .to(".main1-metro", { opacity: 1, x: "+=5vw", duration: 1.1 }, 2.5)
      .to(".main1-metro", { duration: 6 }, 3)
      .to(
        ".line-0",
        { scaleY: 0.25, transformOrigin: "50% 50%", duration: 2 },
        1.8
      )
      .to(
        ".line-0",
        {
          x: `${length.current}px`,
          duration: 7.2,
          ease: "power2.inOut",
        },
        1.8
      )
      .to(".line-0", { scaleY: 1, transformOrigin: "50% 50%", duration: 2 }, 7);
  }, []);

  useEffect(() => {
    if (!initial.current) {
      const order = ["main1", "ssc", "coc", "cir"];
      const change = !direction.current ? order.length - 1 - next : next;
      const slideMove = `${length.current}px`;
      const current = order[next];
      const last = order[next === 0 ? order.length - 1 : next - 1];
      const nextSlide = next === order.length - 1 ? 0 : next + 1;
      const hasImage = document.querySelector(`.${current}-image`);
      const hadImage = document.querySelector(`.${last}-image`);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#music-hero",
          endTrigger: "#slide__wrapper",
          toggleActions: "play pause play pause",
        },
        onComplete: () => {
          if (nextSlide === 0) {
            direction.current = !direction.current;
          }
          setNext(nextSlide);
        },
      });

      tl.to(`.slideshow-${current}`, { y: "-=8vw", duration: 1.5 }, 0)
        .to(
          `.line-${change}`,
          { scaleY: 0.25, transformOrigin: "50% 50%", duration: 2 },
          0
        )
        .to(
          `.line-${change}`,
          {
            x: !direction.current ? "0" : slideMove,
            duration: 7.2,
            ease: "power2.inOut",
          },
          0
        )

        .to(
          `.line-${change}`,
          {
            scaleY: 1,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "back",
          },
          6.2
        )
        .to(
          `.${current}-bg`,
          { opacity: 1, duration: 4, ease: "power1.inOut" },
          0.1
        )
        .to(
          `.${current}-header`,
          { opacity: 1, y: "-=5vw", duration: 1.3, ease: "power2.inOut" },
          0.3
        )
        .to(
          `.${current}-metro`,
          { opacity: 1, x: "+=5vw", duration: 1.1, ease: "power1.inOut" },
          0.6
        )
        .to(`.${current}-metro`, { duration: 6 }, 0.9)
        .to(
          [`.${last}-bg`, `.${last}-header`, `.${last}-metro`],
          { opacity: 0, duration: 0.5 },
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

          stagger: 0.3,
          duration: 0.5,
          delay: 0.5,
        });
        gsap.to(`.${current}-image`, {
          y: "+=5vw",
          stagger: 0.3,
          duration: 1.5,
          delay: 0.5,
        });
      }
      if (hadImage) {
        gsap.to(`.${last}-image`, {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(`.${last}-image`, { y: "-=5vw", duration: 0, delay: 0.4 });
      }
    }
  }, [next]);

  const counters = ord.current.reverse().map((o, i) => {
    const reverse = ord.current.reverse();
    const num = reverse.indexOf(o);

    return (
      <LineUp
        className={`line-${num}`}
        key={`${o}-${i}`}
        active={
          !direction.current
            ? ord.current.length - 1 - next === num
            : next === num
        }
      ></LineUp>
    );
  });

  return (
    <Wrapper id="music-hero">
      <SlideWrapper id="slide__wrapper">
        <Card4 className="slideshow-cir">
          <img className="cir-image" src={davidSmile1} alt="David Campbell" />
          <img className="cir-image" src={oCTSeason} alt="oCTSeason" />
          <Header className="cir-header">Composer-in-residence</Header>
          <Metro36 className="cir-metro">beginning 2020</Metro36>
          <CanvasGroup ref={wrapper2} className="cir-bg">
            <Canvas ref={orangeCanvas} blur={5} />
            <Canvas ref={purpleCanvas2} blur={4} />
          </CanvasGroup>
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
          <CanvasGroup ref={wrapper1} className="coc-bg">
            <Canvas ref={yellowCanvas} blur={5} />
            <Canvas ref={tealCanvas1} blur={4} />
          </CanvasGroup>
        </Card3>

        <Card2 className="slideshow-ssc">
          <img className="ssc-image" src={davidSerious} alt="David Campbell" />
          <img className="ssc-image" src={Liz1} alt="Liz Christensen" />
          <img className="ssc-image" src={mandi1} alt="Mandi Barrus" />
          <Header className="ssc-header">Song Cycle Commission</Header>
          <Metro36 className="ssc-metro">Autumn 2021</Metro36>
          <CanvasGroup ref={wrapper} className="ssc-bg">
            <Canvas ref={redCanvas} blur={9} z={3} />
            <Canvas ref={purpleCanvas} blur={3.5} z={2} />
            <Canvas ref={tealCanvas} blur={2.5} z={1} />
          </CanvasGroup>
        </Card2>
        <Card className="slideshow-main1">
          <Header className="main1-header">Flatline</Header>
          <Metro36 className="main1-metro">New Music</Metro36>
          <img className="main1-bg" src={filmTeaser} alt={"david conducting"} />
        </Card>
      </SlideWrapper>
      <Counter className="hero__counter">{counters}</Counter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9vw 0 0 0;
  position: relative;
  box-sizing: border-box;

  ${media.mobile} {
    width: 100%;
    height: 240vw;
    padding: 15vw 0vw 0vw 23vw;
  }
  ${media.fullWidth} {
    padding: 162px 0 0 0;
  }
`;

const Canvas = styled.canvas<{ blur: number; z?: number }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  filter: blur(${(props) => `${props.blur}vw`});
  z-index: ${(props) => props.z};
`;

const CanvasGroup = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;

  z-index: -1;
  ${media.mobile} {
    width: 190vw;
    height: 225vw;
    left: -45vw;
    top: 50vw;
    ${Canvas} {
      filter: blur(25vw);
    }
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

const Counter = styled.div`
  width: 120px;
  height: 16px;
  border: 1px solid #8d458620;
  box-sizing: border-box;
  border-radius: 6px;
  bottom: 8.9vw;
  left: 9.2vw;
  position: absolute;
  z-index: 1000;
  display: flex;
  align-items: center;
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

const LineUp = styled.div<{ active: boolean }>`
  width: 4px;
  height: 10px;
  margin-left: 3px;
  background: ${(props) => (props.active ? "#00FACD" : "#00FACD40")};
  transition: 0.4s;
  border-radius: 2px;
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
`;
const Card4 = styled(Card)`
  ${Header} {
    width: fit-content;
    left: 5vw;
    top: 8.2vw;
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
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 53.9vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

export default Hero;
