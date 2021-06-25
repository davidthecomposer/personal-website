import React from "react";
// import { DesktopContext, TabletContext } from "App";
import styled from "styled-components";
// import media from "styles/media";
// import colors from "styles/Colors";
// import gsap from "gsap";
// import { Heading1 } from "styles/text";
// import { ReactComponent as DavidSigSVG } from "assets/svg/davidSig.svg";
// import { useHistory } from "react-router-dom";

const Footer: React.FC<{}> = () => {
  // const desktop = useContext(DesktopContext);
  // const tablet = useContext(TabletContext);

  return <Wrapper></Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  height: 27.3vw;
  width: calc(100% - 4vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vw 2vw;
  z-index: 1000;
  right: 0;
  background: linear-gradient(
    128.33deg,
    #2c354b 11.05%,
    rgba(44, 47, 78, 0.895521) 23.42%,
    rgba(42, 19, 90, 0.41) 90.48%
  );
`;
