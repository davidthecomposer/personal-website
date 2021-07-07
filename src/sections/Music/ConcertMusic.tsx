import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Heading1,
  Body1,
  SubHeader,
  SubHeader3,
  Playlist,
  ConcertTitle,
  BodySmall,
} from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import ContactForm from "components/ContactForm";
import concertMusicBG from "assets/images/concertMusic.jpg";
import { PrimaryButtonStyle } from "styles/Buttons";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";
import { ReactComponent as ScoreIconSVG } from "assets/svg/scoreIcon.svg";
import gsap from "gsap";
import AudioPlayerMinimal from "components/AudioPlayerMinimal";
import { concertPieces } from "data/ConcertPieces";

const MediaMusic: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const [enter, setEnter] = useState(false);
  const header = useRef(null);
  const headerLine = useRef(null);
  const musicBook = useRef(null);
  const cta = useRef(null);
  const page = useRef(0);
  const [activePage, setActivePage] = useState(0);
  const [activePiece, setActivePiece] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ scrollTrigger: headerLine.current });

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
      scrollTrigger: { trigger: musicBook.current, start: "top 90%" },
    });

    tl.from(musicBook.current, {
      x: "+=3vw",
      y: "+=3vw",
      opacity: 0,
      duration: 1.5,
      ease: "power1.inOut",
      onComplete: () => {
        handlePageTurn(0, concertPieces.length);
      },
    });
  }, []);

  const allButtons = concertPieces.map((piece, index) => {
    const { tabName } = piece;
    if (index < concertPieces.length - 1) {
      return (
        <PageTab
          key={`${tabName}-mobile-btn`}
          activeTab={activePage === index}
          className={`tab-${index}-front`}
          onClick={() => {
            handlePageTurn(index, concertPieces.length - index);
          }}
          yOffset={index}
        >
          {tabName}
        </PageTab>
      );
    }
  });

  const allConcert = concertPieces.map((genre, index) => {
    const { nexTitle, playList, allPieces, tabName } = genre;

    const allPlaylist =
      playList &&
      playList.map((piece, i) => {
        return (
          <Piece
            onClick={() => setActivePiece(i)}
            key={`${nexTitle}-piece-${i}`}
          >{`${i + 1}. ${piece}`}</Piece>
        );
      });
    const pieceTemplates =
      allPieces &&
      allPieces.map((piece: any, i: number) => {
        const {
          title,
          year,
          description,
          movements,
          instrumentation,
          scoreSample,
          duration,
          key,
          cover,
        } = piece;

        const allMovements = movements.map((mvt: any, i: number) => {
          return (
            <AudioPlayerMinimal
              key={`${key}-mvt-${i}`}
              track={mvt.audio}
              title={mvt.name}
              initialTime={mvt.initialTime}
              id={i}
            />
          );
        });

        const allInstrumentation = instrumentation.map((ins: any, i: any) => {
          return <Instrument key={`${key}-inst-${i}`}>{ins}</Instrument>;
        });

        return (
          <InfoWrapper key={title} visible={activePiece === i}>
            <PieceTitle>{title}</PieceTitle>
            {!cover && (
              <>
                <Underline />
                <Year>{year}</Year>
                <Description>{description}</Description>
                <BigRow>
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
                    </Row>
                    <SmallTitle>Instrumentation: </SmallTitle>
                    <Instrumentation>{allInstrumentation}</Instrumentation>
                  </InfoColumn>
                  <Duration>{duration}</Duration>
                </BigRow>
              </>
            )}
          </InfoWrapper>
        );
      });

    return (
      <FrontAndBackPage
        className={`page-${index}`}
        key={`${nexTitle}-${index}`}
        z={concertPieces.length - index}
      >
        <PiecesInfo className={`pieces__info-${index}`}>
          <PiecesInfoWrap className={`pieces__info-wrap-${index}`}>
            {pieceTemplates}
          </PiecesInfoWrap>
        </PiecesInfo>

        <TableOfContents className={`toc-${index}`}>
          <TOCWrap className={`toc-wrap-${index}`}>
            <Genre>{nexTitle}</Genre>
            {allPlaylist}
          </TOCWrap>
          {tabName && !mobile && (
            <>
              <PageTab
                activeTab={activePage === index}
                className={`tab-${index}-front`}
                onClick={() => {
                  handlePageTurn(index, concertPieces.length - index);
                }}
                yOffset={index}
              >
                {tabName}
              </PageTab>
              <PageTabBack
                activeTab={activePage === index}
                className={`tab-${index}-back`}
                onClick={() => {
                  handlePageTurn(index, concertPieces.length - index);
                }}
                yOffset={index}
              >
                <span>{tabName}</span>
              </PageTabBack>
            </>
          )}
        </TableOfContents>
      </FrontAndBackPage>
    );
  });

  const handlePageTurn = (num: number, z: number) => {
    const turnBack = page.current > num || (num === 1 && page.current);
    setActivePage(num);

    let pages = [];
    for (
      let i = turnBack ? num + 1 : page.current;
      i <= (turnBack ? page.current : num);
      i++
    ) {
      pages.push({
        page: `.page-${i}`,
        toc: `.toc-${i}`,
        pi: `.pieces__info-${i}`,
        front: `.tab-${i}-front`,
        tocWrap: `.toc-wrap-${i}`,
        piWrap: `.pieces__info-wrap-${i}`,
        z: turnBack ? concertPieces.length - i : i,
      });
    }

    if (turnBack) {
      pages = pages.reverse();
    }

    const turnPage = (
      pageClass: string,
      toc: string,
      pi: string,
      delay: number,
      z: number,
      front: string,
      tocWrap: string,
      piWrap: string
    ) => {
      const tl = gsap.timeline({
        onComplete: () => {
          page.current = num;
        },
      });
      tl.to(
        pageClass,
        {
          rotateY: turnBack ? 0 : 180,
          duration: 0.8,

          ease: "power1.inOut",
        },
        0 + delay
      )
        .to(pageClass, { zIndex: z, duration: 0 }, 0.5 + delay)
        .to(
          front,
          { opacity: turnBack ? 1 : mobile ? 1 : 0, duration: 0.2 },
          0.2 + delay
        )
        .to(toc, { zIndex: turnBack ? 0 : 1, duration: 0 }, 0.3 + delay)

        .to(pi, { zIndex: turnBack ? 1 : 0, duration: 0 }, 0.3 + delay)
        .to(
          tocWrap,
          { opacity: turnBack ? 0 : 1, duration: turnBack ? 0.6 : 0.6 },
          0.2 + delay
        )

        .to(
          piWrap,
          { opacity: turnBack ? 1 : 0, duration: turnBack ? 0.6 : 0.6 },
          0.2 + delay
        );

      return tl;
    };

    pages.forEach((animation, i) => {
      turnPage(
        animation.page,
        animation.toc,
        animation.pi,
        0.3 * i,
        animation.z,
        animation.front,
        animation.tocWrap,
        animation.piWrap
      );
    });
  };

  return (
    <Wrapper id="Concert Music">
      <TopFade />
      <HeaderWrapper>
        <Header ref={header}>Concert Music</Header>
        <HeaderLine ref={headerLine} />
      </HeaderWrapper>
      {mobile && <MobileControls>{allButtons}</MobileControls>}
      <MobileWrapper>
        <MusicBook ref={musicBook}>{allConcert}</MusicBook>
      </MobileWrapper>
      <MobileWrapper1>
        <CTA ref={cta} enter={enter}>
          <HeadLine>Want to Collaborate?</HeadLine>
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
        <ContactForm
          setEnter={setEnter}
          enter={enter}
          leftVal={mobile ? "100%" : "63.4vw"}
          topVal={mobile ? "0" : "102.4vw"}
        />
      </MobileWrapper1>
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
    height: 371vw;
    padding: 0;
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
    height: 29.7vw;
  }
  ${media.fullWidth} {
  }
`;
const MobileControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 89.4vw;
  margin-left: 6.8vw;
  justify-content: center;
  margin-top: 24.2vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const MobileWrapper = styled.div`
  ${media.tablet} {
  }
  ${media.mobile} {
    position: relative;
    overflow: scroll;
    height: 130.1vw;
    width: 100%;
    margin-top: 7vw;
    padding-top: 1vw;
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
    transform: translate(8.5vw, 110%);
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

const Text = styled.div`
  ${Body1};
  width: 19.3vw;

  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 3.9vw;
    width: 81.6vw;
  }
  ${media.fullWidth} {
  }
`;

const CTA = styled.div<{ enter: boolean }>`
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
    top: 0;
    width: 82.1vw;
    left: ${(props) => (props.enter ? "-100vw" : "4.1vw")};
    transition: 0.5s;
    height: 100vw;
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
    font-size: 8.7vw;
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
    width: 9.7vw;
    height: 3.9vw;
    margin-left: 5vw;
  }
  ${media.fullWidth} {
  }
`;

const MobileWrapper1 = styled.div`
  ${media.tablet} {
  }
  ${media.mobile} {
    position: relative;
    display: flex;
    width: 100vw;
    overflow: hidden;
    height: 100vw;
    margin-top: 16.4vw;
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
    position: relative;
    width: 46.1vw;
    height: 9.7vw;
    border-radius: 2.4vw;
    margin-top: 15.6vw;
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

const FrontAndBackPage = styled.div<{ z: number }>`
  position: absolute;
  left: 32.2vw;
  top: 0;
  perspective: 200vw;
  transform: rotateY(0);
  transform-origin: left;
  transform-style: flat;
  width: 32.2vw;
  height: 46.6vw;
  z-index: ${(props) => props.z};
  border: none;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 87vw;
    height: 127.1vw;
    left: auto;
  }
  ${media.fullWidth} {
  }
`;

const TableOfContents = styled.div`
  position: absolute;
  width: 32.2vw;
  height: 46.6vw;
  left: 0;
  top: 0;

  z-index: 0;
  transform: rotateY(0);
  transform-origin: left;

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

  ${media.tablet} {
  }
  ${media.mobile} {
    width: 87vw;
    height: 127.1vw;
    padding: 2.4vw 0 0 9.2vw;
  }
  ${media.fullWidth} {
  }
`;

const PiecesInfo = styled.div`
  position: absolute;
  width: 32.2vw;
  height: 46.6vw;
  transform: rotateY(0);
  transform-origin: left;
  left: 0;
  top: 0;
  z-index: 1;
  background: linear-gradient(
    91.3deg,
    #dbdbdb 4.24%,
    #f5f5f5 32.97%,
    #ffffff 91.8%
  );
  border: 0 solid #f0f0f0;
  box-sizing: border-box;
  padding: 3.6vw 2.3vw 2.3vw 2.4vw;

  ${media.tablet} {
  }
  ${media.mobile} {
    width: 100%;
    height: 100%;
    padding-left: 4.8vw;
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
    position: relative;
    top: 0;
    left: 90.3vw;
    width: 87vw;
    height: 127.1vw;
    margin-right: 7vw;
  }
  ${media.fullWidth} {
  }
`;

const PageTab = styled.button<{ yOffset: number; activeTab: boolean }>`
  width: 8vw;
  height: 3.1vw;
  position: absolute;
  background: linear-gradient(
    ${(props) =>
      props.activeTab
        ? `270deg, #17161b 10.32%, #fefefe 88.1%, #fefefe00 100%`
        : `270deg, #F4F4F4 10.32%, #F4F4F4 88.1%, #fefefe00 100%`}
  );
  border-radius: 10% 15% 15% 10% / 10% 48% 40% 10%;
  right: -7.1vw;
  top: ${(props) => props.yOffset * 2.6 + 3.6}vw;
  color: ${(props) => (props.activeTab ? "#f8ffce" : "#2e2e2e")};
  opacity: 1;
  box-shadow: 0px 0.5vw 0.3vw rgba(0, 0, 0, 0.25);
  z-index: 1;
  ${media.tablet} {
  }
  ${media.mobile} {
    position: relative;
    background: transparent;
    appearance: none;
    -webkit-appearance: none;
    ${Body1};
    border: 0.1vw solid white;
    border-width: min(2px);
    box-sizing: border-box;
    border-radius: 0.6vw;
    font-size: 4.3vw;
    height: 9.7vw;
    border-radius: 2.4vw;
    width: 24.2vw;
    box-shadow: none;
    top: auto;
    right: auto;
    color: ${(props) => (props.activeTab ? "#f8ffce" : "#d6fff6")};
    border-color: ${colors.activeTeal};
    margin-right: 5.6vw;
    margin-top: 4.8vw;
  }
  ${media.fullWidth} {
  }
`;

const PageTabBack = styled.button<{ yOffset: number; activeTab: boolean }>`
  width: 8vw;
  height: 3.1vw;
  position: absolute;
  background: linear-gradient(
    ${(props) =>
      props.activeTab
        ? `270deg, #17161b 10.32%, #fefefe 88.1%, #fefefe00 100%`
        : `270deg, #F4F4F4 10.32%, #F4F4F4 88.1%, #fefefe00 100%`}
  );
  border-radius: 10% 15% 15% 10% / 10% 48% 40% 10%;
  right: -7.1vw;
  top: ${(props) => props.yOffset * 2.6 + 3.6}vw;
  color: ${(props) => (props.activeTab ? "#f8ffce" : "#2e2e2e")};
  opacity: 1;
  z-index: 0;

  span {
    position: absolute;
    top: 0.9vw;
    transform: rotateY(180deg);
    transform-origin: "50% 50%";
    right: 1.9vw;
  }
  ::after {
    content: "";

    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0.6vw -0.5vw 0.8vw -0.4vw rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0.6vw -0.5vw 0.8vw -0.4vw rgba(0, 0, 0, 0.25);
    border-radius: 0 15% 15% 10% / 10% 48% 40% 10%;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
    display: none;
  }
  ${media.fullWidth} {
  }
`;

const TOCWrap = styled.div`
  transform: rotateY(180deg);
  transform-origin: "50% 50%";
  position: absolute;
  right: 4.9vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const PiecesInfoWrap = styled.div`
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
  cursor: pointer;
  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 3.4vw;
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

const InfoWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: ${(props) => (props.visible ? 10 : 0)};
  width: 27.5vw;
  height: 40.7vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: calc(100% - 8.8vw);
    height: 100%;
    padding: 0 4.8vw 0 0;
    top: 0;
    overflow: scroll;
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
    width: 74.2vw;
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
    width: 69.6vw;
    height: 0.4vw;
    margin-left: 4.6vw;
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
    margin-top: 2vw;
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
    height: auto;
    font-size: 3.4vw;
    margin-left: 4vw;
    margin-bottom: 4.8vw;
  }
  ${media.fullWidth} {
  }
`;

const BigRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.8vw;
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

const Movements = styled.div`
  ${BodySmall};

  width: 13vw;
  margin-left: 1.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    position: relative;
    width: 40vw;
    font-size: 3.4vw;
    margin-left: 4vw;
  }
  ${media.fullWidth} {
  }
`;

const InfoColumn = styled.div`
  width: 14vw;

  ${media.tablet} {
  }
  ${media.mobile} {
    width: 38vw;
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
    width: 38vw;
    display: flex;
  }
  ${media.fullWidth} {
  }
`;

const Duration = styled.div`
  ${BodySmall};
  font-size: 2.1vw;
  color: #17161b95;
  position: absolute;
  right: 0;
  bottom: 0;

  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 4.3vw;

    width: 100%;
    text-align: right;
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
    font-size: 2.9vw;
    border-radius: 2.4vw;
    padding: 0.8vw 1vw;
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
    width: 6.8vw;
    height: 6.8vw;
    margin-left: 3.6vw;
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
    font-size: 3.9vw;
  }
  ${media.fullWidth} {
  }
`;

export default MediaMusic;
