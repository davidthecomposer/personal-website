import React from "react";

import styled from "styled-components";
import colors from "styles/Colors";

// import { DesktopContext } from "App";

const MusicPage: React.FC = () => {
  //   const desktop = useContext(DesktopContext);

  return <Wrapper>Music HomePage</Wrapper>;
};

const Wrapper = styled.main`
  background: ${colors.deepPurple};
`;

export default MusicPage;
