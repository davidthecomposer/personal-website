import React, { useEffect, useRef, useReducer, useContext } from "react";
import styled from "styled-components";
import { FormLabel } from "styles/text";
import { PrimaryButtonStyle } from "styles/Buttons";
import { MobileContext } from "App";
import colors from "styles/Colors";
import media from "styles/media";
import gsap from "gsap";

const ContactForm: React.FC<{
  enter: boolean;
  topVal: string;
  leftVal: string;
  setEnter: any;
  close?: boolean;
}> = ({ enter, leftVal, topVal, setEnter, close }) => {
  const form = useRef(null);
  const mobile = useContext(MobileContext);
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

  useEffect(() => {
    if (form.current) {
      const tl = gsap.timeline();
      if (enter) {
        tl.to(form.current, { scale: 1, duration: 0 }, 0).to(
          form.current,
          { opacity: 1, y: 0, duration: 0.6 },
          0.1
        );
      } else {
        tl.to(form.current, { scale: 0, y: "100px", duration: 0 }, 0.6).to(
          form.current,
          { opacity: 0, duration: 0.6 },
          0
        );
      }
    }
  }, [enter]);

  const closeModal = (e: any) => {
    e.preventDefault();
    setEnter(!enter);
  };

  return (
    <FormModal ref={form} leftVal={leftVal} topVal={topVal} enter={enter}>
      {inputs}
      {mobile && !close && <Close onClick={closeModal}>Close</Close>}
      <SendMessage>Send Message</SendMessage>
    </FormModal>
  );
};

const FormModal = styled.form<{
  leftVal: string;
  topVal: string;
  enter: boolean;
}>`
  position: absolute;
  width: 24.7vw;
  height: 19vw;
  left: ${(props) => props.leftVal};
  top: ${(props) => props.topVal};
  padding: 3.4vw;
  background: ${colors.formSkinPurprle};
  border-radius: 0.5vw;
  opacity: 0;
  transform: scale(0);

  ${media.tablet} {
  }
  ${media.mobile} {
    width: 83.3vw;
    height: 80.5vw;
    transform: scale(1);
    left: ${(props) => (props.enter ? 0 : props.leftVal)};
    padding: 13.3vw 10.4vw 12.8vw 6.3vw;
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
    font-size: 4.8vw;
    margin-bottom: 11.1vw;
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
    width: 60.4vw;
    height: 9.7vw;
  }
  ${media.fullWidth} {
  }
`;

const SendMessage = styled.button`
  ${PrimaryButtonStyle};
  border-color: ${colors.activeTeal};
  width: 12.5vw;

  padding-left: 0.8vw;
  position: relative;
  margin-left: 12.1vw;
  ${media.tablet} {
  }
  ${media.mobile} {
    width: 48.3vw;
    height: 9.7vw;
    margin-left: 34vw;
  }
  ${media.fullWidth} {
  }
`;

const Close = styled.button`
  ${media.tablet} {
  }
  ${media.mobile} {
    ${PrimaryButtonStyle};
    position: absolute;
    width: 30.3vw;
    height: 9.7vw;
    /* bottom: 12.8vw;
    left: 6.3vw; */
    z-index: 5;
  }
  ${media.fullWidth} {
  }
`;

export default ContactForm;
