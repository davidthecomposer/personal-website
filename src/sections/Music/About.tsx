import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Heading1, Body1 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import davidHuge from "assets/images/davidHuge.jpg";
import davidHugeM from "assets/images/davidHugeM.jpg";
import davidAbout from "assets/images/davidAbout.jpg";
import davidAboutM from "assets/images/davidAboutM.jpg";
// import { PrimaryButtonStyle } from "styles/Buttons";
// import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";
// import { ReactComponent as ScoreIconSVG } from "assets/svg/scoreIcon.svg";
import gsap from "gsap";

const About: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const header = useRef(null);
  const headerLine = useRef(null);
  const davidImage = useRef(null);
  const teal = useRef(null);
  const grey = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ scrollTrigger: headerLine.current });

    tl.to(
      headerLine.current,
      {
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      0
    )
      .to(header.current, { y: 0, duration: 0.6 }, 1)
      .to(header.current, { x: 0, duration: 0.6 }, 1.6)
      .to(".about-bg-cover", { opacity: 0, duration: 2 }, 1)
      .to(
        ".about-images",
        { opacity: 1, stagger: mobile ? 0.1 : 0.5, duration: mobile ? 0.3 : 4 },
        mobile ? 0 : 1
      )
      .to(".about-text", { opacity: 1, duration: 1.5 }, 1);
  }, [mobile]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mobile ? ".about-text" : davidImage.current,
        scrub: true,
      },
    });
    if (!mobile) {
      tl.from(
        ".about-text",
        {
          yPercent: 60,
          xPercent: -3,
          ease: "none",
        },
        0
      )
        .to(
          teal.current,
          {
            yPercent: 100,
            xPercent: 20,
            ease: "none",
          },
          0
        )
        .to(
          grey.current,
          {
            yPercent: -20,
            xPercent: -40,
            ease: "none",
          },
          0
        );
    } else {
      const tabletPortrait =
        window.innerWidth > 767 &&
        window.innerWidth <= 1200 &&
        window.innerHeight > window.innerWidth;

      tl.to(davidImage.current, { opacity: 0.02, duration: 2 }, 0)
        .to(
          grey.current,
          {
            y: tabletPortrait ? "1552px" : "300vw",
            x: "-=40%",
            ease: "none",
            duration: 7,
          },
          1.25
        )
        .to(
          teal.current,
          {
            y: tabletPortrait ? "2432px" : "470vw",
            x: "+=10%",
            ease: "none",
            duration: 9.25,
          },
          0.5
        )
        .to(davidImage.current, { opacity: 1, x: "+=8%", duration: 3 }, 7)
        .to(
          grey.current,
          {
            y: tabletPortrait ? "2174px" : "420vw",
            ease: "none",
            duration: 1.5,
          },
          8
        );
    }
  }, [mobile]);

  return (
    <Wrapper id="about">
      <HeaderWrapper>
        <Header ref={header}>About</Header>
        <HeaderLine ref={headerLine} />
      </HeaderWrapper>
      <DavidImage
        src={mobile ? davidAboutM : davidAbout}
        className="about-images"
        ref={davidImage}
      />
      <Teal className="about-images" ref={teal} />
      <Grey className="about-images" ref={grey} />

      <Text className="about-text">
        I am a composer living in Salt Lake City Utah. When I was first
        introduced to writing music I was immediately fascinated with the sheer
        amount of possibilities that existed from the simple combination of
        notes and rhythms. That a composer can create art that has the potential
        to be breathtakingly beautiful, devastatingly hideous, heart-wrenching,
        horrific, silly, intricate, or even incomprehensible is such an amazing
        reality.
        <br />
        <br />
        I find myself of two minds more recently. I love the freedom of writing
        concert music in my own style, but I’ve found great enjoyment and
        challenge in writing music for media. This site represents that musical
        duality. Here you can find a sample of some of my media works as well as
        scores and music for my concert works. I’m very excited about new
        projects on the horizon in both areas and hope that you will come back
        and listen as I compose new works and add new projects to this site.
        <br />
        <br />
        Outside of music I am learning.
        <a href="https://www.developer.davidhalcampbell.com">
          web development.
        </a>{" "}
        I am an avid weightlifter, I love playing most sports including a new
        love for pickle-ball, attending cultural and intellectually stimulating
        events, and nights out on the town dancing until 2 AM with friends. I am
        perpetually hoping to finish my science fiction novel. I love to create!
      </Text>
      <CoverDiv className="about-bg-cover" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 158.5vw;
  padding: 15.4vw 0 20vw 0;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  background-image: url(${davidHuge});

  ${media.mobile} {
    width: 100%;
    height: 650.8vw;
    padding: 0 2.4vw 60vw;
    background-image: url(${davidHugeM});
    background-position: 50% 50%;
  }
  ${media.tabletPortrait} {
    width: 100%;
    height: 3367px;
    padding: 0 12px 310px;
  }
`;
const HeaderWrapper = styled.div`
  position: relative;
  flex-direction: column;
  width: 88.1vw;
  margin-left: 6.3vw;
  height: 5vw;
  overflow: hidden;

  ${media.mobile} {
    height: 14vw;
  }
  ${media.tabletPortrait} {
    height: 75px;
  }
`;

const Header = styled.h2`
  ${Heading1};
  color: ${colors.brightPurple};
  transform: translate(-5.6vw, 100%);
  position: absolute;
  width: fit-content;
  right: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
    transform: translate(-8.5vw, 110%);
    font-size: 13.3vw;
    width: 59.9vw;
    text-align: right;
  }
  ${media.tabletPortrait} {
    transform: translate(-44px, 110%);
    font-size: 69px;
    width: 625px;
  }
`;

const HeaderLine = styled.div`
  position: absolute;
  width: 82.4vw;
  height: 0.3vw;
  right: 3.9vw;
  bottom: 0;
  background: ${colors.brightPurple};
  transform: scaleX(0);
  transform-origin: 0%;
  border-radius: 0.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    height: 1vw;
    border-radius: 1vw;
    width: 88vw;
    margin-right: 2vw;
  }
  ${media.tabletPortrait} {
    height: 5px;
    border-radius: 5px;
    width: calc(100% - 10px);
    margin-right: 10px;
  }
`;

const Text = styled.p`
  ${Body1};
  position: absolute;
  width: 37.1vw;
  height: 75.6vw;
  left: 56.9vw;
  top: 60vw;
  opacity: 0;
  z-index: 3;
  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 3.9vw;
    width: 95.2vw;
    height: auto;
    left: 3.9vw;
    top: 168.8vw;
  }
  ${media.tabletPortrait} {
    font-size: 20px;
    width: 492px;
    height: auto;
    left: 20px;
    top: 874px;
  }
`;

const Teal = styled.div`
  position: absolute;
  width: 48.5vw;
  height: 55.7vw;
  left: 38.6vw;
  top: 31.9vw;
  opacity: 0;
  background: rgba(115, 209, 239, 0.15);
  z-index: 1;
  ${media.tablet} {
  }
  ${media.mobile} {
    position: absolute;
    width: 75.6vw;
    height: 118.1vw;
    left: 2.4vw;
    top: 28vw;
  }
  ${media.tabletPortrait} {
    width: 391px;
    height: 611px;
    left: 12px;
    top: 145px;
  }
`;

const Grey = styled.div`
  position: absolute;
  width: 49.1vw;
  height: 68.9vw;
  left: 22.3vw;
  top: 48.3vw;
  opacity: 0;
  background: #1f1f20;
  z-index: 2;

  ${media.mobile} {
    width: 65.2vw;
    height: 107.5vw;
    left: 29.2vw;
    top: 61.6vw;
  }
  ${media.tabletPortrait} {
    width: 337px;
    height: 556px;
    left: 151px;
    top: 319px;
  }
`;

const DavidImage = styled.img`
  position: sticky;
  width: 36.9vw;
  height: 52.6vw;
  left: 13.2vw;
  top: 5vw;
  margin-top: 44.7vw;
  opacity: 0;
  z-index: 3;
  ${media.tablet} {
  }
  ${media.mobile} {
    position: sticky;
    width: 54.1vw;
    height: 86.7vw;
    top: 60vw;
    left: 15vw;
    opacity: 1;
  }
  ${media.tabletPortrait} {
    width: 280px;
    height: 449px;
    top: 310px;
    left: 77px;
  }
`;

const CoverDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: black;
`;

export default About;
