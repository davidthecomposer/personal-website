import React from "react";
import styled from "styled-components";
// import colors from "styles/Colors";
import Hero from "sections/Music/Hero";
// import { DesktopContext } from "App";

const MusicPage: React.FC = () => {
  //   const desktop = useContext(DesktopContext);

  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #000000;
`;

export default MusicPage;
