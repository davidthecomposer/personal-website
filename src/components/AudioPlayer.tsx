import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useCallback,
} from "react";
import styled from "styled-components";
import { Body1 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import gsap from "gsap";
import { PrimaryButtonStyle } from "styles/Buttons";
import { MobileContext } from "App";
import { ReactComponent as PlayButtonSVG } from "assets/svg/playButton.svg";
import { ReactComponent as PauseButtonSVG } from "assets/svg/pauseButton.svg";

type Props = {
  setActiveScreen: any;
  introAni: boolean;
  setMobileInfo: any;
  mobileInfo: any;
  mediaPieces: {
    title: string;
    img: string;
    video: boolean;
    music: string;
    story: string;
    audio: string;
    id: number;
  }[];
};

type AudioElementProps = {
  track: {
    title: string;
    img: string;
    video: boolean;
    music: string;
    story: string;
    audio: string;
    id: number;
  };
  activeTrack: number;
  setActiveTrack: React.Dispatch<React.SetStateAction<number>>;
  playPushed: boolean;
  addRef: any;
  trackRefs: any;
  handleEnd: any;
};

const AudioElement: React.FC<AudioElementProps> = ({
  track,
  activeTrack,
  setActiveTrack,
  playPushed,
  addRef,
  trackRefs,
  handleEnd,
}) => {
  const player = useRef<HTMLAudioElement>(null);
  const [timeRemaining, setTimeRemaining] = useState("0:00");
  const progress = useRef<HTMLDivElement | null>(null);
  const row = useRef<HTMLDivElement | null>(null);
  const [canProgress, setCanProgress] = useState<boolean>(false);
  const [progressCheck, setProgressCheck] = useState<number>(0);
  const loaded = useRef(false);

  const returnTimeString = (time: number) => {
    return `${Math.floor(time / 60)}:${
      time < 10
        ? `0${time}`
        : time % 60 < 10
        ? `0${time % 60}`
        : time % 60
        ? time % 60
        : "00"
    }`;
  };

  const getDuration = () => {
    if (player.current) {
      const time =
        //@ts-ignore
        Math.floor(player.current.duration) -
        //@ts-ignore
        Math.floor(player.current.currentTime);
      const timeRemainingFormat = returnTimeString(time);
      setTimeRemaining(timeRemainingFormat);
    }
  };

  const handleProgress = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (row.current && player.current) {
      const width = row.current.getBoundingClientRect().width;
      const x = e.clientX - row.current.getBoundingClientRect().left;

      const newTime = Math.floor((x / width) * player.current.duration);

      player.current.currentTime = newTime;

      setProgressCheck(newTime);
    }
  };

  useEffect(() => {
    if (player.current) {
      const tl = gsap.timeline({
        paused: true,

        onUpdate: () => {
          if (player.current) {
            const time = player.current.currentTime;
            const duration = player.current.duration;
            const percentage = `${(time / duration).toFixed(4)}`;

            gsap.set(progress.current, { scaleX: percentage, ease: "none" });
          }
        },
      });
      tl.to(progress.current, { duration: player?.current.duration }, 0);

      if (canProgress) {
        tl.play();
      } else {
        const time = player.current.currentTime;
        const duration = player.current.duration;
        const percentage = `${(time / duration).toFixed(4)}`;
        gsap.set(progress.current, { scaleX: percentage, ease: "none" });
        tl.pause();
      }
    }
  }, [canProgress, progressCheck]);

  useEffect(() => {
    if (player.current) {
      if (activeTrack === track.id && playPushed) {
        trackRefs.current[activeTrack].play();
        setCanProgress(true);
      } else {
        setCanProgress(false);
      }
    }
  }, [activeTrack, track, playPushed, trackRefs]);

  const handleRowClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (activeTrack !== track.id) {
      setActiveTrack(track.id);
    } else {
      handleProgress(e);
    }
  };

  useEffect(() => {
    if (player.current && !loaded.current) {
      addRef(player.current);
      loaded.current = true;
    }
  }, [addRef]);

  return (
    <Track
      selected={activeTrack === track.id}
      key={track.id}
      data-id={track.id}
    >
      <Player
        onDurationChange={getDuration}
        onTimeUpdate={getDuration}
        onEnded={handleEnd}
        src={track.audio}
        ref={player}
        preload={"meta"}
        playsInline
        controls
      />
      <Row1
        className={`media-track_row${track.id}`}
        active={activeTrack === track.id}
        ref={row}
        onClick={(e) => {
          handleRowClick(e);
        }}
      >
        <Text>{track.title}</Text>
        <Text>{timeRemaining}</Text>
        <ProgressInner
          active={activeTrack === track.id}
          className={`media__progress${track.id}`}
          ref={progress}
        />
      </Row1>
    </Track>
  );
};

const AudioPlayer: React.FC<Props> = ({
  setActiveScreen,
  introAni,
  setMobileInfo,
  mobileInfo,
  mediaPieces,
}) => {
  const playList = useRef(null);
  const [playPushed, setPlayPushed] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const mobile = useContext(MobileContext);
  const [autoPlay, setAutoPlay] = useState(false);
  const shouldAutoPlay = useRef(false);
  const trackArray = useRef([]);
  const playTrack = useRef(false);

  const addRef = (audioElement: HTMLAudioElement) => {
    let newTrackArr: any[] = trackArray.current;

    newTrackArr.push(audioElement);
  };

  const handleEnd = useCallback(() => {
    //@ts-ignore
    trackArray.current[activeTrack].currentTime = 0;
    //@ts-ignore
    trackArray.current[activeTrack].pause();
    setActiveTrack(
      activeTrack === mediaPieces.length - 1 ? 0 : activeTrack + 1
    );

    if (!shouldAutoPlay.current) {
      setPlayPushed(false);
    }
  }, [setActiveTrack, activeTrack, mediaPieces]);

  useEffect(() => {
    if (introAni) {
      gsap.from(playList.current, {
        x: "-=3vw",
        y: "+=3vw",
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });
    }
  }, [introAni]);

  const handleTrackClick = useCallback(
    (trackNum: number) => {
      if (trackNum !== activeTrack) {
        //@ts-ignore
        trackArray.current[activeTrack].pause();
        setActiveTrack(trackNum);
      }
    },
    [activeTrack]
  );

  const [trackOrder, setTrackOrder] = useState(
    mediaPieces.map((track, i) => {
      return (
        <AudioWrapper key={track.id} onClick={() => handleTrackClick(track.id)}>
          <AudioElement
            activeTrack={activeTrack}
            setActiveTrack={setActiveTrack}
            track={mediaPieces[track.id]}
            playPushed={playPushed}
            addRef={addRef}
            trackRefs={trackArray}
            handleEnd={handleEnd}
          />
        </AudioWrapper>
      );
    })
  );

  useEffect(() => {
    const trackList = mediaPieces.map((track, i) => {
      return (
        <AudioWrapper key={track.id} onClick={() => handleTrackClick(track.id)}>
          <AudioElement
            activeTrack={activeTrack}
            setActiveTrack={setActiveTrack}
            track={mediaPieces[track.id]}
            playPushed={playPushed}
            addRef={addRef}
            trackRefs={trackArray}
            handleEnd={handleEnd}
          />
        </AudioWrapper>
      );
    });

    const trackListOrdered = [
      ...trackList.slice(activeTrack, trackList.length),
      ...trackList.slice(0, activeTrack),
    ];
    setActiveScreen(activeTrack);
    setTrackOrder(trackListOrdered);
  }, [
    activeTrack,
    setActiveScreen,
    playPushed,
    mediaPieces,
    handleEnd,
    handleTrackClick,
  ]);

  const handleClick = (e: any) => {
    setPlayPushed(!playPushed);
    playTrack.current = !playTrack.current;
    if (playTrack.current) {
      //@ts-ignore
      trackArray.current[activeTrack].play();
    } else {
      //@ts-ignore
      trackArray.current[activeTrack].pause();
    }
  };

  useEffect(() => {
    if (autoPlay) {
      shouldAutoPlay.current = true;
    } else {
      shouldAutoPlay.current = false;
    }
  }, [autoPlay]);

  const handleInfo = () => {
    setMobileInfo(!mobileInfo);
  };

  return (
    <Playlist ref={playList}>
      <PlayBack>
        <Play
          aria-label="play and pause button"
          onTouchStart={(e) => handleClick(e)}
          onClick={(e) => handleClick(e)}
          play={playPushed}
        >
          <PauseButton />
          <PlayButton />
        </Play>
        {mobile && <Info onClick={handleInfo}>Info</Info>}
        <AutoPlay onClick={() => setAutoPlay(!autoPlay)} active={autoPlay}>
          <Text>Auto-play</Text>
        </AutoPlay>
      </PlayBack>

      <Inner>{trackOrder}</Inner>
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
  border-radius: 5px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0.3vw;

  ${media.mobile} {
    position: absolute;
    width: 94vw;
    height: 145vw;
    left: auto;
    top: auto;
    margin: 0 3vw;
  }
  ${media.tabletPortrait} {
    width: 486px;
    height: 750px;

    margin: 0 15px;
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
    width: 77vw;
    height: 102vw;
    top: 28vw;
    left: 3vw;
    padding: 5vw;
  }
  ${media.tabletPortrait} {
    width: 399px;
    height: 527px;
    top: 145px;
    left: 15px;
    padding: 26px;
  }
`;

const Info = styled.button`
  ${PrimaryButtonStyle};
  width: 29vw;
  height: 9.7vw;
  border-radius: 2.4vw;
  border-color: ${colors.formSkinPurprle};
  position: absolute;
  right: 4vw;
  bottom: 1vw;

  ${media.tabletPortrait} {
    font-size: 22px;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    right: 21px;
    bottom: 5px;
  }
`;

const Text = styled.div`
  ${Body1};
  width: 19.3vw;
  position: relative;
  z-index: 3;
  -webkit-user-select: none;
  user-select: none;
  ${media.mobile} {
    font-size: 4.3vw;
  }
  ${media.tabletPortrait} {
    font-size: 22px;
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

  ${media.mobile} {
    width: 79vw;
    height: 22.5vw;
    left: 2.7vw;
    top: 2.7vw;
    padding: 0 4.1vw;
    align-items: flex-start;
  }
  ${media.tabletPortrait} {
    width: 409px;
    height: 116px;
    left: 14px;
    top: 14px;
    padding: 0 21px;
  }
`;

const PlayButton = styled(PlayButtonSVG)`
  opacity: 1;
  position: relative;
  width: 1.2vw;
  height: 1.4vw;
  transition: 0.4s;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 8vw;
    height: 8vw;
    margin-left: 1vw;
  }
  ${media.tabletPortrait} {
    width: 41px;
    height: 41px;
    margin-left: 5px;
  }
`;

const AudioWrapper = styled.div`
  position: relative;
`;

const PauseButton = styled(PauseButtonSVG)`
  opacity: 1;
  position: absolute;
  width: 2vw;
  height: 2vw;
  top: 0.2vw;
  left: 0.2vw;
  transition: 0.4s;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 10vw;
    height: 10vw;
    left: 2vw;
    top: 2vw;
  }
  ${media.tabletPortrait} {
    width: 51px;
    height: 51px;
    left: 10px;
    top: 10px;
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

  ${media.hover} {
    :hover {
      ${PlayButton}, ${PauseButton} {
        transform: scale(0.8);
        transition: 0.4s;
      }
    }
  }

  ${PlayButton} {
    opacity: ${(props) => (props.play ? 0 : 1)};
  }

  ${PauseButton} {
    opacity: ${(props) => (props.play ? 1 : 0)};
  }

  ${media.mobile} {
    width: 14.5vw;
    height: 14.5vw;
    margin-top: 4vw;
    margin-left: 1vw;
  }
  ${media.tabletPortrait} {
    width: 75px;
    height: 75px;
    margin-top: 21px;
    margin-left: 5px;
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
  ${media.hover} {
    :hover {
      ${Text} {
        color: ${colors.coolWhiteLight};
        transition: 0.4s;
      }
    }
  }
  ${Text} {
    color: ${(props) => (props.active ? colors.activeTeal : colors.dullTeal)};
    background: black;
    width: 100%;
    height: 100%;
    line-height: 2vw;
    border-radius: 0.4vw;
    transition: 0.4s;
  }

  ${media.mobile} {
    width: 29vw;
    height: 9.7vw;
    border-radius: 1.4vw;
    margin-top: 0.5vw;
    ${Text} {
      line-height: 8vw;

      width: 94%;
      height: 86%;
      margin-left: 3%;
    }
  }
  ${media.tabletPortrait} {
    width: 150px;
    height: 50px;
    border-radius: 8px;
    margin-top: 2px;
    ${Text} {
      line-height: 41px;
      border-radius: 6px;
    }
  }
`;

const ProgressInner = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  background: linear-gradient(
    to right,
    #ff4f9d 18.14%,
    rgba(32, 242, 255, 0.78) 78.65%
  );
  transform: scaleX(0);
  transform-origin: 0% 0%;
`;

const Track = styled.div<{ selected: boolean }>`
  ${Body1};
  width: 100%;
  height: 2.6vw;
  cursor: pointer;
  transition: 0.3s;

  ${ProgressInner} {
    opacity: ${(props) => (props.selected ? 0.6 : 0.07)};
  }

  ${media.hover} {
    :hover {
      ${Text} {
        color: ${colors.coolPurple};
        transition: 0.3s;
      }
    }
  }

  ${media.mobile} {
    height: 10vw;
  }
  ${media.tabletPortrait} {
    height: 51px;
  }
`;

const Row1 = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  ${Text} {
    width: fit-content;
    transition: 0.3s;
    color: ${(props) =>
      props.active ? colors.coolWhite : colors.coolWhiteLight};
  }
`;

const Player = styled.audio`
  height: 0;
  width: 0;
  position: relative;
  padding: 0;
  display: none;
`;

export default AudioPlayer;
