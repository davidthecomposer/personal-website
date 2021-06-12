import React, { useEffect, useState } from "react";
// import { DesktopContext, TabletContext } from "App";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/Colors";
// import gsap from "gsap";
import { Heading1 } from "styles/text";
// import { ReactComponent as LogoDarkSVG } from "assets/svg/musicLogoDark.svg";
// import { ReactComponent as LogoLightSVG } from "assets/svg/musicLogoLight.svg";
import { useHistory } from "react-router-dom";

const Header: React.FC<{}> = () => {
  // const desktop = useContext(DesktopContext);
  // const tablet = useContext(TabletContext);
  // const wrapperRef = useRef(null);
  const history = useHistory().location;
  const [role, setRole] = useState("");
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const pathname = history.pathname;

    if (pathname) {
      if (pathname === "/") {
        setDisplay(false);
      } else if (pathname === "/music") {
        setRole("composer");
      } else {
        setRole("developer");
      }
    }
  }, [history]);

  return (
    <Wrapper willDisplay={display}>
      <TitleWrapper>
        {/* <Logo /> */}
        <Title>
          David Campbell | <Role>{role}</Role>{" "}
        </Title>
      </TitleWrapper>
      <NavLinks>
        <Link>Home</Link>
        <Link>Music</Link>
        <Link>News</Link>
        <Link>About</Link>
        <Link>Connect</Link>
      </NavLinks>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav<{ willDisplay: boolean }>`
  position: fixed;
  height: 6vw;
  width: calc(100% - 4vw);
  display: ${(props) => (props.willDisplay ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 0.5vw 2vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

// const Logo = styled(LogoDarkSVG)`
//   width: 5vw;
//   height: 5vw;
// `;

const Title = styled.h1`
  ${Heading1}
  position: relative;
  margin-left: 3.1vw;
  letter-spacing: -0.05em;
  color: ${colors.brightPurple};
`;

const Role = styled.span`
  font-size: 2vw;
  bottom: 0.7vw;
  position: relative;
  letter-spacing: 0;
`;
const Link = styled.a`
  ${Heading1}
  color: white;
  font-size: 1.1vw;
  margin-right: 1.3vw;
  cursor: pointer;
  transition: 0.3s;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const NavLinks = styled.div`
  display: flex;

  margin-top: 1vw;

  ${Link}:nth-child(even) {
    :hover {
      transform: skew(5deg, -5deg);
      color: ${colors.brightPurple};
      transition: 0.3s;
    }
  }
  ${Link}:nth-child(odd) {
    :hover {
      transform: skew(-5deg, 5deg);
      color: ${colors.brightPurple};
      transition: 0.3s;
    }
  }
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
