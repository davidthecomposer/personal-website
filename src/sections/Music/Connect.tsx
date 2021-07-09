import React, { useReducer, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Heading1, Body1, SubHeader, FormLabel } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import connectBG from "assets/images/connectBG.jpg";
import connectBGM from "assets/images/connectBGM.jpg";
import ContactForm from "components/ContactForm";
import gsap from "gsap";
import { PrimaryButtonStyle } from "styles/Buttons";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";

const Connect: React.FC<{ mobile: boolean }> = ({ mobile }) => {
  const inputNames = ["Name", "Email", "Project"];
  const header = useRef(null);
  const headerLine = useRef(null);
  const collaborate = useRef(null);
  const [enter, setEnter] = useState(false);

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

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: collaborate.current, start: "top 80%" },
    });

    tl.from(collaborate.current, {
      x: "+=6vw",
      y: "+=3vw",
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: headerLine.current,
      onComplete: () => (mobile ? setEnter(true) : setEnter(false)),
    });

    tl.to(headerLine.current, {
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
    })
      .to(header.current, { y: 0, duration: 0.6 }, 1)
      .to(header.current, { x: 0, duration: 0.6 }, 1.6);
  }, [mobile]);

  const updateFormState = (e: any) => {
    const name = e.target.name;
    let newValue = e.target.value;
    //@ts-ignore
    setFormData({ [name]: newValue });
  };

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
    <Wrapper id="connect">
      <HeaderWrapper>
        <Header ref={header}>Connect</Header>
        <HeaderLine ref={headerLine} />
      </HeaderWrapper>
      <Collaborate ref={collaborate}>
        <SubTitle>Let’s Connect</SubTitle>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc
        </Text>
      </Collaborate>
      {mobile ? (
        <ContactForm
          setEnter={setEnter}
          enter={enter}
          leftVal={mobile ? "100%" : "63.4vw"}
          topVal={mobile ? "60vw" : "102.4vw"}
          close={true}
        />
      ) : (
        <FormModal>
          {inputs}
          <SendMessage>Send Message</SendMessage>
        </FormModal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 90.4vw;
  padding: 10.3vw 6.3vw;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  background-image: url(${connectBG});
  overflow: hidden;
  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 310.6vw;
    padding: 0;
    background-image: url(${connectBGM});
    /* background-position: 50% 50%; */
  }
`;

const Text = styled.p`
  ${Body1};
  position: relative;
  width: 100%;

  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 3.4vw;
  }
  ${media.fullWidth} {
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
    width: 82.1vw;
    margin-left: 8.5vw;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 5vw;
  margin-left: 0;
  overflow: hidden;

  ${media.tablet} {
  }
  ${media.mobile} {
    height: 14.9vw;
  }
`;
const Collaborate = styled.div`
  position: absolute;
  width: 37.4vw;
  height: 31.4vw;
  left: 55.4vw;
  top: 26.5vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 95.2vw;
    height: 76.3vw;
    left: 2.4vw;
    top: 208.4vw;
  }
  ${media.fullWidth} {
  }
`;

const SubTitle = styled.h3`
  ${SubHeader};
  margin-bottom: 1.9vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    font-size: 8.7vw;
  }
  ${media.fullWidth} {
  }
`;

const FormModal = styled.form`
  position: absolute;
  width: 24.7vw;
  height: 19vw;

  left: 12.8vw;
  top: 43.1vw;

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

export default Connect;
