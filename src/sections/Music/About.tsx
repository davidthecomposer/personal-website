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
      tl.to(davidImage.current, { opacity: 0.02, duration: 2 }, 0)
        .to(
          grey.current,
          {
            y: "300vw",
            x: "-=40%",
            ease: "none",
            duration: 7,
          },
          1.25
        )
        .to(
          teal.current,
          {
            y: "470vw",
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
            y: "420vw",
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
        "But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful. Nor again is there
        anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil
        and pain can procure him some great pleasure.
        <br />
        To take a trivial example, which of us ever undertakes laborious
        physical exercise, except to obtain some advantage from it? But who has
        any right to find fault with a man who chooses to enjoy a pleasure that
        has no annoying consequences, or one who avoids a pain that produces no
        resultant pleasure?" On the other hand, we denounce with righteous
        indignation and dislike men who are so beguiled and demoralized by the
        charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame
        belongs to those who fail in their duty through weakness of will, which
        is the same as saying through shrinking from toil and pain.
        <br />
        These cases are perfectly simple and easy to distinguish. In a free
        hour, when our power of choice is untrammelled and when nothing prevents
        our being able to do what we like best, every pleasure is to be welcomed
        and every pain avoided. But in certain circumstances and owing to the
        claims of duty or the obligations of business it will frequently occur
        that pleasures have to be repudiated and annoyances accepted. The wise
        man therefore always holds in these matters to this principle of
        selection: he rejects pleasures to secure other greater pleasures, or
        else he endures pains to avoid worse pains. Contrary to popular belief,
        Lorem Ipsum is not simply random text.
        <br />
        It has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
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

  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 650.8vw;
    padding: 0 2.4vw 60vw;
    background-image: url(${davidHugeM});
    background-position: 50% 50%;
  }
`;
const HeaderWrapper = styled.div`
  position: relative;
  flex-direction: column;
  width: 88.1vw;
  margin-left: 6.3vw;
  height: 5vw;
  overflow: hidden;
  ${media.tablet} {
  }
  ${media.mobile} {
    height: 14vw;
  }
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
    width: 82.1vw;
    margin-right: 8.5vw;
  }
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 65.2vw;
    height: 107.5vw;
    left: 29.2vw;
    top: 61.6vw;
  }
  ${media.fullWidth} {
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
    /* margin-top: 35vw; */
  }
  ${media.fullWidth} {
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

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default About;
