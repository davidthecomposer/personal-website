import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { PrimaryButtonStyle } from "styles/Buttons";
import { SlideHeading, MetroHeading32 } from "styles/text";
import colors from "styles/Colors";
import { Heading1, Body1, SubHeader, SubHeader2, FormLabel } from "styles/text";
import sampleNews from "assets/images/sampleNews.jpg";
import media from "styles/media";
import gsap from "gsap";
// import { ReactComponent as BG2SVG } from "assets/svg/slide2BG.svg";
// import { ReactComponent as BG3SVG } from "assets/svg/slide3BG.svg";
// import { ReactComponent as BG4SVG } from "assets/svg/slide4BG.svg";
import filmTeaser from "assets/images/davidFilmTeaser.jpg";
import davidSerious from "assets/images/davidSerious.jpg";
import Liz1 from "assets/images/Liz1.jpg";
import mandi1 from "assets/images/mandi1.jpg";
import { setCommentRange } from "typescript";

const News: React.FC<{}> = () => {
  const [more, setMore] = useState(false);

  const newsItems = [
    {
      title: "News Title Longer 1",
      mainImage: sampleNews,
      paragraph:
        "In the works of Spelling, a predominant concept is the distinction between creation and destruction. Thus, many theories concerning the common ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction.",
      paragraph1:
        "In a sense, the subject is interpolated into a predialectic narrative that includes language as a whole. Several discourses concerning the semioticist paradigm of expression may be found.",
      share1: "",
      share2: "",
      share3: "",
      moreTitle: "Meet them",
      moreImage1: "",
      moreText1a: "",
      moreText1b: "",
      moreImage2: "",
      moreText2a: "",
      moreText2b: "",
    },
    {
      title: "News Title 2",
      mainImage: sampleNews,
      paragraph:
        "In the works of Spelling, a predominant concept is the distinction between creation and destruction. Thus, many theories concerning the common ground between society and reality exist. In Models, Inc., Spelling reiterates modernist feminism; in The Heights he examines predialectic narrative. But the subject is contextualised into a semioticist paradigm of expression that includes truth as a reality. If modernist feminism holds, we have to choose between the subtextual paradigm of narrative and conceptualist deconstruction.",
      paragraph1:
        "In a sense, the subject is interpolated into a predialectic narrative that includes language as a whole. Several discourses concerning the semioticist paradigm of expression may be found.",
      share1: "",
      share2: "",
      share3: "",
      moreTitle: "Meet them",
      layout: "full",
      moreImage1: "",
      moreText1a: "",
      moreText1b: "",
      moreImage2: "",
      moreText2a: "",
      moreText2b: "",
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
      share1,
      share2,
      share3,
      moreImage1,
      moreImage2,
      moreText1a,
      moreText1b,
      moreText2a,
      moreText2b,
    } = item;

    return (
      <NewsCard key={i}>
        <Front more={more} className={`front-${i}`}>
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
            <Share>Share</Share>
          </ButtonRow>
        </Front>
        <More more={more} className={`more-${i}`}>
          <NewsTitle>{moreTitle}</NewsTitle>
          <Back onClick={() => handleBack(`.front-${i}`, `.more-${i}`)}>
            Back
          </Back>
          {!layout && (
            <Row>
              <Half>
                <MoreImage />
                <MoreText></MoreText>
                <Links></Links>
              </Half>
              <Half1>
                <MoreImage />
                <MoreText></MoreText>
                <Links></Links>
              </Half1>
            </Row>
          )}
          {layout === "full" && (
            <Row>
              <Full>
                <MoreImage />
                <MoreText></MoreText>
                <Links></Links>
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
  height: 31.9vw;

  margin-bottom: 11.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Front = styled.div<{ more: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: translateX(${(props) => (props.more ? "-101%" : "0")});
  transition: transform 0.5s;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const More = styled.div<{ more: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 100%;
  top: 0;
  transform: translateX(${(props) => (props.more ? "-100%" : "0")});
  transition: transform 0.8s;
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

const Share = styled.button`
  ${PrimaryButtonStyle};
  padding-left: 0.7vw;
  width: 11.9vw;
  border-color: #73d1ef;
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
    ${Share}, ${MoreBtn} {
      text-align: right;
      padding-left: 0;
      padding-right: 0.7vw;
      margin-left: 1.3vw;
      margin-right: 0;
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

const Row = styled.div`
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

const MoreImage = styled.div`
  width: 16.1vw;
  height: 23.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const MoreText = styled.p`
  ${Body1};
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Links = styled.div`
  ${PrimaryButtonStyle};
  padding-left: 0.7vw;
  width: 11.9vw;
  border-color: #73d1ef;
  z-index: 5;
  position: absolute;
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

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
const Half1 = styled.div`
  width: 38.7vw;
  height: 100%;

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

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default News;
