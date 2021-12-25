import React from "react";
import gsap from "gsap";
import media from "styles/media";
import styled from "styled-components";
import colors from "styles/Colors";
import { Heading1 } from "styles/text";
import reflecto from "assets/images/reflecto.png";
import spa from "assets/images/christmasGift.jpg";
const MandiChristmas: React.FC = () => {
  const handleClick2 = () => {
    const tl = gsap.timeline();
    tl.to(".fake_gift", { opacity: 0, duration: 0.5 }, 0)
      .to(".fake_gift", { scale: 0, duration: 0, overflow: "hidden" }, 0.5)
      .to(".button1", { scale: 0, duration: 0.4, transformOrigin: "50% 50%" }, 0)
      .to(".gift", { opacity: 1, transformOrigin: "50% 50%", duration: 6, rotate: 5760 }, 0)
      .to(".title", { opacity: 1, duration: 0.5 }, 2)
      .to(".merry-christmas", { opacity: 1, duration: 0.8 }, 6)
      .to(".title", { opacity: 0, duration: 0.5 }, 6);
  };

  const handleClick1 = () => {
    const tl = gsap.timeline();
    tl.to(".fake_title", { scale: 1.5, duration: 2, ease: "back.inOut" }, 1)
      .to(".button", { scale: 0, duration: 0.4, transformOrigin: "50% 50%" }, 0)
      .to(".reflecto", { scale: 1, transformOrigin: "50% 50%", duration: 2, rotateX: 2880 }, 0)
      .to(".reflecto", { opacity: 0.3, duration: 0.5 }, 2)
      .to(".button1", { opacity: 1, duration: 1 }, 3);
  };

  return (
    <Wrapper>
      <RevealButton className="button" onClick={handleClick1}>
        Click Here For Gift
      </RevealButton>
      <FakeGift className="fake_gift">
        <FakeTitle className="fake_title">1,000,000 Reflecto!</FakeTitle>
        <Reflecto className="reflecto" src={reflecto} alt="reflecto coin" />
        <RevealButton1 className="button1" onClick={handleClick2}>
          JK Click here for actual gift
        </RevealButton1>
      </FakeGift>
      <RealGift className="real_gift">
        <Gift className="gift" src={spa} alt="inflatable hottub" />

        <Title className="title">Too big to fit in my car</Title>
        <Title className="merry-christmas">Merry Christmas!</Title>
      </RealGift>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #000000;
  color: ${colors.coolPurple};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RevealButton = styled.button`
  width: 6.25vw;
  height: 6.25vw;
  border: 1px solid ${colors.dullTeal};
  color: ${colors.coolWhite};
  transition: 0.5s;
  position: relative;
  z-index: 5;

  ${media.hover} {
    :hover {
      color: ${colors.storyBlue};
      transform: scale(2);
    }
  }
`;

const RevealButton1 = styled.button`
  width: 6.25vw;
  height: 6.25vw;
  border: 1px solid ${colors.dullTeal};
  color: ${colors.coolWhite};
  transition: 0.5s;
  z-index: 5;
  opacity: 0;
  ${media.hover} {
    :hover {
      color: ${colors.storyBlue};
      transform: scale(2);
    }
  }
`;

const FakeGift = styled.div`
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  z-index: 1;
`;

const FakeTitle = styled.h1`
  ${Heading1};
  color: ${colors.coolWhite};
  transform: scale(0);
  position: relative;
  z-index: 1;
  margin-bottom: 6.25vw;
  text-align: center;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Title = styled.h1`
  ${Heading1};
  color: ${colors.coolWhite};
  opacity: 0;
  position: absolute;
  z-index: 1;
  bottom: 3.25vw;
  width: 100%;
  text-align: center;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Reflecto = styled.img`
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  transform: scale(0);
  z-index: 0;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Gift = styled.img`
  position: absolute;
  display: flex;
  top: 1.25vw;
  align-self: center;
  z-index: 0;
  width: 50vw;
  height: auto;
  opacity: 0;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const RealGift = styled.div`
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  z-index: 0;
  width: 100%;
  height: 100vh;
`;

export default MandiChristmas;
