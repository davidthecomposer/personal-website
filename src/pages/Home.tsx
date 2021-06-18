import React from "react";

import styled from "styled-components";
import colors from "styles/Colors";

// import { DesktopContext } from "App";

const IndexPage: React.FC = () => {
  // const desktop = useContext(DesktopContext);

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.main`
  background: #000000;
  color: ${colors.coolPurple};
`;

export default IndexPage;
