import React, { useEffect, useState, useRef } from "react";
// import { DesktopContext, TabletContext } from "App";
import styled from "styled-components";
import media from "styles/media";
import colors from "styles/Colors";
import gsap from "gsap";
import { Heading1 } from "styles/text";
import { ReactComponent as DavidSigSVG } from "assets/svg/davidSig.svg";
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
  const navLinks = useRef(null);
  const [navOpen, setNavOpen] = useState(true);
  const navIsOpen = useRef(true);
  const [initial, setInitial] = useState(true);

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
    gsap.set(line.current, { scaleY: 0 });

    const tl = gsap.timeline({ onComplete: () => setInitial(false) });

    tl.to(line.current, { scaleY: 1, duration: 0.6, ease: "power1.inOut" }, 0)
      .to(name.current, { left: 0, duration: 1.3, ease: "power1.inOut" }, 0.3)

      .to(
        myRole.current,
        { left: "1.3vw", duration: 0.8, ease: "power1.inOut" },
        0.7
      )
      .to(
        ".header__link",
        { opacity: 1, stagger: 0.15, duration: 0.4, ease: "power1.inOut" },
        1
      );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      if (navIsOpen.current) {
        gsap.to(line.current, {
          scaleY: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
          onStart: () => {
            navIsOpen.current = false;
            setNavOpen(false);
          },
        });
      }
    } else {
      gsap.to(line.current, {
        scaleY: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
        onStart: () => {
          navIsOpen.current = true;
          setNavOpen(true);
        },
      });
    }
  };

  const handleClick = () => {
    setNavOpen(true);
    navIsOpen.current = true;
  };

  return (
    <Wrapper willDisplay={display}>
      <TitleWrapper>
        <TitleContainer open={navOpen}>
          <Title ref={name}>David Campbell</Title>
        </TitleContainer>
        <Line ref={line} open={navOpen} initial={initial} />
        <RoleContainer open={navOpen}>
          <Role ref={myRole}>{role}</Role>
        </RoleContainer>
      </TitleWrapper>
      <NavLinks ref={navLinks} open={navOpen} initial={initial}>
        <Link open={navOpen} className="header__link">
          Home
        </Link>
        <Link open={navOpen} className="header__link">
          Music
        </Link>
        <Link open={navOpen} className="header__link">
          News
        </Link>
        <Link open={navOpen} className="header__link">
          About
        </Link>
        <Link open={navOpen} className="header__link">
          Connect
        </Link>
        <NavBtn onClick={handleClick} open={navOpen}>
          <DavidSig />
        </NavBtn>
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
  z-index: 1000;
  right: 0;
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
const Line = styled.div<{ open: boolean; initial: boolean }>`
  height: 4.3vw;
  border-left: 0.2vw solid ${colors.brightPurple};

  transform: scaleY(${(props) => (props.initial ? 0 : props.open ? 1 : 0)});
  opacity: 1;

  transform-origin: "50% 50%";
  margin-top: 0.8vw;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const TitleContainer = styled.div<{ open: boolean }>`
  position: relative;
  overflow: hidden;
  padding-right: 1.3vw;
  width: 38vw;
  height: 4.3vw;
  transform: scaleY(${(props) => (props.open ? 1 : 0)});
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: 0.4s;
  display: flex;
  flex-direction: column;

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

const RoleContainer = styled.div<{ open: boolean }>`
  position: relative;
  overflow: hidden;
  height: 2vw;
  padding-left: 1.3vw;
  width: 11vw;
  margin-top: 0.8vw;
  transform: scaleY(${(props) => (props.open ? 1 : 0)});
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: 0.4s;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const DavidSig = styled(DavidSigSVG)`
  width: 100%;
  height: 100%;
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
const Link = styled.a<{ open: boolean }>`
  ${Heading1}
  color: ${colors.coolWhite};
  font-size: 1.1vw;
  margin-right: 1.3vw;
  cursor: pointer;

  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;

const NavLinks = styled.div<{ open: boolean; initial: boolean }>`
  display: flex;
  width: ${(props) => (props.initial ? "25vw" : props.open ? "25vw" : "5.4vw")};
  position: relative;
  transition: opacity 0.8s, width 0.4s, border 0.6s;
  transform-origin: right;
  height: 2.5vw;
  align-items: flex-end;
  overflow: hidden;
  border: 2px solid
    ${(props) => (props.open ? colors.brightPurpleOpaque : colors.beachBlue)};
  border-radius: 10px;
  padding: 0 0 1vw 1.3vw;
  margin-top: 1vw;
  ${Link}:nth-child(even) {
    opacity: ${(props) => (props.initial ? 0 : props.open ? 1 : 0)};
    transform: scaleY(${(props) => (props.initial ? 1 : props.open ? 1 : 0)});
    z-index: ${(props) => (props.open ? 10 : 0)};
    transition: 0.2s;
    :hover {
      transform: skew(5deg, -5deg);
      color: ${colors.brightPurple};
      transition: 0.3s;
    }
  }
  ${Link}:nth-child(odd) {
    transition: 0.2s;
    opacity: ${(props) => (props.initial ? 0 : props.open ? 1 : 0)};
    transform: scaleY(${(props) => (props.initial ? 1 : props.open ? 1 : 0)});
    z-index: ${(props) => (props.open ? 10 : 0)};
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

const NavBtn = styled.button<{ open: boolean }>`
  width: 6vw;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${(props) => (props.open ? 0 : 10)};
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: none;
  border-radius: 10px;
  opacity: ${(props) => (props.open ? 0 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 0.5vw 0 0;
  color: ${colors.coolWhite};
  transition: opacity 0.6s;
  transition-delay: 0.3s;
  ${media.tablet} {
  }
  ${media.mobile} {
  }
  ${media.fullWidth} {
  }
`;
