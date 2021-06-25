import React, { useReducer } from "react";
import styled from "styled-components";
import { Heading1, Body1, SubHeader, SubHeader2, FormLabel } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import mediaMusicBG from "assets/images/mediaMusicBG.jpg";
import { PrimaryButtonStyle } from "styles/Buttons";
import flatline from "assets/images/flatline.jpg";
import { ReactComponent as PlayButtonSVG } from "assets/svg/playButton.svg";
import { ReactComponent as PauseButtonSVG } from "assets/svg/pauseButton.svg";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";

const MediaMusic: React.FC<{}> = () => {
  const inputNames = ["Name", "Email", "Project"];

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

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

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

  return (
    <Wrapper id="media-music">
      <Header>Music for Media</Header>
      <Playlist>
        <PlayBack>
          <Play>
            <PlayButton />
            <PauseButton />
          </Play>
          <AutoPlay>
            <Text>Auto-play</Text>
          </AutoPlay>
        </PlayBack>
        <Inner>
          <Track>
            <Row1>
              <Text>FlatLine</Text>
              <Text>3:45</Text>
            </Row1>
            <Progress></Progress>
          </Track>
        </Inner>
      </Playlist>
      <Screen>
        <ControlPanel>
          <Story>Story</Story>
          <Music>Music</Music>
          <Details>Details</Details>
        </ControlPanel>
        <Text>
          This Is where the story will go. It will be a short paragraph about
          the scene and will explain Some kind of thing about it. It will try to
          set the mood and give the reader some more intormation about why I
          made the choices I did.
        </Text>
        <ImageWrapper>
          <img src={flatline} alt={"flatline"} />
        </ImageWrapper>
        <Title>FLATLINE</Title>
      </Screen>
      <CTA>
        <HeadLine>Have a Media Project?</HeadLine>
        <Text>
          More Copy about the kinds of things I have at my disposal for media
          projects including sounds, conducting, styles, musicians, etc.
        </Text>
        <GetInTouch>
          Get in Touch <Arrow />
        </GetInTouch>
      </CTA>
      <FormModal>
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
  margin-left: 5.6vw;

  position: relative;
  :before {
    content: "";
    width: 82.4vw;
    height: 0.3vw;
    margin-left: 5.6vw;
    background: ${colors.brightPurple};
    position: absolute;
    bottom: -0.2vw;
    border-radius: 0.3vw;
  }
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
  width: 60vw;
  height: 28vw;
  left: 31vw;
  top: 41vw;
  padding: 1.5vw;

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

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Story = styled.button`
  ${PrimaryButtonStyle};
  border-color: #50caff;
  margin-bottom: 1.4vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const Music = styled.button`
  ${PrimaryButtonStyle};
  border-color: #0c9912;
  border-radius: 10px;
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
  opacity: 0;
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
const Play = styled.button`
  position: relative;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.formSkinPurprle};

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

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;

  ${Text} {
    width: fit-content;
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
  transition: 0.5s;
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

export default MediaMusic;
