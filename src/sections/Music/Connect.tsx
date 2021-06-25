import React, { useReducer } from "react";
import styled from "styled-components";
import { Heading1, Body1, SubHeader, FormLabel } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
import connectBG from "assets/images/connectBG.jpg";

import { PrimaryButtonStyle } from "styles/Buttons";
import { ReactComponent as ButtonArrowSVG } from "assets/svg/buttonArrow.svg";

const Connect: React.FC<{}> = () => {
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
    <Wrapper id="connect">
      <Header>News</Header>
      <Collaborate>
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
      <FormModal>
        {inputs}
        <SendMessage>Send Message</SendMessage>
      </FormModal>
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

  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 240vw;
    padding: 12.3vw 0vw 0vw 23vw;
  }
`;

const Text = styled.p`
  ${Body1};
  position: relative;
  width: 100%;

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

const Collaborate = styled.div`
  position: absolute;
  width: 37.4vw;
  height: 31.4vw;
  left: 55.4vw;
  top: 26.5vw;
  ${media.tablet} {
  }
  ${media.mobile} {
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
