import React, { useEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";
import { Heading1, Body1, SubHeader, SubHeader2, FormLabel } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";

import { PrimaryButtonStyle } from "styles/Buttons";

import gsap from "gsap";
import { ReactComponent as PlayButtonSVG } from "assets/svg/playButton.svg";
import { ReactComponent as PauseButtonSVG } from "assets/svg/pauseButton.svg";

const flatlineMP3 = require("assets/audio/flatLine.mp3").default;
const forceOfNatureMP3 = require("assets/audio/forceOfNature.mp3").default;
const loveStoryMP3 = require("assets/audio/loveStory.mp3").default;
const mischeivousMP3 = require("assets/audio/mischeivous.mp3").default;
const redemptionMP3 = require("assets/audio/redemption.mp3").default;
const rescueMP3 = require("assets/audio/rescue.mp3").default;
const afterMP3 = require("assets/audio/rockIntro.mp3").default;
const starlightMP3 = require("assets/audio/starlightStarbright.mp3").default;
const starFlightMP3 = require("assets/audio/starflightStarbright.mp3").default;
const turningPointMP3 = require("assets/audio/turningPoint.mp3").default;

const AudioPlayer: React.FC<{}> = () => {
  const playList = useRef(null);

  const [enter, setEnter] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const isPlaying = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [count, setCount] = useState(false);
  const [ready, setReady] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("0:00");
  const [pureTime, setPureTime] = useState(0);
  const [pureDuration, setPureDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [autoPlay, setAutoPlay] = useState(false);

  const tracks = useRef([
    {
      title: "Flatline",
      initialTime: "3:45",
      audio: flatlineMP3,
      id: 0,
    },
    {
      title: "Rescue",
      initialTime: "3:45",
      audio: rescueMP3,
      id: 1,
    },
    {
      title: "Mischeivous Endeavors",

      initialTime: "2:41",
      audio: mischeivousMP3,
      id: 2,
    },
    {
      title: "Turning Point",

      initialTime: "3:32",
      audio: turningPointMP3,
      id: 3,
    },
    {
      title: "After",

      initialTime: "1:10",
      audio: afterMP3,
      id: 4,
    },
    {
      title: "Redemption",

      initialTime: "2:54",
      audio: redemptionMP3,
      id: 5,
    },
    {
      title: "StarLight, StarFlight",
      initialTime: "4:27",
      audio: starlightMP3,
      id: 6,
    },
    {
      title: "Starflight, Starbright",

      initialTime: "6:05",
      audio: starFlightMP3,
      id: 7,
    },
    {
      title: "Music for a Love Story",

      initialTime: "3:05",
      audio: loveStoryMP3,
      id: 8,
    },
    {
      title: "Force Of Nature",

      initialTime: "1:52",
      audio: forceOfNatureMP3,
      id: 9,
    },
  ]);
  const [trackOrder, setTrackOrder] = useState(
    tracks.current.map((track, i) => {
      return (
        <Track selected={activeTrack === i} key={i} data-id={track.id}>
          <Row1 active={activeTrack === i} onClick={() => handleTrackChange(i)}>
            <Text>{track.title}</Text>
            <Text>{track.initialTime}</Text>
          </Row1>
          <Progress></Progress>
        </Track>
      );
    })
  );

  const [nowPlaying, setNowPlaying] = useState(tracks.current[0].title);
  const [trackData, setTrackData] = useReducer(
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

  const updateTrackData = (time: number, name: string) => {
    //@ts-ignore
    setFormData({ [name]: time });
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
    const trackList = tracks.current.map((track, i) => {
      return (
        <Track
          selected={activeTrack === i}
          key={i}
          data-id={track.id}
          className={`track${i}`}
        >
          <Row1 active={activeTrack === i} onClick={() => handleTrackChange(i)}>
            <Text>{track.title}</Text>
            <Text>{track.initialTime}</Text>
          </Row1>
          <Progress></Progress>
        </Track>
      );
    });
    const trackListOrdered = [
      ...trackList.slice(activeTrack, trackList.length),
      ...trackList.slice(0, activeTrack),
    ];

    console.log(trackListOrdered);

    const activeInfo = trackListOrdered[0].props["data-id"];
    console.log(activeInfo, tracks.current[activeInfo].title);
    setNowPlaying(tracks.current[activeInfo].title);
    setTrackOrder(trackListOrdered);

    if (autoPlay && isPlaying.current) {
      playAudio();
    }
  }, [activeTrack, autoPlay]);

  const handleTrackChange = (num: number) => {
    setActiveTrack(num);
  };

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

  const getDuration = () => {
    if (audioPlayer.current) {
      const audio = audioPlayer.current;
      const time = Math.floor(audio.duration) - Math.floor(audio.currentTime);

      const timeRemainingFormat = `${Math.floor(time / 60)}:${
        time < 10
          ? `0${time}`
          : time % 60 < 10
          ? `0${time % 60}`
          : time % 60
          ? time % 60
          : "00"
      }`;

      setTimeRemaining(timeRemainingFormat);
      setPureTime(audioPlayer.current.currentTime);
      setPureDuration(audioPlayer.current.duration);
    }
  };

  const handleEnd = () => {
    setActiveTrack(activeTrack + 1);
  };

  return (
    <Playlist ref={playList}>
      <PlayBack>
        <Play onClick={handleClick} play={playing}>
          <PauseButton />
          <PlayButton />
        </Play>
        <AutoPlay onClick={() => setAutoPlay(!autoPlay)} active={autoPlay}>
          <Text>Auto-play</Text>
        </AutoPlay>
      </PlayBack>

      <Inner>
        <Track selected={false}>
          <Player
            onDurationChange={getDuration}
            onTimeUpdate={getDuration}
            onEnded={handleEnd}
            onLoad={() => setReady(true)}
            src={tracks.current[activeTrack].audio}
            ref={audioPlayer}
          />
          <Row1 active>
            <Text>{nowPlaying}</Text>
            <Text>{timeRemaining}</Text>
          </Row1>
          <Progress></Progress>
        </Track>
        {trackOrder}
      </Inner>
    </Playlist>
  );
};

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
`;

const Text = styled.div`
  ${Body1};
  width: 19.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
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
`;

const AutoPlay = styled.button<{ active: boolean }>`
  width: 7.5vw;
  height: 2.5vw;
  border-radius: 0.6vw;
  background: ${colors.formSkinPurprle};
  appearance: none;
  --webkit-appearance: none;
  border: none;
  padding: 0.2vw;

  ${Text} {
    color: ${(props) => (props.active ? colors.activeTeal : colors.dullTeal)};
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
`;

const Track = styled.div<{ selected: boolean }>`
  ${Body1};
  height: ${(props) => (props.selected ? 0 : "2.6vw")};
  transform: scaleY(${(props) => (props.selected ? 0 : 1)});
  cursor: pointer;
  transition: 0.3s;
  ${media.hover} {
    :hover {
      ${Text} {
        color: ${colors.coolPurple};
        transition: 0.3s;
      }
    }
  }

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
    transition: 0.3s;
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

export default AudioPlayer;
