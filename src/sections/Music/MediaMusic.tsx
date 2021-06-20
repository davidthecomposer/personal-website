import React, { useEffect } from "react";
import styled from "styled-components";
import { Heading1, MetroHeading32 } from "styles/text";
import colors from "styles/Colors";
import media from "styles/media";

const MediaMusic: React.FC<{}> = () => {
  return (
    <Wrapper id="media-music">
      <Header>Music for Media</Header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vw;
  padding: 21.4vw 0 0 0;
  position: relative;
  box-sizing: border-box;
  /* -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden; */

  ${media.mobile} {
    width: 100%;
    height: 240vw;
    padding: 15vw 0vw 0vw 23vw;
  }
`;

const Header = styled.h2`
  ${Heading1};
  color: ${colors.brightPurple};
  margin-left: 5.6vw;
 
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
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

export default MediaMusic;
