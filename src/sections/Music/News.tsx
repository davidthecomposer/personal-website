import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PrimaryButtonStyle } from "styles/Buttons";
import colors from "styles/Colors";
import { Heading1, Body1, SubHeader2 } from "styles/text";
import sampleNews from "assets/images/sampleNews.jpg";
import media from "styles/media";
import gsap from "gsap";
import twitter from "assets/svg/twitterIcon.svg";
import instagram from "assets/svg/instagramIcon.svg";
import web from "assets/svg/webIcon.svg";
import facebook from "assets/svg/facebookIcon.svg";
import liz2 from "assets/images/liz2.jpg";
import mandiScarf from "assets/images/mandiScarf.jpg";
import mandiDemo from "assets/images/mandiDemo.jpg";
import { ReactComponent as SmallArrowSVG } from "assets/svg/smallArrow.svg";

const News: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const header = useRef(null);
  const headerLine = useRef(null);
  const [openLink, setOpenLink] = useState("");
  const newsItems = useRef([
    {
      title: "News Title Longer 1",
      mainImage: sampleNews,
      paragraph:
        "In the works of Spelling, and destruction. ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction. Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised",
      paragraph1: "",
      share: [
        { icon: twitter, link: "" },
        { icon: facebook, link: "" },
        { icon: instagram, link: "" },
        { icon: web, link: "" },
      ],
      links1: [
        { icon: twitter, link: "" },
        { icon: facebook, link: "" },
        { icon: instagram, link: "" },
        { icon: web, link: "" },
      ],
      links2: [
        { icon: twitter, link: "" },
        { icon: facebook, link: "" },
        { icon: instagram, link: "" },
        { icon: web, link: "" },
      ],
      moreTitle: "Meet them",
      moreImage1: mandiScarf,
      moreText1: [
        "In the works of Spelling, a predominant concept is the distinction between creation and destruction. Thus, many theories concerning the common ground between society and reality exist. In Models, Inc., Spellin reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist of expression that includes truth a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative andconceptualist deconstruction.",
        "But the subject is contextualised into a semioticist of expression that includes truth a reality.",
      ],
      moreText2: [
        "In the works of Spelling, and destruction. ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction.",
        "In a sense, the subject is interpolated into a predialectic narrative that includes language as a whole. Several discourses concerning the semioticist paradigm of expression may be found.",
      ],
      moreImage2: liz2,
      moreText2a: "",
    },
    {
      title: "News Title 2",
      mainImage: sampleNews,
      paragraph:
        "In the works of Spelling, and destruction. ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction. Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised",
      paragraph1: "",
      share: [
        { icon: twitter, link: "" },
        { icon: facebook, link: "" },
        { icon: instagram, link: "" },
        { icon: web, link: "" },
      ],

      links1: [
        { icon: twitter, link: "" },
        { icon: facebook, link: "" },
        { icon: instagram, link: "" },
        { icon: web, link: "" },
      ],
      links2: [
        { icon: twitter, link: "" },
        { icon: facebook, link: "" },
        { icon: instagram, link: "" },
        { icon: web, link: "" },
      ],
      moreTitle: "Meet them",
      layout: "full",
      moreImage1: mandiDemo,
      moreImage2: "",
      moreText1: [
        "In the works of Spelling, a predominant concept is the distinction between creation and destruction. Thus, many theories concerning the common ground between society and reality exist. In Models, Inc., Spellin reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist of expression that includes truth a reality. ",
        "If modernist feminism holds, we have to choose between the subtextual paradigm of narrative andconceptualist deconstruction. But the subject is contextualised into a semioticist of expression that includes truth a reality.",
      ],
      moreText2: [],
    },
  ]);

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
    newsItems.current.forEach((item, i) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: `.newsCard-${i}`, start: "top 60%" },
      });

      tl.from(`.newsCard-${i}`, {
        opacity: 0,
        x: i % 2 === 0 ? "-=2vw" : "+=2vw",
        duration: 0.9,
        ease: "power1.inOut",
      });
    });
  }, [newsItems]);

  const allNewsItems = newsItems.current.map((item, i) => {
    const {
      title,
      mainImage,
      paragraph,
      paragraph1,
      moreTitle,
      layout,
      share,
      links1,
      links2,
      moreImage1,
      moreImage2,
      moreText1,
      moreText2,
    } = item;

    return (
      <NewsCard key={i} className={`newsCard-${i}`}>
        <Front className={`front-${i}`}>
          <TitleContainer>
            <NewsTitle>{title}</NewsTitle>
          </TitleContainer>
          <NewsRow>
            <Text>
              {paragraph && <p>{paragraph}</p>}
              {paragraph1 && <p>{paragraph1}</p>}
            </Text>
            <MainImage src={mainImage} />
          </NewsRow>
          <ButtonRow>
            <MoreBtn onClick={() => handleMore(`.front-${i}`, `.more-${i}`)}>
              <span>More</span>
              <SmallArrow />
            </MoreBtn>
            <Share
              onClick={() =>
                setOpenLink(openLink === `share-${i}` ? "" : `share-${i}`)
              }
              open={openLink === `share-${i}`}
            >
              <span>Share </span>
              {share.map((link, i) => {
                return (
                  <a key={`share-${i}`} href={link.link}>
                    <img src={link.icon} alt="link name" />
                  </a>
                );
              })}
            </Share>
          </ButtonRow>
        </Front>
        <More className={`more-${i}`}>
          <TitleContainer>
            <NewsTitle>{moreTitle}</NewsTitle>
          </TitleContainer>
          <Back
            onClick={() => handleBack(`.front-${i}`, `.more-${i}`)}
            layout={layout === "full"}
          >
            <SmallArrow />
            <span>Back</span>
          </Back>
          {!layout && (
            <RowNoLayout>
              <Half>
                <MoreText>
                  {moreText1.map((text: string, i: any) => {
                    return <p key={`text1-${i}`}>{text}</p>;
                  })}
                </MoreText>
                <MoreImage src={moreImage1} />
                {mobile && (
                  <MoreBtn
                    onClick={() => handleMore(`.front-${i}`, `.more-${i}`)}
                  >
                    <span>More</span>
                    <SmallArrow />
                  </MoreBtn>
                )}
                <Links
                  onClick={() =>
                    setOpenLink(openLink === `link-${i}` ? "" : `link-${i}`)
                  }
                  open={openLink === `link-${i}`}
                >
                  <span>Links</span>
                  {links1.map((link, i) => {
                    return (
                      <a key={`half-link-${i}`} href={link.link}>
                        <img src={link.icon} alt="link name" />
                      </a>
                    );
                  })}
                </Links>
              </Half>
              <Half1>
                {mobile && (
                  <TitleContainer>
                    <NewsTitle>{moreTitle}</NewsTitle>
                  </TitleContainer>
                )}
                <MoreImage src={moreImage2} />
                <MoreText>
                  {moreText2.map((text: string, i: any) => {
                    return <p key={`text2-${i}`}>{text}</p>;
                  })}
                </MoreText>
                {mobile && (
                  <Back onClick={() => handleBack(`.front-${i}`, `.more-${i}`)}>
                    <SmallArrow />
                    <span>Back</span>
                  </Back>
                )}
                <Links
                  onClick={() =>
                    setOpenLink(openLink === `link-${i}` ? "" : `link-${i}`)
                  }
                  open={openLink === `link-${i}`}
                >
                  <span>Links</span>
                  {links2.map((link, i) => {
                    return (
                      <a key={`half1-link-${i}`} href={link.link}>
                        <img src={link.icon} alt="link name" />
                      </a>
                    );
                  })}
                </Links>
              </Half1>
            </RowNoLayout>
          )}
          {layout === "full" && (
            <Row>
              <Full>
                <MoreImage src={moreImage1} />
                <MoreText>
                  {moreText1.map((text: string, i: any) => {
                    return <p key={`text1-full${i}`}>{text}</p>;
                  })}
                </MoreText>
                <Links
                  onClick={() =>
                    setOpenLink(openLink === `link-${i}` ? "" : `link-${i}`)
                  }
                  open={openLink === `link-${i}`}
                >
                  <span>Links</span>
                  {links1.map((link, i) => {
                    return (
                      <a key={`link-full-link-${i}`} href={link.link}>
                        <img src={link.icon} alt="link name" />
                      </a>
                    );
                  })}
                </Links>
              </Full>
            </Row>
          )}
        </More>
      </NewsCard>
    );
  });

  const handleMore = (activeClass: string, inActiveClass: string) => {
    gsap.to(activeClass, { x: "-=101%", duration: 0.5, ease: "Power1.out" });
    gsap.to(inActiveClass, {
      x: "-=100%",
      duration: 0.5,
      ease: "Power1.out",
      delay: 0.3,
    });
  };

  const handleBack = (activeClass: string, inActiveClass: string) => {
    gsap.to(activeClass, {
      x: "+=101%",
      duration: 0.5,
      ease: "Power1.out",
      delay: 0.3,
    });
    gsap.to(inActiveClass, {
      x: "+=100%",
      duration: 0.5,
      ease: "Power1.out",
    });
  };

  return (
    <Wrapper id="news">
      <HeaderWrapper>
        <Header ref={header}>News</Header>
        <HeaderLine ref={headerLine} />
      </HeaderWrapper>
      <NewsItemsWrapper>{allNewsItems}</NewsItemsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 11.3vw 6.3vw;
  position: relative;
  box-sizing: border-box;
  width: 87.4vw;
  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;

    padding: 0 2.4vw 52.2vw 2.4vw;
  }
`;

const Header = styled.h2`
  ${Heading1};
  color: ${colors.brightPurple};
  transform: translate(5.6vw, 100%);
  position: absolute;
  width: fit-content;
  ${media.tablet} {
  }
  ${media.mobile} {
    transform: translate(8.5vw, 110%);
    font-size: 13.3vw;
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
    height: 1vw;
    border-radius: 1vw;
    width: 82vw;
    margin-left: 5vw;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 5vw;
  margin-left: 0;
  margin-bottom: 15.4vw;
  overflow: hidden;

  ${media.tablet} {
  }
  ${media.mobile} {
    height: 14.9vw;
  }
`;

const NewsCard = styled.div`
  width: 81.8vw;
  position: relative;
  overflow: hidden;
  height: 38vw;

  margin-bottom: 11.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 100%;
    height: 146.1vw;
    margin-bottom: 30vw;
  }
  ${media.fullWidth} {
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 31.9vw;
  left: 0;
  top: 0;

  ${media.tablet} {
  }
  ${media.mobile} {
    height: 100%;
  }
  ${media.fullWidth} {
  }
`;

const More = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 100%;
  top: 0;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const NewsTitle = styled.h3`
  position: absolute;
  top: 0;

  ${SubHeader2};
  width: 100%;
  text-align: right;

  :after {
    content: "";
    position: absolute;
    width: 78.8vw;
    height: 0.1vw;
    left: 0;
    top: 3vw;

    background: #e5fcfa;
    border-radius: 0.2vw;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 7.2vw;
    :after {
      content: "";
      position: absolute;
      width: 86.2vw;
      height: 0.3vw;

      top: 6.8vw;

      background: #e5fcfa;
      border-radius: 0.3vw;
    }
  }
  ${media.fullWidth} {
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 3vw;
  position: relative;
  margin-top: 0.3vw;
  margin-bottom: 1.9vw;

  ${media.tablet} {
  }
  ${media.mobile} {
    margin-bottom: 6vw;
  }
  ${media.fullWidth} {
  }
`;

const NewsRow = styled.div`
  display: flex;
  height: 23.5vw;
  justify-content: space-between;

  ${media.tablet} {
  }
  ${media.mobile} {
    flex-direction: column-reverse;
    height: 100%;
    justify-content: flex-end;
  }
  ${media.fullWidth} {
  }
`;

const ButtonRow = styled.div`
  height: 2.6vw;
  position: relative;
  margin-top: 0.6vw;
  display: flex;
  ${media.tablet} {
  }
  ${media.mobile} {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 9.7vw;
    margin: 0;
  }
  ${media.fullWidth} {
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.5vw;
  ${Body1};
  font-size: 1.3vw;
  p:nth-child(1) {
    margin-bottom: 1.3vw;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 95.2vw;
    font-size: 3.9vw;
    height: 53vw;
    overflow: hidden;
    padding-top: 3vw;
    padding-bottom: 10vw;
  }
  ${media.fullWidth} {
  }
`;

const MainImage = styled.img`
  width: 38.9vw;
  height: 23.5vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 95.2vw;
    height: auto;
  }
`;

const SmallArrow = styled(SmallArrowSVG)`
  ${media.tablet} {
  }
  ${media.mobile} {
    position: relative;
    width: 6.8vw;
    height: 2.2vw;
    margin-left: 0.7vw;
  }
  ${media.fullWidth} {
  }
`;

const Back = styled.button<{ layout?: boolean }>`
  ${PrimaryButtonStyle};
  padding: 0 0.7vw;
  width: 11.9vw;
  border-color: #73d1ef;
  z-index: 5;
  position: absolute;
  top: 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    width: fit-content;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    top: 9.3vw;
    left: auto;
    right: 3vw;
    width: 29vw;
    text-align: right;
  }
  ${media.fullWidth} {
  }
`;

const MoreBtn = styled.button`
  ${PrimaryButtonStyle};
  padding-left: 0.7vw;
  width: 11.9vw;
  margin-right: 1.3vw;
  border-color: #ffcef8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${SmallArrow} {
    transform: rotate(180deg);
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    padding: 0 1vw;
    left: 0;
    margin-right: 0;
    position: absolute;
    ${SmallArrow} {
      margin-right: 1vw;
    }
    span {
      margin-left: 1vw;
    }
  }
  ${media.fullWidth} {
  }
`;

const RowNoLayout = styled.div`
  position: relative;
  display: flex;
  height: 28.3vw;
  width: 100%;
  justify-content: space-between;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 200%;
    height: 100%;
  }
  ${media.fullWidth} {
  }
`;

const Row = styled.div`
  position: relative;
  display: flex;
  height: 28.3vw;
  width: 100%;
  justify-content: space-between;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const MoreImage = styled.img`
  width: 16.1vw;
  height: 23.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 46.1vw;
    height: 56.3vw;
  }
  ${media.fullWidth} {
  }
`;

const MoreText = styled.div`
  ${Body1};

  p {
    margin-bottom: 0.6vw;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    p {
      font-size: 3.9vw;
    }
  }
  ${media.fullWidth} {
  }
`;

const Links = styled.div<{ open: boolean }>`
  ${PrimaryButtonStyle};
  height: 2.5vw;
  padding: 0.2vw 0 0.3vw 0.7vw;
  width: 11.9vw;
  border-color: #ffcef8;
  z-index: 5;
  position: relative;
  bottom: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  span {
    margin-right: 4vw;
  }
  transition: 0.5s;
  a {
    position: relative;
    margin-right: 0.6vw;
    opacity: 0;
    z-index: -1;
    ${media.hover} {
      :hover {
        transform: rotateZ(360deg);
        transition: 0.3s;
      }
    }
  }
  ${media.hover} {
    :hover {
      width: 20vw;
      opacity: 0.5s;
      a {
        opacity: 1;
        z-index: 2;
        transition: opacity 0.4s z-index 0.4s 0.4s;
      }
    }
  }
  ${media.tablet} {
  }
  ${media.mobile} {
    width: ${(props) => (props.open ? "50vw" : "30vw")};
    a {
      opacity: ${(props) => (props.open ? 1 : 0)};
      z-index: ${(props) => (props.open ? 2 : -1)};
    }
  }
  ${media.fullWidth} {
  }
`;

const Share = styled(Links)<{ open: boolean }>`
  border-color: #73d1ef;
  ${media.mobile} {
    span {
      margin-right: 1.2vw;
    }
  }
`;

const NewsItemsWrapper = styled.div`
  width: 100%;
  position: relative;

  ${NewsCard}:nth-child(odd) {
    margin-left: 5.7vw;
    ${media.mobile} {
      margin-left: 0;

      ${Share} {
        margin-left: 33vw;
      }
    }

    ${More} {
      ${NewsTitle} {
        text-align: left;
        ::after {
          left: 3vw;
        }
      }
    }
  }

  ${NewsCard}:nth-child(even) {
    ${media.mobile} {
      margin-left: 0;
      ${Share} {
        margin-left: auto;
        margin-right: 33vw;
      }
      ${MoreBtn} {
        right: 0;
        left: auto;
      }
    }
    ${NewsRow} {
      flex-direction: row-reverse;
      ${media.mobile} {
        flex-direction: column-reverse;
      }
    }
    ${NewsTitle} {
      text-align: left;
      ::after {
        left: 3vw;
      }
    }
    ${ButtonRow} {
      flex-direction: row-reverse;
      ${media.mobile} {
        right: 0;
        left: auto;
      }
    }
    ${MoreBtn} {
      text-align: right;
      padding-left: 0;
      padding-right: 0.7vw;
      margin-left: 1.3vw;
      margin-right: 0;
    }
    ${Links} {
      border-color: #73d1ef;
      padding-right: 0.7vw;
      text-align: right;
      z-index: 5;
      flex-direction: row-reverse;
      span {
        margin-right: 0;
        margin-left: 4vw;
      }

      a {
        margin-left: 0.6vw;
        margin-right: 0;
      }
    }
    ${More} {
      ${NewsTitle} {
        text-align: right;
        ::after {
          left: auto;
          right: 3vw;
        }
      }
    }
  }

  ${media.tablet} {
  }
  ${media.mobile} {
    margin-top: 16.9vw;
  }
  ${media.fullWidth} {
  }
`;

const Half = styled.div`
  width: 38.7vw;
  height: 100%;
  position: relative;
  ${MoreText} {
    position: absolute;
    left: 17.6vw;
    top: -0.5vw;
    width: 21.1vw;
  }
  ${Links} {
    position: absolute;
    bottom: 0;
    border-color: ${colors.formSkinPurprle};
  }
  ${media.mobile} {
    width: 95.2vw;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    ${MoreImage} {
      width: 33.3vw;
      height: 47.3vw;
    }
    ${MoreText} {
      p {
        font-size: 3.9vw;
        line-height: 150%;
      }
      position: relative;
      width: 93vw;
      top: auto;
      left: auto;
      height: 74.6vw;
      padding-bottom: 10vw;
      padding-top: 2.4vw;
    }
    ${Links} {
      top: 38vw;
      left: 35vw;
      bottom: auto;
    }
    ${MoreBtn} {
      left: auto;
      right: 3vw;
      top: 12vw;
    }
  }

  ${media.fullWidth} {
  }
`;
const Half1 = styled.div`
  position: relative;
  width: 38.7vw;
  height: 100%;

  ${MoreText} {
    margin-top: -0.5vw;
    height: 26.2vw;
  }
  ${Links} {
    position: absolute;
    right: 0;
    border-color: #73d1ef;
    padding-right: 0.7vw;
    text-align: right;
    z-index: 5;
    flex-direction: row-reverse;
    span {
      margin-right: 0;
      margin-left: 4vw;
    }

    a {
      margin-left: 0.6vw;
      margin-right: 0;
    }
  }
  ${MoreImage} {
    float: left;
    margin-bottom: 0;
    margin-top: 4.4vw;
    padding-right: 1.9vw;
    shape-outside: padding-box;
    z-index: -1;
  }

  ${media.mobile} {
    width: 95.2vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${TitleContainer} {
      position: absolute;
      top: -10vw;
      left: 0;
    }
    ${MoreText} {
      p {
        font-size: 3.9vw;
        line-height: 150%;
      }
      position: relative;
      width: 93vw;
      top: auto;
      left: auto;
      height: 74.6vw;
      padding-bottom: 10vw;
      padding-top: 2.4vw;
    }

    ${MoreImage} {
      float: none;
      position: relative;
      margin-top: 0;

      width: 33.3vw;
      height: 47.3vw;
    }
    ${Links} {
      top: 38vw;
      left: 35vw;
      bottom: auto;
    }
    ${Back} {
      position: absolute;
      left: auto;
      right: 3vw;
      top: 0;
    }
  }

  ${media.fullWidth} {
  }
`;

const Full = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  ${MoreImage} {
    width: 39.1vw;
    height: 24.9vw;
    margin-right: 2.5vw;
  }

  ${Links} {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  ${MoreText} {
    width: 25.3vw;
    font-size: 1.1vw;
    p {
      font-size: 1.1vw;
    }
  }

  ${media.tablet} {
  }
  ${media.mobile} {
    flex-direction: column;

    height: 144.9vw;

    ${MoreImage} {
      width: 59.9vw;
      height: 38.2vw;
      margin-right: 0;
      margin-bottom: 12.1vw;
    }
    ${MoreText} {
      font-size: 3.9vw;
      position: relative;
      width: 87vw;
      height: 67.4vw;

      padding-bottom: 10vw;
      padding-top: 2.4vw;
      top: auto;
      left: auto;
      p {
        font-size: 3.9vw;
        line-height: 150%;
      }
    }
    ${Links} {
      position: absolute;
      top: 41vw;
      left: 0;
    }
  }
  ${media.fullWidth} {
  }
`;

export default News;
