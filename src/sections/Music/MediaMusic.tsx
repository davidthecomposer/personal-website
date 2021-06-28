import React, { useEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";
import { Heading1, Body1, SubHeader, SubHeader2, FormLabel } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import mediaMusicBG from "assets/images/mediaMusicBG.jpg";
import { PrimaryButtonStyle } from "styles/Buttons";
import flatline from "assets/images/flatline.jpg";
import gsap from "gsap";
import { ReactComponent as PlayButtonSVG } from "assets/svg/playButton.svg";
import { ReactComponent as PauseButtonSVG } from "assets/svg/pauseButton.svg";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";
const flatlineMP3 = require("assets/audio/flatLine.mp3").default;
const forceOfNatureMP3 =
  require("../../assets/audio/forceOfNature.mp3").default;
const loveStoryMP3 = require("../../assets/audio/loveStory.mp3").default;
const mischeivousMP3 = require("../../assets/audio/mischeivous.mp3").default;
const redemptionMP3 = require("../../assets/audio/redemption.mp3").default;
const rescueMP3 = require("../../assets/audio/rescue.mp3").default;
const afterMP3 = require("../../assets/audio/rockIntro.mp3").default;
const starlightMP3 =
  require("../../assets/audio/starlightStarbright.mp3").default;
const starFlightMP3 =
  require("../../assets/audio/starflightStarbright.mp3").default;
const turningPointMP3 = require("../../assets/audio/turningPoint.mp3").default;

const MediaMusic: React.FC<{}> = () => {
  const inputNames = ["Name", "Email", "Project"];
  const header = useRef(null);
  const headerLine = useRef(null);
  const screen = useRef(null);
  const playList = useRef(null);
  const cta = useRef(null);
  const form = useRef(null);
  const [enter, setEnter] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const isPlaying = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [trackState, setTrackState] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  useEffect(() => {
    if (audioPlayer.current) {
      console.log(audioPlayer.current);
    }
  }, [playing]);

  const tracks = useRef([
    {
      title: "Flatline",
      img: flatline,
      video: false,
      music:
        "Details about the music. Could talk about orchestration or instruments or something that would add interest.",
      story:
        "This Is where the story will go. It will be a short paragraph about the scene and will explain Some kind of thing about it. It will try to set the mood and give the reader some more intormation about why I made the choices I did. ",
      initialTime: "3:45",
      audio: flatlineMP3,
    },
    {
      title: "Rescue",
      img: flatline,
      video: false,
      music:
        "Details about the music. Could talk about orchestration or instruments or something that would add interest.",
      story:
        "This Is where the story will go. It will be a short paragraph about the scene and will explain Some kind of thing about it. It will try to set the mood and give the reader some more intormation about why I made the choices I did. ",
      initialTime: "3:45",
      audio: rescueMP3,
    },
    {
      title: "Mischeivous Endeavors",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: mischeivousMP3,
    },
    {
      title: "Turning Point",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: turningPointMP3,
    },
    {
      title: "After",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: afterMP3,
    },
    {
      title: "Redemption",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: redemptionMP3,
    },
    {
      title: "StarLight, StarFlight",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: starlightMP3,
    },
    {
      title: "Starflight, Starbright",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: starFlightMP3,
    },
    {
      title: "Music for a Love Story",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: loveStoryMP3,
    },
    {
      title: "Force Of Nature",
      img: flatline,
      video: false,
      music: "",
      story: "",
      initialTime: "",
      audio: forceOfNatureMP3,
    },
  ]);

  const [nowPlaying, setNowPlaying] = useState(tracks.current[0].title);

  const [formData, setFormData] = useReducer(
    (
      state: { name: string; email: string; project: string },
      newState: { name: string; email: string; project: string }
    ) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      project: "",
    }
  );

  const updateFormState = (e: any) => {
    const name = e.target.name;
    let newValue = e.target.value;
    //@ts-ignore
    setFormData({ [name]: newValue });
  };

  const playAudio = () => {
    if (audioPlayer.current) {
      //@ts-ignore
      audioPlayer.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioPlayer.current) {
      //@ts-ignore
      audioPlayer.current.pause();
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (audioPlayer.current.playing) {
    }
  }, [activeTrack]);

  const trackList = tracks.current.map((track, i) => {
    return (
      <Track key={i}>
        <Row1 active={activeTrack === i} onClick={() => setActiveTrack(i)}>
          <Text>{track.title}</Text>
          <Text>{track.initialTime}</Text>
        </Row1>
        <Progress></Progress>
      </Track>
    );
  });

  const allTracks = tracks.current.map((track, i) => {
    return (
      <TrackWrapper
        key={`track-presentation-${i}`}
        activeTrack={activeTrack === i}
      >
        <ControlPanel>
          <Story onClick={() => setTrackState(0)}>Story</Story>
          <Music onClick={() => setTrackState(1)}>Music</Music>
          <Details>Details</Details>
        </ControlPanel>
        <TextWrapper>
          <TrackText visibleText={activeTrack === i && trackState === 0}>
            {track.story}
          </TrackText>
          <TrackText visibleText={activeTrack === i && trackState === 1}>
            {track.music}
          </TrackText>
        </TextWrapper>
        <ImageWrapper>
          <img src={track.img} alt={track.title} />
        </ImageWrapper>
        <Title>{track.title}</Title>
      </TrackWrapper>
    );
  });

  useEffect(() => {
    const tl = gsap.timeline();
    if (enter) {
      tl.to(form.current, { scale: 1, duration: 0 }, 0).to(
        form.current,
        { opacity: 1, y: 0, duration: 0.6 },
        0.1
      );
    } else {
      tl.to(form.current, { scale: 0, y: "100px", duration: 0 }, 0.6).to(
        form.current,
        { opacity: 0, duration: 0.6 },
        0
      );
    }
  }, [enter]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
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
  }, []);

  const inputs = inputNames.map((input, i) => {
    return (
      <FormRow key={i}>
        <FormText>{input} :</FormText>
        <TextInput
          type={"text"}
          id={`#${input.toLowerCase()}`}
          name={input.toLowerCase()}
          //@ts-ignore
          value={formData[input]}
          onChange={(e: any) => updateFormState(e)}
        />
      </FormRow>
    );
  });

  const handleClick = () => {
    if (isPlaying.current) {
      setPlaying(false);
      //@ts-ignore
      audioPlayer.current.pause();
      isPlaying.current = false;
    } else {
      setPlaying(true);
      //@ts-ignore
      audioPlayer.current.play();
      isPlaying.current = true;
    }
  };

  return (
    <Wrapper id="media-music">
      <HeaderWrapper>
        <Header ref={header}>Music for Media</Header>
        <HeaderLine ref={headerLine} />
      </HeaderWrapper>
      <Playlist ref={playList}>
        <PlayBack>
          <Play onClick={handleClick} play={playing}>
            <PauseButton />
            <PlayButton />
          </Play>
          <AutoPlay>
            <Text>Auto-play</Text>
          </AutoPlay>
        </PlayBack>

        <Inner>
          <Track>
            <Player src={tracks.current[activeTrack].audio} ref={audioPlayer} />
            <Row1 active>
              <Text>{nowPlaying}</Text>
              <Text>{timeRemaining}</Text>
            </Row1>
            <Progress></Progress>
          </Track>
          {trackList}
        </Inner>
      </Playlist>
      <Screen ref={screen}>{allTracks}</Screen>
      <CTA ref={cta}>
        <HeadLine>Have a Media Project?</HeadLine>
        <Text>
          More Copy about the kinds of things I have at my disposal for media
          projects including sounds, conducting, styles, musicians, etc.
        </Text>
        <GetInTouch
          onClick={() => {
            setEnter(true);
          }}
        >
          Get in Touch <Arrow />
        </GetInTouch>
      </CTA>
      <FormModal ref={form}>
        {inputs}
        <SendMessage>Send Message</SendMessage>
      </FormModal>
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
  }
`;

const Playlist = styled.div`
  position: absolute;
  width: 22.5vw;
  height: 31.3vw;
  left: 6.3vw;
  top: 40.9vw;

  border: 0.1vw solid rgba(219, 219, 219, 0.15);
  /* card Shadow */
  background: radial-gradient(
    87.7% 87.7% at 14.86% 8.6%,
    rgba(0, 186, 227, 0.1) 0%,
    rgba(9, 45, 56, 0.1) 32.81%,
    rgba(21, 111, 131, 0.1) 78.1%,
    rgba(2, 209, 255, 0.1) 100%
  );
  border: 1px solid #000000;
  box-sizing: border-box;

  /* Note: backdrop-filter has minimal browser support */

  border-radius: 5px;
  box-shadow: 0.6vw 0.6vw 1.9vw 0.8vw rgba(0, 0, 0, 0.25);
  border-radius: 0.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Inner = styled.div`
  position: absolute;
  width: 20.1vw;
  height: 25.8vw;
  left: 0.7vw;
  top: 3.9vw;
  padding: 0.5vw;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.95) 100%
  );
  border-radius: 0.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
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
  ${media.fullWidth} {
  }
`;

const TrackWrapper = styled.div<{ activeTrack: boolean }>`
  position: absolute;
  width: 60vw;
  height: 28vw;
  padding: 1.5vw;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.activeTrack ? 1 : 0)};
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
  }
`;

const Text = styled.div`
  ${Body1};
  width: 19.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
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
  ${media.fullWidth} {
  }
`;

const PlayBack = styled.div`
  position: absolute;
  width: 19.1vw;
  height: 2.9vw;
  left: 0.7vw;
  top: 0.5vw;
  background: #000000;
  border-radius: 0.3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const PlayButton = styled(PlayButtonSVG)`
  opacity: 1;
  position: relative;
  width: 1.2vw;
  height: 1.4vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const PauseButton = styled(PauseButtonSVG)`
  opacity: 1;
  position: absolute;
  width: 2vw;
  height: 2vw;
  top: 0.2vw;
  left: 0.2vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const Play = styled.button<{ play: boolean }>`
  position: relative;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.formSkinPurprle};

  ${PlayButton} {
    opacity: ${(props) => (props.play ? 0 : 1)};
  }

  ${PauseButton} {
    opacity: ${(props) => (props.play ? 1 : 0)};
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const AutoPlay = styled.button`
  width: 7.5vw;
  height: 2.5vw;
  border-radius: 0.6vw;
  background: ${colors.formSkinPurprle};
  appearance: none;
  --webkit-appearance: none;
  border: none;
  padding: 0.2vw;

  ${Text} {
    color: ${colors.activeTeal};
    background: black;
    width: 100%;
    height: 100%;
    line-height: 2vw;
    border-radius: 0.4vw;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Track = styled.div`
  ${Body1};
  height: 2.6vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Row1 = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;

  ${Text} {
    width: fit-content;
    color: ${(props) =>
      props.active ? colors.coolWhite : colors.coolWhiteLight};
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Progress = styled.div`
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
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

const FormModal = styled.form`
  position: absolute;
  width: 24.7vw;
  height: 19vw;
  left: 63.4vw;
  top: 92.3vw;
  padding: 3.4vw;
  background: ${colors.formSkinPurprle};
  border-radius: 0.5vw;
  opacity: 0;
  transform: scale(0) translateY(100px);

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const FormRow = styled.div`
  display: flex;
  ${FormLabel};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.9vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const FormText = styled.p`
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const TextInput = styled.input`
  height: 2.5vw;
  width: 16.5vw;
  background: linear-gradient(
    90.38deg,
    #89c1b4 2.99%,
    rgba(124, 146, 140, 0.81) 99.88%
  );
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3vw;
  padding-left: 1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const SendMessage = styled(GetInTouch)`
  position: relative;
  margin-left: 12.1vw;
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

const Player = styled.audio`
  height: 0;
  width: 0;
  position: relative;
  padding: 0;
  display: none;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default MediaMusic;
