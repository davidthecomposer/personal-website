import React, { useEffect, useState, useRef } from "react";
// import { DesktopContext, TabletContext } from "App";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/Colors";
import gsap from "gsap";
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
  const name = useRef(null);
  const line = useRef(null);
  const myRole = useRef(null);

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

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(line.current, { scale: 1, duration: 0.6, ease: "power1.inOut" }, 0)
      .to(name.current, { left: 0, duration: 1.3, ease: "power1.inOut" }, 0.3)
      .to(
        myRole.current,
        { left: "1.3vw", duration: 0.8, ease: "power1.inOut" },
        0.7
      )
      .to(
        ".header__link",
        { opacity: 1, stagger: 0.2, duration: 0.4, ease: "power1.inOut" },
        1
      );
  }, []);

  return (
    <Wrapper willDisplay={display}>
      <TitleWrapper>
        <TitleContainer>
          <Title ref={name}>David Campbell</Title>
        </TitleContainer>
        <Line ref={line} />
        <RoleContainer>
          <Role ref={myRole}>{role}</Role>
        </RoleContainer>
      </TitleWrapper>
      <NavLinks>
        <Link className="header__link">Home</Link>
        <Link className="header__link">Music</Link>
        <Link className="header__link">News</Link>
        <Link className="header__link">About</Link>
        <Link className="header__link">Connect</Link>
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
  ${Heading1};
  color: ${colors.brightPurple};
  align-items: center;
  width: 58vw;
  height: 5vw;
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
const Line = styled.div`
  height: 4.3vw;
  border-left: 0.2vw solid ${colors.brightPurple};

  transform: scaleY(0);
  transform-origin: "50% 50%";
  margin-top: 0.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const TitleContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-right: 1.3vw;
  width: 38vw;
  height: 4.3vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  letter-spacing: -0.05em;
  color: ${colors.brightPurple};
  left: 100%;
`;

const RoleContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 2vw;
  padding-left: 1.3vw;
  width: 11vw;
  margin-top: 0.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const Role = styled.span`
  font-size: 2vw;
  position: absolute;
  letter-spacing: 0;
  left: -100%;
`;
const Link = styled.a`
  ${Heading1}
  color: white;
  font-size: 1.1vw;
  margin-right: 1.3vw;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
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
