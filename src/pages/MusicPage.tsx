import React, { useContext } from "react";
import styled from "styled-components";
import { MobileContext } from "App";
import Hero from "sections/Music/Hero";
import MediaMusic from "sections/Music/MediaMusic";
import ConcertMusic from "sections/Music/ConcertMusic";
import About from "sections/Music/About";
import News from "sections/Music/News";
import Connect from "sections/Music/Connect";
// import { DesktopContext } from "App";

const MusicPage: React.FC = () => {
  const mobile = useContext(MobileContext);

  return (
    <Wrapper>
      <Hero mobile={mobile} />
      <MediaMusic mobile={mobile} />
      <ConcertMusic mobile={mobile} />
      <News mobile={mobile} />
      <About mobile={mobile} />
      <Connect mobile={mobile} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #000000;
`;

export default MusicPage;
