import React, {
  useEffect,
  useRef,
  useReducer,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import { FormLabel, SubHeader2 } from "styles/text";
import { PrimaryButtonStyle } from "styles/Buttons";
import { MobileContext } from "App";
import colors from "styles/Colors";
import media from "styles/media";
import gsap from "gsap";

const ContactForm: React.FC<{
  enter: boolean;
  topVal: string;
  leftVal: string;
  leftValT: string;
  topValT: string;
  setEnter: any;
  close?: boolean;
}> = ({ enter, leftVal, topVal, setEnter, close, leftValT, topValT }) => {
  const form = useRef<HTMLFormElement>(null);
  const mobile = useContext(MobileContext);
  const [success, setSuccess] = useState(false);
  const inputNames = ["Name", "Email", "Project"];
  const [formData, setFormData] = useReducer(
    (
      state: { name: string; email: string; project: string },
      newState: { name: string; email: string; project: string }
    ) => ({ ...state, ...newState }),
    {
      name: "Name",
      email: "email",
      project: "project",
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
        <FormText htmlFor={`${input.toLowerCase()}`}>{input} :</FormText>
        <TextInput
          type={"text"}
          id={`${input.toLowerCase()}`}
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (form.current) {
      // let formData = new FormData(form.current);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },

        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setFormData({
            name: "Name",
            email: "email",
            project: "project",
          });
          setSuccess(true);
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <FormModal
      ref={form}
      topValT={topValT}
      leftValT={leftValT}
      leftVal={leftVal}
      topVal={topVal}
      enter={enter}
      data-netlify="true"
      name="connect-form"
      id="connect-form"
      onSubmit={handleSubmit}
    >
      <Wrapper success={success}>
        {inputs}
        {mobile && !close && <Close onClick={closeModal}>Close</Close>}
        <input type="hidden" name="form-name" value="connect-form" />
        <SendMessage>Send Message</SendMessage>
      </Wrapper>
      <SuccessMessage success={success}>
        Thanks for reaching out. <br /> I'll be in touch soon.
      </SuccessMessage>
    </FormModal>
  );
};

const FormModal = styled.form<{
  leftVal: string;
  leftValT: string;
  topVal: string;
  topValT: string;
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

  ${media.mobile} {
    width: 83.3vw;
    height: 80.5vw;
    transform: scale(1);
    left: ${(props) => (props.enter ? 0 : props.leftVal)};
    padding: 13.3vw 10.4vw 12.8vw 6.3vw;
  }
  ${media.tabletPortrait} {
    width: 345px;
    height: 333px;
    left: ${(props) => props.leftValT};
    top: ${(props) => props.topValT};
    padding: 55px 43px 53px 26px;
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

  ${media.mobile} {
    font-size: 4.8vw;
    margin-bottom: 11.1vw;
  }
  ${media.tabletPortrait} {
    font-size: 20px;
    margin-bottom: 46px;
  }
`;

const FormText = styled.label`
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
  ${media.tabletPortrait} {
    width: 250px;
    height: 40px;
  }
`;

const SendMessage = styled.button`
  ${PrimaryButtonStyle};
  border-color: ${colors.activeTeal};
  width: 12.5vw;

  padding-left: 0.8vw;
  position: relative;
  margin-left: 12.1vw;

  ${media.mobile} {
    width: 48.3vw;
    height: 9.7vw;
    margin-left: 34vw;
  }
  ${media.tabletPortrait} {
    font-size: 18px;
    width: 200px;
    height: 40px;
    margin-left: 141px;
    border-radius: 6px;
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
  ${media.tabletPortrait} {
    font-size: 18px;
    width: 125px;
    height: 40px;
  }
`;

const SuccessMessage = styled.div<{ success: boolean }>`
  ${SubHeader2}

  position: absolute;
  transform: scale(${(props) => (props.success ? 1 : 0)});
  opacity: (${(props) => (props.success ? 1 : 0)});
`;

const Wrapper = styled.div<{ success: boolean }>`
  ${SubHeader2}

  position: absolute;
  transform: scale(${(props) => (props.success ? 0 : 1)});
  opacity: (${(props) => (props.success ? 0 : 1)});
`;

export default ContactForm;
