import React, { useEffect, useRef, useReducer } from "react";
import styled from "styled-components";
import { FormLabel } from "styles/text";
import { PrimaryButtonStyle } from "styles/Buttons";
import colors from "styles/Colors";
import media from "styles/media";
import gsap from "gsap";

const ContactForm: React.FC<{
  enter: boolean;
  topVal: string;
  leftVal: string;
}> = ({ enter, leftVal, topVal }) => {
  const form = useRef(null);
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

  return (
    <FormModal ref={form} leftVal={leftVal} topVal={topVal}>
      {inputs}
      <SendMessage>Send Message</SendMessage>
    </FormModal>
  );
};

const FormModal = styled.form<{ leftVal: string; topVal: string }>`
  position: absolute;
  width: 24.7vw;
  height: 19vw;
  left: ${(props) => props.leftVal};
  top: ${(props) => props.topVal};
  padding: 3.4vw;
  background: ${colors.formSkinPurprle};
  border-radius: 0.5vw;
  opacity: 0;
  transform: scale(0) translateY(100px);

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
  }
  ${media.fullWidth} {
  }
`;

export default ContactForm;
