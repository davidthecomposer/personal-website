import React, { useReducer, useRef } from "react";
import styled from "styled-components";
import {
  Heading1,
  Body1,
  SubHeader,
  SubHeader3,
  FormLabel,
  Playlist,
  ConcertTitle,
  BodySmall,
} from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import concertMusicBG from "assets/images/concertMusic.jpg";
import { PrimaryButtonStyle } from "styles/Buttons";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";
import { ReactComponent as ScoreIconSVG } from "assets/svg/scoreIcon.svg";
import gsap from "gsap";

const MediaMusic: React.FC<{}> = () => {
  const inputNames = ["Name", "Email", "Project"];
  const soloTurned = useRef(false);

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

  const concertPieces = [
    {
      title: "Solo Pieces",
      tabName: "Solo",
      playList: ["Copernicus Etudes", "Three Pieces for Clarinet"],
      allPieces: [
        {
          title: "Copernicus Etudes",
          key: "copernicus",
          year: "2020",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          movements: [
            "First",
            "Second",
            "Third",
            "Fourth",
            "Fifth",
            "Sixth",
            "Seventh",
            "Eighth",
            "Ninth",
          ],
          instrumentation: ["Solo Piano"],
          scoreSample: "",
          duration: "28 minutes",
        },
      ],
    },
    {
      title: "cover",
      playList: ["cover"],
      allPieces: [
        {
          title: "Concert Music",
          key: "cover",
          year: "",
          description: "",
          movements: [""],
          instrumentation: [""],
          scoreSample: "",
          duration: "",
        },
      ],
    },
  ];

  const allConcert = concertPieces.map((genre, index) => {
    const { title, playList, allPieces, tabName } = genre;

    const turnPage =
      index < concertPieces.length - 1 && concertPieces[index + 1].tabName
        ? concertPieces[index + 1].tabName
        : "cover";
    const allPlaylist =
      playList &&
      playList.map((piece, i) => {
        return (
          <Piece key={`${title}-piece-${i}`}>{`${i + 1}. ${piece}`}</Piece>
        );
      });
    const pieceTemplates =
      allPieces &&
      allPieces.map((piece: any, i) => {
        const {
          title,
          year,
          description,
          movements,
          instrumentation,
          scoreSample,
          duration,
          key,
        } = piece;

        const allMovements = movements.map((mvt: any, i: number) => {
          return (
            <Movement key={`${key}-mvt-${i}`}>{`${i + 1}. ${mvt}`}</Movement>
          );
        });

        const allInstrumentation = instrumentation.map((ins: any, i: any) => {
          return <Instrument key={`${key}-inst-${i}`}>{ins}</Instrument>;
        });

        return (
          <InfoWrapper key={title}>
            <PieceTitle>{title}</PieceTitle>
            {tabName && (
              <>
                <Underline />
                <Year>{year}</Year>
                <Description>{description}</Description>
                <Row>
                  <Movements>
                    <SmallTitle>Movements: </SmallTitle>
                    {allMovements}
                  </Movements>
                  <InfoColumn>
                    <Row>
                      <ScoreSample>
                        <SmallTitle>Score Sample: </SmallTitle>
                        <a href={scoreSample}>
                          <ScoreIcon />
                        </a>
                      </ScoreSample>
                      <Duration>
                        <SmallTitle>Duration: </SmallTitle>
                        {duration}
                      </Duration>
                    </Row>
                    <SmallTitle>Instrumentation: </SmallTitle>
                    <Instrumentation>{allInstrumentation}</Instrumentation>
                  </InfoColumn>
                </Row>
              </>
            )}
          </InfoWrapper>
        );
      });

    return (
      <GenreContainer
        className={`${tabName ? tabName : "cover"}-genre-${index}`}
        key={`${title}-${index}`}
        z={index + 2}
      >
        <PageAndTab
          className={`${tabName ? tabName : "cover"}-right`}
          z={index}
        >
          <RightPage>{pieceTemplates}</RightPage>
          {tabName && (
            //@ts-ignore
            <PageTab
              onClick={() =>
                handlePageTurn(
                  tabName,
                  //@ts-ignore;
                  turnPage,
                  `${"cover"}-genre-${index + 1}`,
                  `${tabName}-genre-${index}`,
                  index + 2
                )
              }
            >
              {tabName}
            </PageTab>
          )}
        </PageAndTab>
        {tabName && (
          <LeftPage className={`${tabName}-left`} z={index + 1}>
            <Genre>{title}</Genre>
            {allPlaylist}
          </LeftPage>
        )}
      </GenreContainer>
    );
  });

  const handlePageTurn = (
    myClass: string,
    turnPage: string,
    containerPage: string,
    myContainer: string,
    z: number
  ) => {
    const tl = gsap.timeline();
    // console.log(myClass, turnPage, containerPage, myContainer, z);
    tl.to(
      `.${turnPage}-right`,
      {
        rotateY: soloTurned.current ? 0 : -180,

        duration: 1,
      },
      0
    )
      .to(
        `.${myClass}-left`,
        {
          rotateY: soloTurned.current ? 180 : 0,

          duration: 1,
          onComplete: () => {
            soloTurned.current = !soloTurned.current;
          },
        },
        0
      )
      .to(
        `.${turnPage}-right`,
        {
          zIndex: soloTurned.current ? 1 : 0,
          duration: 0,
        },
        0.3
      )
      .to(
        `.${myClass}-left`,
        {
          duration: 0,
          zIndex: soloTurned.current ? 0 : 1,
        },
        0.3
      )
      .to(
        `.${containerPage}`,
        {
          duration: 0,
          zIndex: soloTurned.current ? z : 0,
        },
        0.3
      )
      .to(
        `.${myContainer}`,
        {
          duration: 0,
          zIndex: soloTurned.current ? 0 : z,
        },
        0.3
      );

    // :hover {
    //   ${PageAndTab} {
    //     transform: rotateY(-180deg) rotateZ(0);
    //     transition: 1s;
    //   }
    //   ${LeftPage} {
    //     transform: rotateY(0) rotateZ(0.25deg);
    //     transition: 1s;
    //     z-index: 3;
    //   }
    // }
  };

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
    <Wrapper id="Concert Music">
      <TopFade />
      <HeaderWrapper>
        <Header>Concert Music</Header>
        <HeaderLine />
      </HeaderWrapper>
      <MusicBook>{allConcert}</MusicBook>
      <CTA>
        <HeadLine>Want to Collaborate?</HeadLine>
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
  height: 139.6vw;
  padding: 15.4vw 0 0 0;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  background-image: url(${concertMusicBG});

  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 240vw;
    padding: 15vw 0vw 0vw 23vw;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.1vw;
  margin-left: 6.3vw;
  align-items: flex-end;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Header = styled.h2`
  ${Heading1};
  color: ${colors.brightPurple};
  width: fit-content;
  position: relative;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const HeaderLine = styled.div`
  position: relative;
  width: 82.4vw;
  height: 0.3vw;
  margin-right: 3.9vw;
  background: ${colors.brightPurple};

  border-radius: 0.3vw;
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

const CTA = styled.div`
  position: absolute;
  width: 46vw;
  height: 19.8vw;
  left: 6.3vw;
  top: 106.4vw;
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
  top: 102.4vw;
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

const TopFade = styled.div`
  position: absolute;
  top: -8vw;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #040101 0%, rgba(4, 1, 1, 0) 100%);
  height: 25vw;
  z-index: 2;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const GenreContainer = styled.div<{ z: number }>`
  position: absolute;
  left: 0;
  top: 0;
  perspective: 200vw;
  transform-style: flat;
  width: 64.4vw;
  height: 46.6vw;
  z-index: ${(props) => props.z};
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const LeftPage = styled.div<{ z: number }>`
  position: absolute;
  width: 32.2vw;
  height: 46.6vw;
  left: 0;
  top: 0;
  transform: rotateY(180.5deg) rotateZ(0);
  transform-origin: right;

  background: linear-gradient(
    187.02deg,
    #f9f9f8 8.67%,
    #e0e0e0 30.13%,
    #fafafa 50.52%,
    #e3e3e3 87.66%
  );
  border: 0.1vw solid #f0f0f0;
  box-sizing: border-box;
  padding: 2.5vw 0 0 3.1vw;
  z-index: ${(props) => props.z};
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const PageAndTab = styled.div<{ z: number }>`
  width: 32.2vw;
  height: 46.6vw;
  left: 32.2vw;
  top: 0vw;
  position: absolute;
  transform: rotateY(0), rotateZ(0.25deg);

  transform-origin: left;
  z-index: ${(props) => props.z};
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const RightPage = styled.div`
  position: absolute;
  width: 32.2vw;
  height: 46.6vw;
  left: 0;
  top: 0;

  background: linear-gradient(
    91.3deg,
    #dbdbdb 4.24%,
    #f5f5f5 32.97%,
    #ffffff 91.8%
  );
  border: 0.1vw solid #f0f0f0;
  box-sizing: border-box;
  padding: 3.6vw 2.3vw 2.3vw 2.4vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const MusicBook = styled.div`
  position: absolute;
  width: 71.5vw;
  height: 47vw;
  left: 14.3vw;
  top: 40.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const PageTab = styled.button`
  width: 8.9vw;
  height: 3.1vw;
  position: absolute;
  background: linear-gradient(270deg, #17161b 10.32%, #fefefe 88.1%);
  border-radius: 10% 15% 15% 10% / 10% 48% 40% 10%;
  right: -7.9vw;
  top: 3.6vw;
  color: #f8ffce;
  /* box-shadow: 0px 0.5vw 0.3vw rgba(0, 0, 0, 0.25); */
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Piece = styled.p`
  ${Playlist};
  margin-bottom: 2vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Genre = styled.h2`
  ${ConcertTitle};
  margin-bottom: 2.1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const InfoWrapper = styled.div`
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const PieceTitle = styled.h3`
  ${ConcertTitle};
  font-size: 2.4vw;
  text-align: left;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Underline = styled.div`
  width: 25.7vw;
  height: 0.1vw;
  min-height: 2px;
  margin-left: 28px;
  background: #272737;
  opacity: 0.75;
  border-radius: 0.1vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Year = styled.h4`
  ${SubHeader3};
  width: 100%;
  text-align: right;
  margin-top: 0.2vw;
  margin-bottom: 2vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Description = styled.p`
  ${BodySmall};
  margin-left: 1.8vw;
  margin-bottom: 2.2vw;
  height: 10.6vw;
  color: #17161b95;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Movement = styled.div`
  margin-bottom: 0.2vw;
  color: #17161b95;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Movements = styled.div`
  ${BodySmall};

  width: 10.6vw;
  margin-left: 1.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const InfoColumn = styled.div`
  width: 15.1vw;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const ScoreSample = styled.div`
  width: 7.5vw;
  margin-bottom: 2.1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Duration = styled.div`
  width: 5vw;
  ${BodySmall};
  color: #17161b95;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Instrumentation = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Instrument = styled.div`
  ${BodySmall};
  margin-bottom: 0.2vw;
  margin-right: 0.6vw;
  color: ${colors.coolWhite};
  background: ${colors.deepPurple};
  border-radius: 0.5vw;
  padding: 0.1vw 0.4vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const ScoreIcon = styled(ScoreIconSVG)`
  width: 2.4vw;
  height: 2.4vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const SmallTitle = styled.div`
  ${Playlist};
  color: black;
  margin-bottom: 0.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default MediaMusic;
