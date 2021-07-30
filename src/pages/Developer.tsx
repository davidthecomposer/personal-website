import React, { useContext } from "react";
import styled from "styled-components";
import { MobileContext } from "App";
import { Heading1 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";
// import { DesktopContext } from "App";

const MusicPage: React.FC = () => {
  const mobile = useContext(MobileContext);

  return <Wrapper>Coming Soon</Wrapper>;
};

const Wrapper = styled.main`
  background: #000000;
  ${Heading1};
  font-size: 10vw;
  color: ${colors.dullerTeal};
  display: flex;
  text-align: center;
  min-height: 100vh;
  padding-top: 0vw;
  line-height: 100vh;
  ${media.mobile} {
  }
`;

export default MusicPage;
