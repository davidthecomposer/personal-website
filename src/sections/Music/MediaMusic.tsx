import React, { useEffect, useRef, useState } from "react";
import ContactForm from "components/ContactForm";
import styled from "styled-components";
import { Heading1, Body1, SubHeader, SubHeader2 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import mediaMusicBG from "assets/images/mediaMusicBG.jpg";
import { PrimaryButtonStyle } from "styles/Buttons";
import flatline from "assets/images/flatline.jpg";
import after from "assets/images/after.jpg";
import forceOfNature from "assets/images/forceOfNature.jpg";
import mischeivous from "assets/images/mischeivous.jpg";
import redemption from "assets/images/redemption.jpg";
import rescue from "assets/images/rescue.jpg";
import starFlight from "assets/images/starFlight.jpg";
import starlight from "assets/images/starlight.jpg";
import turningPoint from "assets/images/turningPoint.jpg";
import loveStory from "assets/images/loveStory.jpg";

import gsap from "gsap";
import AudioPlayer from "components/AudioPlayer";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";

const MediaMusic: React.FC<{}> = () => {
  const header = useRef(null);
  const headerLine = useRef(null);
  const screen = useRef(null);
  const playList = useRef(null);
  const cta = useRef(null);

  const [enter, setEnter] = useState(false);

  const [activeScreen, setActiveScreen] = useState(0);
  const [trackState, setTrackState] = useState(0);

  const tracks = useRef([
    {
      title: "Flatline",
      img: flatline,
      video: false,
      music: "The Music",
      story:
        "This Is where the story will go. It will be a short paragraph about the scene and will explain Some kind of thing about it. It will try to set the mood and give the reader some more intormation about why I made the choices I did. ",
    },
    {
      title: "Rescue",
      img: rescue,
      video: false,
      music:
        "Details about the music. Could talk about orchestration or instruments or something that would add interest.",
      story:
        "This Is where the story will go. It will be a short paragraph about the scene and will explain Some kind of thing about it. It will try to set the mood and give the reader some more intormation about why I made the choices I did. ",
    },
    {
      title: "Mischeivous Endeavors",
      img: mischeivous,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "Turning Point",
      img: turningPoint,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "After",
      img: after,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "Redemption",
      img: redemption,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "StarLight, StarFlight",
      img: starlight,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "Starflight, Starbright",
      img: starFlight,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "Music for a Love Story",
      img: loveStory,
      video: false,
      music: "",
      story: "",
    },
    {
      title: "Force Of Nature",
      img: forceOfNature,
      video: false,
      music: "",
      story: "",
    },
  ]);

  useEffect(() => {
    if (headerLine.current) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: headerLine.current, start: "top 90%" },
      });

      tl.to(headerLine.current, {
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      })
        .to(header.current, { y: 0, duration: 0.6 }, 1)
        .to(header.current, { x: 0, duration: 0.6 }, 1.6);
    }
  }, []);

  useEffect(() => {
    if (screen.current) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: screen.current, start: "top 90%" },
      });

      tl.from(screen.current, {
        x: "+=3vw",
        y: "+=3vw",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      }).from(
        playList.current,
        {
          x: "-=3vw",
          y: "+=3vw",
          duration: 1,
          opacity: 0,
          ease: "power1.inOut",
        },
        0.3
      );
    }
  }, []);

  useEffect(() => {
    if (cta.current) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: cta.current, start: "top 80%" },
      });

      tl.from(cta.current, {
        x: "+=6vw",
        y: "+=3vw",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, []);

  const allTracks = tracks.current.map((track, i) => {
    return (
      <ScreenWrapper
        key={`track-presentation-${i}`}
        activeScreen={activeScreen === i}
      >
        <ControlPanel>
          <Story onClick={() => setTrackState(0)}>Story</Story>
          <Music onClick={() => setTrackState(1)}>Music</Music>
          <Details>Details</Details>
        </ControlPanel>
        <TextWrapper>
          <TrackText visibleText={activeScreen === i && trackState === 0}>
            {track.story}
          </TrackText>
          <TrackText visibleText={activeScreen === i && trackState === 1}>
            {track.music}
          </TrackText>
        </TextWrapper>
        <ImageWrapper>
          <img src={track.img} alt={track.title} />
        </ImageWrapper>
        <Title>{track.title}</Title>
      </ScreenWrapper>
    );
  });

  return (
    <Wrapper id="media-music">
      <HeaderWrapper>
        <Header ref={header}>Music for Media</Header>
        <HeaderLine ref={headerLine} />
      </HeaderWrapper>
      <AudioPlayer setActiveScreen={setActiveScreen} />
      <Screen ref={screen}>{allTracks}</Screen>
      <CTA ref={cta}>
        <HeadLine>Have a Media Project?</HeadLine>
        <Text>
          Great music can add so much to any media production. I have access to
          world-class virtual instruments and knowledge in order to add that
          extra level of craft and realism to help promote your artistic vision.
          For projects with a larger budget I am also able to incorporate live
          musicians and have experience conduting choirs and orchestras.
        </Text>
        <GetInTouch
          onClick={() => {
            setEnter(true);
          }}
        >
          Get in Touch <Arrow />
        </GetInTouch>
      </CTA>
      <ContactForm enter={enter} leftVal={"63.4vw"} topVal={"92.3vw"} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 125vw;
  padding: 21.4vw 0 0 0;
  background-image: url(${mediaMusicBG});
  background-size: cover;
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
  ${Heading1};
  color: ${colors.brightPurple};
  width: 51.4vw;
  transform: translate(5.6vw, 100%);
  position: absolute;
  width: fit-content;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const HeaderLine = styled.div`
  width: 82.4vw;
  height: 0.3vw;
  margin-left: 5.6vw;
  background: ${colors.brightPurple};
  position: absolute;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: 100%;
  border-radius: 0.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 5vw;
  margin-left: 5.6vw;
  overflow: hidden;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const Screen = styled.div`
  position: absolute;
  width: 63vw;
  height: 31vw;
  left: 31vw;
  top: 41vw;
  /* padding: 1.5vw; */

  background: radial-gradient(
    50% 50% at 50% 50%,
    #151515 0%,
    #131313 28.12%,
    #0f0e10 53.65%,
    #0b0b0c 75%,
    #09090a 100%
  );
  /* card Shadow */

  box-shadow: 1vw 1vw 2vw 1vw rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const ScreenWrapper = styled.div<{ activeScreen: boolean }>`
  position: absolute;
  width: 60vw;
  height: 28vw;
  padding: 1.5vw;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.activeScreen ? 1 : 0)};
  transition: opacity 0.5s;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const Story = styled.button`
  ${PrimaryButtonStyle};
  padding: 0;
  text-align: center;
  border-color: #50caff;
  margin-bottom: 1.4vw;
  margin-right: 1.9vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;
const Music = styled.button`
  ${PrimaryButtonStyle};
  padding: 0;
  text-align: center;
  border-color: #0c9912;
  border-radius: 0.6vw;
  margin-bottom: 1.4vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;
const Details = styled.button`
  ${PrimaryButtonStyle};
  padding: 0;
  text-align: center;
  border-color: #f5ed28;
  margin-bottom: 1.4vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const Text = styled.div`
  ${Body1};
  width: 19.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const TrackText = styled.p<{ visibleText?: boolean }>`
  ${Body1};
  width: 19.3vw;
  opacity: ${(props) => (props.visibleText ? 1 : 0)};
  position: absolute;
  top: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const Title = styled.h3`
  ${SubHeader2};
  position: absolute;
  right: 1.5vw;
  bottom: 1.5vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 38.8vw;
  height: 23.3vw;
  right: 1.5vw;
  top: 1.5vw;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;

const CTA = styled.div`
  position: absolute;
  width: 46vw;
  height: 19.8vw;
  left: 6.3vw;
  top: 94.4vw;
  z-index: 3;

  ${Text} {
    width: 100%;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const HeadLine = styled.h3`
  ${SubHeader};
  width: 100%;
  margin-bottom: 1.7vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Arrow = styled(ButtonArrowSVG)`
  width: 2.5vw;
  height: 1vw;
  margin-left: 1.5vw;
  z-index: 3;
  color: ${colors.activeTeal};
  transition: 0.5s;
  path {
    fill: currentColor;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const GetInTouch = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  ${PrimaryButtonStyle};
  border-color: ${colors.activeTeal};
  width: 12.5vw;

  padding-left: 0.8vw;

  :hover {
    ${Arrow} {
      transform: translateX(0.4vw);

      transition: 0.5s;
    }
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const TextWrapper = styled.div`
  width: 19.3vw;
  position: relative;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default MediaMusic;
