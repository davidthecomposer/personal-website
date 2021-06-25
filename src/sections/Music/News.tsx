import React from "react";
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

const News: React.FC<{}> = () => {
  const newsItems = [
    {
      title: "News Title Longer 1",
      mainImage: sampleNews,
      paragraph:
        "In the works of Spelling, a predominant concept is the distinction between creation and destruction. Thus, many theories concerning the common ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction.",
      paragraph1:
        "In a sense, the subject is interpolated into a predialectic narrative that includes language as a whole. Several discourses concerning the semioticist paradigm of expression may be found.",
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
        "In the works of Spelling, and destruction. ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction.",
        "In a sense, the subject is interpolated into a predialectic narrative that includes language as a whole. Several discourses concerning the semioticist paradigm of expression may be found.",
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
        "In the works of Spelling, a predominant concept is the distinction between creation and destruction. Thus, many theories concerning the common ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction.",
      paragraph1:
        "In a sense, the subject is interpolated into a predialectic narrative that includes language as a whole. Several discourses concerning the semioticist paradigm of expression may be found.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Ac ut consequat semper viverra. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tortor condimentum lacinia quis vel eros donec. Pulvinar pellentesque habitant morbi tristique. Gravida rutrum quisque non tellus orci ac. Enim nulla aliquet porttitor lacus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Et tortor at risus viverra adipiscing at. Etiam sit amet nisl purus in. Nibh tortor id aliquet lectus. Neque viverra justo nec ultrices dui sapien eget mi proin. Integer feugiat scelerisque varius morbi. Magna ac placerat vestibulum lectus mauris ultrices eros. Id ornare arcu odio ut sem.",
        "Ac ut consequat semper viverra. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Tortor condimentum lacinia quis vel eros donec. Pulvinar pellentesque habitant morbi tristique. Gravida rutrum quisque non tellus orci ac. Enim nulla aliquet porttitor lacus.",
      ],
      moreText2: [],
    },
  ];

  const allNewsItems = newsItems.map((item, i) => {
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
      <NewsCard key={i}>
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
              More
            </MoreBtn>
            <Share>
              {" "}
              <span>Share </span>{" "}
              {share.map((link, i) => {
                return (
                  <a key={`share-${i}`} href={link.link}>
                    <img src={link.icon} alt="link name" />
                  </a>
                );
              })}{" "}
            </Share>
          </ButtonRow>
        </Front>
        <More className={`more-${i}`}>
          <TitleContainer>
            <NewsTitle>{moreTitle}</NewsTitle>
          </TitleContainer>
          <Back onClick={() => handleBack(`.front-${i}`, `.more-${i}`)}>
            Back
          </Back>
          {!layout && (
            <Row>
              <Half>
                <MoreText>
                  {moreText1.map((text: string, i: any) => {
                    return <p key={`text1-${i}`}>{text}</p>;
                  })}
                </MoreText>
                <MoreImage src={moreImage1} />

                <Links>
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
                <MoreImage src={moreImage2} />
                <MoreText>
                  {moreText2.map((text: string, i: any) => {
                    return <p key={`text2-${i}`}>{text}</p>;
                  })}
                </MoreText>
                <Links>
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
            </Row>
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
                <Links>
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
      <Header>News</Header>
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
    height: 240vw;
    padding: 15vw 0vw 0vw 23vw;
  }
  ${media.fullWidth} {
    padding: 162px 0 0 0;
  }
`;

const Header = styled.h2`
  ${Heading1};
  color: ${colors.brightPurple};
  margin-left: 0;
  margin-bottom: 11.3vw;

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

const NewsCard = styled.div`
  width: 81.8vw;
  position: relative;
  overflow: hidden;
  height: 38vw;

  margin-bottom: 11.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
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
  }
  ${media.fullWidth} {
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.5vw;
  ${Body1};
  p:nth-child(1) {
    margin-bottom: 1.3vw;
  }
  ${media.tablet} {
  }
  ${media.mobile} {
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
  }
  ${media.fullWidth} {
  }
`;

const Back = styled.button`
  ${PrimaryButtonStyle};
  padding-left: 0.7vw;
  width: 11.9vw;
  border-color: #73d1ef;
  z-index: 5;
  position: absolute;
  top: 0.5vw;
  ${media.tablet} {
  }
  ${media.mobile} {
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
  ${media.tablet} {
  }
  ${media.mobile} {
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
  }
  ${media.fullWidth} {
  }
`;

const Links = styled.div`
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
    :hover {
      transform: rotateZ(360deg);
      transition: 0.3s;
    }
  }
  :hover {
    width: 18vw;
    opacity: 0.5s;
    a {
      opacity: 1;
      z-index: 2;
      transition: opacity 0.4s z-index 0.4s 0.4s;
    }
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Share = styled(Links)`
  border-color: #73d1ef;
`;

const NewsItemsWrapper = styled.div`
  width: 100%;
  position: relative;

  ${NewsCard}:nth-child(odd) {
    margin-left: 5.7vw;
    ${More} {
      ${NewsTitle} {
        text-align: left;
        ::after {
          left: 3vw;
        }
      }
      ${Back} {
        left: auto;
        right: 0;
      }
    }
  }

  ${NewsCard}:nth-child(even) {
    ${NewsRow} {
      flex-direction: row-reverse;
    }
    ${NewsTitle} {
      text-align: left;
      ::after {
        left: 3vw;
      }
    }
    ${ButtonRow} {
      flex-direction: row-reverse;
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

  ${NewsCard}:nth-child(odd) {
    margin-left: 5.7vw;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Half = styled.div`
  width: 38.7vw;
  height: 100%;
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
  ${media.tablet} {
  }
  ${media.mobile} {
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
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Full = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${MoreImage} {
    width: 29.3vw;
    height: 23.8vw;
    margin-right: 2.5vw;
  }

  ${Links} {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  ${MoreText} {
    width: 46.9vw;
  }

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default News;