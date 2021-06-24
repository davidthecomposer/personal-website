import React from "react";
import styled from "styled-components";
// import colors from "styles/Colors";
import Hero from "sections/Music/Hero";
import MediaMusic from "sections/Music/MediaMusic";
import ConcertMusic from "sections/Music/ConcertMusic";
import News from "sections/Music/News";
// import { DesktopContext } from "App";

const MusicPage: React.FC = () => {
  //   const desktop = useContext(DesktopContext);

  return (
    <Wrapper>
      <Hero />
      <MediaMusic />
      <ConcertMusic />
      <News />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #000000;
`;

export default MusicPage;
