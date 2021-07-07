import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Body1 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import gsap from "gsap";
import { ReactComponent as PlayButtonSVG } from "assets/svg/playButton.svg";
import { ReactComponent as PauseButtonSVG } from "assets/svg/pauseButton.svg";

type Props = {
  track: string;
  title: string;
  initialTime: string;
  id: number;
};

type ConcertProps = {
  title: string;
};

const ProgressConcert: React.FC<ConcertProps> = ({ title }) => {
  return (
    <svg
      width="144"
      height="20"
      viewBox="0 0 144 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_blue)">
        <path
          className={`concert_${title}`}
          d="M0 10L144 10"
          stroke="url(#paint0_linear_blue)"
          strokeWidth="20"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_blue"
          x1="0"
          y1="11"
          x2="136.5"
          y2="9.99961"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.181408" stopColor="#73D1EF" stopOpacity="0.6" />
          <stop offset="0.80951" stopColor="#10034d" stopOpacity="0.9" />
        </linearGradient>
        <clipPath id="clip0_blue">
          <rect width="144" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const AudioPlayerMinimal: React.FC<Props> = ({
  track,
  title,
  initialTime,
  id,
}) => {
  const [playing, setPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("0:00");
  const shouldAutoPlay = useRef(false);
  const player = useRef<HTMLAudioElement>(null);

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

  useEffect(() => {
    if (player.current && track) {
      const tl = gsap.timeline({
        paused: true,

        onUpdate: () => {
          if (player.current) {
            const time = player.current.currentTime;
            const duration = player.current.duration;
            const percentage = `${((time / duration) * 100).toFixed(2)}%`;
            gsap.set(`.concert_${title}`, { drawSVG: `0 ${percentage}` });
          }
        },
      });
      tl.to(
        `.concert_${title}`,
        { opacity: 1, duration: player?.current.duration },
        0
      );

      if (playing) {
        player.current.play();
        tl.play();
      } else {
        player.current.pause();
        tl.pause();
      }
    }
  }, [playing, title, track]);

  const handleEnd = () => {
    if (player.current) {
      player.current.currentTime = 0;
      player.current.pause();
    }
    if (!shouldAutoPlay.current) {
      setPlaying(false);
    }
  };

  const handleClick = () => {
    console.log(player.current);
    setPlaying(!playing);
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

      // setPureTime(audioPlayer.current.currentTime);
      // setPureDuration(audioPlayer.current.duration);
    }
  };

  return (
    <Track>
      <Player
        onDurationChange={getDuration}
        onTimeUpdate={getDuration}
        onEnded={handleEnd}
        src={track}
        ref={player}
        autoPlay={false}
      />
      <Row1 playing={playing}>
        <Text playing={playing}>{`${id + 1}. ${title}`}</Text>
        {track && (
          <>
            <Play onClick={handleClick} play={playing}>
              <PauseButton />
              <PlayButton />
            </Play>
            <Progress playing={playing}>
              <ProgressConcert title={title} />
            </Progress>
          </>
        )}
        <TextTime playing={playing}>{timeRemaining}</TextTime>
      </Row1>
    </Track>
  );
};

const Text = styled.div<{ playing: boolean }>`
  ${Body1};
  position: relative;
  margin-left: 2.5%;
  z-index: 0;
  color: ${(props) => (props.playing ? colors.coolWhite : "black")};
  ${media.tablet} {
    font-size: 3.4vw;
  }
  ${media.mobile} {
  }
`;

const TextTime = styled.div<{ playing: boolean }>`
  ${Body1};
  position: absolute;
  right: 2.5%;
  opacity: ${(props) => (props.playing ? 1 : 0)};
  transition: opacity 0.4s;
  z-index: 0;
  color: ${colors.coolWhite};
  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 3.4vw;
  }
`;

const PlayButton = styled(PlayButtonSVG)`
  opacity: 1;
  position: relative;
  width: 1vw;
  height: 0.7vw;
  margin-left: 0.1vw;
  ${media.tablet} {
    width: 2.4vw;
    height: 2.4vw;
  }
  ${media.mobile} {
  }
`;

const Row1 = styled.div<{ playing: boolean }>`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  width: 90%;
  height: 1.3vw;
  margin-bottom: 0.7vw;
  background: ${(props) => (props.playing ? "#00000095" : "none")};
  align-items: center;

  ${media.tablet} {
  }
  ${media.mobile} {
    height: 8vw;
  }
  ${media.fullWidth} {
  }
`;

const PauseButton = styled(PauseButtonSVG)`
  opacity: 1;
  position: absolute;
  width: 1vw;
  height: 1.2vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
`;
const Play = styled.button<{ play: boolean }>`
  position: absolute;

  left: ${(props) => (props.play ? "-1.5vw" : "calc(100% - 2vw)")};
  transition: left 0.5s;
  width: 1.4vw;
  height: 1.4vw;
  border-radius: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.formSkinPurprle};
  z-index: 5;
  ${PlayButton} {
    opacity: ${(props) => (props.play ? 0 : 1)};
  }

  ${PauseButton} {
    opacity: ${(props) => (props.play ? 1 : 0)};
  }

  ${media.tablet} {
    width: 7vw;
    height: 7vw;
  }
  ${media.mobile} {
    left: ${(props) => (props.play ? "-1.5vw" : "calc(100% - 10vw)")};
  }
`;

const Track = styled.div`
  ${Body1};
  width: 100%;

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

const Progress = styled.div<{ playing: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0vw;
  top: 0;
  z-index: 0;
  opacity: ${(props) => (props.playing ? 1 : 0)};

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

export default AudioPlayerMinimal;
